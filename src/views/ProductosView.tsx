"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import ProductsCarousel from "@/components/ProductsCarousel";
import Animate from "@/components/Animate";

const CATALOG_URL = "https://tienda.garaged.com.ar/tecnologia-educativa/";

export default function ProductosView() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero-gradient py-20 px-4 text-center">
        <Animate type="fade-down">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand-blue)" }}
          >
            Maravillate con la tecnología
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
            Tecnología educativa de primer nivel para equipar aulas, laboratorios
            y espacios de aprendizaje.
          </p>
        </Animate>
      </section>

      {/* Showcase visual — no header since the hero above already explains it */}
      <ProductsCarousel hideHeader />

      {/* CTA final */}
      <section className="py-16 px-4 bg-white text-center border-t border-gray-100">
        <Animate type="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ¿Necesitás asesoramiento?
          </h2>
          <p className="text-gray-500 mb-6 max-w-lg mx-auto text-sm">
            Nuestro equipo te ayuda a elegir la solución perfecta para tu institución.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm
                         border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Contactar a un asesor <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Animate>
      </section>
    </>
  );
}
