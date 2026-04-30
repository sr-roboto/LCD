import NosotrosView from "@/views/NosotrosView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | La Clase Digital",
  description:
    "Conocé la historia de La Clase Digital. Más de 15 años transformando aulas en Argentina, Paraguay y Uruguay.",
};

export default function NosotrosPage() {
  return <NosotrosView />;
}
