import { notFound, redirect } from "next/navigation"
import { getProjectBySlug } from "@/lib/api/server/projects"
import { getProjectPagesBySlug } from "@/lib/api/server/pages"
import { RuntimeRenderer } from "@/components/runtime/renderer"
import Link from "next/link"
import type { Metadata } from "next"

interface SubdomainPageProps {
  params: {
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: SubdomainPageProps): Promise<Metadata> {
  try {
    const project = await getProjectBySlug(params.slug)
    
    if (!project) {
      return {
        title: "Site Not Found",
        description: "The requested website could not be found.",
      }
    }

    const pages = await getProjectPagesBySlug(params.slug)
    const homePage = pages.find((page: any) => page.isHomePage) || pages[0]

    if (!homePage) {
      return {
        title: `${project.name} - Website`,
        description: project.description || `Visit ${project.name}'s website`,
      }
    }

    return {
      title: `${homePage.name} - ${project.name}`,
      description: homePage.settings?.description || `${homePage.name} page of ${project.name}`,
      openGraph: {
        title: `${homePage.name} - ${project.name}`,
        description: homePage.settings?.description || `${homePage.name} page of ${project.name}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${homePage.name} - ${project.name}`,
        description: homePage.settings?.description || `${homePage.name} page of ${project.name}`,
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: "Site Not Found",
      description: "The requested website could not be found.",
    }
  }
}

export default async function SubdomainPage({ params }: SubdomainPageProps) {
  const RESERVED_PATHS = [
    "login",
    "dashboard", 
    "editor",
    "api",
    "admin",
    "404",
    "favicon.ico",
    "robots.txt",
    "sitemap.xml",
    "_next",
    "static",
    "webuilder", // Main app subdomain
    "www",
    "app",
    "vercel",
    "www2"
  ]

  if (RESERVED_PATHS.includes(params.slug)) {
    console.log('Reserved path detected:', params.slug)
    notFound()
  }

  // Redirect to home page using the catch-all route
  redirect(`/${params.slug}`)
}
