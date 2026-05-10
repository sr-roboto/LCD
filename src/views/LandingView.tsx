'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ShieldCheck, Users, Cpu, Star } from 'lucide-react';
import { brands } from '@/lib/data';
import ProductsCarousel from '@/components/ProductsCarousel';
import Animate from '@/components/Animate';

/* ─── Data ────────────────────────────────────────────────────── */
const stats = [
  { value: '500+', label: 'Instituciones equipadas', color: 'var(--brand-cyan)' },
  { value: '15.000+', label: 'Docentes capacitados', color: 'var(--brand-lime)' },
  { value: '23', label: 'Provincias alcanzadas', color: 'var(--brand-cyan)' },
];

const solutions = [
  {
    title: 'Aulas Híbridas',
    desc: 'Tecnología interactiva para enseñar de manera presencial y remota al mismo tiempo.',
    img: '/assets/pizarras/Ebeam-Seccion.png',
    href: '/soluciones',
    bg: 'linear-gradient(135deg, #12136b 0%, #1a237e 100%)',
  },
  {
    title: 'Laboratorios STEAM',
    desc: 'Espacios de innovación con robótica, impresión 3D y recursos para ciencia y matemáticas.',
    img: '/assets/laboratorios/robotica.jpg',
    href: '/soluciones',
    bg: 'linear-gradient(135deg, #0d1b4b 0%, #12136b 100%)',
  },
  {
    title: 'Entornos sin Internet',
    desc: 'Soluciones offline para instituciones rurales o con conectividad limitada.',
    img: '/assets/laboratorios/no.jpg',
    href: '/soluciones',
    bg: 'linear-gradient(135deg, #0a1628 0%, #0d0e52 100%)',
  },
];

const differentiators = [
  { icon: ShieldCheck, title: 'Distribuidores Oficiales', desc: 'Únicos representantes autorizados de Mimio, eBeam, Practi-Man y THScreen en Argentina.' },
  { icon: Users, title: 'Soporte Pedagógico Real', desc: 'No vendemos cajas: acompañamos con capacitación in-situ y seguimiento continuo.' },
  { icon: Cpu, title: 'Ecosistema Integrado', desc: 'Hardware + Software + Gamificación (TOMi) + Capacitación en un único proveedor.' },
  { icon: Star, title: '15 Años de Trayectoria', desc: 'Más de 2.000 instituciones transformaron sus aulas en Argentina, Paraguay y Uruguay.' },
];

const partners = [
  { img: '/assets/bienestardocente.png', name: 'Bienestar Docente', desc: 'Bienestar y desarrollo profesional para docentes.', href: 'https://bienestardocente.com.ar/', color: '#4F46E5', bg: '#EEF2FF' },
  { img: '/assets/pantallastactiles.png', name: 'Pantallas Táctiles', desc: 'Catálogo de pantallas táctiles interactivas.', href: 'https://pantallastactiles.com.ar/', color: '#F97316', bg: '#FFF7ED' },
  { img: '/assets/pizarrasdigitales.png', name: 'Pizarras Digitales', desc: 'Todo sobre pizarras digitales para el aula.', href: 'https://pizarrasdigitales.com.ar/', color: '#16a34a', bg: '#F0FDF4' },
];

