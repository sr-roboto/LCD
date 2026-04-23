"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { rcpProducts } from "@/lib/data";

export default function RcpSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="rcp" className="section-pad bg-[#0B2447] relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0099D7]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#61CE70]/8 rounded-full blur-[80px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="badge badge-warn mb-6">⚕️ Ciencias de la Salud</span>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              Entrenamos manos para{" "}
              <span className="text-[#61CE70]">salvar vidas.</span>
            </h2>
            <p className="text-white/65 mb-8 leading-relaxed">
              Simuladores RCP de alta fidelidad con feedback electrónico inalámbrico. Maniquíes certificados para protocolos AHA/ILCOR. Formación médica, paramédica y de primeros auxilios integrada al ecosistema digital LCD.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Feedback visual y sonoro de compresiones (profundidad, ritmo, recoil)",
                "Software de monitoreo inalámbrico para el instructor",
                "DEA trainers con escenarios de arritmia variables",
                "Kits completos para Bomberos, Cruz Roja y Universidades",
                "Integración con pantallas interactivas LCD",
              ].map((li) => (
                <li key={li} className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#61CE70] shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">{li}</span>
                </li>
              ))}
            </ul>

            <Link href="/productos/ciencias-de-la-salud" className="btn-green">
              Ver Equipamiento Médico <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Right grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {rcpProducts.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.45 }}
              >
                <Link
                  href={p.href}
                  className="glass-card rounded-2xl overflow-hidden hover:border-[#61CE70]/40 transition-all group block"
                >
                  <div className="bg-white/5 p-4 flex items-center justify-center h-36">
                    <img
                      src={p.img}
                      alt={p.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1.5 text-sm leading-tight">{p.title}</h3>
                    <p className="text-white/50 text-[11px] leading-relaxed mb-2">{p.desc}</p>
                    <p className="text-[#61CE70] text-[11px] font-bold">{p.detail}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
