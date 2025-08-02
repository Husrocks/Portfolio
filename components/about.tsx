"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, GraduationCap, Heart } from "lucide-react"
import Image from "next/image"

export default function About() {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-high-contrast mb-4">About Me</h2>
        <div className="w-20 h-1 bg-high-contrast mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
            <Image src="/images/about-photo.jpg" alt="About Me" fill className="object-cover" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold text-high-contrast">
            Passionate Developer & Creative Problem Solver
          </h3>
          <p className="text-medium-contrast">
            I'm a full stack developer with over 5 years of experience building web applications and digital
            experiences. My journey in tech began with a curiosity about how websites work, which led me to pursue a
            degree in Computer Science.
          </p>
          <p className="text-medium-contrast">
            I specialize in JavaScript ecosystems, particularly React.js, Node.js, and modern frameworks like Next.js.
            I'm passionate about creating intuitive user interfaces and efficient backend systems that solve real-world
            problems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
            <Card>
              <CardContent className="p-4 flex items-start space-x-4">
                <GraduationCap className="w-6 h-6 text-high-contrast mt-1" />
                <div>
                  <h4 className="font-semibold text-high-contrast">Education</h4>
                  <p className="text-sm text-medium-contrast">
                    B.S. Computer Science, University of Technology
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 flex items-start space-x-4">
                <Briefcase className="w-6 h-6 text-high-contrast mt-1" />
                <div>
                  <h4 className="font-semibold text-high-contrast">Experience</h4>
                  <p className="text-sm text-medium-contrast">5+ years in web development</p>
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2">
              <CardContent className="p-4 flex items-start space-x-4">
                <Heart className="w-6 h-6 text-high-contrast mt-1" />
                <div>
                  <h4 className="font-semibold text-high-contrast">Interests</h4>
                  <p className="text-sm text-medium-contrast">
                    When I'm not coding, I enjoy hiking, photography, and exploring new technologies.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
