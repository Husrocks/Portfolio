"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 2
      })
    }, 40)

    return () => clearInterval(timer)
  }, [])

  return (
          <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-[#0ebab1] mb-2">HB</h1>
          <p className="text-muted-foreground">Loading Portfolio...</p>
        </motion.div>

        <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
          <motion.div
                            className="h-full bg-gradient-to-r from-[#0ebab1] to-teal-400 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
                      className="text-sm text-muted-foreground mt-4"
        >
          {progress}%
        </motion.p>
      </div>
    </div>
  )
}
