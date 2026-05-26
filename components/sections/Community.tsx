"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { communityRoles } from "@/data/community"
import { MotionImage } from "@/components/ui/MotionImage"

export default function Community() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  
  // Subtle parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      id="community"
      className="section-light py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#F4F1EC" }}
      ref={ref}
    >
      <motion.div className="content-grid" style={{ y }}>
        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-label mb-12"
          style={{ color: "var(--fg-muted)" }}
        >
          [ 05 — Community & Leadership ]
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 max-w-[800px]"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.25rem)",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            color: "var(--fg)",
            lineHeight: 1.1,
          }}
        >
          Bridging the gap between code and community.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {communityRoles.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* 3D Tilt Hover Wrapper */}
              <Link href={`/community/${item.slug}`} className="block h-full group perspective-1000">
                <motion.div
                  whileHover={{ 
                    rotateX: 2, 
                    rotateY: -2,
                    scale: 1.02,
                    boxShadow: "0 24px 48px -12px rgba(0,0,0,0.1)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full p-8 md:p-10 rounded-[4px] relative overflow-hidden bg-[#111110]"
                  style={{
                    border: "1px solid rgba(255,255,255,0.05)",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Subtle inner gradient hover effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                       style={{ background: "radial-gradient(circle at top right, var(--accent) 0%, transparent 70%)" }} 
                  />

                  {/* Image Background for Card (Matching Projects) */}
                  <div className="absolute inset-0 z-0">
                    <MotionImage
                      layoutId={`community-image-${item.slug}`}
                      src={item.coverImage}
                      alt={item.title}
                      fill
                      className="object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111110] via-[#111110]/80 to-transparent" />
                  </div>

                  <div className="relative z-10 h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
                    <h3
                      className="text-[#E8E4DC] font-semibold mb-2 group-hover:text-[var(--accent)] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-display)", fontSize: "2rem", letterSpacing: "-0.01em" }}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="text-[#E8E4DC]/60 mb-6"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                    >
                      {item.organization}
                    </p>
                    <p
                      className="text-[#E8E4DC]/80 leading-relaxed mb-10"
                      style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.6 }}
                    >
                      {item.description}
                    </p>
                    
                    {/* Animated Arrow */}
                    <motion.div
                      className="flex items-center gap-3 text-[var(--accent)] font-semibold"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}
                    >
                      Read Details
                      <motion.span
                        initial={{ x: 0 }}
                        whileInView={{ x: 0 }}
                        variants={{
                          hover: { x: 8 }
                        }}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      >
                        →
                      </motion.span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
