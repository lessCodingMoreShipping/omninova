import React from "react";
import { useLanguage } from "./hooks/useLanguage";
import { LanguageToggle } from "./components/ui/LanguageToggle";
import { HeroSection } from "./components/ui/HeroSection";
import { ServicesSection } from "./components/ui/ServicesSection";
import { AboutSection } from "./components/ui/AboutSection";
import { PricingSection } from "./components/ui/PricingSection";

function App() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="min-h-screen bg-background text-foreground font-geist tracking-[-0.02em]">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center">
            <img
              src="/src/assets/logo.svg"
              alt="OmniNova Logo"
              className="h-14 mr-3 hidden md:block"
            />
            <span className="text-2xl font-calsans font-bold hidden md:block">
              OmniNova
            </span>
            <img
              src="/src/assets/logo.svg"
              alt="OmniNova Logo"
              className="h-8 block md:hidden"
            />
          </div>
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection language={language} />

      {/* Services Section */}
      <ServicesSection language={language} />

      {/* About Section */}
      <AboutSection language={language} />

      {/* Pricing Section */}
      <PricingSection language={language} />

      {/* Safe Zone Placeholder */}
      <div className="fixed bottom-4 right-4 w-[100px] h-[100px] bg-transparent"></div>
    </div>
  );
}

export default App;
