import type { Theme } from "./db"

export const themeUtils = {
  // Apply a theme to the document
  applyTheme: (theme: Theme) => {
    const root = document.documentElement
    
    // Apply color variables
    root.style.setProperty("--color-primary", theme.colors.primary)
    root.style.setProperty("--color-secondary", theme.colors.secondary)
    root.style.setProperty("--color-accent", theme.colors.accent)
    root.style.setProperty("--color-background", theme.colors.background)
    root.style.setProperty("--color-foreground", theme.colors.foreground)
    root.style.setProperty("--color-muted", theme.colors.muted)
    
    // Apply typography
    root.style.setProperty("--font-family", theme.typography.fontFamily)
    root.style.setProperty("--heading-weight", theme.typography.headingWeight)
    root.style.setProperty("--body-weight", theme.typography.bodyWeight)
    
    // Apply spacing
    root.style.setProperty("--section-padding", theme.spacing.sectionPadding)
    root.style.setProperty("--element-spacing", theme.spacing.elementSpacing)
    
    // Apply border radius
    root.style.setProperty("--border-radius", theme.borderRadius)
    
    // Apply shadow preference
    root.style.setProperty("--shadows-enabled", theme.shadows ? "1" : "0")
    
    // Store in localStorage
    localStorage.setItem("arete-current-theme", theme.id)
  },

  // Get current theme from localStorage
  getCurrentTheme: (): string | null => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem("arete-current-theme")
    }
    return null
  },

  // Initialize theme on app load
  initializeTheme: (themes: Theme[]) => {
    const savedThemeId = themeUtils.getCurrentTheme()
    const theme = savedThemeId 
      ? themes.find(t => t.id === savedThemeId) 
      : themes.find(t => t.id === "modern") // Default theme
    
    if (theme) {
      themeUtils.applyTheme(theme)
    }
  },

  // Generate CSS variables string for a theme
  generateThemeCSS: (theme: Theme): string => {
    return `
      :root {
        --color-primary: ${theme.colors.primary};
        --color-secondary: ${theme.colors.secondary};
        --color-accent: ${theme.colors.accent};
        --color-background: ${theme.colors.background};
        --color-foreground: ${theme.colors.foreground};
        --color-muted: ${theme.colors.muted};
        
        --font-family: ${theme.typography.fontFamily};
        --heading-weight: ${theme.typography.headingWeight};
        --body-weight: ${theme.typography.bodyWeight};
        
        --section-padding: ${theme.spacing.sectionPadding};
        --element-spacing: ${theme.spacing.elementSpacing};
        
        --border-radius: ${theme.borderRadius};
        --shadows-enabled: ${theme.shadows ? "1" : "0"};
      }
      
      .themed-element {
        color: var(--color-foreground);
        background-color: var(--color-background);
        font-family: var(--font-family);
      }
      
      .themed-button {
        background-color: var(--color-primary);
        color: var(--color-background);
        border-radius: var(--border-radius);
        font-weight: var(--heading-weight);
        ${theme.shadows ? "box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);" : ""}
      }
      
      .themed-card {
        background-color: var(--color-background);
        border: 1px solid var(--color-muted);
        border-radius: var(--border-radius);
        ${theme.shadows ? "box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);" : ""}
      }
      
      .themed-heading {
        color: var(--color-foreground);
        font-family: var(--font-family);
        font-weight: var(--heading-weight);
      }
      
      .themed-text {
        color: var(--color-foreground);
        font-family: var(--font-family);
        font-weight: var(--body-weight);
      }
      
      .themed-section {
        padding: var(--section-padding);
      }
      
      .themed-spacing > * + * {
        margin-top: var(--element-spacing);
      }
    `
  },

  // Get theme-specific Tailwind classes
  getThemeClasses: (theme: Theme) => {
    return {
      section: `${theme.spacing.sectionPadding} ${theme.spacing.elementSpacing}`,
      button: `${theme.borderRadius} ${theme.typography.headingWeight} ${theme.shadows ? 'shadow-md' : ''}`,
      card: `${theme.borderRadius} ${theme.shadows ? 'shadow-sm' : ''}`,
      heading: `${theme.typography.headingWeight}`,
      body: `${theme.typography.bodyWeight}`,
    }
  },

  // Get category badge color for themes
  getCategoryBadgeClass: (category: Theme["category"]) => {
    switch (category) {
      case "minimal":
        return "bg-gray-500/10 text-gray-700 border-gray-500/20"
      case "modern":
        return "bg-blue-500/10 text-blue-700 border-blue-500/20"
      case "creative":
        return "bg-orange-500/10 text-orange-700 border-orange-500/20"
      case "professional":
        return "bg-slate-500/10 text-slate-700 border-slate-500/20"
      case "eco-friendly":
        return "bg-green-500/10 text-green-700 border-green-500/20"
      default:
        return "bg-gray-500/10 text-gray-700 border-gray-500/20"
    }
  }
}
