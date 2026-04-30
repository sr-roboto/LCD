"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Clock, CheckCircle, BookOpen, Users, Briefcase, Target } from "lucide-react";
import Animate from "@/components/Animate";

const ENROLL_URL = "https://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html#info";
const PDF_URL = "https://laclasedigital.com.ar/Cursos/laclase/IT/wp-content/uploads/2018/08/DiplomadoVirutal2020.pdf";

const tabs = [
  {
    id: "descripcion",
    label: "Descripción del Diplomado",
    icon: BookOpen,
    content: (
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
        <p>
          El <strong>Diplomado en innovación educativa y creatividad</strong> es experiencial y práctico, único en Latinoamérica.
          Recibirás nuevas herramientas pedagógicas en innovación educativa desde un aprendizaje híbrido. Vas a poder
          realizar un proyecto innovador y contarás con asesoría y acompañamiento de los expertos.
        </p>
        <p>
          Te daremos herramientas para comprender, generar apropiación e implementar de forma creativa los recursos
          y metodologías relacionadas con la innovación educativa. Desde <strong>Medellín</strong>, ciudad galardonada
          como la más innovadora del mundo, y que la UNESCO invita a garantizar la educación inclusiva, equitativa y de
          calidad, un grupo de destacados profesionales compartirán sus saberes y te acompañarán paso a paso.
        </p>
        <Link
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline text-sm"
        >
          <ExternalLink className="w-4 h-4" /> Descargar programa completo (PDF)
        </Link>
      </div>
    ),
  },
  {
    id: "plan",
    label: "Plan de Estudios",
    icon: BookOpen,
    content: (
      <ul className="space-y-2 text-sm text-gray-600">
        {[
          "Desafíos y tendencias en innovación educativa",
          "Desarrollo de la creatividad",
          "Nuevas tecnologías en educación",
          "Transformaciones institucionales y redes de aprendizaje",
          "Procesos de transformación social y comunitaria",
          "Pedagogías Alternativas",
          "Diseño, desarrollo y gestión de proyectos innovadores",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "perfil",
    label: "Perfil Ocupacional",
    icon: Briefcase,
    content: (
      <ul className="space-y-2 text-sm text-gray-600">
        {[
          "Diseñar y gestionar propuestas y estrategias para el mejoramiento de los procesos formativos desde la Innovación Educativa.",
          "Liderar estrategias de cambio a través de procesos de innovación educativa.",
          "Desarrollar proyectos de investigación educativa orientada al análisis y solución de problemáticas contextuales.",
          "Formar en su área de experticia con metodologías innovadoras.",
          "Liderar proyectos de innovación educativa con capacidades para diseñar, seleccionar y evaluar el uso de tecnologías en contextos educativos.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "dirigido",
    label: "Dirigido a:",
    icon: Users,
    content: (
      <ul className="space-y-2 text-sm text-gray-600">
        {[
          "Licenciados/as y profesionales en cualquier área con experiencia en procesos curriculares y pedagógicos.",
          "Líderes y asesores de organizaciones relacionadas con el campo de formación.",
          "Docentes, investigadores o administradores de instituciones educativas.",
          "Otros profesionales con experiencia en capacitación y educación.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Target className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
];

const courses = [
  {
    title: "Desafíos y tendencias en innovación educativa",
    img: "/assets/cursos/cursos-1.gif",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    title: "Desarrollo de la Creatividad",
    img: "/assets/cursos/curso-2.png",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    title: "Diseño, Desarrollo y Gestión de Proyectos Innovadores",
    img: "/assets/cursos/curso-3.png",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    title: "Emprendimiento y Liderazgo en Educación",
    img: "/assets/cursos/curso-4.png",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    title: "Nuevas Tecnologías en Educación",
    img: "/assets/cursos/curso-5.png",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    title: "Pedagogías Alternativas",
    img: "/assets/cursos/curso-6.png",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    title: "Procesos de Transformación Social y Comunitaria",
    img: "/assets/cursos/curso-7.png",
    color: "#2563EB",
    bg: "#EFF6FF",
  },
  {
    title: "Transformaciones institucionales y redes de aprendizaje",
    img: "/assets/cursos/curso-8.png",
    color: "#059669",
    bg: "#ECFDF5",
  },
];

const workshops = [
  {
    title: "Desarrollo de la Creatividad",
    img: "/assets/cursos/taller-1.png",
    topics: [
      "¿Qué es la creatividad?",
      "¿Cómo potenciar la creatividad?",
      "Pensamiento convergente y divergente",
      "Herramientas para el desarrollo de la creatividad",
    ],
  },
  {
    title: "Procesos Creativos e Innovadores",
    img: "/assets/cursos/taller-2.png",
    topics: [
      "Retos del siglo XXI",
      "¿Qué es innovar?",
      "Metodologías Activas",
      "Metodología Design Thinking",
    ],
  },
  {
    title: "Didácticas para la Educación del Futuro",
    img: "/assets/cursos/taller-3.png",
    topics: [
      "Nuevas tendencias en la educación",
      "Metodologías Activas innovadoras",
      "Flipped Classroom",
    ],
  },
  {
    title: "Recursos Digitales para la Innovación Educativa",
    img: "/assets/cursos/taller-4.png",
    topics: [
      "Retos del siglo XXI",
      "Educación Digital",
      "Herramientas digitales para la innovación",
    ],
  },
];

export default function CursosView() {
  const [activeTab, setActiveTab] = useState("descripcion");

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="relative py-20 px-4 text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2444 50%, #0f3460 100%)" }}
      >
        {/* Network grid background */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }} />

        <div className="relative max-w-5xl mx-auto">
          {/* Partner logos */}
          <Animate type="fade-down" delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl">
                <span className="text-cyan-400 font-bold text-lg">DOKUMA</span>
                <span className="text-gray-300 text-xs">Creatividad y Tecnología</span>
              </div>
              {["TOMi", "THScreen", "Rasti"].map((b) => (
                <span key={b} className="bg-white/10 text-white/80 px-3 py-1.5 rounded-lg text-sm font-semibold">
                  {b}
                </span>
              ))}
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Animate type="fade-right">
              <div>
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">
                  Distribuidor Oficial de Dokuma Creatividad y Tecnología
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
                  Creatividad y Tecnología<br />
                  <span className="text-cyan-400">para la Innovación</span>
                </h1>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  La Clase Digital presenta sus programas de formación virtual. Herramientas pedagógicas únicas en Latinoamérica
                  para la transformación digital de las aulas.
                </p>
                <p className="text-white/60 text-sm mb-6">📞 0810-333-4878</p>
                <Link
                  href={ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:shadow-2xl hover:-translate-y-0.5 animate-glow-pulse"
                  style={{ backgroundColor: "#22C55E" }}
                >
                  ¡Inscripciones Abiertas!
                </Link>
              </div>
            </Animate>

            {/* Stats box */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "120h", label: "Duración total", color: "#22C55E" },
                { value: "17h", label: "Por curso virtual", color: "#38BDF8" },
                { value: "8", label: "Cursos virtuales", color: "#A78BFA" },
                { value: "4", label: "Talleres prácticos", color: "#FB923C" },
              ].map((s, i) => (
                <Animate key={s.label} type="zoom-in" delay={([100, 200, 300, 400] as const)[i]}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center h-full">
                    <p className="text-3xl font-extrabold mb-1" style={{ color: s.color }}>{s.value}</p>
                    <p className="text-gray-400 text-xs">{s.label}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DIPLOMADO ────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Hero image strip */}
          <Animate type="zoom-in">
            <div
              className="rounded-2xl overflow-hidden mb-8 flex flex-col md:flex-row items-stretch min-h-[180px]"
              style={{ background: "linear-gradient(135deg, #0a1628, #1a3a6e)" }}
            >
              <div className="flex-1 p-8 flex flex-col justify-center">
                <p className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-2">Diplomado virtual en:</p>
                <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-snug">
                  Innovación Educativa y Creatividad
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center gap-3 p-8 border-l border-white/10">
                <div className="flex items-center gap-2 text-white">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold">Duración: 120 horas</span>
                </div>
                <Link
                  href={ENROLL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-lg font-bold text-sm text-white transition-all hover:opacity-90 animate-glow-pulse"
                  style={{ backgroundColor: "#22C55E" }}
                >
                  ¡Inscripciones Abiertas!
                </Link>
                <Link
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-300 hover:underline flex items-center gap-1"
                >
                  <ExternalLink className="w-3 h-3" /> Ver programa completo (PDF)
                </Link>
              </div>
            </div>
          </Animate>

          {/* Tabs */}
          <Animate type="fade-up" delay={200}>
            <div className="border-b border-gray-200 mb-6">
              <nav className="flex flex-wrap gap-0 -mb-px">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-5 py-3 text-xs font-bold uppercase tracking-wide border-b-2 transition-colors ${
                      activeTab === tab.id
                        ? "border-blue-600 text-blue-600"
                        : "border-transparent text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </Animate>

          {/* Tab content */}
          <div className="min-h-[160px]">
            <Animate key={activeTab} type="fade-up" threshold={0}>
              {tabs.find((t) => t.id === activeTab)?.content}
            </Animate>
          </div>
        </div>
      </section>

      {/* ── CURSOS VIRTUALES ─────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
                Cursos Virtuales · 17 horas c/u
              </p>
              <h2 className="text-2xl font-extrabold text-gray-900">Cursos independientes</h2>
              <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">
                Podés cursarlos de forma independiente o como parte del Diplomado completo.
              </p>
            </div>
          </Animate>

          {/* Top 4 — light bg */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {courses.slice(0, 4).map((c, i) => (
              <Animate key={c.title} type="fade-up" delay={([0, 100, 200, 300] as const)[i]}>
                <div
                  className="rounded-2xl p-5 flex flex-col items-center text-center gap-3 border border-gray-100 hover:shadow-md transition-all h-full"
                  style={{ backgroundColor: c.bg }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} className="h-16 w-16 object-contain" />
                  <p className="text-xs font-bold leading-snug mt-2" style={{ color: c.color }}>{c.title}</p>
                  <Link
                    href={ENROLL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-[10px] font-bold px-3 py-1.5 rounded-lg text-white"
                    style={{ backgroundColor: "#22C55E" }}
                  >
                    ¡Inscripciones Abiertas!
                  </Link>
                </div>
              </Animate>
            ))}
          </div>

          {/* Bottom 4 — dark bg */}
          <Animate type="fade-up" delay={400}>
            <div
              className="rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4"
              style={{ background: "linear-gradient(135deg, #0d2444, #1a3a6e)" }}
            >
              {courses.slice(4).map((c) => (
                <div key={c.title} className="flex flex-col items-center text-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.img} alt={c.title} className="h-16 w-16 object-contain" />
                  <p className="text-xs font-bold text-white leading-snug mt-2">{c.title}</p>
                  <Link
                    href={ENROLL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto text-[10px] font-bold px-3 py-1.5 rounded-lg text-white"
                    style={{ backgroundColor: "#22C55E" }}
                  >
                    ¡Inscripciones Abiertas!
                  </Link>
                </div>
              ))}
            </div>
          </Animate>
        </div>
      </section>

      {/* ── TALLERES ─────────────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div
              className="text-center py-4 mb-10 rounded-xl"
              style={{ backgroundColor: "#2563EB" }}
            >
              <h2 className="text-2xl font-extrabold text-white tracking-wide uppercase">Talleres</h2>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 gap-6">
            {workshops.map((w, i) => (
              <Animate key={w.title} type={i % 2 === 0 ? "fade-right" : "fade-left"} delay={i < 2 ? 100 : 300}>
                <div
                  className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all h-full"
                >
                  {/* Header */}
                  <div
                    className="px-6 py-4 flex items-center gap-4"
                    style={{ backgroundColor: i % 2 === 0 ? "#EFF6FF" : "#F0FDF4" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.img} alt={w.title} className="h-12 w-12 object-contain shrink-0" />
                    <h3 className="font-bold text-gray-900 text-sm">
                      <span className="text-blue-600 font-extrabold block mb-1">TALLER: </span>
                      {w.title}
                    </h3>
                  </div>
                  {/* Topics */}
                  <div className="px-6 py-4">
                    <ul className="space-y-2">
                      {w.topics.map((t) => (
                        <li key={t} className="flex items-center gap-2 text-sm text-blue-700">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={ENROLL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex text-[11px] font-bold px-4 py-2 rounded-lg text-white animate-glow-pulse"
                      style={{ backgroundColor: "#22C55E" }}
                    >
                      ¡Inscripciones Abiertas!
                    </Link>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      <section
        className="py-16 px-4 text-center text-white"
        style={{ background: "linear-gradient(135deg, #0a1628, #1a3a6e)" }}
      >
        <Animate type="zoom-in">
          <h2 className="text-2xl font-extrabold mb-3">¿Listo para transformar tu práctica educativa?</h2>
          <p className="text-gray-300 text-sm mb-6 max-w-md mx-auto">
            Inscribite al Diplomado o elegí el curso que más te interesa. Formación virtual, única en Latinoamérica.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href={ENROLL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 animate-glow-pulse"
              style={{ backgroundColor: "#22C55E" }}
            >
              ¡Inscribirme ahora!
            </Link>
            <Link
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> Ver programa (PDF)
            </Link>
          </div>
        </Animate>
      </section>
    </>
  );
}
