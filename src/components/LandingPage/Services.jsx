import React from "react";
import { Zap, MessageCircle, Clock } from "lucide-react";

const Services = () => {
  const servicesList = [
    {
      icon: Zap,
      title: "Rapid Development",
      description:
        "Accelerate your project with our efficient development process.",
    },
    {
      icon: MessageCircle,
      title: "Consultation",
      description: "Expert guidance to transform your ideas into reality.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Continuous support to ensure your project's success.",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg text-center hover:bg-gray-800 transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <service.icon className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
