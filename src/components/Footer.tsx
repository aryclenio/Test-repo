import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-surface-container-lowest mt-20">
      <div className="w-full px-lg py-xl flex flex-col md:flex-row justify-between items-start gap-xl max-w-[1200px] mx-auto">
        <div className="space-y-md max-w-xs">
          <Link href="/" className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary-fixed-dim">
            Adopet
          </Link>
          <p className="font-body-md text-body-md text-on-surface-variant">
            © 2024 Adopet. Todos os direitos reservados. Conectando animais com lares amorosos.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-xl w-full md:w-auto">
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-label-md text-text-dark uppercase tracking-wider mb-xs">Links</h4>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#contact">
              Fale Conosco
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#privacy">
              Política de Privacidade
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#terms">
              Termos de Serviço
            </a>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-label-md text-text-dark uppercase tracking-wider mb-xs">Recursos</h4>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#faq">
              FAQ
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#newsletter">
              Assinar Newsletter
            </a>
            <a className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors" href="#app-store">
              App Store
            </a>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-label-md text-label-md text-text-dark uppercase tracking-wider mb-xs">Siga-nos</h4>
            <div className="flex gap-md">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform" data-icon="public">
                public
              </span>
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform" data-icon="share">
                share
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
