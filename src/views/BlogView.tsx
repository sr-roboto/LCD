"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Plus, BookOpen, Clock, User } from "lucide-react";
import Animate from "@/components/Animate";
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
        const updatedPosts = await fetch("/api/blog").then((r) => r.json());
        setPosts(Array.isArray(updatedPosts) ? updatedPosts : []);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen section-dark py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <Animate type="fade-down">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <div className="badge mb-3">Noticias y Novedades</div>
              <h1 className="text-4xl font-bold text-white tracking-tight">Blog Oficial</h1>
            </div>
            {user && (
              <button
                onClick={() => setCreating(!creating)}
                className="btn-primary"
              >
                <Plus className="w-4 h-4" />
                {creating ? "Cancelar" : "Nuevo Articulo"}
              </button>
            )}
          </div>
        </Animate>

        {creating && user && (
          <Animate type="fade-up">
            <form onSubmit={handleCreatePost} className="card-dark p-6 mb-10 space-y-4">
              <input
                type="text"
                placeholder="Titulo del articulo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-xl font-bold bg-transparent border-none outline-none text-white placeholder:text-[var(--foreground-subtle)]"
                required
              />
              <div className="h-px bg-[var(--border)] w-full" />
              <textarea
                placeholder="Escribe el contenido aqui..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={6}
                className="w-full bg-transparent border-none outline-none text-[var(--foreground-muted)] placeholder:text-[var(--foreground-subtle)] resize-none"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn-primary"
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
              <div key={i} className="card-dark h-48 animate-pulse" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20 card-dark">
            <BookOpen className="w-12 h-12 text-[var(--foreground-subtle)] mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white">No hay articulos todavia</h3>
            <p className="text-[var(--foreground-muted)] text-sm mt-1">Se el primero en escribir algo interesante.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <Animate key={post.id} type="fade-up" delay={100}>
                <Link href={`/blog/${post.id}`} className="block group h-full">
                  <div className="card-glow p-8 h-full flex flex-col transition-all hover:-translate-y-1">
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--brand-emerald)] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-[var(--foreground-muted)] line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-medium text-[var(--foreground-subtle)] mt-auto pt-4 border-t border-[var(--border)]">
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-[var(--brand-emerald)]" />
                        {post.author?.name || "Anonimo"}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
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
