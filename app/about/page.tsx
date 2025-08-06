"use client";
import {
  MessageSquare,
  Clock,
  Heart,
  BadgeCheck,
  Users,
  Star,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { InternationalFootprint } from "@/components/international-footprint";
import Faq from "@/components/faq";
import SplineRobot from "@/components/spline-robot";
import Image from "next/image";
import Lottie from "react-lottie-player";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import missionAnim from "@/public/videos/mission.json";
import visionAnim from "@/public/videos//vision.json";

const AboutPage = () => {
  const values = [
    {
      icon: <MessageSquare className="w-8 h-8 text-[#1A73E8]" />,
      title: "Transparency",
      description:
        "We're honest about what we know and what we don't. If we encounter an issue, we'll keep you informed and work together to find a solution.",
    },
    {
      icon: <Clock className="w-8 h-8 text-[#1A73E8]" />,
      title: "Work hard",
      description:
        "We're dedicated to putting in the effort needed to get the job done right. Hard work is at the core of everything we do.",
    },
    {
      icon: <Heart className="w-8 h-8 text-[#1A73E8]" />,
      title: "Customer first",
      description:
        "We put our customers at the center of everything we do. Our goal is to create solutions that help your business succeed and grow.",
    },
    {
      icon: <BadgeCheck className="w-8 h-8 text-[#1A73E8]" />,
      title: "Quality",
      description:
        "We are committed to providing the best. Our work meets the highest standards, ensuring you receive reliable and outstanding results every time.",
    },
    {
      icon: <Users className="w-8 h-8 text-[#1A73E8]" />,
      title: "Team work",
      description:
        "We believe in the power of working together. By collaborating closely with you, we achieve the best outcomes and create amazing things.",
    },
    {
      icon: <Star className="w-8 h-8 text-[#1A73E8]" />,
      title: "Customer satisfaction",
      description:
        "Your happiness is our top priority. We go the extra mile to ensure you're satisfied with our solutions and services.",
    },
  ];

  // const locations = [
  //   {
  //     city: "Dhaka",
  //     country: "Bangladesh",
  //     description:
  //       "Our main office, serving the rapidly growing tech ecosystem in the region.",
  //     icon: <MapPin className="w-6 h-6" />,
  //   },
  //   {
  //     city: "Kuala Lumpur",
  //     country: "Malaysia",
  //     description:
  //       "Our asia-pacific operations hub, connecting sus to the world's leading technology companies and talent.",
  //     icon: <MapPin className="w-6 h-6" />,
  //   },
  //   {
  //     city: "Dubai",
  //     country: "UAE",
  //     description:
  //       "Our Middle East headquarters, serving the rapidly growing tech ecosystem in the region.",
  //     icon: <MapPin className="w-6 h-6" />,
  //   },
  //   {
  //     city: "Silicon Valley",
  //     country: "USA",
  //     description:
  //       "Our innovation hub, connecting us to the world's leading technology companies and talent.",
  //     icon: <MapPin className="w-6 h-6" />,
  //   },
  // ];

  const missionVision = [
    {
      title: "Our Mission",
      description:
        "At Mindnetik, we’re here to help businesses of all sizes harness powerful software and smart digital tools. Whether it's automating operations, building platforms, or unlocking data — we craft solutions that are made for real people and real impact. We're not just tech builders — we’re collaborators. And our mission is simple: to make technology work for you.",
      image: "/images/mission.png", // optional thumbnail image
      animation:
        "https://lottie.host/afbc3520-7e42-455a-8dfb-6230c8582eb8/BzJYrsYFtG.lottie",
    },
    {
      title: "Our Vision",
      description:
        "We may be lean, but we think big. Our vision is to bridge the gap between bold ideas and enterprise-grade innovation — from startups in Dhaka to partners in Dubai, Malaysia, and beyond. We believe in co-creation, adaptability, and building tech that truly fits. Together, we’re redefining how businesses grow in an ever-changing digital world.",
      image: "/images/vision.png", // optional thumbnail image
      animation:
        "https://lottie.host/9ebfa545-2cd9-4b05-845b-5d35a53e42e9/cQ5r2JsUte.lottie",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              About Mindnetik
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              We are a forward-thinking software and digital transformation
              company dedicated to creating technology solutions that put humans
              at the center of innovation.
            </p>
          </div>
        </div>
      </section>
      {/* Company Story */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded with the belief that technology should amplify human
                capabilities rather than replace them, Mindnetik emerged from a
                vision to create software solutions that truly understand and
                serve human needs.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our journey began with a simple observation: while technology
                was advancing rapidly, many solutions were becoming increasingly
                disconnected from the people they were meant to serve. We set
                out to change that.
              </p>
              <p className="text-lg text-gray-300">
                Today, we combine cutting-edge technologies like AI, automation,
                and cloud computing with deep human insights to create solutions
                that are not just powerful, but also intuitive, accessible, and
                meaningful.
              </p>
            </div>
            <div className="relative">
              {/* <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Globe className="w-32 h-32 text-primary animate-float" />
              </div> */}
              <SplineRobot />
            </div>
          </div>
        </div>
      </section>

      {/*Mission and Vision*/}

      <section id="products" className="py-20">
        {missionVision.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col md:flex-row md:gap-20 items-center justify-between max-w-7xl mx-auto px-6 py-20 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 mb-10 md:mb-0 relative group overflow-hidden rounded-2xl">
              {/* <Image
                src={content.image}
                alt={content.title}
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-110"
              /> */}
              {/* <DotLottieReact
                // src="https://lottie.host/afbc3520-7e42-455a-8dfb-6230c8582eb8/BzJYrsYFtG.lottie"
                src={item.animation}
                loop
                autoplay
              /> */}
              <Lottie
                loop
                play
                animationData={
                  item.title === "Our Mission" ? missionAnim : visionAnim
                }
                style={{ width: 400 }}
              />
            </div>
            <div className="md:w-1/2 md:pr-10">
              <h2 className="text-4xl font-bold mb-4">{item.title}</h2>
              {/* <p className="text-xl text-gray-300 mb-6">{product.tagline}</p> */}
              <p className="mb-6 text-lg  text-gray-300">{item.description}</p>
              {/* <div className="">
                <ol className="text-left  ml-6 text-gray-400">
                  {content.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <div className="flex gap-2 items-start">
                        <Circle className="text-secondary min-w-[20px] min-h-[20px] w-5 h-5" />
                        {feature}
                      </div>
                    </li>
                  ))}
                </ol>
              </div> */}
              {/* <Button
                text={"Contact us"}
                textColor={"white"}
                hoverTextColor={"primary"}
                bgColor={"primary"}
                hoverBgColor={"white"}
                href={"/contact-us"}
              /> */}
            </div>
          </div>
        ))}
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group rounded-3xl transition-all duration-700 bg-transparent border-none "
              >
                <CardContent className=" text-center bg-gray-900/80 backdrop-blur-sm border border-gray-700 hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 rounded-3xl p-8 min-h-[350px]">
                  <div className="text-primary mb-6 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <InternationalFootprint />

      {/* Global Presence */}
      {/* <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Presence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices spanning continents, we bring together diverse
              perspectives and expertise to deliver world-class solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-primary mr-3">{location.icon}</div>
                    <div>
                      <h3 className="text-2xl text-white font-bold">
                        {location.city}
                      </h3>
                      <p className="text-primary">{location.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {location.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Human-First Technology */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Human-First Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Our approach to technology development is fundamentally different.
              We start with understanding human needs, behaviors, and
              aspirations, then build technology that serves those needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  User-Centric Design
                </h3>
                <p className="text-gray-300">
                  Every solution we create is designed with the end user in
                  mind, ensuring intuitive and meaningful interactions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Ethical AI
                </h3>
                <p className="text-gray-300">
                  We develop AI systems that are transparent, fair, and designed
                  to augment human capabilities responsibly.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  Inclusive Innovation
                </h3>
                <p className="text-gray-300">
                  Our solutions are built to be accessible and beneficial to
                  diverse communities and use cases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Faq />
    </div>
  );
};

export default AboutPage;
