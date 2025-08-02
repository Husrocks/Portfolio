"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [showScrollTop, setShowScrollTop] = useState(false)

  const socialLinks = [
    { icon: Github, href: "https://github.com/Husrocks", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/hussnain-bashir/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:zurqulnan@gmail.com", label: "Email" },
  ]

  const quickLinks = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Resume", href: "resume" },
    { name: "Contact", href: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      // Show scroll-to-top button only when scrolled down more than 300px
      setShowScrollTop(scrollTop > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="bg-black text-white border-t border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#0ebab1] mb-4">Hussnain Bashir</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative web solutions that make a difference. Let's
              build something amazing together.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 5,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center text-gray-300 hover:text-[#0ebab1] hover:bg-[#0ebab1]/20 hover:shadow-lg hover:shadow-[#0ebab1]/20 transition-all duration-300 border border-transparent hover:border-[#0ebab1]/30"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#0ebab1] mb-4">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  whileHover={{ 
                    x: 5,
                    color: "#0ebab1",
                    transition: { duration: 0.2 }
                  }}
                  className="block text-gray-300 hover:text-[#0ebab1] transition-colors duration-300 text-left w-full"
                >
                  {link.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#0ebab1] mb-4">Contact Info</h4>
            <div className="space-y-3">
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Mail className="w-4 h-4 text-[#0ebab1]" />
                <a
                  href="mailto:zurqulnan@gmail.com"
                  className="text-gray-300 hover:text-[#0ebab1] transition-colors duration-300 text-sm"
                >
                  zurqulnan@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Github className="w-4 h-4 text-[#0ebab1]" />
                <a
                  href="https://github.com/Husrocks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#0ebab1] transition-colors duration-300 text-sm"
                >
                  github.com/Husrocks
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Linkedin className="w-4 h-4 text-[#0ebab1]" />
                <a
                  href="https://www.linkedin.com/in/hussnain-bashir/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#0ebab1] transition-colors duration-300 text-sm"
                >
                  linkedin.com/in/hussnain-bashir
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Hussnain Bashir. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Scroll to Top Button - Only show when scrolled down */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 w-12 h-12 bg-[#0ebab1] text-black rounded-full flex items-center justify-center shadow-lg hover:bg-[#0ebab1]/80 transition-all duration-300 z-50"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
