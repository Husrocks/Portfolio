import { useReducedMotion } from "framer-motion"

export function useAnimationConfig() {
  const shouldReduce = useReducedMotion()
  return {
    // For transform-based animations
    initial: shouldReduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    // Durations
    fast: shouldReduce ? 0.01 : 0.3,
    normal: shouldReduce ? 0.01 : 0.6,
    slow: shouldReduce ? 0.01 : 1.0,
    // Disable 3D entirely
    enable3D: !shouldReduce,
    // Disable cursor
    enableCursor: !shouldReduce,
    // Marquee: pause when reduced motion
    marqueePlay: shouldReduce ? "paused" : "running",
  }
}
