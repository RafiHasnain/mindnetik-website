"use client";

import { useEffect, useState } from "react";

const TechStackSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // First row of technologies (moving left to right)
  const techStackRow1 = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "Django",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Kubernetes",
    "GraphQL",
  ];

  // Second row of technologies (moving right to left)
  const techStackRow2 = [
    "Vue.js",
    "Angular",
    "Flutter",
    "React Native",
    "Laravel",
    "PHP",
    "MySQL",
    "Redis",
    "Azure",
    "Firebase",
    "Terraform",
    "Microservices",
  ];

  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`transition-all duration-1200 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 font-manrope leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Yes!
              </span>{" "}
              <span className="text-white">We cover your tech stack.</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto font-manrope">
              Our expert team has deep expertise in modern technologies and
              frameworks to bring your vision to life.
            </p>
          </div>
        </div>

        {/* Tech Stack Animation Container */}
        <div
          className={`space-y-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* First Row - Moving Left to Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-left space-x-16">
              {/* Duplicate the array to create seamless loop */}
              {[...techStackRow1, ...techStackRow1].map((tech, index) => (
                <div
                  key={`row1-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300 font-manrope whitespace-nowrap px-4 py-2">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Right to Left */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right space-x-16">
              {/* Duplicate the array to create seamless loop */}
              {[...techStackRow2, ...techStackRow2].map((tech, index) => (
                <div
                  key={`row2-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-secondary transition-colors duration-300 font-manrope whitespace-nowrap px-4 py-2">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-lg text-gray-400 font-manrope">
            Don't see your technology? We're always expanding our expertise.{" "}
            <span className="text-primary hover:text-secondary transition-colors duration-300 cursor-pointer font-medium">
              Let's discuss your needs.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
