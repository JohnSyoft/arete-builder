import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface Features1Props extends SectionProps {
  title?: string
  subtitle?: string
  feature1Icon?: string
  feature1Title?: string
  feature1Description?: string
  feature2Icon?: string
  feature2Title?: string
  feature2Description?: string
  feature3Icon?: string
  feature3Title?: string
  feature3Description?: string
  feature4Icon?: string
  feature4Title?: string
  feature4Description?: string
  feature5Icon?: string
  feature5Title?: string
  feature5Description?: string
  feature6Icon?: string
  feature6Title?: string
  feature6Description?: string
}

export function Features1({
  title = "Everything You Need to Succeed",
  subtitle = "Powerful features designed to help you create, launch, and grow your online presence.",
  feature1Icon = "🚀",
  feature1Title = "Lightning Fast",
  feature1Description = "Optimized for speed with advanced caching and CDN delivery worldwide.",
  feature2Icon = "🎨",
  feature2Title = "Beautiful Designs",
  feature2Description = "Professional templates designed by experts to convert visitors into customers.",
  feature3Icon = "📱",
  feature3Title = "Mobile Ready",
  feature3Description = "Fully responsive designs that look perfect on any device or screen size.",
  feature4Icon = "🔒",
  feature4Title = "Secure & Reliable",
  feature4Description = "Enterprise-grade security with 99.9% uptime guarantee and daily backups.",
  feature5Icon = "⚡",
  feature5Title = "Easy to Use",
  feature5Description = "Intuitive drag-and-drop interface that anyone can master in minutes.",
  feature6Icon = "🌍",
  feature6Title = "Global Reach",
  feature6Description = "Multi-language support and global CDN for worldwide accessibility.",
  ...props
}: Features1Props) {
  // Set Features1-specific defaults
  const featuresProps = {
    backgroundColor: "#ffffff",
    padding: "4rem 1rem",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...featuresProps}>
      <Element id="features1Content" is="div" canvas>
        {/* Header */}
        <Element is="div" className="text-center mb-16" canvas>
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
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded max-w-2xl mx-auto" canvas={false}>
            <p className="text-xl text-gray-600">
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
              />
            </p>
          </Element>
        </Element>

        {/* Features Grid */}
        <Element id="features1Grid" is="div" canvas className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <Element is="div" className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-4xl mb-4">{feature1Icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <CraftText
                  text={feature1Title}
                  tagName="span"
                  fontSize="text-xl"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature1Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>

          {/* Feature 2 */}
          <Element is="div" className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-4xl mb-4">{feature2Icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <CraftText
                  text={feature2Title}
                  tagName="span"
                  fontSize="text-xl"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature2Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>

          {/* Feature 3 */}
          <Element is="div" className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-4xl mb-4">{feature3Icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <CraftText
                  text={feature3Title}
                  tagName="span"
                  fontSize="text-xl"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature3Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>

          {/* Feature 4 */}
          <Element is="div" className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-4xl mb-4">{feature4Icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <CraftText
                  text={feature4Title}
                  tagName="span"
                  fontSize="text-xl"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature4Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>

          {/* Feature 5 */}
          <Element is="div" className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-4xl mb-4">{feature5Icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <CraftText
                  text={feature5Title}
                  tagName="span"
                  fontSize="text-xl"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature5Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>

          {/* Feature 6 */}
          <Element is="div" className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
              <div className="text-4xl mb-4">{feature6Icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                <CraftText
                  text={feature6Title}
                  tagName="span"
                  fontSize="text-xl"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
              <p className="text-gray-600">
                <CraftText
                  text={feature6Description}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

Features1.craft = {
  displayName: "Features 1",
  props: {
    title: "Everything You Need to Succeed",
    subtitle: "Powerful features designed to help you create, launch, and grow your online presence.",
    feature1Icon: "🚀",
    feature1Title: "Lightning Fast",
    feature1Description: "Optimized for speed with advanced caching and CDN delivery worldwide.",
    feature2Icon: "🎨",
    feature2Title: "Beautiful Designs",
    feature2Description: "Professional templates designed by experts to convert visitors into customers.",
    feature3Icon: "📱",
    feature3Title: "Mobile Ready",
    feature3Description: "Fully responsive designs that look perfect on any device or screen size.",
    feature4Icon: "🔒",
    feature4Title: "Secure & Reliable",
    feature4Description: "Enterprise-grade security with 99.9% uptime guarantee and daily backups.",
    feature5Icon: "⚡",
    feature5Title: "Easy to Use",
    feature5Description: "Intuitive drag-and-drop interface that anyone can master in minutes.",
    feature6Icon: "🌍",
    feature6Title: "Global Reach",
    feature6Description: "Multi-language support and global CDN for worldwide accessibility.",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
