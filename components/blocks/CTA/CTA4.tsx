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
  // Set CTA-specific defaults to match the original template exactly
  const ctaProps = {
    gradient: "linear-gradient(to bottom right, #fff7ed, #fdf2f8)", // from-orange-50 to-pink-50
    padding: "0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    className: "",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="ctaContent" is="div" canvas className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <Element is="div" className="grid lg:grid-cols-2" canvas>
          {/* Content Section */}
          <Element is="div" className="p-8 lg:p-12 space-y-6" canvas>
            {/* Main Heading */}
            <Element is="div" className="mb-4" canvas={false}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <CraftText
                  text={title}
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </h2>
            </Element>
            
            {/* Description */}
            <Element is="div" className="mb-6" canvas={false}>
              <p className="text-lg text-gray-600 mb-6">
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

            {/* Feature List */}
            <Element is="div" className="space-y-4 mb-8" canvas>
              <Element is="div" className="flex items-center space-x-3" canvas>
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  <CraftText
                    text={feature1}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </span>
              </Element>
              <Element is="div" className="flex items-center space-x-3" canvas>
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  <CraftText
                    text={feature2}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </span>
              </Element>
              <Element is="div" className="flex items-center space-x-3" canvas>
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-orange-600 text-sm">✓</span>
                </div>
                <span className="text-gray-700">
                  <CraftText
                    text={feature3}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </span>
              </Element>
            </Element>

            {/* Buttons */}
            <Element is="div" className="flex flex-col sm:flex-row gap-4" canvas>
              <CraftButton
                text={primaryButtonText}
                size="lg"
                backgroundColor="#f97316" // orange-500 as fallback for gradient
                textColor="#ffffff"
                padding="px-8 py-3"
                borderRadius="rounded-md"
              />
              <CraftButton
                text={secondaryButtonText}
                size="lg"
                variant="outline"
                backgroundColor="transparent"
                textColor="#ea580c" // orange-600
                padding="px-8 py-3"
                borderRadius="rounded-md"
              />
            </Element>
          </Element>

          {/* Image Section */}
          <Element is="div" className="bg-gradient-to-br from-orange-100 to-pink-100 p-8 lg:p-12 flex items-center justify-center" canvas>
            <Element is="div" className="w-full h-auto max-w-sm" canvas={false}>
              <CraftImage
                src={imageUrl}
                alt={imageAlt}
                width="400"
                height="400"
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

CTA4.craft = {
  props: {
    title: "Stop Losing Customers to Bad Design",
    subtitle: "Your website is your first impression. Make it count with our conversion-optimized templates and professional design tools.",
    feature1: "Increase conversions by up to 300%",
    feature2: "Mobile-first responsive design",
    feature3: "Built-in SEO optimization",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "View Examples",
    imageUrl: "/placeholder.svg?height=400&width=400",
    imageAlt: "Conversion Chart"
  },
  related: {}
}