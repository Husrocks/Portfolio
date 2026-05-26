"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Tag } from "@/components/ui/Tag"
import { FadeUp } from "@/components/ui/FadeUp"
import { SlideIn } from "@/components/ui/SlideIn"
import { CountUp } from "@/components/ui/CountUp"
import { openSourceRepos } from "@/data/openSource"
import { Star } from "lucide-react"

const tableVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06
    }
  }
}

const rowVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
}

export default function OpenSource() {
  return (
    <section
      id="open-source"
      className="section-light py-24 md:py-32"
      style={{ backgroundColor: "#F4F1EC" }}
    >
      <div className="content-grid">
        {/* Section Label */}
        <SlideIn from="left">
          <p
            className="section-label mb-12"
            style={{ color: "var(--fg-muted)" }}
          >
            [ 03 — Open Source ]
          </p>
        </SlideIn>

        <FadeUp delay={0.05}>
          <h2
            className="mb-10"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              color: "var(--fg)",
              lineHeight: 1.1,
            }}
          >
            Things I&apos;ve built <br />
            <span style={{ fontWeight: 400, opacity: 0.7 }}>and contributed to.</span>
          </h2>
        </FadeUp>

        {/* Repos Table */}
        <div className="overflow-x-auto mb-16">
          <table
            className="w-full text-sm"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border)" }}>
                {["Repo", "Description", "Language", "Stars", "Role"].map((col) => (
                  <th
                    key={col}
                    className="text-left pb-3 pr-6 last:pr-0"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                      fontWeight: 400,
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <motion.tbody
              variants={tableVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
            >
              {openSourceRepos.map((repo, i) => (
                <motion.tr
                  variants={rowVariants}
                  key={repo.name}
                  className="group transition-colors duration-200"
                  style={{
                    backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--surface)",
                    borderBottom: "1px solid var(--border)",
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLTableRowElement).style.backgroundColor = "var(--surface)"
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLTableRowElement).style.backgroundColor =
                      i % 2 === 0 ? "var(--bg)" : "var(--surface)"
                  }}
                >
                  <td className="py-4 pr-6">
                    <a
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-[var(--accent)] transition-colors duration-200"
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "13px",
                        color: "var(--fg)",
                      }}
                    >
                      {repo.name}
                    </a>
                  </td>
                  <td
                    className="py-4 pr-6 text-[var(--fg-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", maxWidth: "360px" }}
                  >
                    {repo.description}
                  </td>
                  <td className="py-4 pr-6">
                    <Tag>{repo.language}</Tag>
                  </td>
                  <td className="py-4 pr-6">
                    <span
                      className="flex items-center gap-1 text-[var(--fg-muted)]"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }}
                    >
                      <Star className="w-3 h-3 text-[var(--accent)]" />
                      <CountUp target={repo.stars} />
                    </span>
                  </td>
                  <td className="py-4">
                    <span
                      className="text-[11px] tracking-[0.06em] px-2 py-0.5 border border-[var(--border)] rounded-[2px] text-[var(--fg-muted)]"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {repo.role}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
