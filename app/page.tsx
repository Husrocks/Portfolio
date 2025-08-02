"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Projects from "@/components/sections/projects"
import Skills from "@/components/sections/skills"
import Resume from "@/components/sections/resume"
import Contact from "@/components/sections/contact"
import Footer from "@/components/footer"
import LoadingScreen from "@/components/ui/loading-screen"
import SplashCursor from "@/components/ui/splash-cursor"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("Page loaded, setting loading to false")
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <SplashCursor />
      <Navigation />
      <main className="relative">
        {/* Background gradient for seamless flow */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/95"></div>
        
        <section id="home" className="relative z-10">
          <Hero />
        </section>
        <section id="about" className="relative z-10">
          <About />
        </section>
        <section id="projects" className="relative z-10">
          <Projects />
        </section>
        <section id="skills" className="relative z-10">
          <Skills />
        </section>
        <section id="resume" className="relative z-10">
          <Resume />
        </section>
        <section id="contact" className="relative z-10">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}
