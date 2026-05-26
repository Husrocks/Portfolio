export interface StackTag {
  name: string
  category: "Languages" | "Frameworks" | "Backend" | "AI / ML" | "Infrastructure" | "Tools"
}

export const stack: StackTag[] = [
  // Languages
  { name: "TypeScript", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "Python", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "CSS / SCSS", category: "Languages" },

  // Frameworks & Frontend
  { name: "Next.js", category: "Frameworks" },
  { name: "React", category: "Frameworks" },
  { name: "Tailwind CSS", category: "Frameworks" },
  { name: "Framer Motion", category: "Frameworks" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "GraphQL", category: "Backend" },
  { name: "tRPC", category: "Backend" },
  { name: "Prisma", category: "Backend" },

  // AI / ML
  { name: "PyTorch", category: "AI / ML" },
  { name: "TensorFlow", category: "AI / ML" },
  { name: "Hugging Face", category: "AI / ML" },
  { name: "Scikit-learn", category: "AI / ML" },
  { name: "Computer Vision", category: "AI / ML" },
  { name: "LLMs", category: "AI / ML" },

  // Infrastructure
  { name: "Vercel", category: "Infrastructure" },
  { name: "AWS", category: "Infrastructure" },
  { name: "Docker", category: "Infrastructure" },
  { name: "PostgreSQL", category: "Infrastructure" },
  { name: "Redis", category: "Infrastructure" },
  { name: "Cloudflare", category: "Infrastructure" },

  // Tools
  { name: "Figma", category: "Tools" },
  { name: "Linear", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "Notion", category: "Tools" },
  { name: "Raycast", category: "Tools" },
  { name: "Arc", category: "Tools" },
]

export const stackCategories = ["Languages", "Frameworks", "Backend", "AI / ML", "Infrastructure", "Tools"] as const

export function getStackByCategory(category: StackTag["category"]): StackTag[] {
  return stack.filter((item) => item.category === category)
}
