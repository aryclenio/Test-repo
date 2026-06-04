import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppProvider } from "../context/AppContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Adopet - Encontre seu novo melhor amigo",
  description: "Plataforma moderna de adoção de animais. Encontre cães e gatos resgatados prontos para fazer parte da sua família.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${plusJakartaSans.variable}`}>
      <head>
        {/* Importando ícones Material Symbols do Google Fonts */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-on-surface">
        <AppProvider>
          <Header />
          <div style={{ flex: 1 }}>{children}</div>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
