'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  poster?: string;
}

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
}

/* ─── Icons ────────────────────────────────────────────────── */
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M8 5v14l11-7z" />
  </svg>
);
const PauseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
  </svg>
);
const VolumeIcon = ({ muted }: { muted: boolean }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    {muted
      ? <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
      : <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
    }
  </svg>
);
const FullscreenIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
  </svg>
);
const ReplayIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
  </svg>
);

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);

  /* Auto-hide controls */
  useEffect(() => {
    if (playing) {
      const timer = setTimeout(() => setShowControls(false), 3000);
      return () => clearTimeout(timer);
    } else {
      setShowControls(true);
    }
  }, [playing]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    playing ? v.pause() : v.play();
    setPlaying(!playing);
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden group"
      style={{ borderRadius: '24px', background: '#000', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => playing && setShowControls(false)}
    >

      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full block"
        style={{ display: 'block', maxHeight: '80vh', objectFit: 'contain' }}
        onClick={togglePlay}
        playsInline
        autoPlay
        muted
        loop
      />

      {/* ── Simple Controls ── */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-6 left-6 flex items-center gap-3 z-20"
          >
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="w-12 h-12 flex items-center justify-center rounded-full transition-transform hover:scale-110 active:scale-95 shadow-lg"
              style={{ background: '#84E010', color: '#0d0e52' }}
            >
              {playing ? <PauseIcon /> : <PlayIcon />}
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="w-10 h-10 flex items-center justify-center rounded-full transition-all hover:bg-white/20 backdrop-blur-md border border-white/20 shadow-lg"
              style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }}
            >
              <VolumeIcon muted={muted} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live border glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[24px]"
        style={{ boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.1)' }} />
    </div>
  );
}
