import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface PostFrontmatter {
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  draft: boolean
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string
}

const WRITING_DIR = path.join(process.cwd(), "content", "writing")

export function getAllPosts(): Post[] {
  if (!fs.existsSync(WRITING_DIR)) return []

  const files = fs
    .readdirSync(WRITING_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))

  return files
    .map((file) => {
      const filePath = path.join(WRITING_DIR, file)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(raw)
      const slug = file.replace(/\.(mdx|md)$/, "")

      return {
        slug,
        content,
        title: data.title ?? "",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        tags: data.tags ?? [],
        readingTime: data.readingTime ?? "5 min read",
        draft: data.draft ?? false,
      } as Post
    })
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(WRITING_DIR, `${slug}.mdx`)
  const altPath = path.join(WRITING_DIR, `${slug}.md`)

  const actualPath = fs.existsSync(filePath)
    ? filePath
    : fs.existsSync(altPath)
    ? altPath
    : null

  if (!actualPath) return null

  const raw = fs.readFileSync(actualPath, "utf-8")
  const { data, content } = matter(raw)

  return {
    slug,
    content,
    title: data.title ?? "",
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    tags: data.tags ?? [],
    readingTime: data.readingTime ?? "5 min read",
    draft: data.draft ?? false,
  }
}

export function getRecentPosts(count: number = 4): Post[] {
  return getAllPosts().slice(0, count)
}
