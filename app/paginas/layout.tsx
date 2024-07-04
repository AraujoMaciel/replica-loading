import "@/app/globals.css";
import Header from "@/componentes/Header";

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
        </body>
      </html>
    );
  }