import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AuthProvider } from "@/components/auth-provider"
import { AppWrapper } from "@/components/app-wrapper"
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_LOGO, SEO_KEYWORDS } from "@/lib/constants"
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
  keywords: SEO_KEYWORDS,
  authors: [{ name: "FiveM Tools Team", url: SITE_URL }],
  creator: "FiveM Tools V7",
  publisher: "FiveM Tools",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "id-ID": `${SITE_URL}/id`,
      "es-ES": `${SITE_URL}/es`,
      "pt-BR": `${SITE_URL}/pt`,
      "de-DE": `${SITE_URL}/de`,
      "fr-FR": `${SITE_URL}/fr`,
      "ru-RU": `${SITE_URL}/ru`,
      "zh-CN": `${SITE_URL}/zh`,
      "ja-JP": `${SITE_URL}/ja`,
      "ko-KR": `${SITE_URL}/ko`,
      "tr-TR": `${SITE_URL}/tr`,
      "ar-SA": `${SITE_URL}/ar`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["id_ID"],
    url: SITE_URL,
    title: `${SITE_NAME} - #1 FiveM Resource Hub | Scripts, MLO, Decrypt, Upvotes`,
    description:
      "Download Free FiveM Scripts, MLO Maps, Vehicles, EUP Clothing. Decrypt CFX V7, FiveM Upvotes Bot, Leak Scripts. QBCore, ESX, QBox Framework Resources.",
    siteName: SITE_NAME,
    images: [
      {
        url: SITE_LOGO,
        width: 512,
        height: 512,
        alt: "FiveM Tools V7 - Premium FiveM Resource Hub",
        type: "image/png",
      },
      {
        url: "https://r2.fivemanage.com/GTB2ekcdxMdnkeOh40eMi/fivembanner.gif",
        width: 1200,
        height: 630,
        alt: "FiveM Tools V7 Banner - Scripts, MLO, Decrypt, Upvotes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} - FiveM Scripts, MLO, Decrypt CFX, Upvotes`,
    description: "Free FiveM Resources: Scripts, MLO, Vehicles, EUP, Decrypt CFX V7, Upvotes Bot. QBCore, ESX, QBox.",
    images: [SITE_LOGO],
    creator: "@fivemtools",
    site: "@fivemtools",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: SITE_LOGO,
    shortcut: SITE_LOGO,
    apple: SITE_LOGO,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: SITE_LOGO,
    },
  },
  verification: {
    google: "1C9OLiOYFZjjSl2iE84XV83Ga4pT7ScpQxcUnKETTj0",
  },
  category: "Gaming",
  classification: "FiveM Resources, GTA V Mods, Gaming Tools",
  generator: "Next.js",
  applicationName: SITE_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#0d1117",
    "msapplication-TileColor": "#0d1117",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
  },
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
    <html lang="en" className={`dark ${geist.variable} ${geistMono.variable}`}>
      <head>
        <meta name="google-site-verification" content="1C9OLiOYFZjjSl2iE84XV83Ga4pT7ScpQxcUnKETTj0" />
        <link rel="dns-prefetch" href="https://cdn.discordapp.com" />
        <link rel="preconnect" href="https://cdn.discordapp.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              alternateName: ["FiveM Tools", "FiveMTools", "FiveM Resources Hub"],
              url: SITE_URL,
              description: SITE_DESCRIPTION,
              publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                logo: {
                  "@type": "ImageObject",
                  url: SITE_LOGO,
                },
              },
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/search?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
              sameAs: ["https://discord.gg/fivemtools"],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: SITE_NAME,
              applicationCategory: "GameApplication",
              operatingSystem: "Windows",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "2500",
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const cookies = document.cookie.split(';');
                for (let cookie of cookies) {
                  const [name, value] = cookie.trim().split('=');
                  if (name === 'csrf-token') {
                    window.__CSRF_TOKEN__ = decodeURIComponent(value);
                    break;
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased scrollbar-thin">
        <AuthProvider>
          <AppWrapper>{children}</AppWrapper>
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
