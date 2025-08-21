"use client"

import { useState, useEffect, useMemo } from "react"
import { useParams, useRouter } from "next/navigation"
import { Editor, Frame, Element, useEditor } from "@craftjs/core"
import { EditorSidebar } from "@/components/editor/sidebar"
import { EditorToolbar } from "@/components/editor/toolbar"
import { componentResolver } from "@/components/editor/craft-components"
import { db, type Project, type Page } from "@/lib/db"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "@/components/icons"
import { useViewportStore } from "@/lib/store/viewport-store"

// Component to handle editor actions inside the Editor context
function EditorContent({
  project,
  currentPage,
  layoutData,
  onPreview,
  onPageChange,
  onAddPage,
}: {
  project: Project
  currentPage: Page
  layoutData: any
  onPreview: () => void
  onPageChange: (slug: string) => void
  onAddPage: () => void
}) {
  const { actions, query } = useEditor()
  const { getViewportStyles, currentViewport } = useViewportStore()

  const handleSave = () => {
    try {
      const serializedState = query.serialize()
      db.pages.update(currentPage.id, { layout: serializedState })
      console.log("Page saved successfully!")
    } catch (error) {
      console.error("Error saving page:", error)
    }
  }

  // Load the initial state when the layout data changes
  useEffect(() => {
    // Let CraftJS handle the initial state through Frame data prop
    // Don't manually deserialize here as it can cause conflicts
  }, [actions, layoutData])

  const viewportStyles = getViewportStyles()

  return (
    <>
      <EditorToolbar
        onSave={handleSave}
        onPreview={onPreview}
        projectName={project.name}
        pageName={currentPage.name}
        pages={project.pages}
        currentPageSlug={currentPage.slug}
        onPageChange={onPageChange}
        onAddPage={onAddPage}
      />

      <div className="flex h-[calc(100vh-4rem)]">
        <EditorSidebar />

        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div 
              className="mx-auto bg-white shadow-lg rounded-lg overflow-hidden"
              style={viewportStyles}
            >
              <Frame data={layoutData}>
                <Element 
                  is="Container"
                  canvas 
                  className="min-h-[600px] p-4"
                  data-testid="canvas-root"
                >
                  {currentViewport !== 'desktop' && (
                    <div className="text-center text-xs text-gray-400 mb-4 py-2 bg-gray-100 rounded">
                      {currentViewport === 'mobile' ? 'Mobile View (375px)' : 'Tablet View (768px)'}
                    </div>
                  )}
                </Element>
              </Frame>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default function EditorPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [currentPage, setCurrentPage] = useState<Page | null>(null)
  const [loading, setLoading] = useState(true)

  const projectId = params.projectId as string
  const pageSlug = params.pageSlug as string

  console.log("[v0] Editor loading with params:", { projectId, pageSlug })

  useEffect(() => {
    const loadProject = () => {
      console.log("[v0] Loading project with ID:", projectId)
      const foundProject = db.projects.getById(projectId)
      console.log("[v0] Found project:", foundProject)

      if (!foundProject) {
        console.log("[v0] Project not found, redirecting to dashboard")
        router.push("/dashboard")
        return
      }

      console.log("[v0] Looking for page with slug:", pageSlug)
      const foundPage = foundProject.pages.find((p) => p.slug === pageSlug)
      console.log("[v0] Found page:", foundPage)

      if (!foundPage) {
        console.log("[v0] Page not found, redirecting to dashboard")
        router.push("/dashboard")
        return
      }

      console.log("[v0] Setting project and page, ending loading state")
      setProject(foundProject)
      setCurrentPage(foundPage)
      setLoading(false)
    }

    loadProject()
  }, [projectId, pageSlug, router])

  const handlePreview = () => {
    if (project && currentPage) {
      window.open(`/site/${project.id}/${currentPage.slug}`, "_blank")
    }
  }

  const handlePageChange = (newPageSlug: string) => {
    if (project) {
      router.push(`/editor/${project.id}/${newPageSlug}`)
    }
  }

  const handleAddPage = () => {
    if (!project) return

    const pageName = prompt("Enter page name:")
    if (!pageName) return

    const pageSlug = pageName
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "")

    // Check if page already exists
    if (project.pages.some((p) => p.slug === pageSlug)) {
      alert("A page with this name already exists!")
      return
    }

    const newPage = db.pages.create({
      projectId: project.id,
      name: pageName,
      slug: pageSlug,
      layout: {
        ROOT: {
          type: { resolvedName: "Container" },
          isCanvas: true,
          props: {},
          displayName: "Container",
          custom: {},
          hidden: false,
          nodes: [],
          linkedNodes: {},
        },
      },
      isHomePage: false,
    })

    // Refresh project data
    const updatedProject = db.projects.getById(project.id)
    if (updatedProject) {
      setProject(updatedProject)
      router.push(`/editor/${project.id}/${pageSlug}`)
    }
  }

  const layoutData = useMemo(() => {
    if (!currentPage?.layout) {
      return {
        ROOT: {
          type: { resolvedName: "Container" },
          isCanvas: true,
          props: {},
          displayName: "Container",
          custom: {},
          hidden: false,
          nodes: [],
          linkedNodes: {},
        },
      }
    }

    if (typeof currentPage.layout === "string") {
      try {
        return JSON.parse(currentPage.layout)
      } catch (error) {
        console.error("[v0] Error parsing layout JSON:", error)
        return {
          ROOT: {
            type: { resolvedName: "Container" },
            isCanvas: true,
            props: {},
            displayName: "Container",
            custom: {},
            hidden: false,
            nodes: [],
            linkedNodes: {},
          },
        }
      }
    }

    return currentPage.layout
  }, [currentPage])

  console.log({ layoutData })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading editor...</p>
        </div>
      </div>
    )
  }

  if (!project || !currentPage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Project not found</h2>
          <p className="text-gray-600 mb-4">The project or page you're looking for doesn't exist.</p>
          <Button onClick={() => router.push("/dashboard")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Editor resolver={componentResolver} enabled={true}>
        <EditorContent
          project={project}
          currentPage={currentPage}
          layoutData={layoutData}
          onPreview={handlePreview}
          onPageChange={handlePageChange}
          onAddPage={handleAddPage}
        />
      </Editor>
    </div>
  )
}