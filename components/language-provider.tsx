"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { type Language } from "@/lib/i18n"
import { usePathname, useRouter } from "next/navigation"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Check URL first
    const urlLang = pathname?.split('/')[1] as Language
    const validLangs: Language[] = ['en', 'id', 'es', 'pt', 'de', 'fr', 'ru', 'zh', 'ja', 'ko', 'tr', 'ar']
    
    if (validLangs.includes(urlLang)) {
      setLanguageState(urlLang)
      localStorage.setItem("language", urlLang)
    } else {
      // Check localStorage
      const saved = localStorage.getItem("language") as Language
      if (saved && validLangs.includes(saved)) {
        setLanguageState(saved)
      }
    }
  }, [pathname])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    
    // Update URL
    router.push(`/${lang}`)
    
    window.dispatchEvent(new CustomEvent("languageChange", { detail: lang }))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
