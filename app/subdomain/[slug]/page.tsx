import { notFound, redirect } from "next/navigation"
import { getProject, getProjectPages } from "@/lib/api/server"

interface SubdomainPageProps {
  params: {
    slug: string
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
    notFound()
  }

  try {
    // Fetch data server-side using the slug as projectId
    const [project, pages] = await Promise.all([
      getProject(params.slug),
      getProjectPages(params.slug)
    ])
    
    if (!project) {
      notFound()
    }

    // Find the home page or first page
    const homePage = pages.find((page: any) => page.isHomePage) || pages[0]
    if (!homePage) {
      notFound()
    }

    // Redirect to the home page with /site prefix
    redirect(`/site/${params.slug}/${homePage.slug}`)
  } catch (error) {
    console.error('Error fetching project data:', error)
    notFound()
  }
}
