import React from "react";
import { motion } from "framer-motion";

export const ServiceCard = ({ service, language, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="bg-gray-900 border border-white/10 rounded-xl p-6 space-y-4 
                 hover:bg-gray-800 transition-colors duration-300 
                 shadow-glass-glow backdrop-blur-md"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-calsans font-bold text-white">
          {service.title[language]}
        </h3>
        <div
          className="w-10 h-10 bg-brand-primary/10 rounded-full 
                        flex items-center justify-center"
        >
          <span className="text-brand-primary font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-brand-primary mb-2">
          {service.headline[language]}
        </h4>
        <p className="text-gray-400">{service.description[language]}</p>
      </div>
    </motion.div>
  );
};
