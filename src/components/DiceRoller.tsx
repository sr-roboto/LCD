"use client";

import { useRef, useState, useCallback } from "react";
import { X, RotateCcw } from "lucide-react";

/* ─── 6 caras ──────────────────────────────────────────────── */
const FACES = [
  { id: 1, label: "1",     bg: "#ffffff", fg: "#1e293b", isText: false },
  { id: 2, label: "2",     bg: "#ffffff", fg: "#1e293b", isText: false },
  { id: 3, label: "3",     bg: "#ffffff", fg: "#1e293b", isText: false },
  { id: 4, label: "4",     bg: "#ffffff", fg: "#1e293b", isText: false },
  { id: 5, label: "Play",  bg: "#059669", fg: "#ffffff", isText: true  },
  { id: 6, label: "Hable", bg: "#7C3AED", fg: "#ffffff", isText: true  },
];

/* Posición de puntos por número */
const PIPS: Record<number, [number,number][]> = {
  1: [[50,50]],
  2: [[28,28],[72,72]],
  3: [[28,28],[50,50],[72,72]],
  4: [[28,28],[72,28],[28,72],[72,72]],
};

/* Rotación objetivo de cada cara */
const TARGET: Record<number,[number,number]> = {
  1: [0,0],       // frente
  2: [0,180],     // atrás
  3: [0,-90],     // derecha
  4: [0,90],      // izquierda
  5: [90,0],      // arriba
  6: [-90,0],     // abajo
};

const S = 100; // tamaño del dado en px
const H = S / 2;

interface Props { onClose: () => void; inline?: boolean }

export default function DiceRoller({ onClose, inline = false }: Props) {
  const [rx, setRx] = useState(-20);
  const [ry, setRy] = useState(30);
  const [rolling, setRolling] = useState(false);
  const [result, setResult] = useState<typeof FACES[0] | null>(null);
  const accX = useRef(-20);
  const accY = useRef(30);

  const roll = useCallback(() => {
    if (rolling) return;
    setRolling(true);
    setResult(null);
    const idx = Math.floor(Math.random() * 6) + 1;
    const [tx, ty] = TARGET[idx];
    // varias vueltas completas + parar en la cara correcta
    const newX = accX.current + 720 + tx - (accX.current % 360);
    const newY = accY.current + 1080 + ty - (accY.current % 360);
    accX.current = newX;
    accY.current = newY;
    setRx(newX);
    setRy(newY);
    setTimeout(() => {
      setRolling(false);
      setResult(FACES[idx - 1]);
    }, 1000);
  }, [rolling]);

  /* Renderiza una cara del cubo */
  const renderFace = (id: number, transform: string) => {
    const f = FACES[id - 1];
    const pips = PIPS[id];
    return (
      <div
        key={id}
        style={{
          position: "absolute",
          width: S, height: S,
          transform,
          background: f.bg,
          borderRadius: 12,
          border: "2px solid rgba(0,0,0,0.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backfaceVisibility: "visible",
          boxShadow: "inset 0 2px 8px rgba(255,255,255,0.9), inset 0 -2px 8px rgba(0,0,0,0.15)",
        }}
      >
        {f.isText ? (
          <span style={{
            fontWeight: 900,
            fontSize: 18,
            color: f.fg,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "-0.02em",
          }}>
            {f.label}
          </span>
        ) : pips ? (
          <div style={{ position: "relative", width: 70, height: 70 }}>
            {pips.map(([cx, cy], i) => (
              <div key={i} style={{
                position: "absolute",
                width: 14, height: 14,
                borderRadius: "50%",
                background: f.fg,
                left: `calc(${cx}% - 7px)`,
                top:  `calc(${cy}% - 7px)`,
                boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
              }} />
            ))}
          </div>
        ) : null}
      </div>
    );
  };

  const cube = (
    /* perspective wrapper — must NOT have transform-style itself */
    <div style={{ perspective: 500, perspectiveOrigin: "50% 50%", width: S, height: S }}>
      {/* rotating cube — preserve-3d, NO filter here */}
      <div style={{
        width: S, height: S,
        position: "relative",
        transformStyle: "preserve-3d",
        transform: `rotateX(${rx}deg) rotateY(${ry}deg)`,
        transition: rolling
          ? "transform 1s cubic-bezier(0.25,0.46,0.45,0.94)"
          : "none",
      }}>
        {renderFace(1, `translateZ(${H}px)`)}
        {renderFace(2, `rotateY(180deg) translateZ(${H}px)`)}
        {renderFace(3, `rotateY(90deg) translateZ(${H}px)`)}
        {renderFace(4, `rotateY(-90deg) translateZ(${H}px)`)}
        {renderFace(5, `rotateX(-90deg) translateZ(${H}px)`)}
        {renderFace(6, `rotateX(90deg) translateZ(${H}px)`)}
      </div>
    </div>
  );

  const panel = (
    <div
      style={{ background: "linear-gradient(135deg,#0f172a,#1e1b4b)" }}
      className="w-full rounded-3xl overflow-hidden"
    >
      {/* Cabecera */}
      <div className="flex items-center justify-between px-5 pt-5 pb-2">
        <span className="text-white font-bold text-sm">Dado 3D</span>
        <button
          onClick={onClose}
          className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X className="w-3.5 h-3.5 text-white" />
        </button>
      </div>

      {/* Dado */}
      <div className="flex flex-col items-center py-7 gap-6">
        {/* shadow pedestal */}
        <div style={{ position: "relative", display: "inline-block" }}>
          {cube}
          {/* sombra debajo del dado */}
          <div style={{
            position: "absolute",
            bottom: -12, left: "50%",
            transform: "translateX(-50%)",
            width: 80, height: 12,
            background: "rgba(0,0,0,0.35)",
            borderRadius: "50%",
            filter: "blur(6px)",
          }} />
        </div>

        {/* Resultado — sólo texto simple */}
        <p
          className="text-center text-sm font-semibold min-h-[1.5rem] transition-all"
          style={{
            color: result
              ? (result.id === 5 ? "#34d399" : result.id === 6 ? "#a78bfa" : "#f1f5f9")
              : "rgba(255,255,255,0.25)",
          }}
        >
          {result ? result.label : "—"}
        </p>

        {/* Botón tirar */}
        <button
          onClick={roll}
          disabled={rolling}
          className="flex items-center gap-2 px-7 py-2.5 rounded-xl font-bold text-white text-sm transition-all"
          style={{
            background: rolling ? "rgba(255,255,255,0.08)" : "linear-gradient(135deg,#2563EB,#7C3AED)",
            opacity: rolling ? 0.5 : 1,
            boxShadow: rolling ? "none" : "0 4px 16px rgba(99,102,241,0.4)",
          }}
        >
          <RotateCcw className={`w-3.5 h-3.5 ${rolling ? "animate-spin" : ""}`} />
          {rolling ? "Tirando…" : "Tirar"}
        </button>
      </div>
    </div>
  );

  if (inline) return panel;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0,0,0,0.72)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-xs rounded-3xl overflow-hidden shadow-2xl">
        {panel}
      </div>
    </div>
  );
}
