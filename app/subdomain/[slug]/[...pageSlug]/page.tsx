import { notFound } from "next/navigation"
import { getProjectBySlug } from "@/lib/api/server/projects"
import { getProjectPagesBySlug, getPageBySlug } from "@/lib/api/server/pages"
import { getCollectionItemBySlug } from "@/lib/api/server/collections"
import { RuntimeRenderer } from "@/components/runtime/renderer"
import Link from "next/link"
import type { Metadata } from "next"

interface SubdomainPageProps {
  params: {
    slug: string
    pageSlug: string[]
  }
}

// Helper function to determine if this is a CMS detail page
async function getCMSItemData(projectSlug: string, slugSegments: string[]) {
  if (slugSegments.length !== 2) return null
  
  const [collectionSlug, itemSlug] = slugSegments
  
  try {
    // First get the project to get the project ID
    const project = await getProjectBySlug(projectSlug)
    if (!project) return null
    
    // Check if there's a CMS detail page for this collection
    const pages = await getProjectPagesBySlug(projectSlug)
    const detailPage = pages.find((page: any) => 
      page.pageType === "cms" && 
      page.cmsPageType === "detail" && 
      page.slug === `${collectionSlug}/:id`
    )
    if (!detailPage) return null
    
    // Fetch the CMS item data using collection slug and item slug
    const item = await getCollectionItemBySlug(project._id, collectionSlug, itemSlug)
    console.log({item})
    return {
      page: detailPage,
      item,
      collectionSlug,
      itemSlug
    }
  } catch (error) {
    console.error("Error fetching CMS item data:", error)
    return null
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

    // Handle home page (no pageSlug or pageSlug is empty)
    if (params.pageSlug.length === 0 || (params.pageSlug.length === 1 && params.pageSlug[0] === '')) {
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

    // Handle CMS detail pages
    if (params.pageSlug.length === 2) {
      const cmsData = await getCMSItemData(params.slug, params.pageSlug)
      if (cmsData && cmsData.item) {
        const itemTitle = cmsData.item.title || cmsData.item.name || "Detail"
        return {
          title: `${itemTitle} - ${project.name}`,
          description: cmsData.item.description || `${itemTitle} from ${project.name}`,
          openGraph: {
            title: `${itemTitle} - ${project.name}`,
            description: cmsData.item.description || `${itemTitle} from ${project.name}`,
            type: "article",
            images: cmsData.item.image ? [cmsData.item.image] : undefined,
          },
          twitter: {
            card: "summary_large_image",
            title: `${itemTitle} - ${project.name}`,
            description: cmsData.item.description || `${itemTitle} from ${project.name}`,
          },
        }
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
    console.log('=== SUBDOMAIN PAGE DEBUG ===')
    console.log('Fetching project data for slug:', params.slug, 'pageSlug:', params.pageSlug)
    console.log('pageSlug.length:', params.pageSlug.length)
    console.log('pageSlug[0]:', params.pageSlug[0])
    
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

    // Handle CMS detail pages (format: collection-slug/item-id)
    if (params.pageSlug.length === 2) {
      const cmsData = await getCMSItemData(params.slug, params.pageSlug)
      if (cmsData) {
        const { page, item } = cmsData
        
        if (!item) {
          console.log('CMS item not found:', params.pageSlug)
          notFound()
        }

        let layout
        try {
          layout = typeof page.layout === 'string' ? JSON.parse(page.layout) : page.layout
        } catch (error) {
          console.error('Error parsing CMS page layout:', error)
          layout = {}
        }

        // console.log('Rendering CMS detail page for project:', project.name, 'page:', page.name, 'item:', item._id)

        return (
          <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                  {/* Logo/Brand */}
                  <div className="flex items-center">
                    <Link href={`/`} className="text-xl font-bold text-gray-900">
                      {project.name}
                    </Link>
                  </div>

                  {/* Navigation Links */}
                  <div className="hidden md:flex space-x-8">
                    {pages.filter((p: any) => !p.isHomePage && p.pageType !== "cms").map((navPage: any) => (
                      <Link
                        key={navPage._id}
                        href={`/${params.slug}/${navPage.slug}`}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {navPage.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Page Content with CMS context */}
            <main>
              <RuntimeRenderer 
                layout={layout} 
                cmsItem={item}
                cmsContext={{
                  collectionId: page.collection,
                  itemId: item._id,
                  itemSlug: cmsData.itemSlug,
                  collectionSlug: cmsData.collectionSlug
                }}
              />
            </main>

            {/* Analytics and tracking */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  // Analytics tracking for CMS detail page
                  console.log('CMS Detail Page view:', '${project.name}', '${page.name}', '${item._id}');
                `,
              }}
            />
          </div>
        )
      }
    }

    let currentPage
    let layout

    // Handle home page (no pageSlug or pageSlug is empty)
    if (params.pageSlug.length === 0 || (params.pageSlug.length === 1 && params.pageSlug[0] === '')) {
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
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <a href={`/${params.slug}`} className="text-xl font-bold text-gray-900">
                  {project.name}
                </a>
              </div>

              {/* Navigation Links */}
              <div className="hidden md:flex space-x-8">
                {pages.filter((p: any) => !p.isHomePage && p.pageType !== "cms").map((navPage: any) => (
                  <Link
                    key={navPage._id}
                    href={`/${params.slug}/${navPage.slug}`}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      navPage.slug === (params.pageSlug.join("/") || "home")
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                    }`}
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
