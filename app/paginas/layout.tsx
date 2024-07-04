import "@/app/globals.css";
import Header from "@/componentes/Header";
import Footer from "@/componentes/Footer";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="pt-br">
        <body>
            <Header />
            {children}
            <Footer />
        </body>
      </html>
    );
  }