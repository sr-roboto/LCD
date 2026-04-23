"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ecosystemItems } from "@/lib/data";

export default function EcosystemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="badge badge-green mb-4">Ecosistema Digital</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B2447] mb-4 mt-4">
            Plataformas conectadas
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Un ecosistema completo de herramientas digitales pensadas para docentes y alumnos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystemItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <Link
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white border border-slate-100 rounded-2xl p-7 hover:shadow-xl hover:shadow-slate-100 group transition-all duration-300 relative overflow-hidden"
              >
                {/* Top color stripe */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: item.accent }}
                />

                {/* Accent blob on hover */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-5 blur-2xl transition-opacity duration-500"
                  style={{ background: item.accent }}
                />

                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider mb-5 mt-3"
                  style={{ background: `${item.accent}18`, color: item.accent }}
                >
                  {item.badge}
                </span>
                <h3 className="font-black text-[#0B2447] text-xl mb-3 group-hover:text-[#0099D7] transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-5">{item.desc}</p>
                <span
                  className="text-sm font-bold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-200"
                  style={{ color: item.accent }}
                >
                  Acceder <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
