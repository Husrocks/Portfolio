"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useAnimationConfig } from "@/lib/animationConfig"
import { ReactNode } from "react"

export function MagneticTag({ children, className = "" }: { children: ReactNode, className?: string }) {
  const { enable3D } = useAnimationConfig()
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 400, damping: 25 })
  const springY = useSpring(y, { stiffness: 400, damping: 25 })

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enable3D) return
    const rect = e.currentTarget.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * 0.25) // 25% of cursor distance
    y.set((e.clientY - cy) * 0.25)
  }
  
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
