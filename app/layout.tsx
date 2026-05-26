import { Cormorant_Garamond, Syne, JetBrains_Mono } from "next/font/google"
import type React from "react"
import { CustomCursor } from "@/components/layout/CustomCursor"
import { ScrollProgress } from "@/components/layout/ScrollProgress"
import "./globals.css"

const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
})

const bodyFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
})

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Alex Reyes — Creative Technologist & Design Engineer",
    template: "%s | Alex Reyes",
  },
  description:
    "Senior creative technologist and independent design engineer with 9 years of experience at the intersection of visual craft and engineering excellence. Available for consulting, fractional creative direction, and select projects.",
  keywords: [
    "creative technologist",
    "design engineer",
    "brand identity",
    "frontend development",
    "product design",
    "UX",
    "freelance",
  ],
  authors: [{ name: "Alex Reyes" }],
  creator: "Alex Reyes",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexreyes.design",
    siteName: "Alex Reyes",
    title: "Alex Reyes — Creative Technologist & Design Engineer",
    description:
      "Senior creative technologist with 9 years at the intersection of visual craft and engineering.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Alex Reyes — Creative Technologist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Reyes — Creative Technologist & Design Engineer",
    description:
      "Senior creative technologist with 9 years at the intersection of visual craft and engineering.",
    creator: "@alexreyes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://alexreyes.design",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} cursor-none`}
    >
      <body className="font-body antialiased bg-[var(--bg)] text-[var(--fg)]" suppressHydrationWarning>
        <CustomCursor />
        <ScrollProgress />
        {/* Skip to main content — accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
