import React from "react";

interface ScreenProps {
  onNavigate?: (screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => void;
  currentScreen?: string;
}

export default function GrowthTimeline({ onNavigate, currentScreen = 'calendar' }: ScreenProps) {
  const handleNav = (e: React.MouseEvent, screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => {
    e.preventDefault();
    if (onNavigate) onNavigate(screen);
  };

  return (
    <div className="flex min-h-screen bg-background text-on-background selection:bg-primary-fixed">
      {/* Sidebar Navigation (Desktop) */}
      <aside className="hidden md:flex flex-col h-screen sticky top-0 py-md px-sm bg-surface-container-lowest w-64 shadow-md z-40">
        <div className="px-4 mb-xl">
          <h1 className="text-headline-sm font-semibold text-primary">Salto &amp; Brilho</h1>
          <p className="text-label-sm text-secondary">Nurturing Growth</p>
        </div>
        <nav className="flex-1 flex flex-col gap-xs">
          <a
            onClick={(e) => handleNav(e, 'dashboard')}
            className="flex items-center gap-sm text-secondary hover:bg-surface-container-high transition-colors px-4 py-3 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="text-label-md">Dashboard</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'calendar')}
            className={`flex items-center gap-sm rounded-lg px-4 py-3 translate-x-1 transition-all duration-200 ${
              currentScreen === 'calendar'
                ? "bg-primary-fixed text-on-primary-fixed font-bold"
                : "text-secondary hover:bg-surface-container-high transition-colors"
            }`}
            href="#"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            <span className="text-label-md">Calendar</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'leaps')}
            className="flex items-center gap-sm text-secondary hover:bg-surface-container-high transition-colors px-4 py-3 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="text-label-md">Leaps</span>
          </a>
          <a
            onClick={(e) => handleNav(e, 'journal')}
            className="flex items-center gap-sm text-secondary hover:bg-surface-container-high transition-colors px-4 py-3 rounded-lg"
            href="#"
          >
            <span className="material-symbols-outlined">auto_stories</span>
            <span className="text-label-md">Journal</span>
          </a>
        </nav>
        <div className="mt-auto px-4 flex items-center gap-sm pt-md border-t border-surface-variant">
          <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-secondary">child_care</span>
          </div>
          <div>
            <p className="text-label-md text-on-surface">Luna</p>
            <p className="text-label-sm text-secondary">8 Weeks Old</p>
          </div>
        </div>
      </aside>

      {/* Main Canvas */}
      <main className="flex-1 max-w-[1040px] mx-auto px-container-margin py-md pb-xl md:pb-md">
        {/* Top App Bar (Mobile Context) */}
        <header className="flex justify-between items-center w-full mb-lg md:hidden">
          <h1 className="text-headline-md font-bold text-primary">Salto &amp; Brilho</h1>
          <span className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity">child_care</span>
        </header>
        <header className="mb-lg">
          <h2 className="text-display-lg-mobile md:text-display-lg text-primary mb-xs">Growth Timeline</h2>
          <p className="text-body-md text-secondary">Mapping Luna's developmental leaps and sunny phases.</p>
        </header>

        {/* Calendar Bento Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-md">
          {/* Main Timeline Scroll Card */}
          <section className="lg:col-span-3 bg-surface-container-lowest rounded-lg p-md sage-shadow overflow-hidden">
            <div className="flex items-center justify-between mb-md">
              <div className="flex items-center gap-sm">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
                <h3 className="text-headline-sm text-on-surface">The First 20 Weeks</h3>
              </div>
              <div className="flex gap-xs">
                <span className="flex items-center gap-xs px-sm py-1 bg-secondary-container/30 rounded-full text-label-sm text-secondary">
                  <span className="material-symbols-outlined text-[16px]">wb_sunny</span> Sunny Week
                </span>
                <span className="flex items-center gap-xs px-sm py-1 bg-primary-fixed/30 rounded-full text-label-sm text-primary">
                  <span className="material-symbols-outlined text-[16px]">cloud</span> Stormy Leap
                </span>
              </div>
            </div>

            {/* Horizontal Scroll Track */}
            <div className="leap-track flex gap-4 overflow-x-auto pb-lg snap-x">
              {/* Weeks 1-20 Generated with state logic */}
              {/* Week 1: Sunny */}
              <div className="flex-shrink-0 w-24 snap-start">
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-secondary-container/10 border-2 border-transparent">
                  <span className="text-label-sm text-secondary">Week 1</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
                </div>
              </div>
              {/* Week 2-4: Sunny */}
              <div className="flex-shrink-0 w-24 snap-start">
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-secondary-container/10 border-2 border-transparent">
                  <span className="text-label-sm text-secondary">Week 2</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
                </div>
              </div>
              {/* Week 5: Leap 1 */}
              <div
                onClick={(e) => handleNav(e, 'leaps')}
                className="flex-shrink-0 w-28 snap-start group cursor-pointer"
              >
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-primary-fixed/40 border-2 border-primary-container">
                  <span className="text-label-md font-bold text-primary">Week 5</span>
                  <div className="relative">
                    <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                    {/* Tooltip logic simulated with hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-sm bg-inverse-surface text-inverse-on-surface rounded-lg text-label-sm z-50">
                      <p className="font-bold mb-xs">Leap 1: Sensations</p>
                      The first leap! Luna's world is becoming more intense as she starts processing sensory input more acutely.
                    </div>
                  </div>
                  <span className="text-label-sm text-on-primary-fixed bg-primary-fixed px-2 rounded-full">Leap 1</span>
                </div>
              </div>
              {/* Week 6-7: Sunny */}
              <div className="flex-shrink-0 w-24 snap-start">
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-secondary-container/10 border-2 border-transparent">
                  <span className="text-label-sm text-secondary">Week 6</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
                </div>
              </div>
              {/* Week 8: Current Week Highlight */}
              <div
                onClick={(e) => handleNav(e, 'leaps')}
                className="flex-shrink-0 w-32 snap-start cursor-pointer"
              >
                <div className="h-44 relative flex flex-col items-center justify-between py-xs rounded-xl bg-primary shadow-lg ring-4 ring-primary-fixed -mt-2">
                  <span className="text-label-md font-bold text-on-primary">WEEK 8</span>
                  <div className="flex flex-col items-center">
                    <span className="material-symbols-outlined text-white text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                    <p className="text-label-sm text-white/80 mt-1">Leap 2</p>
                  </div>
                  <div className="bg-white/20 text-white text-label-sm px-3 py-1 rounded-full">Current</div>
                </div>
              </div>
              {/* Week 9: Leap 2 Ends */}
              <div
                onClick={(e) => handleNav(e, 'leaps')}
                className="flex-shrink-0 w-28 snap-start group cursor-pointer"
              >
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-primary-fixed/40 border-2 border-primary-container">
                  <span className="text-label-md font-bold text-primary">Week 9</span>
                  <div className="relative">
                    <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-sm bg-inverse-surface text-inverse-on-surface rounded-lg text-label-sm z-50">
                      <p className="font-bold mb-xs">Leap 2: Patterns</p>
                      Luna is discovering simple patterns. You might notice her staring at shadows or stripes.
                    </div>
                  </div>
                  <span className="text-label-sm text-on-primary-fixed bg-primary-fixed px-2 rounded-full">Leap 2</span>
                </div>
              </div>
              {/* Week 10-11: Sunny */}
              <div className="flex-shrink-0 w-24 snap-start">
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-secondary-container/10 border-2 border-transparent">
                  <span className="text-label-sm text-secondary">Week 10</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
                </div>
              </div>
              {/* Week 12: Leap 3 Start */}
              <div
                onClick={(e) => handleNav(e, 'leaps')}
                className="flex-shrink-0 w-28 snap-start group cursor-pointer"
              >
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-primary-fixed/40 border-2 border-primary-container opacity-60">
                  <span className="text-label-md font-bold text-primary">Week 12</span>
                  <div className="relative">
                    <span className="material-symbols-outlined text-primary text-[32px]" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block w-48 p-sm bg-inverse-surface text-inverse-on-surface rounded-lg text-label-sm z-50">
                      <p className="font-bold mb-xs">Leap 3: Transitions</p>
                      Everything becomes smoother. Luna will begin to control her vocal cords and movements.
                    </div>
                  </div>
                  <span className="text-label-sm text-on-primary-fixed bg-primary-fixed px-2 rounded-full">Leap 3</span>
                </div>
              </div>
              {/* Week 13-20 continues... */}
              <div className="flex-shrink-0 w-24 snap-start">
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-secondary-container/10 border-2 border-transparent opacity-40">
                  <span className="text-label-sm text-secondary">Week 13</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
                </div>
              </div>
              <div className="flex-shrink-0 w-24 snap-start">
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-secondary-container/10 border-2 border-transparent opacity-40">
                  <span className="text-label-sm text-secondary">Week 14</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
                </div>
              </div>
              <div className="flex-shrink-0 w-24 snap-start">
                <div className="h-40 relative flex flex-col items-center justify-between py-xs rounded-xl bg-secondary-container/10 border-2 border-transparent opacity-40">
                  <span className="text-label-sm text-secondary">Week 15</span>
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
                  <div className="w-1 h-1 bg-secondary-container rounded-full"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Current Phase Detail Card */}
          <section
            onClick={(e) => handleNav(e, 'leaps')}
            className="lg:col-span-2 bg-surface-container-lowest rounded-lg p-md sage-shadow border-l-4 border-primary cursor-pointer hover:border-primary/50 transition-all"
          >
            <div className="flex items-start gap-md">
              <div className="hidden sm:block w-32 h-32 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  alt="Luna"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZslzbeSl-8pS3GzFJ2bBZF_6i0Q_12Q1Nd5XwRc0PqeFNONVhtK6-w8PKEkFsoGC36lmdi6PrlQtT449s-RJkteczDqJRCyd3rmGx0RLkAjU8fsifwx6E0ztY3D6K3rxZfzDfNx3Fg0F8reU6X7J8dkPU6pMjT6S1VIA5k48GQXqjrfzaLS1K8H5xJJHByGFCMROaHzkkrZDs_w1qGZIXkCRO8BHEfP-cloPMIEJbPdurFGgpDFzaY7aYUN1NEOolmS-mOb5k5uM"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-sm mb-xs">
                  <span className="px-sm py-1 bg-primary text-on-primary rounded-full text-label-sm uppercase tracking-wider">Current Phase</span>
                  <h4 className="text-headline-sm text-on-surface">Leap 2: The World of Patterns</h4>
                </div>
                <p className="text-body-md text-on-surface-variant mb-md">
                  Luna is currently in her second leap. You might notice she is more fussy than usual, sleeping less, or wanting to be held constantly. This is a sign her brain is building new connections!
                </p>
                <div className="flex flex-wrap gap-xs">
                  <span className="px-sm py-1 bg-surface-container-high rounded-full text-label-sm text-secondary">#fussyphase</span>
                  <span className="px-sm py-1 bg-surface-container-high rounded-full text-label-sm text-secondary">#development</span>
                  <span className="px-sm py-1 bg-surface-container-high rounded-full text-label-sm text-secondary">#8weeks</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats / Insights Card */}
          <section className="bg-secondary-container text-on-secondary-container rounded-lg p-md sage-shadow flex flex-col justify-between">
            <div>
              <h4 className="text-label-md font-bold mb-md uppercase opacity-80">Phase Insight</h4>
              <div className="flex items-center gap-sm mb-sm">
                <span className="material-symbols-outlined text-[32px]">lightbulb</span>
                <p className="text-headline-sm leading-tight">Next Sunny Phase: Week 10</p>
              </div>
              <p className="text-body-md opacity-90">Expect a significant period of calm and new social skills in about 12 days.</p>
            </div>
            <button
              onClick={(e) => handleNav(e, 'leaps')}
              className="mt-md w-full bg-on-secondary-container text-white py-sm rounded-full font-bold hover:scale-95 transition-transform active:scale-90"
            >
              View Skills Checklist
            </button>
          </section>

