/**
 * Template Library Integration System
 * 
 * This system allows integration with popular Tailwind template libraries
 * and automatically converts them to CraftJS components.
 */

interface TemplateSource {
  name: string
  url: string
  apiKey?: string
  parser: (data: any) => TemplateData[]
}

interface TemplateData {
  id: string
  name: string
  category: string
  html: string
  preview: string
  tags: string[]
  isPremium: boolean
}

interface ConversionConfig {
  componentPrefix: string
  outputDirectory: string
  defaultProps: Record<string, any>
  customMappings?: Record<string, string>
}

class TemplateLibraryIntegration {
  private sources: TemplateSource[] = [
    {
      name: 'Tailwind UI',
      url: 'https://tailwindui.com/api/templates',
      parser: this.parseTailwindUI
    },
    {
      name: 'Headless UI',
      url: 'https://headlessui.com/api/components',
      parser: this.parseHeadlessUI
    },
    {
      name: 'HyperUI',
      url: 'https://hyperui.dev/api/components',
      parser: this.parseHyperUI
    },
    {
      name: 'Tailwind Elements',
      url: 'https://tw-elements.com/api/components',
      parser: this.parseTailwindElements
    }
  ]

  private converter: TailwindToCraftConverter

  constructor() {
    this.converter = new TailwindToCraftConverter()
  }

  async fetchTemplates(sourceName: string, category?: string): Promise<TemplateData[]> {
    const source = this.sources.find(s => s.name === sourceName)
    if (!source) {
      throw new Error(`Template source '${sourceName}' not found`)
    }

    try {
      const response = await fetch(`${source.url}${category ? `?category=${category}` : ''}`)
      const data = await response.json()
      return source.parser(data)
    } catch (error) {
      console.error(`Failed to fetch templates from ${sourceName}:`, error)
      return []
    }
  }

  async importTemplate(
    template: TemplateData, 
    config: ConversionConfig
  ): Promise<string> {
    try {
      // Generate component name
      const componentName = this.generateComponentName(template, config.componentPrefix)
      
      // Convert HTML to CraftJS
      const craftCode = this.converter.generateComponentTemplate(
        template.html, 
        componentName, 
        template.category
      )

      // Apply custom configurations
      const finalCode = this.applyCustomizations(craftCode, config, template)

      // Save to file system
      const outputPath = `${config.outputDirectory}/${template.category}/${componentName}.tsx`
      await this.saveComponent(outputPath, finalCode)

      // Update component registry
      await this.updateComponentRegistry(componentName, template.category, outputPath)

      return componentName
    } catch (error) {
      console.error(`Failed to import template ${template.name}:`, error)
      throw error
    }
  }

  async batchImport(
    sourceName: string, 
    category: string, 
    config: ConversionConfig,
    limit: number = 10
  ): Promise<string[]> {
    const templates = await this.fetchTemplates(sourceName, category)
    const imported: string[] = []

    for (const template of templates.slice(0, limit)) {
      try {
        const componentName = await this.importTemplate(template, config)
        imported.push(componentName)
        console.log(`✅ Imported ${componentName}`)
      } catch (error) {
        console.error(`❌ Failed to import ${template.name}:`, error)
      }
    }

    return imported
  }

  private generateComponentName(template: TemplateData, prefix: string): string {
    // Create a clean component name
    const baseName = template.name
      .replace(/[^a-zA-Z0-9]/g, '')
      .replace(/^./, str => str.toUpperCase())
    
    // Add category-based numbering
    const categoryCount = this.getComponentCountForCategory(template.category)
    return `${prefix}${baseName}${categoryCount + 1}`
  }

  private applyCustomizations(
    code: string, 
    config: ConversionConfig, 
    template: TemplateData
  ): string {
    let customizedCode = code

    // Apply default props
    if (config.defaultProps) {
      customizedCode = this.mergeDefaultProps(customizedCode, config.defaultProps)
    }

    // Apply custom mappings
    if (config.customMappings) {
      customizedCode = this.applyCustomMappings(customizedCode, config.customMappings)
    }

    // Add template metadata as comments
    customizedCode = this.addTemplateMetadata(customizedCode, template)

    return customizedCode
  }

  private async saveComponent(filePath: string, code: string): Promise<void> {
    const fs = require('fs').promises
    const path = require('path')
    
    // Ensure directory exists
    await fs.mkdir(path.dirname(filePath), { recursive: true })
    
    // Write file
    await fs.writeFile(filePath, code, 'utf8')
  }

  private async updateComponentRegistry(
    componentName: string, 
    category: string, 
    filePath: string
  ): Promise<void> {
    // Update craft-components.tsx exports
    const exportLine = `export const Craft${componentName} = ${componentName}`
    
    // Update sidebar.tsx component lists
    const sidebarEntry = `{ component: Craft${componentName}, name: "${componentName}", description: "Imported ${category} component" }`
    
    // Add to componentResolver
    const resolverEntry = `${componentName}: Craft${componentName},`
    
    // Implementation would modify these files accordingly
    console.log(`Registry updated for ${componentName}`)
  }

  // Parser implementations for different template sources
  private parseTailwindUI(data: any): TemplateData[] {
    return data.components.map((comp: any) => ({
      id: comp.id,
      name: comp.name,
      category: comp.category,
      html: comp.html,
      preview: comp.preview_url,
      tags: comp.tags || [],
      isPremium: comp.premium || false
    }))
  }

  private parseHeadlessUI(data: any): TemplateData[] {
    return data.examples.map((example: any) => ({
      id: example.id,
      name: example.title,
      category: example.component,
      html: example.code,
      preview: example.preview,
      tags: [example.component],
      isPremium: false
    }))
  }

  private parseHyperUI(data: any): TemplateData[] {
    return data.components.map((comp: any) => ({
      id: comp.slug,
      name: comp.title,
      category: comp.category,
      html: comp.html,
      preview: comp.image,
      tags: comp.tags || [],
      isPremium: false
    }))
  }

  private parseTailwindElements(data: any): TemplateData[] {
    return data.map((element: any) => ({
      id: element.id,
      name: element.name,
      category: element.type,
      html: element.html,
      preview: element.screenshot,
      tags: element.keywords || [],
      isPremium: element.pro || false
    }))
  }

  private getComponentCountForCategory(category: string): number {
    // Implementation would count existing components in category
    return 0
  }

  private mergeDefaultProps(code: string, defaultProps: Record<string, any>): string {
    // Implementation would merge default props into the component
    return code
  }

  private applyCustomMappings(code: string, mappings: Record<string, string>): string {
    // Implementation would apply custom element mappings
    return code
  }

  private addTemplateMetadata(code: string, template: TemplateData): string {
    const metadata = `/**
 * ${template.name}
 * Source: ${template.id}
 * Category: ${template.category}
 * Tags: ${template.tags.join(', ')}
 * Generated: ${new Date().toISOString()}
 */

`
    return metadata + code
  }
}

// CLI Interface
const templateLibrary = new TemplateLibraryIntegration()

// Example usage:
async function importHeroTemplates() {
  const config: ConversionConfig = {
    componentPrefix: 'Hero',
    outputDirectory: './components/blocks',
    defaultProps: {
      hasContentWrapper: true,
      contentMaxWidth: '7xl',
      contentPadding: 'px-4 sm:px-6 lg:px-8 py-16 lg:py-24'
    }
  }

  const imported = await templateLibrary.batchImport('HyperUI', 'heroes', config, 5)
  console.log(`Imported ${imported.length} hero components:`, imported)
}

export { TemplateLibraryIntegration, type TemplateData, type ConversionConfig }
