import Hero from "@/components/sections/Hero"
import Work from "@/components/sections/Work"
import OpenSource from "@/components/sections/OpenSource"
import TechStack from "@/components/sections/TechStack"
import Community from "@/components/sections/Community"
import ProblemStatement from "@/components/sections/ProblemStatement"
import Services from "@/components/sections/Services"
import Testimonials from "@/components/sections/Testimonials"
import Stats from "@/components/sections/Stats"
import About from "@/components/sections/About"
import Writing from "@/components/sections/Writing"
import FeaturedProject from "@/components/sections/FeaturedProject"
import Contact from "@/components/sections/Contact"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { getRecentPosts } from "@/lib/mdx"

export default function Home() {
  const recentPosts = getRecentPosts(4)
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main id="main-content">
        {/* 01 — Hero (Light) */}
        <Hero />
        {/* 02 — Work (Dark) */}
        <Work />
        {/* 03 — Open Source (Light) */}
        <OpenSource />
        <TechStack />
        <Community />
        {/* 04 — Problem Statement (Dark) */}
        <ProblemStatement />
        {/* 05 — Services (Light) */}
        <Services />
        {/* 06 — Testimonials (Dark) */}
        <Testimonials />
        {/* 07 — Stats (Light) */}
        <Stats />
        {/* 08 — About (Dark) */}
        <About />
        {/* 09 — Writing (Light) */}
        <Writing posts={recentPosts} />
        {/* 10 — Featured Project (Dark) */}
        <FeaturedProject />
        {/* 11 — Contact (Light) */}
        <Contact />
      </main>
      <Footer />
    </>
  )
}
