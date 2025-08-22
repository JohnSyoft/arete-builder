import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero5Props extends SectionProps {
  title?: string
  titleHighlight?: string
  subtitle?: string
  feature1?: string
  feature2?: string
  feature3?: string
  buttonText?: string
  imageUrl?: string
  imageAlt?: string
  conversionRate?: string
}

export function Hero5({
  title = "Build Websites That",
  titleHighlight = "Convert",
  subtitle = "Stop losing customers to poor website design. Our conversion-optimized templates and tools help you build websites that actually drive results.",
  feature1 = "A/B tested templates",
  feature2 = "Built-in analytics",
  feature3 = "SEO optimization",
  buttonText = "Start Your Free Trial",
  imageUrl = "/placeholder.svg?height=500&width=600",
  imageAlt = "Analytics Dashboard",
  conversionRate = "+127%",
  ...props
}: Hero5Props) {
  // Set Hero5-specific defaults
  const heroProps = {
    backgroundColor: "#ffffff",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...heroProps}>
      <Element id="hero5Content" is="div" canvas className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Text Content */}
        <Element id="hero5TextContent" is="div" canvas className="lg:col-span-5">
          {/* Title */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-6" canvas={false}>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              <CraftText
                text={title}
                tagName="span"
                fontSize="text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-gray-900"
                margin=""
              />
              <span className="relative">
                <span className="text-green-600">
                  <CraftText
                    text={titleHighlight}
                    tagName="span"
                    fontSize="text-4xl md:text-5xl"
                    fontWeight="font-bold"
                    color="text-green-600"
                    margin=""
                  />
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 12" fill="none">
                  <path
                    d="M2 10C20 2 40 2 60 6C80 10 90 4 98 6"
                    stroke="#16a34a"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </Element>
          
          {/* Subtitle */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-8" canvas={false}>
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
            <Element is="div" className="flex items-center gap-3" canvas={false}>
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
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
            <Element is="div" className="flex items-center gap-3" canvas={false}>
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
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
            <Element is="div" className="flex items-center gap-3" canvas={false}>
              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
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
          
          {/* CTA Button */}
          <Element is="div" canvas={false}>
            <CraftButton
              text={buttonText}
              variant="default"
              size="lg"
              href=""
            />
          </Element>
        </Element>
        
        {/* Image Content */}
        <Element id="hero5ImageContent" is="div" canvas className="lg:col-span-7">
          <Element is="div" className="relative" canvas={false}>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <CraftImage
                src={imageUrl}
                alt={imageAlt}
                width="w-full"
                height="h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
              <div className="text-sm text-gray-600">Conversion Rate</div>
              <div className="text-2xl font-bold text-green-600">
                <CraftText
                  text={conversionRate}
                  tagName="span"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-green-600"
                  margin=""
                />
              </div>
            </div>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Hero5.craft = {
  displayName: "Hero 5",
  props: {
    title: "Build Websites That",
    titleHighlight: "Convert",
    subtitle: "Stop losing customers to poor website design. Our conversion-optimized templates and tools help you build websites that actually drive results.",
    feature1: "A/B tested templates",
    feature2: "Built-in analytics",
    feature3: "SEO optimization",
    buttonText: "Start Your Free Trial",
    imageUrl: "/placeholder.svg?height=500&width=600",
    imageAlt: "Analytics Dashboard",
    conversionRate: "+127%",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
