"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } 
  }
}

interface StaggerProps {
  children: ReactNode
  staggerDelay?: number
  className?: string
}

export function Stagger({ children, staggerDelay = 0.08, className = "" }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ visible: { transition: { staggerChildren: staggerDelay } } }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
