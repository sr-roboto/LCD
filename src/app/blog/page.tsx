import BlogView from "@/views/BlogView";
import { getSession } from "@/lib/auth";

export const metadata = {
  title: "Blog y Noticias",
  description: "Últimas novedades, tutoriales y artículos sobre tecnología educativa y transformación digital en el aula.",
};

export default async function BlogPage() {
  const user = await getSession();
  return <BlogView user={user} />;
}
