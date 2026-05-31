"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { SlideIn } from "@/components/ui/SlideIn"
import { FadeIn } from "@/components/ui/FadeIn"
import { useRef } from "react"

const CLIENT_LOGOS = [
  "Meridian Capital", "Volta Energy", "Harlow Magazine",
  "Arc Studio", "Vantage Goods", "Cascade Systems",
  "Meridian Capital", "Volta Energy", "Harlow Magazine",
  "Arc Studio", "Vantage Goods", "Cascade Systems",
]

export default function About() {
  const philosophyRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end center"]
  })

  // Continuous border pulse mapped to scroll
  const borderOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2])

  return (
    <section
      id="about"
      className="dark-section py-24 md:py-32"
      style={{ backgroundColor: "#111110", color: "#E8E4DC" }}
    >
      <div className="content-grid">
        {/* Section Label */}
        <SlideIn from="left">
          <p className="section-label mb-14" style={{ color: "var(--fg-muted)" }}>
            [ 08 — About ]
          </p>
        </SlideIn>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-14 lg:gap-16 mb-20">
          {/* Portrait */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-[2px] w-full"
              style={{
                height: "500px",
                maxWidth: "380px",
                border: "2px solid var(--accent)",
                boxShadow: "8px 8px 0 var(--accent)",
              }}
            >
              <Image
                src="/images/hussnain.png"
                alt="Hussnain Bashir — creative technologist and design engineer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 80vw, 380px"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            {/* Opening line */}
            <FadeIn delay={0.2}>
              <p
                className="mb-6"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.375rem, 2.5vw, 1.75rem)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                  color: "#E8E4DC",
                }}
              >
                Three years ago, I opened my laptop with an idea and a lot of curiosity turning lines of code into real products, one project, one late night, and one bold experiment at a time.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div
                className="space-y-4 text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.8 }}
              >
                <p>
                  I’m an independent developer who builds full-stack applications, and I run my own design practice, creating brands, visuals, and systems for clients who want work that feels intentional, considered, and made with care.
                </p>
                <p>
                  I don’t believe in one-size-fits-all. My approach changes with every project. Some clients need a brand that feels timeless and grounded. Others need something experimental, digital-first, and fast. Most need a blend of both — strategy that’s sharp, design that’s considered, and code that actually works the way it’s supposed to.
                </p>
                <p>
                  I’m based in Lahore and work with clients globally. If you’re looking for a partner who can think strategically, execute precisely, and move as fast as you do, we should talk.
                </p>
              </div>
            </FadeIn>

            {/* Philosophy callout */}
            <motion.div
              ref={philosophyRef}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-5 rounded-[2px]"
              style={{
                backgroundColor: "var(--surface)",
                borderLeft: "3px solid",
                borderColor: `rgba(212,149,42,${borderOpacity.get()})`, // Dynamically driven by useScroll if needed, but we'll use motion style
              }}
            >
              <motion.div style={{ opacity: borderOpacity }}>
                <p
                  className="text-[var(--fg)]"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1rem",
                    fontStyle: "italic",
                    lineHeight: 1.65,
                  }}
                >
                  &ldquo;The best creative work isn&apos;t made by choosing between thinking and making. It&apos;s made by people who refuse to separate them.&rdquo;
                </p>
              </motion.div>
            </motion.div>

            {/* Currently open to */}
            <FadeIn delay={0.5}>
              <div className="mt-6 flex flex-wrap gap-2">
                <span
                  className="text-[var(--fg-muted)]"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                >
                  Currently open to:
                </span>
                <span
                  className="text-[var(--fg)]"
                  style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem" }}
                >
                  AI & ML Development, Full-stack Development, UI/UX Design, Shopiy Development, WordPress Development
                </span>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Client logo marquee */}
        <FadeIn delay={0.2}>
          <div
            className="overflow-hidden pt-12 relative"
            style={{
              borderTop: "1px solid var(--border)",
              maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)"
            }}
            role="region"
            aria-label="Clients"
          >
            <p
              className="section-label mb-7"
              style={{ color: "var(--fg-muted)" }}
            >
              Clients &amp; Collaborators
            </p>
            <div className="marquee-track-slow flex" aria-hidden="true">
              {CLIENT_LOGOS.map((name, i) => (
                <div
                  key={`${name}-${i}`}
                  className="mx-8 shrink-0 transition-all duration-500 hover:opacity-100 opacity-30 grayscale hover:grayscale-0 hover:text-[var(--accent)]"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
