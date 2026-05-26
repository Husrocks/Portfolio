"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { RevealText } from "@/components/ui/RevealText"

function ReadingParagraph({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" })
  
  return (
    <motion.p
      ref={ref}
      initial={{ opacity: 0.25 }}
      animate={{ opacity: isInView ? 1 : 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="transition-opacity"
    >
      {children}
    </motion.p>
  )
}

export default function ProblemStatement() {
  const sectionRef = useRef<HTMLElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  })
  
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="dark-section py-28 md:py-36 relative overflow-hidden bg-grain"
      style={{ backgroundColor: "#111110", color: "#E8E4DC" }}
    >
      {/* CSS Grain handled by .bg-grain in globals.css */}
      
      <div className="content-grid relative z-10">
        <div className="max-w-[680px] mx-auto pl-7 md:pl-9 relative">
          
          {/* Animated Left Border */}
          <motion.div 
            className="absolute left-0 top-0 w-[2px] h-full bg-[var(--accent)]"
            style={{ scaleY, transformOrigin: "top" }}
          />
          
          {/* Opening sentence — RevealText curtain effect */}
          <div
            className="mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.625rem, 3.5vw, 2.25rem)",
              fontStyle: "italic",
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "#E8E4DC",
            }}
          >
            <RevealText 
              text="You have the product. You have the team. But every time you try to explain what makes it different, something gets lost between your brain and your audience's ears."
              tag="p"
              delay={0.3}
              stagger={0.09}
            />
          </div>

          {/* Body paragraphs — Reading Mode Opacity Focus */}
          <div
            className="space-y-8 text-[var(--fg-muted)]"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.0625rem",
              lineHeight: 1.9,
            }}
          >
            <ReadingParagraph>
              The pitch deck doesn&apos;t capture the thing. The website looks fine, but it doesn&apos;t feel like you. You&apos;ve hired smart people, but the work keeps coming back generic — technically proficient, emotionally inert. And you can&apos;t quite articulate why, which makes it impossible to fix.
            </ReadingParagraph>
            <ReadingParagraph>
              This is the specific gap that creative technology exists to close. It sits between strategy and execution, between what you know and what you can show, between the insight inside your head and the experience someone else has when they encounter your work in the wild. Most agencies operate on one side of this gap or the other. Very few can move across it fluently — thinking at the level of positioning and building at the level of production.
            </ReadingParagraph>
            <ReadingParagraph>
              That&apos;s the work I do. Not as a vendor who delivers against a brief, but as a collaborator who helps you figure out what the brief should say — and then makes the thing that proves it. If you&apos;ve been nodding along to this, we should probably talk.
            </ReadingParagraph>
          </div>
          
        </div>
      </div>
    </section>
  )
}
