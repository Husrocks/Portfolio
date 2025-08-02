"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, MousePointer, Clock, TrendingUp, Users, Download } from "lucide-react"

interface AnalyticsData {
  pageViews: number
  uniqueVisitors: number
  averageTimeOnSite: number
  mostViewedSection: string
  downloads: number
  interactions: number
}

export function Analytics() {
  const [analytics, setAnalytics] = useState<AnalyticsData>({
    pageViews: 1247,
    uniqueVisitors: 892,
    averageTimeOnSite: 3.2,
    mostViewedSection: "Projects",
    downloads: 156,
    interactions: 2341
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById("analytics")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      title: "Page Views",
      value: analytics.pageViews.toLocaleString(),
      icon: Eye,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Unique Visitors",
      value: analytics.uniqueVisitors.toLocaleString(),
      icon: Users,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      title: "Avg. Time (min)",
      value: analytics.averageTimeOnSite.toString(),
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      title: "Downloads",
      value: analytics.downloads.toLocaleString(),
      icon: Download,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    },
    {
      title: "Interactions",
      value: analytics.interactions.toLocaleString(),
      icon: MousePointer,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10"
    },
    {
      title: "Growth",
      value: "+12.5%",
      icon: TrendingUp,
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10"
    }
  ]

  return (
    <div id="analytics" className="container mx-auto px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground dark:text-foreground mb-4">
          Portfolio <span className="text-primary">Analytics</span>
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
        <p className="text-xl text-muted-foreground dark:text-muted-foreground max-w-3xl mx-auto">
          Track the performance and engagement of my portfolio website.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-foreground">{stat.title}</CardTitle>
                    <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {stat.title === "Growth" ? "vs last month" : "Total"}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>

      {/* Most Viewed Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Most Viewed Section</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-primary">{analytics.mostViewedSection}</p>
                <p className="text-muted-foreground">Most engaging content</p>
              </div>
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
} 