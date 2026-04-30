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
        setPosts(data);
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
        setPosts(updatedPosts);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <Animate type="fade-down">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">Noticias y Novedades</p>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Blog Oficial</h1>
            </div>
            {user && (
              <button
                onClick={() => setCreating(!creating)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white font-bold text-sm rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Plus className="w-4 h-4" />
                {creating ? "Cancelar" : "Nuevo Artículo"}
              </button>
            )}
          </div>
        </Animate>

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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <Animate key={post.id} type="fade-up" delay={i * 100}>
                <Link href={`/blog/${post.id}`} className="block group h-full">
                  <div className="bg-white p-8 rounded-3xl border border-gray-100 h-full flex flex-col transition-all group-hover:shadow-xl group-hover:border-blue-100 group-hover:-translate-y-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-6 flex-1 text-sm leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-semibold text-gray-400 mt-auto pt-4 border-t border-gray-50">
                      <div className="flex items-center gap-1.5">
                        <User className="w-4 h-4 text-blue-500" />
                        {post.author?.name || "Anónimo"}
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
