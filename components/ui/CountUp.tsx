"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useCountUp } from "@/lib/countUp"
import { useAnimationConfig } from "@/lib/animationConfig"

interface CountUpProps {
  target: number
  duration?: number
  suffix?: string
  className?: string
}

export function CountUp({ target, duration = 1200, suffix = "", className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px" })
  const value = useCountUp(target, duration, isInView)
  const isComplete = value === target

  return (
    <motion.span
      ref={ref}
      className={className}
      animate={isComplete ? { 
        textShadow: [
          "0 0 0px rgba(212,149,42,0)", 
          "0 0 30px rgba(212,149,42,0.6)", 
          "0 0 0px rgba(212,149,42,0)"
        ] 
      } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {value}
      {isComplete && suffix && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {suffix}
        </motion.span>
      )}
    </motion.span>
  )
}
