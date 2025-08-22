"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface FAQ4Props extends SectionProps {
  title?: string
  subtitle?: string
  searchPlaceholder?: string
  faq1Question?: string
  faq1Answer?: string
  faq1Category?: string
  faq2Question?: string
  faq2Answer?: string
  faq2Category?: string
  faq3Question?: string
  faq3Answer?: string
  faq3Category?: string
  faq4Question?: string
  faq4Answer?: string
  faq4Category?: string
  faq5Question?: string
  faq5Answer?: string
  faq5Category?: string
  faq6Question?: string
  faq6Answer?: string
  faq6Category?: string
  noResultsTitle?: string
  noResultsDescription?: string
}

export function FAQ4({
  title = "Help Center",
  subtitle = "Search our knowledge base for quick answers",
  searchPlaceholder = "Search for answers...",
  faq1Question = "How do I customize my website design?",
  faq1Answer = "Use our visual editor to drag and drop elements, change colors, fonts, and layouts. Everything updates in real-time so you can see your changes instantly.",
  faq1Category = "design",
  faq2Question = "Can I add my own images and videos?",
  faq2Answer = "Yes! Upload unlimited images and videos to our media library. We automatically optimize them for web performance.",
  faq2Category = "content",
  faq3Question = "How do I set up online payments?",
  faq3Answer = "Connect your Stripe or PayPal account in the integrations section. We handle all the technical setup and security compliance.",
  faq3Category = "ecommerce",
  faq4Question = "Can I connect my social media accounts?",
  faq4Answer = "Add social media buttons, embed feeds, and automatically share your content across platforms.",
  faq4Category = "integrations",
  faq5Question = "How do I improve my website's SEO?",
  faq5Answer = "Our built-in SEO tools help you optimize titles, descriptions, and content. We also provide SEO recommendations and analytics.",
  faq5Category = "seo",
  faq6Question = "Can I collaborate with team members?",
  faq6Answer = "Yes! Invite team members with different permission levels. You can control who can edit, publish, or just view your website.",
  faq6Category = "collaboration",
  noResultsTitle = "No results found",
  noResultsDescription = "Try searching with different keywords or contact our support team.",
  ...props
}: FAQ4Props) {
  const [searchTerm, setSearchTerm] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: faq1Question, answer: faq1Answer, category: faq1Category },
    { question: faq2Question, answer: faq2Answer, category: faq2Category },
    { question: faq3Question, answer: faq3Answer, category: faq3Category },
    { question: faq4Question, answer: faq4Answer, category: faq4Category },
    { question: faq5Question, answer: faq5Answer, category: faq5Category },
    { question: faq6Question, answer: faq6Answer, category: faq6Category },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Set FAQ4-specific defaults
  const faqProps = {
    gradient: "linear-gradient(to bottom right, #fff7ed, #fdf2f8)", // orange-50 to pink-50
    hasContentWrapper: true,
    contentMaxWidth: "4xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...faqProps}>
      <Element id="faq4Content" is="div" canvas>
        {/* Header */}
        <Element is="div" className="text-center mb-12" canvas>
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
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-8" canvas={false}>
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

          {/* Search */}
          <Element is="div" className="max-w-md mx-auto" canvas={false}>
            <div className="relative">
              <Input
                type="text"
                placeholder={searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 w-full border-orange-200 focus:border-orange-500 focus:ring-orange-500"
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </Element>
        </Element>

        {/* FAQ Items */}
        <Element is="div" className="space-y-4" canvas>
          {filteredFaqs.map((faq, index) => (
            <Element key={index} is="div" className="bg-white rounded-xl shadow-sm border border-orange-100" canvas={false}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 focus:outline-none focus:bg-orange-50 rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-900">
                    <CraftText
                      text={faq.question}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color="text-gray-900"
                      margin=""
                    />
                  </span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full capitalize">
                    <CraftText
                      text={faq.category}
                      tagName="span"
                      fontSize="text-xs"
                      fontWeight="font-normal"
                      color="text-orange-800"
                      margin=""
                    />
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
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

        {/* No Results */}
        {filteredFaqs.length === 0 && (
          <Element is="div" className="text-center py-12" canvas={false}>
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47.881-6.08 2.33l-.147.083A7.994 7.994 0 0112 21a7.994 7.994 0 016.227-2.587l-.147-.083z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              <CraftText
                text={noResultsTitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-medium"
                color="text-gray-900"
                margin=""
              />
            </h3>
            <p className="text-gray-600">
              <CraftText
                text={noResultsDescription}
                tagName="span"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
              />
            </p>
          </Element>
        )}
      </Element>
    </Section>
  )
}

FAQ4.craft = {
  displayName: "FAQ 4",
  props: {
    title: "Help Center",
    subtitle: "Search our knowledge base for quick answers",
    searchPlaceholder: "Search for answers...",
    faq1Question: "How do I customize my website design?",
    faq1Answer: "Use our visual editor to drag and drop elements, change colors, fonts, and layouts. Everything updates in real-time so you can see your changes instantly.",
    faq1Category: "design",
    faq2Question: "Can I add my own images and videos?",
    faq2Answer: "Yes! Upload unlimited images and videos to our media library. We automatically optimize them for web performance.",
    faq2Category: "content",
    faq3Question: "How do I set up online payments?",
    faq3Answer: "Connect your Stripe or PayPal account in the integrations section. We handle all the technical setup and security compliance.",
    faq3Category: "ecommerce",
    faq4Question: "Can I connect my social media accounts?",
    faq4Answer: "Add social media buttons, embed feeds, and automatically share your content across platforms.",
    faq4Category: "integrations",
    faq5Question: "How do I improve my website's SEO?",
    faq5Answer: "Our built-in SEO tools help you optimize titles, descriptions, and content. We also provide SEO recommendations and analytics.",
    faq5Category: "seo",
    faq6Question: "Can I collaborate with team members?",
    faq6Answer: "Yes! Invite team members with different permission levels. You can control who can edit, publish, or just view your website.",
    faq6Category: "collaboration",
    noResultsTitle: "No results found",
    noResultsDescription: "Try searching with different keywords or contact our support team.",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
