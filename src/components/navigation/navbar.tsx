"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, Bell } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 md:px-10 py-4 max-w-[1200px] mx-auto">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            className="font-semibold text-2xl text-primary tracking-tight"
          >
            Adopet
          </Link>
          <div className="hidden md:flex gap-6 items-center">
            <Link
              href="/"
              className={`font-medium pb-1 transition-colors hover:text-secondary ${
                !isDashboard
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              Browse
            </Link>
            <Link
              href="/dashboard"
              className={`font-medium pb-1 transition-colors hover:text-secondary ${
                isDashboard
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground"
              }`}
            >
              Dashboard
            </Link>
            <span className="text-muted-foreground cursor-not-allowed hover:text-secondary transition-colors font-medium">
              Success Stories
            </span>
            <span className="text-muted-foreground cursor-not-allowed hover:text-secondary transition-colors font-medium">
              About Us
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-primary hover:text-secondary transition-colors p-1.5 rounded-full hover:bg-muted/50">
            <Heart className="w-6 h-6" />
          </button>
          <button className="text-primary hover:text-secondary transition-colors p-1.5 rounded-full hover:bg-muted/50 relative">
            <Bell className="w-6 h-6" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full"></span>
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
            <img
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8rjp0LK_wxP7Yvd5FR89fHJl10o1ZNFFaFcESxyls07oW1SZmUGtt17tICTGwdcjtAz5nSeKiSksUHXuPx9sYVO7EbL_8TNttQ6CWLvQfVigAXEswNISbUZc3OfLkpzpbZQWzufwSRSq2Nmi7cVq4y3hyEf4cfEYrPrG7TmkXtIhrkwzGdpqQpI0ykwxnHVl4W_qC6-pngP5jLpbkX53XDM4yK1IBCi3yereo-bALVhGxzPBc9KfIIP-XvvtoA1oU6exM1Jkif1U"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
