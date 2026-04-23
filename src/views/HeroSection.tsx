"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!isInView) return;
    let cur = 0;
    const step = value / (1600 / 16);
    const t = setInterval(() => {
      cur += step;
      if (cur >= value) { setN(value); clearInterval(t); }
      else setN(Math.floor(cur));
    }, 16);
    return () => clearInterval(t);
  }, [isInView, value]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Single subtle color wash — top right only */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] rounded-full bg-[#0099D7]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-16 items-center">

          {/* ── Left ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Small eyebrow — no emoji */}
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#0099D7] mb-8">
              La Clase Digital · Tecnología Educativa
            </p>

            <h1 className="text-[2.9rem] sm:text-[3.6rem] lg:text-[4rem] font-black leading-[1.06] tracking-tight text-[#0B2447] mb-7">
              Equipamos el aula<br />
              del siglo&nbsp;
              <span className="text-[#0099D7]">XXI.</span>
            </h1>

            <p className="text-slate-500 text-[1.05rem] leading-relaxed mb-10 max-w-[440px]">
              Distribuidores oficiales de pizarras digitales, pantallas interactivas y simuladores médicos en Argentina, Paraguay y Uruguay.
            </p>

            {/* CTAs — clean, no overload */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link href="#productos" className="btn-blue">
                Ver catálogo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contacto"
                className="text-sm font-bold text-slate-400 hover:text-[#0099D7] transition-colors flex items-center gap-1.5"
              >
                Solicitar cotización <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Stats — inline, typographic */}
            <div className="flex items-center gap-8 mt-14 pt-8 border-t border-slate-100">
              {[
                { end: 2000, suffix: "+", label: "instituciones" },
                { end: 20, suffix: " años", label: "de trayectoria" },
                { end: 3, suffix: " países", label: "de presencia" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-8">
                  {i > 0 && <div className="w-px h-7 bg-slate-200" />}
                  <div>
                    <p className="text-2xl font-black text-[#0B2447]">
                      <Counter end={s.end} suffix={s.suffix} />
                    </p>
                    <p className="text-[11px] text-slate-400 font-medium mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right ── */}
          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              {/* Main image container — subtle blue tint so it reads as intentional */}
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-[#EBF7FD]">
                <img
                  src="/assets/productos/productosClase13.jpg"
                  alt="Aula digital La Clase Digital"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* One clean info strip — no bouncing */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-4 border border-slate-100 shadow-lg flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-black text-[#0B2447] uppercase tracking-wide">Distribuidores Oficiales</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">Mimio · eBeam · THScreen · Practi-Man</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#0099D7] flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Accent block — top right corner, static geometric */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-2xl bg-[#61CE70]/15 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-[#0099D7]/10 -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
