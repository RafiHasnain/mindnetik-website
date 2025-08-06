"use client";
import { MessageCircleQuestionMark, Sparkles } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Faq = () => {
  const [faq, setFaq] = useState([
    {
      question: "What does Mindnetik specialize in?",
      answer:
        "Mindnetik specializes in building tailored software, automation systems, and data-driven digital solutions that help businesses scale with agility and intelligence.",
      open: false,
    },
    {
      question: "Which industries does Mindnetik serve?",
      answer:
        "We serve a diverse range of industries including EdTech, Healthcare, Manufacturing, FinTech, NGOs, Government, Real Estate, Retail, and RMG.",
      open: false,
    },
    {
      question: "What makes Mindnetik different from other tech companies?",
      answer:
        "Our human-first approach, enterprise-grade quality, agile delivery, and global presence set us apart in crafting solutions that balance innovation with usability.",
      open: false,
    },
    {
      question: "Do you offer product-based solutions or just services?",
      answer:
        "We offer both — custom service-based solutions as well as our own growing suite of intelligent digital products built to solve real-world business problems.",
      open: false,
    },
    {
      question: "Where is Mindnetik based?",
      answer:
        "We operate globally with strategic bases in Downtown Dubai and Silicon Valley, and serve clients across Bangladesh, UAE, Malaysia, and the USA.",
      open: false,
    },
    {
      question: "Can Mindnetik help with data and analytics projects?",
      answer:
        "Absolutely. Our Big Data capabilities include real-time analytics, visualization with tools like Power BI and Tableau, and predictive modeling with platforms like AWS and Hadoop.",
      open: false,
    },
  ]);

  const toggleFaq = (index: number) => {
    setFaq(
      faq.map((item, i) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  return (
    <section className="py-10 bg-gradient-to-b from-gray-800 to-gray-900 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center">
            {/* <div className=" border-2 border-gray-300 flex gap-2 w-fit px-4 py-2 rounded-full bg-white/10 text-gray-500 text-sm mb-6 ">
              <img src="/images/logo/about-logo.png" alt="logo" /> FAQ
            </div> */}
            <div className="inline-flex items-center space-x-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8">
              <MessageCircleQuestionMark className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary font-manrope">
                FAQ
              </span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Got questions? <br />
            <span className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              We got answer
            </span>
          </h2>
          {/* <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Your Questions, Answered Simply.
          </p> */}
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item, index) => (
            <div
              key={index}
              className="bg-testimonialCardBg cursor-pointer rounded-3xl border-transparent transition-all duration-300 ease-out hover:scale-[1.01]"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-bold text-gray-900 group-hover:text-white transition-colors duration-300">
                  {item.question}
                </span>
                <svg
                  className={`w-6 h-6 text-gray-400 ${
                    item.open ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden px-4 sm:px-6 ${
                  item.open
                    ? "max-h-40 opacity-100 py-5 sm:pb-6"
                    : "max-h-0 opacity-0 py-0 sm:pb-0"
                }`}
                style={{ transitionProperty: "max-height, opacity, padding" }}
              >
                <p
                  className="text-testimonialCardText"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                ></p>
              </div>
            </div>
          ))}
        </div>

        {/* <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you are looking for?{" "}
          <Link
            href="/contact-us"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Contact our support
          </Link>
        </p> */}
      </div>
    </section>
  );
};

export default Faq;
