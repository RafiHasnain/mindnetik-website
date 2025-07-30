"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedCounter from "./animated-counter";
import Link from "next/link";
import InteractiveWorldMap from "./interactive-world-map";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([
    "Bangladesh",
  ]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCountryClick = (country: string) => {
    setSelectedCountries((prev) => {
      if (prev.includes(country)) {
        return prev.filter((c) => c !== country);
      } else {
        return [...prev, country];
      }
    });
  };

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div
          className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-1 h-1 bg-secondary/60 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
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
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary font-manrope">
                Who We Are
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-manrope leading-tight">
              <span className="text-white">Your </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                INTELLIGENT
              </span>
              <br />
              <span className="text-white">Technology Partner</span>
            </h2>
          </div>
        </div>

        {/* Main Content - Text Left, Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-manrope font-light mb-8">
                We empower businesses with{" "}
                <span className="text-primary font-medium">
                  adaptable, intelligent digital solutions
                </span>{" "}
                that bridge the gap between innovation and practical
                application.
              </p>

              <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary mb-8"></div>

              <p className="text-lg text-gray-400 leading-relaxed font-manrope mb-12">
                As an agile and innovative IT and advanced marketing hub, we
                craft bespoke solutions that empower underserved sectors with
                enterprise-grade efficiency at competitive pricing.
              </p>

              {/* Hero-style Stats */}
              <div
                className={`flex items-center space-x-8 mb-12 transition-all duration-1000 delay-700 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-12"
                }`}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-manrope">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400 font-manrope">
                    Projects Delivered
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-700/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary font-manrope">
                    <AnimatedCounter end={25} suffix="+" />
                  </div>
                  <div className="text-sm text-gray-400 font-manrope">
                    Countries Served
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-700/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-manrope">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <div className="text-sm text-gray-400 font-manrope">
                    Client Satisfaction
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-700/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary font-manrope">
                    <AnimatedCounter end={8} suffix=" Years" />
                  </div>
                  <div className="text-sm text-gray-400 font-manrope">
                    Innovation Excellence
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about">
                  <Button className="group bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-manrope">
                    Discover Our Story
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="outline"
                    className="group border-2 border-gray-600 text-gray-300 hover:border-primary hover:text-primary bg-transparent backdrop-blur-sm px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-manrope"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Blue Spheres Image */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Subtle secondary color hue behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-secondary/25 via-secondary/15 to-transparent rounded-full blur-3xl"></div>
              </div>

              {/* Main Floating Image */}
              <div className="relative z-10">
                <img
                  src="/images/mindnetik-about-us.png"
                  alt="Mindnetik Innovation - Blue Technology Spheres"
                  className="w-full max-w-md h-auto object-contain animate-float filter drop-shadow-2xl"
                  style={{
                    animation: "float 6s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence Section */}
        {/* <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold font-manrope mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GLOBAL</span>
              <span className="text-white"> PRESENCE</span>
            </h3>
            <p className="text-lg text-gray-400 font-manrope">
              Click on countries to explore our international footprint
            </p>
          </div> */}

        {/* Interactive World Map */}
        {/* <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden bg-gradient-to-br from-gray-800/50 via-gray-900/30 to-gray-800/50 backdrop-blur-sm border border-gray-700/30">
            <InteractiveWorldMap selectedCountries={selectedCountries} onCountryClick={handleCountryClick} />
          </div> */}

        {/* Location Cards */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { country: "Bangladesh", role: "HEADQUARTER", flag: "🇧🇩", key: "Bangladesh" },
              { country: "UAE", role: "MIDDLE EAST HUB", flag: "🇦🇪", key: "UAE" },
              { country: "Malaysia", role: "ASIA-PACIFIC", flag: "🇲🇾", key: "Malaysia" },
              { country: "USA", role: "NORTH AMERICA", flag: "🇺🇸", key: "USA" },
            ].map((location, index) => (
              <div
                key={index}
                className={`group flex flex-col items-center p-6 rounded-2xl backdrop-blur-sm border transition-all duration-500 cursor-pointer ${
                  selectedCountries.includes(location.key)
                    ? "bg-white/10 border-white/30 shadow-lg shadow-white/10"
                    : "bg-gray-800/30 border-gray-700/30 hover:border-primary/30 hover:bg-gray-800/50"
                } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${900 + index * 100}ms` }}
                onClick={() => handleCountryClick(location.key)}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {location.flag}
                </div>
                <h4 className="text-lg font-bold font-manrope text-white mb-1">{location.country}</h4>
                <p className="text-xs font-manrope font-medium tracking-wide text-gray-400 text-center">
                  {location.role}
                </p>
                {selectedCountries.includes(location.key) && (
                  <div className="mt-3">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            ))}
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
