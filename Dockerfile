# Etapa 1: Dependencias
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable pnpm && pnpm i --frozen-lockfile

# Etapa 2: Construcción
# Etapa 2: Construcción
FROM node:20-alpine AS builder
# Prisma requiere openssl y compatibilidad de libc en Alpine para ejecutarse
RUN apk add --no-cache openssl libc6-compat
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Generar Prisma Client
RUN npx prisma generate
# Compilar Next.js
RUN corepack enable pnpm && pnpm build

# Etapa 3: Producción (Runner)
FROM node:20-alpine AS runner
# Prisma también requiere esto en producción
RUN apk add --no-cache openssl libc6-compat
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar archivos generados por standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Copiar el esquema de Prisma y su configuración para poder correr comandos (db push) en producción
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/prisma.config.ts ./
USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Iniciar server standalone
CMD ["node", "server.js"]
