import React from "react";
import { ServiceCard } from "./ServiceCard";
import { translations } from "../../translations";

export const ServicesSection = ({ language }) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-calsans font-bold mb-4 text-white">
          {language === "nl" ? "Onze Services" : "Our Services"}
        </h2>
        <p className="text-xl max-w-2xl mx-auto text-gray-400">
          {language === "nl"
            ? "Transformeer je bedrijf met strategische AI-oplossingen"
            : "Transforming your business with strategic AI solutions"}
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {translations.services.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            language={language}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
