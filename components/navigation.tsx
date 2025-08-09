"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsOpen(!isOpen);

    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    setTimeout(() => setIsAnimating(false), 800);
  };

  const closeMenu = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setIsOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setIsAnimating(false), 800);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { name: "LINKEDIN", href: "#" },
    { name: "TWITTER", href: "#" },
    { name: "INSTAGRAM", href: "#" },
    { name: "YOUTUBE", href: "#" },
  ];

  return (
    <>
      {/* Main Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-dark/95 backdrop-blur-md shadow-2xl shadow-primary/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-full mx-2 sm:mx-10 px-4 py-3 sm:py-5 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group ">
              <Image
                src="/images/logo-white.svg"
                alt="Mindnetik Logo"
                width={100}
                height={80}
                className="transition-transform duration-300 group-hover:scale-105 w-24 sm:w-32"
              />
            </Link>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMenu}
              disabled={isAnimating}
              className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-end group focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-5 flex items-center justify-end">
                {/* Top line */}
                <span
                  className={`absolute h-0.5 bg-white transition-all duration-700 ease-in-out ${
                    isOpen
                      ? "w-7 rotate-45 top-1/2 right-0.5 transform -translate-y-0.5"
                      : "w-10 rotate-0 top-1 right-0"
                  }`}
                />
                {/* Bottom line */}
                <span
                  className={`absolute h-0.5 bg-white transition-all duration-700 ease-in-out ${
                    isOpen
                      ? "w-7 -rotate-45 top-1/2 right-0.5 transform -translate-y-0.5"
                      : "w-7 rotate-0 bottom-1 right-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-800 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 bg-dark transition-all duration-800 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Menu Content */}
        <div className="relative w-full h-full flex flex-col sm:flex-row md:flex-row lg:flex-row sm:mt-16 md:mt-0 lg:mt-16 pt-20 sm:pt-0 overflow-y-auto">
          {/* Left Side - Navigation */}
          <div className="flex-1 flex items-center  justify-center">
            <div className="space-y-6 min-w-52 sm:space-y-8">
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className={`transform transition-all duration-700 ease-out ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-12 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <Link
                    href={item.href}
                    onClick={closeMenu}
                    className={`group flex items-center text-2xl sm:text-4xl lg:text-6xl font-bold font-manrope transition-all duration-300 ${
                      pathname === item.href
                        ? "text-primary"
                        : "text-white hover:text-primary"
                    }`}
                  >
                    <span className="group-hover:translate-x-4 transition-transform duration-300">
                      {item.label}
                    </span>
                    <ChevronRight
                      className={`ml-2 sm:ml-4 w-6 h-6 sm:w-10 sm:h-10 lg:w-12 lg:h-12 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300 ${
                        pathname === item.href ? "text-primary" : "text-white"
                      }`}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Divider - hide on mobile */}
          <div
            className={`hidden sm:block w-px bg-gray-700/50 transform transition-all duration-700 ${
              isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
            style={{ transitionDelay: "400ms" }}
          />

          {/* Right Side - Contact Information */}
          <div className="flex-1 flex items-center justify-center">
            <div
              className={`space-y-6 sm:space-y-8 transform transition-all duration-700 ease-out ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-12 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div>
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-manrope">
                  Contact
                </h3>
                <div className="space-y-2 sm:space-y-4 text-gray-300">
                  <div>
                    <p className="text-base sm:text-lg font-medium">
                      Dubai +(971) 4 XXX XXXX
                    </p>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-medium">
                      hello@mindnetik.com
                    </p>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg">Business Bay, Dubai</p>
                    <p className="text-base sm:text-lg">United Arab Emirates</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-2 sm:space-y-3">
                {socialLinks.map((social, index) => (
                  <div
                    key={social.name}
                    className={`transform transition-all duration-500 ${
                      isOpen
                        ? "translate-x-0 opacity-100"
                        : "translate-x-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <a
                      href={social.href}
                      className="block text-xs sm:text-sm font-medium text-gray-400 hover:text-primary transition-colors duration-300 tracking-wider font-manrope"
                    >
                      {social.name}
                    </a>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div
                className={`pt-6 sm:pt-8 transform transition-all duration-700 ${
                  isOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <Button
                  onClick={closeMenu}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold px-6 py-3 sm:px-8 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary/25 font-manrope text-base sm:text-lg"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
