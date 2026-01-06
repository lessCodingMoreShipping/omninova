import React from "react";
import { motion } from "framer-motion";

export const AboutSection = ({ language, className = "" }) => {
  const translations = {
    headline: {
      nl: "Van Strategie naar Executie.",
      en: "From Strategy to Execution.",
    },
    content: {
      nl: "Met een achtergrond in de zakelijke consultancy begrijp ik dat techniek slechts een middel is. AI is pas waardevol als het tijd vrijmaakt, kosten verlaagt of de kwaliteit van werk verhoogt. Ik help ondernemers de ruis te doorbreken met nuchtere, AVG-proof oplossingen die direct impact maken. Geen 'black box', maar heldere architectuur.",
      en: "With a background in business consultancy, I understand that technology is just a means to an end. AI is only valuable if it frees up time, reduces costs, or increases the quality of work. I help entrepreneurs break through the noise with down-to-earth, GDPR-proof solutions that make an immediate impact. No 'black box', but clear architecture.",
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`container mx-auto px-4 py-16 flex flex-col md:flex-row items-center ${className}`}
    >
      <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12">
        <h2 className="text-4xl font-calsans font-bold mb-6 text-white">
          {translations.headline[language]}
        </h2>
        <p className="text-xl text-gray-400 leading-relaxed">
          {translations.content[language]}
        </p>
      </div>
      <div
        className="md:w-1/2 bg-gray-900 border border-white/10 rounded-xl p-6 
                      shadow-glass-glow backdrop-blur-md"
      >
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <span className="text-brand-primary text-3xl font-bold block mb-2">
              5+
            </span>
            <p className="text-gray-400">
              {language === "nl" ? "Jaren Ervaring" : "Years Experience"}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <span className="text-brand-primary text-3xl font-bold block mb-2">
              20+
            </span>
            <p className="text-gray-400">
              {language === "nl"
                ? "Succesvolle Projecten"
                : "Successful Projects"}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <span className="text-brand-primary text-3xl font-bold block mb-2">
              100%
            </span>
            <p className="text-gray-400">
              {language === "nl" ? "AVG Compliant" : "GDPR Compliant"}
            </p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <span className="text-brand-primary text-3xl font-bold block mb-2">
              24/7
            </span>
            <p className="text-gray-400">
              {language === "nl" ? "Ondersteuning" : "Support"}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
