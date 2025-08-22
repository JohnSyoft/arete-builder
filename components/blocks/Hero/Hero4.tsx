import { Button } from "@/components/ui/button"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Badge as CraftBadge } from "@/components/blocks/Basic/Badge"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Hero4Props extends SectionProps {
  // Hero4 can inherit all Section properties and add any specific ones if needed
}

export function Hero4(props: Hero4Props) {
  // Set Hero4-specific defaults to match the original design
  const heroProps = {
    gradient: "linear-gradient(to bottom right, #fff7ed, #fdf2f8)", // from-orange-50 to-pink-50
    className: "",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...heroProps}>
      <Element id="hero4Content" is="div" canvas className="space-y-16">
        {/* Header Section */}
        <Element is="div" className="text-center" canvas>
          {/* Badge */}
          <Element is="div" className="mb-4" canvas={false}>
            <CraftBadge
              text="🚀 Launch Week Special"
              variant="secondary"
              className="bg-orange-100 text-orange-800"
              margin=""
            />
          </Element>

          {/* Main Title */}
          <Element is="div" className="p-2 rounded mb-6" canvas={false}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              <CraftText
                text="Create. Launch."
                tagName="span"
                fontSize="text-4xl md:text-6xl"
                fontWeight="font-bold"
                color="text-gray-900"
                margin=""
                padding=""
              />
              <br />
              <CraftText
                text="Succeed."
                tagName="span"
                fontSize="text-4xl md:text-6xl"
                fontWeight="font-bold"
                color="text-orange-600"
                margin=""
                padding=""
              />
            </h1>
          </Element>

          {/* Subtitle */}
          <Element is="div" className="p-2 rounded mb-8 max-w-2xl mx-auto" canvas={false}>
            <p className="text-xl text-gray-600">
              <CraftText
                text="Join thousands of entrepreneurs who've built their dream websites with our platform. No technical skills needed."
                tagName="span"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
                padding=""
              />
            </p>
          </Element>
        </Element>

        {/* Buttons */}
        <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center" canvas>
          <CraftButton
            text="Try Free for 14 Days"
            size="lg"
            backgroundColor="#ea580c"
            textColor="#ffffff"
            borderRadius="8px"
            margin=""
            padding=""
            width="w-auto"
          />
          <CraftButton
            text="See Live Examples"
            variant="outline"
            size="lg"
            backgroundColor="transparent"
            textColor="#ea580c"
            borderRadius="8px"
            margin=""
            padding=""
            width="w-auto"
          />
        </Element>

        {/* Features Grid */}
        <Element is="div" className="grid md:grid-cols-3 gap-8" canvas>
          {/* Feature 1 */}
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4" canvas={false}>
              <CraftText
                text="⚡"
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-normal"
                color=""
                margin=""
                padding=""
              />
            </Element>
            <Element is="div" className="mb-2" canvas={false}>
              <h3 className="font-semibold text-gray-900">
                <CraftText
                  text="Lightning Fast"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                  padding=""
                />
              </h3>
            </Element>
            <Element is="div" canvas={false}>
              <p className="text-gray-600">
                <CraftText
                  text="Build and deploy in minutes, not hours"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                  padding=""
                />
              </p>
            </Element>
          </Element>

          {/* Feature 2 */}
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4" canvas={false}>
              <CraftText
                text="🎨"
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-normal"
                color=""
                margin=""
                padding=""
              />
            </Element>
            <Element is="div" className="mb-2" canvas={false}>
              <h3 className="font-semibold text-gray-900">
                <CraftText
                  text="Beautiful Designs"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                  padding=""
                />
              </h3>
            </Element>
            <Element is="div" canvas={false}>
              <p className="text-gray-600">
                <CraftText
                  text="Professional templates that convert"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                  padding=""
                />
              </p>
            </Element>
          </Element>

          {/* Feature 3 */}
          <Element is="div" className="text-center" canvas>
            <Element is="div" className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4" canvas={false}>
              <CraftText
                text="📱"
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-normal"
                color=""
                margin=""
                padding=""
              />
            </Element>
            <Element is="div" className="mb-2" canvas={false}>
              <h3 className="font-semibold text-gray-900">
                <CraftText
                  text="Mobile Ready"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                  padding=""
                />
              </h3>
            </Element>
            <Element is="div" canvas={false}>
              <p className="text-gray-600">
                <CraftText
                  text="Responsive on every device"
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                  padding=""
                />
              </p>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Hero4.craft = {
  displayName: "Hero 4",
  props: {
    gradient: "linear-gradient(to bottom right, #fff7ed, #fdf2f8)", // from-orange-50 to-pink-50
    className: "",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}