"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { stackCategories, getStackByCategory } from "@/data/stack"
import { SlideIn } from "@/components/ui/SlideIn"
import { MagneticTag } from "@/components/ui/MagneticTag"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
}

export default function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  return (
    <section
      id="tech-stack"
      className="dark-section py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#111110" }}
    >
      <div className="content-grid" ref={ref}>
        {/* Section Label */}
        <SlideIn from="left">
          <p className="section-label mb-16" style={{ color: "var(--fg-muted)" }}>
            [ 04 — Tech Stack ]
          </p>
        </SlideIn>

        <div className="space-y-16">
          {stackCategories.map((category, catIndex) => {
            const items = getStackByCategory(category)
            if (items.length === 0) return null

            return (
              <motion.div
                key={category}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 + 0.2 }}
              >
                <span
                  className="text-[12px] tracking-[0.1em] uppercase text-[var(--fg-muted)] pt-2"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {category}
                </span>

                <motion.div
                  className="flex flex-wrap gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                >
                  {items.map((tag) => (
                    <motion.div key={tag.name} variants={itemVariants}>
                      <MagneticTag>
                        <motion.div
                          whileHover={{
                            scale: 1.05,
                            backgroundColor: "rgba(212,149,42,0.1)",
                            color: "#D4952A",
                            borderColor: "rgba(212,149,42,0.5)",
                            boxShadow: "0 8px 24px -8px rgba(212,149,42,0.3)",
                          }}
                          className="px-4 py-2 border rounded-[4px] cursor-default transition-colors duration-300 relative z-10"
                          style={{
                            backgroundColor: "var(--surface)",
                            borderColor: "var(--border)",
                            color: "var(--fg)",
                            fontFamily: "var(--font-mono)",
                            fontSize: "13px",
                          }}
                        >
                          {tag.name}
                        </motion.div>
                      </MagneticTag>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
