#!/usr/bin/env node

/**
 * Quick HTML to CraftJS Component Converter
 * 
 * Converts your static HTML components into proper CraftJS components
 * that actually work with drag & drop and property panels
 */

import fs from 'fs'

class QuickConverter {
  
  static convertHero4ToCraftJS(): string {
    return `import { Element } from "@craftjs/core"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero4Props extends SectionProps {
  // Hero4 can inherit all Section properties
}

export function Hero4(props: Hero4Props) {
  const heroProps = {
    className: "bg-gradient-to-br from-orange-50 to-pink-50 text-gray-900",
    padding: "0",
    minHeight: "auto",
    overflow: "hidden",
    hasOverlay: false,
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...heroProps}>
      <Element id="hero4Content" is="div" canvas>
        {/* Main Content Container */}
        <Element is="div" className="max-w-7xl mx-auto" canvas>
          
          {/* Header Section */}
          <Element is="div" className="text-center mb-12" canvas>
            {/* Main Title */}
            <Element is="div" className="p-2 rounded" canvas={false}>
              <CraftText
                text="Create. Launch."
                tagName="h1"
                fontSize="text-4xl md:text-6xl"
                fontWeight="font-bold"
                color="text-gray-900"
                margin="mb-2"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>
            
            {/* Highlighted Text */}
            <Element is="div" className="p-2 rounded" canvas={false}>
              <CraftText
                text="Succeed."
                tagName="h1"
                fontSize="text-4xl md:text-6xl"
                fontWeight="font-bold"
                color="text-orange-600"
                margin="mb-6"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>
            
            {/* Subtitle */}
            <Element is="div" className="p-2 rounded max-w-2xl mx-auto" canvas={false}>
              <CraftText
                text="Join thousands of entrepreneurs who've built their dream websites with our platform. No technical skills needed."
                tagName="p"
                fontSize="text-xl"
                color="text-gray-600"
                margin="mb-8"
                textAlign="text-center"
                lineHeight="leading-relaxed"
              />
            </Element>
          </Element>

          {/* Buttons Section */}
          <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center mb-12 p-2" canvas>
            <CraftButton
              text="Start Building Free"
              size="lg"
              backgroundColor="#ea580c"
              textColor="#ffffff"
              borderRadius="8px"
              padding="px-8 py-3"
              width="w-full sm:w-auto"
            />
            <CraftButton
              text="Watch Demo"
              variant="outline"
              size="lg"
              backgroundColor="transparent"
              textColor="#ea580c"
              borderRadius="8px"
              padding="px-8 py-3"
              width="w-full sm:w-auto"
            />
          </Element>

          {/* Features Grid */}
          <Element is="div" className="grid md:grid-cols-3 gap-8 mt-16" canvas>
            
            {/* Feature 1 */}
            <Element is="div" className="text-center p-4" canvas>
              <Element is="div" className="p-2 rounded" canvas={false}>
                <CraftText
                  text="Lightning Fast"
                  tagName="h3"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin="mb-2"
                  textAlign="text-center"
                />
              </Element>
              <Element is="div" className="p-2 rounded" canvas={false}>
                <CraftText
                  text="Build and deploy in minutes, not hours"
                  tagName="p"
                  color="text-gray-600"
                  textAlign="text-center"
                />
              </Element>
            </Element>

            {/* Feature 2 */}
            <Element is="div" className="text-center p-4" canvas>
              <Element is="div" className="p-2 rounded" canvas={false}>
                <CraftText
                  text="Beautiful Designs"
                  tagName="h3"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin="mb-2"
                  textAlign="text-center"
                />
              </Element>
              <Element is="div" className="p-2 rounded" canvas={false}>
                <CraftText
                  text="Professional templates that convert"
                  tagName="p"
                  color="text-gray-600"
                  textAlign="text-center"
                />
              </Element>
            </Element>

            {/* Feature 3 */}
            <Element is="div" className="text-center p-4" canvas>
              <Element is="div" className="p-2 rounded" canvas={false}>
                <CraftText
                  text="Mobile Ready"
                  tagName="h3"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin="mb-2"
                  textAlign="text-center"
                />
              </Element>
              <Element is="div" className="p-2 rounded" canvas={false}>
                <CraftText
                  text="Responsive on every device"
                  tagName="p"
                  color="text-gray-600"
                  textAlign="text-center"
                />
              </Element>
            </Element>

          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Hero4.craft = {
  displayName: "Hero 4",
  props: {
    className: "bg-gradient-to-br from-orange-50 to-pink-50 text-gray-900",
    padding: "0",
    minHeight: "auto",
    overflow: "hidden",
    hasOverlay: false,
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}
`
  }

  static generateComponent(name: string, config: any): string {
    // This would be expanded to handle different component types
    if (name === 'Hero4') {
      return this.convertHero4ToCraftJS()
    }
    
    return "// Component conversion not implemented yet"
  }

  static saveComponent(name: string, code: string, outputPath: string): void {
    fs.writeFileSync(outputPath, code)
    console.log(`✅ Generated ${name} component at ${outputPath}`)
  }
}

// Generate the working Hero4 component
const hero4Code = QuickConverter.convertHero4ToCraftJS()
QuickConverter.saveComponent(
  'Hero4', 
  hero4Code, 
  '/Users/johnb/Documents/arete/arete-builder/components/blocks/Hero/Hero4_Fixed.tsx'
)

export default QuickConverter
