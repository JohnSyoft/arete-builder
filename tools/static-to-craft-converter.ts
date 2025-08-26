#!/usr/bin/env node

/**
 * Static HTML to CraftJS Component Converter
 * 
 * Automatically converts static HTML components (like Hero4.jsx) into 
 * fully draggable CraftJS components (like Hero1.tsx)
 */

import fs from 'fs'

interface ConversionConfig {
  preserveStructure: boolean
  addResponsiveClasses: boolean
  wrapInSection: boolean
  defaultSectionProps?: Record<string, any>
}

class StaticToCraftConverter {
  private componentMappings: Record<string, { component: string; tagName?: string }> = {
    'h1': { component: 'CraftText', tagName: 'h1' },
    'h2': { component: 'CraftText', tagName: 'h2' },
    'h3': { component: 'CraftText', tagName: 'h3' },
    'h4': { component: 'CraftText', tagName: 'h4' },
    'h5': { component: 'CraftText', tagName: 'h5' },
    'h6': { component: 'CraftText', tagName: 'h6' },
    'p': { component: 'CraftText', tagName: 'p' },
    'button': { component: 'CraftButton' },
    'a': { component: 'CraftButton' }, // Convert links to buttons
    'img': { component: 'CraftImage' },
  }

  private elementCounter = 0

  generateElementId(): string {
    return `element_${++this.elementCounter}`
  }

  extractClassProperties(className: string): Record<string, string> {
    const classes = className.split(' ')
    const props: Record<string, string> = {}

    // Extract common Tailwind classes
    const fontSize = classes.find(c => c.startsWith('text-') && 
      ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl'].some(size => c === `text-${size}`))
    if (fontSize) props.fontSize = fontSize

    const fontWeight = classes.find(c => c.startsWith('font-') && 
      ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'].some(weight => c === `font-${weight}`))
    if (fontWeight) props.fontWeight = fontWeight

    const textAlign = classes.find(c => ['text-left', 'text-center', 'text-right', 'text-justify'].includes(c))
    if (textAlign) props.textAlign = textAlign

    const textColor = classes.find(c => c.startsWith('text-') && c.includes('-'))
    if (textColor && !fontSize) props.color = textColor

    const bgColor = classes.find(c => c.startsWith('bg-') && c.includes('-'))
    if (bgColor) props.backgroundColor = bgColor

    const margin = classes.filter(c => c.startsWith('m')).join(' ')
    if (margin) props.margin = margin

    const padding = classes.filter(c => c.startsWith('p')).join(' ')
    if (padding) props.padding = padding

    return props
  }

  convertStaticComponent(filePath: string, config: ConversionConfig = { preserveStructure: true, addResponsiveClasses: true, wrapInSection: true }): string {
    const content = fs.readFileSync(filePath, 'utf-8')
    
    // Extract component name
    const componentNameMatch = content.match(/export function (\w+)/)
    const componentName = componentNameMatch ? componentNameMatch[1] : 'ConvertedComponent'

    // Extract JSX content between return statement
    const jsxMatch = content.match(/return \(([\s\S]*?)\)/)
    if (!jsxMatch) {
      throw new Error('Could not find JSX return statement')
    }

    let jsxContent = jsxMatch[1].trim()

    // Convert static elements to CraftJS components
    jsxContent = this.convertJSXElements(jsxContent)

    // Generate the converted component
    const convertedComponent = this.generateConvertedComponent(componentName, jsxContent, config)

    return convertedComponent
  }

  private convertJSXElements(jsx: string): string {
    let converted = jsx

    // Convert text elements (h1, h2, h3, p, etc.)
    Object.entries(this.componentMappings).forEach(([htmlTag, mapping]) => {
      const regex = new RegExp(`<${htmlTag}([^>]*?)>(.*?)<\/${htmlTag}>`, 'gs')
      
      converted = converted.replace(regex, (match, attributes, content) => {
        const className = this.extractClassName(attributes)
        const props = this.extractClassProperties(className)
        
        if (mapping.component === 'CraftText') {
          const textProps = {
            text: content.replace(/<[^>]*>/g, '').trim(), // Strip inner HTML tags
            tagName: mapping.tagName || 'p',
            ...props
          }
          
          const propsString = Object.entries(textProps)
            .map(([key, value]) => `${key}="${value}"`)
            .join('\n              ')

          return `<Element is="div" className="p-2 rounded" canvas={false}>
            <CraftText
              ${propsString}
            />
          </Element>`
        }

        if (mapping.component === 'CraftButton') {
          const buttonProps = {
            text: content.replace(/<[^>]*>/g, '').trim(),
            ...props
          }
          
          const propsString = Object.entries(buttonProps)
            .map(([key, value]) => `${key}="${value}"`)
            .join('\n              ')

          return `<Element is="div" className="p-2 rounded" canvas={false}>
            <CraftButton
              ${propsString}
            />
          </Element>`
        }

        return match // fallback for other components
      })
    })

    return converted
  }

  private extractClassName(attributes: string): string {
    const classMatch = attributes.match(/className="([^"]*)"/)
    return classMatch ? classMatch[1] : ''
  }

  private generateConvertedComponent(componentName: string, jsxContent: string, config: ConversionConfig): string {
    const imports = `import { Element } from "@craftjs/core"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"`

    const interfaceDefinition = `interface ${componentName}Props extends SectionProps {
  // ${componentName} can inherit all Section properties and add any specific ones if needed
}`

    const componentFunction = `export function ${componentName}(props: ${componentName}Props) {
  ${config.wrapInSection ? `// Set component-specific defaults
  const componentProps = {
    gradient: "linear-gradient(to right, #2563eb, #9333ea)",
    padding: "0",
    minHeight: "auto",
    overflow: "hidden",
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.2",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props
  }

  return (
    <Section {...componentProps}>
      <Element id="${componentName.toLowerCase()}Content" is="div" canvas className="text-center">
        ${jsxContent}
      </Element>
    </Section>
  )` : `return (
    <div {...props}>
      <Element id="${componentName.toLowerCase()}Content" is="div" canvas>
        ${jsxContent}
      </Element>
    </div>
  )`}
}`

    const craftConfig = `${componentName}.craft = {
  displayName: "${componentName.replace(/([A-Z])/g, ' $1').trim()}",
  props: {
    gradient: "linear-gradient(to right, #2563eb, #9333ea)",
    padding: "0",
    minHeight: "auto",
    overflow: "hidden",
    className: "text-white relative",
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.2",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}`

    return `${imports}

${interfaceDefinition}

${componentFunction}

${craftConfig}
`
  }

  // CLI method to convert a file
  convertFile(inputPath: string, outputPath?: string): void {
    try {
      const converted = this.convertStaticComponent(inputPath)
      const output = outputPath || inputPath.replace('.jsx', '_converted.tsx')
      
      fs.writeFileSync(output, converted)
      console.log(`✅ Converted ${inputPath} -> ${output}`)
    } catch (error) {
      console.error(`❌ Error converting ${inputPath}:`, error)
    }
  }
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2)
  if (args.length === 0) {
    console.log('Usage: node static-to-craft-converter.ts <input-file> [output-file]')
    process.exit(1)
  }

  const converter = new StaticToCraftConverter()
  converter.convertFile(args[0], args[1])
}

export default StaticToCraftConverter
