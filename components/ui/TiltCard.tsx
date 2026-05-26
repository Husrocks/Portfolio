"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useAnimationConfig } from "@/lib/animationConfig"

export function TiltCard({ children }: { children: React.ReactNode }) {
  const { enable3D } = useAnimationConfig()
  const cardRef = useRef<HTMLDivElement>(null)
  
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  
  // Convert mouse position into rotations
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })
  
  // Convert mouse position into glare translation
  const glareX = useTransform(rawX, [-0.5, 0.5], ["0%", "100%"])
  const glareY = useTransform(rawY, [-0.5, 0.5], ["0%", "100%"])

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enable3D || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  
  const handleLeave = () => {
    rawX.set(0)
    rawY.set(0)
  }

  // Fallback for reduced motion or mobile devices
  if (!enable3D) {
    return (
      <div className="relative group" data-cursor="project">
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000, transformStyle: "preserve-3d" }}
      data-cursor="project"
      className="relative group"
    >
      {children}
      {/* Glare overlay — a moving light reflection */}
      <motion.div
        className="absolute inset-0 rounded-[inherit] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.12) 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  )
}
