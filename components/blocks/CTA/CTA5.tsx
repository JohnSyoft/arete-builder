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
  // Set CTA-specific defaults to match the original template exactly
  const ctaProps = {
    backgroundColor: "#16a34a", // green-600
    padding: "0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    className: "text-white relative overflow-hidden",
    ...props
  }

  return (
    <Section {...ctaProps}>
      {/* Background overlay */}
      <div className="absolute inset-0 bg-green-700/20"></div>
      
      {/* Content */}
      <Element id="ctaContent" is="div" className="relative text-center" canvas>
        {/* Badge with pulse animation */}
        <Element is="div" className="inline-flex items-center space-x-2 bg-green-500/20 rounded-full px-4 py-2 mb-6" canvas>
          <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
          <CraftText
            text={badgeText}
            tagName="span"
            fontSize="text-sm"
            fontWeight="font-medium"
            color="text-green-100"
            margin=""
            padding=""
          />
        </Element>

        {/* Main Heading with Emphasis */}
        <Element is="div" className="mb-6" canvas={false}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <CraftText
              text={title}
              tagName="span"
              fontSize=""
              fontWeight=""
              color=""
              margin=""
              padding=""
            />
            <br />
            <span className="text-green-200">
              <CraftText
                text={titleHighlight}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </span>
          </h2>
        </Element>

        {/* Description */}
        <Element is="div" className="mb-8 max-w-2xl mx-auto" canvas={false}>
          <p className="text-xl text-green-100">
            <CraftText
              text={subtitle}
              tagName="span"
              fontSize=""
              fontWeight=""
              color=""
              margin=""
              padding=""
            />
          </p>
        </Element>

        {/* Buttons */}
        <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center mb-12" canvas>
          <CraftButton
            text={primaryButtonText}
            size="lg"
            backgroundColor="#ffffff"
            textColor="#16a34a"
            padding="px-8 py-3"
            borderRadius="rounded-md"
          />
          <CraftButton
            text={secondaryButtonText}
            size="lg"
            variant="outline"
            backgroundColor="transparent"
            textColor="#ffffff"
            padding="px-8 py-3"
            borderRadius="rounded-md"
          />
        </Element>

        {/* Stats Grid */}
        <Element is="div" className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto" canvas>
          <Element is="div" className="text-center" canvas>
            <div className="text-3xl font-bold text-green-200 mb-2">
              <CraftText
                text={stat1Value}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </div>
            <div className="text-green-100">
              <CraftText
                text={stat1Label}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </div>
          </Element>
          <Element is="div" className="text-center" canvas>
            <div className="text-3xl font-bold text-green-200 mb-2">
              <CraftText
                text={stat2Value}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </div>
            <div className="text-green-100">
              <CraftText
                text={stat2Label}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </div>
          </Element>
          <Element is="div" className="text-center" canvas>
            <div className="text-3xl font-bold text-green-200 mb-2">
              <CraftText
                text={stat3Value}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </div>
            <div className="text-green-100">
              <CraftText
                text={stat3Label}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </div>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

CTA5.craft = {
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
    stat3Label: "CO₂ Saved"
  },
  related: {}
}