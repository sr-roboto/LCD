import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { getSession } from "@/lib/auth";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.laclasedigital.com.ar"),
  title: {
    default: "La Clase Digital | Tecnología Educativa, Pantallas Táctiles y Robótica",
    template: "%s | La Clase Digital"
  },
  description:
    "Ecosistema educativo integral: hardware, software y capacitación. Expertos en pantallas táctiles, robótica, juegos educativos y simuladores médicos en Argentina, Paraguay y Uruguay.",
  keywords: [
    "robótica educativa", "pantallas táctiles", "pizarras digitales", "tecnología educativa",
    "simuladores médicos", "RCP", "Arduino", "TOMi Digital", "gamificación", "LCD",
    "La Clase Digital", "GarageD", "Buenos Aires", "Argentina"
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "La Clase Digital — Ecosistema Educativo Integral",
    description:
      "Hardware, software y capacitación docente. El único ecosistema educativo completo en el Cono Sur.",
    url: "https://www.laclasedigital.com.ar",
    siteName: "La Clase Digital",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/lcd_logo.png",
        width: 1200,
        height: 630,
        alt: "La Clase Digital Logo",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Clase Digital | Tecnología Educativa",
    description: "Liderando la transformación digital educativa con soluciones integrales.",
    images: ["/lcd_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await getSession();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "La Clase Digital",
    "url": "https://www.laclasedigital.com.ar",
    "logo": "https://www.laclasedigital.com.ar/lcd_logo.png",
    "sameAs": [
      "https://www.facebook.com/laclasedigital",
      "https://www.instagram.com/laclasedigital",
      "https://www.youtube.com/user/ondafilms"
    ],
    "description": "Líderes en tecnología educativa y soluciones integrales para el aula en Latinoamérica."
  };

  return (
    <html lang="es" className={plusJakartaSans.variable} suppressHydrationWarning>
      <head>
        <meta name="geo.region" content="AR" />
        <meta name="geo.placename" content="Buenos Aires" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-background text-foreground">
        <CustomCursor />
        <Navbar user={user} />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
