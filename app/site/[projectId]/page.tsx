"use client"

import { notFound, redirect } from "next/navigation"
import { useProject } from "@/hooks/useProjects"
import { useProjectPages } from "@/hooks/usePages"
import QueryProvider from "@/components/query-provider"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

function ProjectPageContent({ params }: ProjectPageProps) {
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
  ]

  if (RESERVED_PATHS.includes(params.projectId)) {
    notFound()
  }

  const { data: projectResponse, isLoading: isProjectLoading, error: projectError } = useProject(params.projectId)
  const { data: pagesResponse, isLoading: isPagesLoading, error: pagesError } = useProjectPages(params.projectId)

  const project = projectResponse?.data?.project
  const pages = pagesResponse?.data?.pages || []

  // Loading state
  if (isProjectLoading || isPagesLoading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading project...</p>
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (projectError || pagesError) {
    notFound()
  }

  if (!project) {
    notFound()
  }

  // Find the home page or first page
  const homePage = pages.find((page) => page.isHomePage) || pages[0]

  if (!homePage) {
    notFound()
  }

  // Redirect to the home page with /site prefix
  redirect(`/site/${params.projectId}/${homePage.slug}`)
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return (
    <QueryProvider>
      <ProjectPageContent params={params} />
    </QueryProvider>
  )
}
