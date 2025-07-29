import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mindnetik - Empowering Innovation, Redefining Solutions",
  description: "Leading the future of software development and digital transformation with human-centric technology.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased bg-dark text-white`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
