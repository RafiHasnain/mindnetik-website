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
      <div className="absolute inset-0 w-full h-full overflow-visible">
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
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark via-dark/80 to-transparent"></div>

        {/* Right edge blend */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark via-dark/60 to-transparent"></div>

        {/* Top edge blend */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-dark via-dark/70 to-transparent"></div>

        {/* Bottom edge blend */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark via-dark/50 to-transparent"></div>

        {/* Corner blends for extra smoothness */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-dark via-dark/60 to-transparent"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-dark via-dark/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 bg-gradient-to-tr from-dark via-dark/70 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-28 h-28 bg-gradient-to-tl from-dark via-dark/40 to-transparent"></div>
      </div>

      {/* Atmospheric blending with brand colors */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle color bleeding from the background */}
        <div className="absolute top-1/4 left-0 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-secondary/4 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-primary/2 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-secondary/3 rounded-full blur-2xl"></div>
      </div>

      {/* Additional atmospheric effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary/3 pointer-events-none"></div>
    </div>
  );
};

export default SplineRobot;
