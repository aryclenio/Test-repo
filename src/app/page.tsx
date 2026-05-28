"use client";

import React, { useState } from "react";
import DashboardScreen from "../components/screens/DashboardScreen";
import GrowthTimeline from "../components/screens/GrowthTimeline";
import JournalScreen from "../components/screens/JournalScreen";
import LeapDetailsScreen from "../components/screens/LeapDetailsScreen";

type ScreenKey = "dashboard" | "calendar" | "journal" | "leaps";

export default function Home() {
  const [activeScreen, setActiveScreen] = useState<ScreenKey>("dashboard");

  const handleNavigate = (screen: ScreenKey) => {
    setActiveScreen(screen);
    // Smooth scroll back to top of screen on page navigation
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderActiveScreen = () => {
    switch (activeScreen) {
      case "dashboard":
        return <DashboardScreen onNavigate={handleNavigate} currentScreen={activeScreen} />;
      case "calendar":
        return <GrowthTimeline onNavigate={handleNavigate} currentScreen={activeScreen} />;
      case "journal":
        return <JournalScreen onNavigate={handleNavigate} currentScreen={activeScreen} />;
      case "leaps":
        return <LeapDetailsScreen onNavigate={handleNavigate} currentScreen={activeScreen} />;
      default:
        return <DashboardScreen onNavigate={handleNavigate} currentScreen={activeScreen} />;
    }
  };

  return <>{renderActiveScreen()}</>;
}
