"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Wrench, ExternalLink } from "lucide-react";
import Animate from "@/components/Animate";

const solutions = [
  {
    icon: Cpu,
    title: "Consultoría TIC",
    desc: "Planificación tecnológica integral para instituciones educativas. Diagnóstico, diseño de solución y hoja de ruta de implementación.",
    features: [
      "Diagnóstico tecnológico del aula",
      "Plan de infraestructura",
      "Selección de equipamiento",
      "Gestión del cambio docente",
    ],
    href: "/contacto",
    cta: "Consultar",
  },
  {
    icon: BookOpen,
    title: "Capacitación Docente",
    desc: 'Formación certificada in-situ y virtual. Certifica con Aulas Amigas Colombia o Mimio E.E.U.U. Curso "Docente experto en TICS".',
    features: [
      "Talleres presenciales y virtuales",
      "Certificación oficial",
      "Material didáctico incluido",
      "Seguimiento post-capacitación",
    ],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform",
    cta: "Conocer más",
    external: true,
  },
  {
    icon: Wrench,
    title: "Instalación y Soporte",
    desc: "Instalamos y configuramos todos los productos. Redes, cámaras de seguridad, controles de acceso y soporte continuo.",
    features: [
      "Instalación certificada",
      "Configuración de red y Wi-Fi",
      "Cámaras de seguridad y accesos",
      "Garantía extendida",
    ],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform",
    cta: "Ver costos",
    external: true,
  },
];

/* Partner sites */
const partners = [
  {
    name: "Bienestar Docente",
    desc: "Plataforma de bienestar, salud y desarrollo profesional para docentes.",
    href: "https://bienestardocente.com.ar/",
    color: "#059669",
    emoji: "🧘",
  },
  {
    name: "Pantallas Táctiles",
    desc: "Catálogo especializado en pantallas táctiles interactivas para educación.",
    href: "https://pantallastactiles.com.ar/",
    color: "#2563EB",
    emoji: "🖥️",
  },
  {
    name: "Pizarras Digitales",
    desc: "Todo sobre pizarras digitales e interactivas para el aula moderna.",
    href: "https://pizarrasdigitales.com.ar/",
    color: "#7C3AED",
    emoji: "📋",
  },
];

export default function SolucionesView() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero-gradient py-20 px-4 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--brand-blue)" }}
        >
          Lo que hacemos
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Soluciones para tu Institución
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Desde la consultoría hasta la capacitación y el soporte, acompañamos
          todo el ciclo de transformación digital de tu institución.
        </p>
      </section>

      {/* TOMi Digital highlight */}
      <section className="py-12 px-4 bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div
            className="rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
            style={{ background: "linear-gradient(135deg, #1e3a8a11, #7c3aed11)" }}
          >
            <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/tomidigital.png" alt="TOMi Digital" className="w-full h-full object-contain" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#7C3AED" }}>
                Plataforma Destacada
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">TOMi Digital</h2>
              <p className="text-sm text-gray-600 max-w-xl">
                La plataforma de gamificación educativa líder en Latinoamérica. Transforma el aprendizaje
                con juegos interactivos, tableros y contenido curricular. Integrada con nuestros dispositivos.
              </p>
            </div>
            <Link
              href="https://tomi.digital/es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shrink-0 transition-all hover:shadow-xl hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
            >
              Acceder a TOMi Digital <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <Animate key={sol.title} type="fade-up" delay={i === 0 ? 0 : i === 1 ? 200 : 400}>
            <div
              className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "var(--brand-blue-light)" }}
              >
                <sol.icon className="w-6 h-6" style={{ color: "var(--brand-blue)" }} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{sol.title}</h2>
              <p className="text-sm text-gray-500 mb-6">{sol.desc}</p>
              <ul className="space-y-2 mb-8 flex-grow">
                {sol.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--brand-blue)" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={sol.href}
                target={sol.external ? "_blank" : undefined}
                rel={sol.external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: "var(--brand-blue)" }}
              >
                {sol.cta}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* Partner apps */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-blue)" }}>
              Nuestro Ecosistema
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Aplicaciones creadas por La Clase Digital
            </h2>
            <p className="text-sm text-gray-500 max-w-lg mx-auto">
              Desarrollamos nuestras propias plataformas para complementar el ecosistema educativo
              y ofrecer soluciones integrales a instituciones de toda Latinoamérica.
            </p>
            <span className="inline-flex items-center gap-1.5 mt-4 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full text-white"
                  style={{ background: "linear-gradient(135deg, var(--brand-blue), #7C3AED)" }}>
              ✦ Creadas y mantenidas por La Clase Digital
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                img: "/assets/bienestardocente.png",
                name: "Bienestar Docente",
                desc: "Plataforma de bienestar, salud y desarrollo profesional para docentes.",
                href: "https://bienestardocente.com.ar/",
                color: "#4F46E5",
                bg: "#EEF2FF",
              },
              {
                img: "/assets/pantallastactiles.png",
                name: "Pantallas Táctiles",
                desc: "Catálogo especializado en pantallas táctiles interactivas para educación.",
                href: "https://pantallastactiles.com.ar/",
                color: "#F97316",
                bg: "#FFF7ED",
              },
              {
                img: "/assets/pizarrasdigitales.png",
                name: "Pizarras Digitales",
                desc: "Todo sobre pizarras digitales e interactivas para el aula moderna.",
                href: "https://pizarrasdigitales.com.ar/",
                color: "#22C55E",
                bg: "#F0FDF4",
              },
            ].map((p) => (
              <Link
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border-2 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
                style={{ borderColor: `${p.color}44`, backgroundColor: p.bg }}
              >
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-14 h-14 object-contain rounded-2xl shrink-0"
                    style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:underline" style={{ color: p.color }}>
                      {p.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5 leading-snug">{p.desc}</p>
                  </div>
                </div>
                <span
                  className="inline-flex items-center gap-1 text-[11px] font-bold self-start px-3 py-1.5 rounded-full text-white"
                  style={{ backgroundColor: p.color }}
                >
                  Visitar sitio <ExternalLink className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
