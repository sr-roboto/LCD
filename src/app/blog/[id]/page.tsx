import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await prisma.post.findUnique({
    where: { id: params.id },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white py-24 px-4">
      <article className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-blue-600 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Volver al Blog
        </Link>
        
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-gray-100 text-sm font-semibold text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">
                {post.author?.name?.charAt(0) || "A"}
              </div>
              <span className="text-gray-900">{post.author?.name || "Anónimo"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {new Date(post.createdAt).toLocaleDateString("es-AR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </header>

        <div className="prose prose-lg prose-blue max-w-none text-gray-700">
          {post.content.split("\n").map((paragraph: string, index: number) => (
            <p key={index} className="mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
