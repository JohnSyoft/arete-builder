import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RuntimeRenderer } from "@/components/runtime/renderer"
import { getProject, getPageBySlug, getProjectPages } from "@/lib/api/server"
import Link from "next/link"

interface PageProps {
  params: {
    projectId: string
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const [project, page] = await Promise.all([
    getProject(params.projectId),
    getPageBySlug(params.projectId, params.slug)
  ])

  if (!project || !page) {
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
  
  // Fetch data server-side
  const [project, page, pages] = await Promise.all([
    getProject(params.projectId),
    getPageBySlug(params.projectId, params.slug),
    getProjectPages(params.projectId)
  ])

  console.log({  pages })

  // Not found state
  if (!project || !page) {
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
              {pages.filter((p: any) => !p.isHomePage).map((navPage: any) => (
                <Link
                  key={navPage._id}
                  href={`/site/${project._id}/${navPage.slug}`}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    navPage.slug === params.slug
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
