"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";

export default function LoginView() {
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
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Error al iniciar sesion");
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
    <div className="min-h-screen section-dark flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full">
        <Animate type="fade-up">
          <div className="card-dark p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Iniciar Sesion</h1>
              <p className="text-[var(--foreground-muted)] text-sm">Bienvenido de vuelta a La Clase Digital</p>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-sm text-red-400 font-medium text-center">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-2">
                  Correo Electronico
                </label>
                <div className="relative">
                  <Mail className="w-5 h-5 text-[var(--foreground-subtle)] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-dark pl-12"
                    placeholder="tu@correo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[var(--foreground-muted)] uppercase tracking-wide mb-2">
                  Contrasena
                </label>
                <div className="relative">
                  <Lock className="w-5 h-5 text-[var(--foreground-subtle)] absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-dark pl-12"
                    placeholder="........"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Iniciando..." : "Entrar"}
                {!loading && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-[var(--foreground-muted)]">
              No tienes una cuenta?{" "}
              <Link href="/registro" className="text-[var(--brand-emerald)] font-semibold hover:underline">
                Registrate gratis
              </Link>
            </p>
          </div>
        </Animate>
      </div>
    </div>
  );
}
