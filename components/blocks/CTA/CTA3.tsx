import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface CTA3Props extends SectionProps {
  badgeText?: string
  title?: string
  titleHighlight?: string
  subtitle?: string
  inputPlaceholder?: string
  buttonText?: string
  disclaimerText?: string
  stat1Value?: string
  stat1Label?: string
  stat2Value?: string
  stat2Label?: string
  stat3Value?: string
  stat3Label?: string
}

export function CTA3({
  badgeText = "🚀 Limited Time Offer",
  title = "Launch Your Website in",
  titleHighlight = " 24 Hours",
  subtitle = "Get your professional website live in just one day. Our experts will help you every step of the way.",
  inputPlaceholder = "Enter your email",
  buttonText = "Get Started",
  disclaimerText = "Join 50,000+ users who trust us with their websites",
  stat1Value = "24hrs",
  stat1Label = "Launch Time",
  stat2Value = "99.9%",
  stat2Label = "Uptime SLA",
  stat3Value = "24/7",
  stat3Label = "Expert Support",
  ...props
}: CTA3Props) {
  // Set CTA3-specific defaults
  const ctaProps = {
    backgroundColor: "bg-gray-900",
    className: "text-white",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="cta3Content" is="div" canvas>
        {/* Badge */}
        <Element is="div" className="mb-8" canvas={false}>
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            <CraftText
              text={badgeText}
              tagName="span"
              fontSize="text-sm"
              fontWeight="font-medium"
              color="text-blue-300"
              margin=""
            />
          </span>
        </Element>

        {/* Title */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-6" canvas={false}>
          <h2 className="text-4xl md:text-5xl font-bold">
            <CraftText
              text={title}
              tagName="span"
              fontSize="text-4xl md:text-5xl"
              fontWeight="font-bold"
              color="text-white"
              margin=""
            />
            <span className="text-blue-400">
              <CraftText
                text={titleHighlight}
                tagName="span"
                fontSize="text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-blue-400"
                margin=""
              />
            </span>
          </h2>
        </Element>

        {/* Subtitle */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-8" canvas={false}>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            <CraftText
              text={subtitle}
              tagName="span"
              fontSize="text-xl"
              fontWeight="font-normal"
              color="text-gray-300"
              margin=""
            />
          </p>
        </Element>

        {/* Form Section */}
        <Element is="div" className="bg-gray-800 rounded-2xl p-8 mb-8" canvas>
          <Element is="div" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" canvas={false}>
            <Input
              placeholder={inputPlaceholder}
              className="bg-gray-700 border-gray-600 text-white placeholder:text-gray-400"
            />
            <CraftButton
              text={buttonText}
              variant="default"
              size="default"
            />
          </Element>
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mt-4" canvas={false}>
            <p className="text-sm text-gray-400">
              <CraftText
                text={disclaimerText}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-normal"
                color="text-gray-400"
                margin=""
              />
            </p>
          </Element>
        </Element>

        {/* Stats */}
        <Element is="div" className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" canvas>
          <Element is="div" canvas={false}>
            <div className="text-2xl font-bold text-blue-400 mb-2">
              <CraftText
                text={stat1Value}
                tagName="span"
                fontSize="text-2xl"
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
          <Element is="div" canvas={false}>
            <div className="text-2xl font-bold text-blue-400 mb-2">
              <CraftText
                text={stat2Value}
                tagName="span"
                fontSize="text-2xl"
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
          <Element is="div" canvas={false}>
            <div className="text-2xl font-bold text-blue-400 mb-2">
              <CraftText
                text={stat3Value}
                tagName="span"
                fontSize="text-2xl"
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
    </Section>
  )
}

CTA3.craft = {
  displayName: "CTA 3",
  props: {
    badgeText: "🚀 Limited Time Offer",
    title: "Launch Your Website in",
    titleHighlight: " 24 Hours",
    subtitle: "Get your professional website live in just one day. Our experts will help you every step of the way.",
    inputPlaceholder: "Enter your email",
    buttonText: "Get Started",
    disclaimerText: "Join 50,000+ users who trust us with their websites",
    stat1Value: "24hrs",
    stat1Label: "Launch Time",
    stat2Value: "99.9%",
    stat2Label: "Uptime SLA",
    stat3Value: "24/7",
    stat3Label: "Expert Support",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
