"use client"

import { useState, useEffect } from "react"

export function useCountUp(target: number, duration = 1200, start = false) {
  const [value, setValue] = useState(0)
  
  useEffect(() => {
    if (!start) {
      setValue(0)
      return
    }
    
    setValue(0) // Reset to 0 when starting or when target changes
    let startTime: number
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)
    
    const frame = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setValue(Math.round(easeOut(progress) * target))
      
      if (progress < 1) {
        requestAnimationFrame(frame)
      }
    }
    
    requestAnimationFrame(frame)
  }, [target, duration, start])
  
  return value
}
