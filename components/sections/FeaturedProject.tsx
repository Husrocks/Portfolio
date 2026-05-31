"use client"

import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { projects } from "@/data/projects"

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured) ?? projects[0]
  const containerRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  // Image continuous zoom-out effect
  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1])
  // Text block rises faster than scroll (parallax)
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section
      id="featured-project"
      ref={containerRef}
      className="dark-section relative overflow-hidden"
      style={{ backgroundColor: "#111110", minHeight: "560px" }}
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <motion.img
          src="/Portfolio/images/projects/ai-campus.jpg"
          alt=""
          style={{ scale, objectFit: "cover", width: "100%", height: "100%" }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(17,17,16,0.95) 40%, rgba(17,17,16,0.3) 100%)",
          }}
        />
      </div>

      {/* Text content — overlaid on left */}
      <motion.div 
        className="content-grid relative z-10 py-24 md:py-32 h-full flex flex-col justify-center"
        style={{ y }}
      >
        <div className="max-w-[540px]">
          {/* Category tag */}
          <p
            className="mb-5 tracking-[0.1em] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              color: "var(--accent)",
            }}
          >
            {project.categories[0]}
          </p>

          {/* Project title */}
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 700,
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              color: "#ffffff",
            }}
          >
            {project.title}
          </h2>

          {/* Client + year */}
          <p
            className="mb-6"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "var(--fg-muted)",
            }}
          >
            {project.client} · {project.year}
          </p>

          {/* Description */}
          <p
            className="mb-8 leading-relaxed"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              color: "rgba(232,228,220,0.8)",
              lineHeight: 1.7,
            }}
          >
            {project.description}
          </p>

          {/* CTA */}
          <Link
            href={`/work/${project.slug}`}
            className="group inline-flex items-center gap-2 font-semibold transition-colors duration-300"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "var(--accent)",
            }}
            data-cursor-expand
          >
            Read the Case Study
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
