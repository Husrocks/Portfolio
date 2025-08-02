"use client"

import { useEffect, useState } from "react"
import Hero from "@/components/sections/hero"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log("Page loaded, setting loading to false")
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-2xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative">
        <section id="home" className="relative z-10">
          <Hero />
        </section>
      </main>
    </div>
  )
}
