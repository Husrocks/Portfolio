import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { projects } from "@/data/projects"
import { Tag } from "@/components/ui/Tag"
import { FadeUp } from "@/components/ui/FadeUp"
import { MotionImage } from "@/components/ui/MotionImage"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} — Hussnain Bashir`,
    description: project.description,
  }
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const nextProject = projects.find((p) => p.slug === project.nextProject)

  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero — full bleed project image */}
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden bg-[var(--surface)]">
          <MotionImage
            layoutId={`project-image-${project.slug}`}
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(17,17,16,0.8) 0%, rgba(17,17,16,0.2) 60%, transparent 100%)" }}
          />
        </div>

        {/* Project metadata */}
        <div className="dark-section py-16" style={{ backgroundColor: "#111110" }}>
          <div className="content-grid">
            <FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((cat) => (
                      <Tag key={cat} className="border border-[var(--accent)] text-[var(--accent)] bg-transparent">
                        {cat}
                      </Tag>
                    ))}
                  </div>
                  <h1
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 5vw, 3.5rem)",
                      fontWeight: 700,
                      fontStyle: "italic",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.1,
                      color: "#E8E4DC",
                    }}
                  >
                    {project.title}
                  </h1>
                  <p
                    className="mt-4 max-w-[600px] text-[var(--fg-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.75 }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Sidebar metadata */}
                <div
                  className="space-y-5 pt-2"
                  style={{ borderLeft: "1px solid var(--border)", paddingLeft: "2rem" }}
                >
                  {[
                    { label: "Client", value: project.client },
                    { label: "Year", value: project.year.toString() },
                    { label: "Services", value: project.categories.join(", ") },
                  ].map(({ label, value }) => (
                    <div key={label}>
                      <p
                        className="text-[var(--fg-muted)] mb-1"
                        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-[var(--fg)]"
                        style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem" }}
                      >
                        {value}
                      </p>
                    </div>
                  ))}

                  {project.link && (
                    <div className="pt-2">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold hover:brightness-110 transition-all duration-300"
                        style={{ fontFamily: "var(--font-body)", color: "var(--accent)" }}
                      >
                        Visit Live Site →
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Project body content area */}
        <div className="section-light py-16" style={{ backgroundColor: "#F4F1EC" }}>
          <div className="content-grid">
            <div className="max-w-[720px] mx-auto">
              <p
                className="text-[var(--fg-muted)] text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-body)", lineHeight: 1.8 }}
              >
                Full case study content coming soon. This project represents one of the most engaging pieces of work in the portfolio — combining strategic thinking with high-craft execution across every deliverable.
              </p>
            </div>
          </div>
        </div>

        {/* Next project */}
        {nextProject && (
          <div className="dark-section py-16" style={{ backgroundColor: "#111110", borderTop: "1px solid var(--border)" }}>
            <div className="content-grid flex items-center justify-between">
              <p
                className="text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              >
                Next Project
              </p>
              <Link
                href={`/work/${nextProject.slug}`}
                className="group flex items-center gap-3 hover:text-[var(--accent)] transition-colors duration-300"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.25rem, 3vw, 2rem)", fontStyle: "italic", fontWeight: 700, color: "#E8E4DC" }}
              >
                {nextProject.title}
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </Link>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
