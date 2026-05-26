"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Tag } from "@/components/ui/Tag"
import { TiltCard } from "@/components/ui/TiltCard"
import { MotionImage } from "@/components/ui/MotionImage"
import { type Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  className?: string
  priority?: boolean
}

export function ProjectCard({ project, className = "", priority = false }: ProjectCardProps) {
  return (
    <TiltCard>
      <Link
        href={`/work/${project.slug}`}
        className={`group block focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded-[4px] border border-transparent hover:border-[var(--accent)] transition-colors duration-200 overflow-hidden ${className}`}
        aria-label={`View case study: ${project.title} for ${project.client}`}
      >
        {/* Image Container */}
        <div className="relative overflow-hidden bg-[var(--surface)] aspect-[4/3] rounded-[inherit]">
          <MotionImage
            layoutId={`project-image-${project.slug}`}
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-[600ms] ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />

          {/* Dark hover overlay */}
          <div className="absolute inset-0 bg-[rgba(17,17,16,0.72)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="text-center px-6 translate-y-5 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-100">
              <h3
                className="font-display italic text-[#E8E4DC] text-3xl leading-tight mb-2"
                style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
              >
                {project.title}
              </h3>
              <p 
                className="text-[var(--accent)] text-[11px] uppercase tracking-[0.1em] font-semibold"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                View Case Study →
              </p>
            </div>
          </div>
        </div>

        {/* Below image — default state, hidden on hover */}
        <div className="mt-4 pb-2 px-1 group-hover:opacity-0 transition-opacity duration-300">
          <h3
            className="text-[var(--fg)] font-semibold text-lg leading-snug mb-1"
            style={{ fontFamily: "var(--font-body)", fontWeight: 700 }}
          >
            {project.title}
          </h3>
          <p
            className="text-[var(--fg-muted)] text-[11px] tracking-[0.08em] uppercase mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {project.client}
          </p>
          <div className="flex flex-wrap gap-1.5 transition-transform duration-300 group-hover:-translate-y-2">
            {project.categories.map((cat) => (
              <Tag key={cat} className="border border-[var(--border)] text-[var(--fg-muted)] bg-transparent">
                {cat}
              </Tag>
            ))}
          </div>
        </div>
      </Link>
    </TiltCard>
  )
}
