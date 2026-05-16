'use client';

import Link from 'next/link';
import { useRef } from 'react';
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
  const cardRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -7;   // max ±7°
    const rotY = ((x - cx) / cx) * 7;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    card.style.boxShadow = `${-rotY * 2}px ${rotX * 2}px 40px rgba(0,212,245,0.18), 0 20px 48px rgba(18,19,107,0.12)`;
    if (spot) {
      spot.style.left = `${x}px`;
      spot.style.top = `${y}px`;
      spot.style.opacity = '1';
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    const spot = spotRef.current;
    if (!card) return;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    card.style.boxShadow = '0 2px 16px rgba(18,19,107,0.07)';
    if (spot) spot.style.opacity = '0';
  };

  return (
    <Animate type="fade-up" delay={delay}>
      <div
        ref={cardRef}
        className="group relative bg-white flex flex-col h-full"
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          border: '1px solid rgba(18,19,107,0.08)',
          boxShadow: '0 2px 16px rgba(18,19,107,0.07)',
          transition: 'transform 0.12s ease, box-shadow 0.12s ease',
          willChange: 'transform',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>

        {/* Spotlight — sigue al cursor */}
        <div
          ref={spotRef}
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(0,212,245,0.12) 0%, transparent 70%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
          }} />

        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={sol.img} alt={sol.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />

          {/* Base overlay */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to top,rgba(18,19,107,0.5) 0%,transparent 50%)' }} />

          {/* Hover overlay — sube desde abajo */}
          <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
            style={{ background: 'linear-gradient(to top,rgba(12,13,80,0.85) 0%,rgba(12,13,80,0.3) 60%,transparent 100%)' }}>
            <div className="hidden sm:flex gap-2 translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
              {sol.links.map((link) => (
                <Link key={link.label} href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{ background: 'rgba(0,212,245,0.2)', color: '#00D4F5', border: '1px solid rgba(0,212,245,0.4)', backdropFilter: 'blur(8px)' }}>
                  {link.label} <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom gradient line */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"
            style={{ background: 'linear-gradient(90deg,#00D4F5,#84E010)' }} />
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-grow relative z-20">
          <h3 className="font-bold text-sm mb-1 text-center leading-snug" style={{ color: '#12136b' }}>{sol.title}</h3>
          <p className="text-[11px] text-center leading-relaxed mb-4 flex-grow text-gray-400">{sol.subtitle}</p>
          {/* Botones: solo visibles en mobile (en desktop usa el hover overlay) */}
          <div className="sm:hidden flex flex-wrap justify-center gap-2 mt-auto">
            {sol.links.map((link) => (
              <Link key={link.label} href={link.href}
                target={link.href.startsWith('http') ? '_blank' : '_self'}
                className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full transition-all duration-200"
                style={{ background: 'rgba(18,19,107,0.06)', color: '#12136b', border: '1px solid rgba(18,19,107,0.12)' }}>
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
      {/* ══════════ HERO — pantalla completa ═════════════════════ */}
      <section
        className="relative overflow-hidden flex flex-col"
        style={{
          minHeight: 'calc(100vh - 64px)',
          background: 'linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)',
        }}>
        {/* Mesh grid */}
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(rgba(0,212,245,1) 1px,transparent 1px),linear-gradient(90deg,rgba(0,212,245,1) 1px,transparent 1px)', backgroundSize: '56px 56px' }} />
        <div className="absolute top-[-80px] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(132,224,16,0.08) 0%,transparent 68%)' }} />
        <div className="absolute bottom-[-60px] left-[10%] w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle,rgba(0,212,245,0.07) 0%,transparent 70%)' }} />

        {/* Main content — flex-1 para empujar brands al fondo */}
        <div className="relative z-10 flex-1 flex items-center max-w-7xl mx-auto px-4 sm:px-6 w-full py-16 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">

            {/* Left */}
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
                style={{ border: '1.5px solid rgba(0,212,245,0.18)', boxShadow: '0 32px 80px rgba(0,0,0,0.5)' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/assets/home/mesa-tactil-nino.webp" alt="Niña en mesa táctil" className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top,rgba(8,10,46,0.4) 0%,transparent 55%)' }} />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Brands strip — FUERA del hero para que no se tape */}
        <div className="relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold pt-4 pb-1"
              style={{ color: 'rgba(0,212,245,0.4)' }}>Marcas oficiales que distribuimos</p>
            <BrandsMarquee />
          </div>
        </div>
      </section>

      {/* ══════════ SOLUCIONES ══════════════════════════════════ */}
      <motion.section id="soluciones" className="px-4 sm:px-6 pt-16 pb-24"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: '#F0F4FF' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: '#12136b' }}>Lo que hacemos</p>
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: '#12136b' }}>Nuestras Soluciones</h2>
            <p className="mt-3 max-w-md mx-auto text-sm text-gray-500">Todo lo que tu institución necesita en un solo lugar</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol, i) => {
              const delays: Delay[] = [0, 100, 200, 0, 100, 200];
              return <SolutionCard key={sol.title} sol={sol} delay={delays[i] ?? 0} />;
            })}
          </div>
        </div>
      </motion.section>

      {/* ══════════ VIDEO ════════════════════════════════════════ */}
      <motion.section className="px-4 sm:px-6 py-20 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: 'linear-gradient(160deg,#0f172a 0%,#12136b 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
          style={{ background: 'radial-gradient(circle,#84E010,transparent 70%)' }} />
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#84E010' }}>En acción</p>
            <h2 className="text-3xl font-extrabold text-white">Mirá cómo transformamos el aula</h2>
          </div>
          <div className="rounded-2xl overflow-hidden"
            style={{ border: '1.5px solid rgba(0,212,245,0.2)', boxShadow: '0 0 60px rgba(0,212,245,0.1), 0 32px 80px rgba(0,0,0,0.5)' }}>
            <video src="/assets/robotica-talleres.mp4" controls className="w-full block bg-gray-900" poster="/assets/home/todo-rcp.jpg">
              Tu navegador no soporta este formato.
            </video>
          </div>
        </div>
      </motion.section>

      {/* ══════════ CLIENTES ═════════════════════════════════════ */}
      <motion.section className="px-4 sm:px-6 py-20"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: '#ffffff' }}>
        <div className="max-w-5xl mx-auto text-center">
          <Animate type="fade-up">
            <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#12136b' }}>Nuestros Clientes</p>
            <h2 className="text-3xl font-extrabold mb-10" style={{ color: '#12136b' }}>Instituciones que confían en nosotros</h2>
          </Animate>
          <Animate type="zoom-in" delay={100}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/CLIENTESWEB-nuevo.png" alt="Clientes de La Clase Digital"
              className="w-full max-w-4xl mx-auto object-contain" />
          </Animate>
        </div>
      </motion.section>

      {/* ══════════ POR QUÉ ELEGIRNOS ═══════════════════════════ */}
      <motion.section className="px-4 sm:px-6 py-24 overflow-hidden relative"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
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
                    className="group relative rounded-2xl p-8 text-center flex flex-col items-center transition-all duration-300 hover:-translate-y-2 bg-white/[0.04] backdrop-blur-sm"
                    style={{ border: '1px solid rgba(255,255,255,0.09)', boxShadow: '0 4px 24px rgba(0,0,0,0.2)' }}
                    onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 16px 48px rgba(0,212,245,0.12), 0 4px 24px rgba(0,0,0,0.3)'; el.style.borderColor = 'rgba(0,212,245,0.3)'; }}
                    onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.boxShadow = '0 4px 24px rgba(0,0,0,0.2)'; el.style.borderColor = 'rgba(255,255,255,0.09)'; }}>
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                      style={{ background: 'rgba(0,212,245,0.12)', border: '1.5px solid rgba(0,212,245,0.22)' }}>
                      <d.icon className="w-7 h-7" style={{ color: '#00D4F5' }} />
                    </div>
                    <h3 className="font-bold text-white text-base mb-3">{d.title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>{d.desc}</p>
                    <div className="absolute bottom-0 left-8 right-8 h-[2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: 'linear-gradient(90deg,#00D4F5,#84E010)' }} />
                  </div>
                </Animate>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* ══════════ PRODUCTS ════════════════════════════════════ */}
      <motion.section className="py-16"
        initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.08 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ background: '#F0F4FF' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2" style={{ color: '#12136b' }}>Catálogo</p>
          <h2 className="text-3xl font-extrabold" style={{ color: '#12136b' }}>Explora nuestros productos</h2>
        </div>
        <ProductsCarousel />
      </motion.section>
    </>
  );
}