import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"

interface Features4Props extends SectionProps {
  title?: string
  subtitle?: string
  steps?: Array<{
    number: string
    title: string
    description: string
  }>
  imageUrl?: string
  imageAlt?: string
}

export function Features4({
  title = "Why Choose Our Platform?",
  subtitle = "We've built the most comprehensive website builder with features that actually matter.",
  steps = [
    {
      number: "1",
      title: "Choose Your Template",
      description: "Start with one of our professionally designed templates or create from scratch."
    },
    {
      number: "2", 
      title: "Customize Everything",
      description: "Use our drag-and-drop editor to customize colors, fonts, layouts, and content."
    },
    {
      number: "3",
      title: "Launch & Grow", 
      description: "Publish your site with one click and use our marketing tools to grow your audience."
    }
  ],
  imageUrl = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  imageAlt = "Website builder dashboard",
  backgroundColor = "linear-gradient(to bottom right, #fff7ed, #fef2f2)",
  ...props
}: Features4Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    color: "#111827",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="features4Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-16">
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
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Steps */}
            <Element is="div" className="space-y-8" canvas>
              {steps.map((step, index) => (
                <Element key={index} is="div" className="flex items-start space-x-4" canvas>
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-orange-600 font-bold">
                      <CraftText
                        text={step.number}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      <CraftText
                        text={step.title}
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
                        text={step.description}
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
              ))}
            </Element>

            {/* Image */}
            <Element is="div" className="relative" canvas>
              <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl">
                <CraftImage
                  src={imageUrl}
                  alt={imageAlt}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                />
              </div>
              {/* Floating elements for visual appeal */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-100 rounded-full opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-100 rounded-full opacity-60"></div>
            </Element>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Features4.craft = {
  displayName: "Features 4",
  props: {
    title: "Why Choose Our Platform?",
    subtitle: "We've built the most comprehensive website builder with features that actually matter.",
    steps: [
      {
        number: "1",
        title: "Choose Your Template",
        description: "Start with one of our professionally designed templates or create from scratch."
      },
      {
        number: "2", 
        title: "Customize Everything",
        description: "Use our drag-and-drop editor to customize colors, fonts, layouts, and content."
      },
      {
        number: "3",
        title: "Launch & Grow", 
        description: "Publish your site with one click and use our marketing tools to grow your audience."
      }
    ],
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Website builder dashboard",
    backgroundColor: "linear-gradient(to bottom right, #fff7ed, #fef2f2)"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
