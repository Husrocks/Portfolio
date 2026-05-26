"use client"

import { motion } from "framer-motion"
import { useAnimationConfig } from "@/lib/animationConfig"
import { ElementType } from "react"

interface RevealTextProps {
  text: string
  className?: string
  delay?: number
  stagger?: number
  tag?: ElementType
  animateOnLoad?: boolean
}

export function RevealText({ 
  text, 
  className, 
  delay = 0, 
  stagger = 0.05, 
  tag: Tag = "h2",
  animateOnLoad = false
}: RevealTextProps) {
  const config = useAnimationConfig()
  const words = text.split(" ")

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    hidden: { 
      y: config.enable3D ? "110%" : 0, 
      opacity: config.enable3D ? 0 : 1 
    },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1]
      }
    },
  }

  return (
    <Tag className={className}>
      <motion.span
        initial="hidden"
        animate={animateOnLoad ? "visible" : undefined}
        whileInView={!animateOnLoad ? "visible" : undefined}
        viewport={!animateOnLoad ? { once: true, margin: "-10%" } : undefined}
        variants={containerVariants}
        style={{ display: "inline-block" }}
      >
        {words.map((word, i) => (
          <span 
            key={i} 
            style={{ 
              display: "inline-block", 
              overflow: "hidden", 
              verticalAlign: "bottom", 
              marginRight: "0.25em" 
            }}
          >
            <motion.span
              variants={childVariants}
              style={{ display: "inline-block" }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
