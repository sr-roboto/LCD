"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { differentiators } from "@/lib/data";

export default function DifferentiatorsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="por-que" className="section-pad bg-[#F5F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <span className="badge badge-blue mb-4">Por qué elegirnos</span>
          <h2 className="text-3xl md:text-4xl font-black text-[#0B2447] mb-4 mt-4">
            No somos un proveedor más.
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Somos el único ecosistema educativo que combina hardware oficial, software de gamificación y acompañamiento pedagógico en un solo lugar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-[#0099D7]/30
                         hover:shadow-lg hover:shadow-[#0099D7]/6 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EBF7FD] group-hover:bg-[#0099D7] flex items-center justify-center mb-5 transition-colors duration-300">
                <d.icon className="w-6 h-6 text-[#0099D7] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-[#0B2447] mb-2">{d.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{d.desc}</p>
              {/* Bottom accent */}
              <div className="mt-5 h-0.5 bg-gradient-to-r from-[#0099D7] to-[#61CE70] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400 rounded-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
