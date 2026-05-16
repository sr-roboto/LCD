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

  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);          // 0–1
  const [buffered, setBuffered] = useState(0);           // 0–1
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);

  /* Auto-hide controls */
  const resetHide = useCallback(() => {
    setShowControls(true);
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => {
      if (playing) setShowControls(false);
    }, 2800);
  }, [playing]);

  /* Events */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onTimeUpdate = () => {
      setCurrentTime(v.currentTime);
      setProgress(v.duration ? v.currentTime / v.duration : 0);
      if (v.buffered.length > 0) {
        setBuffered(v.buffered.end(v.buffered.length - 1) / v.duration);
      }
    };
    const onLoaded = () => setDuration(v.duration);
    const onPlay = () => { setPlaying(true); setEnded(false); };
    const onPause = () => setPlaying(false);
    const onEnded = () => {
      setPlaying(false);
      setEnded(true);
      setShowControls(true);
    };

    v.addEventListener('timeupdate', onTimeUpdate);
    v.addEventListener('loadedmetadata', onLoaded);
    v.addEventListener('play', onPlay);
    v.addEventListener('pause', onPause);
    v.addEventListener('ended', onEnded);

    return () => {
      v.removeEventListener('timeupdate', onTimeUpdate);
      v.removeEventListener('loadedmetadata', onLoaded);
      v.removeEventListener('play', onPlay);
      v.removeEventListener('pause', onPause);
      v.removeEventListener('ended', onEnded);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (ended) {
      v.currentTime = 0;
      setEnded(false);
    }
    playing ? v.pause() : v.play();
    resetHide();
  };

  const seekTo = (e: React.MouseEvent<HTMLDivElement>) => {
    const bar = progressRef.current;
    const v = videoRef.current;
    if (!bar || !v) return;
    const rect = bar.getBoundingClientRect();
    const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    v.currentTime = pct * v.duration;
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !muted;
    setMuted(!muted);
  };

  const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v) return;
    const val = parseFloat(e.target.value);
    v.volume = val;
    setVolume(val);
    setMuted(val === 0);
  };

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) document.exitFullscreen();
    else el.requestFullscreen();
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none overflow-hidden"
      style={{ borderRadius: '16px', background: '#000', boxShadow: '0 0 80px rgba(0,212,245,0.12), 0 40px 100px rgba(0,0,0,0.6)' }}
      onMouseMove={resetHide}
      onMouseLeave={() => { if (playing) setShowControls(false); }}>

      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full block"
        style={{ display: 'block', maxHeight: '72vh', objectFit: 'contain', background: '#000' }}
        onClick={togglePlay}
        playsInline
      />

      {/* ── Overlay gradient bottom ── */}
      <div className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{ height: '45%', background: 'linear-gradient(to top, rgba(4,5,28,0.95) 0%, transparent 100%)' }} />

      {/* ── Big play/pause center button ── */}
      <AnimatePresence>
        {(!playing || ended) && (
          <motion.button
            key={ended ? 'replay' : 'play'}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            onClick={togglePlay}
            className="absolute inset-0 flex items-center justify-center pointer-events-auto"
            aria-label={ended ? 'Replay' : 'Play'}>
            <div className="flex items-center justify-center rounded-full"
              style={{ width: 72, height: 72, background: 'rgba(0,212,245,0.18)', border: '2px solid rgba(0,212,245,0.5)', backdropFilter: 'blur(12px)', color: '#00D4F5' }}>
              {ended ? <ReplayIcon /> : <PlayIcon />}
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Controls bar ── */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 bottom-0 px-4 pb-3 pt-2 pointer-events-auto">

            {/* Progress bar */}
            <div
              ref={progressRef}
              onClick={seekTo}
              className="w-full mb-3 relative group"
              style={{ height: 4, cursor: 'pointer' }}>
              {/* Track */}
              <div className="absolute inset-0 rounded-full" style={{ background: 'rgba(255,255,255,0.15)' }} />
              {/* Buffered */}
              <div className="absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                style={{ width: `${buffered * 100}%`, background: 'rgba(255,255,255,0.22)' }} />
              {/* Progress */}
              <div className="absolute top-0 left-0 h-full rounded-full transition-none"
                style={{ width: `${progress * 100}%`, background: 'linear-gradient(90deg,#00D4F5,#84E010)' }} />
              {/* Thumb */}
              <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ left: `calc(${progress * 100}% - 6px)`, background: '#fff', boxShadow: '0 0 6px rgba(0,212,245,0.8)' }} />
            </div>

            {/* Bottom row */}
            <div className="flex items-center gap-3">
              {/* Play/Pause */}
              <button onClick={togglePlay}
                className="text-white hover:text-cyan-400 transition-colors flex-shrink-0"
                aria-label={playing ? 'Pause' : 'Play'}>
                {playing ? <PauseIcon /> : <PlayIcon />}
              </button>

              {/* Time */}
              <span className="text-xs font-mono flex-shrink-0" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              <div className="flex-1" />

              {/* Replay badge */}
              {ended && (
                <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(132,224,16,0.2)', color: '#84E010', border: '1px solid rgba(132,224,16,0.4)' }}>
                  Replay
                </span>
              )}

              {/* Volume */}
              <div className="relative flex items-center"
                onMouseEnter={() => setShowVolumeSlider(true)}
                onMouseLeave={() => setShowVolumeSlider(false)}>
                <button onClick={toggleMute} className="text-white hover:text-cyan-400 transition-colors" aria-label="Mute">
                  <VolumeIcon muted={muted} />
                </button>
                <AnimatePresence>
                  {showVolumeSlider && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: 72, opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="overflow-hidden ml-2">
                      <input type="range" min="0" max="1" step="0.05"
                        value={muted ? 0 : volume}
                        onChange={changeVolume}
                        className="w-full accent-cyan-400"
                        style={{ height: 4 }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Fullscreen */}
              <button onClick={toggleFullscreen} className="text-white hover:text-cyan-400 transition-colors" aria-label="Fullscreen">
                <FullscreenIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Live border glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[16px]"
        style={{ boxShadow: 'inset 0 0 0 1.5px rgba(0,212,245,0.18)' }} />
    </div>
  );
}
