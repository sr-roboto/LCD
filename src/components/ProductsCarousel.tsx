"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";

const CATALOG_URL = "https://tienda.garaged.com.ar/tecnologia-educativa/";

/* ─── All product images grouped by category ───────────────── */
const GROUPS = [
  {
    label: "Aulas Interactivas",
    color: "#2563EB",
    images: [
      "/assets/productos/Pantalla-interactiva.png",
      "/assets/productos/PIZARRAi.png",
      "/assets/productos/LCD-Interactivo-TH-SCREENi.png",
      "/assets/productos/proyector1.png",
      "/assets/productos/proyector2.png",
      "/assets/productos/Tomi-7-Maestro.png",
      "/assets/productos/ROTAFOLLLIO.jpg",
      "/assets/productos/Mesa-Interactiva-THSCREEN.png",
      "/assets/productos/Totem-TD-SCREEN-1.png",
      "/assets/productos/Ebeami.png",
      "/assets/productos/describoi.png",
      "/assets/productos/Pantallas-de-Proyeccion.png",
    ],
  },
  {
    label: "STEM & Robótica",
    color: "#7C3AED",
    images: [
      "/assets/productos/Chicos-y-Arduino.png",
      "/assets/productos/Labdisc.png",
      "/assets/productos/Rasti-cuadrado.jpg",
      "/assets/productos/Robot.jpg",
      "/assets/productos/sima-1.png",
      "/assets/productos/sima4-200x199-1.png",
    ],
  },
  {
    label: "Software Educativo",
    color: "#D97706",
    images: [
      "/assets/productos/Plataforma-TOMI.png",
      "/assets/productos/Smart-Learning-Suite.png",
      "/assets/productos/Gestion-de-Aulai.png",
      "/assets/productos/MimioView.png",
    ],
  },
  {
    label: "Videoconferencia",
    color: "#DC2626",
    images: [
      "/assets/productos/conferencecam-connect.png",
      "/assets/productos/confe2.png",
      "/assets/productos/ptz-pro-2-camera.png",
      "/assets/productos/Camara.jpg",
      "/assets/productos/camaradocumento.jpg",
    ],
  },
  {
    label: "Conectividad",
    color: "#0891B2",
    images: [
      "/assets/productos/HDMI-Interactivo-BEAM.png",
      "/assets/productos/ScreamBeam.png",
      "/assets/productos/HDMI-INTERACTIVO.png",
      "/assets/productos/ToWmi.png",
    ],
  },
  {
    label: "Sonido",
    color: "#9333EA",
    images: [
      "/assets/productos/Parlante-GBR.png",
      "/assets/productos/Parlante-con-Bluetooth.png",
      "/assets/productos/Microfono-Corbatero.png",
      "/assets/productos/Earling.png",
    ],
  },
  {
    label: "Salud",
    color: "#059669",
    images: [
      "/assets/productos/Practimani.png",
      "/assets/productos/Torso-Bixesuado-XC-208i.png",
      "/assets/productos/Esqueleto-a-Escala.png",
      "/assets/productos/Modelo-de-Esqueleto.png",
    ],
  },
  {
    label: "Dispositivos",
    color: "#0D9488",
    images: [
      "/assets/productos/Tabletsi.png",
      "/assets/productos/PC-BANGHOi.png",
      "/assets/productos/Notebook-Reciclada-Bangho.png",
      "/assets/productos/notebook-reciclada-1.png",
      "/assets/productos/Impresora.png",
    ],
  },
  {
    label: "Mobiliario",
    color: "#64748B",
    images: [
      "/assets/productos/Carro-Portanotebooks.png",
      "/assets/productos/mobiliarioi.png",
    ],
  },
];

/* Flatten all images into two interleaved rows */
const ALL_IMGS = GROUPS.flatMap((g) => g.images.map((src) => ({ src, label: g.label, color: g.color })));

/* Split into 2 rows, odd/even */
const ROW1 = ALL_IMGS.filter((_, i) => i % 2 === 0);
const ROW2 = ALL_IMGS.filter((_, i) => i % 2 === 1);

/* Image tile */
function Tile({ src, label, color }: { src: string; label: string; color: string }) {
  return (
    <Link
      href={CATALOG_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="relative shrink-0 group overflow-hidden rounded-2xl"
      style={{ width: 200, height: 180 }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={label}
        className="w-full h-full object-contain bg-white p-3
                   group-hover:scale-110 transition-transform duration-500"
      />
      {/* Category badge on hover */}
      <div
        className="absolute inset-0 flex items-end justify-center pb-3
                   opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}
      >
        <span
          className="text-[10px] font-bold uppercase tracking-wider text-white px-2.5 py-1 rounded-full"
          style={{ background: color }}
        >
          {label}
        </span>
      </div>
    </Link>
  );
}

/* Infinite marquee row */
function MarqueeRow({ items, speed, reverse }: {
  items: typeof ALL_IMGS;
  speed: number;
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-4"
        style={{
          animation: `marquee-${reverse ? "rev" : "fwd"} ${speed}s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((item, i) => (
          <Tile key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default function ProductsCarousel({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="productos" className="py-20 bg-white overflow-hidden">
      {/* Header */}
      {!hideHeader && (
        <div className="max-w-6xl mx-auto px-4 mb-10 text-center">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand-blue)" }}
          >
            Nuestros Productos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Tecnología educativa para cada necesidad
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto">
            Aulas interactivas, robótica, software, conectividad y más — todo en un solo catálogo.
          </p>
        </div>
      )}

      {/* Row 1 — left to right */}
      <div className="mb-4">
        <MarqueeRow items={ROW1} speed={60} />
      </div>

      {/* Row 2 — right to left */}
      <div className="mb-10">
        <MarqueeRow items={ROW2} speed={45} reverse />
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href={CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-base font-bold
                     text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200"
          style={{ background: "linear-gradient(135deg, var(--brand-blue), #7C3AED)" }}
        >
          <ShoppingBag className="w-5 h-5" />
          Ver catálogo completo y comprar
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      {/* CSS keyframes */}
      <style>{`
        @keyframes marquee-fwd {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .overflow-hidden:hover > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
