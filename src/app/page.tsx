import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/views/HeroSection";
import ShortcutsBar from "@/views/ShortcutsBar";
import BrandsMarquee from "@/views/BrandsMarquee";
import ProductsSection from "@/views/ProductsSection";
import RcpSection from "@/views/RcpSection";
import DifferentiatorsSection from "@/views/DifferentiatorsSection";
import EcosystemSection from "@/views/EcosystemSection";
import CtaSection from "@/views/CtaSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ShortcutsBar />
        <BrandsMarquee />
        <ProductsSection />
        <RcpSection />
        <DifferentiatorsSection />
        <EcosystemSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
