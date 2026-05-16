"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";

const contactInfo = [
  { icon: MapPin, label: "Dirección",  text: "CABA, Buenos Aires, Argentina" },
  { icon: Phone,  label: "Teléfono",   text: "011-4300-0057" },
  { icon: Mail,   label: "Email",      text: "info@laclasedigital.com.ar" },
  { icon: Clock,  label: "Horario",    text: "Lun–Vie 9:00–18:00" },
];

const extraContacts = [
  { label: "Paraguay", tel: "+595 972 930 182" },
  { label: "Uruguay",  tel: "0598-94-422-6" },
];

const FIELDS = [
  { id: "nombre",      label: "Nombre completo",       placeholder: "Juan García",            type: "text" },
  { id: "email",       label: "Email institucional",   placeholder: "juan@colegio.edu.ar",    type: "email" },
  { id: "telefono",    label: "Teléfono",              placeholder: "+54 11 ····",            type: "tel" },
  { id: "institucion", label: "Institución",           placeholder: "Colegio San Martín",     type: "text" },
] as const;

export default function ContactoView() {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "", institucion: "", mensaje: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const inputStyle: React.CSSProperties = {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    color: "#fff",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    outline: "none",
    width: "100%",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,245,0.6)";
    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,212,245,0.1)";
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
    (e.currentTarget as HTMLElement).style.boxShadow = "none";
  };

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-4"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)", minHeight: "52vh" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute top-[-60px] right-[8%] w-[360px] h-[360px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(132,224,16,0.07) 0%,transparent 68%)" }} />
        <div className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#84E010" }}>Estamos aquí para ayudarte</p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Contactanos
            </h1>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Recibí una demo personalizada, pedí un presupuesto o consultá cualquier duda sobre nuestros productos y servicios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────── */}
      <section className="py-20 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 100%)" }}>
        <AnimatedEduBg opacity={0.07} />
        <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* ── Info column ── */}
          <Animate type="fade-right" className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-extrabold text-white mb-6">Información de contacto</h2>
              <div className="space-y-5">
                {contactInfo.map(({ icon: Icon, label, text }, i) => (
                  <Animate key={label} type="fade-up" delay={([0, 100, 200, 300] as const)[i]}>
                    <div className="flex gap-3 items-start">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                        style={{ background: "rgba(0,212,245,0.12)", border: "1.5px solid rgba(0,212,245,0.25)" }}>
                        <Icon className="w-4 h-4" style={{ color: "#00D4F5" }} />
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>{label}</p>
                        <p className="text-sm font-medium text-white">{text}</p>
                      </div>
                    </div>
                  </Animate>
                ))}
              </div>
            </div>

            <div className="pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <h3 className="text-sm font-bold text-white mb-3">También en</h3>
              <div className="space-y-2">
                {extraContacts.map((c) => (
                  <div key={c.label} className="flex justify-between text-sm">
                    <span style={{ color: "rgba(255,255,255,0.45)" }}>{c.label}</span>
                    <span className="font-medium text-white">{c.tel}</span>
                  </div>
                ))}
              </div>
            </div>

            <a href="https://wa.me/5491143000057" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 w-full justify-center px-5 py-3 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: "#84E010", color: "#0d0e52" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#9ef020"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#84E010"; }}>
              Escribinos por WhatsApp
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Animate>

          {/* ── Form column ── */}
          <Animate type="fade-left" delay={200} className="lg:col-span-3">
            <div className="rounded-2xl p-8"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(0,212,245,0.18)", backdropFilter: "blur(12px)" }}>
              {/* top strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
                style={{ background: "linear-gradient(90deg,transparent,#00D4F5,#84E010,transparent)" }} />

              {sent ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl"
                    style={{ background: "rgba(132,224,16,0.15)", border: "2px solid rgba(132,224,16,0.4)" }}>
                    ✓
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-2">¡Mensaje recibido!</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Te contactaremos a la brevedad con la información solicitada.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h2 className="text-xl font-extrabold text-white mb-2">Solicitar Demo Gratuita</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {FIELDS.map((f) => (
                      <div key={f.id}>
                        <label className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                          style={{ color: "rgba(255,255,255,0.45)" }}>
                          {f.label}
                        </label>
                        <input
                          id={f.id} type={f.type} placeholder={f.placeholder} required
                          value={form[f.id]}
                          onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                          style={inputStyle}
                          onFocus={focusInput}
                          onBlur={blurInput}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: "rgba(255,255,255,0.45)" }}>
                      Mensaje (opcional)
                    </label>
                    <textarea
                      id="mensaje" rows={3} placeholder="Contanos qué necesitás..."
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      style={{ ...inputStyle, resize: "none" }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <button type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                    style={{ background: "#84E010", color: "#0d0e52" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#9ef020"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#84E010"; }}>
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
