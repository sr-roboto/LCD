'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Award, Handshake, Sparkles } from 'lucide-react';
import Animate from '@/components/Animate';

/* ─── Data ────────────────────────────────────────────────────── */
const solutions = [
  {
    title: 'Pantallas Tactiles',
    desc: 'Las mejores marcas del mercado con aplicaciones y accesorios incluidos.',
    img: '/assets/home/pantalla-con-lcd.jpeg',
    links: [
      { label: 'Usabilidad', href: 'https://pantallastactiles.com.ar' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }
    ]
  },
  {
    title: 'Muebles y Pizarras',
    desc: 'TOMI, mesas tactiles, carros portanotebooks y mobiliario especializado.',
    img: '/assets/home/carro-podio.png',
    links: [
      { label: 'Usabilidad', href: 'https://pizarrasdigitales.com.ar' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }
    ]
  },
  {
    title: 'Espacios Makers',
    desc: 'Robotica, streaming, ciencia, arte y creatividad con gamificacion.',
    img: '/assets/home/blu-streaming.png',
    links: [
      { label: 'Recursos', href: 'https://www.centrodeinnovacioneducativa.com.ar/blog' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/espacioscreativos/inicio' }
    ]
  },
  {
    title: 'Juegos Interactivos',
    desc: 'Robotica, emociones, finanzas, RCP, salud, ciencia y mucho mas.',
    img: '/assets/home/juegos-interactivos.png',
    links: [
      { label: 'Acceder', href: '/juegos' }
    ]
  },
  {
    title: 'RCP y Practicas Medicas',
    desc: 'Torsos, esqueletos, maquetas, simuladores y accesorios medicos.',
    img: '/assets/home/todo-rcp.jpg',
    links: [
      { label: 'Precios e Info', href: 'https://sites.google.com/view/elementosrcp/inicio' }
    ]
  },
  {
    title: 'Alquiler y Videojuegos',
    desc: 'Alquiler de equipos y desarrollo de videojuegos personalizados.',
    img: '/assets/home/alquiler-videojuegos.png',
    links: [
      { label: 'Alquiler', href: 'https://alquilerdepc.com' },
      { label: 'Videojuegos', href: 'https://fiestasinteractivas.com.ar' }
    ]
  }
];

const differentiators = [
  { 
    icon: CheckCircle, 
    title: 'Soluciones Integrales', 
    desc: 'Hardware, software y capacitacion todo en un solo proveedor de confianza.' 
  },
  { 
    icon: Award, 
    title: 'Amplia Experiencia', 
    desc: 'Mas de 15 anos liderando la transformacion digital en aulas de todo el pais.' 
  },
  { 
    icon: Handshake, 
    title: 'Acompanamiento Constante', 
    desc: 'Soporte tecnico y pedagogico continuo para asegurar el exito en cada institucion.' 
  },
];

const stats = [
  { value: '500+', label: 'Instituciones' },
  { value: '15+', label: 'Anos de experiencia' },
  { value: '10K+', label: 'Aulas transformadas' },
  { value: '3', label: 'Paises' },
];

/* ─── Main Component ──────────────────────────────────────────── */
export default function LandingView() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden section-light">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left — headline + CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              <div className="badge mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                La tecnologia que tu aula necesita
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--foreground)] mb-6 leading-[1.1] tracking-tight">
                Un Puente entre la{' '}
                <span className="text-gradient">Educacion</span>
                {' '}y la{' '}
                <span className="text-gradient">Tecnologia</span>
              </h1>

              <div className="divider mb-6" />

              <p className="text-lg text-[var(--foreground-muted)] mb-10 max-w-lg leading-relaxed">
                Pantallas tactiles, robotica, juegos interactivos y muebles a medida. 
                Fabricamos, instalamos y capacitamos en todo el pais.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/soluciones" className="btn-primary">
                  Explorar Soluciones
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contacto" className="btn-secondary">
                  Solicitar Asesoria
                </Link>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-6 mt-16 pt-8 border-t border-[var(--border)]">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[var(--foreground)]">{stat.value}</div>
                    <div className="text-xs text-[var(--foreground-subtle)] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl">
                <img 
                  src="/assets/home/mesa-tactil-nino.png" 
                  alt="Nina interactuando con mesa tactil" 
                  className="w-full h-full object-cover" 
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                />
              </div>
              
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-[var(--border)] rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="icon-container icon-container-sm">
                    <Play className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--foreground)]">Ver Demo</div>
                    <div className="text-xs text-[var(--foreground-subtle)]">2 min</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════ SOLUCIONES CARDS ════════════════════════ */}
      <section className="py-24 px-6 section-subtle">
        <div className="max-w-7xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <div className="badge-outline mb-4">Lo que hacemos</div>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                Soluciones para tu Institucion
              </h2>
              <p className="text-[var(--foreground-muted)] max-w-lg mx-auto">
                Desde consultoria hasta capacitacion y soporte tecnico. Acompanamos todo el ciclo.
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <Animate key={sol.title} type="fade-up" delay={([0, 100, 200, 100, 200, 300] as const)[i]}>
                <div className="group card-elevated overflow-hidden flex flex-col h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-[var(--background-tertiary)]">
                    <img 
                      src={sol.img} 
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-semibold text-[var(--foreground)] text-lg mb-2">{sol.title}</h3>
                    <p className="text-sm text-[var(--foreground-muted)] mb-4 flex-1">{sol.desc}</p>
                    <div className="flex flex-wrap gap-3">
                      {sol.links.map(link => (
                        <Link 
                          key={link.label} 
                          href={link.href} 
                          target={link.href.startsWith('http') ? '_blank' : '_self'}
                          className="text-sm font-medium text-[var(--brand-emerald)] hover:text-[var(--brand-emerald-dark)] transition-colors flex items-center gap-1"
                        >
                          {link.label}
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ VIDEO ═══════════════════════════════════ */}
      <section className="py-24 px-6 section-light">
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-3">
                Mira como transformamos el aula
              </h2>
              <p className="text-[var(--foreground-muted)]">
                Conoce nuestro trabajo en accion
              </p>
            </div>
          </Animate>
          
          <Animate type="zoom-in">
            <div className="relative rounded-2xl overflow-hidden border border-[var(--border)] shadow-xl aspect-video group">
              <video
                src="/assets/robotica-talleres.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              {/* Play overlay on hover */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-[var(--brand-emerald)] flex items-center justify-center shadow-lg">
                  <Play className="w-6 h-6 text-white ml-1" />
                </div>
              </div>
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════════════ POR QUE ELEGIRNOS ══════════════════════ */}
      <section className="py-24 px-6 section-subtle relative overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
                Por que elegir La Clase Digital
              </h2>
              <div className="divider mx-auto" />
            </div>
          </Animate>
          
          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <Animate key={d.title} type="fade-up" delay={([0, 150, 300] as const)[i]}>
                <div className="text-center p-8 rounded-2xl bg-white border border-[var(--border)] hover:border-[var(--brand-emerald)] hover:shadow-lg transition-all">
                  <div className="icon-container mx-auto mb-6">
                    <d.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-[var(--foreground)] text-lg mb-3">{d.title}</h3>
                  <p className="text-[var(--foreground-muted)] text-sm leading-relaxed">{d.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ CTA FINAL ══════════════════════════════ */}
      <section className="py-24 px-6 section-dark bg-grid-dark">
        <div className="max-w-4xl mx-auto text-center">
          <Animate type="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Listo para transformar tu institucion?
            </h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contactanos hoy mismo para una demo personalizada y descubri como podemos 
              ayudarte a modernizar tus espacios educativos.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contacto" className="btn-primary">
                Solicitar Demo Gratuita
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="https://wa.me/5491112345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
              >
                Escribir por WhatsApp
              </Link>
            </div>
          </Animate>
        </div>
      </section>
    </>
  );
}
