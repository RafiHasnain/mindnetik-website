"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

interface Testimonial {
  name: string
  company: string
  content: string
  rating: number
  avatar: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    company: "TechCorp Inc.",
    role: "CTO",
    content:
      "Mindnetik transformed our entire digital infrastructure. Their human-centric approach to technology is remarkable and has revolutionized how we operate.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SJ",
  },
  {
    name: "Michael Chen",
    company: "Innovation Labs",
    role: "CEO",
    content:
      "The AI solutions provided by Mindnetik have revolutionized our workflow efficiency by 300%. Their expertise in automation is unmatched.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MC",
  },
  {
    name: "Emily Rodriguez",
    company: "Global Dynamics",
    role: "VP of Technology",
    content:
      "Outstanding service and cutting-edge solutions. Mindnetik truly understands the future of technology and delivers beyond expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=ER",
  },
]

const EnhancedTestimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
      setIsAnimating(false)
    }, 300)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 overflow-hidden">
        <CardContent className="p-0">
          <div
            className={`transition-all duration-500 ${isAnimating ? "opacity-0 transform translate-x-4" : "opacity-100 transform translate-x-0"}`}
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Quote className="w-12 h-12 text-primary/30" />
              </div>

              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                  alt={testimonials[currentTestimonial].name}
                  className="w-16 h-16 rounded-full border-2 border-primary/30"
                />
                <div className="text-center">
                  <p className="font-bold text-lg text-white">{testimonials[currentTestimonial].name}</p>
                  <p className="text-primary font-medium">{testimonials[currentTestimonial].role}</p>
                  <p className="text-gray-400 text-sm">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center mt-8 space-x-4">
        <Button
          variant="outline"
          size="sm"
          onClick={prevTestimonial}
          disabled={isAnimating}
          className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-transparent backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <div className="flex space-x-2 items-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => !isAnimating && setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial ? "bg-primary w-8" : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={nextTestimonial}
          disabled={isAnimating}
          className="border-primary/30 text-primary hover:bg-primary hover:text-white bg-transparent backdrop-blur-sm"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default EnhancedTestimonial
