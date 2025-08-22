import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero3Props extends SectionProps {
  // Hero3 can inherit all Section properties and add any specific ones if needed
}

export function Hero3(props: Hero3Props) {
  // Set Hero3-specific defaults to match the original design
  const heroProps = {
    backgroundColor: "#111827", // gray-900
    backgroundImage: "",
    className: "text-white relative overflow-hidden",
    minHeight: "100vh",
    padding: "0",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    // Enable overlay for the background image effect
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.7",
    ...props
  }

  return (
    <Section {...heroProps}>
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <CraftImage
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          width="w-full"
          height="h-full"
          objectFit="object-cover"
        />
      </div>
      
      <Element id="hero3Content" is="div" canvas className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Badge */}
          <Element is="div" className="mb-8" canvas={false}>
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
              <CraftText
                text="✨ New: AI-Powered Design Assistant"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-medium"
                color="text-blue-300"
                margin=""
                padding=""
              />
            </span>
          </Element>

          {/* Main Title */}
          <Element is="div" className="p-2 rounded mb-6" canvas={false}>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              <CraftText
                text="Design Without Limits"
                tagName="span"
                fontSize="text-5xl md:text-7xl"
                fontWeight="font-bold"
                color="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                margin=""
                padding=""
              />
            </h1>
          </Element>

          {/* Subtitle */}
          <Element is="div" className="p-2 rounded mb-10 max-w-2xl mx-auto" canvas={false}>
            <p className="text-xl md:text-2xl text-gray-300">
              <CraftText
                text="Professional websites, zero code. Our AI helps you create pixel-perfect designs that convert."
                tagName="span"
                fontSize="text-xl md:text-2xl"
                fontWeight="font-normal"
                color="text-gray-300"
                margin=""
                padding=""
              />
            </p>
          </Element>

          {/* CTA Button */}
          <Element is="div" className="mb-12" canvas={false}>
            <CraftButton
              text="Start Creating Now"
              size="lg"
              backgroundColor="#2563eb"
              textColor="#ffffff"
              borderRadius="8px"
              margin=""
              padding="px-8 py-4 text-lg"
              width="w-auto"
            />
          </Element>

          {/* Stats Grid */}
          <Element is="div" className="grid grid-cols-3 gap-8 text-center" canvas>
            <Element is="div" className="text-center" canvas={false}>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                <CraftText
                  text="10M+"
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-blue-400"
                  margin=""
                  padding=""
                />
              </div>
              <div className="text-gray-400">
                <CraftText
                  text="Websites Created"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-400"
                  margin=""
                  padding=""
                />
              </div>
            </Element>

            <Element is="div" className="text-center" canvas={false}>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                <CraftText
                  text="99.9%"
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-blue-400"
                  margin=""
                  padding=""
                />
              </div>
              <div className="text-gray-400">
                <CraftText
                  text="Uptime"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-400"
                  margin=""
                  padding=""
                />
              </div>
            </Element>

            <Element is="div" className="text-center" canvas={false}>
              <div className="text-3xl font-bold text-blue-400 mb-2">
                <CraftText
                  text="24/7"
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-blue-400"
                  margin=""
                  padding=""
                />
              </div>
              <div className="text-gray-400">
                <CraftText
                  text="Support"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-400"
                  margin=""
                  padding=""
                />
              </div>
            </Element>
          </Element>
        </div>
      </Element>
    </Section>
  )
}

Hero3.craft = {
  displayName: "Hero 3",
  props: {
    backgroundColor: "#111827", // gray-900
    backgroundImage: "",
    className: "text-white relative overflow-hidden",
    minHeight: "100vh",
    padding: "0",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.7"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}