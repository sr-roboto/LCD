"use client";

import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";

export default function ClientesView() {
  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-4"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)", minHeight: "45vh" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(0,212,245,0.08) 0%,transparent 68%)" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <Animate type="fade-down">
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#84E010" }}>
              Trayectoria y Confianza
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Instituciones que <span style={{ color: "#00D4F5" }}>confían en nosotros</span>
            </h1>
            <p className="text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Más de 500 instituciones de Argentina, Paraguay y Uruguay eligieron La Clase Digital para liderar su transformación tecnológica.
            </p>
          </Animate>
        </div>
      </section>

      {/* Clients image */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Animate type="zoom-in" delay={100}>
            <div className="bg-white/70 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #12136b 1px, transparent 0)", backgroundSize: "32px 32px" }} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/CLIENTESWEB-nuevo.png"
                alt="Instituciones clientes de La Clase Digital"
                className="w-full object-contain relative z-10"
              />
            </div>
          </Animate>
        </div>
      </section>
    </div>
  );
}
