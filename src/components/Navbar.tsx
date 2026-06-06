'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  // Helper to check if a route is active
  const isEncontrarPetsActive = pathname === '/' || pathname.startsWith('/pets');
  const isManagerActive = pathname === '/manager';

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-20 bg-background border-b border-border shadow-sm">
      <div className="flex items-center gap-6 md:gap-10">
        <Link href="/" className="text-2xl font-extrabold text-primary hover:opacity-90 active:scale-95 transition-all">
          Adopet
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link
            href="/"
            className={`font-semibold text-sm transition-all pb-1 ${
              isEncontrarPetsActive
                ? 'text-adopet-accent border-b-2 border-adopet-accent'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            Encontrar Pets
          </Link>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-all text-sm"
            onClick={(e) => e.preventDefault()}
          >
            Como Adotar
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-all text-sm"
            onClick={(e) => e.preventDefault()}
          >
            ONGs
          </a>
          <a
            href="#"
            className="text-muted-foreground hover:text-primary transition-all text-sm"
            onClick={(e) => e.preventDefault()}
          >
            Blog
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            search
          </span>
          <input
            className="pl-10 pr-4 py-2 bg-muted rounded-full border-none focus:ring-2 focus:ring-primary w-64 text-sm font-medium outline-none transition-all placeholder:text-muted-foreground/80"
            placeholder="Buscar por raça ou nome..."
            type="text"
            // Custom event handler or search integration can be hooked here
          />
        </div>

        <Link
          href="/manager"
          title="Ir para o Painel do Administrador"
          className={`w-10 h-10 rounded-full overflow-hidden border-2 cursor-pointer active:scale-95 transition-transform flex-shrink-0 ${
            isManagerActive ? 'border-primary' : 'border-secondary-container'
          }`}
        >
          <img
            alt="Avatar do usuário"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3_d0QbSyhzOAGofQSF_wnsGEu-I62qyFq7zoDoZQlj43pckF5aCXJNuppwEFhNzNcGyouZyr9dMuz1uw1FYK1QsNQIhkSIQRvpw9p0PNaXhbSlAMOIw9HiRWa35zbtdCi3QJravGah6Vne60hSnuBYqvDaJilh0FlTb5rg23ip1dWYBz0XIVYrQNpcQnnDQoKhCs4Le2hjQcrfDdpzqPt3xOF778RQI-HTeB8xFY4u1dzDxLetcx2cnNSitbQzfhveQ8krt17KXDV"
          />
        </Link>
      </div>
    </header>
  );
}
