import Image from "next/image";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import BannerTopo from "@/componentes/bannerTopo";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerTopo />
      <Footer />
    </div>
  );
}
