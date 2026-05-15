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
      {/* ── CTA / Contact Highlight ──────────────────────────────────────────── */}
      <section className="py-12" style={{ background: 'var(--brand-cyan)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2">¿Listo para transformar tu institución?</h2>
            <p className="text-white/90 text-lg font-medium">Contactanos hoy mismo, seguinos en redes o escribinos por WhatsApp.</p>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
            <Link href="https://wa.me/5491112345678" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ background: '#25D366' }}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
              WhatsApp
            </Link>
            <Link href="https://instagram.com/laclasedigital" target="_blank" rel="noopener noreferrer" 
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white shadow-lg transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
              <InstagramIcon className="w-5 h-5" />
              Instagram
            </Link>
            <Link href="/contacto" 
              className="flex items-center gap-2 px-6 py-3.5 rounded-full font-bold shadow-lg transition-all hover:shadow-xl hover:-translate-y-1 bg-white"
              style={{ color: 'var(--brand-navy)' }}>
              Formulario de Contacto
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer style={{ background: "var(--brand-navy-deep)", color: "white" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block mb-4">
                <span className="text-xl font-bold text-white">
                  La Clase{" "}
                  <span style={{ color: "var(--brand-cyan)" }}>Digital</span>
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
                        className="text-sm footer-link"
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
                  className="w-8 h-8 flex items-center justify-center footer-social"
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
