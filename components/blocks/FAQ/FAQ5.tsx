"use client"

import { useState } from "react"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface FAQ5Props extends SectionProps {
  badgeText?: string
  title?: string
  subtitle?: string
  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
  faq3Question?: string
  faq3Answer?: string
  faq4Question?: string
  faq4Answer?: string
  faq5Question?: string
  faq5Answer?: string
  impactTitle?: string
  stat1Value?: string
  stat1Label?: string
  stat2Value?: string
  stat2Label?: string
  stat3Value?: string
  stat3Label?: string
}

export function FAQ5({
  badgeText = "🌱 Eco-Friendly FAQ",
  title = "Green Hosting Questions",
  subtitle = "Learn about our commitment to sustainable web hosting",
  faq1Question = "Is your platform environmentally friendly?",
  faq1Answer = "Yes! We're powered by 100% renewable energy and carbon-neutral hosting. Every website you build helps support our green initiatives.",
  faq2Question = "How do you offset carbon emissions?",
  faq2Answer = "We partner with verified carbon offset projects including reforestation, renewable energy, and clean water initiatives worldwide.",
  faq3Question = "What makes your hosting 'green'?",
  faq3Answer = "Our data centers run on renewable energy sources like solar and wind power. We also use energy-efficient servers and cooling systems.",
  faq4Question = "Can I see my website's environmental impact?",
  faq4Answer = "Yes! Your dashboard shows your website's carbon footprint, energy usage, and the positive environmental impact you're making.",
  faq5Question = "Do you plant trees for new websites?",
  faq5Answer = "We plant one tree for every new website created on our platform through our partnership with global reforestation projects.",
  impactTitle = "Our Environmental Impact",
  stat1Value = "2.5M kg",
  stat1Label = "CO₂ Emissions Prevented",
  stat2Value = "50,000",
  stat2Label = "Trees Planted",
  stat3Value = "100%",
  stat3Label = "Renewable Energy",
  ...props
}: FAQ5Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
    { question: faq3Question, answer: faq3Answer },
    { question: faq4Question, answer: faq4Answer },
    { question: faq5Question, answer: faq5Answer },
  ]

  // Set FAQ5-specific defaults
  const faqProps = {
    backgroundColor: "bg-green-50",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...faqProps}>
      <Element id="faq5Content" is="div" canvas>
        {/* Header */}
        <Element is="div" className="text-center mb-16" canvas>
          {/* Badge */}
          <Element is="div" className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6" canvas={false}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 text-sm font-medium">
              <CraftText
                text={badgeText}
                tagName="span"
                fontSize="text-sm"
                fontWeight="font-medium"
                color="text-green-800"
                margin=""
              />
            </span>
          </Element>

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
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
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

        {/* FAQ Items */}
        <Element is="div" className="space-y-4" canvas>
          {faqs.map((faq, index) => (
            <Element key={index} is="div" className="bg-white rounded-xl shadow-sm border border-green-100" canvas={false}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-50 focus:outline-none focus:bg-green-50 rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 pr-4">
                  <CraftText
                    text={faq.question}
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-gray-900"
                    margin=""
                  />
                </span>
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full bg-green-100 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">
                    <CraftText
                      text={faq.answer}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      margin=""
                    />
                  </p>
                </div>
              )}
            </Element>
          ))}
        </Element>

        {/* Impact Section */}
        <Element is="div" className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center" canvas>
          <Element is="div" className="p-2 hover:ring-1 hover:ring-green-300 hover:ring-dashed rounded mb-4" canvas={false}>
            <h3 className="text-2xl font-bold">
              <CraftText
                text={impactTitle}
                tagName="span"
                fontSize="text-2xl"
                fontWeight="font-bold"
                color="text-white"
                margin=""
              />
            </h3>
          </Element>
          <Element is="div" className="grid grid-cols-1 md:grid-cols-3 gap-6" canvas>
            <Element is="div" canvas={false}>
              <div className="text-3xl font-bold mb-2">
                <CraftText
                  text={stat1Value}
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-white"
                  margin=""
                />
              </div>
              <div className="text-green-100">
                <CraftText
                  text={stat1Label}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-green-100"
                  margin=""
                />
              </div>
            </Element>
            <Element is="div" canvas={false}>
              <div className="text-3xl font-bold mb-2">
                <CraftText
                  text={stat2Value}
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-white"
                  margin=""
                />
              </div>
              <div className="text-green-100">
                <CraftText
                  text={stat2Label}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-green-100"
                  margin=""
                />
              </div>
            </Element>
            <Element is="div" canvas={false}>
              <div className="text-3xl font-bold mb-2">
                <CraftText
                  text={stat3Value}
                  tagName="span"
                  fontSize="text-3xl"
                  fontWeight="font-bold"
                  color="text-white"
                  margin=""
                />
              </div>
              <div className="text-green-100">
                <CraftText
                  text={stat3Label}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-green-100"
                  margin=""
                />
              </div>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  )
}

FAQ5.craft = {
  displayName: "FAQ 5",
  props: {
    badgeText: "🌱 Eco-Friendly FAQ",
    title: "Green Hosting Questions",
    subtitle: "Learn about our commitment to sustainable web hosting",
    faq1Question: "Is your platform environmentally friendly?",
    faq1Answer: "Yes! We're powered by 100% renewable energy and carbon-neutral hosting. Every website you build helps support our green initiatives.",
    faq2Question: "How do you offset carbon emissions?",
    faq2Answer: "We partner with verified carbon offset projects including reforestation, renewable energy, and clean water initiatives worldwide.",
    faq3Question: "What makes your hosting 'green'?",
    faq3Answer: "Our data centers run on renewable energy sources like solar and wind power. We also use energy-efficient servers and cooling systems.",
    faq4Question: "Can I see my website's environmental impact?",
    faq4Answer: "Yes! Your dashboard shows your website's carbon footprint, energy usage, and the positive environmental impact you're making.",
    faq5Question: "Do you plant trees for new websites?",
    faq5Answer: "We plant one tree for every new website created on our platform through our partnership with global reforestation projects.",
    impactTitle: "Our Environmental Impact",
    stat1Value: "2.5M kg",
    stat1Label: "CO₂ Emissions Prevented",
    stat2Value: "50,000",
    stat2Label: "Trees Planted",
    stat3Value: "100%",
    stat3Label: "Renewable Energy",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
