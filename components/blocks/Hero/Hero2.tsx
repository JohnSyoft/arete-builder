import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero2Props extends SectionProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  imageUrl?: string
  imageAlt?: string
}

export function Hero2({
  title = "The Future of Web Design",
  subtitle = "Transform your ideas into beautiful, responsive websites. Our intuitive platform makes web design accessible to everyone.",
  primaryButtonText = "Start Building",
  secondaryButtonText = "View Examples",
  imageUrl = "/placeholder.svg?height=200&width=400",
  imageAlt = "Website Builder Preview",
  ...props
}: Hero2Props) {
  // Set Hero2-specific defaults
  const heroProps = {
    backgroundColor: "#ffffff",
    className: "text-gray-900",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...heroProps}>
      <Element id="hero2Content" is="div" canvas className="grid lg:grid-cols-2 gap-12 items-center">
        <Element id="hero2TextContent" is="div" canvas>
          {/* Title */}
          <Element is="div" className="p-2 rounded mb-6" canvas={false}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              <CraftText
                text={title}
                tagName="span"
                fontSize="text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-gray-900"
                margin=""
              />
            </h1>
          </Element>
          
          {/* Subtitle */}
          <Element is="div" className="p-2 rounded mb-8" canvas={false}>
            <p className="text-lg text-gray-600">
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
              />
            </p>
          </Element>
          
          {/* Buttons */}
          <Element is="div" className="flex flex-col sm:flex-row gap-4 mb-8" canvas>
            <Element is="div" canvas={false}>
              <CraftButton
                text={primaryButtonText}
                variant="default"
                size="lg"
                href=""
              />
            </Element>
            <Element is="div" canvas={false}>
              <CraftButton
                text={secondaryButtonText}
                variant="outline"
                size="lg"
                href=""
              />
            </Element>
          </Element>
          
          {/* Features */}
          <Element is="div" className="flex items-center gap-6 text-sm text-gray-500" canvas>
            <Element is="div" className="flex items-center gap-2" canvas={false}>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <CraftText
                text="No Credit Card Required"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-500"
                margin=""
              />
            </Element>
            <Element is="div" className="flex items-center gap-2" canvas={false}>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <CraftText
                text="Free Forever Plan"
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-500"
                margin=""
              />
            </Element>
          </Element>
        </Element>
        
        {/* Image Section */}
        <Element id="hero2ImageContent" is="div" canvas className="relative">
          <Element is="div" className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center" canvas={false}>
            <CraftImage
              src={imageUrl}
              alt={imageAlt}
              width="w-full"
              height="h-full"
            />
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Hero2.craft = {
  displayName: "Hero 2",
  props: {
    title: "The Future of Web Design",
    subtitle: "Transform your ideas into beautiful, responsive websites. Our intuitive platform makes web design accessible to everyone.",
    primaryButtonText: "Start Building",
    secondaryButtonText: "View Examples",
    imageUrl: "/placeholder.svg?height=200&width=400",
    imageAlt: "Website Builder Preview",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
