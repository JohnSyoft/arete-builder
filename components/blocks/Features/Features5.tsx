import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"

interface Features5Props extends SectionProps {
  badgeText?: string
  title?: string
  subtitle?: string
  features?: Array<{
    icon: string
    title: string
    description: string
  }>
  statsTitle?: string
  stats?: Array<{
    value: string
    label: string
  }>
}

export function Features5({
  badgeText = "🌱 Eco-Friendly Features",
  title = "Build Sustainably", 
  subtitle = "Create beautiful websites while minimizing your environmental impact with our green hosting solutions.",
  features = [
    {
      icon: "🌿",
      title: "100% Renewable Energy",
      description: "All our servers run on clean, renewable energy sources."
    },
    {
      icon: "♻️",
      title: "Carbon Neutral", 
      description: "We offset 100% of our carbon emissions through verified projects."
    },
    {
      icon: "⚡",
      title: "Optimized Performance",
      description: "Faster websites use less energy and provide better user experience."
    },
    {
      icon: "🌍",
      title: "Global Impact",
      description: "Join our mission to create a more sustainable internet."
    }
  ],
  statsTitle = "Our Environmental Impact",
  stats = [
    { value: "50,000+", label: "Trees Planted" },
    { value: "100%", label: "Carbon Neutral" },
    { value: "2.5M+", label: "kWh Renewable Energy" }
  ],
  backgroundColor = "#f0fdf4",
  ...props
}: Features5Props) {
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
      <Element id="features5Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-800 text-sm font-medium">
                <CraftText
                  text={badgeText}
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </span>
            </div>

            {/* Title */}
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

            {/* Subtitle */}
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

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Element key={index} is="div" className="text-center" canvas>
                {/* Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{feature.icon}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  <CraftText
                    text={feature.title}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </h3>

                {/* Description */}
                <p className="text-gray-600">
                  <CraftText
                    text={feature.description}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </p>
              </Element>
            ))}
          </div>

          {/* Stats Section */}
          <Element is="div" className="bg-white rounded-2xl shadow-lg p-8" canvas>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              <CraftText
                text={statsTitle}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    <CraftText
                      text={stat.value}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </div>
                  <p className="text-gray-600">
                    <CraftText
                      text={stat.label}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>
                </div>
              ))}
            </div>
          </Element>
        </div>
      </Element>
    </Section>
  )
}

Features5.craft = {
  displayName: "Features 5",
  props: {
    badgeText: "🌱 Eco-Friendly Features",
    title: "Build Sustainably", 
    subtitle: "Create beautiful websites while minimizing your environmental impact with our green hosting solutions.",
    features: [
      {
        icon: "🌿",
        title: "100% Renewable Energy",
        description: "All our servers run on clean, renewable energy sources."
      },
      {
        icon: "♻️",
        title: "Carbon Neutral", 
        description: "We offset 100% of our carbon emissions through verified projects."
      },
      {
        icon: "⚡",
        title: "Optimized Performance",
        description: "Faster websites use less energy and provide better user experience."
      },
      {
        icon: "🌍",
        title: "Global Impact",
        description: "Join our mission to create a more sustainable internet."
      }
    ],
    statsTitle: "Our Environmental Impact",
    stats: [
      { value: "50,000+", label: "Trees Planted" },
      { value: "100%", label: "Carbon Neutral" },
      { value: "2.5M+", label: "kWh Renewable Energy" }
    ],
    backgroundColor: "#f0fdf4"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
