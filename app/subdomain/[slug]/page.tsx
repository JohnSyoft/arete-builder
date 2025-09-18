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
    console.log('Fetching project data for slug:', params.slug)
    
    // Fetch data server-side using the slug to find project by slug
    const [project, pages] = await Promise.all([
      getProjectBySlug(params.slug),
      getProjectPagesBySlug(params.slug)
    ])
    
    console.log('Project data:', { 
      project: project ? { id: project._id, name: project.name, slug: project.slug } : null,
      pagesCount: pages?.length || 0,
      pages: pages?.map((p: any) => ({ id: p._id, slug: p.slug, isHomePage: p.isHomePage })) || []
    })
    
    if (!project) {
      console.log('Project not found for slug:', params.slug)
      notFound()
    }

    // Find the home page or first page
    const homePage = pages.find((page: any) => page.isHomePage) || pages[0]
    if (!homePage) {
      console.log('No pages found for project:', project._id)
      notFound()
    }

    console.log('Redirecting to:', `/site/${project._id}/${homePage.slug}`)
    // Redirect to the home page with /site prefix using project ID
    redirect(`/site/${project._id}/${homePage.slug}`)
  } catch (error) {
    console.error('Error fetching project data:', error)
    notFound()
  }
}
