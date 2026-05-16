"use client";

import Link from "next/link";
import { Download, ExternalLink, FileText, Monitor, Cpu, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";

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
      <section className="relative py-24 px-4 text-center text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute top-[-60px] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(0,212,245,0.08) 0%,transparent 68%)" }} />

        <div className="relative z-10 max-w-5xl mx-auto">
          <Animate type="fade-down">

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Centro de <span style={{ color: "#00D4F5" }}>Descargas</span>
            </h1>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Accede a todos nuestros instaladores, manuales y herramientas recomendadas para potenciar tu experiencia educativa.
            </p>
          </Animate>
        </div>
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
      <section className="py-20 px-4" style={{ background: "#F0F4FF" }}>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((g, gi) => (
              <Animate key={g.title} type="fade-up" delay={([0, 150, 300] as const)[gi % 3]}>
                <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 overflow-hidden border border-white/50 h-full flex flex-col group transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="px-8 py-6 flex items-center gap-4 border-b border-gray-100"
                    style={{ background: "rgba(18,19,107,0.02)" }}>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                      style={{ background: "#12136b" }}>
                      <g.icon className="w-6 h-6" style={{ color: "#00D4F5" }} />
                    </div>
                    <h2 className="font-extrabold text-lg leading-tight" style={{ color: "#12136b" }}>{g.title}</h2>
                  </div>
                  {/* Items */}
                  <div className="flex-1">
                    <ul className="divide-y divide-gray-50">
                      {g.items.map((item) => (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-8 py-4 hover:bg-blue-50/50 transition-all group/item"
                          >
                            <span className="text-sm font-medium text-gray-700 group-hover/item:text-[#12136b] transition-colors">
                              {item.label}
                            </span>
                            <div className="w-8 h-8 rounded-full bg-gray-50 group-hover/item:bg-[#84E010] flex items-center justify-center transition-all group-hover/item:text-[#0d0e52]">
                              <Download className="w-4 h-4" />
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Online tools */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.22em] mb-3" style={{ color: "#00D4F5" }}>
                Recursos en Línea
              </p>
              <h2 className="text-4xl font-extrabold" style={{ color: "#12136b" }}>Herramientas recomendadas</h2>
              <p className="mt-4 text-gray-500 text-sm max-w-lg mx-auto">Seleccionamos las mejores plataformas gratuitas y premium para complementar tus clases.</p>
            </div>
          </Animate>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {tools.map((t, i) => (
              <Animate key={t.name} type="fade-up" delay={([0, 100, 200, 300, 400] as const)[i % 5]}>
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl border border-gray-100 p-6 hover:shadow-2xl hover:border-[#00D4F5]/30 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center gap-4 h-full bg-white relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at center, rgba(0,212,245,0.03) 0%, transparent 70%)" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=128`}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-2xl object-contain shadow-md transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => { (e.target as HTMLImageElement).src = 'https://www.laclasedigital.com.ar/favicon.ico'; }}
                  />
                  <div>
                    <p className="font-extrabold text-sm mb-2 group-hover:text-[#12136b] transition-colors" style={{ color: "#12136b" }}>
                      {t.name}
                    </p>
                    <p className="text-[11px] font-medium leading-relaxed" style={{ color: "rgba(18,19,107,0.6)" }}>{t.desc}</p>
                  </div>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center overflow-hidden relative"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)`, backgroundSize: "40px 40px" }} />

        <Animate type="zoom-in">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Necesitás otro instalador o recurso?</h2>
            <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
              Si no encontraste lo que buscabas o necesitás soporte técnico especializado, estamos para ayudarte.
            </p>
            <Link
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm transition-all hover:shadow-2xl hover:-translate-y-0.5 animate-glow-pulse shadow-lg shadow-[#84E010]/20"
              style={{ background: "#84E010", color: "#0d0e52" }}
            >
              Solicitar Soporte Técnico <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </Animate>
      </section>
    </>
  );
}
