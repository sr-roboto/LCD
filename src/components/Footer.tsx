import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" /><polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" /></svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
  );
}
function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
  );
}
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  );
}

const productLinks = [
  { label: "Pizarras Digitales Portátiles", href: "/productos/pizarras-digitales-portatiles" },
  { label: "Pizarrón Digital (THScreen)", href: "/productos/pizarron-digital" },
  { label: "Pantallas Interactivas", href: "/productos/pantallas-interactivas" },
  { label: "Proyectores Interactivos", href: "/productos/proyectores-interactivos" },
  { label: "TOMI 7 – PC Docente", href: "/productos/tomi-7" },
  { label: "HDMI Inalámbrico", href: "/productos/hdmi-inalambrico" },
  { label: "Robótica y Programación", href: "/productos/robotica" },
  { label: "Laboratorios Digitales", href: "/productos/laboratorios-digitales" },
  { label: "Ciencias de la Salud / RCP", href: "/productos/ciencias-de-la-salud" },
  { label: "Mobiliario Educativo", href: "/productos/mobiliario" },
];

const serviceLinks = [
  { label: "Consultoría TICS", href: "/servicios/consultoria-tics" },
  { label: "Capacitación Docente Certificada", href: "/servicios/capacitacion-docente" },
  { label: "Instalación y Soporte Técnico", href: "/servicios/instalacion-soporte" },
];

const resourceLinks = [
  { label: "Lista de Precios", href: "https://tienda.garaged.com.ar/tecnologia-educativa/", external: true },
  { label: "Descargas (Manuales)", href: "/descargas" },
  { label: "Blog Educativo", href: "/blog" },
  { label: "Canal de Videos", href: "https://www.youtube.com/user/ondafilms/videos", external: true },
  { label: "Juegos Educativos", href: "/juegos" },
];

const ecosistemaLinks = [
  { label: "TOMi Digital", href: "https://tomi.digital", external: true },
  { label: "Bienestar Docente", href: "https://bienestardocente.com.ar/login", external: true },
  { label: "Pantallas Táctiles", href: "https://pantallastactiles.com.ar/", external: true },
  { label: "Pizarras Digitales", href: "https://pizarrasdigitales.com.ar/", external: true },
  { label: "Diplomado Dokuma", href: "http://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html", external: true },
];

const socials = [
  { icon: YoutubeIcon, href: "https://www.youtube.com/user/ondafilms/videos", label: "YouTube" },
  { icon: InstagramIcon, href: "https://instagram.com/laclasedigital", label: "Instagram" },
  { icon: TwitterIcon, href: "https://twitter.com/laclasedigital", label: "Twitter" },
  { icon: FacebookIcon, href: "https://facebook.com/laclasedigital", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-[#07111F] text-white">
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-2">
            {/* <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-[#0B2447] border border-white/10 flex items-center justify-center">
                <span className="text-[#00C9A7] font-black text-sm">LCD</span>
              </div>
              <div>
                <p className="font-black text-white text-base leading-tight">La Clase Digital</p>
                <p className="text-xs text-white/40">Ecosistema Educativo Integral</p>
              </div>
            </div> */}
            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
              Más de 20 años transformando aulas con tecnología de propósito pedagógico. Distribuidores oficiales de las marcas líderes en educación.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00C9A7]/20 flex items-center justify-center text-white/50 hover:text-[#00C9A7] transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] mb-4">Productos</h3>
            <ul className="space-y-2">
              {productLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services + Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] mb-4">Servicios</h3>
            <ul className="space-y-2 mb-7">
              {serviceLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/55 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] mb-4">Recursos</h3>
            <ul className="space-y-2">
              {resourceLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/55 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Sedes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] mb-4">Sedes</h3>
            <div className="space-y-5 text-sm text-white/60">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-xs mb-0.5">C.A.B.A. — Sede Central</p>
                  <p className="leading-relaxed">Rosario Vera Peñaloza 599<br />Zen City – Puerto Madero</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-xs mb-0.5">La Plata</p>
                  <p>635 y 7ma – Zona Aeropuerto</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-xs mb-0.5">Paraguay</p>
                  <p>+595 972 930 182</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-semibold text-xs mb-0.5">Argentina Central</p>
                  <p>011-4300-0057</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="w-4 h-4 text-[#00C9A7] shrink-0 mt-0.5" />
                <div>
                  <Link href="mailto:info@laclasedigital.com.ar" className="hover:text-white transition-colors">
                    info@laclasedigital.com.ar
                  </Link>
                </div>
              </div>
            </div>

            <h3 className="text-xs font-bold uppercase tracking-widest text-[#00C9A7] mb-3 mt-7">Ecosistema Digital</h3>
            <ul className="space-y-2">
              {ecosistemaLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-white/55 hover:text-[#00C9A7] transition-colors"
                  >
                    ↗ {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} La Clase Digital. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            <Link href="/politica-de-privacidad" className="hover:text-white/60 transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="hover:text-white/60 transition-colors">Términos</Link>
            <Link href="/mapa-del-sitio" className="hover:text-white/60 transition-colors">Mapa del sitio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
