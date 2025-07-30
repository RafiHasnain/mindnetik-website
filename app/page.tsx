"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code, Zap, Brain, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import EnhancedTestimonial from "@/components/enhanced-testimonial";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import TechStackSection from "@/components/tech-stack-section";
import TestimonialGrid from "@/components/testimonial-grid";

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Software Development",
      description:
        "Tailored solutions built with cutting-edge technologies and modern development practices for scalable business growth.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intelligent Automation",
      description:
        "Streamline operations with AI-powered automation systems that reduce costs and increase efficiency across your organization.",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to unlock insights, predict trends, and make data-driven decisions.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Digital Transformation",
      description:
        "Strategic consulting and implementation services to guide your organization through successful digital evolution.",
    },
  ];

  const stats = [
    { number: 150, suffix: "+", label: "Projects Delivered" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 50, suffix: "+", label: "Global Clients" },
    { number: 5, suffix: " Years", label: "Industry Experience" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* About Us Section */}
      <AboutSection />

      {/* Enhanced Services Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Core Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your
              digital transformation journey
            </p>
          </div>

          {/* Services Grid - 2x2 Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Service 1 - Custom Software Development */}
            <div
              className={`group transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 rounded-3xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 flex-shrink-0">
                    <Code className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      Custom Software Development
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Tailored solutions built with cutting-edge technologies
                      and modern development practices for scalable business
                      growth.
                    </p>
                    <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 - Intelligent Automation */}
            <div
              className={`group transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.2s" }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 rounded-3xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 flex-shrink-0">
                    <Zap className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      Intelligent Automation
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Streamline operations with AI-powered automation systems
                      that reduce costs and increase efficiency across your
                      organization.
                    </p>
                    <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 - AI & Machine Learning */}
            <div
              className={`group transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 rounded-3xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 flex-shrink-0">
                    <Brain className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      AI & Machine Learning
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Harness the power of artificial intelligence to unlock
                      insights, predict trends, and make data-driven decisions.
                    </p>
                    <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 - Digital Transformation */}
            <div
              className={`group transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 rounded-3xl p-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 flex-shrink-0">
                    <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      Digital Transformation
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      Strategic consulting and implementation services to guide
                      your organization through successful digital evolution.
                    </p>
                    <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* International Footprint Section */}
      <section className="py-32 bg-purple-900/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight font-manrope">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Our International
                </span>
                <br />
                <span className="text-white">Footprint</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                  <h3 className="text-6xl font-bold text-white">🇧🇩</h3>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      Bangladesh
                    </h3>
                    <p className="text-gray-400 text-sm">HEADQUARTER</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <h3 className="text-6xl font-bold text-white">🇦🇪</h3>
                  <div>
                    <h3 className="text-2xl font-bold text-white">UAE</h3>
                    <p className="text-gray-400 text-sm">MIDDLE EAST HUB</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <h3 className="text-6xl font-bold text-white">🇲🇾</h3>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Malaysia</h3>
                    <p className="text-gray-400 text-sm">
                      ASIA-PACIFIC OPERATIONS
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <h3 className="text-6xl font-bold text-white">🇺🇸</h3>
                  <div>
                    <h3 className="text-2xl font-bold text-white">USA</h3>
                    <p className="text-gray-400 text-sm">
                      North America Office
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Static World Map Image */}
            <div className="relative w-full h-96 lg:h-[500px] flex items-center justify-center">
              {/* Subtle primary color hue behind image */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-gradient-to-br from-primary/25 via-primary/15 to-transparent rounded-full blur-3xl"></div>
              </div>

              {/* Main Map Image */}
              <div className="relative z-10">
                <img
                  src="/images/world map.png"
                  alt="Mindnetik International Footprint Map"
                  className="w-full h-auto object-contain filter drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStackSection />

      {/* Redesigned Testimonials Section */}
      <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title and Summary */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-manrope">
                <span className="text-white">Introducing innovative</span>
                <br />
                <span className="text-white">ideas for business</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-md leading-relaxed font-manrope">
                Suspendisse quis tincidunt nisi. Praesent faucibus venenatis
                erat nunc posuere in.
              </p>
              <div className="flex items-center space-x-3 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-white">4.95</span>
                <span className="text-gray-400">Loved by 256 companies</span>
              </div>
            </div>

            {/* Right Side - Testimonial Cards */}
            <TestimonialGrid />
          </div>
        </div>
      </section>

      {/* Enhanced Contact CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Ready to Transform?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can help accelerate your digital journey and
              unlock your business potential
            </p>
          </div>

          <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                      Full Name
                    </label>
                    <Input
                      className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                    Project Details
                  </label>
                  <Textarea
                    className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[140px] transition-all duration-300"
                    placeholder="Tell us about your project, goals, and how we can help transform your business..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 px-12 py-4 text-lg"
                  >
                    Start Your Transformation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
