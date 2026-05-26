import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Nocturnal Editorial palette — consumed via CSS vars
        border: "var(--border)",
        input: "var(--border)",
        ring: "var(--accent)",
        background: "var(--bg)",
        foreground: "var(--fg)",
        // Semantic tokens
        accent: {
          DEFAULT: "#D4952A",
          dark: "#B07D1A",
        },
        surface: "var(--surface)",
        // Shadcn compat (needed by existing ui/ components)
        primary: {
          DEFAULT: "#D4952A",
          foreground: "#1C1C1A",
        },
        secondary: {
          DEFAULT: "var(--surface)",
          foreground: "var(--fg)",
        },
        destructive: {
          DEFAULT: "#C0392B",
          foreground: "#F4F1EC",
        },
        muted: {
          DEFAULT: "var(--surface)",
          foreground: "var(--fg-muted)",
        },
        popover: {
          DEFAULT: "var(--bg)",
          foreground: "var(--fg)",
        },
        card: {
          DEFAULT: "var(--surface)",
          foreground: "var(--fg)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "Menlo", "monospace"],
      },
      fontSize: {
        "hero": ["clamp(6rem,10vw,7.5rem)", { lineHeight: "1.0", letterSpacing: "-0.02em" }],
        "hero-mobile": ["clamp(3rem,8vw,3.5rem)", { lineHeight: "1.05" }],
        "section-headline": ["clamp(2rem,5vw,4rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-sm": ["1.75rem", { lineHeight: "1.2" }],
        "label": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.1em" }],
      },
      maxWidth: {
        "content": "1200px",
        "prose-wide": "720px",
        "prose": "680px",
      },
      spacing: {
        "section": "120px",
        "section-mobile": "72px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        // Accordion (Shadcn compat)
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Ken Burns slow zoom
        "ken-burns": {
          "0%": { transform: "scale(1.0) translate(0, 0)" },
          "100%": { transform: "scale(1.08) translate(-1%, -1%)" },
        },
        "ken-burns-alt": {
          "0%": { transform: "scale(1.05) translate(0, 0)" },
          "100%": { transform: "scale(1.0) translate(1%, 1%)" },
        },
        // Horizontal marquee (testimonials + client logos)
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Fade in up
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        // Slide in from bottom (page transition)
        "slide-in-bottom": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "slide-out-top": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ken-burns": "ken-burns 18s ease-in-out infinite alternate",
        "ken-burns-alt": "ken-burns-alt 22s ease-in-out infinite alternate",
        "marquee": "marquee 32s linear infinite",
        "marquee-slow": "marquee 48s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
      transitionTimingFunction: {
        "ease-out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
} satisfies Config

export default config
