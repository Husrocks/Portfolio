"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion"

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/#writing" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

/**
 * Header — adaptive navigation that transitions from transparent to backdrop-blur
 * after 80px scroll. Nav text color adapts based on Intersection Observer
 * section detection. Mobile: full-screen overlay with staggered Cormorant links.
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isDarkSection, setIsDarkSection] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()

  // Background opacity on scroll
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setScrolled(latest > 80)
    })
    return unsubscribe
  }, [scrollY])

  // Section intersection detection for dark/light nav text
  useEffect(() => {
    const darkSections = document.querySelectorAll(".dark-section")
    if (darkSections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setIsDarkSection(true)
          }
        })
      },
      { threshold: [0.3], rootMargin: "-80px 0px 0px 0px" }
    )

    // Also detect light sections
    const lightSections = document.querySelectorAll("section:not(.dark-section)")
    const lightObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setIsDarkSection(false)
          }
        })
      },
      { threshold: [0.3], rootMargin: "-80px 0px 0px 0px" }
    )

    darkSections.forEach((el) => observer.observe(el))
    lightSections.forEach((el) => lightObserver.observe(el))

    return () => {
      observer.disconnect()
      lightObserver.disconnect()
    }
  }, [pathname])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const textColor = isDarkSection
    ? "rgba(232, 228, 220, 0.9)"
    : "rgba(28, 28, 26, 0.9)"
  const logoColor = isDarkSection ? "#E8E4DC" : "#1C1C1A"

  function scrollToSection(href: string) {
    setMenuOpen(false)
    if (href.startsWith("/#")) {
      const id = href.replace("/#", "")
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.location.href = href
  }

  return (
    <>
      {/* Main Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-[1000]"
        style={{
          backgroundColor: scrolled
            ? isDarkSection
              ? "rgba(17,17,16,0.92)"
              : "rgba(244,241,236,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled
            ? `1px solid ${isDarkSection ? "rgba(42,42,40,0.5)" : "rgba(216,212,204,0.5)"}`
            : "none",
          transition: "background-color 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="content-grid">
          <nav className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="text-[15px] font-bold tracking-tight transition-opacity hover:opacity-70 focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded"
              style={{
                fontFamily: "var(--font-body)",
                color: logoColor,
                transition: "color 0.3s ease",
              }}
            >
              Alex Reyes
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm font-medium hover-underline-amber transition-colors duration-300 bg-transparent border-none cursor-pointer"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: textColor,
                    transition: "color 0.3s ease",
                  }}
                >
                  {link.label}
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("/#contact")}
                className="text-sm font-semibold px-5 py-2.5 rounded-[2px] transition-all duration-300 hover:bg-[var(--accent)] hover:text-[#1C1C1A] focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--accent)",
                  border: "1px solid var(--accent)",
                  cursor: "pointer",
                  background: "transparent",
                }}
              >
                Let&apos;s Talk →
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col gap-[6px] w-7 cursor-pointer bg-transparent border-none p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                className="block h-[1.5px] w-7 origin-center"
                style={{ backgroundColor: logoColor }}
                animate={menuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[1.5px] w-7 origin-center"
                style={{ backgroundColor: logoColor }}
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.1 }}
              />
              <motion.span
                className="block h-[1.5px] w-7 origin-center"
                style={{ backgroundColor: logoColor }}
                animate={menuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
            style={{ backgroundColor: "#111110" }}
          >
            <nav className="flex flex-col items-center gap-8">
              {NAV_LINKS.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.08, duration: 0.35, ease: [0.33, 1, 0.68, 1] }}
                  onClick={() => scrollToSection(link.href)}
                  className="text-[#E8E4DC] hover:text-[var(--accent)] transition-colors duration-300 bg-transparent border-none cursor-pointer"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(2.5rem, 8vw, 3rem)",
                    fontStyle: "italic",
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: NAV_LINKS.length * 0.08 + 0.1, duration: 0.35 }}
                onClick={() => scrollToSection("/#contact")}
                className="mt-4 text-[var(--accent)] border border-[var(--accent)] px-8 py-3 text-sm font-semibold bg-transparent cursor-pointer hover:bg-[var(--accent)] hover:text-[#1C1C1A] transition-colors duration-300 rounded-[2px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Book a Discovery Call →
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
