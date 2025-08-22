import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface CTA2Props extends SectionProps {
  title?: string
  subtitle?: string
  feature1?: string
  feature2?: string
  feature3?: string
  buttonText?: string
  imageUrl?: string
  imageAlt?: string
}

export function CTA2({
  title = "Transform Your Ideas Into Reality",
  subtitle = "Don't let technical barriers hold you back. Our intuitive platform makes it easy to create professional websites that convert visitors into customers.",
  feature1 = "Drag & drop interface",
  feature2 = "Mobile-responsive designs",
  feature3 = "SEO optimization built-in",
  buttonText = "Get Started Now",
  imageUrl = "/placeholder.svg?height=400&width=500",
  imageAlt = "Website Builder Interface",
  ...props
}: CTA2Props) {
  // Set CTA2-specific defaults
  const ctaProps = {
    gradient: "linear-gradient(to right, #9333ea, #2563eb)", // purple-600 to blue-600
    className: "text-white",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="cta2Content" is="div" canvas className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <Element id="cta2TextContent" is="div" canvas>
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
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-6" canvas={false}>
            <p className="text-lg text-purple-100">
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-purple-100"
                margin=""
              />
            </p>
          </Element>
          
          {/* Features */}
          <Element is="ul" className="space-y-3 mb-8" canvas>
            <Element is="li" className="flex items-center space-x-3" canvas={false}>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>
                <CraftText
                  text={feature1}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-white"
                  margin=""
                />
              </span>
            </Element>
            <Element is="li" className="flex items-center space-x-3" canvas={false}>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>
                <CraftText
                  text={feature2}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-white"
                  margin=""
                />
              </span>
            </Element>
            <Element is="li" className="flex items-center space-x-3" canvas={false}>
              <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span>
                <CraftText
                  text={feature3}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-white"
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
              backgroundColor="white"
              textColor="#9333ea"
              href=""
            />
          </Element>
        </Element>
        
        {/* Image Content */}
        <Element id="cta2ImageContent" is="div" canvas className="relative">
          <Element is="div" className="bg-white/10 backdrop-blur-sm rounded-2xl p-8" canvas={false}>
            <CraftImage
              src={imageUrl}
              alt={imageAlt}
              width="w-full"
              height="h-auto"
            />
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

CTA2.craft = {
  displayName: "CTA 2",
  props: {
    title: "Transform Your Ideas Into Reality",
    subtitle: "Don't let technical barriers hold you back. Our intuitive platform makes it easy to create professional websites that convert visitors into customers.",
    feature1: "Drag & drop interface",
    feature2: "Mobile-responsive designs",
    feature3: "SEO optimization built-in",
    buttonText: "Get Started Now",
    imageUrl: "/placeholder.svg?height=400&width=500",
    imageAlt: "Website Builder Interface",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
