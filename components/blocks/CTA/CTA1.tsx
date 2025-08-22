import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface CTA1Props extends SectionProps {
  // CTA1 can inherit all Section properties and add any specific ones if needed
}

export function CTA1(props: CTA1Props) {
  // Set CTA-specific defaults
  const ctaProps = {
    backgroundColor: "#2563eb", // blue-600
    padding: "py-16 lg:py-24",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="ctaContent" is="div" canvas className="text-center space-y-8">
        {/* Main Heading */}
        <Element is="div" className="mb-4" canvas={false}>
          <CraftText
            text="Ready to Build Your Dream Website?"
            tagName="h2"
            fontSize="text-3xl md:text-4xl"
            fontWeight="font-bold"
            color="text-white"
            margin=""
            padding=""
          />
        </Element>
        
        {/* Subheading */}
        <Element is="div" className="mb-8 max-w-2xl mx-auto" canvas={false}>
          <CraftText
            text="Join thousands of creators who've already built amazing websites with our platform. Start your free trial today."
            tagName="p"
            fontSize="text-xl"
            fontWeight="font-normal"
            color="text-blue-100"
            margin=""
            padding=""
          />
        </Element>

        {/* Buttons */}
        <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center mb-4" canvas>
          <CraftButton
            text="Start Free Trial"
            size="lg"
            backgroundColor="bg-white"
            textColor="text-blue-600"
            padding="px-8 py-3"
            borderRadius="rounded-md"
          />
          <CraftButton
            text="View Pricing"
            size="lg"
            variant="outline"
            backgroundColor="bg-transparent"
            textColor="text-white"
            padding="px-8 py-3"
            borderRadius="rounded-md"
          />
        </Element>

        {/* Fine Print */}
        <Element is="div" className="mt-4" canvas={false}>
          <CraftText
            text="No credit card required • 14-day free trial • Cancel anytime"
            tagName="p"
            fontSize="text-sm"
            fontWeight="font-normal"
            color="text-blue-200"
            margin=""
            padding=""
          />
        </Element>
      </Element>
    </Section>
  )
}

CTA1.craft = {
  props: {},
  related: {}
}