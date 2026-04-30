import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

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
  Productos: [
    { label: "Pizarras Digitales", href: "/productos/pizarras-digitales-portatiles" },
    { label: "Pantallas Interactivas", href: "/productos/pantallas-interactivas" },
    { label: "Proyectores", href: "/productos/proyectores-interactivos" },
    { label: "Software Educativo", href: "/productos/tomi-7" },
    { label: "Accesorios", href: "/productos/mobiliario" },
  ],
  Soluciones: [
    { label: "Aulas Híbridas", href: "/soluciones" },
    { label: "Salas de Capacitacion", href: "/soluciones" },
    { label: "Auditorios", href: "/soluciones" },
    { label: "Salas de Reunion", href: "/soluciones" },
  ],
  Empresa: [
    { label: "Sobre Nosotros", href: "/nosotros" },
    { label: "Blog", href: "/blog" },
    { label: "Trabaja con Nosotros", href: "/contacto" },
  ],
  Soporte: [
    { label: "Centro de Ayuda", href: "/contacto" },
    { label: "Garantía", href: "/contacto" },
    { label: "Descargas", href: "/descargas" },
    { label: "Contacto", href: "/contacto" },
  ],
};

const socials = [
  { Icon: FacebookIcon, href: "https://facebook.com/laclasedigital", label: "Facebook" },
  { Icon: InstagramIcon, href: "https://instagram.com/laclasedigital", label: "Instagram" },
  { Icon: LinkedInIcon, href: "https://linkedin.com/company/laclasedigital", label: "LinkedIn" },
  { Icon: YoutubeIcon, href: "https://www.youtube.com/user/ondafilms/videos", label: "YouTube" },
];

export default function Footer() {
  return (
    <>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="text-xl font-bold text-white">
                  La Clase{" "}
                  <span style={{ color: "var(--brand-blue)" }}>Digital</span>
                </span>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                Mas de 15 anos transformando la educacion con tecnologia de vanguardia.
              </p>
              <ul className="space-y-3">
                {[
                  { Icon: MapPin, text: "Buenos Aires, Argentina" },
                  { Icon: Phone, text: "+54 11 1234-5678" },
                  { Icon: Mail, text: "info@laclasedigital.com.ar" },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-center gap-2.5 text-sm text-gray-400">
                    <Icon className="w-4 h-4 shrink-0 text-gray-500" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-semibold text-white mb-4">{title}</h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} La Clase Digital. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 rounded-md flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
