#!/usr/bin/env node

/**
 * Tailwind to CraftJS Template Converter
 * 
 * This tool converts standard Tailwind HTML templates into CraftJS-compatible components
 * following the Arete builder structure patterns.
 */

const fs = require('fs')
const path = require('path')
const { JSDOM } = require('jsdom')

class TailwindToCraftConverter {
  constructor() {
    this.elementIdCounter = 0
    this.componentMappings = {
      'h1': 'CraftText',
      'h2': 'CraftText', 
      'h3': 'CraftText',
      'h4': 'CraftText',
      'h5': 'CraftText',
      'h6': 'CraftText',
      'p': 'CraftText',
      'span': 'CraftText',
      'button': 'CraftButton',
      'a': 'CraftButton', // Convert links to buttons for consistency
      'img': 'CraftImage',
      'input': 'CraftInput',
      'textarea': 'CraftTextarea'
    }
  }

  generateElementId(prefix = 'element') {
    return `${prefix}${++this.elementIdCounter}`
  }

  extractTailwindClasses(element) {
    const classList = element.className.split(' ')
    return {
      fontSize: this.extractClass(classList, 'text-', ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl']),
      fontWeight: this.extractClass(classList, 'font-', ['thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black']),
      textColor: this.extractColorClass(classList, 'text-'),
      backgroundColor: this.extractColorClass(classList, 'bg-'),
      padding: this.extractSpacingClass(classList, 'p'),
      margin: this.extractSpacingClass(classList, 'm'),
      borderRadius: this.extractClass(classList, 'rounded', ['', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'full']),
      // Add more extractions as needed
    }
  }

  extractClass(classList, prefix, suffixes) {
    const found = classList.find(cls => 
      suffixes.some(suffix => cls === `${prefix}${suffix}`)
    )
    return found || ''
  }

  extractColorClass(classList, prefix) {
    return classList.find(cls => cls.startsWith(prefix)) || ''
  }

  extractSpacingClass(classList, prefix) {
    const patterns = [`${prefix}-`, `${prefix}x-`, `${prefix}y-`, `${prefix}t-`, `${prefix}r-`, `${prefix}b-`, `${prefix}l-`]
    return classList.filter(cls => 
      patterns.some(pattern => cls.startsWith(pattern))
    ).join(' ')
  }

  convertElementToCraft(element, depth = 0) {
    const tagName = element.tagName.toLowerCase()
    const craftComponent = this.componentMappings[tagName]
    const classes = this.extractTailwindClasses(element)
    const elementId = this.generateElementId()

    if (craftComponent) {
      return this.generateCraftComponent(craftComponent, element, classes, elementId, depth)
    } else {
      // For div/section containers, wrap in Element
      return this.generateElementWrapper(element, elementId, depth)
    }
  }

  generateCraftComponent(componentType, element, classes, elementId, depth) {
    const indent = '  '.repeat(depth + 2)
    
    switch (componentType) {
      case 'CraftText':
        return `${indent}<Element is="div" className="p-2 rounded" canvas={false}>
${indent}  <${element.tagName.toLowerCase()} className="${element.className}">
${indent}    <CraftText
${indent}      text="${element.textContent || 'Edit text'}"
${indent}      tagName="span"
${indent}      fontSize="${classes.fontSize}"
${indent}      fontWeight="${classes.fontWeight}"
${indent}      color="${classes.textColor}"
${indent}      margin="${classes.margin}"
${indent}      padding="${classes.padding}"
${indent}    />
${indent}  </${element.tagName.toLowerCase()}>
${indent}</Element>`

      case 'CraftButton':
        return `${indent}<CraftButton
${indent}  text="${element.textContent || 'Button'}"
${indent}  size="lg"
${indent}  backgroundColor="${classes.backgroundColor}"
${indent}  textColor="${classes.textColor}"
${indent}  borderRadius="${classes.borderRadius}"
${indent}  margin="${classes.margin}"
${indent}  padding="${classes.padding}"
${indent}/>`

      case 'CraftImage':
        return `${indent}<CraftImage
${indent}  src="${element.src || '/placeholder.svg'}"
${indent}  alt="${element.alt || 'Image'}"
${indent}  className="${element.className}"
${indent}/>`

      default:
        return `${indent}<!-- Unsupported component: ${componentType} -->`
    }
  }

  generateElementWrapper(element, elementId, depth) {
    const indent = '  '.repeat(depth + 2)
    const children = Array.from(element.children)
      .map(child => this.convertElementToCraft(child, depth + 1))
      .join('\n')

    return `${indent}<Element id="${elementId}" is="${element.tagName.toLowerCase()}" canvas className="${element.className}">
${children}
${indent}</Element>`
  }

  generateComponentTemplate(html, componentName, componentType = 'Hero') {
    const dom = new JSDOM(html)
    const body = dom.window.document.body
    const mainElement = body.children[0] // Assume first element is the main container

    const convertedContent = this.convertElementToCraft(mainElement, 0)

    return `import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface ${componentName}Props extends SectionProps {
  // Add specific props here
}

export function ${componentName}(props: ${componentName}Props) {
  const defaultProps = {
    padding: "py-16 px-4",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props
  }

  return (
    <Section {...defaultProps}>
${convertedContent}
    </Section>
  )
}

${componentName}.craft = {
  displayName: "${componentName}",
  props: {
    padding: "py-16 px-4",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}`
  }

  convertFile(inputPath, outputPath, componentName) {
    try {
      const html = fs.readFileSync(inputPath, 'utf8')
      const converted = this.generateComponentTemplate(html, componentName)
      fs.writeFileSync(outputPath, converted)
      console.log(`✅ Converted ${inputPath} to ${outputPath}`)
    } catch (error) {
      console.error(`❌ Error converting ${inputPath}:`, error.message)
    }
  }
}

// CLI Usage
if (require.main === module) {
  const converter = new TailwindToCraftConverter()
  const [,, inputPath, componentName, outputPath] = process.argv

  if (!inputPath || !componentName) {
    console.log(`
Usage: node template-converter.js <input-html-file> <ComponentName> [output-path]

Examples:
  node template-converter.js hero.html Hero6 ./components/blocks/Hero/Hero6.tsx
  node template-converter.js pricing.html Pricing6 ./components/blocks/Pricing/Pricing6.tsx
    `)
    process.exit(1)
  }

  const output = outputPath || `./components/blocks/${componentName}/${componentName}.tsx`
  converter.convertFile(inputPath, output, componentName)
}

module.exports = TailwindToCraftConverter
