'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Star } from 'lucide-react';
import { brands } from '@/lib/data';
import ProductsCarousel from '@/components/ProductsCarousel';
import Animate from '@/components/Animate';

/* ─── Data ────────────────────────────────────────────────────── */

const solutions = [
  {
    title: 'Pantallas Táctiles',
    subtitle: 'Las Mejores Marcas. Accesorios - Aplicaciones.',
    img: '/assets/home/pantalla-con-lcd.jpeg',
    links: [
      { label: 'Usabilidad', href: 'https://pantallastactiles.com.ar/' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }
    ]
  },
  {
    title: 'Muebles y Pizarras Interactivas',
    subtitle: 'TOMI - Mesas Táctiles - Carros Portanotebooks',
    img: '/assets/home/carro-podio.png', 
    links: [
      { label: 'Usabilidad', href: 'https://pizarrasdigitales.com.ar/' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/transformardigitalmenteelaula/inicio' }
    ]
  },
  {
    title: 'Espacios Makers',
    subtitle: 'Robótica - Streaming - Ciencia - Arte - Creatividad - Gamificación',
    img: '/assets/home/blu-streaming.png',
    links: [
      { label: 'Recursos', href: 'https://www.centrodeinnovacioneducativa.com.ar/blog' },
      { label: 'Precios e Info', href: 'https://sites.google.com/view/espacioscreativos/inicio' }
    ]
  },
  {
    title: 'Juegos Interactivos Modificables',
    subtitle: 'Robótica - Emociones - Finanzas - RCP - Salud - Ciencia y mucho más',
    img: '/assets/home/juegos-interactivos.png',
    links: [
      { label: 'ACCEDER', href: '/juegos' }
    ]
  },
  {
    title: 'RCP y Prácticas Médicas',
    subtitle: 'Torsos - Esqueletos - Maquetas - Simuladores - Accesorios',
    img: '/assets/home/todo-rcp.jpg',
    links: [
      { label: 'Precios e Info', href: 'https://sites.google.com/view/elementosrcp/inicio' }
    ]
  },
  {
    title: 'Alquiler de Equipos - Desarrollo de Videojuegos',
    subtitle: 'Para Empresas - Eventos',
    img: '/assets/home/alquiler-videojuegos.png',
    links: [
      { label: 'Alquiler de Equipos', href: 'https://alquilerdepc.com' },
      { label: 'Videojuegos Personalizados', href: 'https://fiestasinteractivas.com.ar' }
    ]
  }
];

const differentiators = [
  { icon: ShieldCheck, title: 'Soluciones Integrales', desc: 'Garantizamos entornos tecnológicos completos: equipamiento, software y capacitación.' },
  { icon: Star, title: 'Amplia Experiencia', desc: 'Más de 15 años transformando aulas e instituciones en toda la región.' },
  { icon: Users, title: 'Acompañamiento Constante', desc: 'Soporte pedagógico continuo post-venta para asegurar el uso efectivo de la tecnología.' },
];

/* ─── Brands Marquee ──────────────────────────────────────────── */
function BrandsMarquee() {
  const doubled = [...brands, ...brands];
  return (
    <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="marquee-track flex w-max">
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
      <section className="relative bg-[#f8fafc] py-12 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            
            {/* Left Column: Text & CTA */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col z-10"
            >
              <div className="bg-white rounded-t-3xl shadow-lg border border-gray-100 p-8 lg:p-10">
                <h1 className="text-gray-900 font-extrabold leading-[1.1] text-4xl lg:text-5xl text-center md:text-left"
                  style={{ letterSpacing: '-0.02em' }}>
                  Un Puente entre
                  <br />
                  la <span className="text-[var(--brand-cyan)]">Educación</span> y la <span className="text-[var(--brand-cyan)]">Tecnología</span>
                </h1>
              </div>
              
              <div className="bg-[var(--brand-navy-deep)] rounded-b-3xl shadow-lg p-8 lg:px-10 py-6">
                <p className="text-white text-sm md:text-base leading-relaxed text-center md:text-left">
                  Pantallas táctiles, robótica, juegos interactivos y muebles a medida. 
                  Fabricamos, instalamos y capacitamos en todo el país.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start px-2">
                <Link href="#soluciones" 
                  className="px-6 py-3 rounded-lg font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: "#F59E0B" }}>
                  Explorar Soluciones
                </Link>
                <Link href="/contacto" 
                  className="px-6 py-3 rounded-lg font-bold text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                  style={{ backgroundColor: "#3B82F6" }}>
                  Solicitar Asesoramiento
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Image */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 relative z-10"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-[4/3] lg:aspect-auto lg:h-[500px] border-4 border-white">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/assets/home/mesa-tactil-nino.png" 
                  alt="Niña jugando en mesa táctil interactiva" 
                  className="w-full h-full object-cover object-center" 
                />
              </div>
            </motion.div>

          </div>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full bg-gradient-to-tr from-blue-100/50 to-cyan-50/50 blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* ═══════════════ SOLUCIONES CARDS ════════════════════════ */}
      <section id="soluciones" className="py-20 px-4 sm:px-6 bg-[#f4f7fb]">
        <div className="max-w-7xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[var(--brand-navy)] mb-3 tracking-tight">Nuestras soluciones</h2>
              <p className="text-gray-500 font-medium text-lg uppercase tracking-wide">
                Todo lo que tu institución necesita en un solo lugar
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol, i) => (
              <Animate key={sol.title} type="fade-up" delay={i * 100}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col h-full group">
                  <div className="relative h-56 overflow-hidden bg-gray-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={sol.img} alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-[var(--brand-navy)] font-bold text-xl mb-1 text-center">{sol.title}</h3>
                    <p className="text-sm text-gray-600 text-center font-medium leading-relaxed mb-6">{sol.subtitle}</p>
                    
                    <div className="mt-auto flex flex-wrap justify-center gap-x-6 gap-y-3">
                      {sol.links.map(link => (
                        <Link key={link.label} href={link.href} target={link.href.startsWith('http') ? "_blank" : "_self"}
                          className="text-red-600 hover:text-red-800 font-bold text-sm uppercase tracking-wide flex items-center gap-1 transition-colors">
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

      {/* ═══════════════ VIDEO ═══════════════════════════════════ */}
      <section className="py-16 px-6 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <Animate type="zoom-in">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-video relative group">
              {/* Fallback to embedded video if user prefers the local asset. We use the uploaded mp4. */}
              <video 
                src="/assets/robotica-talleres.mp4" 
                controls 
                className="w-full h-full object-cover bg-gray-900"
                poster="/assets/home/todo-rcp.jpg"
              >
                Tu navegador no soporta el formato de video.
              </video>
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════════════ CLIENTES ════════════════════════════════ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <Animate type="fade-up">
            <p className="text-[11px] font-bold uppercase tracking-widest mb-3 text-[var(--brand-navy)]">
              Nuestros Clientes
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Instituciones que confían en nosotros</h2>
          </Animate>
          <Animate type="zoom-in" delay={200}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/CLIENTESWEB-nuevo.png" alt="Clientes de La Clase Digital" className="w-full max-w-4xl mx-auto object-contain mt-8" />
          </Animate>
        </div>
      </section>

      {/* ═══════════════ POR QUÉ ELEGIRNOS ══════════════════════ */}
      <section className="py-20 px-6 bg-[#f4f7fb]">
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-[var(--brand-navy)]">¿Por qué elegir La Clase Digital?</h2>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {differentiators.map((d, i) => (
              <Animate key={d.title} type="fade-up" delay={i * 150}>
                <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[var(--brand-cyan)] text-white shadow-lg shadow-cyan-500/30">
                    <d.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-[var(--brand-navy)] text-lg mb-3">{d.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{d.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════ PRODUCTS (Carousel) ═════════════════════ */}
      <div className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <h2 className="text-2xl font-bold text-[var(--brand-navy)] text-center">Explora nuestros productos</h2>
        </div>
        <ProductsCarousel />
      </div>

      {/* ═══════════════ BRANDS ══════════════════════════════════ */}
      <BrandsMarquee />
    </>
  );
}
