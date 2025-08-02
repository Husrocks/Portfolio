"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Sample blog posts
const blogPosts = [
  {
    id: 1,
    title: "Building Responsive UIs with Tailwind CSS",
    excerpt: "Learn how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    image: "/placeholder.svg?height=200&width=400",
    date: "June 15, 2023",
    readTime: "5 min read",
    url: "#",
  },
  {
    id: 2,
    title: "State Management in React: Context API vs. Redux",
    excerpt: "A comparison of different state management approaches in React applications.",
    image: "/placeholder.svg?height=200&width=400",
    date: "May 22, 2023",
    readTime: "8 min read",
    url: "#",
  },
  {
    id: 3,
    title: "Optimizing Performance in Next.js Applications",
    excerpt: "Tips and techniques for improving the performance of your Next.js web applications.",
    image: "/placeholder.svg?height=200&width=400",
    date: "April 10, 2023",
    readTime: "6 min read",
    url: "#",
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
        <div className="w-20 h-1 bg-gray-900 dark:bg-white mx-auto mb-6"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Thoughts, insights, and tutorials on web development and technology.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 space-x-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3">{post.excerpt}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-start p-0 hover:bg-transparent" asChild>
                  <Link href={post.url}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button variant="outline" size="lg">
          View All Posts
        </Button>
      </div>
    </div>
  )
}
