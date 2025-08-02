"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Layout, Server, Settings, Smartphone } from "lucide-react"

export default function Skills() {
  const frontendSkills = [
    { name: "React.js", level: 95 },
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "HTML5/CSS3", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Redux", level: 80 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "PostgreSQL", level: 70 },
    { name: "RESTful APIs", level: 90 },
    { name: "GraphQL", level: 65 },
  ]

  const otherSkills = [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 70 },
    { name: "AWS", level: 65 },
    { name: "CI/CD", level: 75 },
    { name: "Testing (Jest, React Testing Library)", level: 80 },
    { name: "Responsive Design", level: 95 },
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
        <h2 className="text-3xl md:text-4xl font-bold text-high-contrast mb-4">My Skills</h2>
        <div className="w-20 h-1 bg-high-contrast mx-auto mb-6"></div>
        <p className="text-medium-contrast max-w-2xl mx-auto">
          I've developed expertise in various technologies and tools throughout my career.
        </p>
      </motion.div>

      <Tabs defaultValue="frontend" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="frontend" className="flex items-center gap-2">
              <Layout className="h-4 w-4" />
              <span className="hidden sm:inline">Frontend</span>
            </TabsTrigger>
            <TabsTrigger value="backend" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              <span className="hidden sm:inline">Backend</span>
            </TabsTrigger>
            <TabsTrigger value="other" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              <span className="hidden sm:inline">Other</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="frontend">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {frontendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-high-contrast">{skill.name}</h3>
                      <span className="text-sm text-medium-contrast">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="backend">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {backendSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-high-contrast">{skill.name}</h3>
                      <span className="text-sm text-medium-contrast">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="other">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-high-contrast">{skill.name}</h3>
                      <span className="text-sm text-medium-contrast">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
      >
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-muted-contrast flex items-center justify-center mb-3">
            <Code className="w-8 h-8 text-high-contrast" />
          </div>
          <h4 className="text-center font-medium text-high-contrast">Frontend Development</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-muted-contrast flex items-center justify-center mb-3">
            <Server className="w-8 h-8 text-high-contrast" />
          </div>
          <h4 className="text-center font-medium text-high-contrast">Backend Development</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-muted-contrast flex items-center justify-center mb-3">
            <Database className="w-8 h-8 text-high-contrast" />
          </div>
          <h4 className="text-center font-medium text-high-contrast">Database Design</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-muted-contrast flex items-center justify-center mb-3">
            <Layout className="w-8 h-8 text-high-contrast" />
          </div>
          <h4 className="text-center font-medium text-high-contrast">UI/UX Design</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-muted-contrast flex items-center justify-center mb-3">
            <Smartphone className="w-8 h-8 text-high-contrast" />
          </div>
          <h4 className="text-center font-medium text-high-contrast">Responsive Design</h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-muted-contrast flex items-center justify-center mb-3">
            <Settings className="w-8 h-8 text-high-contrast" />
          </div>
          <h4 className="text-center font-medium text-high-contrast">DevOps</h4>
        </div>
      </motion.div>
    </div>
  )
}
