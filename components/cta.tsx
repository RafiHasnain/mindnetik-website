import React from "react";
import ContactUs from "./contact-us";

export const CTASection = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-primary/5 to-secondary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Ready to Transform?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's discuss how we can help accelerate your digital journey and
            unlock your business potential
          </p>
        </div>
        <ContactUs />
      </div>
    </section>
  );
};
