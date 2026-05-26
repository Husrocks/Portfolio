import { getAllPosts } from "@/lib/mdx"
import { NextResponse } from "next/server"

export async function GET() {
  let posts = []
  try {
    posts = getAllPosts()
  } catch {}

  const baseUrl = "https://alexreyes.design"

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Alex Reyes — Writing</title>
    <link>${baseUrl}</link>
    <description>Essays and technical writing on design, engineering, and creative practice by Alex Reyes.</description>
    <language>en-us</language>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${posts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/writing/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/writing/${post.slug}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
