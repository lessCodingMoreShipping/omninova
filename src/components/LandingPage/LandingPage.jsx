import React from "react";
import {
  Rocket,
  Zap,
  MessageCircle,
  Clock,
  Briefcase,
  Code,
} from "lucide-react";

import Hero from "./Hero";
import Services from "./Services";
import Pricing from "./Pricing";
import About from "./About";
import CTAHeader from "./CTAHeader";
import Contact from "./Contact";
import ChatbotWidget from "../ChatbotWidget";

const LandingPage = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <CTAHeader />
      <div className="container mx-auto px-4 py-16 space-y-16">
        <Hero />
        <Services />
        <Pricing />
        <About />
        <Contact />
      </div>
      <ChatbotWidget />
    </div>
  );
};

export default LandingPage;
