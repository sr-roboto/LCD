'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Award, Handshake } from 'lucide-react';
import { brands } from '@/lib/data';
import ProductsCarousel from '@/components/ProductsCarousel';
import Animate from '@/components/Animate';

/* ─── Data ────────────────────────────────────────────────────── */

const differentiators = [
  { icon: CheckCircle, title: 'Soluciones Integrales', desc: 'Hardware, software y capacitación todo en un solo proveedor de confianza.' },
  { icon: Award, title: 'Amplia Experiencia', desc: 'Más de 15 años liderando la transformación digital en aulas de todo el país.' },
  { icon: Handshake, title: 'Acompañamiento Constante', desc: 'Soporte técnico y pedagógico continuo para asegurar el éxito en cada institución.' },
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
    <div className="bg-white text-gray-900">
      {/* ═══════════════ HERO ═══════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left — headline + CTA */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(0,212,245,0.12)', color: 'var(--brand-cyan)', border: '1px solid rgba(0,212,245,0.25)' }}>
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--brand-cyan)' }} />
                La tecnología que tu aula necesita
              </span>

              <h1 className="text-gray-900 font-extrabold mb-4 leading-[1.1]"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.03em' }}>
                Un Puente entre
                <br />
                la <span style={{ color: 'var(--brand-navy)' }}>Educación</span>
                <br />y la <span style={{ color: 'var(--brand-cyan)' }}>Tecnología</span>
              </h1>

              <div className="mb-6" style={{ width: 64, height: 4, background: '#f59e0b', borderRadius: 2 }} />

              <p className="text-lg mb-10 max-w-lg leading-relaxed text-gray-600 font-medium">
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
              className="relative w-full aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-gray-200">
              <img src="/assets/home/mesa-tactil-nino.png" alt="Niña interactuando con mesa táctil" className="w-full h-full object-cover bg-gray-200" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
              <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none"></div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════ BRANDS ══════════════════════════════════ */}
      <BrandsMarquee />

      {/* ═══════════════ SOLUCIONES CARDS ════════════════════════ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-extrabold text-[var(--brand-navy)] mb-2 tracking-tight">Nuestras soluciones</h2>
              <p className="text-gray-500 font-medium text-lg">Todo lo que tu institución necesita en un solo lugar</p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Animate type="fade-up" delay={0}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img src="/assets/home/pantalla-con-lcd.jpeg" alt="Pantallas Táctiles" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Pantallas Táctiles</h3>
                  <p className="text-gray-600 font-medium text-sm mb-1">Las Mejores Marcas</p>
                  <p className="text-gray-600 text-sm mb-6 flex-1">Accesorios - Aplicaciones</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Link href="https://pantallastactiles.com.ar" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Usabilidad</Link>
                    <Link href="https://sites.google.com/view/transformardigitalmenteelaula/inicio" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Precios e Info</Link>
                  </div>
                </div>
              </div>
            </Animate>

            {/* Card 2 */}
            <Animate type="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img src="/assets/home/carro-podio.png" alt="Muebles y Pizarras Interactivas" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Muebles y Pizarras Interactivas</h3>
                  <p className="text-gray-600 font-medium text-sm mb-1">TOMI - Mesas Táctiles</p>
                  <p className="text-gray-600 text-sm mb-6 flex-1">Carros Portanotebooks</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Link href="https://pizarrasdigitales.com.ar" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Usabilidad</Link>
                    <Link href="https://sites.google.com/view/transformardigitalmenteelaula/inicio" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Precios e Info</Link>
                  </div>
                </div>
              </div>
            </Animate>

            {/* Card 3 */}
            <Animate type="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img src="/assets/home/blu-streaming.png" alt="Espacios Makers" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Espacios Makers</h3>
                  <p className="text-gray-600 font-medium text-sm mb-1">Robótica - Streaming - Ciencia</p>
                  <p className="text-gray-600 text-sm mb-6 flex-1">Arte - Creatividad - Gamificación</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Link href="https://www.centrodeinnovacioneducativa.com.ar/blog" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Recursos</Link>
                    <Link href="https://sites.google.com/view/espacioscreativos/inicio" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Precios e Info</Link>
                  </div>
                </div>
              </div>
            </Animate>

            {/* Card 4 */}
            <Animate type="fade-up" delay={0}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img src="/assets/home/juegos-interactivos.png" alt="Juegos Interactivos Modificables" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Juegos Interactivos Modificables</h3>
                  <p className="text-gray-600 font-medium text-sm mb-1">Robótica - Emociones - Finanzas</p>
                  <p className="text-gray-600 text-sm mb-6 flex-1">RCP - Salud - Ciencia y mucho más</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Link href="/juegos" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">ACCEDER</Link>
                  </div>
                </div>
              </div>
            </Animate>

            {/* Card 5 */}
            <Animate type="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img src="/assets/home/todo-rcp.jpg" alt="RCP y Prácticas Médicas" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">RCP y Prácticas Médicas</h3>
                  <p className="text-gray-600 font-medium text-sm mb-1">Torsos - Esqueletos - Maquetas</p>
                  <p className="text-gray-600 text-sm mb-6 flex-1">Simuladores - Accesorios</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <Link href="https://sites.google.com/view/elementosrcp/inicio" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Precios e Info</Link>
                  </div>
                </div>
              </div>
            </Animate>

            {/* Card 6 */}
            <Animate type="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-xl transition-shadow">
                <div className="aspect-[4/3] bg-gray-200 relative">
                  <img src="/assets/home/alquiler-videojuegos.png" alt="Alquiler de Equipos - Desarrollo de Videojuegos" className="w-full h-full object-cover" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">Alquiler de Equipos - Desarrollo de Videojuegos Personalizados</h3>
                  <p className="text-gray-600 text-sm mb-6 flex-1">Para Empresas - Eventos</p>
                  <div className="flex items-center gap-4 mt-auto flex-wrap">
                    <Link href="https://alquilerdepc.com" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Alquiler de Equipos</Link>
                    <Link href="https://fiestasinteractivas.com.ar" target="_blank" className="text-red-600 font-bold text-sm hover:text-red-700 transition-colors">Videojuegos Personalizados</Link>
                  </div>
                </div>
              </div>
            </Animate>

          </div>
        </div>
      </section>

      {/* ═══════════════ VIDEO ═══════════════════════════════════ */}
      <section className="py-20 px-6 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <Animate type="zoom-in">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[var(--brand-navy)] mb-3">Mirá cómo transformamos el aula</h2>
              <p className="text-gray-500 font-medium">Tecnología en acción para revolucionar la enseñanza y el aprendizaje.</p>
            </div>
            {/* The user provided a Google Drive link for the video, so we will use the existing youtube embed or a placeholder if we can't embed drive */}
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gray-100 aspect-video relative group">
              <video
                src="/assets/robotica-talleres.mp4"
                controls
                autoPlay
                muted
                loop
                className="w-full h-full absolute inset-0 object-cover"
              />
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════════════ POR QUÉ ELEGIRNOS ══════════════════════ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <Animate type="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-[var(--brand-navy)]">¿Por qué elegir La Clase Digital?</h2>
            </div>
          </Animate>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {differentiators.map((d, i) => (
              <Animate key={d.title} type="fade-up" delay={([0, 100, 200] as const)[i]}>
                <div className="flex flex-col items-center text-center p-6 transition-all hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow-md"
                    style={{ background: 'var(--brand-cyan)', color: 'white' }}>
                    <d.icon className="w-10 h-10" />
                  </div>
                  <h3 className="font-extrabold text-xl text-[var(--brand-navy)] mb-3">{d.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium">{d.desc}</p>
                </div>
              </Animate>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ NUESTROS CLIENTES ══════════════════════ */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <Animate type="fade-up">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4" style={{ color: 'var(--brand-navy)' }}>
              Nuestros Clientes
            </h3>
            <h2 className="text-4xl font-extrabold text-[var(--brand-navy)] mb-4">
              Instituciones que confían en nosotros
            </h2>
            <p className="text-gray-500 font-medium text-lg mb-12">
              Más de 500 instituciones eligieron La Clase Digital para transformar sus aulas.
            </p>
            <div className="flex justify-center">
              <img src="/assets/home/CLIENTESWEB-nuevo.png" alt="Logos de clientes" className="max-w-full h-auto object-contain" />
            </div>
          </Animate>
        </div>
      </section>

      {/* ═══════════════ PRODUCTS (Keeping original carousel) ════════ */}
      <div className="bg-white py-10 border-t border-gray-100">
        <ProductsCarousel />
      </div>

    </div>
  );
}
