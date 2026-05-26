"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"
import { useAnimationConfig } from "@/lib/animationConfig"

interface FadeUpProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeUp({ children, delay = 0, className = "" }: FadeUpProps) {
  const config = useAnimationConfig()

  return (
    <motion.div
      initial={config.initial}
      whileInView={config.animate}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
