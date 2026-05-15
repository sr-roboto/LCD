"use client";

import Link from "next/link";
import { Download, ExternalLink, FileText, Monitor, Cpu, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";

const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform";

const groups = [
  {
    icon: Monitor,
    title: "Instaladores TOMi v6 y TOMi Simple",
    items: [
      { label: "TOMi v6 - Instalador", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/1.%20TOMi%20v6.%20-%20Instalador.exe" },
      { label: "AdobeAIR Installer", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/2.%20AdobeAIRInstaller.exe" },
      { label: "AulasAMIGAS", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/3.%20AulasAMIGAS.exe" },
      { label: "ContenidosGratuitos", href: "https://www.laclasedigital.com.ar/software_pizarras/SOFT.%20TOMI%20V6/4.%20ContenidosGratuitos.aml" },
      { label: "Catalogo TOMi Digital (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/Plataforma%20TOMi%20Digital%20-%20Catalogo%20Comercial.pdf" },
    ],
  },
  {
    icon: FileText,
    title: "Tutoriales y Manuales",
    items: [
      { label: "15 Proyectos con Arduino (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/LIBRO%20ARDUINO%2015%20PROYECTOS.pdf" },
      { label: "50 Aplicativos - Guia Edutekno (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/50%20recursos%20tecnologicos%20-%20GUIA%20EDUTEKNO%201.pdf" },
      { label: "PDF DOKUMA (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/Dokuma-2018-Libro_compressed.pdf" },
      { label: "Crear Clase en TOMi Digital (PDF)", href: "https://www.laclasedigital.com.ar/Descargas/fasc%C3%ADculo%2016%20TOMI.pdf" },
      { label: "Herramientas Digitales Paraguay", href: "https://sites.google.com/view/herramientasdigitalespy/p%C3%A1gina-principal" },
    ],
  },
  {
    icon: Cpu,
    title: "Drivers de Pizarras",
    items: [
      { label: "Instalador y Driver THScreen (.rar)", href: "https://www.laclasedigital.com.ar/Descargas/Calibrador%20THSCREEN-%20Lite.rar" },
    ],
  },
];

const tools = [
  { name: "OpenBoard", domain: "openboard.ch", href: "https://openboard.ch/", desc: "Pizarra blanca interactiva con herramientas de anotacion y diapositivas." },
  { name: "Smart Learning Suite", domain: "smarttech.com", href: "https://education.smarttech.com/", desc: "Plataforma educativa integrada de SMART para aprendizaje colaborativo." },
  { name: "Canva", domain: "canva.com", href: "https://canva.com/", desc: "Diseno grafico online para docentes y alumnos." },
  { name: "GoConqr", domain: "goconqr.com", href: "https://www.goconqr.com/", desc: "Mapas mentales, fichas de estudio, apuntes y tests." },
  { name: "MyViewBoard", domain: "myviewboard.com", href: "https://myviewboard.com/", desc: "Plataforma de aula digital de ViewSonic." },
  { name: "Genially", domain: "genially.com", href: "https://genially.com/", desc: "Presentaciones y contenidos interactivos para clase." },
  { name: "Scratch", domain: "scratch.mit.edu", href: "https://scratch.mit.edu/", desc: "Programacion visual para ninos y adolescentes." },
  { name: "PhET Simulator", domain: "phet.colorado.edu", href: "https://phet.colorado.edu/", desc: "Simulaciones de ciencias y matematicas gratuitas." },
  { name: "ThingLink", domain: "thinglink.com", href: "https://www.thinglink.com/", desc: "Imagenes y videos interactivos con enlaces enriquecidos." },
  { name: "Filmora", domain: "filmora.wondershare.com", href: "https://filmora.wondershare.com/", desc: "Editor de video facil de usar para crear contenidos educativos." },
  { name: "GIMP", domain: "gimp.org", href: "https://www.gimp.org/", desc: "Editor de imagenes gratuito y profesional." },
  { name: "Inkscape", domain: "inkscape.org", href: "https://inkscape.org/", desc: "Software de vectores graficos de calidad profesional." },
  { name: "Talk and Comment", domain: "talkandcomment.com", href: "https://talkandcomment.com/", desc: "Graba y envia notas de voz a cualquier app o sitio web." },
  { name: "Arduino IDE", domain: "arduino.cc", href: "https://www.arduino.cc/", desc: "Programacion de placas Arduino para proyectos STEM." },
  { name: "Incredibox", domain: "incredibox.com", href: "https://www.incredibox.com/", desc: "Crea musica online de manera intuitiva y creativa." },
];

export default function DescargasView() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden section-dark">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Animate type="fade-down">
            <div className="badge mb-6 mx-auto">Recursos</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Descargas</h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto">
              Instaladores, manuales, herramientas - todo en un solo lugar.
            </p>
          </Animate>
        </div>
      </section>

      {/* Download groups */}
      <section className="py-24 px-6 section-elevated">
        <div className="max-w-5xl mx-auto space-y-8">
          {groups.map((g, gi) => (
            <Animate key={g.title} type="fade-up" delay={([0, 150, 300] as const)[gi]}>
              <div className="card-dark overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 flex items-center gap-3 border-b border-[var(--border)] bg-[var(--background)]">
                  <div className="icon-container">
                    <g.icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-semibold text-white">{g.title}</h2>
                </div>
                {/* Items */}
                <ul className="divide-y divide-[var(--border)]">
                  {g.items.map((item) => (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between px-6 py-4 hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-sm text-[var(--foreground-muted)] group-hover:text-[var(--brand-emerald)] transition-colors">
                          {item.label}
                        </span>
                        <Download className="w-4 h-4 text-[var(--foreground-subtle)] group-hover:text-[var(--brand-emerald)] transition-colors shrink-0 ml-4" />
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
      <section className="py-24 px-6 section-dark">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-12">
              <div className="badge-outline mb-4 mx-auto">Recursos en Linea</div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">Herramientas recomendadas</h2>
            </div>
          </Animate>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((t, i) => (
              <Animate key={t.name} type="fade-up" delay={([0, 50, 100, 150, 200] as const)[i % 5]}>
                <Link
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-glow p-4 flex flex-col items-center text-center gap-3 h-full transition-all hover:-translate-y-1"
                >
                  <img
                    src={`https://www.google.com/s2/favicons?domain=${t.domain}&sz=64`}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-xl object-contain"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <div>
                    <p className="font-semibold text-sm text-white group-hover:text-[var(--brand-emerald)] transition-colors mb-1">
                      {t.name}
                    </p>
                    <p className="text-[10px] text-[var(--foreground-subtle)] leading-snug">{t.desc}</p>
                  </div>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 section-elevated">
        <div className="max-w-4xl mx-auto text-center">
          <Animate type="fade-up">
            <p className="text-[var(--foreground-muted)] mb-6">Necesitas otro instalador o recurso?</p>
            <Link
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              Solicitar presupuesto / soporte 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Animate>
        </div>
      </section>
    </>
  );
}
