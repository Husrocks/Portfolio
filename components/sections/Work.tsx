"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { SlideIn } from "@/components/ui/SlideIn"
import { Stagger, staggerItem } from "@/components/ui/Stagger"
import { TiltCard } from "@/components/ui/TiltCard"
import { MotionImage } from "@/components/ui/MotionImage"
import { projects } from "@/data/projects"

export default function Work() {
  const [p1, p2, p3, p4, p5, p6] = projects
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })
  
  // Slower parallax for the watermark
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"])

  return (
    <section
      id="work"
      ref={sectionRef}
      className="dark-section py-24 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: "#111110", color: "#E8E4DC" }}
    >
      <div className="content-grid relative z-10">
        {/* Section Label */}
        <SlideIn from="left">
          <p
            className="section-label mb-12"
            style={{ color: "var(--fg-muted)" }}
          >
            [ 02 — Selected Work ]
          </p>
        </SlideIn>

        {/* Grid Container */}
        <Stagger staggerDelay={0.1}>
          {/* Row 1: 60% + 40% */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
            <motion.div variants={staggerItem} className="md:col-span-3">
              <ProjectCard project={p1} priority />
            </motion.div>
            <motion.div variants={staggerItem} className="md:col-span-2">
              <ProjectCard project={p2} />
            </motion.div>
          </div>

          {/* Row 2: 3 equal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div variants={staggerItem}>
              <ProjectCard project={p3} />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ProjectCard project={p4} />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ProjectCard project={p5} />
            </motion.div>
          </div>

          {/* Row 3: Full width featured */}
          <motion.div variants={staggerItem} className="mb-16">
            <TiltCard>
              <Link href={`/work/${p6.slug}`} className="block group focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded-[4px] border border-transparent hover:border-[var(--accent)] transition-colors duration-200">
                <div className="relative aspect-[21/9] overflow-hidden rounded-[inherit] bg-[var(--surface)]">
                  <MotionImage
                    layoutId={`project-image-${p6.slug}`}
                    src={p6.coverImage}
                    alt={p6.title}
                    fill
                    className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.05]"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[rgba(17,17,16,0.72)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center px-6 translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-100">
                      <span
                        className="text-[#E8E4DC] text-4xl md:text-5xl italic font-bold block mb-4"
                        style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
                      >
                        {p6.title}
                      </span>
                      <span 
                        className="text-[var(--accent)] text-[11px] uppercase tracking-[0.1em] font-semibold"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        View Case Study →
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between group-hover:opacity-0 transition-opacity duration-300">
                  <div>
                    <h3
                      className="text-[var(--fg)] font-bold text-xl mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {p6.title}
                    </h3>
                    <p
                      className="text-[11px] tracking-[0.08em] uppercase text-[var(--fg-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {p6.client}
                    </p>
                  </div>
                  <div className="flex gap-1.5 mt-3 sm:mt-0">
                    {p6.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-[11px] tracking-[0.06em] px-2.5 py-1 border border-[var(--border)] text-[var(--fg-muted)] uppercase rounded-[2px]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </TiltCard>
          </motion.div>
        </Stagger>

        {/* See All Link */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href="/work"
            className="inline-block text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-300"
            style={{ fontFamily: "var(--font-body)" }}
            data-cursor="large"
          >
            See All Projects <span className="inline-block transition-transform duration-300 hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Parallax Watermark */}
      <motion.div
        style={{
          y: watermarkY,
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 20vw, 200px)",
          fontWeight: 700,
          color: "rgba(212,149,42,0.04)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          pointerEvents: "none",
        }}
        className="absolute top-[20%] left-[-5%] select-none z-0"
        aria-hidden="true"
      >
        02
      </motion.div>
    </section>
  )
}
