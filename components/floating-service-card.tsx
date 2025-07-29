"use client";

import { Card, CardContent } from "@/components/ui/card";
import type { ReactNode } from "react";

interface FloatingServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

const FloatingServiceCard = ({
  icon,
  title,
  description,
  index,
}: FloatingServiceCardProps) => {
  return (
    <div
      className="group"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full">
        <CardContent className="p-8 text-center h-full flex flex-col">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/20">
            <div className="text-primary group-hover:text-white transition-colors duration-300">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed flex-grow">
            {description}
          </p>
          <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FloatingServiceCard;
