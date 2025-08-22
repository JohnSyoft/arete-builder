import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface CTA1Props extends SectionProps {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  disclaimer?: string
}

export function CTA1({
  title = "Ready to Build Your Dream Website?",
  subtitle = "Join thousands of creators who've already built amazing websites with our platform. Start your free trial today.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "View Pricing",
  disclaimer = "No credit card required • 14-day free trial • Cancel anytime",
  ...props
}: CTA1Props) {
  // Set CTA1-specific defaults
  const ctaProps = {
    backgroundColor: "#2563eb", // blue-600
    padding: "4rem 1rem",
    className: "text-white",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="cta1Content" is="div" canvas className="text-center">
        {/* Title */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-4" canvas={false}>
          <h2 className="text-3xl md:text-4xl font-bold">
            <CraftText
              text={title}
              tagName="span"
              fontSize="text-3xl md:text-4xl"
              fontWeight="font-bold"
              color="text-white"
              margin=""
            />
          </h2>
        </Element>
        
        {/* Subtitle */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-8 max-w-2xl mx-auto" canvas={false}>
          <p className="text-xl text-blue-100">
            <CraftText
              text={subtitle}
              tagName="span"
              fontSize="text-xl"
              fontWeight="font-normal"
              color="text-blue-100"
              margin=""
            />
          </p>
        </Element>
        
        {/* Buttons */}
        <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center mb-4" canvas>
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
        
        {/* Disclaimer */}
        <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
          <p className="text-sm text-blue-200">
            <CraftText
              text={disclaimer}
              tagName="span"
              fontSize="text-sm"
              fontWeight="font-normal"
              color="text-blue-200"
              margin=""
            />
          </p>
        </Element>
      </Element>
    </Section>
  )
}

CTA1.craft = {
  displayName: "CTA 1",
  props: {
    title: "Ready to Build Your Dream Website?",
    subtitle: "Join thousands of creators who've already built amazing websites with our platform. Start your free trial today.",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "View Pricing",
    disclaimer: "No credit card required • 14-day free trial • Cancel anytime",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
