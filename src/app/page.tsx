"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  ChevronRight, Monitor, Cpu, Heart, BookOpen, Star, ArrowRight,
  ShieldCheck, Users, Wifi, Download, Video, DollarSign, Wrench,
  Microscope, PlayCircle, MessageCircle
} from "lucide-react";

/* ===========================
   DATA (scraped from the real site)
   =========================== */

const shortcuts = [
  { icon: DollarSign, label: "Lista de Precios", href: "https://tienda.garaged.com.ar/tecnologia-educativa/", external: true, color: "bg-emerald-50 text-emerald-700 border-emerald-100" },
  { icon: Download, label: "Descargas", href: "/descargas", color: "bg-blue-50 text-blue-700 border-blue-100" },
  { icon: Video, label: "Videos", href: "https://www.youtube.com/user/ondafilms/videos", external: true, color: "bg-red-50 text-red-700 border-red-100" },
  { icon: BookOpen, label: "Blog", href: "/blog", color: "bg-amber-50 text-amber-700 border-amber-100" },
  { icon: Monitor, label: "TOMi Digital", href: "https://tomi.digital", external: true, color: "bg-purple-50 text-purple-700 border-purple-100" },
  { icon: Wrench, label: "Soporte Técnico", href: "/servicios/instalacion-soporte", color: "bg-indigo-50 text-indigo-700 border-indigo-100" },
];

const categories = [
  {
    id: "pizarras-portatiles",
    title: "Pizarras Digitales Portátiles",
    desc: "Mimio, eBeam — Convierte cualquier superficie en interactiva.",
    href: "/productos/pizarras-digitales-portatiles",
    img: "/assets/pizarras/PizarraTomi2Seccion.png",
    color: "from-blue-600 to-blue-800",
    products: ["Mimio Teach", "Mimio Pad", "eBeam Classic", "Pizarra TOMi"],
  },
  {
    id: "pizarron-digital",
    title: "Pizarrón Digital THScreen",
    desc: "Superficies interactivas de alta durabilidad sin proyector.",
    href: "/productos/pizarron-digital",
    img: "/assets/productos/LCD-Interactivo-TH-SCREENi.png",
    color: "from-violet-600 to-violet-800",
    products: ["THScreen 60\"", "Mesa Interactiva", "Tótem THScreen"],
  },
  {
    id: "pantallas",
    title: "Pantallas Interactivas",
    desc: "ViewSonic, Tótems y mesas táctiles de última generación.",
    href: "/productos/pantallas-interactivas",
    img: "/assets/productos/Pantalla-interactiva.png",
    color: "from-sky-600 to-sky-800",
    products: ["ViewBoard 65\" 4K", "Totem Táctil 55\"", "Mesa iMO"],
  },
  {
    id: "proyectores",
    title: "Proyectores Interactivos",
    desc: "BenQ, Epson, ViewSonic — Ultra-corto alcance y alta resolución.",
    href: "/productos/proyectores-interactivos",
    img: "/assets/productos/proyector1.png",
    color: "from-teal-600 to-teal-800",
    products: ["BenQ MW864ST", "Epson Brightlink", "ViewSonic PA505W"],
  },
  {
    id: "tomi",
    title: "TOMI 7 – PC Docente",
    desc: "La computadora personal del docente. Todo en uno, sin cables.",
    href: "/productos/tomi-7",
    img: "/assets/productos/Tomi-7-Maestro.png",
    color: "from-indigo-600 to-indigo-800",
    products: ["TOMI 7 Base", "TOMI 7 Plus", "TOMi Digital Platform"],
  },
  {
    id: "hdmi",
    title: "HDMI Inalámbrico",
    desc: "ActionTec, ScreenBeam — Conectá sin cables a cualquier pantalla.",
    href: "/productos/hdmi-inalambrico",
    img: "/assets/productos/HDMI-Interactivo-BEAM.png",
    color: "from-cyan-600 to-cyan-800",
    products: ["ScreenBeam 750", "ActionTec MyWirelessTV5", "Yamaha CS-500"],
  },
  {
    id: "robotica",
    title: "Robótica y Programación",
    desc: "Arduino, Rasti, SIMA, Gigo — Aprender haciendo.",
    href: "/productos/robotica",
    img: "/assets/productos/Chicos-y-Arduino.png",
    color: "from-orange-600 to-orange-800",
    products: ["Kit Arduino Starter", "Rasti Ingeniería", "SIMA Robot Social"],
  },
  {
    id: "laboratorios",
    title: "Laboratorios Digitales",
    desc: "Labdisc, Lab Idiomas — Ciencias y lenguas en el aula del siglo XXI.",
    href: "/productos/laboratorios-digitales",
    img: "/assets/productos/Labdisc.png",
    color: "from-lime-600 to-lime-800",
    products: ["Labdisc Enviro", "Labdisc Gensci", "Lab Idioma Sanako"],
  },
  {
    id: "salud",
    title: "Ciencias de la Salud / RCP",
    desc: "Practi-Man, torsos NT3 — Simuladores de primer nivel.",
    href: "/productos/ciencias-de-la-salud",
    img: "/assets/productos/Practimani.png",
    color: "from-rose-600 to-rose-800",
    products: ["Practi-Man Adult", "Torso NT3", "DEA Trainer"],
  },
  {
    id: "mobiliario",
    title: "Mobiliario Educativo",
    desc: "Carros porta-tablets, bases con carga y ergonomía flexible.",
    href: "/productos/mobiliario",
    img: "/assets/productos/Carro-Portanotebooks.png",
    color: "from-stone-600 to-stone-800",
    products: ["Carro 30 tablets", "Pupitre Smart", "Base proyector móvil"],
  },
];

