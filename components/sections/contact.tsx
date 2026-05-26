"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { motion, AnimatePresence } from "framer-motion"
import { FadeUp } from "@/components/ui/FadeUp"
import { RevealText } from "@/components/ui/RevealText"
import { Check, Loader2 } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  description: z.string().min(20, "Please provide a brief description (20+ chars)"),
  email: z.string().email("Please enter a valid email"),
  website: z.string().optional(), // honeypot
})

type ContactFormData = z.infer<typeof contactSchema>

const FAQ_ITEMS = [
  {
    q: "What does a typical engagement look like?",
    a: "Most engagements start with a 30-minute discovery call where we map out your goals and constraints. From there, I'll send a scoped proposal within 48 hours. Projects typically run on a fixed-fee basis with defined deliverables and timelines — no surprises.",
  },
  {
    q: "Are you available for part-time or fractional work?",
    a: "Yes — fractional creative direction is one of the most common ways I work with teams. I'm typically available 2–3 days per week for ongoing engagements, usually structured in 3 or 6-month blocks with the option to continue.",
  },
  {
    q: "How do I know if we're a good fit?",
    a: "The best projects I take on are with founders or teams who have a clear business goal but haven't yet found the creative or technical language to express it. If you're wrestling with positioning, brand, product design, or messaging — and you want someone who can hold the whole problem — we're probably a good fit.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: "1px solid var(--border)" }}>
      <button
        className="w-full flex justify-between items-start py-5 text-left bg-transparent border-none cursor-pointer group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="pr-6 font-semibold text-[var(--fg)]"
          style={{ fontFamily: "var(--font-body)", fontSize: "1rem" }}
        >
          {q}
        </span>
        <span className="text-[var(--accent)] text-xl shrink-0 mt-0.5">
          {open ? "−" : "+"}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              className="pb-5 text-[var(--fg-muted)] leading-relaxed"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7 }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormData) {
    if (data.website) return // honeypot triggered
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) {
        const json = await res.json()
        throw new Error(json.error ?? "Something went wrong")
      }
      setSubmitted(true)
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again.")
    } finally {
      setSubmitting(false)
    }
  }

  const inputBase = {
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    color: "var(--fg)",
    backgroundColor: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "2px",
    padding: "12px 14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.2s",
  }

  return (
    <section
      id="contact"
      className="section-light py-24 md:py-32"
      style={{ backgroundColor: "#F4F1EC" }}
    >
      <div className="content-grid">
        {/* Section Label */}
        <FadeUp>
          <p className="section-label mb-10" style={{ color: "var(--fg-muted)" }}>
            [ 11 — Work Together ]
          </p>
        </FadeUp>

        {/* Headline */}
        <div
          className="mb-14"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: 700,
            fontStyle: "italic",
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            color: "var(--fg)",
            maxWidth: "680px",
          }}
        >
          <RevealText text="Ready to build something worth remembering?" />
        </div>

        {/* Two-column: Calendly + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Option A — Book a Call */}
          <FadeUp delay={0.1}>
            <div
              className="p-8 rounded-[2px] h-full"
              style={{ backgroundColor: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <p
                className="mb-3"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                }}
              >
                Free 30-min discovery call
              </p>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--fg)",
                }}
              >
                Book a Discovery Call
              </h3>
              <p
                className="mb-8 text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem", lineHeight: 1.7 }}
              >
                No pitch. No commitment. Just a conversation about your project and whether I&apos;m the right person to help.
              </p>
              <a
                href="https://calendly.com/alex-reyes/discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3.5 text-sm font-semibold rounded-[2px] transition-all duration-300 hover:brightness-90"
                style={{
                  fontFamily: "var(--font-body)",
                  backgroundColor: "var(--accent)",
                  color: "#1C1C1A",
                  textDecoration: "none",
                }}
                data-cursor-expand
              >
                Schedule on Calendly →
              </a>
            </div>
          </FadeUp>

          {/* Option B — Contact Form */}
          <FadeUp delay={0.15}>
            <div>
              <h3
                className="mb-6"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--fg)",
                }}
              >
                Send a Message
              </h3>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.5rem, 3vw, 2rem)",
                        fontStyle: "italic",
                        fontWeight: 700,
                        color: "var(--fg)",
                        lineHeight: 1.3,
                      }}
                    >
                      Thank you — I&apos;ll be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    {/* Honeypot */}
                    <input
                      {...register("website")}
                      name="website"
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-[var(--fg-muted)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          {...register("name")}
                          placeholder="Alex Chen"
                          style={inputBase}
                          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        />
                        {errors.name && (
                          <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="company"
                          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-[var(--fg-muted)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Company
                        </label>
                        <input
                          id="company"
                          {...register("company")}
                          placeholder="Acme Inc."
                          style={inputBase}
                          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="projectType"
                          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-[var(--fg-muted)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Project Type *
                        </label>
                        <select
                          id="projectType"
                          {...register("projectType")}
                          style={{ ...inputBase, cursor: "pointer" }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        >
                          <option value="">Select type...</option>
                          <option value="brand-identity">Brand Identity</option>
                          <option value="design-engineering">Design Engineering</option>
                          <option value="fractional">Fractional / Advisory</option>
                          <option value="content-strategy">Content &amp; Messaging</option>
                          <option value="workshop">Workshop Facilitation</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.projectType && (
                          <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="budget"
                          className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-[var(--fg-muted)]"
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          Budget Range *
                        </label>
                        <select
                          id="budget"
                          {...register("budget")}
                          style={{ ...inputBase, cursor: "pointer" }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                        >
                          <option value="">Select range...</option>
                          <option value="under-5k">Under $5k</option>
                          <option value="5k-15k">$5k – $15k</option>
                          <option value="15k-40k">$15k – $40k</option>
                          <option value="40k-100k">$40k – $100k</option>
                          <option value="100k-plus">$100k+</option>
                        </select>
                        {errors.budget && (
                          <p className="mt-1 text-xs text-red-500">{errors.budget.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="description"
                        className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-[var(--fg-muted)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Brief Description *
                      </label>
                      <textarea
                        id="description"
                        {...register("description")}
                        rows={4}
                        placeholder="Tell me about your project, what you're trying to achieve, and any constraints worth knowing about..."
                        style={{ ...inputBase, resize: "vertical" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                      {errors.description && (
                        <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-1.5 text-[11px] tracking-[0.08em] uppercase text-[var(--fg-muted)]"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="you@company.com"
                        style={inputBase}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                      )}
                    </div>

                    {error && (
                      <p className="text-sm text-red-500">{error}</p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={submitting || submitted}
                      whileHover={{ scale: submitting || submitted ? 1 : 1.02 }}
                      whileTap={{ scale: submitting || submitted ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-2 py-4 text-sm font-semibold rounded-[2px] transition-colors duration-300 disabled:opacity-80"
                      style={{
                        fontFamily: "var(--font-body)",
                        backgroundColor: submitted ? "#2E7D32" : "var(--accent)",
                        color: submitted ? "#FFFFFF" : "#1C1C1A",
                        border: "none",
                        cursor: submitting || submitted ? "not-allowed" : "pointer",
                      }}
                    >
                      {submitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                        >
                          <Loader2 className="w-5 h-5" />
                        </motion.div>
                      ) : submitted ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        >
                          <Check className="w-5 h-5" />
                        </motion.div>
                      ) : (
                        "Send Message →"
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </FadeUp>
        </div>

        {/* FAQ */}
        <FadeUp delay={0.2}>
          <div className="max-w-[720px] mb-14">
            <p
              className="section-label mb-6"
              style={{ color: "var(--fg-muted)" }}
            >
              Common Questions
            </p>
            <div style={{ borderTop: "1px solid var(--border)" }}>
              {FAQ_ITEMS.map((item) => (
                <FaqItem key={item.q} {...item} />
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Direct contact info */}
        <FadeUp delay={0.25}>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href="mailto:hello@alexreyes.design"
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 hover-underline-amber"
              style={{ fontFamily: "var(--font-body)" }}
            >
              hello@alexreyes.design
            </a>
            <a
              href="https://linkedin.com/in/alexreyes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 hover-underline-amber"
              style={{ fontFamily: "var(--font-body)" }}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/alexreyes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 hover-underline-amber"
              style={{ fontFamily: "var(--font-body)" }}
            >
              GitHub
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
