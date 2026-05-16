'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, X } from 'lucide-react';

interface RegisterModalProps {
  open: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

export default function RegisterModal({ open, onClose, onSwitchToLogin }: RegisterModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const reset = () => {
    setName(''); setEmail(''); setPassword(''); setError(''); setSuccess(false);
  };

  const handleClose = () => { reset(); onClose(); };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Error al registrarse');
      }

      setSuccess(true);
      setTimeout(() => {
        handleClose();
        router.refresh();
      }, 1400);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error inesperado');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: '#fff',
  };

  const focusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,212,245,0.5)';
    (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 3px rgba(0,212,245,0.08)';
  };
  const blurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)';
    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="reg-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[800] flex items-center justify-center p-4"
          style={{ background: 'rgba(4,5,40,0.75)', backdropFilter: 'blur(8px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}>

          <motion.div
            key="reg-modal"
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
              style={{ background: 'linear-gradient(90deg,transparent,#84E010,#00D4F5,transparent)' }} />

            {/* Close */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-all"
              style={{ color: 'rgba(255,255,255,0.5)', background: 'rgba(255,255,255,0.06)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
              aria-label="Cerrar">
              <X className="w-4 h-4" />
            </button>

            <div className="p-8 pt-10">
              {/* Header */}
              <div className="text-center mb-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}

                <h2 className="text-2xl font-extrabold text-white tracking-tight">Crear Cuenta</h2>
                <p className="text-sm mt-1.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Únete a La Clase Digital
                </p>
              </div>

              {/* Success state */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-5 p-4 rounded-xl text-sm font-semibold text-center"
                    style={{ background: 'rgba(132,224,16,0.12)', border: '1px solid rgba(132,224,16,0.3)', color: '#84E010' }}>
                    ✓ ¡Cuenta creada! Ingresando...
                  </motion.div>
                )}
              </AnimatePresence>

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
                {/* Nombre */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>Nombre Completo</label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(0,212,245,0.6)' }} />
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl outline-none transition-all"
                      style={inputStyle} placeholder="Juan Pérez"
                      onFocus={focusInput} onBlur={blurInput} />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>Correo Electrónico</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(0,212,245,0.6)' }} />
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl outline-none transition-all"
                      style={inputStyle} placeholder="tu@correo.com"
                      onFocus={focusInput} onBlur={blurInput} />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-widest mb-2"
                    style={{ color: 'rgba(255,255,255,0.5)' }}>Contraseña</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2" style={{ color: 'rgba(0,212,245,0.6)' }} />
                    <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl outline-none transition-all"
                      style={inputStyle} placeholder="Mínimo 8 caracteres"
                      onFocus={focusInput} onBlur={blurInput} />
                  </div>
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={loading || success}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all mt-2"
                  style={{
                    background: success ? '#84E010' : loading ? 'rgba(0,212,245,0.5)' : '#00D4F5',
                    color: '#0d0e52',
                  }}
                  onMouseEnter={(e) => { if (!loading && !success) (e.currentTarget as HTMLElement).style.background = '#22e3ff'; }}
                  onMouseLeave={(e) => { if (!loading && !success) (e.currentTarget as HTMLElement).style.background = '#00D4F5'; }}>
                  {loading ? 'Creando cuenta...' : success ? '¡Listo!' : 'Crear cuenta'}
                  {!loading && !success && <ArrowRight className="w-4 h-4" />}
                </motion.button>
              </form>

              {/* Footer — switch to login */}
              <p className="mt-6 text-center text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                ¿Ya tienes una cuenta?{' '}
                <button
                  onClick={() => { handleClose(); onSwitchToLogin?.(); }}
                  className="font-bold transition-colors"
                  style={{ color: '#84E010' }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00D4F5'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#84E010'; }}>
                  Inicia sesión aquí
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
