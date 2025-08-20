import {
  Code,
  Zap,
  Brain,
  Users,
  Cloud,
  Shield,
  Smartphone,
  BarChart,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ServiceCategory } from "@/components/ServiceCategory";
import { ServicesGrid } from "@/components/ServiceGrid";
import { ServiceItem } from "@/components/ServiceItem";
import {
  collaborationModels,
  topServices,
  enterpriseSolutions,
} from "@/data/services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              digital transformation and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <ServiceCategory title="Collaboration Models">
        <ServicesGrid>
          {collaborationModels.map((model, index) => (
            <ServiceItem
              key={index}
              title={model.title}
              description={model.description}
              animationUrl={model.animationUrl}
            />
          ))}
        </ServicesGrid>
      </ServiceCategory>

      {/* Top Services */}
      <ServiceCategory title="Top Services">
        <ServicesGrid>
          {topServices.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              description={service.description}
              animationUrl={service.animationUrl}
            />
          ))}
        </ServicesGrid>
      </ServiceCategory>

      {/* Enterprise Focused Solutions */}
      <ServiceCategory title="Enterprise Focused Solutions">
        <ServicesGrid>
          {enterpriseSolutions.map((solution, index) => (
            <ServiceItem
              key={index}
              title={solution.title}
              description={solution.description}
              animationUrl={solution.animationUrl}
            />
          ))}
        </ServicesGrid>
      </ServiceCategory>

      {/* Call to Action */}
      {/* <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-manrope">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto font-manrope">
            Get in touch with our expert team to discuss how our solutions can
            help drive your business forward.
          </p>
          <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-colors font-manrope">
            Contact Us
          </button>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and
              long-term success
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your needs and challenges",
              },
              {
                step: "02",
                title: "Strategy",
                description: "Developing a comprehensive solution plan",
              },
              {
                step: "03",
                title: "Development",
                description: "Building and testing your solution",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launch and ongoing support",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div> */}
          <section className="">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="relative mt-12 lg:mt-20">
                <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                  <img
                    className="w-full"
                    src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                    alt=""
                  />
                </div>

                <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                  <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        1{" "}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                      Discovery
                    </h3>
                    <p className="mt-4 text-base text-gray-300">
                      UnderStanding your needs and challenges
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        2{" "}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                      Strategy
                    </h3>
                    <p className="mt-4 text-base text-gray-300">
                      Developing a comprehensive solution plan
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                      <span className="text-xl font-semibold text-gray-700">
                        {" "}
                        3{" "}
                      </span>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold leading-tight text-white md:mt-10">
                      Release & Launch
                    </h3>
                    <p className="mt-4 text-base text-gray-300">
                      Build and Launch your solution with confidence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary/50 to-secondary/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <Button
            size="lg"
            className="group bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-manrope"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
