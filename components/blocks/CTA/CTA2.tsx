import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface CTA2Props extends SectionProps {
  // CTA2 can inherit all Section properties and add any specific ones if needed
}

export function CTA2(props: CTA2Props) {
  // Set CTA-specific defaults to match the original template exactly
  const ctaProps = {
    gradient: "linear-gradient(to right, #9333ea, #2563eb)", // purple-600 to blue-600
    padding: "0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16",
    className: "text-white",
    ...props
  }

  return (
    <Section {...ctaProps}>
      <Element id="ctaContent" is="div" canvas className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <Element is="div" className="space-y-6" canvas>
          {/* Main Heading */}
          <Element is="div" className="mb-4" canvas={false}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <CraftText
                text="Transform Your Ideas Into Reality"
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
            <p className="text-lg text-purple-100 mb-6">
              <CraftText
                text="Don't let technical barriers hold you back. Our intuitive platform makes it easy to create professional websites that convert visitors into customers."
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
          <Element is="ul" className="space-y-3 mb-8" canvas>
            <Element is="li" className="flex items-center space-x-3" canvas>
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
                  text="Drag & drop interface"
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </span>
            </Element>
            <Element is="li" className="flex items-center space-x-3" canvas>
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
                  text="Mobile-responsive designs"
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </span>
            </Element>
            <Element is="li" className="flex items-center space-x-3" canvas>
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
                  text="SEO optimization built-in"
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

          {/* CTA Button */}
          <Element is="div" canvas={false}>
            <CraftButton
              text="Get Started Now"
              size="lg"
              backgroundColor="#ffffff"
              textColor="#9333ea"
              padding="px-8 py-3"
              borderRadius="rounded-md"
            />
          </Element>
        </Element>

        {/* Image Section */}
        <Element is="div" className="relative" canvas>
          <Element is="div" className="bg-white/10 backdrop-blur-sm rounded-2xl p-8" canvas>
            <Element is="div" className="w-full h-auto rounded-lg" canvas={false}>
              <CraftImage
                src="/placeholder.svg?height=400&width=500"
                alt="Website Builder Interface"
                width="500"
                height="400"
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

CTA2.craft = {
  props: {},
  related: {}
}