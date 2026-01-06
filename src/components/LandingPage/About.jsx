import React from "react";
import { Code } from "lucide-react";

const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="flex items-center mb-6">
              <Code className="w-12 h-12 text-blue-500 mr-4" />
              <h2 className="text-4xl font-bold">About Our Company</h2>
            </div>
            <p className="text-xl text-gray-300 mb-6">
              We are a passionate team of developers and designers dedicated to
              creating innovative digital solutions that transform businesses
              and drive growth.
            </p>
            <p className="text-gray-400 mb-8">
              With years of experience across multiple industries, we leverage
              cutting-edge technologies to deliver custom web applications,
              responsive designs, and strategic digital solutions tailored to
              your unique business needs.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-500">10+</h3>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-500">100+</h3>
                <p className="text-gray-400">Successful Projects</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-300 mb-4">
                To empower businesses through innovative technology solutions,
                delivering exceptional value and driving digital transformation.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 mr-3 rounded-full"></span>
                  Innovative Problem Solving
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 mr-3 rounded-full"></span>
                  Client-Centric Approach
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 mr-3 rounded-full"></span>
                  Continuous Learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
