import { useEffect, useState } from "react";
import { ArrowRight, Code, Zap, Brain, Users, Star } from "lucide-react";

export const ServiceSection = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        setIsLoaded(true);
    }, []);

return (
<section className="py-32 bg-gray-900 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
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
  </section>)
}

