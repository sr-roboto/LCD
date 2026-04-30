import BlogView from "@/views/BlogView";
import { getSession } from "@/lib/auth";

export const metadata = {
  title: "Blog | La Clase Digital",
};

export default async function BlogPage() {
  const user = await getSession();
  return <BlogView user={user} />;
}
