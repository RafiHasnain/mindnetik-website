"use client";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";

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
  const [animationData, setAnimationData] = useState<any>(null);

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

  useEffect(() => {
    if (isVisible && animationUrl) {
      fetch(animationUrl)
        .then((res) => res.json())
        .then((data) => setAnimationData(data))
        .catch(() => setAnimationData(null));
    }
  }, [isVisible, animationUrl]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center transition-all duration-500 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="h-48 w-full flex justify-center items-center mb-4">
        {/* {isVisible && animationData && ( */}
        {/* <Lottie
          animationData={animationData}
          // background="transparent"
          // speed={1}
          style={{ width: "150px", height: "150px" }}
          loop
          play
        /> */}
        <DotLottieReact src={animationUrl} autoplay loop />
        {/* )} */}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-center font-manrope">
        {title}
      </h3>
      <p className="text-gray-600 text-center font-manrope">{description}</p>
    </div>
  );
}
