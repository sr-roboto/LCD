"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";

export default function RegisterView() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al registrarse");
      }

      router.push("/blog");
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center py-20 px-4 overflow-hidden"
      style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 100%)" }}>
      <AnimatedEduBg opacity={0.15} />
      
      <div className="max-w-md w-full relative z-10">
        <Animate type="zoom-in">
          <div className="bg-white/10 backdrop-blur-2xl rounded-[2.5rem] p-10 shadow-2xl border border-white/20">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Crear Cuenta</h1>
              <p className="text-white/50 text-sm font-medium">Únete a la comunidad de La Clase Digital</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 rounded-2xl border border-red-500/20">
                <p className="text-sm text-red-400 font-bold text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-2.5 ml-1">Nombre Completo</label>
                <div className="relative">
                  <User className="w-5 h-5 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#00D4F5] focus:ring-4 focus:ring-[#00D4F5]/10 transition-all outline-none placeholder:text-white/20"
                    placeholder="Juan Pérez"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-2.5 ml-1">Correo Electrónico</label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#00D4F5] focus:ring-4 focus:ring-[#00D4F5]/10 transition-all outline-none placeholder:text-white/20"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-white/40 uppercase tracking-widest mb-2.5 ml-1">Contraseña</label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-white/30 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white focus:border-[#00D4F5] focus:ring-4 focus:ring-[#00D4F5]/10 transition-all outline-none placeholder:text-white/20"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-2xl text-[#0d0e52] font-black text-sm transition-all shadow-xl shadow-[#84E010]/20 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-green-500/40 active:scale-95"
                style={{ background: "#84E010" }}
              >
                {loading ? "Creando cuenta..." : "Comenzar ahora"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            <p className="mt-10 text-center text-sm text-white/40 font-medium">
              ¿Ya tienes una cuenta?{" "}
              <Link href="/login" className="text-[#00D4F5] font-black hover:underline transition-colors">
                Inicia sesión aquí
              </Link>
            </p>
          </div>
        </Animate>
      </div>
    </div>
  );
}
