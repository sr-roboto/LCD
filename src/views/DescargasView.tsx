"use client";

import Link from "next/link";
import { Download, ExternalLink, FileText, Monitor, Cpu, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform";

const groups = [
  {
    icon: Monitor,
    color: "#2563EB",
    title: "Instaladores TOMi v6 y TOMi Simple",
    items: [
      { label: "TOMi v6 — Instalador", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/1.%20TOMi%20v6.%20-%20Instalador.exe" },
      { label: "AdobeAIR Installer", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/2.%20AdobeAIRInstaller.exe" },
      { label: "AulasAMIGAS", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/3.%20AulasAMIGAS.exe" },
      { label: "ContenidosGratuitos", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/4.%20ContenidosGratuitos.aml" },
      { label: "Catálogo TOMi Digital (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/Plataforma%20TOMi%20Digital%20-%20Catalogo%20Comercial.pdf" },
    ],
  },
  {
    icon: FileText,
    color: "#7C3AED",
    title: "Tutoriales y Manuales",
    items: [
      { label: "15 Proyectos con Arduino (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/LIBRO%20ARDUINO%2015%20PROYECTOS.pdf" },
      { label: "50 Aplicativos — Guía Edutekno (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/50%20recursos%20tecnologicos%20-%20GUIA%20EDUTEKNO%201.pdf" },
      { label: "PDF DOKUMA (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/Dokuma-2018-Libro_compressed.pdf" },
      { label: "Crear Clase en TOMi Digital (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/fasc%C3%ADculo%2016%20TOMI.pdf" },
      { label: "Herramientas Digitales Paraguay", href: "https://sites.google.com/view/herramientasdigitalespy/p%C3%A1gina-principal" },
    ],
  },
  {
    icon: Cpu,
    color: "#0891B2",
    title: "Drivers de Pizarras",
    items: [
      { label: "Instalador y Driver THScreen (.rar)", href: "https://www.laclasedigital.com.ar/Descargas/Calibrador%20THSCREEN-%20Lite.rar" },
    ],
  },
];

const tools = [
  { name: "OpenBoard", domain: "openboard.ch", href: "https://openboard.ch/", desc: "Pizarra blanca interactiva con herramientas de anotación y diapositivas." },
  { name: "Smart Learning Suite", domain: "smarttech.com", href: "https://education.smarttech.com/", desc: "Plataforma educativa integrada de SMART para aprendizaje colaborativo." },
  { name: "Canva", domain: "canva.com", href: "https://canva.com/", desc: "Diseño gráfico online para docentes y alumnos." },
  { name: "GoConqr", domain: "goconqr.com", href: "https://www.goconqr.com/", desc: "Mapas mentales, fichas de estudio, apuntes y tests." },
  { name: "MyViewBoard", domain: "myviewboard.com", href: "https://myviewboard.com/", desc: "Plataforma de aula digital de ViewSonic." },
  { name: "Genially", domain: "genially.com", href: "https://genially.com/", desc: "Presentaciones y contenidos interactivos para clase." },
  { name: "Scratch", domain: "scratch.mit.edu", href: "https://scratch.mit.edu/", desc: "Programación visual para niños y adolescentes." },
  { name: "PhET Simulator", domain: "phet.colorado.edu", href: "https://phet.colorado.edu/", desc: "Simulaciones de ciencias y matemáticas gratuitas." },
  { name: "ThingLink", domain: "thinglink.com", href: "https://www.thinglink.com/", desc: "Imágenes y vídeos interactivos con enlaces enriquecidos." },
  { name: "Filmora", domain: "filmora.wondershare.com", href: "https://filmora.wondershare.com/", desc: "Editor de video fácil de usar para crear contenidos educativos." },
  { name: "GIMP", domain: "gimp.org", href: "https://www.gimp.org/", desc: "Editor de imágenes gratuito y profesional." },
  { name: "Inkscape", domain: "inkscape.org", href: "https://inkscape.org/", desc: "Software de vectores gráficos de calidad profesional." },
  { name: "Talk and Comment", domain: "talkandcomment.com", href: "https://talkandcomment.com/", desc: "Graba y envía notas de voz a cualquier app o sitio web." },
  { name: "Arduino IDE", domain: "arduino.cc", href: "https://www.arduino.cc/", desc: "Programación de placas Arduino para proyectos STEM." },
  { name: "Incredibox", domain: "incredibox.com", href: "https://www.incredibox.com/", desc: "Crea música online de manera intuitiva y creativa." },
];

export default function DescargasView() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero-gradient py-20 px-4 text-center">
        <Animate type="fade-down">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--brand-blue)" }}>
            Recursos y Formación
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Descargas y Cursos</h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Instaladores, manuales, herramientas y formación docente — todo en un solo lugar.
          </p>
        </Animate>
      </section>

      {/* Cursos */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Animate type="zoom-in">
            <div
              className="rounded-2xl p-8 mb-10 flex flex-col md:flex-row items-center gap-6"
              style={{ background: "linear-gradient(135deg, #1e3a8a11, #7c3aed22)", border: "2px solid #7c3aed33" }}
            >
              <div className="text-5xl shrink-0">🎓</div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">Diplomado Virtual</span>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Creatividad y Tecnología para la Innovación Educativa
                </h2>
                <p className="text-sm text-gray-600 max-w-xl">
                  Único en Latinoamérica. Herramientas pedagógicas en innovación educativa desde un aprendizaje híbrito.
                  Certifica con Aulas Amigas Colombia y Mimio E.E.U.U. Con expertos de Medellín y referentes latinoamericanos.
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {["Innovación educativa", "Creatividad", "Nuevas tecnologías", "Pedagogías alternativas", "Design Thinking", "Liderazgo docente"].map((t) => (
                    <li key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-purple-50 text-purple-700">{t}</li>
                  ))}
                </ul>
              </div>
              <Link
                href="https://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shrink-0 transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #2563EB, #7C3AED)" }}
              >
                Ver Diplomado <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </Animate>

          <Animate type="fade-up" delay={100}>
            <div className="text-center mb-8">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-blue)" }}>
                Cursos Virtuales · 17 horas c/u
              </p>
              <h3 className="text-xl font-bold text-gray-900">Cursos independientes</h3>
            </div>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Desafíos y tendencias en innovación educativa", emoji: "🚀" },
              { title: "Desarrollo de la Creatividad", emoji: "💡" },
              { title: "Diseño, Desarrollo y Gestión de Proyectos Innovadores", emoji: "📐" },
              { title: "Emprendimiento y Liderazgo en Educación", emoji: "🏆" },
              { title: "Nuevas Tecnologías en Educación", emoji: "💻" },
              { title: "Pedagogías Alternativas", emoji: "📚" },
              { title: "Procesos de Transformación Social y Comunitaria", emoji: "🤝" },
              { title: "Transformaciones institucionales y redes de aprendizaje", emoji: "🌐" },
            ].map((c, i) => (
              <Animate key={c.title} type="fade-up" delay={([0, 100, 200, 300, 0, 100, 200, 300] as const)[i]}>
                <Link
                  href="https://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html#info"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-gray-100 p-4 hover:shadow-md hover:border-blue-200 transition-all flex flex-col gap-2 h-full"
                >
                  <span className="text-2xl">{c.emoji}</span>
                  <p className="text-xs font-semibold text-gray-800 leading-snug group-hover:text-blue-600 transition-colors">{c.title}</p>
                  <span className="text-[10px] font-bold text-green-600 mt-auto">¡Inscripciones Abiertas!</span>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section> */}

      {/* Download groups */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          {groups.map((g, gi) => (
            <Animate key={g.title} type="fade-left" delay={gi === 0 ? 0 : gi === 1 ? 200 : 400}>
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 flex items-center gap-3 border-b border-gray-100"
                  style={{ backgroundColor: `${g.color}0d` }}>
                  <g.icon className="w-5 h-5" style={{ color: g.color }} />
                  <h2 className="font-bold text-gray-900">{g.title}</h2>
                </div>
                {/* Items */}
                <ul className="divide-y divide-gray-50">
                  {g.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors group"
                      >
                        <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                          {item.label}
                        </span>
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors shrink-0 ml-4" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Animate>
          ))}
        </div>
      </section>

      {/* Online tools */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--brand-blue)" }}>
                Recursos en Línea
              </p>
              <h2 className="text-2xl font-bold text-gray-900">Herramientas recomendadas</h2>
            </div>
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((t, i) => (
              <Animate key={t.name} type="fade-up" delay={([0, 100, 200, 300, 0, 100, 200, 300] as const)[i % 8]}>
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border border-gray-100 p-4 hover:shadow-lg hover:border-blue-200 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center gap-3 h-full"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=64`}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-xl object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div>
                    <p className="font-bold text-sm text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {t.name}
                    </p>
                    <p className="text-[11px] text-gray-400 leading-snug">{t.desc}</p>
                  </div>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gray-50 text-center border-t border-gray-100">
        <Animate type="zoom-in">
          <p className="text-gray-500 text-sm mb-4">¿Necesitás otro instalador o recurso?</p>
          <Link
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "var(--brand-blue)" }}
          >
            Solicitar presupuesto / soporte <ArrowRight className="w-4 h-4" />
          </Link>
        </Animate>
      </section>
    </>
  );
}
