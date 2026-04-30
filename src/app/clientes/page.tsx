import ClientesView from "@/views/ClientesView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clientes | La Clase Digital",
  description:
    "Más de 500 instituciones educativas de Argentina confían en La Clase Digital. Conocé nuestros casos de éxito.",
};

export default function ClientesPage() {
  return <ClientesView />;
}
