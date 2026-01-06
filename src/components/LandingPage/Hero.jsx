import React from "react";
import { Rocket } from "lucide-react";

const Hero = () => {
  return (
    <div className="text-center py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight">
          Transforming Ideas into Innovative Digital Solutions
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Empowering businesses with cutting-edge technology and creative
          expertise
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center">
            <Rocket className="mr-2" /> Get Started
          </button>
          <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
