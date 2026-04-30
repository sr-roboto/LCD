"use client";

import Animate from "@/components/Animate";

export default function ClientesView() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero-gradient py-20 px-4 text-center">
        <Animate type="fade-down">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand-blue)" }}
          >
            Nuestros Clientes
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Instituciones que confían en nosotros
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Más de 500 instituciones de Argentina, Paraguay y Uruguay eligieron La
            Clase Digital para transformar sus aulas.
          </p>
        </Animate>
      </section>

      {/* Clients image */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <Animate type="zoom-in" delay={100}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/CLIENTESWEB-nuevo.png"
              alt="Instituciones clientes de La Clase Digital"
              className="w-full object-contain rounded-2xl shadow-sm"
            />
          </Animate>
        </div>
      </section>
    </>
  );
}
