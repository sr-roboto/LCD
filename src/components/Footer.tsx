'use client';

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight, MessageCircle } from "lucide-react";

/* ── Social icons ── */
function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="#111" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}

/* ── Link data ── */
const footerLinks = {
  Soluciones: [
    { label: "Pantallas Táctiles", href: "https://pantallastactiles.com.ar/" },
    { label: "Pizarras Digitales", href: "https://pizarrasdigitales.com.ar/" },
    { label: "Robótica Educativa", href: "https://www.centrodeinnovacioneducativa.com.ar/blog" },
    { label: "Juegos Interactivos", href: "/juegos" },
    { label: "Simuladores Médicos (RCP)", href: "https://sites.google.com/view/elementosrcp/inicio" },
  ],
  Empresa: [
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Blog y Recursos", href: "/blog" },
    { label: "Contacto", href: "/contacto" },
  ],
};

const socials = [
  { Icon: InstagramIcon, href: "https://instagram.com/laclasedigital", label: "Instagram", isMain: true },
  { Icon: FacebookIcon, href: "https://facebook.com/laclasedigital", label: "Facebook" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/company/laclasedigital", label: "LinkedIn" },
  { Icon: YoutubeIcon, href: "https://www.youtube.com/user/ondafilms/videos", label: "YouTube" },
];

export default function Footer() {
  return (
    <>
      <footer style={{ background: "var(--brand-navy-deep)", color: "white" }}>

        {/* Main Footer Body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

            {/* Brand & Socials (Col span 4) */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-block mb-6">
                <span className="text-2xl font-black text-white tracking-tight">
                  La Clase{" "}
                  <span style={{ color: "var(--brand-cyan)" }}>Digital</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                El único ecosistema educativo que integra hardware, software y acompañamiento docente constante en toda la región.
              </p>

              <div className="mb-8">
                <p className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Síguenos en nuestras redes</p>
                <div className="flex items-center gap-4">
                  {socials.map(({ Icon, href, label, isMain }) => (
                    <Link
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={`flex items-center justify-center transition-all rounded-full 
                        ${isMain ? 'w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white shadow-lg hover:scale-110' : 'w-10 h-10 bg-white/10 text-white hover:bg-white/20'}`}
                    >
                      <Icon className={isMain ? "w-6 h-6" : "w-5 h-5"} />
                    </Link>
                  ))}
                </div>
              </div>

              <ul className="space-y-4">
                {[
                  { Icon: MapPin, text: "Buenos Aires, Argentina" },
                  { Icon: Phone, text: "+54 11 1234-5678" },
                  { Icon: Mail, text: "info@laclasedigital.com.ar" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                    <Icon className="w-5 h-5 text-[var(--brand-cyan)]" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Link columns (Col span 4) */}
            <div className="lg:col-span-4 flex justify-between md:justify-around gap-6">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <h3 className="text-sm font-bold text-white mb-5 uppercase tracking-wider">{title}</h3>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-400 hover:text-[var(--brand-cyan)] transition-colors inline-block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* SEO Block (Col span 4) */}
            <div className="lg:col-span-4 ">
              <h3 className="text-sm font-bold text-[var(--brand-lime)] mb-3">Especialistas en Tecnología Educativa</h3>
              <p className="text-xs text-gray-400 leading-relaxed text-justify">
                Distribuidores oficiales de las principales marcas del mercado para instituciones, escuelas y empresas.
                Ofrecemos <strong className="font-medium text-gray-300">Pantallas Táctiles, Pantallas Interactivas (Samsung, Viewsonic, MaxHub, i3, LG, THScreen), Pizarras Digitales, Proyectores</strong> y soluciones de <strong className="font-medium text-gray-300">Robótica Educativa</strong> (Rasti, Mis Ladrillos).
                <br /><br />
                Pioneros en <strong className="font-medium text-gray-300">Pensamiento Computacional, Programar Desconectado</strong>, y gamificación escolar con <strong className="font-medium text-gray-300">SIMA, TOMI, PleiQ</strong>.
                Además, somos expertos en equipamiento para ciencias y medicina: <strong className="font-medium text-gray-300">Esqueletos, Huesos, Columnas, Maquetas, Simuladores DEA, RCP, Practiman, Prestan y Torsos RCP</strong>.
                <br /><br />
                Contamos con servicios de <strong className="font-medium text-gray-300">Alquiler de Notebooks, Carros Portanotebooks, Mesas Táctiles, Tótems, Videojuegos Publicitarios y Capacitación Docente</strong> permanente.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 font-medium">
              © {new Date().getFullYear()} La Clase Digital. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Términos y Condiciones</Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-white transition-colors">Políticas de Privacidad</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
