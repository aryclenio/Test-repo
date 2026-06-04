import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface text-inverse-on-surface py-xxl mt-auto border-t border-white/10">
      <div className="max-w-7xl mx-auto px-lg grid grid-cols-1 md:grid-cols-3 gap-xl">
        <div className="space-y-md flex flex-col gap-sm">
          <span className="font-h2 text-h2 font-bold text-primary-light">Adopet</span>
          <p className="font-body-sm opacity-80" style={{ maxWidth: "280px" }}>
            Transformando vidas através da conexão entre humanos e animais. Encontre seu parceiro ideal hoje.
          </p>
        </div>
        <div className="space-y-sm flex flex-col gap-sm">
          <h4 className="font-bold font-h3">Links Rápidos</h4>
          <ul className="space-y-xs opacity-80 font-body-sm flex flex-col gap-xs" style={{ listStyle: "none" }}>
            <li><Link href="/" className="hover:text-primary-light transition-colors">Descobrir pets</Link></li>
            <li><Link href="/dashboard" className="hover:text-primary-light transition-colors">Painel administrativo</Link></li>
            <li><Link href="/favoritos" className="hover:text-primary-light transition-colors">Meus favoritos</Link></li>
          </ul>
        </div>
        <div className="space-y-sm flex flex-col gap-sm">
          <h4 className="font-bold font-h3">Contato</h4>
          <ul className="space-y-xs opacity-80 font-body-sm flex flex-col gap-xs" style={{ listStyle: "none" }}>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">mail</span> 
              contato@adopet.com.br
            </li>
            <li className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">phone</span> 
              (11) 9999-9999
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-lg pt-xl mt-xl border-t border-white/10 text-center opacity-60 font-body-sm">
        © {new Date().getFullYear()} Adopet - Todos os direitos reservados.
      </div>
    </footer>
  );
}
