export interface OpenSourceRepo {
  name: string
  fullName: string
  url: string
  description: string
  language: string
  stars: number
  role: "Author" | "Maintainer" | "Contributor"
}

export const openSourceRepos: OpenSourceRepo[] = [
  {
    name: "TechPhantom-Backend",
    fullName: "Husrocks/TechPhantom-Backend",
    url: "https://github.com/Husrocks/TechPhantom-Backend",
    description: "Backend infrastructure for TechPhantom AI Campus, featuring real-time AI-powered facial attendance and computer vision pipelines.",
    language: "Python",
    stars: 124,
    role: "Author",
  },
  {
    name: "SmartSummarize-FlanT5",
    fullName: "Husrocks/SmartSummarize-FlanT5",
    url: "https://github.com/Husrocks/SmartSummarize-FlanT5",
    description: "Custom fine-tuned Flan-T5-Base model trained on 18,000+ real-world emails for high-performance sequence-to-sequence summarisation.",
    language: "Jupyter Notebook",
    stars: 89,
    role: "Author",
  },
  {
    name: "Automata-Core",
    fullName: "Husrocks/Automata-Core",
    url: "https://github.com/Husrocks/Automata-Core",
    description: "Core subset construction algorithm engine for converting NFA to DFA with interactive graph generation.",
    language: "TypeScript",
    stars: 45,
    role: "Author",
  },
  {
    name: "UniFi-Contracts",
    fullName: "Husrocks/UniFi-Contracts",
    url: "https://github.com/Husrocks/UniFi-Contracts",
    description: "Decentralised finance smart contracts on Ethereum for student micro-lending, expense sharing, and identity verification.",
    language: "Solidity",
    stars: 62,
    role: "Author",
  },
]
