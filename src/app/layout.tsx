import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getSession } from "@/lib/auth";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Pizarras y Pantallas Interactivas Educativas | La Clase Digital",
  description:
    "Distribuidores oficiales de pizarras digitales, pantallas táctiles y simuladores médicos en Argentina. Más de 20 años equipando instituciones educativas con tecnología pedagógica real.",
  keywords: [
    "robótica educativa", "proyectores", "Streaming Escolar", "Pantallas Táctiles", 
    "Rasti", "Mis Ladrillos", "Esqueletos", "Pantallas Interactivas", "Samsung", 
    "Viewsonic", "TLT", "The Learning Touch", "MaxHub", "i3", "i3Connect", "i3Touch", 
    "LG", "Pensamiento Computacional", "Programar Desconectado", "SIMA", "TOMI", 
    "PleiQ", "Smart", "THScreen", "Wacom", "Tableta Digitalizadora", "Tecnología Educativa", 
    "LaClaseDigital", "GarageD", "Esqueleto", "Hueso", "Columna", "Maqueta", 
    "Primeros Auxilios", "RCP", "Heinlich", "Simuladores DEA", "Torsos RCP", "ODD", 
    "Nexo", "Practiman", "Prestan", "Carro Portanotebooks", "Alquiler de Notebooks", 
    "Totem", "Mesa Táctil", "Tablets", "Alquiler", "Rotafolios", "VideoJuegos Personalizados", 
    "Videojuegos para Empresas", "Videojuegos Publicitarios", "Educación", "Escuela", 
    "Colegio", "Capacitación Docente", "Formación Docente"
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
    <html lang="es" className={plusJakartaSans.variable} suppressHydrationWarning>
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
