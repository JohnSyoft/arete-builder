import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/api/server/projects"
import { getProjectPagesBySlug, getPageBySlug } from "@/lib/api/server/pages"
import { RuntimeRenderer } from "@/components/runtime/renderer"
import Link from "next/link"
import type { Metadata } from "next"

interface SubdomainPageProps {
  params: {
    slug: string
    pageSlug: string[]
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

    // Handle home page (no pageSlug)
    if (params.pageSlug.length === 0) {
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
    }

    // Handle specific pages
    const pageSlug = params.pageSlug.join("/")
    const page = await getPageBySlug(project._id, pageSlug)

    if (!page) {
      return {
        title: "Page Not Found",
        description: "The requested page could not be found.",
      }
    }

    return {
      title: `${page.name} - ${project.name}`,
      description: page.settings?.description || `${page.name} page of ${project.name}`,
      openGraph: {
        title: `${page.name} - ${project.name}`,
        description: page.settings?.description || `${page.name} page of ${project.name}`,
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${page.name} - ${project.name}`,
        description: page.settings?.description || `${page.name} page of ${project.name}`,
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

  try {
    console.log('Fetching project data for slug:', params.slug, 'pageSlug:', params.pageSlug)
    
    // Fetch project data
    const project = await getProjectBySlug(params.slug)
    if (!project) {
      console.log('Project not found for slug:', params.slug)
      notFound()
    }

    // Fetch all pages for navigation
    const pages = await getProjectPagesBySlug(params.slug)
    if (!pages || pages.length === 0) {
      console.log('No pages found for project:', project._id)
      notFound()
    }

    let currentPage
    let layout

    // Handle home page (no pageSlug)
    if (params.pageSlug.length === 0) {
      currentPage = pages.find((page: any) => page.isHomePage) || pages[0]
    } else {
      // Handle specific pages
      const pageSlug = params.pageSlug.join("/")
      currentPage = await getPageBySlug(project._id, pageSlug)
    }

    if (!currentPage) {
      console.log('Page not found:', params.pageSlug)
      notFound()
    }

    console.log('Rendering subdomain page for project:', project.name, 'page:', currentPage.name)
    
    // Parse the page layout
    try {
      layout = typeof currentPage.layout === 'string' ? JSON.parse(currentPage.layout) : currentPage.layout
    } catch (error) {
      console.error('Error parsing page layout:', error)
      layout = {}
    }

    // Render the page content
    return (
      <div className="min-h-screen bg-white">
        

        {/* Page Content */}
        <main>
          <RuntimeRenderer layout={layout} />
        </main>

        {/* Analytics and tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Analytics tracking
              console.log('Subdomain Page view:', '${project.name}', '${currentPage.name}');
            `,
          }}
        />
      </div>
    )
  } catch (error) {
    console.error('Error fetching project data:', error)
    notFound()
  }
}
