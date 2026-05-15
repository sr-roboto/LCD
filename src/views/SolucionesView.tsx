"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Wrench, ExternalLink } from "lucide-react";
import Animate from "@/components/Animate";

const solutions = [
  {
    icon: Cpu,
    title: "Consultoria TIC",
    desc: "Planificacion tecnologica integral para instituciones educativas. Diagnostico, diseno de solucion y hoja de ruta de implementacion.",
    features: [
      "Diagnostico tecnologico del aula",
      "Plan de infraestructura",
      "Seleccion de equipamiento",
      "Gestion del cambio docente",
    ],
    href: "/contacto",
    cta: "Consultar",
  },
  {
    icon: BookOpen,
    title: "Capacitacion Docente",
    desc: 'Formacion certificada in-situ y virtual. Certifica con Aulas Amigas Colombia o Mimio E.E.U.U. Curso "Docente experto en TICS".',
    features: [
      "Talleres presenciales y virtuales",
      "Certificacion oficial",
      "Material didactico incluido",
      "Seguimiento post-capacitacion",
    ],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform",
    cta: "Conocer mas",
    external: true,
  },
  {
    icon: Wrench,
    title: "Instalacion y Soporte",
    desc: "Instalamos y configuramos todos los productos. Redes, camaras de seguridad, controles de acceso y soporte continuo.",
    features: [
      "Instalacion certificada",
      "Configuracion de red y Wi-Fi",
      "Camaras de seguridad y accesos",
      "Garantia extendida",
    ],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform",
    cta: "Ver costos",
    external: true,
  },
];

const partnerApps = [
  {
    img: "/assets/bienestardocente.png",
    name: "Bienestar Docente",
    desc: "Plataforma de bienestar, salud y desarrollo profesional para docentes.",
    href: "https://bienestardocente.com.ar/",
  },
  {
    img: "/assets/pantallastactiles.png",
    name: "Pantallas Tactiles",
    desc: "Catalogo especializado en pantallas tactiles interactivas para educacion.",
    href: "https://pantallastactiles.com.ar/",
  },
  {
    img: "/assets/pizarrasdigitales.png",
    name: "Pizarras Digitales",
    desc: "Todo sobre pizarras digitales e interactivas para el aula moderna.",
    href: "https://pizarrasdigitales.com.ar/",
  },
];

export default function SolucionesView() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden section-dark">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Animate type="fade-down">
            <div className="badge mb-6 mx-auto">Lo que hacemos</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Soluciones para tu Institucion
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto">
              Desde la consultoria hasta la capacitacion y el soporte, acompanamos
              todo el ciclo de transformacion digital de tu institucion.
            </p>
          </Animate>
        </div>
      </section>

      {/* TOMi Digital highlight */}
      <section className="py-12 px-6 section-elevated">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="card-glow p-8 flex flex-col md:flex-row items-center gap-8">
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-[var(--background)] border border-[var(--border)] p-3 flex items-center justify-center">
                <img src="/assets/tomidigital.png" alt="TOMi Digital" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <div className="badge-outline mb-2">Plataforma Destacada</div>
                <h2 className="text-2xl font-bold text-white mb-2">TOMi Digital</h2>
                <p className="text-sm text-[var(--foreground-muted)] max-w-xl">
                  La plataforma de gamificacion educativa lider en Latinoamerica. Transforma el aprendizaje
                  con juegos interactivos, tableros y contenido curricular. Integrada con nuestros dispositivos.
                </p>
              </div>
              <Link
                href="https://tomi.digital/es"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                Acceder a TOMi Digital 
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* Solutions cards */}
      <section className="py-24 px-6 section-dark">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map((sol, i) => (
            <Animate key={sol.title} type="fade-up" delay={([0, 150, 300] as const)[i]}>
              <div className="card-dark p-8 flex flex-col h-full">
                <div className="icon-container mb-6">
                  <sol.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white mb-3">{sol.title}</h2>
                <p className="text-sm text-[var(--foreground-muted)] mb-6">{sol.desc}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {sol.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[var(--foreground-muted)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--brand-emerald)] shrink-0 mt-1.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={sol.href}
                  target={sol.external ? "_blank" : undefined}
                  rel={sol.external ? "noopener noreferrer" : undefined}
                  className="btn-primary w-full justify-center"
                >
                  {sol.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* Partner apps */}
      <section className="py-24 px-6 section-elevated">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <div className="badge-outline mb-4">Nuestro Ecosistema</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Aplicaciones creadas por La Clase Digital
              </h2>
              <p className="text-[var(--foreground-muted)] max-w-lg mx-auto">
                Desarrollamos nuestras propias plataformas para complementar el ecosistema educativo
                y ofrecer soluciones integrales a instituciones de toda Latinoamerica.
              </p>
            </div>
          </Animate>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerApps.map((p, i) => (
              <Animate key={p.name} type="fade-up" delay={([0, 100, 200] as const)[i]}>
                <Link
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-glow p-6 flex flex-col gap-4 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="w-14 h-14 object-contain rounded-xl shrink-0"
                    />
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-[var(--brand-emerald)] transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-xs text-[var(--foreground-muted)] mt-1 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-emerald)]">
                    Visitar sitio 
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