          {/* Helpful Tips for Current Week */}
          <section className="lg:col-span-3">
            <h3 className="text-headline-sm text-on-surface mb-md">Tips for Luna's 8th Week</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
              {/* Tip 1 */}
              <div className="bg-surface-container-lowest p-md rounded-lg sage-shadow flex gap-sm">
                <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-primary">visibility</span>
                </div>
                <div>
                  <h5 className="text-label-md font-bold text-on-surface mb-1">Visual Patterns</h5>
                  <p className="text-body-md text-on-surface-variant">Introduce high-contrast cards. Luna is now obsessed with stripes and bold edges.</p>
                </div>
              </div>
              {/* Tip 2 */}
              <div className="bg-surface-container-lowest p-md rounded-lg sage-shadow flex gap-sm">
                <div className="w-12 h-12 rounded-full bg-secondary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-secondary">nightlight</span>
                </div>
                <div>
                  <h5 className="text-label-md font-bold text-on-surface mb-1">Bedtime Routine</h5>
                  <p className="text-body-md text-on-surface-variant">Keep it consistent. The predictability helps Luna feel safe during this leap.</p>
                </div>
              </div>
              {/* Tip 3 */}
              <div className="bg-surface-container-lowest p-md rounded-lg sage-shadow flex gap-sm">
                <div className="w-12 h-12 rounded-full bg-tertiary-fixed flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-tertiary">pan_tool</span>
                </div>
                <div>
                  <h5 className="text-label-md font-bold text-on-surface mb-1">Sensory Play</h5>
                  <p className="text-body-md text-on-surface-variant">Gently massage Luna's hands and feet to help her map her own body.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Bottom Navigation Bar (Mobile Only) */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-sm bg-surface-container-lowest rounded-t-lg shadow-[0_-8px_20px_rgba(74,101,78,0.15)] md:hidden">
        <a
          onClick={(e) => handleNav(e, 'dashboard')}
          className="flex flex-col items-center justify-center text-secondary py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-label-sm">Home</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'calendar')}
          className={`flex flex-col items-center justify-center rounded-full px-5 py-1 scale-90 transition-transform duration-150 ${
            currentScreen === 'calendar' ? "bg-primary-container text-on-primary-container font-bold" : "text-secondary"
          }`}
          href="#"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
          <span className="text-label-sm">Calendar</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'leaps')}
          className="flex flex-col items-center justify-center text-secondary py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">insights</span>
          <span className="text-label-sm">Leaps</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'journal')}
          className="flex flex-col items-center justify-center text-secondary py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">book</span>
          <span className="text-label-sm">Journal</span>
        </a>
      </nav>
    </div>
  );
}
