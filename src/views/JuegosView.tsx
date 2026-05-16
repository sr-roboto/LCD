"use client";

import { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Gamepad2, BookOpen, Printer, Smartphone, CheckCircle, ArrowRight, MessageCircle, Mail, Download, Dices } from "lucide-react";
import dynamic from "next/dynamic";
import AnimatedEduBg from "@/components/AnimatedEduBg";

// Lazy load modals
const DiceRoller = dynamic(() => import("@/components/DiceRoller"), { ssr: false });
// If GamePlayer is in another file, you could dynamic import it here too. But it's defined in the same file.

const DRIVE_URL = "https://drive.google.com/drive/folders/1K4nh03b2j2gKehKguP8uVYECKlGAk4xgy";

/* ─── Real data ────────────────────────────────────────────── */
const TB = "/assets/juegos/tableros/";
const games = [
  {
    id: 1, title: "¿Cuánto Sabés de Tu Cuerpo?",
    subject: "Ciencias Naturales", tag: "tag-health", emoji: "🫀",
    desc: "Anatomía, órganos y sistemas del cuerpo humano.",
    grades: "4° – 7° grado",
    img: TB + "Tablero Tu Cuerpo con QR para Imprimir.png",
    driveUrl: "https://drive.google.com/drive/folders/1TjRDenUQDDonUM_z0JIflZLti0DkUgCx",
    playUrl: "https://cuanto-sabes-de-tu-cuerpo.netlify.app/",
  },
  {
    id: 2, title: "¿Cuánto Sabés de Tus Emociones?",
    subject: "Habilidades Socioemocionales", tag: "tag-emotions", emoji: "😊",
    desc: "Inteligencia emocional, empatía y convivencia escolar.",
    grades: "Todos los niveles",
    img: TB + "juego cuanto sabes de tus emociones_3-02-02.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1NEVmBjSlzpcBU5igX_TSZ7lpB9wkhxmx",
    playUrl: "https://emociones-boardgame.netlify.app",
  },
  {
    id: 3, title: "¿Cuánto Sabés de Educación AeroEspacial?",
    subject: "Ciencias / Tecnología", tag: "tag-tech", emoji: "🚀",
    desc: "Exploración espacial y aeronáutica argentina.",
    grades: "5° – Secundaria",
    img: TB + "TABLERO CUANTO SABES DE EDUCACIÓN aeroespacial3-01.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1sa_1tgTFUs_-eFrNjrePVKrc9yh4jyUf",
    playUrl: "https://aeroespacioal-gameboard.netlify.app",
  },
  {
    id: 4, title: "¿Cuánto Sabés de Educación Financiera?",
    subject: "Economía y Finanzas", tag: "tag-economy", emoji: "💰",
    desc: "Finanzas personales, ahorro y emprendimiento.",
    grades: "Secundaria",
    img: TB + "Educación Financiera.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1a-S5wdpxEx3IA9QKlJgBeJ7ERLC08P3J",
    playUrl: "https://educacion-financiera-boardgame.netlify.app/",
  },
  {
    id: 5, title: "¿Cuánto Sabés de Emprender?",
    subject: "Emprendimiento", tag: "tag-economy", emoji: "💡",
    desc: "Creatividad, innovación y liderazgo emprendedor.",
    grades: "Secundaria",
    img: TB + "Tablero Emprender con 16 casilleros.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1zW6Ri8LzZBs04cLvCsYwblIqsCxZ2Rhx",
    playUrl: "https://empresariostv-gameboard.netlify.app/",
  },
  {
    id: 6, title: "¿Cuánto Sabés de Formosa?",
    subject: "Identidad Regional", tag: "tag-culture", emoji: "🗺️",
    desc: "Historia, geografía y cultura de la provincia de Formosa.",
    grades: "4° – 7° grado",
    img: TB + "Juego de Formosa en baja.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1ZRNN9OW52vTyOIWr7cfgJgmTXd2SgBil",
    playUrl: "https://formosagame.netlify.app/",
  },
  {
    id: 7, title: "¿Cuánto Sabés de Ituzaingó?",
    subject: "Identidad Local", tag: "tag-culture", emoji: "🏘️",
    desc: "Historia y cultura del partido de Ituzaingó.",
    grades: "4° – 7° grado",
    img: TB + "Diseño Tablero para la Expo.png",
    driveUrl: "https://drive.google.com/drive/folders/1JX3F7nGqrOFisSk_7sUGA8f0hFb9k6AG",
    playUrl: "https://ituzango-gameboard.netlify.app/",
  },
  {
    id: 8, title: "¿Cuánto Sabés de la Albirroja?",
    subject: "Fútbol / Cultura", tag: "tag-culture", emoji: "⚽",
    desc: "Historia y pasión de la selección paraguaya de fútbol.",
    grades: "Todos los niveles",
    img: TB + "juego de Mesa Albiroja.png",
    driveUrl: "https://drive.google.com/drive/folders/1IO_jyfyIDw27S8zEpEqfEt5i4eqONKCj",
    playUrl: "https://cuantosabes-albirroja.netlify.app/",
  },
  {
    id: 9, title: "¿Cuánto Sabés de Malvinas?",
    subject: "Historia Argentina", tag: "tag-culture", emoji: "🇦🇷",
    desc: "Soberanía, historia y héroes de las Islas Malvinas.",
    grades: "4° – Secundaria",
    img: TB + "TABLERO cuanto sabes de malvinas5-imprimir.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1NMf9zFnz26mlnzIrbt84q4XsFTZlNuhD",
    playUrl: "https://malvinas-boardgame.netlify.app/",
  },
  {
    id: 10, title: "¿Cuánto Sabés de Paraguay?",
    subject: "Identidad Regional", tag: "tag-culture", emoji: "🌿",
    desc: "Historia, geografía y cultura del Paraguay.",
    grades: "Todos los niveles",
    img: TB + "tablero cuanto sabes de paraguay CMYK.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1d6C4KfiAElxAMk1HREgajPl9Wogv0V8v",
    playUrl: "https://paraguay-boardgame.netlify.app",
  },
  {
    id: 11, title: "¿Cuánto Sabés de Programación con Scratch?",
    subject: "Tecnología / STEM", tag: "tag-tech", emoji: "🐱",
    desc: "Pensamiento computacional y programación visual creativa.",
    grades: "3° – 6° grado",
    img: TB + "V1 Scratch.png",
    driveUrl: "https://drive.google.com/drive/folders/1tq7rxsLeSYjHbu2A9tUUK1DtoXv8UrmN",
    playUrl: "https://scratchgameboard.netlify.app",
  },
  {
    id: 12, title: "¿Cuánto Sabés de RCP?",
    subject: "Salud / Primeros Auxilios", tag: "tag-health", emoji: "❤️",
    desc: "Reanimación cardiopulmonar y primeros auxilios básicos.",
    grades: "Todos los niveles",
    img: TB + "juego rcp_2.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1ilNG7IM5X3Nx35xhz6JrySQh_1JlIBw5",
    playUrl: "https://preguntas-juego.netlify.app/",
  },
  {
    id: 13, title: "¿Cuánto Sabés de Robótica e IA?",
    subject: "Tecnología / STEM", tag: "tag-tech", emoji: "🤖",
    desc: "Inteligencia artificial, robótica y el futuro digital.",
    grades: "5° – Secundaria",
    img: TB + "Tablero RobÃ³tica e IA con Abrazador.png",
    driveUrl: "https://drive.google.com/drive/folders/1FgdRDn7ycLtjE6iGcPDf7ERMpD5VirZ1",
    playUrl: "https://preguntas-robotica.netlify.app",
  },
  {
    id: 14, title: "¿Cuánto Sabés de Rosario Central?",
    subject: "Fútbol / Cultura", tag: "tag-culture", emoji: "💛",
    desc: "Historia y pasión de Club Atlético Rosario Central.",
    grades: "Todos los niveles",
    img: TB + "Juego de mesa Rosario Central creado por La Clase Digital.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1Hvf5oOBdh3C6goX22Xgsw97jfCXuPNvT",
    playUrl: "https://preguntas-rosario-central.netlify.app",
  },
  {
    id: 15, title: "¿Cuánto Sabés de Tu Familia?",
    subject: "Valores / Convivencia", tag: "tag-emotions", emoji: "👨‍👩‍👧‍👦",
    desc: "Vínculos familiares, emociones y convivencia.",
    grades: "Todos los niveles",
    img: TB + "TABLERO Familia para Impresión.jpg",
    driveUrl: "https://drive.google.com/drive/folders/1UCoF7lYkYd4xpJQVv0Y4tNVQtDt-yt_h",
    playUrl: "https://familias-boardgame.netlify.app/",
  },
  {
    id: 16, title: "¿Cuánto Sabés de Tu Poder Personal?",
    subject: "Desarrollo Personal", tag: "tag-emotions", emoji: "⚡",
    desc: "Autoconocimiento, metas y liderazgo personal.",
    grades: "Secundaria",
    img: TB + "TABLERO cuanto sabes de tu poder personal .jpg",
    driveUrl: "https://drive.google.com/drive/folders/15DsHqjr6hqWQ6_8J850Q_x2n_EqapqSC",
    playUrl: "https://elgranencuentro.netlify.app",
  },
];

