import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/mdx"
import { projects } from "@/data/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alexreyes.design"

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/work`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${baseUrl}/work/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  let writingRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = getAllPosts()
    writingRoutes = posts.map((post) => ({
      url: `${baseUrl}/writing/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }))
  } catch {}

  return [...staticRoutes, ...projectRoutes, ...writingRoutes]
}
