import { useEffect, useState } from "react";

import {
  GraduationCap,
  Stethoscope,
  Factory,
  Landmark,
  CreditCard,
  Building,
} from "lucide-react";
export const IndustryExpertise = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const industryExpertise = [
    {
      icon: (
        <GraduationCap className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
      ),
      name: "Education & EdTech",
      description:
        "Transforming learning through smart, scalable digital education platforms.",
    },
    {
      icon: (
        <Stethoscope className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
      ),
      name: "Healthcare & Pharmaceuticals",
      description:
        "Empowering patient care and operations with secure health-tech solutions.",
    },
    {
      icon: (
        <Factory className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
      ),
      name: "Trading & Manufacturing",
      description:
        "Optimizing supply chains and operations through automation and analytics.",
    },
    {
      icon: (
        <Landmark className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
      ),
      name: "NGOs & Government Organizations",
      description:
        "Delivering impact-driven digital tools for public service and social good.",
    },
    {
      icon: (
        <CreditCard className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
      ),
      name: "BFSI & FinTech",
      description:
        "Driving financial innovation with secure, user-centric digital solutions.",
    },
    {
      icon: (
        <Building className="w-8 h-8 text-primary group-hover:text-white transition-colors duration-300" />
      ),
      name: "Real Estate, Retail & RMG",
      description:
        "Boosting growth and visibility with custom tech for sales, logistics, and engagement.",
    },
  ];

  return (
    <section className="py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Industry Experties
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Built by industry experts to solve real-world challenges with
            precision, innovation, and impact
          </p>
        </div>

        {/* Services Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {industryExpertise.map((service, index) => (
            <div
              className={`group transition-all duration-700 ${
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 rounded-3xl p-8 min-h-[350px]">
                <div className="flex flex-col items-center justify-between gap-10 ">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20 flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex flex-col text-center">
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
