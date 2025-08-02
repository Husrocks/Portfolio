"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cloud, Settings, Sparkles, Zap, Star, Rocket, Target, TrendingUp } from "lucide-react"
import SkillCircle from "@/components/ui/skill-circle"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [isHovered, setIsHovered] = useState(false)
  
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "text-blue-400",
      bgColor: "bg-blue-400",
      bgGradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      glowColor: "shadow-blue-500/25",
      hoverGlow: "hover:shadow-blue-500/40",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 92 },
        { name: "JavaScript", level: 95 },
        { name: "WordPress", level: 85 },
      ],
    },
    {
      title: "Backend Development",
      icon: Database,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/25",
      hoverGlow: "hover:shadow-emerald-500/40",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL", level: 82 },
        { name: "MongoDB", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "text-purple-400",
      bgColor: "bg-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/25",
      hoverGlow: "hover:shadow-purple-500/40",
      skills: [
        { name: "AWS", level: 78 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 80 },
        { name: "Vercel", level: 90 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      color: "text-orange-400",
      bgColor: "bg-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/25",
      hoverGlow: "hover:shadow-orange-500/40",
      skills: [
        { name: "Git/GitHub", level: 92 },
        { name: "Figma", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Blockchain", level: 80 },
      ],
    },
  ]

  const firstRowTechnologies = [
    { name: "React", icon: "⚛️", color: "text-blue-400" },
    { name: "Next.js", icon: "▲", color: "text-black dark:text-white" },
    { name: "TypeScript", icon: "📘", color: "text-blue-600" },
    { name: "Node.js", icon: "🟢", color: "text-green-500" },
    { name: "Python", icon: "🐍", color: "text-yellow-500" },
    { name: "PostgreSQL", icon: "🐘", color: "text-blue-400" },
  ]

  const secondRowTechnologies = [
    { name: "MongoDB", icon: "🍃", color: "text-green-500" },
    { name: "AWS", icon: "☁️", color: "text-orange-500" },
    { name: "Docker", icon: "🐳", color: "text-blue-500" },
    { name: "WordPress", icon: "📝", color: "text-blue-600" },
    { name: "Blockchain", icon: "⛓️", color: "text-purple-500" },
    { name: "Git", icon: "📚", color: "text-orange-600" },
  ]

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background Effects - removed for seamless flow */}
      
      <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
          className="text-center mb-12"
      >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Skills</span>
        </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          A comprehensive overview of my technical skills and expertise across various technologies and frameworks.
        </p>
      </motion.div>

        {/* Skill Categories - 4 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -12,
                rotateY: 5,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group h-full"
            >
              <Card className={`
                h-full glass-card border ${category.borderColor} 
                bg-gradient-to-br ${category.bgGradient}
                ${category.glowColor} ${category.hoverGlow}
                hover:shadow-2xl hover:shadow-${category.color.split('-')[1]}-500/50
                transition-all duration-500 ease-out
                group-hover:border-opacity-80
                relative overflow-hidden
                transform perspective-1000
              `}>
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Floating Elements */}
                <motion.div 
                  className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className={`w-5 h-5 ${category.color} animate-pulse`} />
                </motion.div>

                {/* Star decoration */}
                <motion.div 
                  className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className={`w-4 h-4 ${category.color}`} />
                </motion.div>

                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl glass-card flex items-center justify-center ${category.color} border ${category.borderColor} shadow-lg`}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 10,
                      transition: { duration: 0.3 }
                    }}
                    animate={{ 
                      y: [0, -5, 0],
                      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <category.icon className="w-8 h-8" />
                  </motion.div>
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-white transition-colors duration-300">
                    {category.title}
                  </CardTitle>
              </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skill.name} 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                      <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-foreground group-hover:text-white/90 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <motion.span 
                            className="text-xs text-muted-foreground group-hover:text-white/70 transition-colors duration-300"
                            whileHover={{ scale: 1.1 }}
                          >
                            {skill.level}%
                          </motion.span>
                      </div>
                        <div className="w-full bg-gray-200/20 dark:bg-gray-700/20 rounded-full h-2 glass-card relative overflow-hidden">
                          {/* Animated background glow */}
                          <motion.div
                            className={`absolute inset-0 rounded-full ${category.bgColor} opacity-20 blur-sm`}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ duration: 0.8, delay: skillIndex * 0.2 }}
                            viewport={{ once: true }}
                          />
                          
                          {/* Main progress bar with enhanced filling animation */}
                        <motion.div
                            className={`h-2 rounded-full ${category.bgColor} shadow-lg relative overflow-hidden`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 2.5, 
                              delay: skillIndex * 0.2 + index * 0.1,
                              ease: "easeOut"
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ 
                              scale: 1.02,
                              transition: { duration: 0.2 }
                            }}
                          >
                            {/* Animated shine effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              initial={{ x: "-100%" }}
                              whileInView={{ x: "100%" }}
                              transition={{ 
                                duration: 1.5, 
                                delay: skillIndex * 0.2 + index * 0.1 + 1.5,
                                ease: "easeInOut"
                              }}
                              viewport={{ once: true, amount: 0.3 }}
                            />
                            
                            {/* Pulsing glow effect */}
                            <motion.div
                              className={`absolute inset-0 rounded-full ${category.bgColor} opacity-50`}
                              animate={{ 
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5]
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          </motion.div>
                          
                          {/* Percentage indicator that animates with the bar */}
                          <motion.div
                            className="absolute -top-6 right-0 text-xs font-bold text-white bg-black/50 px-2 py-1 rounded-md"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ 
                              duration: 0.5, 
                              delay: skillIndex * 0.2 + index * 0.1 + 1
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                          >
                            {skill.level}%
                          </motion.div>
                      </div>
                      </motion.div>
                  ))}
                </div>
              </CardContent>

                {/* Hover overlay effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
            </Card>
          </motion.div>
        ))}
      </div>

        {/* Technology Icons with Enhanced Glass Effect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
          <div className="flex items-center justify-center gap-3 mb-8">
            <Target className="w-6 h-6 text-blue-400" />
            <h3 className="text-2xl font-bold text-foreground">
          Technologies I Work With
        </h3>
            <TrendingUp className="w-6 h-6 text-emerald-400" />
          </div>
        
          {/* First Row - Circular Motion */}
        <div className="mb-8 overflow-hidden">
          <motion.div
            className="flex gap-6"
                          animate={{
                x: [0, -100, -200, -100, 0],
                y: [0, -10, 0, 10, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                paused: isHovered
              }}
          >
            {/* Duplicate items for seamless loop */}
            {[...firstRowTechnologies, ...firstRowTechnologies].map((tech, index) => (
                <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 text-center group"
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.4, ease: "easeInOut" }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-3 glass-card border border-white/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 shadow-lg relative overflow-hidden"
                    whileHover={{ 
                      rotate: [0, 3, -3, 0],
                      scale: 1.15,
                      transition: { duration: 0.4, ease: "easeInOut" }
                    }}
                    animate={{ 
                      y: [0, -2, 0],
                      transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }
                    }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-1 right-1 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3 
                      }}
                    />
                    
                    <motion.span 
                      className={`${tech.color} relative z-10`}
                      whileHover={{ 
                        scale: 1.3,
                        transition: { duration: 0.3 }
                      }}
                    >
                  {tech.icon}
                    </motion.span>
                  </motion.div>
                  <motion.p 
                    className="text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tech.name}
                  </motion.p>
                </motion.div>
            ))}
          </motion.div>
        </div>

          {/* Second Row - Circular Motion */}
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6"
                          animate={{
                x: [0, 100, 200, 100, 0],
                y: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                paused: isHovered
              }}
          >
            {/* Duplicate items for seamless loop */}
            {[...secondRowTechnologies, ...secondRowTechnologies].map((tech, index) => (
                <motion.div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 text-center group"
                  whileHover={{ 
                    scale: 1.15,
                    y: -8,
                    transition: { duration: 0.4, ease: "easeIn" }
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-16 h-16 mx-auto mb-3 glass-card border border-white/20 rounded-xl flex items-center justify-center text-2xl group-hover:bg-white/10 group-hover:border-white/40 transition-all duration-300 shadow-lg relative overflow-hidden"
                    whileHover={{ 
                      rotate: [0, -3, 3, 0],
                      scale: 1.15,
                      transition: { duration: 0.4, ease: "easeInOut" }
                    }}
                    animate={{ 
                      y: [0, 2, 0],
                      transition: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 + 1.5 }
                    }}
                  >
                    {/* Animated background glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Floating particles */}
                    <motion.div
                      className="absolute top-1 left-1 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: index * 0.3 + 1 
                      }}
                    />
                    
                    <motion.span 
                      className={`${tech.color} relative z-10`}
                      whileHover={{ 
                        scale: 1.3,
                        transition: { duration: 0.3 }
                      }}
                    >
                  {tech.icon}
                    </motion.span>
                  </motion.div>
                  <motion.p 
                    className="text-sm font-medium text-foreground group-hover:text-white transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {tech.name}
                  </motion.p>
                </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>


    </div>
    </section>
  )
}
