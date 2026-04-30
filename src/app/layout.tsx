import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSession } from "@/lib/auth";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Pizarras y Pantallas Interactivas Educativas | La Clase Digital",
  description:
    "Distribuidores oficiales de pizarras digitales, pantallas táctiles y simuladores médicos en Argentina. Más de 20 años equipando instituciones educativas con tecnología pedagógica real.",
  keywords: [
    "pantallas táctiles educativas Argentina",
    "pizarras digitales interactivas",
    "Mimio Argentina",
    "eBeam Argentina",
    "ViewSonic educación",
    "simuladores RCP Argentina",
    "gamificación TOMi",
    "robótica escolar Argentina",
    "La Clase Digital",
    "tecnología educativa Buenos Aires",
  ],
  openGraph: {
    title: "La Clase Digital — Ecosistema Educativo Integral",
    description:
      "Hardware, software y capacitación docente. El único ecosistema educativo completo en Argentina.",
    url: "https://www.laclasedigital.com.ar",
    siteName: "La Clase Digital",
    locale: "es_AR",
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();
  
  return (
    <html lang="es" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Buenos Aires" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <Navbar user={user} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
