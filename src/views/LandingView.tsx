'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Star } from 'lucide-react';
import { brands } from '@/lib/data';
import ProductsCarousel from '@/components/ProductsCarousel';
import Animate from '@/components/Animate';

/* ─── Solutions ──────────────────────────────────────────────── */
const solutions = [
  { title: 'Pantallas Táctiles', subtitle: 'Las Mejores Marcas · Accesorios · Aplicaciones', img: '/assets/home/pantalla-con-lcd.webp', links: [{ label: 'Usabilidad', href: 'https://pantallastactiles.com.ar/' }, { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }] },
  { title: 'Muebles y Pizarras Interactivas', subtitle: 'TOMI · Mesas Táctiles · Carros Portanotebooks', img: '/assets/home/carro-podio.webp', links: [{ label: 'Usabilidad', href: 'https://pizarrasdigitales.com.ar/' }, { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }] },
  { title: 'Espacios Makers', subtitle: 'Robótica · Streaming · Ciencia · Arte · Creatividad', img: '/assets/home/blu-streaming.webp', links: [{ label: 'Recursos', href: 'https://www.centrodeinnovacioneducativa.com.ar/blog' }, { label: 'Precios e Info', href: 'https://sites.google.com/view/espacioscreativos/inicio' }] },
  { title: 'Juegos Interactivos Modificables', subtitle: 'Robótica · Emociones · Finanzas · RCP · Salud · Ciencia', img: '/assets/home/juegos-interactivos.webp', links: [{ label: 'Acceder', href: '/juegos' }] },
  { title: 'RCP y Prácticas Médicas', subtitle: 'Torsos · Esqueletos · Maquetas · Simuladores · Accesorios', img: '/assets/home/todo-rcp.webp', links: [{ label: 'Precios e Info', href: 'https://sites.google.com/view/elementosrcp/inicio' }] },
  { title: 'Alquiler de Equipos · Videojuegos', subtitle: 'Para Empresas · Eventos · Desarrollo Personalizado', img: '/assets/home/alquiler-videojuegos.webp', links: [{ label: 'Alquiler de Equipos', href: 'https://alquilerdepc.com' }, { label: 'Videojuegos', href: 'https://fiestasinteractivas.com.ar' }] },
];

const differentiators = [
  { icon: ShieldCheck, title: 'Soluciones Integrales', desc: 'Hardware, software y capacitación en un único proveedor de confianza.' },
  { icon: Star, title: 'Más de 15 Años', desc: 'Liderando la transformación digital educativa en Argentina, Paraguay y Uruguay.' },
  { icon: Users, title: 'Acompañamiento Real', desc: 'Soporte pedagógico continuo para asegurar el éxito en cada institución.' },
];

