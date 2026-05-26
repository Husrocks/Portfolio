import { Cormorant_Garamond, Syne } from "next/font/google"

/**
 * Display font — Cormorant Garamond 700 italic
 * Used for hero titles, section statements, pull quotes
 */
export const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
  preload: true,
})

/**
 * Body / UI font — Syne 400, 500, 700
 * Used for navigation, body text, card titles, labels, buttons
 */
export const bodyFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  variable: "--font-body",
  display: "swap",
  preload: false,
})

/**
 * Mono font — JetBrains Mono (via Google Fonts)
 * Used for code blocks, tech tags, date strings, section numbers
 */
export const monoFont = Syne({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal"],
  variable: "--font-mono-fallback",
  display: "swap",
  preload: false,
})

// Note: JetBrains Mono is loaded via Google Fonts import in globals.css
// as a CSS @import for the mono variable since next/font/google
// supports it — exporting as combined font variables

export const fontVariables = [
  displayFont.variable,
  bodyFont.variable,
].join(" ")
