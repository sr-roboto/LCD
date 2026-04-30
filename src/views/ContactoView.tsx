"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";

export default function ContactoView() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    institucion: "",
    mensaje: "",
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="page-hero-gradient py-20 px-4 text-center">
        <Animate type="fade-down">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand-blue)" }}
          >
            Estamos aquí para ayudarte
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contactanos
          </h1>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Recibí una demo personalizada, pedí un presupuesto o consultá
            cualquier duda sobre nuestros productos y servicios.
          </p>
        </Animate>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info column */}
          <Animate type="fade-right" className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Información de contacto</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Dirección", text: "CABA, Buenos Aires, Argentina" },
                  { icon: Phone, label: "Teléfono", text: "011-4300-0057" },
                  { icon: Mail, label: "Email", text: "info@laclasedigital.com.ar" },
                  { icon: Clock, label: "Horario", text: "Lun–Vie 9:00–18:00" },
                ].map(({ icon: Icon, label, text }, i) => (
                  <Animate key={label} type="fade-up" delay={([0, 100, 200, 300] as const)[i]}>
                    <div className="flex gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: "var(--brand-blue-light)" }}
                      >
                        <Icon className="w-4 h-4" style={{ color: "var(--brand-blue)" }} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 font-medium">{label}</p>
                        <p className="text-sm text-gray-700">{text}</p>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-900 mb-3">También encontranos en</h3>
              <div className="space-y-2">
                {[
                  { label: "Paraguay", tel: "+595 972 930 182" },
                  { label: "Uruguay", tel: "0598-94-422-6" },
                ].map((c) => (
                  <div key={c.label} className="flex justify-between text-sm">
                    <span className="text-gray-500">{c.label}</span>
                    <span className="text-gray-700 font-medium">{c.tel}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/5491143000057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 w-full justify-center px-5 py-2.5 rounded-lg text-sm font-semibold border-2 text-green-700 border-green-200 bg-green-50 hover:bg-green-100 transition-colors animate-glow-pulse"
            >
              Escribinos por WhatsApp
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Animate>

          {/* Form column */}
          <Animate type="fade-left" delay={200} className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              {sent ? (
                <div className="text-center py-8">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl"
                    style={{ backgroundColor: "var(--brand-blue-light)" }}
                  >
                    ✓
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¡Mensaje recibido!
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Te contactaremos a la brevedad con la información solicitada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">
                    Solicitar Demo Gratuita
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: "nombre", label: "Nombre completo", placeholder: "Juan García", type: "text" },
                      { id: "email", label: "Email institucional", placeholder: "juan@colegio.edu.ar", type: "email" },
                      { id: "telefono", label: "Teléfono", placeholder: "+54 11 ····", type: "tel" },
                      { id: "institucion", label: "Institución", placeholder: "Colegio San Martín", type: "text" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          {f.label}
                        </label>
                        <input
                          id={f.id}
                          type={f.type}
                          placeholder={f.placeholder}
                          required
                          value={form[f.id as keyof typeof form]}
                          onChange={(e) =>
                            setForm({ ...form, [f.id]: e.target.value })
                          }
                          className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent"
                          style={{ "--tw-ring-color": "var(--brand-blue)" } as React.CSSProperties}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      rows={3}
                      placeholder="Contanos qué necesitás..."
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg text-sm font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                    style={{ backgroundColor: "var(--brand-blue)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--brand-blue-hover)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "var(--brand-blue)")
                    }
                  >
                    Enviar solicitud
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
