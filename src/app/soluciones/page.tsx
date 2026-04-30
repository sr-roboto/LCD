import SolucionesView from "@/views/SolucionesView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soluciones | La Clase Digital",
  description:
    "Soluciones integrales en tecnología educativa: consultoría TIC, capacitación docente e instalación para instituciones de Argentina.",
};

export default function SolucionesPage() {
  return <SolucionesView />;
}
