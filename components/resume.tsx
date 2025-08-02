"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export default function Resume() {
  const workExperience = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Led the development of the company's flagship product, improving performance by 40%. Mentored junior developers and implemented best practices for code quality.",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions LLC",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple client projects using React, Node.js, and MongoDB. Implemented CI/CD pipelines and automated testing.",
    },
    {
      id: 3,
      role: "Web Developer",
      company: "Creative Agency",
      period: "2016 - 2018",
      description:
        "Created responsive websites for clients across various industries. Collaborated with designers to implement pixel-perfect UIs.",
    },
  ]

  const education = [
    {
      id: 1,
      degree: "B.S. in Computer Science",
      institution: "University of Technology",
      period: "2012 - 2016",
      description: "Graduated with honors. Specialized in web technologies and software engineering.",
    },
    {
      id: 2,
      degree: "Web Development Bootcamp",
      institution: "Code Academy",
      period: "2016",
      description: "Intensive 12-week program focused on modern web development technologies and practices.",
    },
  ]

  const certifications = [
    {
      id: 1,
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      id: 2,
      name: "Professional React Developer",
      issuer: "React Certification Board",
      year: "2021",
    },
    {
      id: 3,
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2020",
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-high-contrast mb-4">Resume</h2>
        <div className="w-20 h-1 bg-high-contrast mx-auto mb-6"></div>
        <p className="text-medium-contrast max-w-2xl mx-auto mb-8">
          My professional journey and qualifications.
        </p>
        <Button size="lg">
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center mb-8">
            <Briefcase className="w-6 h-6 text-high-contrast mr-3" />
            <h3 className="text-2xl font-semibold text-high-contrast">Work Experience</h3>
          </div>

          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-high-contrast">{job.role}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-medium-contrast font-medium">{job.company}</span>
                      <span className="text-subtle-contrast text-sm">{job.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-contrast">{job.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center mb-8">
            <GraduationCap className="w-6 h-6 text-high-contrast mr-3" />
            <h3 className="text-2xl font-semibold text-high-contrast">Education</h3>
          </div>

          <div className="space-y-6 mb-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-high-contrast">{edu.degree}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-medium-contrast font-medium">{edu.institution}</span>
                      <span className="text-subtle-contrast text-sm">{edu.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-medium-contrast">{edu.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center mb-8">
            <Award className="w-6 h-6 text-high-contrast mr-3" />
            <h3 className="text-2xl font-semibold text-high-contrast">Certifications</h3>
          </div>

          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-high-contrast">{cert.name}</h4>
                        <p className="text-medium-contrast text-sm">{cert.issuer}</p>
                      </div>
                      <span className="text-subtle-contrast text-sm">{cert.year}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
