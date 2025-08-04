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

const ServicesPage = () => {
  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions built with modern technologies and best practices.",
      features: [
        "Full-stack development",
        "API integration",
        "Database design",
        "Quality assurance",
      ],
      color: "from-blue-500 to-purple-600",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Process Automation",
      description:
        "Streamline your operations with intelligent automation and workflow optimization.",
      features: [
        "Workflow automation",
        "RPA implementation",
        "Integration services",
        "Performance monitoring",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI & Machine Learning",
      description:
        "Harness the power of artificial intelligence to drive innovation and efficiency.",
      features: [
        "Predictive analytics",
        "Natural language processing",
        "Computer vision",
        "ML model deployment",
      ],
      color: "from-green-500 to-blue-600",
    },
    {
      icon: <Cloud className="w-12 h-12" />,
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "Cloud migration",
        "Infrastructure as code",
        "DevOps implementation",
        "Cost optimization",
      ],
      color: "from-yellow-500 to-red-600",
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Digital Transformation Consulting",
      description:
        "Strategic guidance to navigate your digital transformation journey successfully.",
      features: [
        "Strategy development",
        "Technology assessment",
        "Change management",
        "Training programs",
      ],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Cybersecurity Solutions",
      description:
        "Comprehensive security solutions to protect your digital assets and data.",
      features: [
        "Security audits",
        "Threat detection",
        "Compliance management",
        "Incident response",
      ],
      color: "from-red-500 to-orange-600",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android.",
      features: [
        "iOS development",
        "Android development",
        "Cross-platform solutions",
        "App store optimization",
      ],
      color: "from-teal-500 to-green-600",
    },
    {
      icon: <BarChart className="w-12 h-12" />,
      title: "Data Analytics & BI",
      description:
        "Transform your data into actionable insights with advanced analytics solutions.",
      features: [
        "Data visualization",
        "Business intelligence",
        "Real-time analytics",
        "Predictive modeling",
      ],
      color: "from-orange-500 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              digital transformation and drive sustainable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-primary transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="text-sm text-gray-400 flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                  >
                    Learn More
                  </Button> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">
                    {process.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-gray-300">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help transform your business
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
