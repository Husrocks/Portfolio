"use client"

import { Stagger, staggerItem } from "@/components/ui/Stagger"
import { CountUp } from "@/components/ui/CountUp"
import { motion } from "framer-motion"

const STATS = [
  { target: 3, suffix: "+", label: "Years of Practice" },
  { target: 80, suffix: "+", label: "Projects Delivered" },
  { target: 40, suffix: "+", label: "Satisfied Clients" },
  { target: 12, suffix: "", label: "Open Source Projects" },
]

export default function Stats() {
  return (
    <section
      id="stats"
      className="section-light py-24 md:py-28"
      style={{ backgroundColor: "#F4F1EC" }}
    >
      <div className="content-grid">
        <Stagger staggerDelay={0.15}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat) => (
              <motion.div variants={staggerItem} key={stat.label} className="text-center md:text-left">
                <div
                  className="mb-2 leading-none"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(3.5rem, 7vw, 5rem)",
                    fontWeight: 700,
                    fontStyle: "italic",
                    color: "var(--accent)",
                    letterSpacing: "-0.02em",
                  }}
                >
                  <CountUp target={stat.target} suffix={stat.suffix} duration={2200} />
                </div>
                <p
                  className="text-[var(--fg-muted)]"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  )
}
