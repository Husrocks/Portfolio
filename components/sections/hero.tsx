"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { KenBurns } from "@/components/ui/KenBurns"
import { RevealText } from "@/components/ui/RevealText"
import { SlideIn } from "@/components/ui/SlideIn"
import { ArrowRight, ChevronDown } from "lucide-react"

const HERO_IMAGES = [
  { src: "/images/hero-mosaic.png", alt: "Creative Direction & Engineering" }
]

const CURRENTLY_ITEMS = [
  { label: "Role", value: "Open to Offers" },
  { label: "Base", value: "San Francisco" },
  { label: "Building", value: "atlas-ui v2" },
  { label: "Reading", value: "The Shape of Things" },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: "smooth" })
}

export default function Hero() {
  // Exit Parallax for the text block
  const { scrollYProgress } = useScroll()
  const textY = useTransform(scrollYProgress, [0, 0.25], ["0%", "-30%"])
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  
  // Fade out chevron on scroll
  const chevronOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0])

  return (
    <motion.section
      id="home"
      initial={{ backgroundColor: "#111110" }}
      animate={{ backgroundColor: "#F4F1EC" }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Ken Burns mosaic — Right side */}
      <motion.div 
        className="hidden lg:block absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <KenBurns images={HERO_IMAGES} />
      </motion.div>

      {/* Left content */}
      <motion.div 
        className="content-grid w-full relative z-10 py-32 pt-36"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="max-w-[520px]">
          {/* Availability label */}
          <SlideIn from="left" delay={0.2}>
            <p
              className="text-[var(--accent)] mb-6 tracking-[0.1em] uppercase text-[12px]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              [ Creative Technologist — Available for Work ]
            </p>
          </SlideIn>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 6.875rem)",
              letterSpacing: "-0.02em",
              lineHeight: 1.0,
              color: "var(--fg)",
            }}
          >
            <RevealText 
              text="Design that thinks." 
              tag="span" 
              className="italic font-bold block" 
              delay={0.5} 
              stagger={0.06} 
              animateOnLoad
            />
            <RevealText 
              text="Code that feels." 
              tag="span" 
              className="font-normal block opacity-80" 
              delay={0.9} 
              stagger={0.06} 
              animateOnLoad
            />
          </h1>

          {/* Positioning statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-6 text-[var(--fg-muted)] leading-[1.8] max-w-[440px]"
            style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
          >
            I work at the intersection of visual craft and engineering discipline — building brand systems, digital products, and content strategies for clients who refuse to choose between beautiful and functional.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 20, delay: 1.6 }}
            className="flex flex-wrap gap-3 mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(212,149,42,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("work")}
              className="px-6 py-3.5 text-sm font-semibold rounded-[2px] transition-colors duration-300 hover:brightness-95"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: "var(--accent)",
                color: "#1C1C1A",
              }}
              data-cursor-expand
            >
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, borderWidth: "1.5px" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollToSection("contact")}
              className="group px-6 py-3.5 text-sm font-semibold rounded-[2px] transition-colors duration-300 hover:bg-[rgba(212,149,42,0.05)]"
              style={{
                fontFamily: "var(--font-body)",
                color: "var(--accent)",
                border: "1px solid var(--accent)",
                background: "transparent",
              }}
              data-cursor-expand
            >
              Book a Call 
              <motion.span 
                className="inline-block ml-1"
                variants={{ hover: { x: 6 } }}
              >
                <ArrowRight className="inline w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Currently micro-items */}
          <div
            className="flex flex-wrap gap-x-6 gap-y-2 mt-8 pt-6 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {CURRENTLY_ITEMS.map((item, index) => (
              <motion.div 
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1.9 + (index * 0.1) }}
                className="flex items-center gap-2"
              >
                <span
                  className="text-[var(--fg-muted)] text-[11px] tracking-[0.08em] uppercase"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.label}:
                </span>
                <span
                  className="text-[var(--fg)] text-[11px]"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative section counter watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.2, delay: 2.3 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
        aria-hidden="true"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 20vw, 200px)",
          fontWeight: 700,
          color: "rgba(212,149,42,1)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
          bottom: "-0.15em",
        }}
      >
        01
      </motion.div>

      {/* Scroll Invitation Chevron */}
      <motion.div
        style={{ opacity: chevronOpacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-bounce-soft">
          <ChevronDown className="text-[var(--accent)] w-6 h-6 opacity-60" />
        </div>
      </motion.div>
    </motion.section>
  )
}
