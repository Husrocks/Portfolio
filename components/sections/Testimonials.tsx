"use client"

import { FadeUp } from "@/components/ui/FadeUp"
import { SlideIn } from "@/components/ui/SlideIn"
import { motion } from "framer-motion"
import { testimonials } from "@/data/testimonials"

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -8, boxShadow: "0 12px 32px rgba(0,0,0,0.4)" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="shrink-0 w-[360px] md:w-[440px] mx-4 p-6 rounded-[4px] cursor-grab active:cursor-grabbing"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <blockquote
        className="mb-5"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.25rem",
          fontStyle: "italic",
          fontWeight: 700,
          lineHeight: 1.55,
          color: "#E8E4DC",
          letterSpacing: "-0.01em",
        }}
      >
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <footer>
        <div
          className="font-semibold text-[var(--fg)]"
          style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem" }}
        >
          {testimonial.author}
        </div>
        <div
          className="text-[var(--fg-muted)]"
          style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em", marginTop: "2px" }}
        >
          {testimonial.title} · {testimonial.company}
        </div>
      </footer>
    </motion.div>
  )
}

export default function Testimonials() {
  // Duplicate cards for seamless loop
  const doubled = [...testimonials, ...testimonials]

  return (
    <section
      id="testimonials"
      className="dark-section py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: "#111110" }}
    >
      <div className="content-grid mb-12">
        <SlideIn from="left">
          <p className="section-label" style={{ color: "var(--fg-muted)" }}>
            [ 06 — What Clients Say ]
          </p>
        </SlideIn>
      </div>

      {/* Marquee carousel — desktop */}
      <FadeUp delay={0.1}>
        <div
          className="hidden md:block overflow-hidden relative"
          role="region"
          aria-label="Client testimonials"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)"
          }}
        >
          <div className="marquee-track flex" aria-hidden="false">
            {doubled.map((t, i) => (
              <TestimonialCard key={`${t.id}-${i}`} testimonial={t} />
            ))}
          </div>
        </div>
      </FadeUp>

      {/* Mobile: static vertical stack */}
      <div className="md:hidden content-grid space-y-5">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </section>
  )
}