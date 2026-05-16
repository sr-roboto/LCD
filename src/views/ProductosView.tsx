"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import ProductsCarousel from "@/components/ProductsCarousel";
import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";

const CATALOG_URL = "https://tienda.garaged.com.ar/tecnologia-educativa/";

export default function ProductosView() {
  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-4"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)", minHeight: "45vh" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute top-[-60px] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(132,224,16,0.08) 0%,transparent 68%)" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <Animate type="fade-down">
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#84E010" }}>
              Equipamiento de Vanguardia
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Nuestros <span style={{ color: "#00D4F5" }}>Productos</span>
            </h1>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Tecnología educativa de primer nivel para equipar aulas, laboratorios y espacios de aprendizaje innovadores.
            </p>
          </Animate>
        </div>
      </section>

      {/* Showcase visual — no header since the hero above already explains it */}
      <div className="py-12">
        <ProductsCarousel hideHeader />
      </div>

      {/* CTA final */}
      <section className="py-20 px-4 text-center overflow-hidden relative"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `radial-gradient(circle at 1px 1px, #00d4ff 1px, transparent 0)`, backgroundSize: "40px 40px" }} />
        
        <Animate type="zoom-in">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Necesitás asesoramiento experto?</h2>
            <p className="text-sm mb-10" style={{ color: "rgba(255,255,255,0.5)" }}>
              Nuestro equipo pedagógico y técnico te ayuda a elegir la solución perfecta que se adapte a los objetivos de tu institución.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all hover:shadow-2xl hover:-translate-y-0.5"
                style={{ background: "#84E010", color: "#0d0e52" }}
              >
                Contactar a un asesor <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href={CATALOG_URL}
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm transition-all border border-white/20 text-white hover:bg-white/5"
              >
                Ver Tienda Online <ShoppingBag className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </Animate>
      </section>
    </div>
  );
}
