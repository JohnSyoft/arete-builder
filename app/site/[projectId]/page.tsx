import { notFound, redirect } from "next/navigation"
import { getProject, getProjectPages } from "@/lib/api/server"

interface ProjectPageProps {
  params: {
    projectId: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
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
console.log("Hi")
  if (RESERVED_PATHS.includes(params.projectId)) {
    notFound()
  }

  // Fetch data server-side
  const [project, pages] = await Promise.all([
    getProject(params.projectId),
    getProjectPages(params.projectId)
  ])
  if (!project) {
    notFound()
  }

  // Find the home page or first page
  const homePage = pages.find((page: any) => page.isHomePage) || pages[0]
  if (!homePage) {
    notFound()
  }

  // Redirect to the home page with /site prefix
  redirect(`/site/${params.projectId}/${homePage.slug}`)
}
