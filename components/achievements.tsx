import { Trophy } from "lucide-react";
import React, { useState } from "react";

const Achievements = () => {
  return (
    <section className="relative py-12 overflow-hidden  bg-gradient-to-b from-gray-800 to-gray-900 sm:py-16 lg:py-20 xl:py-24">
      <div className="absolute transform -translate-x-1/2 translate-y-full bottom-2/3 left-1/2">
        <svg
          className="opacity-30 blur-3xl filter"
          style={{ filter: "blur(64px)" }}
          width="643"
          height="408"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M183.151 216.787C86.498 123.868-62.309 137.493 30.03 41.445c92.337-96.049 494.126-6.876 590.779 86.043 96.652 92.919-148.432 154.396-240.769 250.445-92.338 96.048-100.237-68.228-196.889-161.146Z"
            fill="url(#b)"
          />
          <defs>
            <linearGradient
              id="b"
              x1="663.766"
              y1="168.785"
              x2="303.65"
              y2="469.667"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                offset="0%"
                style={{ stopColor: "var(--color-cyan-500)" }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "var(--color-purple-500)" }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full opacity-50"
          src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png"
          alt=""
        />
      </div>

      <div className="relative px-8 mx-auto max-w-7xl sm:px-6 lg:px-20">
        {/* <div className="text-center">
          <h2 className="text-xl font-normal text-gray-500">Achievements</h2>
        </div> */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary font-manrope">
              Achievements
            </span>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-8 sm:mt-12"></div>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-x-20 md:gap-y-12">
          <img
            className="object-contain w-28 max-w-full sm:h-12 md:h-14 sm:w-56"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-waverio.svg"
            alt=""
          />
          <img
            className="object-contain w-28 max-w-full sm:h-12 md:h-14 sm:w-56"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-logoipsum.svg"
            alt=""
          />
          <img
            className="object-contain w-28 max-w-full sm:h-12 md:h-14 sm:w-56"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-alterbone.svg"
            alt=""
          />
          <img
            className="object-contain w-28 max-w-full sm:h-12 md:h-14 sm:w-56"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-tinygone.svg"
            alt=""
          />
          <img
            className="object-contain w-28 max-w-full sm:h-12 md:h-14 sm:w-56"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-preso.svg"
            alt=""
          />
          <img
            className="object-contain w-28 max-w-full sm:h-12 md:h-14 sm:w-56"
            src="https://landingfoliocom.imgix.net/store/collection/dusk/images/cloud-logos/1/logo-ridoria.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
export default Achievements;
