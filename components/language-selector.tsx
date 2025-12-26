"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { type Language, getLanguageName, getLanguageFlag, getAllLanguages } from "@/lib/i18n"
import { useLanguage } from "@/components/language-provider"

const languages = getAllLanguages()

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <span className="text-lg">{getLanguageFlag(language)}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border max-h-80 overflow-y-auto scrollbar-thin" style={{ background: 'rgba(0, 0, 0, 0.95)', borderColor: 'var(--primary)' }}>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang}
            onClick={() => setLanguage(lang)}
            className="text-[var(--text)] hover:bg-white/5"
            style={language === lang ? { background: 'rgba(236, 72, 153, 0.1)' } : {}}
          >
            <span className="mr-2">{getLanguageFlag(lang)}</span>
            {getLanguageName(lang)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
