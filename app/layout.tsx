import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AuthProvider } from "@/components/auth-provider"
import { AppWrapper } from "@/components/app-wrapper"
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} - FiveM Scripts, MLO, Vehicles, Decrypt CFX, Upvotes Free`,
    template: `%s | ${SITE_NAME} - FiveM Resources`,
  },
  description: SITE_DESCRIPTION,
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "dark",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased scrollbar-thin" suppressHydrationWarning>
        <AuthProvider>
          <AppWrapper>{children}</AppWrapper>
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
