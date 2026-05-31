"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { ReactNode } from "react"

const variants = {
  initial: { y: "0%" },
  enter: { y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 } },
  exit: { y: "0%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname + "-panel"}
          className="fixed inset-0 z-[200] bg-[#111110] flex items-center justify-center pointer-events-none"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={variants}
        >
          <motion.span
            className="text-[#E8E4DC] text-4xl italic opacity-0"
            style={{ fontFamily: "var(--font-display)" }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ times: [0, 0.3, 0.7, 1], duration: 0.9 }}
          >
            Imhussnain
          </motion.span>
        </motion.div>
      </AnimatePresence>
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {children}
      </motion.main>
    </>
  )
}
