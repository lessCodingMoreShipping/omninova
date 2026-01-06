import React from "react";
import { Globe } from "lucide-react";

export const LanguageToggle = ({ language, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center justify-center p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300"
      aria-label={`Switch to ${language === "nl" ? "English" : "Dutch"}`}
    >
      <Globe className="w-5 h-5 text-white" />
      <span className="ml-2 text-sm font-mono text-white">
        {language === "nl" ? "EN" : "NL"}
      </span>
    </button>
  );
};
