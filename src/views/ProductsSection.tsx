"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import { categories, FILTER_TAGS, type Category, type CategoryTag } from "@/lib/data";

/* ── 3D Tilt Hook ── */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
    el.style.transition = "transform 0.1s ease";
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.transition = "transform 0.45s ease";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

/* ── Product Card ── */
function ProductCard({
  cat,
  index,
  onSelect,
}: {
  cat: Category;
  index: number;
  onSelect: (c: Category) => void;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={() => onSelect(cat)}
        className="group cursor-pointer bg-white rounded-2xl border border-slate-100 overflow-hidden
                   shadow-sm hover:shadow-lg hover:shadow-[#0099D7]/8 hover:border-[#0099D7]/30
                   transition-shadow duration-300 will-change-transform"
      >
        {/* Top accent line */}
        <div className="h-[3px] bg-gradient-to-r from-[#0099D7] to-[#61CE70] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

        {/* Image */}
        <div className="aspect-[4/3] bg-[#F5F9FC] flex items-center justify-center p-6 relative overflow-hidden">
          {/* {cat.isNew && (
            <span className="absolute top-3 right-3 badge badge-green flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5" /> Nuevo
            </span>
          )} */}
          <img
            src={cat.img}
            alt={cat.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="badge badge-blue mb-3">{cat.tag}</span>
          <h3 className="font-bold text-[#0B2447] mb-2 text-sm leading-snug">{cat.title}</h3>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">{cat.desc}</p>

          {/* Product pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cat.products.slice(0, 3).map((p) => (
              <span key={p} className="text-[10px] font-semibold bg-slate-50 text-slate-400 border border-slate-100 rounded-full px-2.5 py-0.5">
                {p}
              </span>
            ))}
          </div>

          <span className="text-xs font-bold text-[#0099D7] flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
            Ver detalles <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Product Drawer ── */
function ProductDrawer({
  cat,
  onClose,
}: {
  cat: Category | null;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {cat && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#0B2447]/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-[460px] max-w-full bg-white z-50 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-slate-500" />
            </button>

            {/* Image */}
            <div className="h-64 bg-[#F5F9FC] flex items-center justify-center p-8 shrink-0">
              <img
                src={cat.img}
                alt={cat.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Colored stripe */}
            <div className="h-1 bg-gradient-to-r from-[#0099D7] to-[#61CE70]" />

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-7">
              <span className="badge badge-blue mb-4">{cat.tag}</span>
              <h2 className="text-2xl font-black text-[#0B2447] mb-3 leading-tight">{cat.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{cat.longDesc}</p>

              <h3 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3">
                Modelos disponibles
              </h3>
              <ul className="space-y-2.5 mb-8">
                {cat.products.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#0099D7]/10 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0099D7]" />
                    </div>
                    <span className="text-sm text-slate-600 font-medium">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <Link
                  href={cat.href}
                  className="btn-blue justify-center text-sm"
                  onClick={onClose}
                >
                  Ver catálogo completo <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://tienda.garaged.com.ar/tecnologia-educativa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline justify-center text-sm"
                >
                  <ExternalLink className="w-4 h-4" /> Consultar precio
                </Link>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

/* ── Section heading ── */
function SectionHeading({ badge, title, subtitle }: { badge: string; title: string; subtitle: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className="text-center mb-14"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
    >
      <span className="badge badge-blue mb-4">{badge}</span>
      <h2 className="text-3xl md:text-4xl font-black text-[#0B2447] mb-4 mt-4">{title}</h2>
      <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
    </motion.div>
  );
}

/* ── Main Component ── */
export default function ProductsSection() {
  const [activeFilter, setActiveFilter] = useState<CategoryTag>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Category | null>(null);

  const filtered = activeFilter === "Todos"
    ? categories
    : categories.filter((c) => c.tag === activeFilter);

  return (
    <section id="productos" className="section-pad bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* <SectionHeading
          badge="Catálogo Completo"
          title="Todo lo que necesita tu institución"
          subtitle="Desde pizarras portátiles hasta simuladores de RCP. Equipamos aulas, laboratorios y espacios de capacitación docente."
        /> */}

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-10">
          {FILTER_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200
                ${activeFilter === tag
                  ? "bg-[#0099D7] text-white shadow-md shadow-[#0099D7]/30"
                  : "bg-white text-slate-400 border border-slate-150 hover:border-[#0099D7] hover:text-[#0099D7]"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((cat, i) => (
              <ProductCard
                key={cat.id}
                cat={cat}
                index={i}
                onSelect={setSelectedProduct}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Drawer */}
      <ProductDrawer
        cat={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
