"use client";

import { useRef, useCallback, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Gamepad2, BookOpen, Printer, Smartphone, CheckCircle, ArrowRight, MessageCircle, Mail, Download, Dices } from "lucide-react";
import DiceRoller from "@/components/DiceRoller";

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
  { icon: Printer,  label: "Fichas imprimibles" },
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
          ${fullscreen ? "w-full h-full rounded-none" : "w-full max-w-5xl" }`}
        style={{ height: fullscreen ? "100%" : "80vh" }}
      >
        {/* Header bar */}
        <div className="flex items-center gap-3 px-4 py-3 bg-gray-800 shrink-0">
          <span className="text-lg">{game.emoji}</span>
          <span className="text-white font-semibold text-sm flex-1 truncate">{game.title}</span>
          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors"
          >
            {fullscreen ? "↙ Salir" : "⛶ Pantalla completa"}
          </button>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-gray-700 hover:bg-red-600 flex items-center justify-center text-white transition-colors text-sm font-bold"
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
            className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl text-white transition-all hover:scale-110 active:scale-95"
            style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
          >
            <Dices className="w-5 h-5" />
          </button>
        </div>


      </div>
    </div>
  );
}


/* ─── 3D Tilt card ──────────────────────────────────────────── */
function TiltCard({
  game,
  index,
  onDice,
  onPlay,
}: {
  game: typeof games[0];
  index: number;
  onDice: () => void;
  onPlay: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const rotX = (((e.clientY - rect.top) / rect.height) - 0.5) * -12;
    const rotY = (((e.clientX - rect.left) / rect.width) - 0.5) * 12;
    el.style.transform = `perspective(700px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.03)`;
    el.style.transition = "transform 0.08s ease";
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = "perspective(700px) rotateX(0deg) rotateY(0deg) scale(1)";
    el.style.transition = "transform 0.5s ease";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm
                   hover:shadow-xl hover:border-blue-200 transition-shadow duration-300
                   will-change-transform group cursor-default flex flex-col h-full"
      >
        {/* Top accent bar */}
        <div className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500
                        origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-400" />

        {/* Thumbnail */}
        <div className="relative h-40 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center overflow-hidden shrink-0">
          <div className="absolute w-32 h-32 rounded-full border-[2px] border-dashed border-blue-100 animate-spin-slow" />
          {game.img ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={game.img}
              alt={game.title}
              className="max-h-full max-w-full object-contain relative z-10
                         group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <span className="text-5xl relative z-10 group-hover:scale-125 transition-transform duration-500 select-none">
              {game.emoji}
            </span>
          )}
          <span className="absolute top-3 left-3 text-[10px] font-black text-gray-400">#{game.id}</span>
        </div>

        {/* Body */}
        <div className="p-4 flex flex-col flex-1">
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 inline-block ${game.tag}`}>
            {game.subject}
          </span>
          <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">{game.title}</h3>
          <p className="text-xs text-gray-500 leading-relaxed mb-2 flex-1">{game.desc}</p>
          <p className="text-[10px] font-semibold text-gray-400 mb-4">🎓 {game.grades}</p>

          {/* Action buttons */}
          <div className="flex gap-2 pt-3 border-t border-gray-100">
            {/* Jugar — opens iframe modal */}
            <button
              onClick={(e) => { e.stopPropagation(); onPlay(); }}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-[11px] font-bold
                         text-white transition-colors"
              style={{ background: "linear-gradient(135deg,#2563EB,#7C3AED)" }}
            >
              <Dices className="w-3.5 h-3.5" /> Jugar
            </button>
            {/* Info — opens Drive folder */}
            <Link
              href={game.driveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-[11px] font-semibold
                         bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200 transition-colors"
            >
              <Download className="w-3.5 h-3.5" /> Info
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
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
  const heroRef = useRef(null);

  const filtered = games.filter(
    (g) =>
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative page-hero-gradient pt-20 pb-16 px-4 overflow-hidden">
        <Blobs />
        <div ref={heroRef} className="relative max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-200
                              bg-white text-sm text-blue-600 mb-6 shadow-sm font-medium">
                <Gamepad2 className="w-4 h-4" />
                Biblioteca de 16 juegos educativos
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-5">
                La colección{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                  ¿Cuánto Sabés de…?
                </span>
              </h1>

              <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-lg">
                Juegos educativos analógicos / digitales listos para usar en aulas, talleres y eventos.
                Gamificación al centro del aprendizaje.
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-8">
                {features.map((f) => (
                  <li key={f.label} className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <f.icon className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                    <span className="text-sm text-gray-600">{f.label}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://wa.me/5491143000057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                             text-white shadow-md hover:shadow-lg transition-all"
                  style={{ backgroundColor: "var(--brand-blue)" }}
                >
                  <MessageCircle className="w-4 h-4" /> Consultar por WhatsApp
                </Link>
                <Link
                  href="mailto:marcelo@empresariostv.com.ar?subject=Consulta ¿Cuánto Sabés de?"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                             text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 transition-colors"
                >
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
                <div className="absolute inset-0 rounded-2xl border-2 border-blue-200 animate-pulse-ring" />
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
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Search bar */}
          <div className="flex items-center gap-3 mb-12 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Buscar juego por nombre o temática…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-xl border border-gray-200 text-sm
                           focus:outline-none focus:ring-2 focus:border-transparent bg-gray-50"
                style={{ "--tw-ring-color": "var(--brand-blue)" } as React.CSSProperties}
              />
              <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap font-medium shrink-0">
              {filtered.length} juego{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((game, i) => (
              <TiltCard key={game.id} game={game} index={i}
                onDice={() => setDiceOpen(true)}
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand-blue)" }}>
            Quiénes Somos
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Experiencias educativas gamificadas
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Somos La Clase Digital, un equipo que diseña experiencias educativas gamificadas
            para escuelas, municipios y organizaciones. Nuestra serie{" "}
            <span className="font-semibold text-gray-700">"¿Cuánto Sabés de…?"</span> combina
            tableros físicos, cartas, dados y una app editable. Podés pedirnos crear tu juego
            a medida, o adquirir la versión full para desarrollarlo vos mismo.
          </p>
        </div>
      </section>

      {/* ── CTA contacto ─────────────────────────────────────── */}
      <section className="py-14 px-4" style={{ backgroundColor: "var(--brand-blue)" }}>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-bold mb-3">
            ¿Querés implementar los juegos o necesitás un pack a medida?
          </h2>
          <p className="text-blue-100 text-sm mb-8">
            Escribinos y te armamos una propuesta para tu institución.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="https://wa.me/5491143000057"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white font-semibold text-sm
                         hover:bg-blue-50 transition-colors"
              style={{ color: "var(--brand-blue)" }}
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </Link>
            <Link
              href="mailto:marcelo@empresariostv.com.ar?subject=Consulta ¿Cuánto Sabés de?"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40
                         text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <Mail className="w-4 h-4" /> Escribir por mail
            </Link>
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/40
                         text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Formulario de contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
