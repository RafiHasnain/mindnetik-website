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
import Marquee from "@/components/marquee";
import Achievements from "@/components/achievements";

const logos = [
  "https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-liva.png",
  "https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-ztos.png",
  "https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-muzica.png",
  "https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-kyan.png",
  "https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-utosia.png",
  "https://cdn.rareblocks.xyz/collection/bakerstreet/images/logo-cloud/2/logo-aven.png",
];

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

      {/* <Marquee title="Our Partners" logos={logos} /> */}

      <AboutSection />

      <ServiceSection />

      <ProductSection />

      <InternationalFootprint />

      <IndustryExpertise />

      <TechStackSection />

      <TestimonialSection />

      {/* <Marquee title="Our Achievements" logos={logos} /> */}
      {/* <Achievements /> */}

      <Faq />

      <CTASection />
    </main>
  );
};

export default HomePage;