const features = [
  { icon: BookOpen, label: "Tablero didáctico incluido" },
  { icon: Printer, label: "Fichas imprimibles" },
  { icon: Smartphone, label: "App con preguntas editables (Free)" },
  { icon: CheckCircle, label: "Imprimís las veces que necesités" },
];



/* ─── Game player modal ─────────────────────────────────────── */
function GamePlayer({ game, onClose }: { game: typeof games[0]; onClose: () => void }) {
  const [fullscreen, setFullscreen] = useState(false);
  const [diceOpen, setDiceOpen] = useState(false);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className={`relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl flex flex-col
          ${fullscreen ? "w-full h-full rounded-none" : "w-full max-w-5xl"}`}
        style={{ height: fullscreen ? "100%" : "80vh" }}
      >
        {/* Header bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 shrink-0">
          <span className="text-lg">{game.emoji}</span>
          <span className="text-white font-semibold text-sm flex-1 truncate">{game.title}</span>
          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors "
          >
            {fullscreen ? "⬅ Salir" : "⛶ Pantalla completa"}
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-red-600 flex items-center justify-center text-white transition-colors text-sm font-bold  "
          >✕</button>
        </div>

        {/* iframe */}
        <iframe
          src={game.playUrl}
          title={game.title}
          className="flex-1 w-full border-0 bg-white"
          allow="fullscreen"
        />

        {/* Floating dice button — bottom-right corner */}
        <div className="absolute bottom-4 right-4 flex flex-col items-end gap-3 z-20">
          {diceOpen && (
            <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ width: 300 }}>
              <DiceRoller inline onClose={() => setDiceOpen(false)} />
            </div>
          )}
          <button
            onClick={() => setDiceOpen(!diceOpen)}
            title="Tirar dado educativo"
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-white transition-all hover:scale-110 active:scale-95 "
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
          >
            <Dices className="w-5 h-5" />
          </button>
        </div>


      </div>
    </div>
  );
}


