"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Calendar, MapPin, Building, Sparkles, GraduationCap, Award } from "lucide-react"

export default function Resume() {
  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Tech Innovations Inc.",
      location: "Pakistan, Lahore",
      period: "2023 - Present",
      description:
        "Developed scalable web applications using React, Next.js, and Node.js. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "AWS", "PostgreSQL"],
    },
    {
      title: "Frontend Developer",
      company: "Digital Solutions Ltd.",
      location: "Pakistan, Lahore",
      period: "2022 - 2023",
      description:
        "Built responsive web applications and improved website performance. Worked closely with UX designers to create intuitive user interfaces.",
      technologies: ["React", "Vue.js", "JavaScript", "CSS3", "Git"],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Institute for Art and Culture",
      location: "Pakistan, Lahore",
      period: "2019 - 2023",
      description: "Graduated with focus on Software Engineering and Web Technologies.",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Code Academy",
      location: "Online",
      period: "2022",
      description: "Intensive program covering modern web development technologies and best practices.",
    },
  ]

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "React Developer Certification",
  ]

  return (
    <section id="resume" className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            A comprehensive overview of my professional experience, education, and achievements.
          </p>
          <Button 
            className="glass-card border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
            onClick={() => {
              // Create a download link for resume
              const link = document.createElement('a')
              link.href = '/resume.pdf' // You'll need to add this file
              link.download = 'Hussnain_Bashir_Resume.pdf'
              link.click()
            }}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
              <Building className="w-6 h-6 mr-3 text-blue-400" />
              Experience
            </h3>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-foreground text-lg">{exp.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center text-blue-400 font-medium">
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-2" />
                          {exp.location}
                        </div>
                        <div className="flex items-center text-muted-foreground text-sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          {exp.period}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="glass-card border border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-105"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-emerald-400" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -8,
                      rotateY: 2,
                      transition: { duration: 0.3 }
                    }}
                    className="transform perspective-1000"
                  >
                    <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300 relative overflow-hidden group">
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      {/* Floating icons */}
                      <motion.div
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="w-5 h-5 text-blue-400" />
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Award className="w-5 h-5 text-emerald-400" />
                      </motion.div>

                      <CardHeader>
                        <CardTitle className="text-foreground text-lg relative z-10">{edu.degree}</CardTitle>
                        <div className="space-y-2 relative z-10">
                          <div className="flex items-center text-emerald-400 font-medium">
                            <Building className="w-4 h-4 mr-2" />
                            {edu.school}
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4 mr-2" />
                            {edu.location}
                          </div>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            {edu.period}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed relative z-10">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center">
                <Award className="w-6 h-6 mr-3 text-purple-400" />
                Certifications
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -3,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <Card className="glass-card border border-white/20 hover:border-white/40 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <motion.div 
                            className="w-3 h-3 bg-purple-400 rounded-full"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <span className="text-foreground text-sm font-medium">{cert}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
