import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { communityRoles } from "@/data/community"
import { FadeUp } from "@/components/ui/FadeUp"
import { MotionImage } from "@/components/ui/MotionImage"

export function generateStaticParams() {
  return communityRoles.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const item = communityRoles.find((c) => c.slug === params.slug)
  if (!item) return {}
  return {
    title: `${item.title} — Alex Reyes`,
    description: item.description,
  }
}

export default function CommunityPage({ params }: { params: { slug: string } }) {
  const item = communityRoles.find((c) => c.slug === params.slug)
  if (!item) notFound()

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden" style={{ backgroundColor: "#111110" }}>
          <MotionImage
            layoutId={`community-image-${item.slug}`}
            src={item.coverImage}
            alt={item.title}
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

        {/* Details */}
        <div className="dark-section py-16" style={{ backgroundColor: "#111110" }}>
          <div className="content-grid">
            <FadeUp>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12">
                <div>
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
                    {item.organization}
                  </h1>
                  <p
                    className="mt-4 max-w-[600px] text-[var(--fg-muted)] leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem", lineHeight: 1.75 }}
                  >
                    {item.description}
                  </p>
                </div>

                {/* Sidebar */}
                <div
                  className="space-y-5 pt-2"
                  style={{ borderLeft: "1px solid var(--border)", paddingLeft: "2rem" }}
                >
                  <div>
                    <p
                      className="text-[var(--fg-muted)] mb-1"
                      style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
                    >
                      Role
                    </p>
                    <p className="text-[var(--fg)]" style={{ fontFamily: "var(--font-body)", fontSize: "0.9375rem" }}>
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* Content area: What I learned + Gallery */}
        <div className="section-light py-16 md:py-24" style={{ backgroundColor: "#F4F1EC" }}>
          <div className="content-grid">
            
            <FadeUp>
              <h2
                className="mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "-0.02em",
                  color: "var(--fg)",
                }}
              >
                What I Learned
              </h2>
              
              <ul className="space-y-4 mb-16 max-w-[720px]">
                {item.learnings.map((learning, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-[var(--accent)] mt-1.5 shrink-0" style={{ fontSize: "12px" }}>■</span>
                    <span
                      className="text-[var(--fg-muted)] leading-relaxed"
                      style={{ fontFamily: "var(--font-body)", fontSize: "1.0625rem" }}
                    >
                      {learning}
                    </span>
                  </li>
                ))}
              </ul>
            </FadeUp>

            {/* Gallery */}
            <FadeUp delay={0.1}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {item.images.map((img, i) => (
                  <div key={i} className="relative aspect-video rounded-[2px] overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ))}
              </div>
            </FadeUp>
            
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
