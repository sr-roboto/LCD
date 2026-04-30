'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Users, Cpu, Star } from 'lucide-react';
import { brands } from '@/lib/data';
import ProductsCarousel from '@/components/ProductsCarousel';
import Animate from '@/components/Animate';

const differentiators = [
  {
    icon: ShieldCheck,
    title: 'Distribuidores Oficiales',
    desc: 'Únicos representantes autorizados de Mimio, eBeam, Practi-Man y THScreen en Argentina.',
  },
  {
    icon: Users,
    title: 'Soporte Pedagógico Real',
    desc: 'No vendemos cajas: acompañamos la implementación con capacitación in-situ y seguimiento.',
  },
  {
    icon: Cpu,
    title: 'Ecosistema Integrado',
    desc: 'Hardware + Software + Gamificación (TOMi) + Capacitación en un único proveedor de confianza.',
  },
  {
    icon: Star,
    title: '15 Años de Trayectoria',
    desc: 'Más de 2.000 instituciones transformaron sus aulas con La Clase Digital en Argentina, Paraguay y Uruguay.',
  },
];

/* ─── Brands marquee (infinite scroll) ─────────────────────── */
function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-10 bg-white border-b border-gray-100 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
        Marcas oficiales que distribuimos
      </p>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <div key={i} className="mx-10 flex items-center shrink-0">
              <span className="text-sm font-bold text-gray-300 hover:text-gray-500 transition-colors duration-300 cursor-default tracking-tight whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Component ─────────────────────────────────────────────── */
