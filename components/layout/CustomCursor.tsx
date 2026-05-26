"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useAnimationConfig } from "@/lib/animationConfig"

export function CustomCursor() {
  const { enableCursor } = useAnimationConfig()
  
  const dotX = useMotionValue(-100)
  const dotY = useMotionValue(-100)
  const ringX = useSpring(dotX, { stiffness: 180, damping: 18 })
  const ringY = useSpring(dotY, { stiffness: 180, damping: 18 })
  const ringScale = useMotionValue(1)
  const ringScaleSpring = useSpring(ringScale, { stiffness: 200, damping: 22 })

  useEffect(() => {
    if (!enableCursor) return
    
    const move = (e: MouseEvent) => {
      dotX.set(e.clientX)
      dotY.set(e.clientY)
    }
    
    const over = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      if (el.closest("a, button, [data-cursor='large']")) {
        ringScale.set(1.8)
      } else if (el.closest("[data-cursor='project']")) {
        ringScale.set(2.4)
      } else {
        ringScale.set(1)
      }
    }
    
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseover", over)
    
    return () => {
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseover", over)
    }
  }, [enableCursor, dotX, dotY, ringScale])

  if (!enableCursor) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[300] hidden md:block">
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-2.5 h-2.5 rounded-full bg-[var(--accent)]"
      />
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, scale: ringScaleSpring, translateX: "-50%", translateY: "-50%" }}
        className="absolute w-9 h-9 rounded-full border border-[var(--accent)] mix-blend-difference"
      />
    </div>
  )
}
