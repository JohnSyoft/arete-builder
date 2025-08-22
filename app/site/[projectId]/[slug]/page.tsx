import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { RuntimeRenderer } from "@/components/runtime/renderer"
import { RuntimeNavigation } from "@/components/runtime/navigation"
import { db } from "@/lib/db"

interface PageProps {
  params: {
    projectId: string
    slug: string
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = db.projects.getById(params.projectId)
  const page = project?.pages.find((p) => p.slug === params.slug)

  if (!project || !page) {
    return {
      title: "Page Not Found",
      description: "The requested page could not be found.",
    }
  }

  return {
    title: `${page.name} - ${project.name}`,
    description: `${page.name} page of ${project.name}`,
    openGraph: {
      title: `${page.name} - ${project.name}`,
      description: `${page.name} page of ${project.name}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.name} - ${project.name}`,
      description: `${page.name} page of ${project.name}`,
    },
  }
}

export default function PublicPage({ params }: PageProps) {
  console.log("Rendering PublicPage with params:", params)
  const project = db.projects.getById(params.projectId)
  const page = project?.pages.find((p) => p.slug === params.slug)
  console.log({page})
  if (!project || !page) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <RuntimeNavigation project={project} currentSlug={params.slug} />

      {/* Page Content */}
      <main>
        <RuntimeRenderer layout={page.layout} />
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

// Generate static params for better performance (optional)
export async function generateStaticParams() {
  const projects = db.projects.getAll()
  const params: { projectId: string; slug: string }[] = []

  projects.forEach((project) => {
    project.pages.forEach((page) => {
      params.push({
        projectId: project.id,
        slug: page.slug,
      })
    })
  })

  return params
}
