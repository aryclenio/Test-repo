import React from "react";

interface ScreenProps {
  onNavigate?: (screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => void;
  currentScreen?: string;
}

export default function LeapDetailsScreen({ onNavigate, currentScreen = 'leaps' }: ScreenProps) {
  const handleNav = (e: React.MouseEvent, screen: 'dashboard' | 'calendar' | 'journal' | 'leaps') => {
    e.preventDefault();
    if (onNavigate) onNavigate(screen);
  };

  return (
    <div className="bg-background text-on-background min-h-screen pb-32">
      {/* Top App Bar */}
      <header className="bg-background flex justify-between items-center px-container-margin py-sm w-full max-w-[1040px] mx-auto sticky top-0 z-50">
        <div className="flex items-center gap-sm">
          <button
            onClick={(e) => handleNav(e, 'dashboard')}
            className="hover:opacity-80 transition-opacity active:scale-95 duration-200"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <span className="text-headline-md font-headline-md font-bold text-primary">Salto &amp; Brilho</span>
        </div>
        <div className="flex items-center gap-md">
          <span className="material-symbols-outlined text-primary hover:opacity-80 transition-opacity cursor-pointer">child_care</span>
          <img
            alt="Baby profile picture showing current age"
            className="w-10 h-10 rounded-full border-2 border-primary-container"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVVqlpvRAVD3l_FGZtMJmEFe7W8XyJoA1WM_sG6E258fq6jWoSYHXg1xgXJ52WoIthK5bAZgml-5H3dyYBGa3K9KLT6mLHWPG0wT17iUs7uXGTzZvagfjJ3IwIOWHskn4P_vj-ApSas2zWoZtW7jzxk8lGO2uHPUC0UjtnGZ74Yfyybt8zdZqRtEhsDta0miE9pK0o9KuKzWC-OrlU7iUvNxYpR7OZBYeK_44kKmGjEZc49ZZzESGBGLfQDtlctArZ4u4YBU0DJmQ"
          />
        </div>
      </header>

      <main className="max-w-[1040px] mx-auto px-container-margin mt-md">
        {/* Hero Section: Leap Detail Header */}
        <section className="mb-xl text-center md:text-left">
          <div className="inline-block px-sm py-xs bg-secondary-container text-on-secondary-container rounded-full text-label-sm mb-sm">
            Fussy Phase: Weeks 7-9
          </div>
          <h1 className="text-display-lg-mobile md:text-display-lg text-primary mb-sm">Leap 2: The World of Patterns</h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Your baby is starting to recognize repeating patterns in their environment. This newfound awareness of structure helps them understand that the world isn't just a chaos of sensations, but a place where things repeat.
          </p>
        </section>

        {/* Progress/Timeline Component (Leap Track) */}
        <section className="mb-xl">
          <div className="bg-surface-container-lowest p-md rounded-lg soft-shadow">
            <div className="flex justify-between text-label-md text-secondary mb-xs">
              <span>Week 7</span>
              <span>Week 8</span>
              <span>Week 9</span>
            </div>
            <div className="relative h-4 w-full bg-secondary-container rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-primary-container w-[65%]" style={{ transition: "width 1s ease-out" }}></div>
            </div>
            <div className="flex justify-between items-center mt-sm">
              <div className="flex items-center gap-xs">
                <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>cloud</span>
                <span className="text-label-sm text-on-surface-variant">Intense Phase</span>
              </div>
              <div className="flex items-center gap-xs">
                <span className="text-label-sm text-on-surface-variant italic">Next milestone in 4 days</span>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>lightbulb</span>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout for Sections */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-md items-start">
          {/* Common Behaviors (Left Column) */}
          <section className="md:col-span-4 flex flex-col gap-md">
            <div className="bg-white p-md rounded-lg soft-shadow">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-error" style={{ fontVariationSettings: "'FILL' 1" }}>mood_bad</span>
                <h2 className="text-headline-sm text-primary">Common Behaviors</h2>
              </div>
              <ul className="space-y-sm">
                <li className="flex items-center gap-sm p-sm bg-surface-container rounded-lg">
                  <span className="material-symbols-outlined text-secondary">child_care</span>
                  <span className="text-body-md font-label-md">More fussy and crying</span>
                </li>
                <li className="flex items-center gap-sm p-sm bg-surface-container rounded-lg">
                  <span className="material-symbols-outlined text-secondary">local_library</span>
                  <span className="text-body-md font-label-md">Wanting more milk</span>
                </li>
                <li className="flex items-center gap-sm p-sm bg-surface-container rounded-lg">
                  <span className="material-symbols-outlined text-secondary">family_restroom</span>
                  <span className="text-body-md font-label-md">Clinging to parents</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary-fixed p-md rounded-lg flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary text-[48px] mb-sm">spa</span>
              <h3 className="text-headline-sm text-on-primary-fixed mb-xs">Parental Tip</h3>
              <p className="text-body-md text-on-primary-fixed-variant">This phase is temporary. You're doing a great job providing the comfort your baby needs right now.</p>
            </div>
          </section>

          {/* New Skills & How to Help (Center/Right Columns) */}
          <section className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-md">
            {/* New Skills Card */}
            <div className="bg-white p-md rounded-lg soft-shadow col-span-1 md:col-span-2">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                <h2 className="text-headline-sm text-primary">New Skills Developing</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-sm">
                <div className="bg-surface-container-low p-sm rounded-lg flex flex-col items-center text-center gap-xs">
                  <span className="material-symbols-outlined text-primary-container text-[32px]">visibility</span>
                  <span className="text-label-md">Tracking objects</span>
                </div>
                <div className="bg-surface-container-low p-sm rounded-lg flex flex-col items-center text-center gap-xs">
                  <span className="material-symbols-outlined text-primary-container text-[32px]">hearing</span>
                  <span className="text-label-md">Listening to sounds</span>
                </div>
                <div className="bg-surface-container-low p-sm rounded-lg flex flex-col items-center text-center gap-xs">
                  <span className="material-symbols-outlined text-primary-container text-[32px]">front_hand</span>
                  <span className="text-label-md">Discovering hands</span>
                </div>
              </div>
            </div>

            {/* How to Help Card */}
            <div className="bg-white p-md rounded-lg soft-shadow col-span-1 md:col-span-2">
              <div className="flex items-center gap-sm mb-md">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>volunteer_activism</span>
                <h2 className="text-headline-sm text-primary">How to Help</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
                <div className="flex flex-col gap-sm">
                  <img
                    className="w-full h-32 object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeC0wAlqqBOWiA9hXs8ZyS3d7L4nKLWYp8Mjf7X9BjrR1SZUIHWkaKh9yWQWmH26sURsxfGe5-GiFqWBXONxGoEnGa7jvOblOCf-CneY3-xpYkzs9MT7s6mb-o398FtrLczK23vBM8c_6Gc6dfJUmvdPrqAT2zHEyT5T6SM6qaOIdRZDje1wRKja0bQ-kgNWV3G-R8MpcSnV4s6VIICNyMqS7ZM_A_3lh0StFgLI9IAoBZMNyyy-h1QVgqS-mmNMjRU8kpSUlJ-AY"
                    alt="Singing Songs"
                  />
                  <h4 className="font-headline-sm text-primary">Singing Songs</h4>
                  <p className="text-body-md text-on-surface-variant">Use repetitive nursery rhymes to reinforce the pattern recognition.</p>
                  <span className="inline-block px-xs py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded text-label-sm w-fit">Auditory</span>
                </div>
                <div className="flex flex-col gap-sm">
                  <img
                    className="w-full h-32 object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpNo9qfoFVAXy-x8g2KLqrJrPMBeE2XqufLL-H1gjlmVGXWbhXIIHIwGpNvW17rDOuFS2RMThnzg4254oTIqgn78RrOvMjBFcmr3zQabJuE_Zf-Qe8uuXMhKUHJyN5eoYBDjHyExytn6eY1PyXsLqfluzzCWoWpEGHKfWKUBsXNdkBuj8GTFVk0GJFnNWhZU8bsm0LHTKzoWmXeswLzEChULY1ZRz_sip-2c3uMMTa-i2lbv_aWZLdYgMhYQTs6-fRtXU-1-mFssE"
                    alt="Baby Massage"
                  />
                  <h4 className="font-headline-sm text-primary">Baby Massage</h4>
                  <p className="text-body-md text-on-surface-variant">Help them feel the rhythm of patterns through gentle touch and skin contact.</p>
                  <span className="inline-block px-xs py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded text-label-sm w-fit">Tactile</span>
                </div>
                <div className="flex flex-col gap-sm">
                  <img
                    className="w-full h-32 object-cover rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5YhocuGzecOSZfSQQ9Gyw-eYYNNJrNte8mHyNOxYyYI2sN8-fYsvkZ6-HZF0ypHSNiHHA6UEuVgulL44TuM799sOEIZKt9T1YwTEoIHTJphYOY_d4IG-RwGoDPRXotg9-oKLQnKCdV8PdA12niV07ieToudgjV1ZSanS_fgZy9f5vRMt6ZSjXnBUgwaEBuVDe7w6t3tIMxNGhQxV-qSfkTZob1qeNSgFSN0zB1iHkaX1ZvmLm6dbC5ZM1JO3EnqhRCcNOaj-9ih8"
                    alt="Quiet Play"
                  />
                  <h4 className="font-headline-sm text-primary">Quiet Play</h4>
                  <p className="text-body-md text-on-surface-variant">Provide high-contrast toys with patterns like stripes or circles.</p>
                  <span className="inline-block px-xs py-1 bg-secondary-fixed text-on-secondary-fixed-variant rounded text-label-sm w-fit">Visual</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Call to Action / Interactive element */}
        <section className="mt-xl mb-xl text-center">
          <button className="bg-primary text-on-primary font-bold px-xl py-md rounded-full pill-shaped soft-shadow hover:opacity-90 active:scale-95 transition-all flex items-center gap-sm mx-auto">
            <span className="material-symbols-outlined">edit_note</span>
            Log a Milestone
          </button>
        </section>
      </main>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-gutter py-sm md:hidden bg-surface-container-lowest dark:bg-surface-container-low shadow-[0_-8px_20px_rgba(74,101,78,0.15)] rounded-t-lg">
        <a
          onClick={(e) => handleNav(e, 'dashboard')}
          className="flex flex-col items-center justify-center text-secondary py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">home</span>
          <span className="text-label-sm font-label-sm">Home</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'calendar')}
          className="flex flex-col items-center justify-center text-secondary py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">calendar_today</span>
          <span className="text-label-sm font-label-sm">Calendar</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'leaps')}
          className={`flex flex-col items-center justify-center rounded-full px-5 py-1 scale-90 transition-transform duration-150 ${
            currentScreen === 'leaps' ? "bg-primary-container text-on-primary-container font-bold" : "text-secondary"
          }`}
          href="#"
        >
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
          <span className="text-label-sm font-label-sm">Leaps</span>
        </a>
        <a
          onClick={(e) => handleNav(e, 'journal')}
          className="flex flex-col items-center justify-center text-secondary py-1 hover:opacity-90"
          href="#"
        >
          <span className="material-symbols-outlined">book</span>
          <span className="text-label-sm font-label-sm">Journal</span>
        </a>
      </nav>
    </div>
  );
}
