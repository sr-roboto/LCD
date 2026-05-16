"use client";

import { Shield, Users, Cpu, Star, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";
import VideoPlayer from "@/components/VideoPlayer";

const values = [
  { icon: Shield, title: "Distribuidores Oficiales", desc: "Únicos representantes autorizados de Mimio, eBeam, Practi-Man y THScreen en Argentina." },
  { icon: Users,  title: "Soporte Pedagógico Real", desc: "No vendemos cajas: acompañamos la implementación con capacitación in-situ y seguimiento continuo." },
  { icon: Cpu,    title: "Ecosistema Integrado",    desc: "Hardware + Software + Gamificación + Capacitación en un único proveedor de confianza." },
  { icon: Star,   title: "15 Años de Trayectoria", desc: "Más de 500 instituciones transformaron sus aulas con La Clase Digital en Argentina, Paraguay y Uruguay." },
];

const timeline = [
  { year: "2009", desc: "Fundación de La Clase Digital con el foco en pizarras interactivas." },
  { year: "2012", desc: "Expansión a Paraguay y Uruguay. Distribución oficial de Mimio." },
  { year: "2016", desc: "Lanzamiento de la plataforma TOMi Digital con gamificación educativa." },
  { year: "2019", desc: "Incorporación de simuladores médicos Practi-Man para ciencias de la salud." },
  { year: "2022", desc: "Alianza con ViewSonic para pantallas interactivas 4K y robótica STEM." },
  { year: "2024", desc: "Superamos las 500 instituciones equipadas y 10.000 aulas transformadas." },
];

const contacts = [
  { icon: MapPin, label: "Dirección", text: "CABA, Buenos Aires, Argentina" },
  { icon: Phone,  label: "Teléfono",  text: "011-4300-0057" },
  { icon: Mail,   label: "Email",     text: "info@laclasedigital.com.ar" },
];

export default function NosotrosView() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-4"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)", minHeight: "52vh" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute top-0 right-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(132,224,16,0.07) 0%,transparent 68%)" }} />
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#84E010" }}>Quiénes Somos</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              15 años transformando{" "}
              <span style={{ color: "#00D4F5" }}>la educación</span>
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Somos el ecosistema educativo más completo de Argentina. Hardware, software y capacitación docente en un solo proveedor de confianza.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Values ────────────────────────────────────────── */}
      <section className="py-24 px-4" style={{ background: "#F0F4FF" }}>
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#12136b" }}>Por qué elegirnos</p>
              <h2 className="text-3xl font-extrabold" style={{ color: "#12136b" }}>Lo que nos hace diferentes</h2>
            </div>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Animate key={v.title} type="fade-up" delay={([0, 100, 200, 300] as const)[i]}>
                <div className="bg-white rounded-2xl border p-6 flex gap-4 transition-all duration-300 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(18,19,107,0.08)", boxShadow: "0 2px 16px rgba(18,19,107,0.06)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(0,212,245,0.12)"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 16px rgba(18,19,107,0.06)"; }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,212,245,0.1)", border: "1.5px solid rgba(0,212,245,0.2)" }}>
                    <v.icon className="w-5 h-5" style={{ color: "#00D4F5" }} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "#12136b" }}>{v.title}</h3>
                    <p className="text-sm text-gray-500">{v.desc}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ──────────────────────────────────────── */}
      <section className="py-24 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 100%)" }}>
        <AnimatedEduBg opacity={0.10} />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#84E010" }}>Nuestra historia</p>
              <h2 className="text-3xl font-extrabold text-white">Una trayectoria de innovación</h2>
            </div>
          </Animate>
          <div className="relative">
            {/* línea vertical */}
            <div className="absolute left-[30px] top-0 bottom-0 w-[2px]"
              style={{ background: "linear-gradient(to bottom,#00D4F5,#84E010)" }} />
            <div className="space-y-8 pl-16">
              {timeline.map((t, i) => (
                <Animate key={t.year} type="fade-right" delay={(i * 100) as 0 | 100 | 200 | 300 | 400 | 500}>
                  <div className="relative">
                    <div className="absolute -left-[46px] w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs"
                      style={{ background: i % 2 === 0 ? "#00D4F5" : "#84E010", color: "#0d0e52" }}>
                      {t.year.slice(2)}
                    </div>
                    <p className="text-xs font-bold mb-1" style={{ color: i % 2 === 0 ? "#00D4F5" : "#84E010" }}>{t.year}</p>
                    <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>{t.desc}</p>
                  </div>
                </Animate>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Video ─────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: "#ffffff" }}>
        <div className="max-w-4xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#12136b" }}>En acción</p>
              <h2 className="text-3xl font-extrabold" style={{ color: "#12136b" }}>Mirá cómo transformamos el aula</h2>
            </div>
          </Animate>
          <Animate type="zoom-in" delay={100}>
            <VideoPlayer src="/assets/robotica-talleres.mp4" poster="/assets/home/todo-rcp.jpg" />
          </Animate>
        </div>
      </section>

      {/* ── Contact strip ─────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "#F0F4FF" }}>
        <div className="max-w-3xl mx-auto text-center">
          <Animate type="fade-up">
            <h2 className="text-2xl font-extrabold mb-8" style={{ color: "#12136b" }}>Dónde estamos</h2>
          </Animate>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {contacts.map(({ icon: Icon, label, text }) => (
              <Animate key={label} type="fade-up">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(0,212,245,0.1)", border: "1.5px solid rgba(0,212,245,0.25)" }}>
                    <Icon className="w-4 h-4" style={{ color: "#00D4F5" }} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(18,19,107,0.4)" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: "#12136b" }}>{text}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
