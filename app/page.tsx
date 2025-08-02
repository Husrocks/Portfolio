"use client"

import { useEffect, useState } from "react"

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
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Portfolio Test</h1>
        <p className="text-lg">If you can see this, the page is working!</p>
        <div className="mt-8 p-4 bg-gray-800 rounded">
          <h2 className="text-2xl mb-2">Debug Info:</h2>
          <p>Page loaded successfully</p>
          <p>CSS is working</p>
          <p>JavaScript is working</p>
        </div>
      </div>
    </div>
  )
}
