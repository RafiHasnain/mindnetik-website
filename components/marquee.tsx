"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Marquee = ({ title, logos }: { title: string; logos: string[] }) => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const handleResize = () => setKey((prev) => prev + 1);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Animation duration based on logo count
  const animationDuration = `${logos.length * 5}s`;

  return (
    <section className=" bg-gray-800 sm:py-16 lg:py-20">
      {/* Inject marquee animation CSS */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee ${animationDuration} linear infinite;
          }
        `}
      </style>
      <p className="text-lg text-gray-500 text-center pb-10">{title}</p>
      <div className="relative overflow-hidden">
        <div
          className="flex min-w-max animate-marquee"
          key={key}
          style={{
            animationDuration,
          }}
        >
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 w-[200px] mx-8">
              <Image
                src={logo}
                alt=""
                width={200}
                height={36}
                className="object-contain w-auto h-9"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
