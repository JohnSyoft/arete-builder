import { notFound, redirect } from "next/navigation"
import { getProjectBySlug } from "@/lib/api/server/projects"
import { getProjectPagesBySlug } from "@/lib/api/server/pages"

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
    // Fetch data server-side using the slug to find project by slug
    const [project, pages] = await Promise.all([
      getProjectBySlug(params.slug),
      getProjectPagesBySlug(params.slug)
    ])
    console.log({project,pages})
    
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
