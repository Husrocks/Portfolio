import { formatStars } from "./utils"

interface GitHubRepo {
  stargazers_count: number
  name: string
  description: string
  language: string
}

/**
 * Fetch star count for a GitHub repository.
 * Cached server-side for 24 hours via Next.js fetch caching.
 * Falls back to the provided default if the API call fails.
 */
export async function fetchRepoStars(
  fullName: string,
  fallback: number = 0
): Promise<number> {
  try {
    const token = process.env.GITHUB_TOKEN
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
    }
    if (token) {
      headers["Authorization"] = `Bearer ${token}`
    }

    const res = await fetch(`https://api.github.com/repos/${fullName}`, {
      headers,
      next: { revalidate: 86400 }, // 24 hours
    })

    if (!res.ok) return fallback

    const data: GitHubRepo = await res.json()
    return data.stargazers_count ?? fallback
  } catch {
    return fallback
  }
}

export function formatRepoStars(stars: number): string {
  return formatStars(stars)
}
