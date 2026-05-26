"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { useAnimationConfig } from "@/lib/animationConfig"

interface SlideInProps {
  children: ReactNode
  from?: "left" | "right"
  delay?: number
  className?: string
}

export function SlideIn({ children, from = "left", delay = 0, className = "" }: SlideInProps) {
  const config = useAnimationConfig()
  const xOffset = from === "left" ? -40 : 40

  return (
    <motion.div
      initial={{ opacity: 0, x: config.enable3D ? xOffset : 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
