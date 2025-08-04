"use client";

import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import type { Application } from "@splinetool/runtime";

const SplineRobot = () => {
  const splineRef = useRef<Application>();

  const onLoad = (splineApp: Application) => {
    splineRef.current = splineApp;
  };

  return (
    <div className="relative w-full h-full min-h-[400px] lg:min-h-[600px] overflow-visible">
      {/* Spline Scene - Completely seamless */}
      <div className="absolute inset-0 w-full h-full overflow-visible z-10">
        <Spline
          scene="https://prod.spline.design/wMJD7sHNHTA8wTSR/scene.splinecode"
          onLoad={onLoad}
          style={{
            width: "100%",
            height: "100%",
            minHeight: "400px",
            background: "transparent",
          }}
        />
      </div>

      {/* Edge blending gradients - Multiple layers for seamless integration */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left edge blend */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-transparent"></div>

        {/* Right edge blend */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-transparent"></div>

        {/* Top edge blend */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-transparent"></div>

        {/* Bottom edge blend */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-transparent"></div>

        {/* Corner blends for extra smoothness */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-transparent"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-transparent"></div>
        <div className="absolute -bottom-16 right-0 w-64 h-64 bg-gradient-radial from-primary to-dark rounded-full blur-lg z-20"></div>
        <div className="absolute bottom-40 left-0 w-64 h-64 bg-gradient-radial from-secondary to-dark rounded-full blur-lg z-0"></div>
      </div>

      {/* Atmospheric blending with brand colors */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle color bleeding from the background */}
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-secondary/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/2 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-secondary/3 rounded-full blur-2xl"></div>
      </div>

      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
    </div>
  );
};

export default SplineRobot;
