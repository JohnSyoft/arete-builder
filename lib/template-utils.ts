import type { Template } from "./db"

export const templateUtils = {
  // Clone a template layout for a new project
  cloneTemplateLayout: (template: Template) => {
    return JSON.parse(JSON.stringify(template.layout))
  },

  // Get template preview URL
  getTemplatePreviewUrl: (templateId: string) => {
    return `/template-preview/${templateId}`
  },

  // Validate template layout structure
  validateTemplateLayout: (layout: any): boolean => {
    if (!layout || typeof layout !== "object") return false
    if (!layout.ROOT) return false
    if (!layout.ROOT.nodes || !Array.isArray(layout.ROOT.nodes)) return false
    return true
  },

  // Get template complexity score (based on number of components)
  getComplexityScore: (template: Template): "Simple" | "Medium" | "Complex" => {
    if (!template.layout || !template.layout.ROOT) return "Simple"

    const nodeCount = Object.keys(template.layout).length
    if (nodeCount <= 3) return "Simple"
    if (nodeCount <= 6) return "Medium"
    return "Complex"
  },

  // Get estimated setup time
  getEstimatedSetupTime: (template: Template): string => {
    const complexity = templateUtils.getComplexityScore(template)
    switch (complexity) {
      case "Simple":
        return "5 minutes"
      case "Medium":
        return "15 minutes"
      case "Complex":
        return "30 minutes"
      default:
        return "10 minutes"
    }
  },

  // Get template tags based on components used
  getTemplateTags: (template: Template): string[] => {
    const tags: string[] = []
    const layout = template.layout

    if (!layout) return tags

    // Check for specific components
    const components = Object.values(layout)
      .map((node: any) => node.type?.resolvedName)
      .filter(Boolean)

    if (components.some((c) => c.includes("Hero"))) tags.push("Hero Section")
    if (components.some((c) => c.includes("Features"))) tags.push("Features")
    if (components.some((c) => c.includes("FAQ"))) tags.push("FAQ")
    if (components.some((c) => c.includes("CTA"))) tags.push("Call to Action")
    if (components.some((c) => c.includes("Footer"))) tags.push("Footer")
    if (components.some((c) => c.includes("Header"))) tags.push("Navigation")

    return tags
  },
}
