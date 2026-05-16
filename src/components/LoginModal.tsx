'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, ArrowRight, X } from 'lucide-react';

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

export default function LoginModal({ open, onClose, onSwitchToRegister }: LoginModalProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al iniciar sesión');
      }

      onClose();
      router.refresh();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[800] flex items-center justify-center p-4"
            style={{ background: 'rgba(4,5,40,0.75)', backdropFilter: 'blur(8px)' }}
            onClick={handleBackdropClick}>

            {/* ── Card ── */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ type: 'spring', stiffness: 340, damping: 28 }}
              className="relative w-full max-w-md"
              style={{
                background: 'linear-gradient(145deg,#0d0e52 0%,#12136b 100%)',
                borderRadius: '24px',
                border: '1px solid rgba(0,212,245,0.18)',
                boxShadow: '0 0 80px rgba(0,212,245,0.12), 0 40px 100px rgba(0,0,0,0.6)',
                overflow: 'hidden',
              }}>

              {/* Top glow strip */}
              <div className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(90deg,transparent,#00D4F5,#84E010,transparent)' }} />

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-all"
                style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                aria-label="Cerrar">
                <X className="w-4 h-4" />
              </button>

              <div className="p-8 pt-10">
                {/* Header */}
                <div className="text-center mb-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}

                  <h2 className="text-2xl font-extrabold text-white tracking-tight">Iniciar Sesión</h2>
                  <p className="text-sm mt-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                    Bienvenido de vuelta a La Clase Digital
                  </p>
                </div>

                {/* Error */}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-5 p-3.5 rounded-xl text-sm font-medium text-center"
                    style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.25)', color: '#fca5a5' }}>
                    {error}
                  </motion.div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(0,212,245,0.6)' }} />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 text-sm rounded-xl outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#fff',
                        }}
                        placeholder="tu@correo.com"
                        onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,245,0.5)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,245,0.08)'; }}
                        onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-widest mb-2"
                      style={{ color: 'rgba(255,255,255,0.5)' }}>
                      Contraseña
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(0,212,245,0.6)' }} />
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 text-sm rounded-xl outline-none transition-all"
                        style={{
                          background: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          color: '#fff',
                        }}
                        placeholder="••••••••"
                        onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,245,0.5)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,245,0.08)'; }}
                        onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all mt-2 "
                    style={{
                      background: loading ? 'rgba(132,224,16,0.5)' : '#84E010',
                      color: '#0d0e52',
                    }}
                    onMouseEnter={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = '#9ef020'; }}
                    onMouseLeave={(e) => { if (!loading) (e.currentTarget as HTMLElement).style.background = '#84E010'; }}>
                    {loading ? 'Iniciando...' : 'Entrar'}
                    {!loading && <ArrowRight className="w-4 h-4" />}
                  </motion.button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-center text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  ¿No tienes una cuenta?{' '}
                  <button
                    onClick={() => { onClose(); onSwitchToRegister?.(); }}
                    className="font-bold transition-colors"
                    style={{ color: '#00D4F5' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#84E010'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#00D4F5'; }}>
                    Regístrate gratis
                  </button>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