const brands = [
  "ViewSonic", "Newline", "Boxlight", "BenQ", "Epson",
  "Mimio", "eBeam", "THScreen", "ActionTec", "ScreenBeam",
  "Yamaha", "Logitech", "Practi-Man", "Arduino", "Rasti",
  "Labdisc", "Sanako", "Gigo", "SIMA",
];

const rcpProducts = [
  {
    title: "Practi-Man Adult",
    desc: "Maniquí adulto de alta fidelidad con feedback visual LED de profundidad y ritmo. Compatible con app inalámbrica.",
    detail: "Proveedor: Laerdal / Nasco",
    img: "/assets/productos/Practimani.png",
    href: "/productos/ciencias-de-la-salud",
  },
  {
    title: "Torso Bisexuado XC-208i",
    desc: "Torso completo para simulación con DEA. Incluye monitoreo en tiempo real y registro de métricas por alumno.",
    detail: "Feedback electrónico + software",
    img: "/assets/productos/Torso-Bixesuado-XC-208i.png",
    href: "/productos/ciencias-de-la-salud",
  },
  {
    title: "Esqueleto a Escala",
    desc: "Maqueta anatómica de alta precisión para ciencias de la salud. Ideal para clases de anatomía y fisiología.",
    detail: "Escala real + soporte articulado",
    img: "/assets/productos/Esqueleto-a-Escala.png",
    href: "/productos/ciencias-de-la-salud",
  },
  {
    title: "Simulador DEA Trainer",
    desc: "Desfibrilador de entrenamiento con locución en español, pasos guiados y escenarios variables de arritmia.",
    detail: "Modo instructor con control remoto",
    img: "/assets/productos/Modelo-de-Esqueleto.png",
    href: "/productos/ciencias-de-la-salud",
  },
];

const differentiators = [
  { icon: ShieldCheck, title: "Distribuidores Oficiales", desc: "Somos los únicos representantes autorizados de Mimio, eBeam, Practi-Man y THScreen en Argentina." },
  { icon: Users, title: "Soporte Pedagógico Real", desc: "No vendemos cajas: acompañamos la implementación con capacitación in-situ y seguimiento continuo." },
  { icon: Cpu, title: "Ecosistema Integrado", desc: "Hardware + Software + Gamificación (TOMi) + Capacitación en un único proveedor de confianza." },
  { icon: Star, title: "20 Años de Trayectoria", desc: "Más de 2.000 instituciones ya transformaron sus aulas con La Clase Digital en Argentina, Paraguay y Uruguay." },
];

