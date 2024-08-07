import type { Metadata } from "next";
import { montserrat } from "./fontes";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Réplica Loading",
  description: "Site de Exemplo: este site é uma réplica, usando nextjs, do site da Loading. Loading Desenvolvimento Jr é uma empresa de Sobral-Ceará especialista em soluções digitais de qualidade, criamos seu site de maneira personalizada e com o melhor custo benefício.",
  keywords: "Desenvolveimento web; soluções digitais; criação de sites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
