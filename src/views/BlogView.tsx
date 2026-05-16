"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, BookOpen, Clock, User, ArrowRight } from "lucide-react";
import Animate from "@/components/Animate";
import AnimatedEduBg from "@/components/AnimatedEduBg";
import { useRouter } from "next/navigation";

export default function BlogView({ user }: { user: any }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/blog")
      .then((res) => res.json())
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => {
        setPosts([]);
        setLoading(false);
      });
  }, []);

  const handleCreatePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    try {
      const res = await fetch("/api/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
      });

      if (res.ok) {
        setCreating(false);
        setTitle("");
        setContent("");
        // Reload posts
        const updatedPosts = await fetch("/api/blog").then((r) => r.json());
        setPosts(Array.isArray(updatedPosts) ? updatedPosts : []);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F4FF]">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden flex flex-col items-center justify-center text-center py-28 px-4"
        style={{ background: "linear-gradient(135deg,#080a2e 0%,#12136b 55%,#0b1246 100%)", minHeight: "45vh" }}>
        <AnimatedEduBg opacity={0.12} />
        <div className="absolute top-[-60px] left-[5%] w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle,rgba(0,212,245,0.08) 0%,transparent 68%)" }} />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <Animate type="fade-down">
            <p className="text-xs font-bold uppercase tracking-[0.22em] mb-4" style={{ color: "#84E010" }}>
              Noticias y Novedades
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5" style={{ letterSpacing: "-0.03em" }}>
              Blog <span style={{ color: "#00D4F5" }}>Oficial</span>
            </h1>
            <p className="text-base leading-relaxed max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
              Descubrí las últimas tendencias en tecnología educativa, casos de éxito y guías para el aula moderna.
            </p>
            
            {user && (
              <button
                onClick={() => setCreating(!creating)}
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-0.5 shadow-lg shadow-[#84E010]/20"
                style={{ background: "#84E010", color: "#0d0e52" }}
              >
                <Plus className="w-4 h-4" />
                {creating ? "Cancelar" : "Nuevo Artículo"}
              </button>
            )}
          </Animate>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">

        {creating && user && (
          <Animate type="fade-up">
            <form onSubmit={handleCreatePost} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10 space-y-4">
              <input
                type="text"
                placeholder="Título del artículo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-xl font-bold px-4 py-3 border-none outline-none focus:ring-0 placeholder:text-gray-300"
                required
              />
              <div className="h-px bg-gray-100 w-full" />
              <textarea
                placeholder="Escribe el contenido aquí..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full px-4 py-3 border-none outline-none focus:ring-0 placeholder:text-gray-300 resize-none text-gray-700"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-gray-900 text-white text-sm font-bold rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Publicar
                </button>
              </div>
            </form>
          </Animate>
        )}

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white h-48 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100">
            <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-900">No hay artículos todavía</h3>
            <p className="text-gray-500 text-sm mt-1">Sé el primero en escribir algo interesante.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Animate key={post.id} type="fade-up" delay={100}>
                <Link href={`/blog/${post.id}`} className="block group h-full">
                  <div className="bg-white/60 backdrop-blur-xl p-8 rounded-[2rem] border border-white/50 h-full flex flex-col transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-[#00D4F5]/30 hover:-translate-y-2 relative overflow-hidden group">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at top right, rgba(0,212,245,0.05) 0%, transparent 70%)" }} />
                    
                    <h2 className="text-2xl font-extrabold text-[#12136b] mb-4 group-hover:text-[#00D4F5] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 font-medium line-clamp-4 mb-8 flex-1 text-sm leading-relaxed">
                      {post.content}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-[#12136b]/5">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#12136b]/5 flex items-center justify-center">
                          <User className="w-4 h-4 text-[#12136b]" />
                        </div>
                        <span className="text-xs font-bold text-[#12136b]/60">{post.author?.name || "Anónimo"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#12136b]/40">
                        <Clock className="w-3.5 h-3.5" />
                        {new Date(post.createdAt).toLocaleDateString("es-AR")}
                      </div>
                    </div>
                  </div>
                </Link>
              </Animate>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
