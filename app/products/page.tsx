import {
  Zap,
  Brain,
  Shield,
  BarChart,
  Cloud,
  Users,
  Circle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ProductsPage = () => {
  const products = [
    {
      title: "MindERP",
      description:
        "MindERP is a fully modular enterprise management suite that simplifies and automates key business processes.",
      image: "/images/projects/ERP.png",
      features: [
        "CRM, POS, Sales, and Procurement Management",
        "Finance,Accounting, and Automated Invoicing",
        "Inventory, Supply Chain, and BOM Manufacturing",
        "Human Resource, Payroll, and Appraisals",
        "Project and Task Management",
        "Real-Time Analytics and Reporting Tools",
      ],
    },
    {
      title: "MindEDU",
      description:
        "MindEdu offers an end-to-end solution for educational institutions, enhancing efficiency and transparency.",
      image: "/images/projects/EDU.png",
      features: [
        "Admissions, Curricculum, Planning, and LMS Integration",
        "Blockchain-Secured Certification and Digital Records",
        "Hotel trasport, Attendance and Alumni Management",
        "Finance, HR and Recourse Allocation",
        "Multi-Uer Portals, Student, Teacher and Parent Access",
      ],
    },
    {
      title: "MindHEALTH",
      description:
        "MindHealth streamlines healthcare administration for better patient outcomes and operational efficiency.",
      image: "/images/projects/HEALTH.png",
      features: [
        "OPD/IPD Management, EMR and Billing Systems",
        "Pharmacy Lab, Radiology, and Diagnostics Centers",
        "Appointment Scheduling and Telemedicine, and Video Consultations",
        "Insurance, Processing, Blood Bank, and Patient CEM",
        "HR, Finance, and Digital Patient Portals",
      ],
    },
    {
      title: "MindPAY OneCard",
      description:
        "indPay OneCard is a smart, app-based platform for seamless payments and controlled access.",
      image: "/images/projects/PAY.png",
      features: [
        "QR, Wallet, and Card-based Payments",
        "Access Control, Time Tracking and Attendance",
        "Integrated Billing for Tuition, Cafeteria, Gym, Parking, and more",
        "Mobile Recharge and Subscription-Based Services",
        "Seamless ERP Integration for Campus and Corporate Environments",
      ],
    },
    {
      title: "MindGATE",
      description:
        "MindGate revolutionizes digital events through interactive, immersive experiences.",
      image: "/images/projects/GATE.png",
      features: [
        "3D Interactive Avatars and Customizable Venues",
        "Real-Time Polls, Digital Swag Bags, Sponsored Booths",
        "Live Streaming, VR Integration, Real-Time Analytics",
        "Multi-Language and Cross-Platform Capability",
      ],
    },
    {
      title: "MindCLOUD",
      description:
        "MindCloud offers high-performance cloud hosting and continuous DevOps support for mission-critical applications.",
      image: "/images/projects/CLOUD.png",
      features: [
        "Scalable Web& Mobile App Hosting Solutions",
        "Cloud Migration and Hybrid Deployment Strategies",
        "Continuous Monitoring, Disaster Recovery, and Auto Backups",
        "Full ISO 27001 Security Compliance and Data Protection",
      ],
    },
    {
      title: "MindCHAIN",
      description:
        "MindChain brings blockchain technology to streamline operations and enhance security.",
      image: "/images/projects/CHAIN.png",
      features: [
        "Degree and Document Verification with Blockchain Security",
        "Digital Identity Management and Access Control",
        "Immutable Compliance and Transparent Audit Trails",
        "Smart Contacts and Blockchain-Enabled Supply Chains (Future Integration)",
      ],
    },
    {
      title: "MindACADEMY",
      description:
        "MindAcademy provides tailored training programs and workshops to upskill businesses and individuals.",
      image: "/images/projects/ACADEMY.png",
      features: [
        "Monthly Webinars and AI, ERP, Cloud, and Emerging Tech",
        "Corporate Training on Custom Software and Digital Solutions",
        "Global Certification Programs and Technology Leaders",
        "Custom Learning Tracks for Client Teams and Partners",
      ],
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500";
      case "Beta":
        return "bg-yellow-500";
      case "Coming Soon":
        return "bg-blue-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Innovative SaaS solutions and digital products designed to empower
              businesses with cutting-edge technology and human-centric design.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20">
        {products.map((product, index) => (
          <div
            key={product.title}
            className={`flex flex-col md:flex-row md:gap-20 items-center justify-between max-w-7xl mx-auto px-6 py-20 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="md:w-1/2 mb-10 md:mb-0 relative group overflow-hidden rounded-2xl">
              <div className="absolute bottom-5 left-10 w-96 h-96 bg-gradient-radial from-secondary/20 to-dark rounded-full blur-lg z-0"></div>
              <Image
                src={product.image}
                alt={product.title}
                width={600}
                height={600}
                className="rounded-2xl shadow-2xl transition-transform duration-500 z-10 relative"
              />
            </div>
            <div className="md:w-1/2 md:pr-10">
              <h2 className="text-4xl font-bold mb-4">{product.title}</h2>
              {/* <p className="text-xl text-gray-300 mb-6">{product.tagline}</p> */}
              <p className="mb-6 text-lg">{product.description}</p>
              <div className="">
                <ol className="text-left  ml-0 text-gray-400">
                  {product.features.map((feature, i) => (
                    <li key={i} className="mb-3">
                      <div className="flex gap-2 items-start">
                        <Circle className="text-secondary min-w-[20px] min-h-[20px] w-5 h-5" />
                        {feature}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
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

      {/* Product Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Product Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our products span multiple categories, each designed to address
              specific business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Analytics",
                count: "2 Products",
                description: "Intelligent solutions for data-driven decisions",
              },
              {
                title: "Automation",
                count: "1 Product",
                description: "Streamline processes and increase efficiency",
              },
              {
                title: "Security",
                count: "1 Product",
                description: "Protect your digital assets and data",
              },
              {
                title: "Cloud",
                count: "1 Product",
                description: "Scalable cloud infrastructure solutions",
              },
              {
                title: "Collaboration",
                count: "1 Product",
                description: "Tools for modern team collaboration",
              },
              {
                title: "Custom Solutions",
                count: "On Demand",
                description: "Tailored products for specific needs",
              },
            ].map((category, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {category.title}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {category.count}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We can build tailored products specifically for your business
            requirements
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
          >
            Discuss Custom Development
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
