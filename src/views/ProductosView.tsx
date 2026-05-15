"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductsCarousel from "@/components/ProductsCarousel";
import Animate from "@/components/Animate";

export default function ProductosView() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden section-dark">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Animate type="fade-down">
            <div className="badge mb-6 mx-auto">Maravillate con la tecnologia</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nuestros Productos
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto">
              Tecnologia educativa de primer nivel para equipar aulas, laboratorios
              y espacios de aprendizaje.
            </p>
          </Animate>
        </div>
      </section>

      {/* Showcase */}
      <section className="section-elevated">
        <ProductsCarousel hideHeader />
      </section>

      {/* CTA final */}
      <section className="py-24 px-6 section-dark">
        <div className="max-w-4xl mx-auto text-center">
          <Animate type="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Necesitas asesoramiento
            </h2>
            <p className="text-[var(--foreground-muted)] mb-8 max-w-lg mx-auto">
              Nuestro equipo te ayuda a elegir la solucion perfecta para tu institucion.
            </p>
            <Link href="/contacto" className="btn-primary inline-flex">
              Contactar a un asesor 
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Animate>
        </div>
      </section>
    </>
  );
}
