import type { Metadata } from "next";
import JuegosView from "@/views/JuegosView";

export const metadata: Metadata = {
  title: "Juegos Educativos Interactivos",
  description:
    'Biblioteca de juegos interactivos "¿Cuánto Sabés de…?". Gamificación lista para usar en aulas, talleres y eventos educativos.',
};

export default function JuegosPage() {
  return <JuegosView />;
}
