"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code, Database, Globe, Shield, Sparkles, Zap, Rocket, Star } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Churn Prediction App",
      techStack: ["Python", "Pandas", "Streamlit", "CSV"],
      role: "ML Engineer (Academic Project)",
      description: "A Streamlit-based ML web app that predicts customer churn using data from CSV files.",
      features: [
        "CSV upload and preprocessing",
        "Real-time prediction with trained ML model",
        "Interactive UI for user-friendly exploration"
      ],
      icon: Database,
      color: "text-cyan-400",
      bgGradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-500/30",
      glowColor: "shadow-cyan-500/25",
      hoverGlow: "hover:shadow-cyan-500/40"
    },
    {
      title: "Crowdfunding DApp",
      techStack: ["Solidity", "Remix IDE", "Ganache", "React"],
      role: "Smart Contract Developer",
      description: "A decentralized crowdfunding platform for launching and supporting fundraising campaigns.",
      features: [
        "Campaign creation and Ethereum-based contribution",
        "Fund withdrawal logic through smart contracts",
        "Automatic campaign validation and status update"
      ],
      icon: Shield,
      color: "text-purple-400",
      bgGradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      glowColor: "shadow-purple-500/25",
      hoverGlow: "hover:shadow-purple-500/40"
    },
    {
      title: "Automata Converter App",
      techStack: ["React", "HTML/CSS", "JavaScript"],
      role: "Frontend Developer & Automata Logic Designer",
      description: "An educational web app to convert between automata (e.g., NFA to DFA, Regex to FA).",
      features: [
        "Visual input and graph-based automata rendering",
        "NFA to DFA and Regex to FA conversions",
        "Step-by-step conversion and simulation view"
      ],
      icon: Code,
      color: "text-emerald-400",
      bgGradient: "from-emerald-500/20 to-green-500/20",
      borderColor: "border-emerald-500/30",
      glowColor: "shadow-emerald-500/25",
      hoverGlow: "hover:shadow-emerald-500/40"
    },
    {
      title: "Unifi DApp – Student Pool & Remittance",
      techStack: ["Hardhat", "Web3.js", "Solidity", "React"],
      role: "Full-Stack Blockchain Developer",
      description: "A blockchain-based DApp for hostel students to manage pooled remittances and shared funds.",
      features: [
        "Transparent student remittance tracking",
        "Smart contract-based fund pooling and disbursement",
        "Secure login and decentralized fund flow logic"
      ],
      icon: Globe,
      color: "text-orange-400",
      bgGradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      glowColor: "shadow-orange-500/25",
      hoverGlow: "hover:shadow-orange-500/40"
    }
  ]

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
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
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A collection of my recent projects showcasing expertise in machine learning, blockchain development, and web applications.
          </p>
        </motion.div>

        {/* Projects Grid - 4 in a row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
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
                h-full glass-card border ${project.borderColor} 
                bg-gradient-to-br ${project.bgGradient}
                ${project.glowColor} ${project.hoverGlow}
                hover:shadow-2xl hover:shadow-${project.color.split('-')[1]}-500/50
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
                  <Zap className={`w-5 h-5 ${project.color} animate-pulse`} />
                </motion.div>

                {/* Star decoration */}
                <motion.div 
                  className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className={`w-4 h-4 ${project.color}`} />
                </motion.div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <motion.div 
                      className={`w-16 h-16 rounded-2xl glass-card flex items-center justify-center ${project.color} border ${project.borderColor} shadow-lg`}
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
                      <project.icon className="w-8 h-8" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-lg font-bold text-foreground mb-2 group-hover:text-white transition-colors duration-300 leading-tight">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center justify-center gap-2">
                        <Rocket className="w-3 h-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground font-medium text-center">
                          {project.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-sm text-center">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-1 text-sm">
                      <Code className="w-3 h-3" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {project.techStack.map((tech, techIndex) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          <Badge
                            variant="secondary"
                            className="glass-card border border-white/20 text-foreground hover:bg-white/10 transition-all duration-300 text-xs px-2 py-1"
                          >
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 flex items-center justify-center gap-1 text-sm">
                      <Sparkles className="w-3 h-3" />
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start text-xs text-muted-foreground group-hover:text-white/80 transition-colors duration-300"
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${project.color} mr-2 mt-1.5 flex-shrink-0 animate-pulse`}></span>
                          <span className="leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-3 justify-center">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="glass-card border-white/20 hover:bg-white/10 transition-all duration-300 text-xs px-3 py-1"
                      >
                        <Github className="w-3 h-3 mr-1" />
                        Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="glass-card border-white/20 hover:bg-white/10 transition-all duration-300 text-xs px-3 py-1"
                      >
                        <ExternalLink className="w-3 h-3 mr-1" />
                        Demo
                      </Button>
                    </motion.div>
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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="glass-card hover:glass-hover bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/20 text-white hover:text-white hover:shadow-2xl transition-all duration-500"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 