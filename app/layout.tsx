import type { Metadata } from "next";
import { montserrat } from "./fontes";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Réplica Loading",
  description: "Recriando site da Loading com next",
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
