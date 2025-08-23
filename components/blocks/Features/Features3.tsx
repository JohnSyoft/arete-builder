import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"

interface Features3Props extends SectionProps {
  title?: string
  subtitle?: string
  features?: Array<{
    title: string
    description: string
    icon: string
    details: string[]
  }>
}

export function Features3({
  title = "Powerful Features for Every Need",
  subtitle = "From simple landing pages to complex e-commerce sites, we've got you covered.",
  features = [
    {
      title: "Drag & Drop Builder",
      description: "Create stunning layouts with our intuitive visual editor. No coding required.",
      icon: "builder",
      details: ["Visual page builder", "Pre-built components", "Real-time preview"]
    },
    {
      title: "Analytics & Insights", 
      description: "Track your website performance with detailed analytics and conversion tracking.",
      icon: "analytics",
      details: ["Real-time analytics", "Conversion tracking", "Performance insights"]
    },
    {
      title: "SEO Optimization",
      description: "Built-in SEO tools to help your website rank higher in search results.",
      icon: "seo", 
      details: ["Meta tag management", "Sitemap generation", "Schema markup"]
    }
  ],
  backgroundColor = "#111827",
  ...props
}: Features3Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    color: "#ffffff",
    ...props
  }

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "builder":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
          </svg>
        )
      case "analytics":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        )
      case "seo":
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        )
      default:
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
    }
  }

  return (
    <Section {...sectionProps}>
      <Element id="featuresContent" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
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
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Element key={index} is="div" className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-750 transition-colors" canvas>
                {/* Icon */}
                <div className={`w-12 h-12 ${index === 0 ? 'bg-blue-600' : index === 1 ? 'bg-green-600' : 'bg-purple-600'} rounded-xl flex items-center justify-center mb-6`}>
                  {getIcon(feature.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-4">
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
                <p className="text-gray-300 mb-6">
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

                {/* Details List */}
                <ul className="space-y-2 text-sm text-gray-400">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <CraftText
                        text={`• ${detail}`}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </li>
                  ))}
                </ul>
              </Element>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Features3.craft = {
  displayName: "Features 3",
  props: {
    title: "Powerful Features for Every Need",
    subtitle: "From simple landing pages to complex e-commerce sites, we've got you covered.",
    features: [
      {
        title: "Drag & Drop Builder",
        description: "Create stunning layouts with our intuitive visual editor. No coding required.",
        icon: "builder",
        details: ["Visual page builder", "Pre-built components", "Real-time preview"]
      },
      {
        title: "Analytics & Insights",
        description: "Track your website performance with detailed analytics and conversion tracking.",
        icon: "analytics",
        details: ["Real-time analytics", "Conversion tracking", "Performance insights"]
      },
      {
        title: "SEO Optimization",
        description: "Built-in SEO tools to help your website rank higher in search results.",
        icon: "seo",
        details: ["Meta tag management", "Sitemap generation", "Schema markup"]
      }
    ],
    backgroundColor: "#111827"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
