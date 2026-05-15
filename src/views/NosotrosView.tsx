"use client";

import { Shield, Users, Cpu, Star, MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "Distribuidores Oficiales",
    desc: "Unicos representantes autorizados de Mimio, eBeam, Practi-Man y THScreen en Argentina.",
  },
  {
    icon: Users,
    title: "Soporte Pedagogico Real",
    desc: "No vendemos cajas: acompanamos la implementacion con capacitacion in-situ y seguimiento continuo.",
  },
  {
    icon: Cpu,
    title: "Ecosistema Integrado",
    desc: "Hardware + Software + Gamificacion + Capacitacion en un unico proveedor de confianza.",
  },
  {
    icon: Star,
    title: "15 Anos de Trayectoria",
    desc: "Mas de 500 instituciones transformaron sus aulas con La Clase Digital en Argentina, Paraguay y Uruguay.",
  },
];

const timeline = [
  { year: "2009", desc: "Fundacion de La Clase Digital con el foco en pizarras interactivas." },
  { year: "2012", desc: "Expansion a Paraguay y Uruguay. Distribucion oficial de Mimio." },
  { year: "2016", desc: "Lanzamiento de la plataforma TOMi Digital con gamificacion educativa." },
  { year: "2019", desc: "Incorporacion de simuladores medicos Practi-Man para ciencias de la salud." },
  { year: "2022", desc: "Alianza con ViewSonic para pantallas interactivas 4K y robotica STEM." },
  { year: "2024", desc: "Superamos las 500 instituciones equipadas y 10.000 aulas transformadas." },
];

export default function NosotrosView() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden section-dark">
        {/* Background */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.1)_0%,transparent_70%)]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <Animate type="fade-up">
            <div className="badge mb-6 mx-auto">Quienes Somos</div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              15 anos transformando{" "}
              <span className="text-gradient">la educacion</span>
            </h1>
            <p className="text-lg text-[var(--foreground-muted)] max-w-2xl mx-auto">
              Somos el ecosistema educativo mas completo de Argentina. Hardware,
              software y capacitacion docente en un solo proveedor de confianza.
            </p>
          </Animate>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 section-elevated">
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Por que elegirnos
              </h2>
              <div className="divider mx-auto" />
            </div>
          </Animate>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Animate key={v.title} type="fade-up" delay={([0, 100, 200, 300] as const)[i]}>
                <div className="card-dark p-6 flex gap-5">
                  <div className="icon-container shrink-0">
                    <v.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{v.title}</h3>
                    <p className="text-sm text-[var(--foreground-muted)] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 section-dark">
        <div className="max-w-4xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Nuestra historia
              </h2>
              <div className="divider mx-auto" />
            </div>
          </Animate>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--border)] md:-translate-x-1/2" />
            
            {timeline.map((item, i) => (
              <Animate key={item.year} type="fade-up" delay={i * 100}>
                <div className={`relative flex items-start gap-8 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Year badge */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-[var(--brand-emerald)] md:-translate-x-1/2 mt-1.5" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="text-sm font-bold text-[var(--brand-emerald)] mb-1">{item.year}</div>
                    <p className="text-[var(--foreground-muted)] text-sm">{item.desc}</p>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="py-24 px-6 section-elevated">
        <div className="max-w-4xl mx-auto">
          <Animate type="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Mira como transformamos el aula
            </h2>
          </Animate>
          <Animate type="zoom-in" delay={200}>
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] aspect-video">
              <iframe
                src="https://www.youtube.com/embed/CItDjMo1snI?rel=0&modestbranding=1"
                title="La Clase Digital - Transformamos el aula"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </Animate>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-24 px-6 section-dark">
        <div className="max-w-4xl mx-auto text-center">
          <Animate type="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Donde estamos</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-8 mb-10">
              {[
                { icon: MapPin, text: "CABA, Buenos Aires, Argentina" },
                { icon: Phone, text: "011-4300-0057" },
                { icon: Mail, text: "info@laclasedigital.com.ar" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center justify-center gap-3 text-[var(--foreground-muted)]">
                  <Icon className="w-5 h-5 text-[var(--brand-emerald)]" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
            <Link href="/contacto" className="btn-primary inline-flex">
              Contactanos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Animate>
        </div>
      </section>
    </>
  );
}
