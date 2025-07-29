"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe2, Zap } from "lucide-react";
import AnimatedCounter from "./animated-counter";
import Link from "next/link";
import InteractiveWorldMap from "./interactive-world-map"; // Declare the InteractiveWorldMap variable

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

  const globalLocations = [
    {
      country: "Bangladesh",
      role: "HEADQUARTER",
      flag: "🇧🇩",
      key: "Bangladesh",
    },
    {
      country: "UAE",
      role: "MIDDLE EAST HUB",
      flag: "🇦🇪",
      key: "UAE",
    },
    {
      country: "Malaysia",
      role: "ASIA-PACIFIC OPERATIONS",
      flag: "🇲🇾",
      key: "Malaysia",
    },
    {
      country: "USA",
      role: "North America Office",
      flag: "🇺🇸",
      key: "USA",
    },
  ];

  const handleCountryClick = (country: string) => {
    setSelectedCountries((prev) => {
      if (prev.includes(country)) {
        return prev.filter((c) => c !== country);
      } else {
        return [...prev, country];
      }
    });
  };

  const handleLocationCardClick = (country: string) => {
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
        {/* Hero Text */}
        <div className="text-center mb-24">
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

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 font-manrope leading-tight">
              <span className="text-white">Your </span>
              <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                INTELLIGENT
              </span>
              <br />
              <span className="text-white">Technology Marketing Partner</span>
            </h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          {/* Left Column - Story */}
          <div className="lg:col-span-7">
            <div
              className={`space-y-8 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="space-y-6">
                <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed font-manrope font-light">
                  We empower businesses with{" "}
                  <span className="text-primary font-medium">
                    adaptable, intelligent digital solutions
                  </span>{" "}
                  that bridge the gap between innovation and practical
                  application.
                </p>

                <div className="w-24 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>

                <p className="text-lg text-gray-400 leading-relaxed font-manrope">
                  As an agile and innovative IT and advanced marketing hub, we
                  craft bespoke solutions that empower underserved sectors with
                  enterprise-grade efficiency at competitive pricing.
                </p>
              </div>

              <div className="pt-8">
                <Link href="/about">
                  <Button className="group bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/25 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-manrope text-lg">
                    Discover Our Story
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="lg:col-span-5">
            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-8">
                {/* Stat 1 */}
                <div className="group">
                  <div className="flex items-end space-x-4 mb-2">
                    <div className="text-6xl font-bold text-primary font-manrope">
                      <AnimatedCounter end={500} suffix="+" />
                    </div>
                    <div className="pb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Zap className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 font-manrope">
                    Projects Delivered Globally
                  </p>
                  <div className="w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent mt-3"></div>
                </div>

                {/* Stat 2 */}
                <div className="group">
                  <div className="flex items-end space-x-4 mb-2">
                    <div className="text-6xl font-bold text-secondary font-manrope">
                      <AnimatedCounter end={25} suffix="+" />
                    </div>
                    <div className="pb-2">
                      <div className="w-8 h-8 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Globe2 className="w-4 h-4 text-secondary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 font-manrope">Countries Served</p>
                  <div className="w-full h-0.5 bg-gradient-to-r from-secondary/30 to-transparent mt-3"></div>
                </div>

                {/* Stat 3 */}
                <div className="group">
                  <div className="flex items-end space-x-4 mb-2">
                    <div className="text-6xl font-bold text-primary font-manrope">
                      <AnimatedCounter end={8} suffix=" Years" />
                    </div>
                    <div className="pb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Sparkles className="w-4 h-4 text-primary" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 font-manrope">
                    Innovation Excellence
                  </p>
                  <div className="w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent mt-3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Presence - Interactive World Map */}

        {/* Bottom CTA - Minimal */}
        {/* <div
          className={`text-center mt-32 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white font-manrope">
              Let's Build The Future Together
            </h3>
            <p className="text-xl text-gray-400 mb-10 font-manrope font-light leading-relaxed">
              Ready to transform your business with intelligent technology
              solutions?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button className="group bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/25 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-manrope text-lg">
                  Start Your Project
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  className="group border-2 border-gray-600 text-gray-300 hover:border-primary hover:text-primary bg-transparent backdrop-blur-sm px-10 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 font-manrope text-lg"
                >
                  Explore Services
                </Button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
