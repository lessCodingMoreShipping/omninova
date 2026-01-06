import { useState } from "react";

export const useLanguage = () => {
  const [language, setLanguage] = useState("nl");

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === "nl" ? "en" : "nl"));
  };

  return { language, toggleLanguage };
};
