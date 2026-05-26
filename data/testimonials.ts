export interface Testimonial {
  id: string
  quote: string
  author: string
  title: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Hussnain doesn't just write code — he engineers solutions. We needed a robust AI integration that could handle thousands of requests seamlessly. Three months later, our entire backend was transformed, and the performance speaks for itself.",
    author: "Priya Mehta",
    title: "Chief Technology Officer",
    company: "Meridian Tech Group",
  },
  {
    id: "t2",
    quote:
      "I've worked with developers who understand the backend and those who know frontend. Hussnain is the rare engineer who builds scalable end-to-end systems effortlessly. The TechPhantom Campus platform shipped on time and our students love it.",
    author: "Daniel Osei",
    title: "Director of IT",
    company: "LGU Admin Board",
  },
  {
    id: "t3",
    quote:
      "The architectural review Hussnain led for our product team was a turning point. In two days, we resolved structural debates that had been open for six months. His microservices frameworks are still how we scale today.",
    author: "Sophie Laurent",
    title: "VP of Engineering",
    company: "Cascade Systems",
  },
  {
    id: "t4",
    quote:
      "Hussnain joined us as a lead technical consultant for six months. In that time, he rebuilt our smart contracts for DeFi protocols, optimized gas fees, and left us with documentation thorough enough that our junior devs caught on immediately.",
    author: "Marcus Webb",
    title: "Founder",
    company: "UniFi Protocols",
  },
  {
    id: "t5",
    quote:
      "Working with Hussnain on our LLM summarization pipeline was the best technical collaboration I've had in a decade. He pushed back on our initial models in the best possible way — and the result is a custom Flan-T5 pipeline that out-performs anything we had planned.",
    author: "Isabelle Cho",
    title: "Lead AI Researcher",
    company: "Vantage Data Labs",
  },
]
