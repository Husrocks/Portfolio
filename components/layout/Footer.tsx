"use client"

import Link from "next/link"
import { Github, Linkedin, X, Rss, ArrowUp, Mail } from "lucide-react"

const NAV_LINKS = [
  { label: "Work", href: "/#work" },
  { label: "Writing", href: "/#writing" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
]

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Husrocks", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/hussnain-bashir", icon: Linkedin },
  { label: "Twitter / X", href: "https://x.com/RocksHus", icon: X },
  { label: "RSS Feed", href: "/feed.xml", icon: Rss },
]

export function Footer() {
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer
      className="dark-section"
      style={{ backgroundColor: "#111110", color: "#E8E4DC" }}
    >
      {/* Main footer grid */}
      <div className="content-grid py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Logo + tagline */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div
              className="text-[28px] italic font-bold mb-3 text-[#E8E4DC]"
              style={{
                fontFamily: "var(--font-display)",
                letterSpacing: "-0.02em",
              }}
            >
              Imhussnain
            </div>
            <p
              className="text-sm text-[var(--fg-muted)] leading-relaxed max-w-[220px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Creative technologist and design engineer at the intersection of thinking and making.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3
              className="text-[11px] tracking-[0.1em] uppercase mb-5 text-[var(--fg-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3
              className="text-[11px] tracking-[0.1em] uppercase mb-5 text-[var(--fg-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:zurqulnan@gmail.com"
                  className="text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  zurqulnan@gmail.com
                </a>
              </li>
              <li
                className="text-sm text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                Lahore, Pakistan
              </li>
              <li
                className="text-sm"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                <span className="inline-flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block"
                    aria-hidden="true"
                  />
                  <span className="text-emerald-400">Available for projects</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Social */}
          <div>
            <h3
              className="text-[11px] tracking-[0.1em] uppercase mb-5 text-[var(--fg-muted)]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Connect
            </h3>
            <ul className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-body)" }}
                    aria-label={link.label}
                  >
                    <link.icon className="w-3.5 h-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="content-grid pb-8"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
          <p
            className="text-[11px] text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} Imhussnain. All rights reserved.
          </p>
          <p
            className="text-[11px] text-[var(--fg-muted)]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Built with Next.js, TypeScript &amp; care.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[11px] text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 bg-transparent border-none cursor-pointer"
            style={{ fontFamily: "var(--font-mono)" }}
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
