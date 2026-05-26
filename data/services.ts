export interface ServiceDeliverable {
  text: string
}

export interface Service {
  id: string
  name: string
  description: string
  deliverables: string[]
  engagement: string
}

export const services: Service[] = [
  {
    id: "ai-ml-solutions",
    name: "AI & Machine Learning Solutions",
    description:
      "End-to-end integration of LLMs, Computer Vision models, and deep learning architectures to build intelligent, high-performance applications.",
    deliverables: [
      "Custom LLM fine-tuning (e.g., Flan-T5, LLaMA)",
      "Computer Vision pipelines for real-time tracking",
      "Model deployment and API integration",
    ],
    engagement: "Typical engagement: 4–12 weeks, fixed scope",
  },
  {
    id: "backend-infrastructure",
    name: "Backend Infrastructure & APIs",
    description:
      "Robust, scalable server-side architecture designed to handle complex data flows, user authentication, and high-volume requests.",
    deliverables: [
      "RESTful and GraphQL API development",
      "Database architecture and optimization (SQL/NoSQL)",
      "Microservices and cloud deployment",
    ],
    engagement: "Typical engagement: 3–6 months, T&M or fixed",
  },
  {
    id: "full-stack-web",
    name: "Full-Stack Web Development",
    description:
      "Production-ready web applications built with modern frameworks like Next.js and React, combining pixel-perfect UI with rock-solid logic.",
    deliverables: [
      "Single Page Applications (SPAs) & SSR platforms",
      "Responsive, interactive user interfaces",
      "Performance auditing and Lighthouse optimization",
    ],
    engagement: "Typical engagement: 4–8 weeks, fixed scope",
  },
  {
    id: "web3-defi",
    name: "Web3 & Blockchain Development",
    description:
      "Decentralised applications and smart contract development for DeFi platforms, ensuring security, transparency, and efficiency.",
    deliverables: [
      "Ethereum/Solidity smart contract development",
      "DApp frontend integration (Web3.js/Ethers.js)",
      "Tokenomics and on-chain protocol design",
    ],
    engagement: "Typical engagement: 6–10 weeks, fixed scope",
  },
]
