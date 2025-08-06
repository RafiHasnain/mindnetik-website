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
import Banner from "@/components/banner";
import { ServiceSection } from "@/components/service-section";
import { InternationalFootprint } from "@/components/international-footprint";
import { TestimonialSection } from "@/components/testimonial-section";
import { CTASection } from "@/components/cta";
import { IndustryExpertise } from "@/components/industry-experties";
import ProductSection from "@/components/product-section";
import Faq from "@/components/faq";

const HomePage = () => {
  return (
    <main className="min-h-screen font-manrope">
      {/* <HeroSection /> */}
      <Banner
        title={""}
        description={` Leading the future of software development and digital
                transformation with human-centric technology.`}
        image={""}
        video={"/videos/hero-video.webm"}
        isMain
      />

      <AboutSection />

      <ServiceSection />

      <ProductSection />

      <InternationalFootprint />

      <IndustryExpertise />

      <TechStackSection />

      <TestimonialSection />

      <Faq />

      <CTASection />
    </main>
  );
};

export default HomePage;
