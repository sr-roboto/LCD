"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from "lucide-react";
import Animate from "@/components/Animate";
import Link from "next/link";

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
      <section className="relative py-24 px-6 overflow-hidden section-dark">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Animate type="fade-down">
            <div className="badge mb-6 mx-auto">Estamos aqui para ayudarte</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Contactanos
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-xl mx-auto">
              Recibi una demo personalizada, pedi un presupuesto o consulta
              cualquier duda sobre nuestros productos y servicios.
            </p>
          </Animate>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 section-elevated">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Info column */}
          <Animate type="fade-right" className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xl font-bold text-white mb-6">Informacion de contacto</h2>
              <div className="space-y-5">
                {[
                  { icon: MapPin, label: "Direccion", text: "CABA, Buenos Aires, Argentina" },
                  { icon: Phone, label: "Telefono", text: "011-4300-0057" },
                  { icon: Mail, label: "Email", text: "info@laclasedigital.com.ar" },
                  { icon: Clock, label: "Horario", text: "Lun-Vie 9:00-18:00" },
                ].map(({ icon: Icon, label, text }, i) => (
                  <Animate key={label} type="fade-up" delay={([0, 100, 200, 300] as const)[i]}>
                    <div className="flex gap-4">
                      <div className="icon-container shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-[var(--foreground-subtle)] font-medium mb-0.5">{label}</p>
                        <p className="text-[var(--foreground-muted)]">{text}</p>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>

            <div className="card-dark p-5">
              <h3 className="text-sm font-semibold text-white mb-4">Tambien encontranos en</h3>
              <div className="space-y-3">
                {[
                  { label: "Paraguay", tel: "+595 972 930 182" },
                  { label: "Uruguay", tel: "0598-94-422-6" },
                ].map((c) => (
                  <div key={c.label} className="flex justify-between text-sm">
                    <span className="text-[var(--foreground-subtle)]">{c.label}</span>
                    <span className="text-[var(--foreground-muted)] font-medium">{c.tel}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="https://wa.me/5491143000057"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full justify-center"
            >
              Escribinos por WhatsApp
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Animate>

          {/* Form column */}
          <Animate type="fade-left" delay={200} className="lg:col-span-3">
            <div className="card-dark p-8">
              {sent ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[var(--brand-emerald-glow)] flex items-center justify-center mx-auto mb-6">
                    <Send className="w-7 h-7 text-[var(--brand-emerald)]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Mensaje recibido
                  </h3>
                  <p className="text-[var(--foreground-muted)]">
                    Te contactaremos a la brevedad con la informacion solicitada.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-2">
                      Solicitar Demo Gratuita
                    </h2>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      Completa el formulario y te contactaremos en breve.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { id: "nombre", label: "Nombre completo", placeholder: "Juan Garcia", type: "text" },
                      { id: "email", label: "Email institucional", placeholder: "juan@colegio.edu.ar", type: "email" },
                      { id: "telefono", label: "Telefono", placeholder: "+54 11 ....", type: "tel" },
                      { id: "institucion", label: "Institucion", placeholder: "Colegio San Martin", type: "text" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold text-[var(--foreground-muted)] mb-2">
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
                          className="input-dark"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--foreground-muted)] mb-2">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="mensaje"
                      rows={4}
                      placeholder="Contanos que necesitas..."
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      className="input-dark resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
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
