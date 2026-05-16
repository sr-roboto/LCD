"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Wrench, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";

const solutions = [
  {
    icon: Cpu, title: "Consultoría TIC", color: "#00D4F5",
    desc: "Planificación tecnológica integral para instituciones educativas. Diagnóstico, diseño de solución y hoja de ruta de implementación.",
    features: ["Diagnóstico tecnológico del aula", "Plan de infraestructura", "Selección de equipamiento", "Gestión del cambio docente"],
    href: "/contacto", cta: "Consultar",
  },
  {
    icon: BookOpen, title: "Capacitación Docente", color: "#84E010",
    desc: 'Formación certificada in-situ y virtual. Certifica con Aulas Amigas Colombia o Mimio E.E.U.U. Curso "Docente experto en TICS".',
    features: ["Talleres presenciales y virtuales", "Certificación oficial", "Material didáctico incluido", "Seguimiento post-capacitación"],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform",
    cta: "Conocer más", external: true,
  },
  {
    icon: Wrench, title: "Instalación y Soporte", color: "#00D4F5",
    desc: "Instalamos y configuramos todos los productos. Redes, cámaras de seguridad, controles de acceso y soporte continuo.",
    features: ["Instalación certificada", "Configuración de red y Wi-Fi", "Cámaras de seguridad y accesos", "Garantía extendida"],
    href: "https://docs.google.com/forms/d/e/1FAIpQLSel0qun6H-wBOJDc_yDJli_1FeqNYQV4mz_jL3mp_ZH0wSp7g/viewform",
    cta: "Ver costos", external: true,
  },
];

const partnerApps = [
  { img: "/assets/bienestardocente.png",   name: "Bienestar Docente",  desc: "Plataforma de bienestar, salud y desarrollo profesional para docentes.", href: "https://bienestardocente.com.ar/",    color: "#00D4F5" },
  { img: "/assets/pantallastactiles.png", name: "Pantallas Táctiles",  desc: "Catálogo especializado en pantallas táctiles interactivas para educación.", href: "https://pantallastactiles.com.ar/",   color: "#84E010" },
  { img: "/assets/pizarrasdigitales.png", name: "Pizarras Digitales",  desc: "Todo sobre pizarras digitales e interactivas para el aula moderna.",       href: "https://pizarrasdigitales.com.ar/",  color: "#00D4F5" },
];

export default function SolucionesView() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-4"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)", minHeight: "52vh" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute bottom-0 left-[10%] w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(0,212,245,0.07) 0%,transparent 70%)" }} />
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#84E010" }}>Lo que hacemos</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Soluciones para tu{" "}
              <span style={{ color: "#00D4F5" }}>institución</span>
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Desde la consultoría hasta la capacitación y el soporte, acompañamos todo el ciclo de transformación digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TOMi highlight ────────────────────────────────── */}
      <section className="py-12 px-4" style={{ background: "#F0F4FF" }}>
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ background: "linear-gradient(135deg,rgba(18,19,107,0.06),rgba(0,212,245,0.06))", border: "1px solid rgba(0,212,245,0.2)" }}>
              <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/tomidigital.png" alt="TOMi Digital" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: "#00D4F5" }}>Plataforma Destacada</p>
                <h2 className="text-2xl font-extrabold mb-2" style={{ color: "#12136b" }}>TOMi Digital</h2>
                <p className="text-sm text-gray-600 max-w-xl">
                  La plataforma de gamificación educativa líder en Latinoamérica. Transforma el aprendizaje con juegos interactivos, tableros y contenido curricular.
                </p>
              </div>
              <Link href="https://tomi.digital/es" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white shrink-0 transition-all hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg,#12136b,#00D4F5)" }}>
                Acceder a TOMi Digital <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </Animate>
        </div>
      </section>

      {/* ── Solutions cards ───────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#12136b" }}>Servicios</p>
              <h2 className="text-3xl font-extrabold" style={{ color: "#12136b" }}>¿Qué ofrecemos?</h2>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <Animate key={sol.title} type="fade-up" delay={([0, 100, 200] as const)[i]}>
                <div className="rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-2"
                  style={{ border: "1px solid rgba(18,19,107,0.1)", boxShadow: "0 2px 16px rgba(18,19,107,0.06)", background: "#fff" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${sol.color}22, 0 4px 24px rgba(0,0,0,0.1)`; (e.currentTarget as HTMLElement).style.borderColor = `${sol.color}55`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(18,19,107,0.06)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(18,19,107,0.1)"; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: `${sol.color}18`, border: `1.5px solid ${sol.color}44` }}>
                    <sol.icon className="w-6 h-6" style={{ color: sol.color }} />
                  </div>
                  <h3 className="text-xl font-extrabold mb-2" style={{ color: "#12136b" }}>{sol.title}</h3>
                  <p className="text-sm text-gray-500 mb-6">{sol.desc}</p>
                  <ul className="space-y-2 mb-8 flex-grow">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: sol.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={sol.href}
                    target={sol.external ? "_blank" : undefined}
                    rel={sol.external ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 mt-auto self-start"
                    style={{ background: `linear-gradient(135deg,#12136b,${sol.color})` }}>
                    {sol.cta} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ecosystem apps ────────────────────────────────── */}
      <section className="py-24 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 100%)" }}>
        <AnimatedEduBg opacity={0.10} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#84E010" }}>Nuestro Ecosistema</p>
              <h2 className="text-3xl font-extrabold text-white">Aplicaciones creadas por La Clase Digital</h2>
              <p className="text-sm mt-3 max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.45)" }}>
                Plataformas propias para complementar el ecosistema educativo en toda Latinoamérica.
              </p>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {partnerApps.map((p, i) => (
              <Animate key={p.name} type="fade-up" delay={([0, 100, 200] as const)[i]}>
                <Link href={p.href} target="_blank" rel="noopener noreferrer"
                  className="group flex flex-col gap-4 p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.09)"; (e.currentTarget as HTMLElement).style.borderColor = `${p.color}55`; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"; }}>
                  <div className="flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} className="w-14 h-14 object-contain rounded-2xl shrink-0 bg-white p-1" />
                    <div>
                      <h3 className="font-extrabold text-white">{p.name}</h3>
                      <p className="text-xs mt-0.5 leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{p.desc}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold self-start px-3 py-1.5 rounded-full"
                    style={{ background: `${p.color}22`, color: p.color, border: `1px solid ${p.color}44` }}>
                    Visitar sitio <ExternalLink className="w-3 h-3" />
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