export default function LandingView() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative page-hero-gradient pt-20 pb-16 px-4 overflow-hidden">
        {/* Animated blobs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div className="absolute top-0 left-[8%] w-80 h-80 rounded-full bg-blue-100/70 blur-3xl animate-blob" />
          <div className="absolute top-16 right-[5%] w-64 h-64 rounded-full bg-indigo-100/60 blur-3xl animate-blob animation-delay-2" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 rounded-full bg-sky-100/50 blur-3xl animate-blob animation-delay-4" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200 bg-white text-sm text-blue-600 mb-8 shadow-sm font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse bg-blue-500" />
            Más de 15 años transformando aulas
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="block"
            >
              Transformamos la{' '}
              <span style={{ color: 'var(--brand-blue)' }}>educación</span>
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="block"
            >
              con{' '}
              <span style={{ color: 'var(--brand-green)' }}>tecnología.</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.42, duration: 0.5 }}
            className="text-lg text-gray-500 max-w-xl mx-auto mb-10"
          >
            Distribuidores oficiales de pizarras digitales, pantallas
            interactivas y simuladores médicos en Argentina, Paraguay y Uruguay.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Link
              href="/contacto"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: 'var(--brand-blue)' }}
              onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor =
                'var(--brand-blue-hover)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = 'var(--brand-blue)')
              }
            >
              Contactanos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="https://www.youtube.com/user/ondafilms/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
            >
              <Play className="w-4 h-4" /> Ver Video
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Brands marquee ──────────────────────────────────── */}
      <BrandsMarquee />

      {/* ── Video ────────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <Animate type="zoom-in">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video mb-6">
              <iframe
                src="https://www.youtube.com/embed/CItDjMo1snI?rel=0&modestbranding=1"
                title="La Clase Digital — Vista previa del aula digital interactiva"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="text-center">
              <Link
                href="https://www.youtube.com/user/ondafilms/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: '#FF0000' }}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Ver más videos en YouTube
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Products ────────────────────────────────────────── */}
      <ProductsCarousel />

      {/* ── Instituciones ────────────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <Animate type="fade-up">
            <p
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--brand-blue)' }}
            >
              Nuestros Clientes
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Instituciones que confían en nosotros
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
              Más de 500 instituciones de Argentina, Paraguay y Uruguay
              eligieron La Clase Digital para transformar sus aulas.
            </p>
          </Animate>
          <Animate type="zoom-in" delay={200}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/CLIENTESWEB-nuevo.png"
              alt="Instituciones clientes de La Clase Digital"
              className="w-full max-w-4xl mx-auto object-contain rounded-2xl shadow-sm"
            />
          </Animate>
        </div>
      </section>

      {/* ── Plataformas destacadas ──────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-10">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: 'var(--brand-blue)' }}
              >
                Ecosistema Digital
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                Plataformas de nuestro ecosistema
              </h2>
            </div>
          </Animate>

          {/* TOMi — destacado */}
          <Animate type="zoom-in" delay={100}>
            <Link
              href="https://tomi.digital/es"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center gap-6 rounded-2xl p-7 mb-5 transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a11, #7c3aed22)',
                border: '2px solid #7c3aed33',
              }}
            >
              <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/tomidigital.png"
                  alt="TOMi Digital"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">
                  Plataforma educativa
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  TOMi Digital
                </h3>
                <p className="text-sm text-gray-500">
                  La plataforma de gamificación educativa líder en
                  Latinoamérica. Juegos interactivos, tableros y contenido
                  curricular integrados con nuestros dispositivos.
                </p>
              </div>
              <span
                className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white animate-glow-pulse"
                style={{
                  background: 'linear-gradient(135deg, #2563EB, #7C3AED)',
                }}
              >
                Ir a TOMi Digital →
              </span>
            </Link>
          </Animate>

          {/* 3 partner apps — creadas por La Clase Digital */}
          <Animate type="fade-up" delay={200}>
            <div className="mb-3">
              <span
                className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                style={{
                  background:
                    'linear-gradient(135deg, var(--brand-blue), #7C3AED)',
                }}
              >
                ✦ Aplicaciones creadas por La Clase Digital
              </span>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                img: '/assets/bienestardocente.png',
                name: 'Bienestar Docente',
                desc: 'Plataforma de bienestar, salud y desarrollo profesional para docentes.',
                href: 'https://bienestardocente.com.ar/',
                color: '#4F46E5',
                bg: '#EEF2FF',
              },
              {
                img: '/assets/pantallastactiles.png',
                name: 'Pantallas Táctiles',
                desc: 'Catálogo especializado en pantallas táctiles interactivas para educación.',
                href: 'https://pantallastactiles.com.ar/',
                color: '#F97316',
                bg: '#FFF7ED',
              },
              {
                img: '/assets/pizarrasdigitales.png',
                name: 'Pizarras Digitales',
                desc: 'Todo sobre pizarras digitales e interactivas para el aula moderna.',
                href: 'https://pizarrasdigitales.com.ar/',
                color: '#22C55E',
                bg: '#F0FDF4',
              },
            ].map((s, i) => (
              <Animate
                key={s.name}
                type="fade-up"
                delay={([300, 400, 500] as const)[i]}
              >
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border-2 p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-4 h-full"
                  style={{ borderColor: `${s.color}33`, backgroundColor: s.bg }}
                >
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-12 h-12 object-contain rounded-xl shrink-0"
                      style={{
                        filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.12))',
                      }}
                    />
                    <div>
                      <p
                        className="font-bold text-sm group-hover:underline"
                        style={{ color: s.color }}
                      >
                        {s.name}
                      </p>
                      <p className="text-xs text-gray-500 leading-snug mt-0.5">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-[11px] font-bold self-start px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: s.color }}
                  >
                    Visitar sitio →
                  </span>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por qué elegirnos ───────────────────────────────── */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: 'var(--brand-blue)' }}
              >
                Por qué elegirnos
              </p>
              <h2 className="text-3xl font-bold text-gray-900">
                No somos un proveedor más
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm">
                El único ecosistema educativo que combina hardware oficial,
                software de gamificación y acompañamiento pedagógico en un solo
                lugar.
              </p>
            </div>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d, i) => (
              <Animate
                key={d.title}
                type="fade-up"
                delay={([0, 200, 300, 400] as const)[i]}
              >
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors"
                    style={{ backgroundColor: 'var(--brand-blue-light)' }}
                  >
                    <d.icon
                      className="w-5 h-5 transition-colors"
                      style={{ color: 'var(--brand-blue)' }}
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm">
                    {d.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
