"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { shortcuts } from "@/lib/data";

export default function ShortcutsBar() {
  return (
    <section className="bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {shortcuts.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
            >
              <Link
                href={s.href}
                target={s.external ? "_blank" : undefined}
                rel={s.external ? "noopener noreferrer" : undefined}
                className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-slate-100 text-center
                           bg-white hover:border-[#0099D7] hover:bg-[#EBF7FD] transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-[#0099D7] flex items-center justify-center transition-colors duration-200">
                  <s.icon className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-[11px] font-bold text-slate-500 group-hover:text-[#0077a8] leading-tight transition-colors duration-200">
                  {s.label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
