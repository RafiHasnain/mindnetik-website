import { Zap, Brain, Shield, BarChart, Cloud, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const ProductsPage = () => {
  const products = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "MindAI Analytics",
      description: "Advanced AI-powered analytics platform that transforms raw data into actionable business insights.",
      status: "Available",
      category: "AI & Analytics",
      features: ["Real-time data processing", "Predictive modeling", "Custom dashboards", "API integration"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AutoFlow Pro",
      description:
        "Intelligent workflow automation suite that streamlines business processes and increases efficiency.",
      status: "Available",
      category: "Automation",
      features: ["Visual workflow builder", "Multi-system integration", "Performance monitoring", "Custom triggers"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SecureNet Guardian",
      description: "Comprehensive cybersecurity platform with AI-driven threat detection and response capabilities.",
      status: "Coming Soon",
      category: "Security",
      features: ["Real-time threat detection", "Automated response", "Compliance reporting", "Risk assessment"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "CloudSync Enterprise",
      description: "Multi-cloud management platform for seamless cloud infrastructure orchestration.",
      status: "Beta",
      category: "Cloud",
      features: ["Multi-cloud support", "Cost optimization", "Auto-scaling", "Disaster recovery"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "DataViz Studio",
      description: "Interactive data visualization tool that creates stunning charts and reports from any data source.",
      status: "Available",
      category: "Analytics",
      features: ["Drag-and-drop interface", "Real-time updates", "Custom themes", "Export options"],
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "TeamSync Collaboration",
      description: "Next-generation collaboration platform designed for remote and hybrid teams.",
      status: "Coming Soon",
      category: "Collaboration",
      features: ["Video conferencing", "Project management", "File sharing", "Team analytics"],
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500"
      case "Beta":
        return "bg-yellow-500"
      case "Coming Soon":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Innovative SaaS solutions and digital products designed to empower businesses with cutting-edge technology
              and human-centric design.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-primary transition-all duration-300 group overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={`${getStatusColor(product.status)} text-white`}>{product.status}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="text-primary mr-3">{product.icon}</div>
                    <div>
                      <Badge variant="outline" className="text-xs border-primary text-primary">
                        {product.category}
                      </Badge>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{product.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex space-x-2">
                    {product.status === "Available" ? (
                      <>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          Try Now
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                        >
                          Demo
                        </Button>
                      </>
                    ) : product.status === "Beta" ? (
                      <>
                        <Button
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                        >
                          Join Beta
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                        >
                          Learn More
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                      >
                        Get Notified
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Product Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our products span multiple categories, each designed to address specific business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI & Analytics",
                count: "2 Products",
                description: "Intelligent solutions for data-driven decisions",
              },
              { title: "Automation", count: "1 Product", description: "Streamline processes and increase efficiency" },
              { title: "Security", count: "1 Product", description: "Protect your digital assets and data" },
              { title: "Cloud", count: "1 Product", description: "Scalable cloud infrastructure solutions" },
              { title: "Collaboration", count: "1 Product", description: "Tools for modern team collaboration" },
              { title: "Custom Solutions", count: "On Demand", description: "Tailored products for specific needs" },
            ].map((category, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-primary font-semibold mb-3">{category.count}</p>
                  <p className="text-gray-300 text-sm">{category.description}</p>
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
            We can build tailored products specifically for your business requirements
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Discuss Custom Development
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage
