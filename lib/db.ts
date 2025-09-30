import elderCareTemplate from "./templates/elderCare"

export interface Project {
  id: string
  name: string
  createdAt: Date
  updatedAt: Date
  pages: Page[]
}

export interface Page {
  id: string
  projectId: string
  name: string
  slug: string
  layout: any // Craft.js serialized state
  isHomePage: boolean
}

export interface Template {
  id: string
  name: string
  description: string
  category: "landing" | "blog" | "ecommerce" | "healthcare" | "business" | "portfolio"
  thumbnail: string
  layout: any // Craft.js serialized state
  featured?: boolean
  pages: {
    name: string
    slug: string
    layout: any
    isHomePage: boolean
  }[]
}

export interface Theme {
  id: string
  name: string
  description: string
  category: "minimal" | "modern" | "creative" | "professional" | "eco-friendly"
  thumbnail: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    muted: string
  }
  typography: {
    fontFamily: string
    headingWeight: string
    bodyWeight: string
  }
  spacing: {
    sectionPadding: string
    elementSpacing: string
  }
  borderRadius: string
  shadows: boolean
}


const templates: Template[] = [
  elderCareTemplate
]

// Sample projects array
let projects: Project[] = []

// Project CRUD operations
export const db = {
  projects: {
    getAll: () => projects,
    getById: (id: string) => projects.find((p) => p.id === id),
    create: (project: Omit<Project, "id" | "createdAt" | "updatedAt">) => {
      const newProject: Project = {
        ...project,
        id: Date.now().toString(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      projects.push(newProject)
      return newProject
    },
    update: (id: string, updates: Partial<Project>) => {
      const index = projects.findIndex((p) => p.id === id)
      if (index !== -1) {
        projects[index] = { ...projects[index], ...updates, updatedAt: new Date() }
        return projects[index]
      }
      return null
    },
    delete: (id: string) => {
      projects = projects.filter((p) => p.id !== id)
    },
  },
  templates: {
    getAll: () => templates,
    getById: (id: string) => templates.find((t) => t.id === id),
    getByCategory: (category: Template["category"]) => templates.filter((t) => t.category === category),
  },
  themes: {
    getAll: () => themes,
    getById: (id: string) => themes.find((t) => t.id === id),
    getByCategory: (category: Theme["category"]) => themes.filter((t) => t.category === category),
  },
  pages: {
    getByProjectId: (projectId: string) => {
      const project = projects.find((p) => p.id === projectId)
      return project?.pages || []
    },
    create: (page: Omit<Page, "id">) => {
      const newPage: Page = {
        ...page,
        id: Date.now().toString(),
      }
      const project = projects.find((p) => p.id === page.projectId)
      if (project) {
        project.pages.push(newPage)
        project.updatedAt = new Date()
      }
      return newPage
    },
    update: (id: string, updates: Partial<Page>) => {
      for (const project of projects) {
        const pageIndex = project.pages.findIndex((p) => p.id === id)
        if (pageIndex !== -1) {
          project.pages[pageIndex] = { ...project.pages[pageIndex], ...updates }
          project.updatedAt = new Date()
          return project.pages[pageIndex]
        }
      }
      return null
    },
  },
}
