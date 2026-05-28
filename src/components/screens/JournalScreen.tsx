import React from "react";

interface ScreenProps {
  onNavigate?: (screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => void;
  currentScreen?: string;
}

export default function JournalScreen({ onNavigate, currentScreen = 'journal' }: ScreenProps) {
  const handleNav = (e: React.MouseEvent, screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => {
    e.preventDefault();
    if (onNavigate) onNavigate(screen);
  };

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen">
      {/* TopAppBar */}
      <header className="bg-background flex justify-between items-center px-container-margin py-sm w-full max-w-[1040px] mx-auto sticky top-0 z-50">
        <div className="text-headline-md font-headline-md font-bold text-primary">Salto &amp; Brilho</div>
        <div className="flex items-center gap-md">
          <button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity">child_care</button>
          <div className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden ring-2 ring-primary-fixed transition-transform active:scale-95 duration-200">
            <img
              alt="Baby profile picture showing current age"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9-LNobux62wUT6vRnOeP0CotbJ_RlgT968vM1FSPuWLhv2QGEfLTbSxFRGRhwheZGI0d_rS-_cRhjvo9CuU4lx595puHGF_rjfLbURBW5Y2rvtoWGV02lQrR4nIoT0wbje2t-gANF7RQ7zeSIcQDiA5XRZvANLmO-f_0IH0ZNge9ceGkNps_MDCVesCxXAru5KTGru7kWEMdErBmfCENiRNetBZLspik8l_zlmwyqO85MMqen4xHj5WBgYdGwV-C8OtJK-SBEk_s"
            />
          </div>
        </div>
      </header>

      <div className="flex max-w-[1040px] mx-auto min-h-screen">
        {/* SideNavBar (Desktop Only) */}
        <aside className="hidden md:flex flex-col h-full py-md px-sm w-64 bg-surface-container-lowest">
          <nav className="flex flex-col gap-xs">
            <a
              onClick={(e) => handleNav(e, 'dashboard')}
              className="flex items-center gap-sm text-secondary px-4 py-3 hover:bg-surface-container-high transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">dashboard</span>
              <span className="font-label-md text-label-md">Dashboard</span>
            </a>
            <a
              onClick={(e) => handleNav(e, 'calendar')}
              className="flex items-center gap-sm text-secondary px-4 py-3 hover:bg-surface-container-high transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              <span className="font-label-md text-label-md">Calendar</span>
            </a>
            <a
              onClick={(e) => handleNav(e, 'leaps')}
              className="flex items-center gap-sm text-secondary px-4 py-3 hover:bg-surface-container-high transition-colors"
              href="#"
            >
              <span className="material-symbols-outlined">auto_awesome</span>
              <span className="font-label-md text-label-md">Leaps</span>
            </a>
            <a
              onClick={(e) => handleNav(e, 'journal')}
              className={`flex items-center gap-sm rounded-lg px-4 py-3 translate-x-1 transition-all duration-200 ${
                currentScreen === 'journal'
                  ? "bg-primary-fixed text-on-primary-fixed font-bold"
                  : "text-secondary hover:bg-surface-container-high transition-colors"
              }`}
              href="#"
            >
              <span className="material-symbols-outlined">auto_stories</span>
              <span className="font-label-md text-label-md">Journal</span>
            </a>
          </nav>
        </aside>

        {/* Main Content Canvas */}
        <main className="flex-1 px-container-margin py-lg md:pb-xl pb-32">
          {/* Header Section */}
          <div className="mb-lg space-y-md">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-md">
              <div>
                <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary">Diário de Conquistas</h1>
                <p className="font-body-lg text-body-lg text-secondary mt-xs">Celebrando cada pequeno brilho na jornada do seu bebê.</p>
              </div>
              <button className="bg-primary text-on-primary px-lg py-sm rounded-full font-label-md flex items-center gap-sm hover:opacity-90 transition-opacity active:scale-95">
                <span className="material-symbols-outlined">add</span>
                Nova Conquista
              </button>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-sm">
              <button className="bg-primary-container text-on-primary-container px-md py-xs rounded-full font-label-sm border border-transparent">Todas</button>
              <button className="bg-surface-container-highest text-on-surface-variant px-md py-xs rounded-full font-label-sm border border-outline-variant hover:bg-secondary-container transition-colors">Physical</button>
              <button className="bg-surface-container-highest text-on-surface-variant px-md py-xs rounded-full font-label-sm border border-outline-variant hover:bg-secondary-container transition-colors">Social</button>
              <button className="bg-surface-container-highest text-on-surface-variant px-md py-xs rounded-full font-label-sm border border-outline-variant hover:bg-secondary-container transition-colors">Cognitive</button>
            </div>
          </div>

          {/* Bento/Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md relative">
            {/* Timeline Line (Visual only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-secondary-fixed-dim -translate-x-1/2 opacity-30"></div>
            {/* Card 1: Social */}
            <div className="achievement-card bg-surface-container-lowest rounded-lg p-md relative overflow-hidden">
              <div className="scrapbook-tape absolute top-2 right-10 w-16 h-6 z-10" style={{ background: "rgba(205, 227, 240, 0.4)", backdropFilter: "blur(2px)", transform: "rotate(-3deg)" }}></div>
              <div className="flex items-start justify-between mb-sm">
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full text-label-sm font-label-sm">Social</span>
                <span className="text-label-sm text-outline">Week 6</span>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-surface-container mb-md">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBruvy8TgUaRLPvi2HoYVzSs6RpR2uNGtDy0W_-WvFGmriaWMzwGpcUGE2PHf3X-hFijU4OwnF2uQNlNsykVjAW6rufCGto2pQJB7BCDD7zrc-5HLhg0LBmCus8_o0Fb-j2i5dy6_poHu8BrVPijIxW_wsThQc4Ee2P1cmF0TjcE07Rwbf8oNjKAyvETukhicMtNCMPVv-m0Nsxu3Q2z5vANsvJMIUQcXxGiU2nm9kw6r36AlGE1qBkdzLH_FMI3Zes5m08e04UfD4"
                  alt="First Smile"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">First Smile (Primeiro Sorriso)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant italic">"Aconteceu hoje de manhã enquanto brincávamos de esconder! O sorriso mais brilhante que já vi."</p>
            </div>
            {/* Card 2: Physical */}
            <div className="achievement-card bg-surface-container-lowest rounded-lg p-md relative overflow-hidden md:mt-12">
              <div className="scrapbook-tape absolute top-2 left-10 w-16 h-6 z-10 rotate-3" style={{ background: "rgba(205, 227, 240, 0.4)", backdropFilter: "blur(2px)" }}></div>
              <div className="flex items-start justify-between mb-sm">
                <span className="bg-primary-fixed text-on-primary-fixed-variant px-sm py-xs rounded-full text-label-sm font-label-sm">Physical</span>
                <span className="text-label-sm text-outline">Week 8</span>
              </div>
              <div className="aspect-square w-full md:w-3/4 mx-auto rounded-lg overflow-hidden bg-surface-container mb-md border-4 border-white shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYTpYbea0Ox5FpQp1i9WRfgcHWHKAxnU-ATlTX4I1OY80psJNIskpTftcikJRuhYeWKM7R8GnCsu9_MRtoPIpbejJJ6e8axGhaDuWAKnN14lYfRtsMgj-ur54zVyjbTxuZtXPyqmW7wDnR45e5NYtb9pwHtZOPv60bIbGLWlWKTjuA_Icbd1zyNIfplG8NmqJdpKoaX0XTBtNZCW6icFdgi9FDmSmMZLnfbHbKSke2ZKlig-A6021BEeFs1wdjhnYog8Zqqbss9io"
                  alt="Held a rattle"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Held a rattle (Segurou o chocalho)</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Finalmente coordenou os movimentos para segurar o chocalho de madeira por quase um minuto!</p>
            </div>
            {/* Card 3: Cognitive */}
            <div className="achievement-card bg-surface-container-lowest rounded-lg p-md relative overflow-hidden">
              <div className="flex items-start justify-between mb-sm">
                <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-sm py-xs rounded-full text-label-sm font-label-sm">Cognitive</span>
                <span className="text-label-sm text-outline">Week 9</span>
              </div>
              <div className="p-lg bg-surface-bright border-2 border-dashed border-secondary-fixed rounded-lg text-center mb-md group cursor-pointer hover:border-primary transition-colors">
                <span className="material-symbols-outlined text-display-lg-mobile text-secondary-fixed-dim group-hover:text-primary mb-xs">add_a_photo</span>
                <p className="text-label-sm text-secondary">Clique para adicionar foto</p>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Acompanhando Objetos</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Consegue seguir o movimento do móbile de ponta a ponta com o olhar agora.</p>
            </div>
            {/* Card 4: Social */}
            <div className="achievement-card bg-surface-container-lowest rounded-lg p-md relative overflow-hidden md:mt-12">
              <div className="scrapbook-tape absolute -top-1 right-1/4 w-12 h-5 z-10 opacity-60" style={{ background: "rgba(205, 227, 240, 0.4)", backdropFilter: "blur(2px)" }}></div>
              <div className="flex items-start justify-between mb-sm">
                <span className="bg-secondary-container text-on-secondary-container px-sm py-xs rounded-full text-label-sm font-label-sm">Social</span>
                <span className="text-label-sm text-outline">Hoje</span>
              </div>
              <div className="aspect-video rounded-lg overflow-hidden bg-surface-container mb-md">
                <img
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSyBpnsQGSOc_hPj0s37lg2vJzoQNflOJu-epJktBv7SBBldZsvkvob1kVxPJvatK7ORRlvhKahBrQDB4Tp0Lq2K54vJMCyc3HEBs4CWwGGXk6BwpZ4pO2GETwinfz_hAaxr_cWg2hNN4Wu3KIjIfXKF_9G5bJ8LEsmaAOUY5ketZGRuWmY9s1Ee3WajAUCTeHCieA4GcZfnLN2qDJnwG9BHl1PjA9NkGZVVeeuwSHJOuQ0uGmaDWxiz2Ye9JYa7ZZ3RjZXVLfn1Y"
                  alt="Primeiros Balbucios"
                />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-xs">Primeiros Balbucios</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">Muitos 'aguu' e 'aaa' hoje. Parece que ele está tentando nos contar uma história longa!</p>
            </div>
          </div>
        </main>
      </div>

      {/* BottomNavBar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-sm md:hidden bg-surface-container-lowest rounded-t-lg shadow-[0_-8px_20px_rgba(74,101,78,0.15)]">
        <a
          onClick={(e) => handleNav(e, 'dashboard')}
          className="flex flex-col items-center justify-center text-secondary py-1"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="font-label-sm text-label-sm">Home</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'calendar')}
          className="flex flex-col items-center justify-center text-secondary py-1"
          href="#"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="font-label-sm text-label-sm">Calendar</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'leaps')}
          className="flex flex-col items-center justify-center text-secondary py-1"
          href="#"
        >
          <span className="material-symbols-outlined">insights</span>
          <span className="font-label-sm text-label-sm">Leaps</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'journal')}
          className={`flex flex-col items-center justify-center rounded-full px-5 py-1 scale-90 transition-transform duration-150 ${
            currentScreen === 'journal' ? "bg-primary-container text-on-primary-container font-bold" : "text-secondary"
          }`}
          href="#"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>book</span>
          <span className="font-label-sm text-label-sm">Journal</span>
        </a>
      </nav>
    </div>
  );
}