/* ─── Animated-border card ──────────────────────────────────── */
function GameCard({
  game,
  index,
  onPlay,
}: {
  game: typeof games[0];
  index: number;
  onPlay: () => void;
}) {
  return (
    <div
      className="h-full group animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out fill-mode-both"
      style={{ animationDelay: `${(index % 4) * 100}ms` }}
    >
      <div className="rounded-3xl overflow-hidden flex flex-col h-full group border border-white/50 hover:border-[#00D4F5] transition-all duration-500 shadow-lg hover:shadow-2xl relative"
        style={{ 
          background: "rgba(255, 255, 255, 0.4)", 
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          transform: "translateZ(0)" 
        }}>

        {/* Thumbnail — full cover */}
        <div className="relative h-48 overflow-hidden shrink-0">
          {game.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={game.img}
              alt={game.title}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#F0F4FF,#E0E7FF)" }}>
              <span className="text-6xl group-hover:scale-110 transition-transform duration-500 select-none">
                {game.emoji}
              </span>
            </div>
          )}
          {/* Overlay gradient so text is readable */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top,rgba(10,11,46,0.6) 0%,transparent 45%)" }} />
          <span className={`absolute bottom-2.5 left-3 text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-lg backdrop-blur-md ${game.tag}`}
            style={{ border: "1px solid rgba(255,255,255,0.2)" }}>
            {game.subject}
          </span>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col flex-1 relative z-10">
          <h3 className="font-extrabold text-sm leading-snug mb-2 group-hover:text-[#00D4F5] transition-colors" style={{ color: "#12136b" }}>{game.title}</h3>
          <p className="text-xs leading-relaxed mb-4 flex-1 font-medium" style={{ color: "rgba(18,19,107,0.7)" }}>{game.desc}</p>
          
          <div className="flex gap-2 pt-4 border-t border-white/40">
            <button onClick={(e) => { e.stopPropagation(); onPlay(); }}
              className="flex-2 flex-grow-[2] flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[12px] font-bold transition-all hover:shadow-lg hover:shadow-[#84E010]/30 active:scale-95"
              style={{ background: "#84E010", color: "#0d0e52" }}>
              <Dices className="w-3.5 h-3.5" /> Jugar
            </button>
            <Link href={game.driveUrl} target="_blank" rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[12px] font-bold transition-all hover:bg-white/40 backdrop-blur-md active:scale-95 shadow-sm"
              style={{ background: "rgba(255,255,255,0.3)", border: "1px solid rgba(255,255,255,0.5)", color: "#12136b" }}>
              <Download className="w-3.5 h-3.5" /> Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


/* ─── Floating background blobs ────────────────────────────── */
function Blobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-blue-100/60 blur-3xl animate-blob" />
      <div className="absolute top-32 right-20 w-56 h-56 rounded-full bg-purple-100/50 blur-2xl animate-blob animation-delay-2" />
      <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl animate-blob animation-delay-4" />
    </div>
  );
}

/* ─── Main view ─────────────────────────────────────────────── */
export default function JuegosView() {
  const [search, setSearch] = useState("");
  const [diceOpen, setDiceOpen] = useState(false);
  const [playGame, setPlayGame] = useState<typeof games[0] | null>(null);

  const filtered = games.filter(
    (g) =>
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-20 pb-16 px-4"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)", minHeight: "52vh" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute top-[-60px] right-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(132,224,16,0.08) 0%,transparent 68%)" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >

              <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#84E010" }}>Biblioteca Educativa</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
                La colección{" "}
                <span style={{ color: "#00D4F5" }}>¿Cuánto Sabés de…?</span>
              </h1>
              <p className="text-base leading-relaxed mb-6 max-w-lg" style={{ color: "rgba(255,255,255,0.55)" }}>
                Juegos educativos analógicos / digitales listos para usar en aulas, talleres y eventos.
                Gamificación al centro del aprendizaje.
              </p>

              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: "rgba(0,212,245,0.15)", border: "1px solid rgba(0,212,245,0.3)" }}>
                      <f.icon className="w-3.5 h-3.5" style={{ color: "#00D4F5" }} />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{f.label}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="https://wa.me/5491143000057" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: "#84E010", color: "#0d0e52" }}>
                  <MessageCircle className="w-4 h-4" /> Consultar por WhatsApp
                </Link>
                <Link href="mailto:marcelo@empresariostv.com.ar?subject=Consulta ¿Cuánto Sabés de?"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.85)" }}>
                  <Mail className="w-4 h-4" /> Escribir por mail
                </Link>
              </div>
            </motion.div>

            {/* Right — Hero image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className="relative">
                {/* Pulse ring */}
                <div className="absolute inset-0 rounded-2xl border-2 " />
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/juegos/cuantoSabes_cuerpo.jpeg"
                    alt="¿Cuánto Sabés de Tu Cuerpo? — Juego educativo"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Search + grid ────────────────────────────────────── */}
      <section className="py-16 px-4 relative overflow-hidden"
        style={{ background: "#F0F4FF" }}>
        <Blobs />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-12 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <input type="text" placeholder="Buscar juego por nombre o temática…"
                value={search} onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl text-sm outline-none transition-all shadow-sm cursor-text"
                style={{ background: "#ffffff", border: "1px solid rgba(18,19,107,0.1)", color: "#12136b" }}
                onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "#00D4F5"; (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,212,245,0.1)"; }}
                onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(18,19,107,0.1)"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
              />
              <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 opacity-50" style={{ color: "#12136b" }} />
            </div>
            <span className="text-xs whitespace-nowrap font-medium shrink-0" style={{ color: "rgba(18,19,107,0.5)" }}>
              {filtered.length} juego{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((game, i) => (
              <GameCard key={game.id} game={game} index={i}
                onPlay={() => setPlayGame(game)}
              />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full text-center py-16 text-gray-400">
                No se encontraron juegos con ese término.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Dado 3D modal */}
      {diceOpen && <DiceRoller onClose={() => setDiceOpen(false)} />}

      {/* ── Game player modal */}
      {playGame && <GamePlayer game={playGame} onClose={() => setPlayGame(null)} />}

      {/* ── ¿Quiénes somos? ──────────────────────────────────── */}
      <section className="py-16 px-4" style={{ background: "#F0F4FF" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#12136b" }}>Quiénes Somos</p>
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#12136b" }}>Experiencias educativas gamificadas</h2>
          <p className="text-sm leading-relaxed text-gray-500">
            Somos La Clase Digital, un equipo que diseña experiencias educativas gamificadas para escuelas, municipios y organizaciones. Nuestra serie{" "}
            <span className="font-semibold" style={{ color: "#12136b" }}>"¿Cuánto Sabés de…?"</span> combina tableros físicos, cartas, dados y una app editable.
          </p>
        </div>
      </section>

      {/* ── CTA contacto ─────────────────────────────────────── */}
      <section className="py-14 px-4 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 100%)" }}>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">¿Querés implementar los juegos o necesitás un pack a medida?</h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>Escribinos y te armamos una propuesta para tu institución.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="https://wa.me/5491143000057" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "#84E010", color: "#0d0e52" }}>
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </Link>
            <Link href="mailto:marcelo@empresariostv.com.ar?subject=Consulta ¿Cuánto Sabés de?"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(0,212,245,0.12)", border: "1px solid rgba(0,212,245,0.3)", color: "#00D4F5" }}>
              <Mail className="w-4 h-4" /> Escribir por mail
            </Link>
            <Link href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.8)" }}>
              <ArrowRight className="w-4 h-4" /> Formulario
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
