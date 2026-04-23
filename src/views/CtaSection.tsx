"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0099D7]">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/8 blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-[#61CE70]/20 blur-2xl" />
        {/* Pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 text-center">
        {/* <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/15 text-white text-xs font-black uppercase tracking-wider mb-6">
          ✨ Hablemos
        </span> */}
        <h2 className="text-3xl md:text-5xl font-black text-white mb-5 leading-tight">
          ¿Listo para transformar tu institución?
        </h2>
        <p className="text-white/75 mb-10 text-lg leading-relaxed">
          Nuestros asesores pedagógicos y técnicos están disponibles para diseñar la solución ideal para tu escuela, facultad o centro de formación.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-white text-[#0099D7] hover:bg-slate-50 transition-all hover:shadow-lg hover:-translate-y-0.5 text-sm"
          >
            Solicitar Cotización <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=5491143000570&text=Hola!%20Quiero%20información%20sobre%20sus%20productos."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all hover:-translate-y-0.5 text-sm"
          >
            💬 WhatsApp
          </Link>
        </div>
      </div>
    </section>
  );
}
