import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero1Props extends SectionProps {
  // Hero1 can inherit all Section properties and add any specific ones if needed
}

export function Hero1(props: Hero1Props) {
  // Set Hero-specific defaults
  const heroProps = {
    gradient: "linear-gradient(45deg, #2563eb, #7c3aed)",
    padding: "4rem 1rem",
    minHeight: "400px",
    overflow: "hidden",
    className: "text-white",
    // Enable overlay and content wrapper by default for Hero
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.2",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-24 lg:py-32",
    ...props
  }

  return (
    <Section {...heroProps}>
      <Element id="heroContent" is="div" canvas className="text-center">
          {/* Title as draggable component with padding for drag area */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <CraftText
                text="Build Amazing Websites"
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
              />
            </h1>
          </Element>
          
          {/* Subtitle as draggable component with padding for drag area */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded max-w-3xl mx-auto" canvas={false}>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              <CraftText
                text="Create stunning, professional websites with our powerful drag-and-drop builder. No coding required."
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
              />
            </p>
          </Element>
          
          {/* Buttons container with individual draggable buttons */}
          <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center" canvas>
            <CraftButton
              text="Get Started Free"
              size="lg"
              backgroundColor="white"
              textColor="#2563eb"
              borderRadius="8px"
              margin=""
              padding="px-6 py-3"
              width="w-auto"
            />
            <CraftButton
              text="Watch Demo"
              variant="outline"
              size="lg"
              backgroundColor="transparent"
              textColor="white"
              borderRadius="8px"
              margin=""
              padding="px-6 py-3"
              width="w-auto"
            />
          </Element>
        </Element>
    </Section>
  )
}

Hero1.craft = {
  displayName: "Hero 1",
  props: {
    // Use Section's default props with Hero-specific overrides
    gradient: "linear-gradient(45deg, #2563eb, #7c3aed)",
    padding: "4rem 1rem",
    minHeight: "400px",
    overflow: "hidden",
    className: "text-white",
    // Enable overlay and content wrapper by default for Hero
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.2",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}
