"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import SplineRobot from "./spline-robot";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-dark relative overflow-hidden">
      {/* Extended background that bleeds beyond section boundaries */}
      <div className="absolute -inset-20">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark/95 to-dark/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/8 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/6"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-transparent to-dark/80"></div>

        {/* Large ambient lighting effects that extend beyond boundaries */}
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-primary/2 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-primary/1 to-transparent rounded-full blur-2xl"></div>

        {/* Atmospheric noise */}
        <div className="absolute inset-0 opacity-[0.008]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(17, 105, 243, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(17, 105, 243, 0.03) 1px, transparent 1px)
            `,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>
      </div>

      {/* Seamless content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-0 items-center min-h-[calc(100vh-5rem)]">
          {/* Left side - Content */}
          <div className="space-y-8 lg:pr-12 relative z-20">
            {/* Main heading */}
            <div
              className={`transition-all duration-1000 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white font-manrope">
                <span className="block">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Empowering
                  </span>
                </span>
                <span className="block">
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                    Innovation,
                  </span>
                </span>
                <span className="block">
                  <span className=" bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Redefining
                  </span>
                </span>
                <span className="block">
                  <span className=" bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent animate-gradient">
                    Solutions
                  </span>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl font-manrope">
                Leading the future of software development and digital
                transformation with human-centric technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-1000 delay-500 ${
                isLoaded
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-12"
              }`}
            >
              <Button
                size="lg"
                className="group bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-manrope"
              >
                Explore Our Solutions
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>

            {/* Additional info */}
            {/* <div
              className={`flex items-center space-x-8 pt-4 transition-all duration-1000 delay-700 ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}`}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-manrope">150+</div>
                <div className="text-sm text-gray-400 font-manrope">Projects Delivered</div>
              </div>
              <div className="w-px h-12 bg-gray-700/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary font-manrope">98%</div>
                <div className="text-sm text-gray-400 font-manrope">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-gray-700/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-manrope">5+</div>
                <div className="text-sm text-gray-400 font-manrope">Years Experience</div>
              </div>
            </div> */}
          </div>

          {/* Right side - 3D Robot - Completely seamless */}
          <div
            className={`order-first lg:order-last transition-all duration-1000 delay-200 ${
              isLoaded
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {/* Extended container that bleeds into background */}
            <div className="relative h-full -mx-8 lg:-mx-12 -my-8 lg:-my-12 overflow-visible">
              <SplineRobot />

              {/* Additional edge softening */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Soft vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark/20 via-transparent to-dark/10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark/15 via-transparent to-dark/10"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-dark/10 via-transparent to-dark/20"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-primary/20 rounded-full flex justify-center backdrop-blur-sm">
              <div className="w-1 h-3 bg-primary/60 rounded-full mt-2 animate-pulse"></div>
            </div>
            <span className="text-xs text-gray-500/60 font-manrope">
              Scroll to explore
            </span>
          </div>
        </div>
      </div>

      {/* Extended background bleeding effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Atmospheric particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary/20 rounded-full animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-0.5 h-0.5 bg-secondary/30 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-3/4 w-0.5 h-0.5 bg-primary/15 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-secondary/20 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </section>
  );
};

export default HeroSection;
