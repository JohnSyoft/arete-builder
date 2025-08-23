import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Features2Props extends SectionProps {
  title?: string
  subtitle?: string
  feature1Title?: string
  feature1Description?: string
  feature2Title?: string
  feature2Description?: string
  feature3Title?: string
  feature3Description?: string
  imageUrl?: string
  imageAlt?: string
}

export function Features2({
  title = "Built for Modern Businesses",
  subtitle = "Our platform combines cutting-edge technology with intuitive design to deliver exceptional results for businesses of all sizes.",
  feature1Title = "Performance Optimized",
  feature1Description = "Lightning-fast loading times with automatic optimization and global CDN.",
  feature2Title = "SEO Ready",
  feature2Description = "Built-in SEO optimization to help your website rank higher in search results.",
  feature3Title = "Analytics Included",
  feature3Description = "Comprehensive analytics dashboard to track your website's performance.",
  imageUrl = "/placeholder.svg?height=400&width=500",
  imageAlt = "Features Dashboard",
  ...props
}: Features2Props) {
  // Set Features-specific defaults
  const featuresProps = {
    backgroundColor: "#f9fafb", // gray-50
    padding: "0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    className: "",
    ...props
  }

  return (
    <Section {...featuresProps}>
      <Element id="featuresContent" is="div" canvas>
        <Element is="div" className="grid lg:grid-cols-2 gap-12 items-center" canvas>
          {/* Content Section */}
          <Element is="div" canvas>
            <Element is="div" className="mb-6" canvas={false}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
            
            <Element is="div" className="mb-8" canvas={false}>
              <p className="text-lg text-gray-600 mb-8">
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

            <Element is="div" className="space-y-6" canvas>
              {/* Feature 1 */}
              <Element is="div" className="flex items-start space-x-4" canvas>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <CraftText
                      text={feature1Title}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>
                  <p className="text-gray-600">
                    <CraftText
                      text={feature1Description}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>
                </div>
              </Element>

              {/* Feature 2 */}
              <Element is="div" className="flex items-start space-x-4" canvas>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <CraftText
                      text={feature2Title}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>
                  <p className="text-gray-600">
                    <CraftText
                      text={feature2Description}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>
                </div>
              </Element>

              {/* Feature 3 */}
              <Element is="div" className="flex items-start space-x-4" canvas>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <CraftText
                      text={feature3Title}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>
                  <p className="text-gray-600">
                    <CraftText
                      text={feature3Description}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>
                </div>
              </Element>
            </Element>
          </Element>

          {/* Image Section */}
          <Element is="div" className="relative" canvas>
            <Element is="div" className="relative bg-white rounded-2xl shadow-xl overflow-hidden" canvas={false}>
              <CraftImage
                src={imageUrl}
                alt={imageAlt}
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

Features2.craft = {
  displayName: "Features 2",
  props: {
    title: "Built for Modern Businesses",
    subtitle: "Our platform combines cutting-edge technology with intuitive design to deliver exceptional results for businesses of all sizes.",
    feature1Title: "Performance Optimized",
    feature1Description: "Lightning-fast loading times with automatic optimization and global CDN.",
    feature2Title: "SEO Ready",
    feature2Description: "Built-in SEO optimization to help your website rank higher in search results.",
    feature3Title: "Analytics Included",
    feature3Description: "Comprehensive analytics dashboard to track your website's performance.",
    imageUrl: "/placeholder.svg?height=400&width=500",
    imageAlt: "Features Dashboard"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
}
