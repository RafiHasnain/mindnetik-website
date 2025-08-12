"use client";
import { useEffect, useRef, useState } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  animationUrl: string;
}

export function ServiceItem({
  title,
  description,
  animationUrl,
}: ServiceItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      {/* <div className="h-48 w-full flex justify-center items-center mb-4">
        {isVisible && (
        //   <lottie-player
        //     src={animationUrl}
        //     background="transparent"
        //     speed="1"
        //     style={{ width: "150px", height: "150px" }}
        //     loop
        //     autoplay
        //   ></lottie-player>
        //  <Lottie
        //                 loop
        //                 play
        //                 animationData={
        //                   item.title === "Our Mission" ? missionAnim : visionAnim
        //                 }
        //                 style={{ width: 400 }}
        //               />
        )}
      </div> */}
      <h3 className="text-xl font-semibold mb-2 text-center font-manrope">
        {title}
      </h3>
      <p className="text-gray-600 text-center font-manrope">{description}</p>
    </div>
  );
}
