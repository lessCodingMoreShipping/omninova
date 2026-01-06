import React from "react";
import { Briefcase } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Starter",
      price: "$49",
      features: [
        "Basic Website Development",
        "Responsive Design",
        "1 Page Consultation",
        "Email Support",
      ],
      recommended: false,
    },
    {
      title: "Professional",
      price: "$99",
      features: [
        "Custom Web Application",
        "Advanced Responsive Design",
        "3 Pages Consultation",
        "Priority Email Support",
        "Basic SEO Optimization",
      ],
      recommended: true,
    },
    {
      title: "Enterprise",
      price: "$199",
      features: [
        "Full-Stack Solution",
        "Complex Web Platform",
        "Unlimited Consultation",
        "24/7 Premium Support",
        "Advanced SEO Optimization",
        "Custom Integrations",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`
                bg-gray-900 p-6 rounded-lg text-center 
                ${
                  plan.recommended
                    ? "border-2 border-blue-500 transform scale-105"
                    : ""
                }
                hover:bg-gray-800 transition duration-300
              `}
            >
              <div className="flex justify-center mb-4">
                <Briefcase className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>
              <p className="text-4xl font-bold mb-4 text-blue-500">
                {plan.price}/mo
              </p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-400">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
