"use client"

import { useState, useEffect } from "react"
import { Home, User, Folder, Code, FileText, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "home", icon: Home },
  { name: "About", href: "about", icon: User },
  { name: "Projects", href: "projects", icon: Folder },
  { name: "Skills", href: "skills", icon: Code },
  { name: "Resume", href: "resume", icon: FileText },
  { name: "Contact", href: "contact", icon: Mail },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/20 border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      {/* Progress Bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-primary"
        style={{ width: `${scrollProgress}%` }}
      />
      


      <div className="container mx-auto px-4 py-4 flex justify-center">
        <nav className="flex items-center space-x-8 border border-border/50 rounded-full px-8 py-2 bg-background/20 backdrop-blur-sm">
          {navItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                aria-label={item.name}
                className={`relative p-2 text-2xl transition-all duration-300 ${
                  activeSection === item.href
                    ? "text-high-contrast scale-110"
                    : "text-subtle-contrast hover:text-high-contrast"
                }`}
              >
                <Icon />
                {activeSection === item.href && (
                  <>
                    <div className="absolute inset-0 bg-white/10 rounded-full scale-110" />
                    <div className="absolute inset-0 bg-white/20 rounded-full" />
                  </>
                )}
              </button>
            )
          })}
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center ml-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden rounded-full text-high-contrast transition-all duration-300 hover:scale-110 min-w-[44px] min-h-[44px] bg-background/20 backdrop-blur-sm"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-background/20 border-t border-border/30 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                aria-label={item.name}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeSection === item.href
                    ? "bg-white/10 text-high-contrast"
                    : "text-subtle-contrast hover:text-high-contrast hover:bg-white/5"
                }`}
              >
                <item.icon className="w-6 h-6" />
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
