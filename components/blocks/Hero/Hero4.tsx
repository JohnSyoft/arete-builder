import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero4Props extends SectionProps {
  badge?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  feature1Icon?: string
  feature1Title?: string
  feature1Description?: string
  feature2Icon?: string
  feature2Title?: string
  feature2Description?: string
  feature3Icon?: string
  feature3Title?: string
  feature3Description?: string
}

export function Hero4({
  badge = "🚀 Launch Week Special",
  title = "Create. Launch.",
  titleHighlight = " Succeed.",
  subtitle = "Join thousands of entrepreneurs who've built their dream websites with our platform. No technical skills needed.",
  primaryButtonText = "Try Free for 14 Days",
  secondaryButtonText = "See Live Examples",
  feature1Icon = "⚡",
  feature1Title = "Lightning Fast",
  feature1Description = "Build and deploy in minutes, not hours",
  feature2Icon = "🎨",
  feature2Title = "Beautiful Designs",
  feature2Description = "Professional templates that convert",
  feature3Icon = "📱",
  feature3Title = "Mobile Ready",
  feature3Description = "Responsive on every device",
  ...props
}: Hero4Props) {
  // Set Hero4-specific defaults
  const heroProps = {
    gradient: "linear-gradient(135deg, #fed7aa, #fce7f3)", // orange-50 to pink-50
    padding: "4rem 1rem",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...heroProps}>
      <Element id="hero4Content" is="div" canvas>
        {/* Header Content */}
        <Element is="div" className="text-center mb-12" canvas>
          {/* Badge */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded inline-block mb-4" canvas={false}>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800">
              <CraftText
                text={badge}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-orange-800"
                margin=""
              />
            </Badge>
          </Element>
          
          {/* Title */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-6" canvas={false}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              <CraftText
                text={title}
                tagName="span"
                fontSize="text-4xl md:text-6xl"
                fontWeight="font-bold"
                color="text-gray-900"
                margin=""
              />
              <span className="text-orange-600">
                <CraftText
                  text={titleHighlight}
                  tagName="span"
                  fontSize="text-4xl md:text-6xl"
                  fontWeight="font-bold"
                  color="text-orange-600"
                  margin=""
                />
              </span>
            </h1>
          </Element>
          
          {/* Subtitle */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded max-w-2xl mx-auto mb-8" canvas={false}>
            <p className="text-xl text-gray-600">
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
              />
            </p>
          </Element>
        </Element>

        {/* Buttons */}
        <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center mb-12" canvas>
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
        <Element id="hero4Features" is="div" canvas className="grid md:grid-cols-3 gap-8 mt-16">
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature1Icon}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                <CraftText
                  text={feature1Title}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature1Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature2Icon}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                <CraftText
                  text={feature2Title}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature2Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature3Icon}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                <CraftText
                  text={feature3Title}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature3Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
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
    badge: "🚀 Launch Week Special",
    title: "Create. Launch.",
    titleHighlight: " Succeed.",
    subtitle: "Join thousands of entrepreneurs who've built their dream websites with our platform. No technical skills needed.",
    primaryButtonText: "Try Free for 14 Days",
    secondaryButtonText: "See Live Examples",
    feature1Icon: "⚡",
    feature1Title: "Lightning Fast",
    feature1Description: "Build and deploy in minutes, not hours",
    feature2Icon: "🎨",
    feature2Title: "Beautiful Designs",
    feature2Description: "Professional templates that convert",
    feature3Icon: "📱",
    feature3Title: "Mobile Ready",
    feature3Description: "Responsive on every device",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