/* ─── Brands Marquee ──────────────────────────────────────────── */
function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <p className="text-center text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-5">
        Marcas oficiales que distribuimos
      </p>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="marquee-track">
          {doubled.map((brand, i) => (
            <span key={i} className="mx-10 text-sm font-bold text-gray-300 hover:text-gray-500 transition-colors cursor-default whitespace-nowrap shrink-0">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

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

        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — headline + CTA */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(0,212,245,0.12)', color: 'var(--brand-cyan)', border: '1px solid rgba(0,212,245,0.25)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--brand-cyan)' }} />
                Más de 15 años transformando aulas
              </span>

              <h1 className="text-white font-extrabold mb-3 leading-[1.1]"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', letterSpacing: '-0.03em' }}>
                Transformamos
                <br />
                la{' '}
                <span style={{
                  background: 'linear-gradient(90deg, var(--brand-cyan), var(--brand-lime))',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  Educación
                </span>
              </h1>

              {/* Lime underline accent */}
              <div className="mb-6" style={{ width: 56, height: 3, background: 'var(--brand-lime)', borderRadius: 2 }} />

              <p className="text-base mb-10 max-w-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Distribuidores oficiales de pizarras digitales, pantallas interactivas
                y simuladores médicos en Argentina, Paraguay y Uruguay.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="/contacto" className="btn-lime flex items-center gap-2">
                  Contáctanos <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="https://www.youtube.com/user/ondafilms/videos" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.06)' }}>
                  <Play className="w-4 h-4" /> Ver Video
                </Link>
              </div>
            </motion.div>

            {/* Right — stats panel */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl p-8 lg:p-10"
              style={{ background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.08)' }}>
              <p className="text-xs font-bold uppercase tracking-widest mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Nuestro impacto
              </p>
              <div className="space-y-8">
                {stats.map((s) => (
                  <div key={s.label} className="flex items-center gap-5">
                    <div className="w-1 h-14 rounded-full shrink-0" style={{ background: s.color }} />
                    <div>
                      <p className="font-extrabold leading-none mb-1" style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: s.color, letterSpacing: '-0.04em' }}>
                        {s.value}
                      </p>
                      <p className="text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', marginTop: 36, paddingTop: 28 }}>
                <Link href="/soluciones"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-all"
                  style={{ color: 'var(--brand-lime)' }}>
                  Explorar todas las soluciones <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
              <Animate key={sol.title} type="fade-up" delay={([0, 150, 300] as const)[i]}>
                <Link href={sol.href} className="group block overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" style={{ border: '1px solid #e5e7eb' }}>
                  {/* Image area with fallback bg */}
                  <div className="relative overflow-hidden" style={{ height: 220 }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sol.img} alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ mixBlendMode: 'luminosity', opacity: 0.85 }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(18,19,107,0.85) 0%, rgba(18,19,107,0.3) 55%, transparent 100%)' }} />
                    <div className="absolute bottom-0 left-0 px-5 py-4">
                      <h3 className="text-white font-bold text-lg leading-tight">{sol.title}</h3>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="p-5 bg-white">
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{sol.desc}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5" style={{ color: 'var(--brand-navy)' }}>
                      Conocer solución <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS ══════════════════════════════════ */}
      <BrandsMarquee />

      {/* ═══════════════ VIDEO ═══════════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: '#f7f8fc' }}>
        <div className="max-w-5xl mx-auto">
          <Animate type="zoom-in">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Mirá cómo transformamos el aula</h2>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
              <iframe src="https://www.youtube.com/embed/CItDjMo1snI?rel=0&modestbranding=1"
                title="La Clase Digital" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen className="w-full h-full" />
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════════════ PRODUCTS ════════════════════════════════ */}
      <ProductsCarousel />

      {/* ═══════════════ CLIENTES ════════════════════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Animate type="fade-up">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-navy)' }}>
              Nuestros Clientes
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Instituciones que confían en nosotros</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto mb-10">
              Más de 500 instituciones eligieron La Clase Digital para transformar sus aulas.
            </p>
          </Animate>
          <Animate type="zoom-in" delay={200}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/CLIENTESWEB-nuevo.png" alt="Clientes" className="w-full max-w-4xl mx-auto object-contain object-center " />
          </Animate>
        </div>
      </section>

      {/* ═══════════════ PLATAFORMAS ═════════════════════════════ */}
      <section className="py-16 px-6" style={{ background: '#f7f8fc' }}>
        <div className="max-w-5xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-10">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-2" style={{ color: 'var(--brand-navy)' }}>Ecosistema Digital</p>
              <h2 className="text-2xl font-bold text-gray-900">Plataformas de nuestro ecosistema</h2>
            </div>
          </Animate>

          {/* TOMi */}
          <Animate type="zoom-in" delay={100}>
            <Link href="https://tomi.digital/es" target="_blank" rel="noopener noreferrer"
              className="group flex flex-col md:flex-row items-center gap-6 rounded-xl p-6 mb-5 transition-all hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #eef2ff, #f5f3ff)', border: '1.5px solid #c4b5fd66' }}>
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-gray-100 p-2 shrink-0 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/tomidigital.png" alt="TOMi Digital" className="w-full h-full object-contain" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <span className="text-[10px] font-bold uppercase tracking-widest text-purple-600">Plataforma educativa destacada</span>
                <h3 className="text-lg font-bold text-gray-900 mb-1">TOMi Digital</h3>
                <p className="text-sm text-gray-500">Gamificación educativa líder en Latinoamérica. Juegos interactivos, tableros y contenido curricular integrado.</p>
              </div>
              <span className="shrink-0 px-5 py-2.5 rounded-lg text-sm font-bold text-white animate-glow-pulse"
                style={{ background: 'linear-gradient(135deg, #2563EB, #7C3AED)' }}>
                Ir a TOMi Digital →
              </span>
            </Link>
          </Animate>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <Animate key={p.name} type="fade-up" delay={([200, 300, 400] as const)[i]}>
                <Link href={p.href} target="_blank" rel="noopener noreferrer"
                  className="group rounded-xl border-2 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col gap-3"
                  style={{ borderColor: `${p.color}33`, backgroundColor: p.bg }}>
                  <div className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.img} alt={p.name} className="w-10 h-10 object-contain rounded-lg shrink-0" />
                    <div>
                      <p className="font-bold text-sm" style={{ color: p.color }}>{p.name}</p>
                      <p className="text-xs text-gray-500 leading-snug mt-0.5">{p.desc}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold self-start px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: p.color }}>
                    Visitar sitio →
                  </span>
                </Link>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ POR QUÉ ELEGIRNOS ══════════════════════ */}
      <section className="py-20 px-6" style={{ background: 'var(--brand-navy)' }}>
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: 'var(--brand-cyan)' }}>Por qué elegirnos</p>
              <h2 className="text-3xl font-bold text-white">No somos un proveedor más</h2>
              <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                El único ecosistema educativo que combina hardware oficial, software y acompañamiento pedagógico.
              </p>
            </div>
          </Animate>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {differentiators.map((d, i) => (
              <Animate key={d.title} type="fade-up" delay={([0, 100, 200, 300] as const)[i]}>
                <div className="rounded-xl p-6 transition-all hover:-translate-y-1"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: 'rgba(0,212,245,0.15)' }}>
                    <d.icon className="w-5 h-5" style={{ color: 'var(--brand-cyan)' }} />
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{d.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{d.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
