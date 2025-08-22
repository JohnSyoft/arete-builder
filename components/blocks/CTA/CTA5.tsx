import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface CTA5Props extends SectionProps {
  badgeText?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  stat1Value?: string
  stat1Label?: string
  stat2Value?: string
  stat2Label?: string
  stat3Value?: string
  stat3Label?: string
}

export function CTA5({
  badgeText = "🌱 Eco-Friendly Hosting",
  title = "Build Websites That",
  titleHighlight = "Care for the Planet",
  subtitle = "Create beautiful, fast websites while reducing your carbon footprint. Our platform runs on 100% renewable energy.",
  primaryButtonText = "Start Building Green",
  secondaryButtonText = "Learn About Our Impact",
  stat1Value = "100%",
  stat1Label = "Renewable Energy",
  stat2Value = "Carbon",
  stat2Label = "Neutral Hosting",
  stat3Value = "2.5M kg",
  stat3Label = "CO₂ Saved",
  ...props
}: CTA5Props) {
  // Set CTA5-specific defaults
  const ctaProps = {
    backgroundColor: "bg-green-600",
    className: "text-white relative overflow-hidden",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center",
    hasOverlay: true,
    overlayColor: "bg-green-700/20",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="cta5Content" is="div" canvas className="relative">
        {/* Badge */}
        <Element is="div" className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 mb-6" canvas={false}>
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <span className="text-green-100 text-sm font-medium">
            <CraftText
              text={badgeText}
              tagName="span"
              fontSize="text-sm"
              fontWeight="font-medium"
              color="text-green-100"
              margin=""
            />
          </span>
        </Element>

        {/* Title */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-green-300 hover:ring-dashed rounded mb-6" canvas={false}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <CraftText
              text={title}
              tagName="span"
              fontSize="text-4xl md:text-5xl"
              fontWeight="font-bold"
              color="text-white"
              margin=""
            />
            <br />
            <span className="text-green-200">
              <CraftText
                text={titleHighlight}
                tagName="span"
                fontSize="text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-green-200"
                margin=""
              />
            </span>
          </h2>
        </Element>

        {/* Subtitle */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-green-300 hover:ring-dashed rounded mb-8" canvas={false}>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            <CraftText
              text={subtitle}
              tagName="span"
              fontSize="text-xl"
              fontWeight="font-normal"
              color="text-green-100"
              margin=""
            />
          </p>
        </Element>

        {/* Buttons */}
        <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center mb-12" canvas>
          <Element is="div" canvas={false}>
            <CraftButton
              text={primaryButtonText}
              variant="default"
              size="lg"
            />
          </Element>
          <Element is="div" canvas={false}>
            <CraftButton
              text={secondaryButtonText}
              variant="outline"
              size="lg"
            />
          </Element>
        </Element>

        {/* Stats */}
        <Element is="div" className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto" canvas>
          <Element is="div" className="text-center" canvas={false}>
            <div className="text-3xl font-bold text-green-200 mb-2">
              <CraftText
                text={stat1Value}
                tagName="span"
                fontSize="text-3xl"
                fontWeight="font-bold"
                color="text-green-200"
                margin=""
              />
            </div>
            <div className="text-green-100">
              <CraftText
                text={stat1Label}
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-green-100"
                margin=""
              />
            </div>
          </Element>
          <Element is="div" className="text-center" canvas={false}>
            <div className="text-3xl font-bold text-green-200 mb-2">
              <CraftText
                text={stat2Value}
                tagName="span"
                fontSize="text-3xl"
                fontWeight="font-bold"
                color="text-green-200"
                margin=""
              />
            </div>
            <div className="text-green-100">
              <CraftText
                text={stat2Label}
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-green-100"
                margin=""
              />
            </div>
          </Element>
          <Element is="div" className="text-center" canvas={false}>
            <div className="text-3xl font-bold text-green-200 mb-2">
              <CraftText
                text={stat3Value}
                tagName="span"
                fontSize="text-3xl"
                fontWeight="font-bold"
                color="text-green-200"
                margin=""
              />
            </div>
            <div className="text-green-100">
              <CraftText
                text={stat3Label}
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-green-100"
                margin=""
              />
            </div>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

CTA5.craft = {
  displayName: "CTA 5",
  props: {
    badgeText: "🌱 Eco-Friendly Hosting",
    title: "Build Websites That",
    titleHighlight: "Care for the Planet",
    subtitle: "Create beautiful, fast websites while reducing your carbon footprint. Our platform runs on 100% renewable energy.",
    primaryButtonText: "Start Building Green",
    secondaryButtonText: "Learn About Our Impact",
    stat1Value: "100%",
    stat1Label: "Renewable Energy",
    stat2Value: "Carbon",
    stat2Label: "Neutral Hosting",
    stat3Value: "2.5M kg",
    stat3Label: "CO₂ Saved",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
