"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { X, ChevronRight, ExternalLink, ArrowRight } from "lucide-react";
import type { Category } from "@/lib/data";

/* ── Tilt on hover ──────────────────────────────────────────── */
function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rotX = (((e.clientY - rect.top) / rect.height) - 0.5) * -8;
    const rotY = (((e.clientX - rect.left) / rect.width) - 0.5) * 8;
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.015)`;
    el.style.transition = "transform 0.08s ease";
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.transition = "transform 0.4s ease";
  }, []);

  return { ref, onMouseMove, onMouseLeave };
}

/* ── Product Card ───────────────────────────────────────────── */
export function ProductCard({
  cat,
  index = 0,
  onSelect,
}: {
  cat: Category;
  index?: number;
  onSelect: (c: Category) => void;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.38, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        onClick={() => onSelect(cat)}
        className="group cursor-pointer bg-white rounded-2xl border border-gray-100 overflow-hidden
                   shadow-sm hover:shadow-lg hover:border-blue-200 transition-shadow duration-300 will-change-transform"
      >
        {/* Top accent line */}
        <div
          className="h-[3px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
          style={{ background: "linear-gradient(to right, var(--brand-blue), var(--brand-green))" }}
        />

        {/* Image */}
        <div className="aspect-[4/3] bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
          {cat.isNew && (
            <span className="absolute top-3 right-3 z-10 text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
              style={{ backgroundColor: "var(--brand-blue)" }}>
              Nuevo
            </span>
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cat.img}
            alt={cat.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <span
            className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3 inline-block"
            style={{ backgroundColor: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
          >
            {cat.tag}
          </span>
          <h3 className="font-bold text-gray-900 mb-1.5 text-sm leading-snug">{cat.title}</h3>
          <p className="text-xs text-gray-500 mb-4 leading-relaxed">{cat.desc}</p>

          {/* Product pills */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {cat.products.slice(0, 3).map((p) => (
              <span key={p}
                className="text-[10px] font-medium bg-gray-50 text-gray-400 border border-gray-100 rounded-full px-2.5 py-0.5">
                {p}
              </span>
            ))}
          </div>

          <span className="text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
            style={{ color: "var(--brand-blue)" }}>
            Ver detalles <ChevronRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── Slide-in Drawer ────────────────────────────────────────── */
export function ProductDrawer({
  cat,
  onClose,
}: {
  cat: Category | null;
  onClose: () => void;
}) {
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
            transition={{ duration: 0.22 }}
            className="fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.aside
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-[460px] max-w-full bg-white z-50 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Close */}
            <button
              onClick={onClose}
              aria-label="Cerrar"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>

            {/* Image hero */}
            <div className="h-64 bg-gray-50 flex items-center justify-center p-8 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.img}
                alt={cat.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Blue stripe */}
            <div
              className="h-1 shrink-0"
              style={{ background: "linear-gradient(to right, var(--brand-blue), var(--brand-green))" }}
            />

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto p-7">
              <span
                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-4 inline-block"
                style={{ backgroundColor: "var(--brand-blue-light)", color: "var(--brand-blue)" }}
              >
                {cat.tag}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">{cat.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{cat.longDesc}</p>

              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-300 mb-3">
                Modelos disponibles
              </h3>
              <ul className="space-y-2.5 mb-8">
                {cat.products.map((p) => (
                  <li key={p} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: "var(--brand-blue-light)" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--brand-blue)" }} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{p}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <Link
                  href="https://www.laclasedigital.com.ar/productos/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-sm font-semibold text-white"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                  onClick={onClose}
                >
                  Ver en tienda <ChevronRight className="w-4 h-4" />
                </Link>
                <Link
                  href="https://tienda.garaged.com.ar/tecnologia-educativa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 px-5 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
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

/* ── Compound: Grid + Drawer ────────────────────────────────── */
export function ProductGrid({
  categories,
  showAll = false,
  cols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}: {
  categories: Category[];
  showAll?: boolean;
  cols?: string;
}) {
  const [selected, setSelected] = useState<Category | null>(null);

  return (
    <>
      <motion.div layout className={`grid ${cols} gap-5`}>
        <AnimatePresence mode="popLayout">
          {categories.map((cat, i) => (
            <ProductCard key={cat.id} cat={cat} index={i} onSelect={setSelected} />
          ))}
        </AnimatePresence>
      </motion.div>
      <ProductDrawer cat={selected} onClose={() => setSelected(null)} />
    </>
  );
}