/* ─── Brands marquee ─────────────────────────────────────────── */
function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <div className="relative overflow-hidden py-5">

      <div className="marquee-track flex w-max">
        {doubled.map((b, i) => (
          <span key={i} className="mx-8 text-xs font-bold uppercase tracking-widest whitespace-nowrap shrink-0 select-none"
            style={{ color: 'rgba(0,212,245,0.35)' }}>{b}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Solution card ──────────────────────────────────────────── */
type Delay = 0 | 100 | 150 | 200 | 300 | 400 | 500 | 600 | 700 | 800;

function SolutionCard({ sol, delay }: { sol: typeof solutions[0]; delay: Delay }) {
  return (
    <Animate type="fade-up" delay={delay}>
      <div
        className="group bg-white rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-400 hover:-translate-y-2"
        style={{ border: '1px solid rgba(18,19,107,0.08)', boxShadow: '0 2px 16px rgba(18,19,107,0.07)' }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(0,212,245,0.14), 0 4px 24px rgba(18,19,107,0.1)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(18,19,107,0.07)'; }}>
        <div className="relative h-48 overflow-hidden bg-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={sol.img} alt={sol.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'linear-gradient(to top,rgba(18,19,107,0.45) 0%,transparent 55%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-[2.5px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"
            style={{ background: 'linear-gradient(90deg,#00D4F5,#84E010)' }} />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="font-bold text-base mb-1.5 text-center" style={{ color: '#12136b' }}>{sol.title}</h3>
          <p className="text-xs text-center leading-relaxed mb-5 flex-grow text-gray-500">{sol.subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-auto">
            {sol.links.map((link) => (
              <Link key={link.label} href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                style={{ background: 'rgba(18,19,107,0.06)', color: '#12136b', border: '1px solid rgba(18,19,107,0.15)' }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = '#12136b'; el.style.color = '#84E010'; el.style.borderColor = '#12136b'; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = 'rgba(18,19,107,0.06)'; el.style.color = '#12136b'; el.style.borderColor = 'rgba(18,19,107,0.15)'; }}>
                {link.label} <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Animate>
  );
}

/* ─── Main ───────────────────────────────────────────────────── */
export default function LandingView() {

  return (
    <>
      {/* ══════════ HERO ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)' }}>
        {/* Mesh */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,212,245,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,245,1) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute top-[-80px] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(132,224,16,0.08) 0%,transparent 68%)' }} />
        <div className="absolute bottom-[-60px] left-[10%] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(0,212,245,0.07) 0%,transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8 lg:pt-24 lg:pb-0 ">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8 text-[11px] font-bold uppercase tracking-widest"
                style={{ color: '#84E010', border: '2px solid rgba(132,224,16,0.28)' }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#84E010' }} />
                Más de 15 años transformando aulas
              </div> */}

              <h1 className="font-extrabold text-white leading-[1.05] mb-6"
                style={{ fontSize: 'clamp(2.6rem,5.5vw,4.2rem)', letterSpacing: '-0.04em' }}>
                Un Puente entre<br />
                la{' '}
                <span style={{ background: 'linear-gradient(90deg,#00D4F5,#84E010)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Educación
                </span><br />
                y la <span style={{ color: '#00D4F5' }}>Tecnología</span>
              </h1>

              <div className="h-[3px] w-16 rounded-full mb-8"
                style={{ background: 'linear-gradient(90deg,#84E010,#00D4F5)' }} />

              <p className="text-lg leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Pantallas táctiles, robótica, juegos interactivos y muebles a medida.
                Fabricamos, instalamos y capacitamos en todo el país.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="#soluciones"
                  className="group inline-flex items-center gap-2 rounded-sm px-7 py-3.5 text-sm font-black tracking-wide transition-all duration-300 hover:scale-[1.04] hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg,#84E010,#5ebd00)', color: '#061a00', boxShadow: '0 8px 28px rgba(132,224,16,0.32)' }}>
                  Explorar Soluciones
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contacto"
                  className="inline-flex items-center rounded-sm px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04]"
                  style={{ background: 'rgba(0,212,245,0.09)', border: '1.5px solid rgba(0,212,245,0.35)', backdropFilter: 'blur(8px)' }}>
                  Solicitar Asesoramiento
                </Link>
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.18 }} className="relative">

              <div className="relative rounded-lg overflow-hidden aspect-[4/3]"
                style={{ border: '1.5px solid rgba(0,212,245,0.18)', boxShadow: '0 10px 20px rgba(0,0,0,0.15)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home/mesa-tactil-nino.webp" alt="Niña en mesa táctil" className="w-full h-full object-cover" />

              </div>

            </motion.div>
          </div>
        </div >

        {/* Brands strip */}
        < div className="relative z-10 mt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }
        }>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold pt-5 pb-1"
              style={{ color: 'rgba(0,212,245,0.4)' }}>
              Marcas oficiales que distribuimos
            </p>
            <BrandsMarquee />
          </div>
        </div >
      </section >

      {/* ══════════ SOLUCIONES — Fondo claro / acordeón ══════════ */}
      < section id="soluciones" className="py-24 px-4 sm:px-6" style={{ background: '#F0F4FF' }}>
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#12136b' }}>Lo que hacemos</p>
              <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: '#12136b' }}>Nuestras Soluciones</h2>
              <p className="mt-3 max-w-md mx-auto text-sm text-gray-500">
                Todo lo que tu institución necesita en un solo lugar
              </p>
            </div>
          </Animate>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => {
              const delays: Delay[] = [0, 100, 200, 0, 100, 200];
              return <SolutionCard key={sol.title} sol={sol} delay={delays[i] ?? 0} />;
            })}
          </div>
        </div>
      </section >

      {/* ══════════ VIDEO — Oscuro con acento ════════════════════ */}
      < section className="py-20 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(160deg,#0f172a 0%,#12136b 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle,#84E010,transparent 70%)' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <Animate type="fade-up">
            <div className="text-center mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#84E010' }}>En acción</p>
              <h2 className="text-3xl font-extrabold text-white">Mirá cómo transformamos el aula</h2>
            </div>
          </Animate>
          <Animate type="zoom-in" delay={100}>
            <div className="rounded-2xl overflow-hidden"
              style={{ border: '1.5px solid rgba(0,212,245,0.2)', boxShadow: '0 0 60px rgba(0,212,245,0.1), 0 32px 80px rgba(0,0,0,0.5)' }}>
              <video src="/assets/robotica-talleres.mp4" controls className="w-full block bg-gray-900" poster="/assets/home/todo-rcp.jpg">
                Tu navegador no soporta este formato.
              </video>
            </div>
          </Animate>
        </div>
      </section >

      {/* ══════════ CLIENTES — Blanco limpio ═════════════════════ */}
      < section className="py-20 px-4 sm:px-6 bg-white" >
        <div className="max-w-5xl mx-auto text-center">
          <Animate type="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#12136b' }}>Nuestros Clientes</p>
            <h2 className="text-3xl font-extrabold mb-10" style={{ color: '#12136b' }}>
              Instituciones que confían en nosotros
            </h2>
          </Animate>
          <Animate type="zoom-in" delay={150}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/CLIENTESWEB-nuevo.webp" alt="Clientes de La Clase Digital"
              className="w-full max-w-4xl mx-auto object-contain" />
          </Animate>
        </div>
      </section >

      {/* ══════════ POR QUÉ ELEGIRNOS — Oscuro premium ══════════ */}
      < section className="py-24 px-4 sm:px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg,#080a2e 0%,#12136b 100%)' }}>
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,212,245,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,245,1) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#84E010' }}>Por qué elegirnos</p>
              <h2 className="text-4xl font-extrabold text-white">No somos un proveedor más</h2>
              <p className="mt-3 max-w-xl mx-auto text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                El único ecosistema educativo que combina hardware oficial, software y acompañamiento pedagógico.
              </p>
            </div>
          </Animate>
          <div className="grid sm:grid-cols-3 gap-6">
            {differentiators.map((d, i) => {
              const delays: Delay[] = [0, 100, 200];
              return (
                <Animate key={d.title} type="fade-up" delay={delays[i] ?? 0}>
                  <div
                    className="group relative rounded-2xl p-8 text-center flex flex-col items-center transition-all duration-400 hover:-translate-y-2 bg-white/[0.04] backdrop-blur-sm"
                    style={{ border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 16px 48px rgba(0,212,245,0.12), 0 4px 24px rgba(0,0,0,0.3)'; el.style.borderColor = 'rgba(0,212,245,0.3)'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)'; el.style.borderColor = 'rgba(255,255,255,0.09)'; }}>
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{ background: 'rgba(0,212,245,0.12)', border: '1.5px solid rgba(0,212,245,0.22)' }}>
                      <d.icon className="w-7 h-7" style={{ color: '#00D4F5' }} />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{d.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>{d.desc}</p>
                    <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                      style={{ background: 'linear-gradient(90deg,#00D4F5,#84E010)' }} />
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </section >

      {/* ══════════ PRODUCTS — Fondo claro / aireado ═════════════ */}
      < section className="py-16" style={{ background: '#F0F4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#12136b' }}>Catálogo</p>
          <h2 className="text-3xl font-extrabold" style={{ color: '#12136b' }}>Explora nuestros productos</h2>
        </div>
        <ProductsCarousel />
      </section >
    </>
  );
}
