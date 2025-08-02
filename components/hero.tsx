"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-xl md:text-2xl font-medium text-gray-300">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white">John Doe</h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-300">Full Stack Developer</h3>
          <p className="text-lg text-gray-400 max-w-lg">
            I build exceptional digital experiences with modern technologies. Focused on creating elegant, efficient,
            and user-friendly applications.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="John Doe - Developer"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900/20 to-transparent dark:from-gray-900/40"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToAbout}
      >
        <ArrowDown className="w-6 h-6 text-gray-600 dark:text-gray-400 animate-bounce" />
      </motion.div>
    </div>
  )
}
