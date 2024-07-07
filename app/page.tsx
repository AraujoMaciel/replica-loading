import Image from "next/image";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import BannerTopo from "@/componentes/bannerTopo";
import BlocoTexto from "@/componentes/blocoTexto";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerTopo />
      <BlocoTexto />
      <Footer />
    </div>
  );
}
