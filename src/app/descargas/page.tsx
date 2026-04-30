import type { Metadata } from "next";
import DescargasView from "@/views/DescargasView";

export const metadata: Metadata = {
  title: "Descargas | La Clase Digital",
  description: "Instaladores, manuales y herramientas para pizarras interactivas, TOMi Digital y más recursos educativos.",
};

export default function DescargasPage() {
  return <DescargasView />;
}
