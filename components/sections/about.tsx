"use client"

import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Coffee, Award, Heart, GraduationCap, Briefcase, Sparkles, User, BookOpen, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function About() {
  const [isStatsInView, setIsStatsInView] = useState(false)
  
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "GraphQL",
    "Tailwind CSS",
    "Express.js",
    "WordPress",
    "Blockchain",
  ]

  const stats = [
    { icon: Code, label: "Lines of Code", value: 100, suffix: "K+", color: "text-blue-400" },
    { icon: Coffee, label: "Cups of Coffee", value: 2500, suffix: "+", color: "text-amber-400" },
    { icon: Award, label: "Awards Won", value: 15, suffix: "+", color: "text-yellow-400" },
    { icon: Heart, label: "Happy Clients", value: 30, suffix: "+", color: "text-red-400" },
  ]

  // Animated Counter Component
  const AnimatedCounter = ({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) => {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const display = useTransform(rounded, (latest) => `${latest}${suffix}`)

    useEffect(() => {
      if (isStatsInView) {
        const controls = animate(count, value, { duration })
        return controls.stop
      }
    }, [isStatsInView, value, count, duration])

    return <motion.span className="text-2xl font-bold text-foreground">{display}</motion.span>
  }

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A passionate Full Stack Developer with expertise in modern web technologies and a drive to create innovative solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative"
          >
            <motion.div 
              className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl glass-card border border-white/20 hover:border-white/40 transition-all duration-300"
              whileHover={{ 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.3 }
              }}
            >
              <img
                src={process.env.NODE_ENV === 'production' ? '/Portfolio/images/about-photo.jpg' : '/images/about-photo.jpg'}
                alt="Hussnain Bashir - Full Stack Developer"
                className="w-full h-full object-cover object-center"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                whileHover={{ 
                  background: "linear-gradient(to top, rgba(0,0,0,0.4), transparent)",
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card border border-white/20 text-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <div className="text-2xl font-bold text-blue-400">2+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Crafting Digital Experiences
              </h3>
              <motion.p 
                className="text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I'm a dedicated Full Stack Developer with a passion for creating exceptional digital experiences. 
                With expertise in both frontend and backend technologies, I bring ideas to life through clean, 
                efficient, and scalable code.
              </motion.p>
              <motion.p 
                className="text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                My journey in web development started with a curiosity about how things work on the internet. 
                Today, I specialize in React, Next.js, Node.js, and modern cloud technologies, always staying 
                up-to-date with the latest industry trends and best practices.
              </motion.p>
              <motion.p 
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community through blog posts and mentoring.
              </motion.p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <GraduationCap className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">Education</h4>
                      <p className="text-sm text-muted-foreground">
                        B.S. Computer Science
                        <br />
                        Institute for Art and Culture
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
                  <CardContent className="p-4 flex items-start space-x-4">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Briefcase className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-foreground">Experience</h4>
                      <p className="text-sm text-muted-foreground">
                        Full Stack Developer
                        <br />
                        2+ Years Experience
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16"
          onViewportEnter={() => setIsStatsInView(true)}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.3 }
                }}
                className="text-center group cursor-pointer"
              >
                <motion.div 
                  className={`w-16 h-16 mx-auto mb-4 rounded-full glass-card border border-white/20 flex items-center justify-center ${stat.color} group-hover:border-white/40 transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <stat.icon className="w-8 h-8" />
                </motion.div>
                <motion.div 
                  className="mb-2"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <motion.div 
                  className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
                  {stat.label}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-foreground text-center">
              Technologies I Work With
            </h3>
            <Zap className="w-6 h-6 text-emerald-400" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -3,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge 
                  variant="secondary" 
                  className="glass-card border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm px-3 py-1 cursor-pointer"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
