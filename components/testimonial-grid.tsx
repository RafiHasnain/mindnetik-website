"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    content:
      "Mindnetik transformed our entire digital infrastructure. Their human-centric approach to technology is remarkable and has revolutionized how we operate.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "Innovation Labs",
    content:
      "The AI solutions provided by Mindnetik have revolutionized our workflow efficiency by 300%. Their expertise in automation is unmatched.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    company: "Global Dynamics",
    content:
      "Outstanding service and cutting-edge solutions. Mindnetik truly understands the future of technology and delivers beyond expectations.",
    rating: 5,
  },
];

const TestimonialGrid = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="grid grid-cols-1 gap-8">
      {testimonials.map((testimonial, index) => (
        <Card
          key={index}
          className={`group relative testimonial-bubble bg-testimonialCardBg border-transparent transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-primary ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: `${index * 150}ms` }}
        >
          <CardContent className="p-8 relative">
            {/* Quote icon positioned relative to CardContent */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/50 group-hover:text-white transition-colors duration-300 -z-10" />
            <blockquote className="text-lg text-testimonialCardText leading-relaxed pl-16 group-hover:text-white transition-colors duration-300">
              "{testimonial.content}"
            </blockquote>
            <div className="mt-6 pl-16">
              <p className="font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                {testimonial.name}
              </p>
              <p className="text-primary text-sm group-hover:text-white transition-colors duration-300">
                {testimonial.company}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TestimonialGrid;
