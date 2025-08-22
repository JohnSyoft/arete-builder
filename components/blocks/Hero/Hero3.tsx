import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero3Props extends SectionProps {
  badge?: string
  title?: string
  subtitle?: string
  buttonText?: string
  backgroundImageUrl?: string
  stat1Value?: string
  stat1Label?: string
  stat2Value?: string
  stat2Label?: string
  stat3Value?: string
  stat3Label?: string
}

export function Hero3({
  badge = "✨ New: AI-Powered Design Assistant",
  title = "Design Without Limits",
  subtitle = "Professional websites, zero code. Our AI helps you create pixel-perfect designs that convert.",
  buttonText = "Start Creating Now",
  backgroundImageUrl = "/placeholder.svg?height=1080&width=1920",
  stat1Value = "10M+",
  stat1Label = "Websites Created",
  stat2Value = "99.9%",
  stat2Label = "Uptime",
  stat3Value = "24/7",
  stat3Label = "Support",
  ...props
}: Hero3Props) {
  // Set Hero3-specific defaults
  const heroProps = {
    backgroundColor: "#111827", // gray-900
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    className: "text-white flex items-center justify-center",
    overflow: "hidden",
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.7",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props
  }

  return (
    <Section {...heroProps}>
      <Element id="hero3Content" is="div" canvas className="text-center relative z-10">
        {/* Badge */}
        <Element is="div" className="mb-8" canvas>
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded inline-block" canvas={false}>
            <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
              <CraftText
                text={badge}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-medium"
                color="text-blue-300"
                margin=""
              />
            </span>
          </Element>
        </Element>
        
        {/* Title */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-6" canvas={false}>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            <CraftText
              text={title}
              tagName="span"
              fontSize="text-5xl md:text-7xl"
              fontWeight="font-bold"
              color="text-transparent"
              margin=""
            />
          </h1>
        </Element>
        
        {/* Subtitle */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-10 max-w-2xl mx-auto" canvas={false}>
          <p className="text-xl md:text-2xl text-gray-300">
            <CraftText
              text={subtitle}
              tagName="span"
              fontSize="text-xl md:text-2xl"
              fontWeight="font-normal"
              color="text-gray-300"
              margin=""
            />
          </p>
        </Element>
        
        {/* CTA Button */}
        <Element is="div" className="mb-12" canvas={false}>
          <CraftButton
            text={buttonText}
            variant="default"
            size="lg"
            href=""
          />
        </Element>
        
        {/* Stats */}
        <Element id="hero3Stats" is="div" canvas className="grid grid-cols-3 gap-8 text-center">
          <Element is="div" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-3xl font-bold text-blue-400">
                <CraftText
                  text={stat1Value}
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-blue-400"
                  margin=""
                />
              </div>
              <div className="text-gray-400">
                <CraftText
                  text={stat1Label}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-400"
                  margin=""
                />
              </div>
            </Element>
          </Element>
          <Element is="div" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-3xl font-bold text-blue-400">
                <CraftText
                  text={stat2Value}
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-blue-400"
                  margin=""
                />
              </div>
              <div className="text-gray-400">
                <CraftText
                  text={stat2Label}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-400"
                  margin=""
                />
              </div>
            </Element>
          </Element>
          <Element is="div" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-3xl font-bold text-blue-400">
                <CraftText
                  text={stat3Value}
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-blue-400"
                  margin=""
                />
              </div>
              <div className="text-gray-400">
                <CraftText
                  text={stat3Label}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-400"
                  margin=""
                />
              </div>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Hero3.craft = {
  displayName: "Hero 3",
  props: {
    badge: "✨ New: AI-Powered Design Assistant",
    title: "Design Without Limits",
    subtitle: "Professional websites, zero code. Our AI helps you create pixel-perfect designs that convert.",
    buttonText: "Start Creating Now",
    backgroundImageUrl: "/placeholder.svg?height=1080&width=1920",
    stat1Value: "10M+",
    stat1Label: "Websites Created",
    stat2Value: "99.9%",
    stat2Label: "Uptime",
    stat3Value: "24/7",
    stat3Label: "Support",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
