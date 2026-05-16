'use client';

/* ────────────────────────────────────────────────────────────────
   AnimatedEduBg — fondo animado temático: educación + pantallas
   táctiles. Todos los valores son fijos (no random) para SSR.
──────────────────────────────────────────────────────────────── */

const CYAN = '#00D4F5';
const LIME = '#84E010';

/* ── Íconos SVG temáticos ───────────────────────────────────── */

const TabletIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 44 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="42" height="54" rx="5" stroke={color} strokeWidth="1.8" fill={color} fillOpacity="0.1" />
    <rect x="5" y="5" width="34" height="40" rx="2" stroke={color} strokeWidth="1.1" fill={color} fillOpacity="0.08" />
    <circle cx="22" cy="50" r="2.5" fill={color} fillOpacity="0.7" />
    <circle cx="22" cy="23" r="6" stroke={color} strokeWidth="1.2" strokeDasharray="3 1.5" />
    <circle cx="22" cy="23" r="2.5" fill={color} fillOpacity="1" />
    <path d="M14 23 Q22 14 30 23" stroke={color} strokeWidth="1" fill="none" opacity="0.6" />
    <path d="M10 23 Q22 10 34 23" stroke={color} strokeWidth="0.8" fill="none" opacity="0.35" />
  </svg>
);

const TouchRipple = ({ color }: { color: string }) => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="6" fill={color} fillOpacity="0.9" />
    <circle cx="28" cy="28" r="14" stroke={color} strokeWidth="1.5" />
    <circle cx="28" cy="28" r="23" stroke={color} strokeWidth="1" opacity="0.5" />
  </svg>
);

const GradCapIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="24,3 45,14 24,25 3,14" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.15" />
    <path d="M34 19 L34 30 Q24 35 14 30 L14 19" stroke={color} strokeWidth="1.3" fill={color} fillOpacity="0.1" />
    <line x1="45" y1="14" x2="45" y2="28" stroke={color} strokeWidth="1.3" />
    <circle cx="45" cy="29" r="2.5" fill={color} />
  </svg>
);

const BookIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 46 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 5 Q11 3 4 7 L4 33 Q11 29 23 31 Z" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.12" />
    <path d="M23 5 Q35 3 42 7 L42 33 Q35 29 23 31 Z" stroke={color} strokeWidth="1.4" fill={color} fillOpacity="0.12" />
    <line x1="23" y1="5" x2="23" y2="31" stroke={color} strokeWidth="1.6" />
    <line x1="10" y1="13" x2="20" y2="12" stroke={color} strokeWidth="0.9" opacity="0.6" />
    <line x1="10" y1="18" x2="20" y2="17" stroke={color} strokeWidth="0.9" opacity="0.6" />
    <line x1="10" y1="23" x2="20" y2="22" stroke={color} strokeWidth="0.9" opacity="0.6" />
    <line x1="26" y1="13" x2="36" y2="12" stroke={color} strokeWidth="0.9" opacity="0.6" />
    <line x1="26" y1="18" x2="36" y2="17" stroke={color} strokeWidth="0.9" opacity="0.6" />
  </svg>
);

const WifiIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 10 Q20 0 38 10" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.4" />
    <path d="M7 17 Q20 9 33 17" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.65" />
    <path d="M13 24 Q20 18 27 24" stroke={color} strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.85" />
    <circle cx="20" cy="29" r="3" fill={color} />
  </svg>
);

const StarIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 1 L14 27 M1 14 L27 14 M4.5 4.5 L23.5 23.5 M23.5 4.5 L4.5 23.5"
      stroke={color} strokeWidth="2" strokeLinecap="round" />
    <circle cx="14" cy="14" r="3.5" fill={color} />
  </svg>
);

const PencilIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 16 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="12" height="36" rx="2.5" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.12" />
    <path d="M2 38 L8 50 L14 38 Z" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.25" />
    <line x1="8" y1="50" x2="8" y2="52" stroke={color} strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="11" x2="12" y2="11" stroke={color} strokeWidth="1" opacity="0.6" />
    <line x1="4" y1="17" x2="12" y2="17" stroke={color} strokeWidth="1" opacity="0.4" />
  </svg>
);

const RobotIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 44 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Antena */}
    <line x1="22" y1="1" x2="22" y2="8" stroke={color} strokeWidth="1.5" />
    <circle cx="22" cy="1" r="2" fill={color} />
    {/* Cabeza */}
    <rect x="7" y="8" width="30" height="20" rx="4" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.1" />
    {/* Ojos */}
    <circle cx="15" cy="18" r="4" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15" />
    <circle cx="29" cy="18" r="4" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15" />
    <circle cx="15" cy="18" r="1.5" fill={color} />
    <circle cx="29" cy="18" r="1.5" fill={color} />
    {/* Cuerpo */}
    <rect x="10" y="30" width="24" height="18" rx="3" stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.08" />
    {/* Brazos */}
    <rect x="2" y="32" width="6" height="12" rx="2" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.1" />
    <rect x="36" y="32" width="6" height="12" rx="2" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.1" />
    {/* Patas */}
    <rect x="12" y="50" width="6" height="4" rx="1" fill={color} fillOpacity="0.5" />
    <rect x="26" y="50" width="6" height="4" rx="1" fill={color} fillOpacity="0.5" />
    {/* Panel */}
    <rect x="17" y="34" width="10" height="6" rx="1.5" stroke={color} strokeWidth="0.9" fill={color} fillOpacity="0.12" />
    <line x1="19" y1="37" x2="25" y2="37" stroke={color} strokeWidth="0.8" opacity="0.7" />
  </svg>
);

const BulbIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Ampolleta */}
    <path d="M18 3 C9 3 4 9 4 17 C4 23 8 27 11 31 L11 37 L25 37 L25 31 C28 27 32 23 32 17 C32 9 27 3 18 3 Z"
      stroke={color} strokeWidth="1.5" fill={color} fillOpacity="0.12" />
    {/* Base */}
    <rect x="12" y="37" width="12" height="4" rx="1" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.2" />
    <rect x="13" y="41" width="10" height="3" rx="1" stroke={color} strokeWidth="1.2" fill={color} fillOpacity="0.15" />
    {/* Filamento */}
    <path d="M14 22 Q18 18 22 22" stroke={color} strokeWidth="1.3" fill="none" />
    {/* Rayos */}
    <line x1="18" y1="0" x2="18" y2="-4" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="5" y1="5" x2="2" y2="2" stroke={color} strokeWidth="1.2" opacity="0.5" />
    <line x1="31" y1="5" x2="34" y2="2" stroke={color} strokeWidth="1.2" opacity="0.5" />
  </svg>
);

/* ── Partículas ─────────────────────────────────────────────── */
const PARTICLES = [
  // Tablets
  { type: 'tablet', x: 4,   y: 6,  delay: 0,   dur: 9,  size: 42, color: CYAN },
  { type: 'tablet', x: 86,  y: 14, delay: 3,   dur: 10, size: 36, color: LIME },
  { type: 'tablet', x: 40,  y: 58, delay: 6,   dur: 8,  size: 48, color: CYAN },
  { type: 'tablet', x: 68,  y: 76, delay: 1.5, dur: 11, size: 32, color: LIME },
  { type: 'tablet', x: 22,  y: 84, delay: 8,   dur: 9,  size: 38, color: CYAN },
  { type: 'tablet', x: 92,  y: 46, delay: 4,   dur: 10, size: 30, color: LIME },
  // Touch ripples
  { type: 'ripple', x: 18,  y: 35, delay: 0.5, dur: 2.2, size: 36, color: CYAN },
  { type: 'ripple', x: 62,  y: 50, delay: 3.5, dur: 2.0, size: 30, color: LIME },
  { type: 'ripple', x: 48,  y: 12, delay: 6.5, dur: 2.4, size: 34, color: CYAN },
  { type: 'ripple', x: 80,  y: 38, delay: 5,   dur: 2.0, size: 26, color: LIME },
  { type: 'ripple', x: 28,  y: 68, delay: 9,   dur: 2.2, size: 28, color: CYAN },
  { type: 'ripple', x: 74,  y: 90, delay: 11,  dur: 2.4, size: 24, color: LIME },
  // Gorros
  { type: 'grad',   x: 10,  y: 68, delay: 2,   dur: 11, size: 36, color: LIME },
  { type: 'grad',   x: 76,  y: 82, delay: 7,   dur: 9,  size: 30, color: CYAN },
  { type: 'grad',   x: 52,  y: 88, delay: 12,  dur: 10, size: 28, color: LIME },
  // Libros
  { type: 'book',   x: 30,  y: 80, delay: 5,   dur: 12, size: 34, color: CYAN },
  { type: 'book',   x: 90,  y: 55, delay: 9,   dur: 10, size: 28, color: LIME },
  { type: 'book',   x: 56,  y: 68, delay: 14,  dur: 11, size: 30, color: CYAN },
  // WiFi
  { type: 'wifi',   x: 55,  y: 4,  delay: 1,   dur: 6,  size: 34, color: CYAN },
  { type: 'wifi',   x: 20,  y: 18, delay: 5.5, dur: 7,  size: 26, color: LIME },
  { type: 'wifi',   x: 73,  y: 28, delay: 10,  dur: 8,  size: 24, color: CYAN },
  { type: 'wifi',   x: 8,   y: 48, delay: 3,   dur: 6,  size: 28, color: LIME },
  // Estrellas
  { type: 'star',   x: 46,  y: 40, delay: 0,   dur: 3.5, size: 26, color: LIME },
  { type: 'star',   x: 14,  y: 50, delay: 2,   dur: 3.0, size: 20, color: CYAN },
  { type: 'star',   x: 82,  y: 22, delay: 5,   dur: 4.0, size: 22, color: LIME },
  { type: 'star',   x: 36,  y: 8,  delay: 8,   dur: 3.5, size: 18, color: CYAN },
  { type: 'star',   x: 66,  y: 62, delay: 11,  dur: 4.0, size: 24, color: LIME },
  // Lápices
  { type: 'pencil', x: 34,  y: 26, delay: 3,   dur: 10, size: 24, color: LIME },
  { type: 'pencil', x: 58,  y: 74, delay: 7,   dur: 9,  size: 20, color: CYAN },
  { type: 'pencil', x: 84,  y: 68, delay: 12,  dur: 11, size: 22, color: LIME },
  // Robots
  { type: 'robot',  x: 2,   y: 28, delay: 4,   dur: 12, size: 40, color: CYAN },
  { type: 'robot',  x: 78,  y: 4,  delay: 8,   dur: 10, size: 36, color: LIME },
  { type: 'robot',  x: 48,  y: 78, delay: 15,  dur: 11, size: 34, color: CYAN },
  // Ampolletas
  { type: 'bulb',   x: 62,  y: 20, delay: 2,   dur: 8,  size: 32, color: LIME },
  { type: 'bulb',   x: 24,  y: 60, delay: 6,   dur: 9,  size: 28, color: CYAN },
  { type: 'bulb',   x: 90,  y: 78, delay: 11,  dur: 7,  size: 30, color: LIME },
] as const;

