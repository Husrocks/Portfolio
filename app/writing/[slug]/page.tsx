import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ProgressBar } from "@/components/ui/ProgressBar"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { getAllPosts, getPostBySlug } from "@/lib/mdx"
import { formatDate } from "@/lib/utils"
import { Tag } from "@/components/ui/Tag"

export function generateStaticParams() {
  try {
    return getAllPosts().map((post) => ({ slug: post.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — Hussnain Bashir`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default function WritingPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      <CustomCursor />
      <ProgressBar />
      <Header />
      <main
        id="main-content"
        className="section-light min-h-screen pt-28 pb-24"
        style={{ backgroundColor: "#F4F1EC" }}
      >
        <article className="content-grid">
          <div className="max-w-[680px] mx-auto">
            {/* Meta */}
            <div className="mb-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <h1
                className="mb-4"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 5vw, 3.25rem)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  color: "var(--fg)",
                }}
              >
                {post.title}
              </h1>

              <div
                className="flex items-center gap-4 text-[var(--fg-muted)]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.06em" }}
              >
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Rule */}
            <hr style={{ borderColor: "var(--border)", marginBottom: "2.5rem" }} />

            {/* Post content */}
            <div
              className="prose max-w-none"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.0625rem",
                lineHeight: 1.85,
                color: "var(--fg)",
              }}
            >
              {/* Render plain content — MDX rendering would require next-mdx-remote setup */}
              {post.content.split("\n\n").map((paragraph, i) => {
                if (paragraph.startsWith("## ")) {
                  return (
                    <h2
                      key={i}
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        fontStyle: "italic",
                        letterSpacing: "-0.02em",
                        marginTop: "2.5rem",
                        marginBottom: "1rem",
                        color: "var(--fg)",
                      }}
                    >
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("**") || paragraph.startsWith("1.")) {
                  return (
                    <p key={i} style={{ marginBottom: "1.25rem" }}>
                      {paragraph}
                    </p>
                  )
                }
                return (
                  <p key={i} style={{ marginBottom: "1.5rem" }}>
                    {paragraph.replace(/^\*\*|^- /, "")}
                  </p>
                )
              })}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
