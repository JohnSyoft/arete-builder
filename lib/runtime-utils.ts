import type { Project, Page } from "./db"

export const runtimeUtils = {
  // Generate sitemap data for a project
  generateSitemap: (project: Project) => {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"

    return project.pages.map((page) => ({
      url: page.isHomePage ? `${baseUrl}/site/${project.id}` : `${baseUrl}/site/${project.id}/${page.slug}`,
      lastModified: project.updatedAt,
      changeFrequency: "weekly" as const,
      priority: page.isHomePage ? 1.0 : 0.8,
    }))
  },

  // Generate navigation structure
  generateNavigation: (project: Project, currentSlug: string) => {
    const homePage = project.pages.find((page) => page.isHomePage)
    const otherPages = project.pages.filter((page) => !page.isHomePage)

    return {
      home: {
        name: "Home",
        slug: homePage?.slug || "home",
        isActive: currentSlug === (homePage?.slug || "home"),
      },
      pages: otherPages.map((page) => ({
        name: page.name,
        slug: page.slug,
        isActive: currentSlug === page.slug,
      })),
    }
  },

  // Get page breadcrumbs
  getBreadcrumbs: (project: Project, page: Page) => {
    const breadcrumbs = [
      {
        name: project.name,
        href: `/site/${project.id}`,
      },
    ]

    if (!page.isHomePage) {
      breadcrumbs.push({
        name: page.name,
        href: `/site/${project.id}/${page.slug}`,
      })
    }

    return breadcrumbs
  },

  // Performance optimization: preload critical resources
  getPreloadResources: (layout: any) => {
    const resources: string[] = []

    // Extract image URLs from layout for preloading
    if (layout) {
      const extractImages = (node: any) => {
        if (node.props?.src) {
          resources.push(node.props.src)
        }
        if (node.nodes) {
          node.nodes.forEach((childId: string) => {
            const childNode = layout[childId]
            if (childNode) {
              extractImages(childNode)
            }
          })
        }
      }

      if (layout.ROOT) {
        extractImages(layout.ROOT)
      }
    }

    return resources
  },
}
