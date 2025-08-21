import type { MetadataRoute } from "next"
import { db } from "@/lib/db"
import { runtimeUtils } from "@/lib/runtime-utils"

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = db.projects.getAll()
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add main site pages
  sitemapEntries.push({
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 1,
  })

  // Add project pages
  projects.forEach((project) => {
    const projectSitemap = runtimeUtils.generateSitemap(project)
    sitemapEntries.push(...projectSitemap)
  })

  return sitemapEntries
}