type ParticleType = typeof PARTICLES[number]['type'];

const ICON_MAP: Record<ParticleType, React.ComponentType<{ color: string }>> = {
  tablet: TabletIcon,
  ripple: TouchRipple,
  grad:   GradCapIcon,
  book:   BookIcon,
  wifi:   WifiIcon,
  star:   StarIcon,
  pencil: PencilIcon,
  robot:  RobotIcon,
  bulb:   BulbIcon,
};

export default function AnimatedEduBg({ opacity = 0.10 }: { opacity?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ opacity }}>
      <style>{`
        @keyframes edu-float {
          0%,100% { transform: translateY(0px) rotate(0deg) scale(1); }
          30%      { transform: translateY(-22px) rotate(6deg) scale(1.05); }
          65%      { transform: translateY(-12px) rotate(-5deg) scale(0.97); }
        }
        @keyframes edu-float-r {
          0%,100% { transform: translateY(0px) rotate(0deg) scale(1); }
          30%      { transform: translateY(-18px) rotate(-7deg) scale(1.06); }
          65%      { transform: translateY(-28px) rotate(4deg) scale(0.96); }
        }
        @keyframes edu-ripple {
          0%   { transform: scale(1);   opacity: 0.9; }
          100% { transform: scale(3.2); opacity: 0; }
        }
        @keyframes edu-twinkle {
          0%,100% { transform: scale(1) rotate(0deg);   opacity: 0.7; }
          50%      { transform: scale(1.5) rotate(30deg); opacity: 1; }
        }
        @keyframes edu-wifi {
          0%,100% { opacity: 0.35; transform: scale(1); }
          50%      { opacity: 1;    transform: scale(1.1); }
        }
        @keyframes edu-pulse-glow {
          0%,100% { transform: scale(1) translateY(0px);   filter: brightness(1); }
          50%      { transform: scale(1.08) translateY(-16px); filter: brightness(1.4); }
        }
      `}</style>

      {PARTICLES.map((p, i) => {
        const Icon = ICON_MAP[p.type];
        const isRipple = p.type === 'ripple';
        const isStar   = p.type === 'star';
        const isWifi   = p.type === 'wifi';
        const isBulb   = p.type === 'bulb';
        // Alternate float direction per index
        const floatKf  = i % 2 === 0 ? 'edu-float' : 'edu-float-r';

        const animation = isRipple
          ? `edu-ripple ${p.dur}s ease-out ${p.delay}s infinite`
          : isStar
          ? `edu-twinkle ${p.dur}s ease-in-out ${p.delay}s infinite`
          : isWifi
          ? `edu-wifi ${p.dur}s ease-in-out ${p.delay}s infinite`
          : isBulb
          ? `edu-pulse-glow ${p.dur}s ease-in-out ${p.delay}s infinite`
          : `${floatKf} ${p.dur}s ease-in-out ${p.delay}s infinite`;

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left:   `${p.x}%`,
              top:    `${p.y}%`,
              width:  p.size,
              height: p.size,
              animation,
            }}>
            <Icon color={p.color} />
          </div>
        );
      })}
    </div>
  );
}
