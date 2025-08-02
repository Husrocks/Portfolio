"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      image: "/placeholder-user.jpg",
      content: "Hussnain is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Senior Developer",
      company: "InnovateLab",
      image: "/placeholder-user.jpg",
      content: "Working with Hussnain was a great experience. He's not only technically skilled but also great at communication and collaboration.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "DesignStudio",
      image: "/placeholder-user.jpg",
      content: "Hussnain's ability to translate design requirements into functional code is impressive. He always goes above and beyond expectations.",
      rating: 5,
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
          What People <span className="text-primary">Say</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
          Here's what colleagues and clients have to say about working with me.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="group"
          >
            <Card className="h-full bg-card dark:bg-card border-border dark:border-border hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h4 className="font-semibold text-foreground dark:text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground dark:text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                  <div className="relative">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="rounded-full object-cover"
                    />
                    <Quote className="absolute -top-2 -right-2 w-4 h-4 text-primary bg-background rounded-full p-0.5" />
                  </div>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 