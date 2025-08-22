"use client"

import { useState } from "react"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface FAQ3Props extends SectionProps {
  title?: string
  subtitle?: string
  // General category
  generalFaq1Question?: string
  generalFaq1Answer?: string
  generalFaq2Question?: string
  generalFaq2Answer?: string
  generalFaq3Question?: string
  generalFaq3Answer?: string
  // Billing category
  billingFaq1Question?: string
  billingFaq1Answer?: string
  billingFaq2Question?: string
  billingFaq2Answer?: string
  billingFaq3Question?: string
  billingFaq3Answer?: string
  // Technical category
  technicalFaq1Question?: string
  technicalFaq1Answer?: string
  technicalFaq2Question?: string
  technicalFaq2Answer?: string
  technicalFaq3Question?: string
  technicalFaq3Answer?: string
}

export function FAQ3({
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions organized by category",
  generalFaq1Question = "How do I get started?",
  generalFaq1Answer = "Simply sign up for a free account, choose a template, and start customizing. You can have your website live in minutes!",
  generalFaq2Question = "Do I need technical skills?",
  generalFaq2Answer = "Not at all! Our platform is designed for everyone. If you can use a computer, you can build a website with us.",
  generalFaq3Question = "Can I try before I buy?",
  generalFaq3Answer = "Yes! We offer a free plan and a 14-day free trial of our premium features. No credit card required.",
  billingFaq1Question = "What payment methods do you accept?",
  billingFaq1Answer = "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
  billingFaq2Question = "When will I be charged?",
  billingFaq2Answer = "You'll be charged immediately when you upgrade to a paid plan, then on the same date each billing cycle.",
  billingFaq3Question = "Can I cancel anytime?",
  billingFaq3Answer = "Yes, you can cancel your subscription at any time. Your website will remain active until the end of your billing period.",
  technicalFaq1Question = "What's your uptime guarantee?",
  technicalFaq1Answer = "We guarantee 99.9% uptime. If we fall short, we'll credit your account for the downtime.",
  technicalFaq2Question = "Do you provide backups?",
  technicalFaq2Answer = "Yes, we automatically backup your website daily and keep backups for 30 days.",
  technicalFaq3Question = "Can I use custom code?",
  technicalFaq3Answer = "Yes! Pro and Enterprise plans support custom HTML, CSS, and JavaScript.",
  ...props
}: FAQ3Props) {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const categories = {
    general: [
      { question: generalFaq1Question, answer: generalFaq1Answer },
      { question: generalFaq2Question, answer: generalFaq2Answer },
      { question: generalFaq3Question, answer: generalFaq3Answer },
    ],
    billing: [
      { question: billingFaq1Question, answer: billingFaq1Answer },
      { question: billingFaq2Question, answer: billingFaq2Answer },
      { question: billingFaq3Question, answer: billingFaq3Answer },
    ],
    technical: [
      { question: technicalFaq1Question, answer: technicalFaq1Answer },
      { question: technicalFaq2Question, answer: technicalFaq2Answer },
      { question: technicalFaq3Question, answer: technicalFaq3Answer },
    ],
  }

  const categoryLabels = {
    general: "General",
    billing: "Billing",
    technical: "Technical",
  }

  // Set FAQ3-specific defaults
  const faqProps = {
    backgroundColor: "bg-gray-900",
    className: "text-white",
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...faqProps}>
      <Element id="faq3Content" is="div" canvas>
        {/* Header */}
        <Element is="div" className="text-center mb-16" canvas>
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
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
            <p className="text-xl text-gray-300">
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-300"
                margin=""
              />
            </p>
          </Element>
        </Element>

        {/* Category Tabs */}
        <Element is="div" className="flex flex-wrap justify-center gap-2 mb-12" canvas>
          {Object.entries(categoryLabels).map(([key, label]) => (
            <Element key={key} is="button" canvas={false}
              onClick={() => {
                setActiveCategory(key)
                setOpenIndex(0)
              }}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === key ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              <CraftText
                text={label}
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color={activeCategory === key ? "text-white" : "text-gray-300"}
                margin=""
              />
            </Element>
          ))}
        </Element>

        {/* FAQ Items */}
        <Element is="div" className="space-y-4" canvas>
          {categories[activeCategory as keyof typeof categories].map((faq, index) => (
            <Element key={index} is="div" className="bg-gray-800 rounded-lg" canvas={false}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 focus:outline-none focus:bg-gray-750 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white pr-4">
                  <CraftText
                    text={faq.question}
                    tagName="span"
                    fontSize="text-base"
                    fontWeight="font-medium"
                    color="text-white"
                    margin=""
                  />
                </span>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-300">
                    <CraftText
                      text={faq.answer}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-normal"
                      color="text-gray-300"
                      margin=""
                    />
                  </p>
                </div>
              )}
            </Element>
          ))}
        </Element>
      </Element>
    </Section>
  )
}

FAQ3.craft = {
  displayName: "FAQ 3",
  props: {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions organized by category",
    generalFaq1Question: "How do I get started?",
    generalFaq1Answer: "Simply sign up for a free account, choose a template, and start customizing. You can have your website live in minutes!",
    generalFaq2Question: "Do I need technical skills?",
    generalFaq2Answer: "Not at all! Our platform is designed for everyone. If you can use a computer, you can build a website with us.",
    generalFaq3Question: "Can I try before I buy?",
    generalFaq3Answer: "Yes! We offer a free plan and a 14-day free trial of our premium features. No credit card required.",
    billingFaq1Question: "What payment methods do you accept?",
    billingFaq1Answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    billingFaq2Question: "When will I be charged?",
    billingFaq2Answer: "You'll be charged immediately when you upgrade to a paid plan, then on the same date each billing cycle.",
    billingFaq3Question: "Can I cancel anytime?",
    billingFaq3Answer: "Yes, you can cancel your subscription at any time. Your website will remain active until the end of your billing period.",
    technicalFaq1Question: "What's your uptime guarantee?",
    technicalFaq1Answer: "We guarantee 99.9% uptime. If we fall short, we'll credit your account for the downtime.",
    technicalFaq2Question: "Do you provide backups?",
    technicalFaq2Answer: "Yes, we automatically backup your website daily and keep backups for 30 days.",
    technicalFaq3Question: "Can I use custom code?",
    technicalFaq3Answer: "Yes! Pro and Enterprise plans support custom HTML, CSS, and JavaScript.",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
