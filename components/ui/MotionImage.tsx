"use client"

import { motion } from "framer-motion"
import Image, { ImageProps } from "next/image"
import { forwardRef } from "react"

export const MotionImage = motion.create(
  forwardRef<HTMLImageElement, ImageProps>((props, ref) => (
    <Image ref={ref} {...props} />
  ))
)
