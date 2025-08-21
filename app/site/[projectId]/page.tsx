import { notFound, redirect } from "next/navigation"
import { db } from "@/lib/db"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
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

  const project = db.projects.getById(params.projectId)

  if (!project) {
    notFound()
  }

  // Find the home page or first page
  const homePage = project.pages.find((page) => page.isHomePage) || project.pages[0]

  if (!homePage) {
    notFound()
  }

  // Redirect to the home page with /site prefix
  redirect(`/site/${params.projectId}/${homePage.slug}`)
}
