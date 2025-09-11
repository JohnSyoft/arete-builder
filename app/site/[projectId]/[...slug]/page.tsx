import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RuntimeRenderer } from "@/components/runtime/renderer"
import { getProject, getPageBySlug, getProjectPages, getCollectionItemBySlug } from "@/lib/api/server"
import Link from "next/link"

interface PageProps {
  params: {
    projectId: string
    slug: string[]
  }
}

// Helper function to determine if this is a CMS detail page
async function getCMSItemData(projectId: string, slugSegments: string[]) {
  if (slugSegments.length !== 2) return null
  
  const [collectionSlug, itemSlug] = slugSegments
  
  try {
    // First check if there's a CMS detail page for this collection
    const pages = await getProjectPages(projectId)
    const detailPage = pages.find((page: any) => 
      page.pageType === "cms" && 
      page.cmsPageType === "detail" && 
      page.slug === `${collectionSlug}/:id`
    )
    if (!detailPage) return null
    
    // Fetch the CMS item data using collection slug and item slug
    const item = await getCollectionItemBySlug(projectId, collectionSlug, itemSlug)
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
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = await getProject(params.projectId)
  
  if (!project) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    }
  }

  // Handle CMS detail pages
  if (params.slug.length === 2) {
    const cmsData = await getCMSItemData(params.projectId, params.slug)
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

  // Handle regular pages
  const pageSlug = params.slug.join("/")
  const page = await getPageBySlug(params.projectId, pageSlug)
  
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
}

// Main server-side rendered page component
export default async function PublicPage({ params }: PageProps) {
  console.log("Rendering PublicPage with params:", params)
  
  // Fetch project and pages data
  const [project, pages] = await Promise.all([
    getProject(params.projectId),
    getProjectPages(params.projectId)
  ])

  if (!project) {
    notFound()
  }

  // Handle CMS detail pages (format: collection-slug/item-id)
  if (params.slug.length === 2) {
    const cmsData = await getCMSItemData(params.projectId, params.slug)
    if (cmsData) {
      const { page, item } = cmsData
      
      if (!item) {
        notFound()
      }

      let layout
      try {
        layout = typeof page.layout === 'string' ? JSON.parse(page.layout) : page.layout
      } catch (error) {
        console.error('Error parsing CMS page layout:', error)
        layout = {}
      }

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

  // Handle regular pages
  const pageSlug = params.slug.join("/")
  const page = await getPageBySlug(params.projectId, pageSlug)

  if (!page) {
    notFound()
  }

  let layout
  try {
    layout = typeof page.layout === 'string' ? JSON.parse(page.layout) : page.layout
  } catch (error) {
    console.error('Error parsing page layout:', error)
    layout = {}
  }

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
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    navPage.slug === pageSlug
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
            console.log('Page view:', '${project.name}', '${page.name}');
          `,
        }}
      />
    </div>
  )
}
