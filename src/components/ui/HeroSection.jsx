import React from "react";
import { motion } from "framer-motion";
import { translations } from "../../translations";

export const HeroSection = ({ language }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 pt-32 pb-24 md:pt-48 md:pb-40 text-center"
    >
      <h1 className="text-5xl font-calsans font-bold mb-6">
        {translations.hero.title[language]}
      </h1>
      <p className="text-xl max-w-2xl mx-auto mb-8">
        {translations.hero.subtitle[language]}
      </p>
      <button className="bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-primary/90 transition-colors">
        {translations.hero.cta[language]}
      </button>
    </motion.section>
  );
};
