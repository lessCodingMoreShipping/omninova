import React from "react";
import { MessageCircle } from "lucide-react";

const CTAHeader = () => {
  return (
    <header className="bg-gray-900 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <MessageCircle className="w-8 h-8 text-blue-500 mr-3" />
          <h1 className="text-2xl font-bold text-white">OmniNova</h1>
        </div>
        <nav className="space-x-6">
          <a
            href="#services"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Services
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default CTAHeader;
