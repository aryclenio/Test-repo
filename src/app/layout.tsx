import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adopet - Descubra seu novo melhor amigo",
  description: "Encontre o companheiro perfeito que está esperando por um lar cheio de amor. Filtre por espécie, idade ou porte para facilitar sua busca.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light h-full antialiased">
      <body className="min-h-full flex flex-col bg-background-custom text-text-dark">
        {children}
      </body>
    </html>
  );
}
