import { notFound } from "next/navigation"
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

  try {
    console.log('=== SUBDOMAIN HOME PAGE DEBUG ===')
    console.log('Fetching project data for slug:', params.slug)
    
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

    // Find the home page
    const homePage = pages.find((page: any) => page.isHomePage) || pages[0]
    if (!homePage) {
      console.log('No home page found for project:', project._id)
      notFound()
    }

    console.log('Rendering home page for project:', project.name, 'page:', homePage.name)
    
    // Parse the page layout
    let layout
    try {
      layout = typeof homePage.layout === 'string' ? JSON.parse(homePage.layout) : homePage.layout
    } catch (error) {
      console.error('Error parsing page layout:', error)
      layout = {}
    }

    // Render the home page content directly
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
       

        {/* Page Content */}
        <main>
          <RuntimeRenderer layout={layout} />
        </main>

        {/* Analytics and tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Analytics tracking
              console.log('Subdomain Home Page view:', '${project.name}', '${homePage.name}');
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
