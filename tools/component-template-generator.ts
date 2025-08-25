/**
 * Flexible Component Template System
 * 
 * This system allows creating new components by composing reusable templates
 * and patterns, reducing the need for manual conversion.
 */

import React from "react"
import { Element } from "@craftjs/core"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"

interface TemplateConfig {
  name: string
  displayName: string
  category: string
  structure: TemplateStructure
  defaultProps: Record<string, any>
  responsiveBreakpoints: ResponsiveConfig
  variants?: TemplateVariant[]
}

interface TemplateStructure {
  layout: 'single-column' | 'two-column' | 'grid' | 'hero' | 'card-grid'
  sections: TemplateSection[]
}

interface TemplateSection {
  type: 'text' | 'button' | 'image' | 'form' | 'custom'
  id: string
  props: Record<string, any>
  children?: TemplateSection[]
  responsive?: ResponsiveProps
}

interface ResponsiveConfig {
  mobile: Record<string, any>
  tablet: Record<string, any>
  desktop: Record<string, any>
}

interface ResponsiveProps {
  mobile?: Record<string, any>
  tablet?: Record<string, any>
  desktop?: Record<string, any>
}

interface TemplateVariant {
  name: string
  props: Record<string, any>
  overrides?: Record<string, any>
}

class ComponentTemplateGenerator {
  private templates: Map<string, TemplateConfig> = new Map()

  constructor() {
    this.initializeBuiltInTemplates()
  }

  // Generate a component from template configuration
  generateComponent(config: TemplateConfig): string {
    const { name, displayName, structure, defaultProps } = config

    const imports = this.generateImports()
    const interface_ = this.generateInterface(name)
    const component = this.generateComponentFunction(name, structure, defaultProps)
    const craftConfig = this.generateCraftConfig(displayName, defaultProps)

    return `${imports}

${interface_}

${component}

${craftConfig}`
  }

  private generateImports(): string {
    return `import React from "react"
import { useNode, Element } from "@craftjs/core"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"`
  }

  private generateInterface(name: string): string {
    return `interface ${name}Props extends SectionProps {
  // Add specific props here if needed
}`
  }

  private generateComponentFunction(
    name: string, 
    structure: TemplateStructure, 
    defaultProps: Record<string, any>
  ): string {
    const content = this.generateStructureContent(structure)
    
    return `export function ${name}(props: ${name}Props) {
  const componentProps = {
    ${Object.entries(defaultProps).map(([key, value]) => 
      `${key}: ${JSON.stringify(value)}`
    ).join(',\n    ')},
    ...props
  }

  return (
    <Section {...componentProps}>
${content}
    </Section>
  )
}`
  }

  private generateStructureContent(structure: TemplateStructure): string {
    const { layout, sections } = structure
    
    switch (layout) {
      case 'single-column':
        return this.generateSingleColumnLayout(sections)
      case 'two-column':
        return this.generateTwoColumnLayout(sections)
      case 'grid':
        return this.generateGridLayout(sections)
      case 'hero':
        return this.generateHeroLayout(sections)
      case 'card-grid':
        return this.generateCardGridLayout(sections)
      default:
        return this.generateCustomLayout(sections)
    }
  }

  private generateSingleColumnLayout(sections: TemplateSection[]): string {
    const content = sections.map(section => this.generateSectionCode(section, 2)).join('\n\n')
    
    return `      <Element id="content" is="div" canvas className="space-y-8">
${content}
      </Element>`
  }

  private generateTwoColumnLayout(sections: TemplateSection[]): string {
    const leftSections = sections.filter((_, i) => i % 2 === 0)
    const rightSections = sections.filter((_, i) => i % 2 === 1)
    
    return `      <Element id="content" is="div" canvas className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <Element id="leftColumn" is="div" canvas className="space-y-6">
${leftSections.map(section => this.generateSectionCode(section, 3)).join('\n\n')}
        </Element>
        <Element id="rightColumn" is="div" canvas className="space-y-6">
${rightSections.map(section => this.generateSectionCode(section, 3)).join('\n\n')}
        </Element>
      </Element>`
  }

  private generateHeroLayout(sections: TemplateSection[]): string {
    return `      <Element id="heroContent" is="div" canvas className="text-center space-y-6">
${sections.map(section => this.generateSectionCode(section, 2)).join('\n\n')}
      </Element>`
  }

  private generateGridLayout(sections: TemplateSection[]): string {
    return `      <Element id="gridContent" is="div" canvas className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
${sections.map(section => this.generateSectionCode(section, 2)).join('\n\n')}
      </Element>`
  }

  private generateCardGridLayout(sections: TemplateSection[]): string {
    return `      <Element id="cardGrid" is="div" canvas className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
${sections.map(section => this.generateCardCode(section, 2)).join('\n\n')}
      </Element>`
  }

  private generateCustomLayout(sections: TemplateSection[]): string {
    return `      <Element id="customContent" is="div" canvas>
${sections.map(section => this.generateSectionCode(section, 2)).join('\n\n')}
      </Element>`
  }

