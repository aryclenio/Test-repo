import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adopet - Encontre seu novo amigo",
  description: "Encontre o companheiro perfeito que está ansioso por um lar cheio de amor e cuidado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-text-primary font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}
