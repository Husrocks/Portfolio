"use client"

import Link from "next/link"
import { SlideIn } from "@/components/ui/SlideIn"
import { Stagger, staggerItem } from "@/components/ui/Stagger"
import { motion } from "framer-motion"
import { type Post } from "@/lib/mdx"
import { formatDateShort } from "@/lib/utils"
import { useState, useEffect } from "react"

// A component that types out a string on hover
function TypewriterHover({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text)
      return
    }

    // When hovered, type it out character by character
    let i = 0
    setDisplayText("")
    
    const interval = setInterval(() => {
      if (i <= text.length) {
        setDisplayText(text.slice(0, i))
        i++
      } else {
        clearInterval(interval)
      }
    }, 40) // speed of typing

    return () => clearInterval(interval)
  }, [isHovered, text])

  return (
    <span 
      className="inline-block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ minWidth: "10ch" }}
    >
      {displayText}
      {isHovered && displayText.length < text.length && (
        <span className="inline-block w-1.5 h-3 bg-[var(--accent)] ml-[1px] animate-pulse" />
      )}
    </span>
  )
}

export default function Writing({ posts }: { posts: Post[] }) {

  return (
    <section
      id="writing"
      className="section-light py-24 md:py-32"
      style={{ backgroundColor: "#F4F1EC" }}
    >
      <div className="content-grid">
        {/* Section Label */}
        <SlideIn from="left">
          <p className="section-label mb-12" style={{ color: "var(--fg-muted)" }}>
            [ 09 — Writing ]
          </p>
        </SlideIn>

        {/* Post List */}
        <div style={{ borderTop: "1px solid var(--border)" }}>
          {posts.length === 0 ? (
            <SlideIn from="left" delay={0.05}>
              <div className="py-12 text-center text-[var(--fg-muted)]" style={{ fontFamily: "var(--font-body)" }}>
                Essays and technical writing — coming soon.
              </div>
            </SlideIn>
          ) : (
            <Stagger staggerDelay={0.1}>
              {posts.map((post) => (
                <motion.div
                  variants={staggerItem}
                  key={post.slug}
                  className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-6 group"
                  style={{ borderBottom: "1px solid var(--border)" }}
                >
                  {/* Date with hover typewriter effect */}
                  <div
                    className="shrink-0"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--fg-muted)",
                      width: "120px",
                    }}
                  >
                    <TypewriterHover text={formatDateShort(post.date)} />
                  </div>

                  {/* Title with hover underline sweep */}
                  <Link
                    href={`/writing/${post.slug}`}
                    className="flex-1 text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors duration-300 relative inline-block w-max"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "1.125rem",
                      fontWeight: 600,
                    }}
                    data-cursor="large"
                  >
                    {post.title}
                    <span 
                      className="absolute left-0 bottom-0 w-full h-[1px] bg-[var(--accent)] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out-cubic"
                    />
                  </Link>

                  {/* Reading time */}
                  <div
                    className="sm:text-right shrink-0"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "11px",
                      letterSpacing: "0.06em",
                      color: "var(--fg-muted)",
                    }}
                  >
                    {post.readingTime}
                  </div>
                </motion.div>
              ))}
            </Stagger>
          )}
        </div>

        {/* Bottom links */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-8 mt-10"
        >
          <Link
            href="/writing"
            className="text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 hover-underline-amber"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Read all posts →
          </Link>
          <Link
            href="/feed.xml"
            className="text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--accent)] transition-colors duration-200 hover-underline-amber"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Subscribe via RSS →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