  private generateSectionCode(section: TemplateSection, indentLevel: number): string {
    const indent = '  '.repeat(indentLevel)
    
    switch (section.type) {
      case 'text':
        return `${indent}<Element is="div" className="p-2 rounded" canvas={false}>
${indent}  <CraftText
${indent}    text="${section.props.text || 'Edit text'}"
${indent}    tagName="${section.props.tagName || 'p'}"
${indent}    fontSize="${section.props.fontSize || 'text-base'}"
${indent}    fontWeight="${section.props.fontWeight || 'font-normal'}"
${indent}    color="${section.props.color || 'text-gray-900'}"
${indent}    margin="${section.props.margin || 'mb-4'}"
${indent}  />
${indent}</Element>`

      case 'button':
        return `${indent}<CraftButton
${indent}  text="${section.props.text || 'Click me'}"
${indent}  size="${section.props.size || 'md'}"
${indent}  backgroundColor="${section.props.backgroundColor || '#2563eb'}"
${indent}  textColor="${section.props.textColor || '#ffffff'}"
${indent}  borderRadius="${section.props.borderRadius || '8px'}"
${indent}  margin="${section.props.margin || 'mt-4'}"
${indent}/>`

      case 'image':
        return `${indent}<CraftImage
${indent}  src="${section.props.src || '/placeholder.svg'}"
${indent}  alt="${section.props.alt || 'Image'}"
${indent}  className="${section.props.className || 'w-full h-auto rounded-lg'}"
${indent}/>`

      default:
        return `${indent}<!-- Custom section: ${section.type} -->`
    }
  }

  private generateCardCode(section: TemplateSection, indentLevel: number): string {
    const indent = '  '.repeat(indentLevel)
    
    return `${indent}<Element is="div" canvas className="bg-white rounded-lg shadow-md p-6">
${this.generateSectionCode(section, indentLevel + 1)}
${indent}</Element>`
  }

  private generateCraftConfig(displayName: string, defaultProps: Record<string, any>): string {
    return `${displayName.replace(/\s+/g, '')}.craft = {
  displayName: "${displayName}",
  props: {
    ${Object.entries(defaultProps).map(([key, value]) => 
      `${key}: ${JSON.stringify(value)}`
    ).join(',\n    ')}
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}`
  }

  // Pre-defined templates
  private initializeBuiltInTemplates(): void {
    // Hero template
    this.templates.set('hero', {
      name: 'Hero',
      displayName: 'Hero Section',
      category: 'Hero',
      structure: {
        layout: 'hero',
        sections: [
          {
            type: 'text',
            id: 'title',
            props: {
              text: 'Your Amazing Headline',
              tagName: 'h1',
              fontSize: 'text-4xl md:text-6xl',
              fontWeight: 'font-bold',
              color: 'text-white',
              margin: 'mb-6'
            }
          },
          {
            type: 'text',
            id: 'subtitle',
            props: {
              text: 'Supporting text that explains your value proposition',
              tagName: 'p',
              fontSize: 'text-lg md:text-xl',
              color: 'text-blue-100',
              margin: 'mb-8'
            }
          },
          {
            type: 'button',
            id: 'cta',
            props: {
              text: 'Get Started',
              size: 'lg',
              backgroundColor: '#ffffff',
              textColor: '#2563eb'
            }
          }
        ]
      },
      defaultProps: {
        gradient: 'linear-gradient(to right, #2563eb, #9333ea)',
        hasContentWrapper: true,
        contentMaxWidth: '7xl',
        contentPadding: 'px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-32'
      },
      responsiveBreakpoints: {
        mobile: { contentPadding: 'px-4 py-12' },
        tablet: { contentPadding: 'px-6 py-16' },
        desktop: { contentPadding: 'px-8 py-24' }
      }
    })

    // Feature grid template
    this.templates.set('features', {
      name: 'Features',
      displayName: 'Features Grid',
      category: 'Features',
      structure: {
        layout: 'grid',
        sections: [
          {
            type: 'text',
            id: 'feature1',
            props: {
              text: 'Feature 1',
              tagName: 'h3',
              fontSize: 'text-xl',
              fontWeight: 'font-semibold'
            }
          },
          {
            type: 'text',
            id: 'feature2',
            props: {
              text: 'Feature 2',
              tagName: 'h3',
              fontSize: 'text-xl',
              fontWeight: 'font-semibold'
            }
          },
          {
            type: 'text',
            id: 'feature3',
            props: {
              text: 'Feature 3',
              tagName: 'h3',
              fontSize: 'text-xl',
              fontWeight: 'font-semibold'
            }
          }
        ]
      },
      defaultProps: {
        backgroundColor: '#ffffff',
        hasContentWrapper: true,
        contentMaxWidth: '7xl',
        contentPadding: 'px-4 py-16 sm:px-6 lg:px-8'
      },
      responsiveBreakpoints: {
        mobile: { contentPadding: 'px-4 py-12' },
        tablet: { contentPadding: 'px-6 py-16' },
        desktop: { contentPadding: 'px-8 py-20' }
      }
    })
  }

  // Generate component from template
  createFromTemplate(templateName: string, componentName: string, overrides?: Partial<TemplateConfig>): string {
    const template = this.templates.get(templateName)
    if (!template) {
      throw new Error(`Template '${templateName}' not found`)
    }

    const config = {
      ...template,
      name: componentName,
      displayName: componentName,
      ...overrides
    }

    return this.generateComponent(config)
  }

  // CLI interface
  generateFromConfig(configPath: string): string {
    const fs = require('fs')
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    return this.generateComponent(config)
  }
}

// Usage examples:
export function createNewComponents() {
  const generator = new ComponentTemplateGenerator()

  // Create a new hero component
  const hero6 = generator.createFromTemplate('hero', 'Hero6', {
    defaultProps: {
      backgroundColor: '#1f2937',
      gradient: 'linear-gradient(to bottom right, #1f2937, #3730a3)'
    }
  })

  // Create a features component
  const features6 = generator.createFromTemplate('features', 'Features6')

  console.log('Generated Hero6:', hero6)
  console.log('Generated Features6:', features6)
}

export { ComponentTemplateGenerator, type TemplateConfig }
