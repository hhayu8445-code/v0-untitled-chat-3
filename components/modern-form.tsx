"use client"

import { getCurrentHoliday } from "@/lib/holiday-theme"
import { useEffect, useState } from "react"

export function ModernForm({ children, onSubmit, className = "" }: {
  children: React.ReactNode
  onSubmit?: (e: React.FormEvent) => void
  className?: string
}) {
  const [holiday, setHoliday] = useState(getCurrentHoliday())

  useEffect(() => {
    setHoliday(getCurrentHoliday())
  }, [])

  const color = holiday ? holiday.theme.primary : "oklch(0.75 0.15 180)"

  return (
    <>
      <form 
        onSubmit={onSubmit}
        className={`modern-form ${className}`}
        style={{ "--form-color": color } as any}
      >
        {children}
      </form>

      <style jsx>{`
        .modern-form {
          background: radial-gradient(
              47.2% 50% at 50.39% 88.37%,
              rgba(255, 255, 255, 0.08) 0%,
              rgba(255, 255, 255, 0) 100%
            ),
            rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 32px;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modern-form::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          padding: 1px;
          background: linear-gradient(
            150deg,
            rgba(255, 255, 255, 0.3) 0%,
            rgba(255, 255, 255, 0.05) 30%,
            rgba(255, 255, 255, 0.05) 70%,
            rgba(255, 255, 255, 0.3) 100%
          );
          border-radius: inherit;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        .modern-form::after {
          content: "";
          position: absolute;
          inset: -100px;
          background: radial-gradient(circle at center, var(--form-color) 0%, transparent 70%);
          opacity: 0.1;
          z-index: -1;
          filter: blur(40px);
        }
      `}</style>
    </>
  )
}

export function ModernInput({ type = "text", placeholder, value, onChange, className = "" }: {
  type?: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`modern-input ${className}`}
      />

      <style jsx>{`
        .modern-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 12px 16px;
          color: rgba(255, 255, 255, 0.9);
          font-size: 14px;
          transition: all 0.3s ease;
          outline: none;
        }

        .modern-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .modern-input:focus {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  )
}
