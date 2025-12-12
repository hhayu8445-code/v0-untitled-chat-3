import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/constants"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL

  // Static pages
  const staticPages = [
    "",
    "/scripts",
    "/mlo",
    "/vehicles",
    "/clothing",
    "/forum",
    "/decrypt",
    "/upvotes",
    "/membership",
    "/upload",
    "/dashboard",
    "/discord",
  ]

  const staticRoutes = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return staticRoutes
}
