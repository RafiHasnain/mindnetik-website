import { Globe, Target, Eye, Users, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const AboutPage = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Mission",
      description:
        "To empower businesses through innovative technology solutions that enhance human potential and drive sustainable growth.",
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Vision",
      description:
        "To be the global leader in human-centric technology, bridging the gap between innovation and practical application.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Values",
      description:
        "Innovation, integrity, collaboration, and a relentless focus on delivering value to our clients and communities.",
    },
  ]

  const locations = [
    {
      city: "Dubai",
      country: "UAE",
      description: "Our Middle East headquarters, serving the rapidly growing tech ecosystem in the region.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      city: "Silicon Valley",
      country: "USA",
      description: "Our innovation hub, connecting us to the world's leading technology companies and talent.",
      icon: <MapPin className="w-6 h-6" />,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Mindnetik
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              We are a forward-thinking software and digital transformation company dedicated to creating technology
              solutions that put humans at the center of innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-700 hover:border-primary transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-primary mb-6 flex justify-center">{value.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
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
                Founded with the belief that technology should amplify human capabilities rather than replace them,
                Mindnetik emerged from a vision to create software solutions that truly understand and serve human
                needs.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Our journey began with a simple observation: while technology was advancing rapidly, many solutions were
                becoming increasingly disconnected from the people they were meant to serve. We set out to change that.
              </p>
              <p className="text-lg text-gray-300">
                Today, we combine cutting-edge technologies like AI, automation, and cloud computing with deep human
                insights to create solutions that are not just powerful, but also intuitive, accessible, and meaningful.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <Globe className="w-32 h-32 text-primary animate-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Global Presence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              With offices spanning continents, we bring together diverse perspectives and expertise to deliver
              world-class solutions.
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
                      <h3 className="text-2xl font-bold">{location.city}</h3>
                      <p className="text-primary">{location.country}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{location.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Human-First Technology */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Human-First Technology
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Our approach to technology development is fundamentally different. We start with understanding human
              needs, behaviors, and aspirations, then build technology that serves those needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">User-Centric Design</h3>
                <p className="text-gray-300">
                  Every solution we create is designed with the end user in mind, ensuring intuitive and meaningful
                  interactions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Ethical AI</h3>
                <p className="text-gray-300">
                  We develop AI systems that are transparent, fair, and designed to augment human capabilities
                  responsibly.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Inclusive Innovation</h3>
                <p className="text-gray-300">
                  Our solutions are built to be accessible and beneficial to diverse communities and use cases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