/* ===========================
   PAGE COMPONENT
   =========================== */

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">

        {/* ─── HERO ─── */}
        <section className="relative bg-gradient-to-br from-[#0B2447] via-[#0d2d54] to-[#07111F] text-white overflow-hidden min-h-[82vh] flex items-center">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00C9A7]/10 blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] rounded-full bg-[#576CBC]/20 blur-[80px]" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djZoNlYzNGgtNnptMCAwVjI4aC02djZoNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge badge-accent mb-6">
                🎓 Ecosistema Educativo Integral
              </div>
              <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
                El aula del futuro{" "}
                <span className="text-[#00C9A7]">empieza<br />hoy.</span>
              </h1>
              <p className="text-white/70 text-lg mb-8 max-w-lg leading-relaxed">
                Pizarras digitales, pantallas táctiles, gamificación con TOMi y capacitación docente. Todo en un solo ecosistema. Más de 20 años transformando instituciones en Argentina, Paraguay y Uruguay.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link href="/productos/pantallas-interactivas" className="btn-accent text-base">
                  Ver Pantallas <ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="https://tienda.garaged.com.ar/tecnologia-educativa/" target="_blank" className="btn-outline !text-white !border-white/30 hover:!bg-white hover:!text-[#0B2447]">
                  <DollarSign className="w-5 h-5" /> Lista de Precios
                </Link>
                <Link href="/contacto" className="flex items-center gap-2 text-sm font-semibold text-white/70 hover:text-white transition-colors">
                  <MessageCircle className="w-4 h-4" /> Hablar con un asesor
                </Link>
              </div>

              {/* Trust stats */}
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[
                  { val: "+2.000", label: "Instituciones" },
                  { val: "+20 años", label: "Trayectoria" },
                  { val: "3 países", label: "Presencia" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-black text-[#00C9A7]">{s.val}</p>
                    <p className="text-xs text-white/50 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero right panel — imágenes reales del sitio */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Main hero image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img
                    src="/assets/productos/productosClase13.jpg"
                    alt="Aula digital con pantalla interactiva La Clase Digital"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2447]/60 via-transparent to-transparent" />
                  {/* Overlay badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2 border border-white/20 flex-1">
                      <img src="/assets/pizarras/PizarraTomi2Seccion.png" alt="TOMi" className="w-8 h-8 object-contain" />
                      <span className="text-xs text-white font-semibold">Pizarra TOMi</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center gap-2 border border-white/20 flex-1">
                      <img src="/assets/productos/Pantalla-interactiva.png" alt="Pantalla" className="w-8 h-8 object-contain" />
                      <span className="text-xs text-white font-semibold">Pantalla Interactiva</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#00C9A7]/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-[#00C9A7]" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#0B2447]">Distribuidores Oficiales</p>
                  <p className="text-[10px] text-gray-500">Mimio · eBeam · THScreen · Practi-Man</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── SHORTCUTS ─── */}
        <section className="bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {shortcuts.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.external ? "_blank" : undefined}
                  rel={s.external ? "noopener noreferrer" : undefined}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border hover-lift text-center transition-all ${s.color}`}
                >
                  <s.icon className="w-6 h-6" />
                  <span className="text-xs font-bold leading-tight">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BRANDS MARQUEE ─── */}
        <section className="py-10 bg-[#F4F7FC] border-b border-gray-200 overflow-hidden">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Marcas Oficiales</p>
          <div className="overflow-hidden relative">
            <div className="marquee-track">
              {[...brands, ...brands].map((b, i) => (
                <div
                  key={i}
                  className="mx-8 flex items-center justify-center whitespace-nowrap"
                >
                  <span className="text-lg font-black text-gray-300 hover:text-[#0B2447] transition-colors cursor-default tracking-tight">
                    {b}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRODUCT CATEGORIES ─── */}
        <section id="productos" className="section-pad bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="badge badge-accent mb-4">Catálogo Completo</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B2447] mb-4">
                Todo lo que necesita tu institución
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Desde pizarras portátiles hasta simuladores de RCP. Equipamos aulas, laboratorios y espacios de capacitación docente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="group rounded-2xl border border-gray-100 overflow-hidden hover-lift bg-white"
                >
                  {/* Color bar */}
                  <div className={`h-1.5 bg-gradient-to-r ${cat.color}`} />
                  {/* Product image */}
                  <div className="aspect-[4/3] bg-gray-50 overflow-hidden flex items-center justify-center p-4">
                    <img
                      src={cat.img}
                      alt={cat.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Card text */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#0B2447] mb-2 text-sm leading-tight">{cat.title}</h3>
                    <p className="text-xs text-gray-500 mb-4 leading-relaxed">{cat.desc}</p>
                    <ul className="space-y-1 mb-4">
                      {cat.products.slice(0, 3).map((p) => (
                        <li key={p} className="text-xs text-gray-400 flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full bg-[#00C9A7]" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <span className="text-xs font-bold text-[#00C9A7] flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver productos <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── RCP SECTION ─── */}
        <section id="rcp" className="section-pad bg-gradient-to-br from-[#0B2447] to-[#07111F] text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00C9A7]/10 rounded-full blur-[80px]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="badge badge-warn mb-6">
                  ⚕️ Sección Especial — Ciencias de la Salud
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  Entrenamos manos para{" "}
                  <span className="text-rose-400">salvar vidas.</span>
                </h2>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Simuladores RCP de alta fidelidad con feedback electrónico inalámbrico. Maniquíes certificados para protocolos AHA/ILCOR. Formación médica, paramédica y de primeros auxilios integrada al ecosistema digital LCD.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "Feedback visual y sonoro de compresiones (profundidad, ritmo, recoil)",
                    "Software de monitoreo inalámbrico para el instructor",
                    "DEA trainers con escenarios de arritmia variables",
                    "Kits completos para Bomberos, Cruz Roja y Universidades",
                    "Integración con pantallas interactivas LCD",
                  ].map((li) => (
                    <div key={li} className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-[#00C9A7] shrink-0 mt-0.5" />
                      <span className="text-white/75 text-sm">{li}</span>
                    </div>
                  ))}
                </div>
                <Link href="/productos/ciencias-de-la-salud" className="btn-accent">
                  Ver Equipamiento Médico <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {rcpProducts.map((p) => (
                  <Link
                    key={p.title}
                    href={p.href}
                    className="glass-card rounded-2xl overflow-hidden hover:border-[#00C9A7]/40 transition-all group"
                  >
                    <div className="bg-white/5 p-4 flex items-center justify-center h-36">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-white mb-2 text-sm">{p.title}</h3>
                      <p className="text-white/55 text-xs leading-relaxed mb-3">{p.desc}</p>
                      <p className="text-[#00C9A7] text-[11px] font-bold">{p.detail}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DIFFERENTIATORS ─── */}
        <section id="por-que" className="section-pad bg-[#F4F7FC]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="badge badge-accent mb-4">Por qué elegirnos</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B2447] mb-4">
                No somos un proveedor más.
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Somos el único ecosistema educativo que combina hardware oficial, software de gamificación y acompañamiento pedagógico en un solo lugar.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {differentiators.map((d, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover-lift">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B2447]/5 flex items-center justify-center mb-5">
                    <d.icon className="w-6 h-6 text-[#0B2447]" />
                  </div>
                  <h3 className="font-bold text-[#0B2447] mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ECOSYSTEM ─── */}
        <section className="section-pad bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-14">
              <span className="badge badge-accent mb-4">Ecosistema Digital</span>
              <h2 className="text-3xl md:text-4xl font-black text-[#0B2447] mb-4">
                Plataformas conectadas
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "TOMi Digital",
                  href: "https://tomi.digital",
                  desc: "El software de gamificación educativa nro. 1 de Argentina. Cuánto Sabés, Opivalia y más herramientas para dinamizar la clase.",
                  badge: "Software #1",
                  color: "border-t-purple-500",
                },
                {
                  title: "Bienestar Docente",
                  href: "https://bienestardocente.com.ar/login",
                  desc: "Plataforma de bienestar y formación para docentes. Recursos, comunidad y acompañamiento emocional.",
                  badge: "Comunidad",
                  color: "border-t-cyan-500",
                },
                {
                  title: "Diplomado Dokuma",
                  href: "http://laclasedigital.com.ar/Cursos/laclase/IT/oferta-academica-dokuma/index.html",
                  desc: "Capacitación docente certificada para el uso pedagógico de tecnología interactiva. Modalidad virtual y presencial.",
                  badge: "Certificado",
                  color: "border-t-amber-500",
                },
              ].map((e) => (
                <Link
                  key={e.title}
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white border border-gray-100 ${e.color} border-t-4 rounded-2xl p-7 hover-lift group`}
                >
                  <span className="badge badge-accent text-[10px] mb-4">{e.badge}</span>
                  <h3 className="font-black text-[#0B2447] text-lg mb-3 group-hover:text-[#576CBC] transition-colors">{e.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{e.desc}</p>
                  <span className="text-sm font-bold text-[#00C9A7] flex items-center gap-1 group-hover:gap-2 transition-all">
                    Acceder <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA FINAL ─── */}
        <section className="py-20 bg-gradient-to-r from-[#0B2447] to-[#19376D] text-white">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              ¿Listo para transformar tu institución?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Nuestros asesores pedagógicos y técnicos están disponibles para diseñar la solución ideal para tu escuela, facultad o centro de formación.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contacto" className="btn-accent text-base">
                Solicitar Cotización <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="https://api.whatsapp.com/send?phone=5491143000570&text=Hola!%20Quiero%20información%20sobre%20sus%20productos."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !text-white !border-white/30 hover:!bg-white hover:!text-[#0B2447] text-base"
              >
                💬 WhatsApp
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
