"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { FadeUp } from "@/components/ui/FadeUp"
import { StaggerParent, StaggerItem } from "@/components/ui/StaggerParent"
import { projects } from "@/data/projects"

const ALL_CATEGORIES = ["All", ...Array.from(new Set(projects.flatMap((p) => p.categories)))]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory))

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main id="main-content" className="section-light min-h-screen pt-32 pb-24" style={{ backgroundColor: "#F4F1EC" }}>
        <div className="content-grid">
          <FadeUp>
            <p className="section-label mb-6" style={{ color: "var(--fg-muted)" }}>
              [ Work ]
            </p>
            <h1
              className="mb-10"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
                color: "var(--fg)",
              }}
            >
              Selected Projects
            </h1>
          </FadeUp>

          {/* Filter pills */}
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap gap-2 mb-14">
              {ALL_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="text-[11px] tracking-[0.08em] uppercase px-3.5 py-2 rounded-[2px] transition-all duration-200 border cursor-pointer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    backgroundColor: activeCategory === cat ? "var(--accent)" : "transparent",
                    color: activeCategory === cat ? "#1C1C1A" : "var(--fg-muted)",
                    borderColor: activeCategory === cat ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeUp>

          {/* Grid */}
          <StaggerParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, i) => (
              <StaggerItem key={project.slug}>
                <ProjectCard project={project} priority={i < 3} />
              </StaggerItem>
            ))}
          </StaggerParent>
        </div>
      </main>
      <Footer />
    </>
  )
}
