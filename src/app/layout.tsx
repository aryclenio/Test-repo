import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Adopet - Encontre seu novo melhor amigo",
  description: "Adoção responsável de pets domésticos. Encontre cães, gatos e outros animais prontos para acolher em seu lar.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="min-h-full flex flex-col bg-background text-foreground custom-scrollbar antialiased">
        <Navbar />
        <main className="flex-1 pt-20 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

