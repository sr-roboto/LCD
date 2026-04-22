import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pizarras y Pantallas Interactivas Educativas | La Clase Digital",
  description:
    "Distribuidores oficiales de pizarras digitales, pantallas táctiles y simuladores médicos en Argentina. Más de 20 años equipando instituciones educativas con tecnología pedagógica real. Marcas: Mimio, eBeam, ViewSonic, Practi-Man.",
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
    description: "Hardware, software y capacitación docente. El único ecosistema educativo completo en Argentina.",
    url: "https://www.laclasedigital.com.ar",
    siteName: "La Clase Digital",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Buenos Aires" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
