"use client"

import { FRAMEWORKS } from "@/lib/constants"
import type { Framework } from "@/lib/types"
import { cn } from "@/lib/utils"

interface FrameworkSelectorProps {
  selected: Framework | "all"
  onSelect: (framework: Framework | "all") => void
  showAll?: boolean
}

export function FrameworkSelector({ selected, onSelect, showAll = true }: FrameworkSelectorProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {showAll && (
        <button
          onClick={() => onSelect("all")}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
            selected === "all"
              ? "text-white shadow-[0_0_20px_rgba(255,20,147,0.5)] scale-105"
              : "bg-white/5 text-[var(--textDim)] hover:bg-white/10 hover:text-[var(--text)] border border-white/10",
          )}
          style={selected === "all" ? { background: 'var(--primary)' } : {}}
        >
          All Frameworks
        </button>
      )}
      {FRAMEWORKS.map((framework) => (
        <button
          key={framework.id}
          onClick={() => onSelect(framework.id)}
          className={cn(
            "flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105",
            selected === framework.id
              ? "text-white shadow-[0_0_20px_rgba(255,20,147,0.3)]"
              : "bg-white/5 text-[var(--textDim)] hover:bg-white/10 hover:text-[var(--text)] border border-white/10",
          )}
          style={selected === framework.id ? { background: 'rgba(255, 20, 147, 0.2)', borderColor: 'var(--primary)' } : {}}
        >
          <img
            src={framework.logo || "/placeholder.svg"}
            alt={framework.name}
            className="h-6 w-6 rounded object-contain"
          />
          {framework.name}
        </button>
      ))}
    </div>
  )
}

export function FrameworkBadge({ framework }: { framework: Framework }) {
  const info = FRAMEWORKS.find((f) => f.id === framework)
  if (!info) return null

  return (
    <div
      className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-lg transition-all hover:scale-105"
      style={{ backgroundColor: `${info.color}20`, color: info.color, border: `1px solid ${info.color}40` }}
    >
      <img src={info.logo || "/placeholder.svg"} alt={info.name} className="h-5 w-5 rounded object-contain" />
      {info.name}
    </div>
  )
}
