import { cn } from "@/lib/utils"

interface TagProps {
  children: React.ReactNode
  className?: string
  amber?: boolean
}

/**
 * Tag — JetBrains Mono pill for tech stack, categories, etc.
 * Default: mono-bg/mono-fg. amber=true: amber border on hover.
 */
export function Tag({ children, className, amber = false }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-sm text-[11px] tracking-[0.08em] uppercase",
        "font-mono bg-[var(--mono-bg)] text-[var(--mono-fg)]",
        "border border-transparent transition-all duration-200",
        amber && "hover:border-[var(--accent)] hover:text-[var(--fg)] cursor-default",
        className
      )}
    >
      {children}
    </span>
  )
}
