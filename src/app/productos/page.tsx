import ProductosView from "@/views/ProductosView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos | La Clase Digital",
  description:
    "Catálogo completo de pizarras digitales, pantallas interactivas, proyectores y tecnología educativa. Distribuidores oficiales en Argentina.",
};

export default function ProductosPage() {
  return <ProductosView />;
}
