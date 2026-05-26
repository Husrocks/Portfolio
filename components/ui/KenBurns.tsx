"use client"

import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { useAnimationConfig } from "@/lib/animationConfig"
import { useRef } from "react"

interface KenBurnsProps {
  images: {
    src: string
    alt: string
  }[]
}

/**
 * KenBurns — 3-image mosaic arranged like a human hand placed them.
 * Each image has a slow CSS zoom animation running indefinitely.
 * Images are absolutely positioned with rotations for an organic feel,
 * and feature parallax scrolling effects.
 */
export function KenBurns({ images }: KenBurnsProps) {
  const { enable3D } = useAnimationConfig()
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Image 1 (front): moves up faster
  const y1 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-18%"])
  // Image 2 (middle): medium speed
  const y2 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-10%"])
  // Image 3 (back): barely moves
  const y3 = useTransform(scrollYProgress, [0, 0.5], ["0%", "-5%"])

  const configs = [
    {
      className: "ken-burns-1 float-animation-1",
      y: enable3D ? y1 : "0%",
      style: {
        top: "5%",
        right: "10%",
        width: "55%",
        aspectRatio: "16/10",
        rotate: "0deg",
        zIndex: 3,
        boxShadow: "0 24px 64px rgba(17,17,16,0.35)",
      },
    },
    {
      className: "ken-burns-2",
      y: enable3D ? y2 : "0%",
      style: {
        top: "35%",
        right: "30%",
        width: "50%",
        aspectRatio: "16/10",
        rotate: "0deg",
        zIndex: 2,
        boxShadow: "0 16px 48px rgba(17,17,16,0.28)",
      },
    },
    {
      className: "ken-burns-3",
      y: enable3D ? y3 : "0%",
      style: {
        top: "65%",
        right: "5%",
        width: "45%",
        aspectRatio: "16/10",
        rotate: "0deg",
        zIndex: 1,
        boxShadow: "0 12px 36px rgba(17,17,16,0.22)",
      },
    },
  ]

  const displayImages = images.slice(0, 3)

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none h-full"
      aria-hidden="true"
      style={{
        maskImage: "linear-gradient(to right, transparent 0%, transparent 35%, black 65%, black 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, transparent 35%, black 65%, black 100%)",
      }}
    >
      {displayImages.map((img, i) => {
        const config = configs[i]
        return (
          <motion.div
            key={img.src}
            className="absolute overflow-hidden rounded-[4px]"
            style={{
              top: config.style.top,
              right: config.style.right,
              width: config.style.width,
              aspectRatio: config.style.aspectRatio,
              transform: `rotate(${config.style.rotate})`,
              zIndex: config.style.zIndex,
              boxShadow: config.style.boxShadow,
              y: config.y
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className={`object-cover ${config.className}`}
              sizes="(max-width: 768px) 0vw, 40vw"
              priority={i === 0}
            />
          </motion.div>
        )
      })}
    </div>
  )
}
