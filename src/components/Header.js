"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "../context/AppContext";

export default function Header() {
  const pathname = usePathname();
  const { favorites } = useApp();

  const isLinkActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="bg-background shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-lg py-md w-full max-w-7xl mx-auto">
        <Link href="/" className="font-h2 text-h2 font-bold text-primary tracking-tight">
          Adopet
        </Link>
        
        <nav className="hidden md:flex items-center gap-lg">
          <Link
            href="/"
            className={`font-body-reg text-body-reg pb-1 transition-colors duration-200 ${
              isLinkActive("/")
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Descobrir
          </Link>
          <Link
            href="/favoritos"
            className={`font-body-reg text-body-reg pb-1 transition-colors duration-200 flex items-center gap-xs ${
              isLinkActive("/favoritos")
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Favoritos
            {favorites.length > 0 && (
              <span 
                className="bg-secondary text-white rounded-full flex items-center justify-center font-bold text-[10px]" 
                style={{ width: "1.25rem", height: "1.25rem", marginTop: "-2px" }}
              >
                {favorites.length}
              </span>
            )}
          </Link>
          <Link
            href="/dashboard"
            className={`font-body-reg text-body-reg pb-1 transition-colors duration-200 ${
              isLinkActive("/dashboard")
                ? "text-primary font-bold border-b-2 border-primary"
                : "text-on-surface-variant hover:text-primary"
            }`}
          >
            Solicitações
          </Link>
        </nav>

        <div className="flex items-center gap-md">
          <Link href="/dashboard" className="flex items-center gap-xs">
            <img 
              alt="Foto de perfil do adotante" 
              className="w-8 h-8 rounded-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5waefYLm10Xj-qaILAbSxFjgLm4Igmn70l2HrRI8lJRZ4eNKeNchDFVRs5shIuXkEjs6T3UsTymUfFozlgDXUR9oZcSi0VQfLa98w9SNQd0qE-AFBBZgTVmJgcGZZwJ5RnoASCWVX0voxfdgKhh82vnAYpJCrJ2RhzZfyh6_V-5_bY2yIHILEGof76je8YW8RBPkFWQPg-ZtFoPyag0AkLsFvXyi4ymGS5Xkx_sEcc-DERVveKLyxLiCsmtDGiIfythlGy2uGJOw" 
            />
            <span className="material-symbols-outlined text-primary hover:opacity-80 text-3xl">
              account_circle
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
