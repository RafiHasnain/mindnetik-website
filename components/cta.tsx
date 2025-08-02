import { Input } from "@/components/ui/input";
import { Card, CardContent } from "./ui/card"
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTASection = () => {
return(
    <section className="py-32 bg-gradient-to-br from-gray-900 via-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">
                Ready to Transform?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's discuss how we can help accelerate your digital journey and
              unlock your business potential
            </p>
          </div>

          <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                      Full Name
                    </label>
                    <Input
                      className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 h-12"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-sm font-medium mb-3 text-gray-300 group-focus-within:text-primary transition-colors duration-300">
                    Project Details
                  </label>
                  <Textarea
                    className="bg-gray-800/50 border-gray-600 focus:border-primary focus:ring-2 focus:ring-primary/20 min-h-[140px] transition-all duration-300"
                    placeholder="Tell us about your project, goals, and how we can help transform your business..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-secondary text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/25 font-manrope"
                  >
                    Start Your Transformation
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
)
}