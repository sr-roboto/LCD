"use client";

import { brands } from "@/lib/data";

export default function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-10 bg-[#F5F9FC] border-b border-slate-100 overflow-hidden">
      <p className="text-center text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 mb-7">
        Marcas Oficiales que distribuimos
      </p>
      <div className="overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F5F9FC] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F5F9FC] to-transparent z-10" />
        <div className="marquee-track">
          {doubled.map((b, i) => (
            <div key={i} className="mx-10 flex items-center">
              <span className="text-base font-black text-slate-200 hover:text-[#0099D7] transition-colors duration-300 cursor-default tracking-tight whitespace-nowrap">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
