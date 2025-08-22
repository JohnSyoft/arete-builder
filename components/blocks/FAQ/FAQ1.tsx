"use client"

import { useState } from "react"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface FAQ1Props extends SectionProps {
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
}

export function FAQ1({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about building your website",
  faq1Question = "How easy is it to build a website?",
  faq1Answer = "Our drag-and-drop builder makes it incredibly easy. You can have a professional website up and running in just a few minutes, no coding required.",
  faq2Question = "Can I use my own domain name?",
  faq2Answer = "Yes! You can connect your existing domain or purchase a new one directly through our platform. We'll handle all the technical setup for you.",
  faq3Question = "Is my website mobile-friendly?",
  faq3Answer = "Absolutely. All our templates are fully responsive and automatically adapt to look great on desktop, tablet, and mobile devices.",
  faq4Question = "What kind of support do you offer?",
  faq4Answer = "We provide 24/7 customer support via chat, email, and phone. Our team of experts is always ready to help you succeed.",
  faq5Question = "Can I sell products on my website?",
  faq5Answer = "Yes! Our e-commerce features let you sell physical and digital products, accept payments, manage inventory, and track orders all in one place.",
  ...props
}: FAQ1Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
    { question: faq3Question, answer: faq3Answer },
    { question: faq4Question, answer: faq4Answer },
    { question: faq5Question, answer: faq5Answer },
  ]

  // Set FAQ1-specific defaults
  const faqProps = {
    backgroundColor: "bg-white",
    hasContentWrapper: true,
    contentMaxWidth: "3xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...faqProps}>
      <Element id="faq1Content" is="div" canvas>
        {/* Header */}
        <Element is="div" className="text-center mb-16" canvas>
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
            <Element key={index} is="div" className="border border-gray-200 rounded-lg" canvas={false}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
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
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
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
      </Element>
    </Section>
  )
}

FAQ1.craft = {
  displayName: "FAQ 1",
  props: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about building your website",
    faq1Question: "How easy is it to build a website?",
    faq1Answer: "Our drag-and-drop builder makes it incredibly easy. You can have a professional website up and running in just a few minutes, no coding required.",
    faq2Question: "Can I use my own domain name?",
    faq2Answer: "Yes! You can connect your existing domain or purchase a new one directly through our platform. We'll handle all the technical setup for you.",
    faq3Question: "Is my website mobile-friendly?",
    faq3Answer: "Absolutely. All our templates are fully responsive and automatically adapt to look great on desktop, tablet, and mobile devices.",
    faq4Question: "What kind of support do you offer?",
    faq4Answer: "We provide 24/7 customer support via chat, email, and phone. Our team of experts is always ready to help you succeed.",
    faq5Question: "Can I sell products on my website?",
    faq5Answer: "Yes! Our e-commerce features let you sell physical and digital products, accept payments, manage inventory, and track orders all in one place.",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
