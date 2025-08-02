"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface SkillCircleProps {
  name: string
  level: number
  icon: LucideIcon
  color: string
}

export default function SkillCircle({ name, level, icon: Icon, color }: SkillCircleProps) {
  const circumference = 2 * Math.PI * 45 // radius = 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (level / 100) * circumference

  return (
    <motion.div
      className="relative flex flex-col items-center"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Progress circle */}
          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDasharray}
            initial={{ strokeDashoffset: strokeDasharray }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 2, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Icon in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon className={`w-8 h-8 ${color}`} />
        </div>
      </div>
      
      <div className="mt-2 text-center">
        <div className="text-sm font-semibold text-foreground">{name}</div>
        <div className="text-xs text-muted-foreground">{level}%</div>
      </div>
    </motion.div>
  )
} 