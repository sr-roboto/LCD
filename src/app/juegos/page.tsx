import type { Metadata } from "next";
import JuegosView from "@/views/JuegosView";

export const metadata: Metadata = {
  title: "Juegos Educativos | La Clase Digital",
  description:
    'Biblioteca de 15 juegos educativos analógicos y digitales "¿Cuánto Sabés de…?" para aulas, talleres y eventos. Gamificación al centro del aprendizaje.',
};

export default function JuegosPage() {
  return <JuegosView />;
}
