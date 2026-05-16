'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

/* Manito SVG de LCD (lime) — dibujada inline */
const HandSVG = () => (
  <svg viewBox="0 0 500 500" width="38" height="38" style={{ display: 'block' }}>
    <path
      d="M62.308,358.393c6.892,50.624 97.239,143.042 188.889,53.622c41.809,-40.792 7.181,-35.083 98.783,-75.508c14.215,-6.273 61.496,-26.22 75.48,-32.48c8.53,-3.818 18.983,-10.2 21.569,-17.208c5.071,-13.743 -2.03,-22.423 -31.274,-15.528c-9.749,2.299 -86.386,33.001 -100.354,30.129c-22.032,-4.529 58.378,-46.893 84.936,-63.526c29.592,-18.533 36.508,-21.771 41.032,-29.854c6.219,-11.112 6.931,-37.649 -29.307,-24.734c-12.648,4.508 -113.443,67.632 -120.629,57.962c-6.917,-9.309 101.228,-100.043 114.59,-118.557c8.372,-11.599 -10.049,-34.056 -31.968,-20.714c-8.937,5.44 -112.586,99.238 -122.209,99.846c-22.506,1.422 45.699,-80.606 73.779,-120.416c11.596,-16.44 -15.501,-46.607 -39.729,-20.859c-12.923,13.734 -92.515,127.648 -108.59,145.09c-48.765,52.915 -54.622,36.953 -63.008,22.952c-7.609,-12.705 -5.918,-58.335 -14.684,-81.15c-8.203,-21.351 -16.063,-28.917 -24.028,-29.782c-7.965,-0.865 -26.962,3.76 -23.761,24.591c12.292,79.984 8.414,108.77 7.208,144.814c-0.624,18.661 -0.675,16.805 0.462,43.651c0.298,7.028 1.139,15.371 2.811,27.658Z"
      fill="#84E010"
    />
  </svg>
);

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  /* Anillo con retraso gelatina */
  const ringX = useSpring(mouseX, { stiffness: 120, damping: 18, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 120, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setHovering(!!target.closest('a,button,[role="button"],input,textarea,select,[tabindex]'));
    };

    const down = () => setClicking(true);
    const up = () => setClicking(false);

    document.addEventListener('mousemove', move);
    document.addEventListener('mousedown', down);
    document.addEventListener('mouseup', up);
    document.addEventListener('mouseleave', () => setVisible(false));
    document.addEventListener('mouseenter', () => setVisible(true));

    return () => {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mousedown', down);
      document.removeEventListener('mouseup', up);
    };
  }, [mouseX, mouseY, visible]);

  if (!visible) return null;

  return (
    <>
      {/* ── Punto central (solo cuando NO está sobre elemento interactivo) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}>

        <AnimatePresence mode="popLayout">
          {!hovering ? (
            /* Punto azul default */
            <motion.div
              key="dot"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: clicking ? 0.5 : 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#00D4F5',
                boxShadow: '0 0 10px rgba(0,212,245,0.7)',
              }} />
          ) : (
            /* Manito al pasar sobre interactivos */
            <motion.div
              key="hand"
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{
                scale: clicking ? 0.9 : 1.3,
                opacity: 1,
                rotate: clicking ? -25 : 0,
              }}
              exit={{ scale: 0, opacity: 0, rotate: -20 }}
              transition={{ type: 'spring', stiffness: 320, damping: 20 }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(132,224,16,0.85))',
                transformOrigin: '40% 80%',
              }}>
              <HandSVG />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* ── Anillo exterior gelatina (siempre visible) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}>
        <motion.div
          animate={{
            scale: clicking ? 0.6 : hovering ? 2.2 : 1,
            borderColor: hovering ? '#84E010' : '#00D4F5',
            opacity: hovering ? 0.7 : 0.45,
          }}
          transition={{ type: 'spring', stiffness: 180, damping: 20 }}
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '2px solid #00D4F5',
          }} />
      </motion.div>
    </>
  );
}
