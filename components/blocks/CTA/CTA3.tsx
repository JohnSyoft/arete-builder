import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Input as CraftInput } from "@/components/blocks/Basic/Input"
import { Badge as CraftBadge } from "@/components/blocks/Basic/Badge"
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
  // Set CTA-specific defaults to match the original template exactly
  const ctaProps = {
    backgroundColor: "#111827", // gray-900
    padding: "0",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    className: "text-white",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="ctaContent" is="div" canvas className="text-center space-y-8">
        {/* Badge */}
        <Element is="div" className="mb-8" canvas>
          <span className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-6">
            <CraftText
              text={badgeText}
              tagName="span"
              fontSize=""
              fontWeight=""
              color=""
              margin=""
              padding=""
            />
          </span>
        </Element>
        
        {/* Main Heading */}
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
            <span className="text-blue-400">
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
          <p className="text-xl text-gray-300 mb-8">
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

        {/* Form Section */}
        <Element is="div" className="bg-gray-800 rounded-2xl p-8 mb-8" canvas>
          <Element is="div" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4" canvas>
            <CraftInput
              placeholder={inputPlaceholder}
              type="email"
              backgroundColor="#374151"
              borderColor="#4b5563"
              textColor="#ffffff"
              className="placeholder:text-gray-400"
            />
            <CraftButton
              text={buttonText}
              backgroundColor="#2563eb"
              textColor="#ffffff"
              padding="px-6 py-2"
              borderRadius="rounded-md"
            />
          </Element>
          
          <Element is="div" className="mt-4" canvas={false}>
            <p className="text-sm text-gray-400 mt-4">
              <CraftText
                text={disclaimerText}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </p>
          </Element>
        </Element>

        {/* Stats Grid */}
        <Element is="div" className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" canvas>
          {/* Stat 1 */}
          <Element is="div" canvas>
            <div className="text-2xl font-bold text-blue-400 mb-2">
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
            <div className="text-gray-400">
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

          {/* Stat 2 */}
          <Element is="div" canvas>
            <div className="text-2xl font-bold text-blue-400 mb-2">
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
            <div className="text-gray-400">
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

          {/* Stat 3 */}
          <Element is="div" canvas>
            <div className="text-2xl font-bold text-blue-400 mb-2">
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
            <div className="text-gray-400">
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

CTA3.craft = {
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
    stat3Label: "Expert Support"
  },
  related: {}
}