"use client"

import { Element, useNode } from "@craftjs/core"
import React, { useState } from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"

interface FAQ1Props extends SectionProps {
  title?: string
  subtitle?: string
  faqs?: Array<{
    question: string
    answer: string
  }>
}

export function FAQ1({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about building your website",
  faqs = [
    {
      question: "How easy is it to build a website?",
      answer: "Our drag-and-drop builder makes it incredibly easy. You can have a professional website up and running in just a few minutes, no coding required."
    },
    {
      question: "Can I use my own domain name?",
      answer: "Yes! You can connect your existing domain or purchase a new one directly through our platform. We'll handle all the technical setup for you."
    },
    {
      question: "Is my website mobile-friendly?",
      answer: "Absolutely. All our templates are fully responsive and automatically adapt to look great on desktop, tablet, and mobile devices."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We provide 24/7 customer support via chat, email, and phone. Our team of experts is always ready to help you succeed."
    },
    {
      question: "Can I sell products on my website?",
      answer: "Yes! Our e-commerce features let you sell physical and digital products, accept payments, manage inventory, and track orders all in one place."
    }
  ],
  backgroundColor = "#ffffff",
  ...props
}: FAQ1Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
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
      <Element id="faq1Content" is="div" canvas>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
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
            <p className="text-xl text-gray-600">
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

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Element key={index} is="div" className="border border-gray-200 rounded-lg" canvas>
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900">
                    <CraftText
                      text={faq.question}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      openIndex === index ? "transform rotate-180" : ""
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
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </p>
                  </div>
                )}
              </Element>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

FAQ1.craft = {
  displayName: "FAQ 1",
  props: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about building your website",
    faqs: [
      {
        question: "How easy is it to build a website?",
        answer: "Our drag-and-drop builder makes it incredibly easy. You can have a professional website up and running in just a few minutes, no coding required."
      },
      {
        question: "Can I use my own domain name?",
        answer: "Yes! You can connect your existing domain or purchase a new one directly through our platform. We'll handle all the technical setup for you."
      },
      {
        question: "Is my website mobile-friendly?",
        answer: "Absolutely. All our templates are fully responsive and automatically adapt to look great on desktop, tablet, and mobile devices."
      },
      {
        question: "What kind of support do you offer?",
        answer: "We provide 24/7 customer support via chat, email, and phone. Our team of experts is always ready to help you succeed."
      },
      {
        question: "Can I sell products on my website?",
        answer: "Yes! Our e-commerce features let you sell physical and digital products, accept payments, manage inventory, and track orders all in one place."
      }
    ],
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}