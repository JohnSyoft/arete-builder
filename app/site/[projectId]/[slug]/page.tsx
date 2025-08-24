"use client"

import { notFound } from "next/navigation"
import { useEffect } from "react"
import { RuntimeRenderer } from "@/components/runtime/renderer"
import { useProject } from "@/hooks/useProjects"
import { usePageBySlug, useProjectPages } from "@/hooks/usePages"
import QueryProvider from "@/components/query-provider"

interface PageProps {
  params: {
    projectId: string
    slug: string
  }
}

// Main page component with API integration
function PublicPageContent({ params }: PageProps) {
  console.log("Rendering PublicPage with params:", params)
  
  const { data: projectResponse, isLoading: isProjectLoading, error: projectError } = useProject(params.projectId)
  const { data: pageResponse, isLoading: isPageLoading, error: pageError } = usePageBySlug(params.projectId, params.slug)
  const { data: pagesResponse } = useProjectPages(params.projectId)
  
  const project = projectResponse?.data?.project
  const page = pageResponse?.data?.page
  const pages = pagesResponse?.data?.pages || []

  console.log({ project, page, pages })
  useEffect(() => {
    if (project && page) {
      document.title = `${page.name} - ${project.name}`
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', page.settings?.description || `${page.name} page of ${project.name}`)
      } else {
        const meta = document.createElement('meta')
        meta.name = 'description'
        meta.content = page.settings?.description || `${page.name} page of ${project.name}`
        document.head.appendChild(meta)
      }
    }
  }, [project, page])

  // Loading state
  if (isProjectLoading || isPageLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading page...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (projectError || pageError) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Page</h1>
            <p className="text-gray-600">
              {projectError?.message || pageError?.message || "Something went wrong while loading the page."}
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Not found state
  if (!project || !page) {
    notFound()
  }

  // Update document title and meta description dynamically

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <a href={`/site/${project._id}/${pages.find(p => p.isHomePage)?.slug || 'home'}`} className="text-xl font-bold text-gray-900">
                {project.name}
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {pages.filter(p => !p.isHomePage).map((navPage) => (
                <a
                  key={navPage._id}
                  href={`/site/${project._id}/${navPage.slug}`}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    navPage.slug === params.slug
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  {navPage.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <RuntimeRenderer layout={JSON.parse(page.layout)} />
      </main>

      {/* Analytics and tracking would go here */}
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

// Wrapped page component with QueryProvider
export default function PublicPage({ params }: PageProps) {
  return (
    <QueryProvider>
      <PublicPageContent params={params} />
    </QueryProvider>
  )
}
