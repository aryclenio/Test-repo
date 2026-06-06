'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 bg-muted border-t border-border mt-auto">
      <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left">
        <span className="text-xl font-bold text-primary">Adopet Harmony</span>
        <p className="text-sm text-muted-foreground max-w-xs leading-normal">
          © 2026 Adopet Harmony. Encontrando lares com amor e responsabilidade.
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-6 text-sm">
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>
          Termos de Uso
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>
          Privacidade
        </a>
        <a href="#" className="text-muted-foreground hover:text-primary transition-colors" onClick={(e) => e.preventDefault()}>
          Contato
        </a>
        <a href="#" className="text-primary font-bold hover:opacity-85 transition-opacity" onClick={(e) => e.preventDefault()}>
          Seja um Voluntário
        </a>
      </nav>

      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:opacity-90 active:scale-95 transition-all shadow-sm">
          <span className="material-symbols-outlined text-[20px]">share</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white cursor-pointer hover:opacity-90 active:scale-95 transition-all shadow-sm">
          <span className="material-symbols-outlined text-[20px]">alternate_email</span>
        </div>
      </div>
    </footer>
  );
}
