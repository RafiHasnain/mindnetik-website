import { Star } from "lucide-react"
import TestimonialGrid from "./testimonial-grid"

export const TestimonialSection = () => {
    return(
        <section className="py-32 bg-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Title and Summary */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight font-manrope">
                <span className="text-white">Introducing <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient">innovative</span> </span>
                <br />
                <span className="text-white">ideas for business</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-md leading-relaxed font-manrope">
                Suspendisse quis tincidunt nisi. Praesent faucibus venenatis
                erat nunc posuere in.
              </p>
              <div className="flex items-center space-x-3 pt-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-white">4.95</span>
                <span className="text-gray-400">Loved by 256 companies</span>
              </div>
            </div>
    
            {/* Right Side - Testimonial Cards */}
            <TestimonialGrid />
          </div>
        </div>
      </section>
    )
   
}