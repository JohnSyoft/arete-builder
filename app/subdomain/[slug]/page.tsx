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
      console.log('Available projects with similar slugs should be checked in database')
      notFound()
    }

    // Find the home page or first page
    const homePage = pages.find((page: any) => page.isHomePage) || pages[0]
    if (!homePage) {
      console.log('No pages found for project:', project._id)
      notFound()
    }

    console.log('Rendering subdomain page for project:', project.name, 'page:', homePage.name)
    
    // Parse the page layout
    let layout
    try {
      layout = typeof homePage.layout === 'string' ? JSON.parse(homePage.layout) : homePage.layout
    } catch (error) {
      console.error('Error parsing page layout:', error)
      layout = {}
    }

    // Render the page content directly instead of redirecting
    return (
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <a href={`/site/${project._id}/${pages.find((p: any) => p.isHomePage)?.slug || 'home'}`} className="text-xl font-bold text-gray-900">
                  {project.name}
                </a>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8">
                {pages.filter((p: any) => !p.isHomePage && p.pageType !== "cms").map((navPage: any) => (
                  <Link
                    key={navPage._id}
                    href={`/site/${project._id}/${navPage.slug}`}
                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    {navPage.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main>
          <RuntimeRenderer layout={layout} />
        </main>

        {/* Analytics and tracking */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Analytics tracking
              console.log('Subdomain Page view:', '${project.name}', '${homePage.name}');
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
