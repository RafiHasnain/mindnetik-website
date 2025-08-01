/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Headset, Play } from "lucide-react";
import Link from "next/link";

const Banner = ({ image, video, title, description, isMain = false }: any) => {
  const handleDownloadProfile = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/Mindnetik Landscape Profile.pdf"; // Path to your PDF in the public folder
    link.download = "Mindnetik Landscape Profile.pdf"; // Name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div
      className={`app-banner ${
        isMain ? "h-[100vh]" : "h-[50vh]"
      } text-white relative overflow-hidden`}
      style={{
        background: !image ? "" : `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {video && (
       <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={video} type="video/webm" />
          Your browser does not support the video tag.
      </video>

      )}
      <div className="absolute inset-0 bg-black/40" />
      <div
        className={`relative w-full h-full flex items-center justify-center`}
      >
        <div className="w-[90%] md:w-[80%] lg:w-[50%] text-center  ">
          {title ? (
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[75px] leading-tight md:leading-[1.2] font-bold pb-2"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white font-manrope">
              <span className="block gap-5">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Empowering
                </span>{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                  Innovation,
                </span>
              </span>
              <span className="block">
                <span className=" bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Redefining
                </span>{" "}
                <span className=" bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  Solutions
                </span>
              </span>
            </h1>
          )}

          <p className="text-md sm:text-lg md:text-xl text-[#EBE8FF] mt-4">
            {description}
          </p>
          {isMain && (
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center ">
              <Button
                size="lg"
                onClick={handleDownloadProfile}
                className="group bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-manrope"
              >
                See Company Profile
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-2 border-secondary/50 text-secondary hover:bg-secondary hover:text-white bg-transparent backdrop-blur-sm px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/20 font-manrope"
              >
                <Headset className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                Schedule a Call
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
