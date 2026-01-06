import React from "react";
import { motion } from "framer-motion";
import { translations } from "../../translations";

const PricingCard = ({ plan, language, isFeatured = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className={`
      bg-gray-900 border border-white/10 rounded-xl p-6 
      ${isFeatured ? "ring-2 ring-brand-primary" : ""}
      hover:bg-gray-800 transition-all duration-300
      shadow-glass-glow backdrop-blur-md
    `}
  >
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-calsans font-bold text-white">
        {plan.title[language]}
      </h3>
      {isFeatured && (
        <span className="bg-brand-primary text-white text-xs px-2 py-1 rounded-full">
          {language === "nl" ? "Aanbevolen" : "Recommended"}
        </span>
      )}
    </div>
    <div className="text-3xl font-bold text-white mb-4">
      {typeof plan.price === "object" ? plan.price[language] : plan.price}
    </div>
    <ul className="space-y-3 mb-6">
      {plan.highlights[language].map((highlight, index) => (
        <li key={index} className="flex items-center text-gray-400">
          <svg
            className="w-5 h-5 text-brand-primary mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          {highlight}
        </li>
      ))}
    </ul>
    <button
      className={`
      w-full py-3 rounded-full transition-colors duration-300
      ${
        isFeatured
          ? "bg-brand-primary text-white hover:bg-brand-primary/90"
          : "bg-gray-800 text-white hover:bg-gray-700"
      }
    `}
    >
      {language === "nl" ? "Selecteer Plan" : "Select Plan"}
    </button>
  </motion.div>
);

export const PricingSection = ({ language }) => {
  const pricingTranslations = {
    audit: translations.pricing.audit,
    growthEngine: translations.pricing.growthEngine,
    fractionalCTO: translations.pricing.fractionalCTO,
    workshopPricing: translations.pricing.workshopPricing,
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-calsans font-bold mb-4 text-white">
          {language === "nl" ? "Onze Tarieven" : "Our Pricing"}
        </h2>
        <p className="text-xl max-w-2xl mx-auto text-gray-400">
          {language === "nl"
            ? "Schaalbare oplossingen voor elke fase van je bedrijf"
            : "Scalable solutions for every stage of your business"}
        </p>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        <PricingCard plan={pricingTranslations.audit} language={language} />
        <PricingCard
          plan={pricingTranslations.growthEngine}
          language={language}
          isFeatured={true}
        />
        <PricingCard
          plan={pricingTranslations.fractionalCTO}
          language={language}
        />
        <PricingCard
          plan={pricingTranslations.workshopPricing}
          language={language}
        />
      </div>
    </section>
  );
};
