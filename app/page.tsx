import { useState, useEffect } from "react";
import { ArrowRight, Code, Zap, Brain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import FloatingServiceCard from "@/components/floating-service-card";
import EnhancedTestimonial from "@/components/enhanced-testimonial";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";

const HomePage = () => {
  // const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   setIsLoaded(true);
  // }, []);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FloatingServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-32 bg-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Client Success
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trusted by leading companies worldwide to deliver exceptional
              results
            </p>
          </div>

          <EnhancedTestimonial />
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
