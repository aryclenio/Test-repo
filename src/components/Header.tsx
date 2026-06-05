"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isDiscoverActive = pathname === "/" || pathname.startsWith("/pet");
  const isDashboardActive = pathname === "/dashboard";

  return (
    <header className="bg-surface-container-lowest shadow-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center px-lg py-md w-full max-w-[1200px] mx-auto">
        <Link href="/" className="font-headline-md text-headline-md font-bold text-primary hover:opacity-90 transition-opacity">
          Adopet
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-xl">
          <Link 
            href="/" 
            className={`font-body-md text-body-md pb-1 transition-colors duration-200 ${
              isDiscoverActive 
                ? "text-primary font-bold border-b-2 border-primary" 
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Descobrir Pets
          </Link>
          <Link 
            href="/dashboard" 
            className={`font-body-md text-body-md pb-1 transition-colors duration-200 ${
              isDashboardActive 
                ? "text-primary font-bold border-b-2 border-primary" 
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Painel do Gestor
          </Link>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#how-it-works">
            Como Funciona
          </a>
          <a className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200" href="#about-us">
            Sobre Nós
          </a>
        </div>
        
        <div className="flex items-center gap-md">
          <button className="hidden sm:block font-button text-button text-primary px-md py-sm hover:opacity-80 transition-all cursor-pointer">
            Entrar
          </button>
          <button className="font-button text-button bg-primary-container text-on-primary-container px-lg py-sm rounded-xl hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer">
            Cadastrar
          </button>
        </div>
      </nav>
    </header>
  );
}
