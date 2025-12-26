"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ModernButtonProps {
  children: React.ReactNode
  icon?: LucideIcon
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
  disabled?: boolean
  href?: string
}

export function ModernButton({
  children,
  icon: Icon,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled,
  href,
}: ModernButtonProps) {
  const variants = {
    primary: {
      bg: "var(--primaryBg)",
      shadow: "0px -3px 15px 0px var(--primaryHi) inset",
      color: "var(--primaryFg)",
      glow: "var(--primaryHi)",
    },
    secondary: {
      bg: "var(--secondaryBg)",
      shadow: "0px -3px 15px 0px var(--secondaryHi) inset",
      color: "var(--secondaryFg)",
      glow: "var(--secondaryHi)",
    },
    accent: {
      bg: "var(--accentBg)",
      shadow: "0px -3px 15px 0px var(--accentHi) inset",
      color: "var(--accentFg)",
      glow: "var(--accentHi)",
    },
    outline: {
      bg: "transparent",
      shadow: "0px 0px 0px 2px var(--primary) inset",
      color: "var(--primary)",
      glow: "var(--primaryHi)",
    },
    ghost: {
      bg: "transparent",
      shadow: "none",
      color: "var(--text)",
      glow: "var(--primaryHi)",
    },
  }

  const sizes = {
    sm: { height: "40px", width: "140px", fontSize: "0.875rem" },
    md: { height: "50px", width: "160px", fontSize: "1rem" },
    lg: { height: "60px", width: "180px", fontSize: "1.125rem" },
  }

  const currentVariant = variants[variant]
  const currentSize = sizes[size]

  const buttonContent = (
    <motion.div
      whileHover={{ scale: 1.05, y: 5 }}
      whileTap={{ scale: 0.95 }}
      className={cn("relative inline-block", className)}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className="rounded-[13px] border-none font-['Manrope'] flex items-center justify-center gap-2 relative overflow-visible transition-all duration-200 shimmer"
        style={{
          height: currentSize.height,
          width: currentSize.width,
          fontSize: currentSize.fontSize,
          backgroundColor: currentVariant.bg,
          boxShadow: currentVariant.shadow,
          color: currentVariant.color,
          clipPath: variant !== "ghost" && variant !== "outline" 
            ? 'path("M 0 25 C 0 -5, -5 0, 80 0 S 160 -5, 160 25, 165 50 80 50, 0 55, 0 25")' 
            : 'none',
        }}
      >
        {Icon && <Icon className="h-5 w-5" />}
        <span className="relative z-10">{children}</span>
      </button>
      <span 
        className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[100px] h-[60px] rounded-full blur-[20px] transition-all duration-200 pointer-events-none"
        style={{ backgroundColor: currentVariant.glow }}
      />
    </motion.div>
  )

  if (href) {
    return <a href={href}>{buttonContent}</a>
  }

  return buttonContent
}
