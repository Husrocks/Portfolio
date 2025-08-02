"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Blog() {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for creating maintainable and scalable React applications with modern patterns and tools.",
      image: "/placeholder.svg?height=200&width=400&text=React+Development",
      category: "React",
      date: "2024-01-15",
      readTime: "5 min read",
      slug: "building-scalable-react-applications",
    },
    {
      title: "The Future of Web Development",
      excerpt: "Exploring emerging technologies and trends that will shape the future of web development in 2024 and beyond.",
      image: "/placeholder.svg?height=200&width=400&text=Web+Development",
      category: "Technology",
      date: "2024-01-10",
      readTime: "8 min read",
      slug: "future-of-web-development",
    },
    {
      title: "Optimizing Performance in Next.js",
      excerpt: "Discover advanced techniques for optimizing performance in Next.js applications for better user experience.",
      image: "/placeholder.svg?height=200&width=400&text=Next.js+Performance",
      category: "Next.js",
      date: "2024-01-05",
      readTime: "6 min read",
      slug: "optimizing-nextjs-performance",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
          Latest <span className="text-primary">Insights</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
          Sharing knowledge and insights about web development, technology trends, and best practices.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="h-full bg-card dark:bg-card border-border dark:border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-foreground dark:text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground dark:text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground dark:text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                >
                  <span className="flex items-center group-hover/btn:underline">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
        >
          View All Posts
        </Button>
      </motion.div>
    </div>
  )
}
