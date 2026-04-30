import ContactoView from "@/views/ContactoView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | La Clase Digital",
  description:
    "Contactanos para solicitar una demo, presupuesto o asesoramiento en tecnología educativa. CABA, Argentina.",
};

export default function ContactoPage() {
  return <ContactoView />;
}
