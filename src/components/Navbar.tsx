"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "@/context/AppContext";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathname = usePathname();
  const { pets } = useApp();
  
  // Calculate dynamic pet count
  const petCount = 933 + pets.length;

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-border/40 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-heading text-3xl text-primary font-bold tracking-tight">
            Adopet
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className={cn(
                "font-medium text-base transition-colors py-2 relative",
                pathname === "/" 
                  ? "text-primary font-bold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Explorar
            </Link>
            <Link
              href="/dashboard"
              className={cn(
                "font-medium text-base transition-colors py-2 relative",
                pathname.startsWith("/dashboard") 
                  ? "text-primary font-bold after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:w-full after:h-0.5 after:bg-primary"
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              Portal da ONG
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-medium text-sm">
            <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
              pets
            </span>
            <span>{petCount} Pets Esperando</span>
          </div>
          
          {/* Mobile menu link indicator */}
          <div className="md:hidden flex gap-4">
            <Link 
              href="/" 
              className={cn("text-sm font-medium", pathname === "/" ? "text-primary font-bold" : "text-muted-foreground")}
            >
              Explorar
            </Link>
            <Link 
              href="/dashboard" 
              className={cn("text-sm font-medium", pathname === "/dashboard" ? "text-primary font-bold" : "text-muted-foreground")}
            >
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
