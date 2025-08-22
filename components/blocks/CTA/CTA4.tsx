import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface CTA4Props extends SectionProps {
  title?: string
  subtitle?: string
  feature1?: string
  feature2?: string
  feature3?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  imageUrl?: string
  imageAlt?: string
}

export function CTA4({
  title = "Stop Losing Customers to Bad Design",
  subtitle = "Your website is your first impression. Make it count with our conversion-optimized templates and professional design tools.",
  feature1 = "Increase conversions by up to 300%",
  feature2 = "Mobile-first responsive design",
  feature3 = "Built-in SEO optimization",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "View Examples",
  imageUrl = "/placeholder.svg?height=400&width=400",
  imageAlt = "Conversion Chart",
  ...props
}: CTA4Props) {
  // Set CTA4-specific defaults
  const ctaProps = {
    gradient: "linear-gradient(to bottom right, #fff7ed, #fdf2f8)", // orange-50 to pink-50
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="cta4Card" is="div" canvas className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <Element id="cta4Grid" is="div" canvas className="grid lg:grid-cols-2">
          {/* Content Side */}
          <Element id="cta4Content" is="div" canvas className="p-8 lg:p-12">
            {/* Title */}
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-4" canvas={false}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                <CraftText
                  text={title}
                  tagName="span"
                  fontSize="text-3xl md:text-4xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  margin=""
                />
              </h2>
            </Element>

            {/* Subtitle */}
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-6" canvas={false}>
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

            {/* Features */}
            <Element is="div" className="space-y-4 mb-8" canvas>
              <Element is="div" className="flex items-center space-x-3" canvas={false}>
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  <CraftText
                    text={feature1}
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    margin=""
                  />
                </span>
              </Element>
              <Element is="div" className="flex items-center space-x-3" canvas={false}>
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  <CraftText
                    text={feature2}
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    margin=""
                  />
                </span>
              </Element>
              <Element is="div" className="flex items-center space-x-3" canvas={false}>
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  <CraftText
                    text={feature3}
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    margin=""
                  />
                </span>
              </Element>
            </Element>

            {/* Buttons */}
            <Element is="div" className="flex flex-col sm:flex-row gap-4" canvas>
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
          </Element>

          {/* Image Side */}
          <Element id="cta4ImageSide" is="div" canvas className="bg-gradient-to-br from-orange-100 to-pink-100 p-8 lg:p-12 flex items-center justify-center">
            <Element is="div" className="max-w-sm" canvas={false}>
              <CraftImage
                src={imageUrl}
                alt={imageAlt}
                width="w-full"
                height="h-auto"
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

CTA4.craft = {
  displayName: "CTA 4",
  props: {
    title: "Stop Losing Customers to Bad Design",
    subtitle: "Your website is your first impression. Make it count with our conversion-optimized templates and professional design tools.",
    feature1: "Increase conversions by up to 300%",
    feature2: "Mobile-first responsive design",
    feature3: "Built-in SEO optimization",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "View Examples",
    imageUrl: "/placeholder.svg?height=400&width=400",
    imageAlt: "Conversion Chart",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
