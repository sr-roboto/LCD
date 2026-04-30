import type { Metadata } from "next";
import CursosView from "@/views/CursosView";

export const metadata: Metadata = {
  title: "Cursos y Diplomado | La Clase Digital",
  description: "Diplomado virtual en Innovación Educativa y Creatividad — 120 horas, único en Latinoamérica. Distribuidor oficial de Dokuma Creatividad y Tecnología.",
};

export default function CursosPage() {
  return <CursosView />;
}
