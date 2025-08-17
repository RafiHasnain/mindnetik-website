import React, { useState, useRef, useEffect } from "react";
import { Check } from "lucide-react";

const ProductSection = () => {
  const products = [
    {
      id: 1,
      title: "MindERP",
      description:
        "MindERP is a fully modular enterprise management suite that simplifies and automates key business processes.",
      image: "/images/projects/ERP.png",
      backgroundColor: "bg-secondary/50",
      textColor: "text-gray-300",
    },
    {
      id: 2,
      title: "MindEDU",
      description:
        "MindEdu offers an end-to-end solution for educational institutions, enhancing efficiency and transparency.",
      image: "/images/projects/EDU.png",
      backgroundColor: "bg-primary/50",
      textColor: "text-gray-300",
    },
    {
      id: 3,
      title: "MindHEALTH",
      description:
        "MindHealth streamlines healthcare administration for better patient outcomes and operational efficiency.",
      image: "/images/projects/HEALTH.png",
      backgroundColor: "bg-gray-800",
      textColor: "text-gray-300",
    },
    {
      id: 4,
      title: "MindPAY OneCard",
      description:
        "MindPay OneCard is a smart, app-based platform for seamless payments and controlled access.",
      image: "/images/projects/PAY.png",
      backgroundColor: "bg-gray-300",
      textColor: "text-gray-900",
    },
    {
      id: 5,
      title: "MindGATE",
      description:
        "MindGate revolutionizes digital events through interactive, immersive experiences.",
      image: "/images/projects/GATE.png",
      backgroundColor: "bg-secondary/50",
      textColor: "text-gray-300",
    },
    {
      id: 6,
      title: "MindCLOUD",
      description:
        "MindCloud offers high-performance cloud hosting and continuous DevOps support for mission-critical applications.",
      image: "/images/projects/CLOUD.png",
      backgroundColor: "bg-primary/50",
      textColor: "text-gray-300",
    },
    {
      id: 7,
      title: "MindCHAIN",
      description:
        "MindChain brings blockchain technology to streamline operations and enhance security.",
      image: "/images/projects/CHAIN.png",
      backgroundColor: "bg-gray-800",
      textColor: "text-gray-300",
    },
    {
      id: 8,
      title: "MindACADEMY",
      description:
        "MindAcademy provides tailored training programs and workshops to upskill businesses and individuals.",
      image: "/images/projects/ACADEMY.png",
      backgroundColor: "bg-gray-300",
      textColor: "text-gray-300",
    },
  ];

  const features = [
    "Managed Services and Products",
    "Flexibility and Adaptability",
    "Competitive Advantage",
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [cardWidth, setCardWidth] = useState(320);
  const [gap, setGap] = useState(24);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update visible cards and dimensions based on screen size
  useEffect(() => {
    const updateLayout = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // Mobile: 1 card
        setVisibleCards(1);
        setCardWidth(280);
        setGap(16);
      } else if (width < 1024) {
        // Tablet: 2 cards
        setVisibleCards(2);
        setCardWidth(300);
        setGap(20);
      } else {
        // Desktop: 3 cards
        setVisibleCards(3);
        setCardWidth(320);
        setGap(24);
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Reset position when layout changes
  useEffect(() => {
    setCurrentTranslate(0);
  }, [visibleCards]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentTranslate);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    const newTranslate = scrollLeft + walk;

    // Calculate boundaries based on current layout
    const maxTranslate = 0;
    const minTranslate = -(products.length - visibleCards) * (cardWidth + gap);

    const constrainedTranslate = Math.max(
      minTranslate,
      Math.min(maxTranslate, newTranslate)
    );
    setCurrentTranslate(constrainedTranslate);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }

    // Snap to nearest card
    const totalCardWidth = cardWidth + gap;
    const snapIndex = Math.round(-currentTranslate / totalCardWidth);
    const maxIndex = Math.max(0, products.length - visibleCards);
    const constrainedIndex = Math.max(0, Math.min(maxIndex, snapIndex));
    const snapTranslate = -constrainedIndex * totalCardWidth;

    setCurrentTranslate(snapTranslate);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(currentTranslate);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 1.5;
    const newTranslate = scrollLeft + walk;

    const maxTranslate = 0;
    const minTranslate = -(products.length - visibleCards) * (cardWidth + gap);
    const constrainedTranslate = Math.max(
      minTranslate,
      Math.min(maxTranslate, newTranslate)
    );
    setCurrentTranslate(constrainedTranslate);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);

    const totalCardWidth = cardWidth + gap;
    const snapIndex = Math.round(-currentTranslate / totalCardWidth);
    const maxIndex = Math.max(0, products.length - visibleCards);
    const constrainedIndex = Math.max(0, Math.min(maxIndex, snapIndex));
    const snapTranslate = -constrainedIndex * totalCardWidth;

    setCurrentTranslate(snapTranslate);
  };

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8 max-w-xl ml-4 sm:ml-10 lg:ml-28">
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-4">
                PROJECTS
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                Showcase of our{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                  recognized work
                </span>
              </h1>
            </div>

            <p className="text-base lg:text-lg text-gray-400 leading-relaxed max-w-2xl">
              Our collaborative approach ensures that we truly understand our
              clients unique requirements and challenges.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-gray-400 font-medium text-sm lg:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Draggable Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div
                ref={carouselRef}
                className="flex cursor-grab select-none transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(${currentTranslate}px)`,
                  width: `${products.length * (cardWidth + gap)}px`,
                  gap: `${gap}px`,
                }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex-shrink-0 h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    style={{
                      userSelect: "none",
                      width: `${cardWidth}px`,
                    }}
                  >
                    <div
                      className={`${product.backgroundColor} ${product.textColor} h-full p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden`}
                    >
                      {/* Content */}
                      <div className="relative z-10">
                        <h3 className="text-xl lg:text-2xl font-bold leading-tight mb-2">
                          {product.title}
                        </h3>
                      </div>

                      {/* Image */}
                      <div className="relative z-10 flex justify-center items-end">
                        <div className="relative">
                          <img
                            src={product.image}
                            alt={`${product.title}`}
                            className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-cover rounded-xl"
                            draggable={false}
                          />
                        </div>
                      </div>

                      {/* Background Pattern */}
                      <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
                        <div className="w-full h-full bg-gradient-to-br from-white to-transparent rounded-full blur-3xl"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center space-x-2 mt-6">
              {Array.from({
                length: Math.max(1, products.length - visibleCards + 1),
              }).map((_, index) => {
                const totalCardWidth = cardWidth + gap;
                const currentIndex = Math.round(
                  -currentTranslate / totalCardWidth
                );
                return (
                  <button
                    key={index}
                    onClick={() => setCurrentTranslate(-index * totalCardWidth)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      currentIndex === index
                        ? "bg-blue-600 w-6 lg:w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>

            {/* Drag Hint */}
            {/* <p className="text-center text-xs lg:text-sm text-gray-500 mt-4">
              Drag to explore more projects
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
