"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SlideIn } from "@/components/ui/SlideIn"
import { Stagger, staggerItem } from "@/components/ui/Stagger"
import { services } from "@/data/services"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const [openId, setOpenId] = useState<string | null>(null)

  function toggle(id: string) {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="services"
      className="section-light py-24 md:py-32"
      style={{ backgroundColor: "#F4F1EC" }}
    >
      <div className="content-grid">
        {/* Section Label */}
        <SlideIn from="left">
          <p className="section-label mb-12" style={{ color: "var(--fg-muted)" }}>
            [ 05 — What I Do ]
          </p>
        </SlideIn>

        <div className="grid grid-cols-1 lg:grid-cols-[30%_1fr] gap-12 lg:gap-16">
          {/* Left — rotated decorative label */}
          <SlideIn from="left" delay={0.1}>
            <div className="hidden lg:flex items-start justify-center pt-2">
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 4vw, 3rem)",
                  fontStyle: "italic",
                  fontWeight: 700,
                  color: "var(--fg)",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  letterSpacing: "0.02em",
                  userSelect: "none",
                  opacity: 0.15,
                }}
                aria-hidden="true"
              >
                Services
              </div>
            </div>
          </SlideIn>

          {/* Right — service list with drawers */}
          <div className="w-full">
            <Stagger staggerDelay={0.08}>
              <div style={{ borderTop: "1px solid var(--border)" }}>
                {services.map((service) => (
                  <motion.div
                    variants={staggerItem}
                    key={service.id}
                    style={{ borderBottom: "1px solid var(--border)" }}
                  >
                    {/* Service name row */}
                    <button
                      onClick={() => toggle(service.id)}
                      className="w-full flex items-center justify-between py-6 text-left group cursor-pointer bg-transparent border-none"
                      aria-expanded={openId === service.id}
                      aria-controls={`drawer-${service.id}`}
                    >
                      <div className="relative">
                        {/* Base text */}
                        <span
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                            fontWeight: 700,
                            color: "var(--fg)",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.2,
                          }}
                        >
                          {service.name}
                        </span>
                        
                        {/* Amber sweep overlay text */}
                        <span
                          className="absolute left-0 top-0 whitespace-nowrap overflow-hidden transition-all duration-500 ease-out-cubic"
                          style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                            fontWeight: 700,
                            color: "var(--accent)",
                            letterSpacing: "-0.01em",
                            lineHeight: 1.2,
                            clipPath: openId === service.id ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
                          }}
                        >
                          {service.name}
                        </span>
                        
                        {/* Hover effect for unopened state */}
                        {!openId || openId !== service.id ? (
                          <span
                            className="absolute left-0 top-0 whitespace-nowrap overflow-hidden transition-all duration-500 ease-out-cubic group-hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] opacity-0 group-hover:opacity-100"
                            style={{
                              fontFamily: "var(--font-body)",
                              fontSize: "clamp(1.25rem, 2.5vw, 2rem)",
                              fontWeight: 700,
                              color: "var(--accent)",
                              letterSpacing: "-0.01em",
                              lineHeight: 1.2,
                              clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)"
                            }}
                            aria-hidden="true"
                          >
                            {service.name}
                          </span>
                        ) : null}
                      </div>

                      <motion.div
                        animate={{ rotate: openId === service.id ? 90 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="text-[var(--accent)] shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      >
                        <ArrowRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                      </motion.div>
                    </button>

                    {/* Physics Drawer */}
                    <AnimatePresence initial={false}>
                      {openId === service.id && (
                        <motion.div
                          id={`drawer-${service.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 150, damping: 22, mass: 0.8 }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="pb-8 pr-4">
                            <p
                              className="mb-5 text-[var(--fg-muted)]"
                              style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.7 }}
                            >
                              {service.description}
                            </p>
                            <ul className="space-y-2.5 mb-6">
                              {service.deliverables.map((d) => (
                                <li
                                  key={d}
                                  className="flex items-start gap-3 text-[var(--fg-muted)]"
                                  style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem" }}
                                >
                                  <span className="text-[var(--accent)] mt-0.5 shrink-0">—</span>
                                  {d}
                                </li>
                              ))}
                            </ul>
                            <p
                              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em" }}
                              className="text-[var(--fg-muted)] uppercase"
                            >
                              Engagement: <span className="text-[var(--fg)]">{service.engagement}</span>
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </Stagger>

            {/* Footer note */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-[var(--fg-muted)]"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", fontStyle: "italic" }}
            >
              Not sure which fits?{" "}
              <Link
                href="/#contact"
                className="hover:text-[var(--accent)] transition-colors duration-200 hover-underline-amber"
              >
                Let&apos;s figure it out.
              </Link>
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  )
}
