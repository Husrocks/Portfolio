"use client"

import { motion } from "framer-motion"
import { type ReactNode } from "react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.33, 1, 0.68, 1] as [number, number, number, number],
    },
  },
}

interface StaggerParentProps {
  children: ReactNode
  className?: string
  once?: boolean
}

/**
 * StaggerParent — wraps children in staggered fade-up animation.
 * Each direct child gets the itemVariants animation automatically.
 * Wrap individual children in <StaggerItem> to opt-in.
 */
export function StaggerParent({ children, className, once = true }: StaggerParentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface StaggerItemProps {
  children: ReactNode
  className?: string
}

export function StaggerItem({ children, className }: StaggerItemProps) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  )
}
