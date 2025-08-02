"use client"

import { ArrowDown, Github, Linkedin, Mail, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isInView, setIsInView] = useState(false)
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/Husrocks", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hussnain-bashir/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:zurqulnan@gmail.com", label: "Email" },
  ]

  // Animated Counter Component
  const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const display = useTransform(rounded, (latest) => `${latest}${suffix}`)

    useEffect(() => {
      if (isInView) {
        const controls = animate(count, value, { duration })
        return controls.stop
      }
    }, [isInView, value, count, duration])

    return <motion.span className="text-lg font-bold text-high-contrast">{display}</motion.span>
  }

  return (
    <div className="min-h-screen flex items-center justify-center relative transition-colors duration-300 pt-16 md:pt-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Content */}
          <div className="space-y-8 self-center">
            <div className="space-y-4">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-high-contrast tracking-tight">
                Hussnain Bashir
              </h1>
              <h2 className="text-lg md:text-xl text-medium-contrast font-semibold mt-2">
                Full Stack Developer
              </h2>
              <p className="text-base md:text-lg text-subtle-contrast max-w-md leading-relaxed font-medium mt-2">
                I craft exceptional digital experiences with modern technologies. Passionate about creating elegant, efficient, and user-friendly applications that solve real-world problems.
              </p>
                          </div>
              
              {/* Sleek New Button */}
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.98 }}
                className="mt-6"
              >
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-500 rounded-2xl px-10 py-4 text-lg font-semibold group"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></div>
                </Button>
              </motion.div>

              <motion.div  
              className="flex items-center space-x-8 pt-6 mt-8"
              onViewportEnter={() => setIsInView(true)}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <AnimatedCounter value={50} suffix="+" />
                <div className="text-xs text-subtle-contrast">Projects</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <AnimatedCounter value={2} suffix="+" />
                <div className="text-xs text-subtle-contrast">Years Exp</div>
              </div>
              <div className="w-px h-8 bg-border"></div>
              <div className="text-center">
                <AnimatedCounter value={30} suffix="+" />
                <div className="text-xs text-subtle-contrast">Happy Clients</div>
              </div>
            </motion.div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-xl bg-muted-contrast flex items-center justify-center text-subtle-contrast hover:text-high-contrast hover:bg-hover-bg hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 border border-transparent hover:border-primary/30"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <motion.div 
              className="relative w-72 h-80 lg:w-[22rem] lg:h-96"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
                <Image
                  src="/images/hero-photo.jpg"
                  alt="Hussnain Bashir - Full Stack Developer"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1200px) 384px, 384px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <motion.button
            onClick={() => scrollToSection("about")}
            whileHover={{ 
              scale: 1.1,
              y: -2,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.95 }}
            className="text-muted-contrast hover:text-high-contrast transition-colors duration-300"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </div>
  )
}
