export interface Project {
  slug: string
  title: string
  client: string
  year: number
  categories: string[]
  coverImage: string
  description: string
  featured: boolean
  nextProject: string
  link?: string
}

export const projects: Project[] = [
  {
    slug: "ai-campus-management",
    title: "TechPhantom AI Campus",
    client: "AI Campus Management System",
    year: 2024,
    categories: ["AI / ML", "Full-Stack", "Computer Vision"],
    coverImage: "/Portfolio/images/projects/ai-campus.jpg",
    description:
      "A production-grade Campus Management System featuring real-time AI-powered facial attendance, automated course management, and a robust administrative dashboard — powered by Computer Vision and Deep Learning.",
    featured: true,
    nextProject: "smart-summarize",
    link: "https://ai-campus-management-system.vercel.app/",
  },
  {
    slug: "smart-summarize",
    title: "SmartSummarize",
    client: "End-to-End LLM Email Platform",
    year: 2024,
    categories: ["AI / ML", "LLM", "Full-Stack"],
    coverImage: "/Portfolio/images/projects/smart-summarize.jpg",
    description:
      "A high-performance AI platform that transforms long emails into concise summaries using a custom fine-tuned Flan-T5-Base model trained on 18,000+ real-world emails.",
    featured: false,
    nextProject: "automata-converter",
    link: "https://husrocks.github.io/smart-email-summarizer/",
  },
  {
    slug: "automata-converter",
    title: "Automata Converter",
    client: "NFA → DFA Interactive Tool",
    year: 2024,
    categories: ["Web App", "Computer Science", "Education"],
    coverImage: "/Portfolio/images/projects/automata-converter.jpg",
    description:
      "An interactive web application for learning automata theory — converting Non-Deterministic Finite Automata (NFA) to Deterministic Finite Automata (DFA) using the subset construction algorithm.",
    featured: false,
    nextProject: "gifthub",
    link: "https://husrocks.github.io/Automata-Converter/",
  },
  {
    slug: "gifthub",
    title: "GiftHub",
    client: "E-Commerce Gift Platform",
    year: 2023,
    categories: ["E-Commerce", "Full-Stack", "Design Engineering"],
    coverImage: "/Portfolio/images/projects/gifthub.jpg",
    description:
      "A full-featured e-commerce platform built specifically for gift shopping — curated collections, personalised recommendations, and a seamless checkout experience.",
    featured: false,
    nextProject: "unifi-dapp",
    link: "https://husrocks.github.io/GiftHub/",
  },
  {
    slug: "unifi-dapp",
    title: "UniFi",
    client: "Decentralized Finance Platform",
    year: 2024,
    categories: ["Web3", "DeFi", "Blockchain"],
    coverImage: "/Portfolio/images/projects/unifi-dapp.jpg",
    description:
      "A decentralised finance platform designed specifically for students — enabling expense sharing, micro-lending, scholarships, remittances, credit scoring, and identity verification all on-chain.",
    featured: false,
    nextProject: "oxygen-gym",
    link: "https://husrocks.github.io/unifi-dapp/",
  },
  {
    slug: "oxygen-gym",
    title: "Oxygen Gym",
    client: "Gym Landing Page",
    year: 2023,
    categories: ["Web Design", "Next.js", "Animation"],
    coverImage: "/Portfolio/images/projects/oxygen-gym.jpg",
    description:
      "A high-performance, single-page gym landing page built with Next.js, React, Tailwind CSS, and Framer Motion — delivering premium animations and a bold visual identity.",
    featured: false,
    nextProject: "ai-campus-management",
    link: "https://husrocks.github.io/Oxygen-2.0/",
  },
]

export const featuredProject = projects[0]
