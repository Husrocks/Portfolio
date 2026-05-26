"use client"

import { useScroll, useTransform, motion } from "framer-motion"

/**
 * ProgressBar — 2px amber reading progress bar fixed at the top of viewport.
 * Uses Framer Motion useScroll + useTransform to animate scaleX from 0→1.
 * Used on writing/[slug] blog post pages.
 */
export function ProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left z-[9999]"
      style={{ scaleX }}
      aria-hidden="true"
    />
  )
}
