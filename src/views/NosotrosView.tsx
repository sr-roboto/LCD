"use client";

import { Shield, Users, Cpu, Star, MapPin, Phone, Mail } from "lucide-react";
import Animate from "@/components/Animate";

const values = [
  {
    icon: Shield,
    title: "Distribuidores Oficiales",
    desc: "Únicos representantes autorizados de Mimio, eBeam, Practi-Man y THScreen en Argentina.",
  },
  {
    icon: Users,
    title: "Soporte Pedagógico Real",
    desc: "No vendemos cajas: acompañamos la implementación con capacitación in-situ y seguimiento continuo.",
  },
  {
    icon: Cpu,
    title: "Ecosistema Integrado",
    desc: "Hardware + Software + Gamificación + Capacitación en un único proveedor de confianza.",
  },
  {
    icon: Star,
    title: "15 Años de Trayectoria",
    desc: "Más de 500 instituciones transformaron sus aulas con La Clase Digital en Argentina, Paraguay y Uruguay.",
  },
];

const timeline = [
  { year: "2009", desc: "Fundación de La Clase Digital con el foco en pizarras interactivas." },
  { year: "2012", desc: "Expansión a Paraguay y Uruguay. Distribución oficial de Mimio." },
  { year: "2016", desc: "Lanzamiento de la plataforma TOMi Digital con gamificación educativa." },
  { year: "2019", desc: "Incorporación de simuladores médicos Practi-Man para ciencias de la salud." },
  { year: "2022", desc: "Alianza con ViewSonic para pantallas interactivas 4K y robótica STEM." },
  { year: "2024", desc: "Superamos las 500 instituciones equipadas y 10.000 aulas transformadas." },
];

export default function NosotrosView() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero-gradient py-20 px-4 text-center">
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--brand-blue)" }}
        >
          Quiénes Somos
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          15 años transformando{" "}
          <span style={{ color: "var(--brand-blue)" }}>la educación</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Somos el ecosistema educativo más completo de Argentina. Hardware,
          software y capacitación docente en un solo proveedor de confianza.
        </p>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Por qué elegirnos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Animate key={v.title} type="fade-up" delay={i === 0 ? 0 : i === 1 ? 200 : i === 2 ? 300 : 400}>
              <div
                className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-4"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "var(--brand-blue-light)" }}
                >
                  <v.icon className="w-5 h-5" style={{ color: "var(--brand-blue)" }} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{v.title}</h3>
                  <p className="text-sm text-gray-500">{v.desc}</p>
                </div>
              </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Animate type="fade-up">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Mirá cómo transformamos el aula
          </h2>
          </Animate>
          <Animate type="zoom-in" delay={200}>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
            <iframe
              src="https://www.youtube.com/embed/CItDjMo1snI?rel=0&modestbranding=1"
              title="La Clase Digital — Transformamos el aula"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          </Animate>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Dónde estamos</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            {[
              { icon: MapPin, text: "CABA, Buenos Aires, Argentina" },
              { icon: Phone, text: "011-4300-0057" },
              { icon: Mail, text: "info@laclasedigital.com.ar" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-600">
                <Icon className="w-4 h-4 shrink-0" style={{ color: "var(--brand-blue)" }} />
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
