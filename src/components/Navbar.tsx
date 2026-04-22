"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";

const navItems = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Productos",
    href: "/productos",
    children: [
      { label: "Pizarras Digitales Portátiles", href: "/productos/pizarras-digitales-portatiles", desc: "Mimio, eBeam" },
      { label: "Pizarrón Digital", href: "/productos/pizarron-digital", desc: "THScreen, superficies interactivas" },
      { label: "Pantallas Interactivas", href: "/productos/pantallas-interactivas", desc: "ViewSonic, Tótems y mesas táctiles" },
      { label: "Proyectores Interactivos", href: "/productos/proyectores-interactivos", desc: "BenQ, Epson, ViewSonic" },
      { label: "TOMI 7 – PC Docente", href: "/productos/tomi-7", desc: "Computadora personal del docente" },
      { label: "HDMI Inalámbrico", href: "/productos/hdmi-inalambrico", desc: "ActionTec, ScreenBeam" },
      { label: "Robótica y Programación", href: "/productos/robotica", desc: "Arduino, Rasti, SIMA, Gigo" },
      { label: "Laboratorios Digitales", href: "/productos/laboratorios-digitales", desc: "Labdisc, Lab Idiomas" },
      { label: "Ciencias de la Salud", href: "/productos/ciencias-de-la-salud", desc: "Simuladores RCP, Practiman, NT3" },
      { label: "Mobiliario Educativo", href: "/productos/mobiliario", desc: "Carros porta tablets, proyección" },
    ],
  },
  {
    label: "Lista de Precios",
    href: "https://tienda.garaged.com.ar/tecnologia-educativa/",
    external: true,
  },
  {
    label: "Servicios",
    href: "/servicios",
    children: [
      { label: "Consultoría TICS", href: "/servicios/consultoria-tics", desc: "Planificación tecnológica integral" },
      { label: "Capacitación Docente", href: "/servicios/capacitacion-docente", desc: "Formación certificada in-situ" },
      { label: "Instalación y Soporte", href: "/servicios/instalacion-soporte", desc: "Redes, seguridad, puesta en marcha" },
    ],
  },
  {
    label: "Recursos",
    href: "#",
    children: [
      { label: "Descargas", href: "/descargas", desc: "Manuales, fichas técnicas y más" },
      { label: "Blog", href: "/blog", desc: "Novedades del aula del futuro" },
      { label: "Videos", href: "https://www.youtube.com/user/ondafilms/videos", desc: "Tutoriales y demos", external: true },
    ],
  },
  {
    label: "Ecosistema",
    href: "#",
    children: [
      { label: "TOMi Digital", href: "https://tomi.digital", desc: "Software de gamificación N°1", external: true },
      { label: "Bienestar Docente", href: "https://bienestardocente.com.ar/login", desc: "Plataforma de bienestar", external: true },
      { label: "Pantallas Táctiles", href: "https://pantallastactiles.com.ar/", desc: "Sitio especializado en hardware", external: true },
      { label: "Pizarras Digitales", href: "https://pizarrasdigitales.com.ar/", desc: "Catálogo de pizarras", external: true },
      { label: "Juegos Educativos", href: "/juegos", desc: "Recursos lúdicos digitales" },
    ],
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-[#0B2447] text-white text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="flex items-center gap-2 text-white/70">
            <Phone className="w-3 h-3" />
            CABA: 011-4300-0057 | Paraguay: +595 972 930 182 | Uruguay: 0598-94-422-6
          </span>
          <div className="flex items-center gap-4 text-white/70">
            <Link href="https://tomi.digital" target="_blank" className="hover:text-[#00C9A7] transition-colors">▶ Acceder a TOMi Digital</Link>
            <Link href="https://bienestardocente.com.ar/login" target="_blank" className="hover:text-[#00C9A7] transition-colors">Bienestar Docente</Link>
            <Link href="http://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html" target="_blank" className="hover:text-[#00C9A7] transition-colors font-bold">🎓 Diplomado</Link>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav
        ref={dropdownRef}
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg shadow-black/5"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="w-9 h-9 rounded-lg bg-[#0B2447] flex items-center justify-center">
                <span className="text-[#00C9A7] font-black text-sm">LCD</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-black text-[#0B2447] text-sm leading-tight tracking-tight">La Clase Digital</p>
                <p className="text-[10px] text-gray-400 leading-none">Ecosistema Educativo</p>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                          activeDropdown === item.label
                            ? "bg-[#0B2447]/8 text-[#0B2447]"
                            : "text-gray-600 hover:text-[#0B2447] hover:bg-gray-50"
                        }`}
                      >
                        {item.label}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>

                      {activeDropdown === item.label && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 overflow-hidden z-50">
                          <div className="p-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                target={child.external ? "_blank" : undefined}
                                rel={child.external ? "noopener noreferrer" : undefined}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#F4F7FC] group transition-colors"
                              >
                                <div className="w-2 h-2 rounded-full bg-[#00C9A7] mt-1.5 shrink-0 group-hover:scale-125 transition-transform" />
                                <div>
                                  <p className="text-sm font-semibold text-[#0B2447]">{child.label}</p>
                                  {child.desc && <p className="text-xs text-gray-400 mt-0.5">{child.desc}</p>}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-[#0B2447] hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              <button className="hidden lg:flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors">
                <Search className="w-4 h-4" />
              </button>
              <Link
                href="/contacto"
                className="hidden md:flex btn-primary text-sm !py-2 !px-4"
              >
                Cotizar Ahora
              </Link>
              {/* Mobile toggle */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white max-h-[80vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0B2447] hover:bg-gray-50 transition-colors"
                      >
                        {item.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`} />
                      </button>
                      {activeDropdown === item.label && (
                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-[#00C9A7]/30 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              target={child.external ? "_blank" : undefined}
                              onClick={() => setMobileOpen(false)}
                              className="block px-2 py-2 text-sm text-gray-600 hover:text-[#0B2447] transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-[#0B2447] hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <Link href="/contacto" className="btn-primary w-full justify-center text-sm">
                  Cotizar Ahora
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
