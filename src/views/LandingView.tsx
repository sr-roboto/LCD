'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Award, Handshake } from 'lucide-react';
import { brands } from '@/lib/data';
import ProductsCarousel from '@/components/ProductsCarousel';
import Animate from '@/components/Animate';

/* ─── Data ────────────────────────────────────────────────────── */
const solutions = [
  {
    title: 'Pantallas Táctiles',
    desc: 'Las Mejores Marcas. Accesorios - Aplicaciones.',
    img: '/assets/home/pantalla-con-lcd.jpeg',
    links: [
      { label: 'Usabilidad', href: 'https://pantallastactiles.com.ar' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }
    ]
  },
  {
    title: 'Muebles y Pizarras Interactivas',
    desc: 'TOMI - Mesas Táctiles. Carros Portanotebooks.',
    img: '/assets/home/carro-podio.png',
    links: [
      { label: 'Usabilidad', href: 'https://pizarrasdigitales.com.ar' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }
    ]
  },
  {
    title: 'Espacios Makers',
    desc: 'Robótica - Streaming - Ciencia. Arte - Creatividad - Gamificación.',
    img: '/assets/home/blu-streaming.png',
    links: [
      { label: 'Recursos', href: 'https://www.centrodeinnovacioneducativa.com.ar/blog' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/espacioscreativos/inicio' }
    ]
  },
  {
    title: 'Juegos Interactivos Modificables',
    desc: 'Robótica - Emociones - Finanzas. RCP - Salud - Ciencia y mucho más.',
    img: '/assets/home/juegos-interactivos.png',
    links: [
      { label: 'Acceder', href: '/juegos' }
    ]
  },
  {
    title: 'RCP y Prácticas Médicas',
    desc: 'Torsos - Esqueletos - Maquetas. Simuladores - Accesorios.',
    img: '/assets/home/todo-rcp.jpg',
    links: [
      { label: 'Precios e Info', href: 'https://sites.google.com/view/elementosrcp/inicio' }
    ]
  },
  {
    title: 'Alquiler y Videojuegos',
    desc: 'Alquiler de Equipos y Desarrollo de Videojuegos Personalizados. Para Empresas y Eventos.',
    img: '/assets/home/alquiler-videojuegos.png',
    links: [
      { label: 'Alquiler', href: 'https://alquilerdepc.com' },
      { label: 'Videojuegos', href: 'https://fiestasinteractivas.com.ar' }
    ]
  }
];

const differentiators = [
  { icon: CheckCircle, title: 'Soluciones Integrales', desc: 'Hardware, software y capacitación todo en un solo proveedor de confianza.' },
  { icon: Award, title: 'Amplia Experiencia', desc: 'Más de 15 años liderando la transformación digital en aulas de todo el país.' },
  { icon: Handshake, title: 'Acompañamiento Constante', desc: 'Soporte técnico y pedagógico continuo para asegurar el éxito en cada institución.' },
];

const partners = [
  { img: '/assets/bienestardocente.png', name: 'Bienestar Docente', desc: 'Bienestar y desarrollo profesional para docentes.', href: 'https://bienestardocente.com.ar/', color: '#4F46E5', bg: '#EEF2FF' },
  { img: '/assets/pantallastactiles.png', name: 'Pantallas Táctiles', desc: 'Catálogo de pantallas táctiles interactivas.', href: 'https://pantallastactiles.com.ar/', color: '#F97316', bg: '#FFF7ED' },
  { img: '/assets/pizarrasdigitales.png', name: 'Pizarras Digitales', desc: 'Todo sobre pizarras digitales para el aula.', href: 'https://pizarrasdigitales.com.ar/', color: '#16a34a', bg: '#F0FDF4' },
];

/* ─── Removed Brands Marquee as per mockup ─── */

/* ─── Main Component ──────────────────────────────────────────── */
export default function LandingView() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════════════════════════ */}
      <section style={{ background: 'var(--brand-navy)' }} className="relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--brand-cyan), transparent 70%)' }} />
        <div className="absolute bottom-[-60px] left-[30%] w-[300px] h-[300px] rounded-full opacity-8 pointer-events-none"
          style={{ background: 'radial-gradient(circle, var(--brand-lime), transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — headline + CTA */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(0,212,245,0.12)', color: 'var(--brand-cyan)', border: '1px solid rgba(0,212,245,0.25)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--brand-cyan)' }} />
                La tecnología que tu aula necesita
              </span>

              <h1 className="text-white font-extrabold mb-4 leading-[1.1]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
                Un Puente entre
                <br />
                la <span style={{
                  background: 'linear-gradient(90deg, var(--brand-cyan), var(--brand-lime))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>Educación</span>
                <br />y la <span style={{ color: 'var(--brand-cyan)' }}>Tecnología</span>
              </h1>

              <div className="mb-6" style={{ width: 64, height: 4, background: '#f59e0b', borderRadius: 2 }} />

              <p className="text-lg mb-10 max-w-lg leading-relaxed text-gray-300 font-medium">
                Pantallas táctiles, robótica, juegos interactivos y muebles a medida. Fabricamos, instalamos y capacitamos en todo el país.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/soluciones" className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  style={{ background: '#f59e0b', color: '#ffffff' }}>
                  Explorar Soluciones
                </Link>
                <Link href="/contacto" className="flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: 'var(--brand-cyan)', color: '#ffffff' }}>
                  Solicitar Asesoramiento
                </Link>
              </div>
            </motion.div>

            {/* Right — Image */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-800">
              <img src="/assets/home/mesa-tactil-nino.png" alt="Niña interactuando con mesa táctil" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0 border border-white/10 rounded-3xl pointer-events-none"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════ SOLUCIONES CARDS ════════════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-12">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-navy)' }}>
                Lo que hacemos
              </p>
              <h2 className="text-3xl font-bold text-gray-900">Soluciones para tu Institución</h2>
              <p className="text-gray-500 text-sm mt-3 max-w-lg mx-auto">
                Desde consultoría hasta capacitación y soporte técnico — acompañamos todo el ciclo.
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((sol, i) => (
              <Animate key={sol.title} type="fade-up" delay={([0, 150, 300, 0, 150, 300] as const)[i]}>
                <div className="group block overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col h-full" style={{ border: '1px solid #e5e7eb' }}>
                  {/* Image area */}
                  <div className="relative overflow-hidden border-b border-gray-100" style={{ height: 200 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sol.img} alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  {/* Body */}
                  <div className="p-4 flex flex-col flex-1 bg-white">
                    <h3 className="font-bold text-gray-900 text-lg leading-tight text-center mb-1">{sol.title}</h3>
                    <p className="text-sm text-gray-600 leading-snug text-center mb-4 flex-1">{sol.desc}</p>
                    <div className="flex flex-wrap items-center justify-center gap-4 mt-auto">
                      {sol.links.map(link => (
                        <Link key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : '_self'}
                          className="inline-flex items-center text-sm font-bold transition-all hover:underline"
                          style={{ color: '#ef4444' }}>
                          {link.label}
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

      {/* ─── Brands Marquee removed ─── */}

      {/* ═══════════════ VIDEO ═══════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: '#f7f8fc' }}>
        <div className="max-w-5xl mx-auto">
          <Animate type="zoom-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Mirá cómo transformamos el aula</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video relative group bg-gray-900">
              <video
                src="/assets/robotica-talleres.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </Animate>
        </div>
      </section>

      {/* ─── Clientes and Plataformas removed ─── */}

      {/* ═══════════════ POR QUÉ ELEGIRNOS ══════════════════════ */}
      <section className="py-20 px-6" style={{ background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)' }}>
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--brand-navy)]" style={{ color: '#1e3a8a' }}>¿Por qué elegir La Clase Digital?</h2>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {differentiators.map((d, i) => (
              <Animate key={d.title} type="fade-up" delay={([0, 100, 200] as const)[i]}>
                <div className="flex flex-col items-center text-center p-6 transition-all hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md"
                    style={{ background: i === 0 ? '#3b82f6' : '#f97316', color: 'white' }}>
                    <d.icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-extrabold text-lg text-gray-900 mb-3" style={{ color: '#1e3a8a' }}>{d.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm font-medium">{d.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Products removed ─── */}
    </>
  );
}
