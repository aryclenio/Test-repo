import React from "react";

interface ScreenProps {
  onNavigate?: (screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => void;
  currentScreen?: string;
}

export default function DashboardScreen({ onNavigate, currentScreen = 'dashboard' }: ScreenProps) {
  const handleNav = (e: React.MouseEvent, screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => {
    e.preventDefault();
    if (onNavigate) onNavigate(screen);
  };

  return (
    <div className="min-h-screen flex overflow-x-hidden bg-background text-on-background">
      {/* Side Navigation Bar (Hidden on Mobile) */}
      <aside className="hidden md:flex flex-col h-full py-md px-sm bg-surface-container-lowest dark:bg-surface-container-low docked left-0 w-64 fixed shadow-md dark:shadow-none z-40">
        <div className="mb-xl px-4">
          <h1 className="text-headline-sm font-headline-sm font-semibold text-primary dark:text-primary-fixed-dim">Salto &amp; Brilho</h1>
          <p className="text-label-sm font-label-sm text-secondary">Nurturing Growth</p>
        </div>
        <nav className="flex flex-col gap-2">
          <a
            onClick={(e) => handleNav(e, 'dashboard')}
            className={`flex items-center gap-sm rounded-lg px-4 py-3 transition-all duration-200 ${
              currentScreen === 'dashboard'
                ? "bg-primary-fixed dark:bg-primary-container text-on-primary-fixed dark:text-on-primary-container font-bold"
                : "text-secondary hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors"
            }`}
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-label-md font-label-md">Dashboard</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'calendar')}
            className="flex items-center gap-sm text-secondary dark:text-secondary-fixed-dim px-4 py-3 hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="text-label-md font-label-md">Calendar</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'leaps')}
            className="flex items-center gap-sm text-secondary dark:text-secondary-fixed-dim px-4 py-3 hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="text-label-md font-label-md">Leaps</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'journal')}
            className="flex items-center gap-sm text-secondary dark:text-secondary-fixed-dim px-4 py-3 hover:bg-surface-container-high dark:hover:bg-surface-dim transition-colors"
            href="#"
          >
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="text-label-md font-label-md">Journal</span>
          </a>
        </nav>
        <div className="mt-auto px-4 flex items-center gap-3">
          <img
            alt="Baby Avatar"
            className="w-10 h-10 rounded-full border-2 border-primary-fixed"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe3Ux9jt2W-DGKO9CzM_NkO4_Nrnm57LOvEL2DRxxCk_HBza516CanPuYcFI-euQUDg5EH1trTrkYUIEHgfsF4-oxJUFYqmhZZd97dEn7lIn2zX1XE4MP6Tj4vXK1FCDFoVK0X5yiG6uHUiq3Ti6gSIW2cRlK9MByTmNbEMd8Yl5QiYHqKStaB5-0jAXrlomLVJDsqnonrtka8w66POnL5vHyMPEQucEFa02xf-YKinXlWOVEOUBktp0bMWLZVz94VUmQG1TXsZF4"
          />
          <div className="overflow-hidden">
            <p className="text-label-md font-label-md truncate">Baby Leo</p>
            <p className="text-xs text-secondary truncate">8 weeks old</p>
          </div>
        </div>
      </aside>

      {/* Main Content Canvas */}
      <main className="flex-1 ml-0 md:ml-64 w-full max-w-[1040px] mx-auto px-container-margin py-md pb-32 md:pb-md">
        {/* Top App Bar (Mobile Visibility) */}
        <header className="flex justify-between items-center py-sm w-full mb-lg">
          <div className="flex flex-col">
            <h2 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary-fixed-dim">Baby Leo</h2>
            <p className="text-body-md font-body-md text-secondary">8 weeks old</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity">child_care</button>
            <img
              alt="Baby profile"
              className="w-10 h-10 rounded-full border-2 border-primary-fixed"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkBsT5OHfsZaHaT9srgOcH6PhOUcKaHDMizjy1HYQpx22ySQ2tGGCl_7mVFaBO3C9scUYxIhXsamK0aTCGc32VNH1FXcP1YOO2kiLPFm-7r5x_H4gPE87n5ZvLXiMQaFuFzdvIp0IBQJZwfLydJPQc6_JMFk7fvMFeBxe58PLwiM6FQo1cUdYJDjX7dezQdKeNJU7Tbh0DRDKp2W_j3YesBvqvQ-nkgStx6vtP1lARVDdx6j5W9To0jnBNeLa5Iok3LHNvelUVoUs"
            />
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-start">
          {/* Leap Card (Large) */}
          <section
            onClick={(e) => handleNav(e, 'leaps')}
            className="md:col-span-8 bg-surface-container-lowest rounded-lg p-md soft-depth border border-primary/5 relative overflow-hidden group cursor-pointer hover:border-primary/20 transition-all"
          >
            <div className="flex justify-between items-start mb-lg">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-label-sm mb-2">Developmental Milestone</span>
                <h3 className="text-headline-sm font-headline-sm font-semibold text-on-surface">Leap 2: Patterns</h3>
              </div>
              <span className="material-symbols-outlined text-secondary text-3xl">insights</span>
            </div>
            <div className="relative pt-8 pb-4">
              {/* Progress Labels */}
              <div className="flex justify-between items-end mb-4 relative z-10">
                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined text-secondary">cloud</span>
                  <span className="text-label-sm mt-1">Stormy</span>
                </div>
                <div className="flex flex-col items-center text-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>light_mode</span>
                  <span className="text-label-sm font-bold mt-1">Sunny Week</span>
                </div>
              </div>
              {/* Progress Track */}
              <div className="w-full h-3 bg-secondary-fixed rounded-full relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-primary rounded-full transition-all duration-1000 ease-out" style={{ width: "70%" }}></div>
              </div>
              <p className="mt-4 text-body-md text-on-surface-variant font-medium">
                Stormy phase - <span className="text-primary font-bold">3 days left</span> until sunny weeks
              </p>
            </div>
            {/* Abstract growth pattern background decoration */}
            <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-outlined text-[180px]">energy_savings_leaf</span>
            </div>
          </section>

          {/* Quick Actions (Stacked on Mobile, Vertical on Desktop) */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <button
              onClick={(e) => handleNav(e, 'journal')}
              className="flex items-center justify-between w-full p-4 bg-primary text-on-primary rounded-full hover:opacity-90 transition-all active:scale-95 shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">add_circle</span>
                <span className="font-headline-sm text-sm">Add Milestone</span>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
            <button
              onClick={(e) => handleNav(e, 'calendar')}
              className="flex items-center justify-between w-full p-4 border border-primary text-primary rounded-full hover:bg-primary/5 transition-all active:scale-95"
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined">calendar_today</span>
                <span className="font-headline-sm text-sm">View Calendar</span>
              </div>
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>

          {/* Tip of the Day */}
          <section className="md:col-span-6 bg-tertiary-fixed rounded-lg p-md soft-depth border border-tertiary/10">
            <div className="flex items-center gap-sm mb-sm text-on-tertiary-fixed">
              <span className="material-symbols-outlined">tips_and_updates</span>
              <h4 className="text-label-md font-bold uppercase tracking-wider">Tip of the Day</h4>
            </div>
            <p className="text-body-lg font-headline-sm text-on-tertiary-container mb-4">
              "Offer high-contrast toys to stimulate visual patterns."
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-on-tertiary-container text-label-sm">Visual Skills</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-on-tertiary-container text-label-sm">Learning</span>
            </div>
          </section>

          {/* Growth Mini Card */}
          <section className="md:col-span-6 bg-surface-container rounded-lg p-md soft-depth flex items-center justify-between">
            <div>
              <h4 className="text-label-md font-bold text-secondary mb-1">Growth Tracking</h4>
              <p className="text-headline-sm text-primary">5.2 kg <span className="text-body-md text-secondary ml-1">• 58 cm</span></p>
            </div>
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-3xl">straighten</span>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-sm md:hidden bg-surface-container-lowest dark:bg-surface-container-low rounded-t-lg shadow-[0_-8px_20px_rgba(74,101,78,0.15)]">
        <a
          onClick={(e) => handleNav(e, 'dashboard')}
          className={`flex flex-col items-center justify-center py-1 hover:opacity-90 ${
            currentScreen === 'dashboard' ? "bg-primary-container dark:bg-primary text-on-primary-container dark:text-on-primary rounded-full px-5 scale-90 transition-transform duration-150" : "text-secondary dark:text-secondary-fixed-dim"
          }`}
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-label-sm font-label-sm">Home</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'calendar')}
          className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-label-sm font-label-sm">Calendar</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'leaps')}
          className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">insights</span>
          <span className="text-label-sm font-label-sm">Leaps</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'journal')}
          className="flex flex-col items-center justify-center text-secondary dark:text-secondary-fixed-dim py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">book</span>
          <span className="text-label-sm font-label-sm">Journal</span>
        </a>
      </nav>
    </div>
  );
}
