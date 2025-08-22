"use client"

import { useState } from "react"
import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"

interface FAQ2Props extends SectionProps {
  title?: string
  subtitle?: string
  ctaTitle?: string
  ctaSubtitle?: string
  ctaButtonText?: string
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
  faq6Question?: string
  faq6Answer?: string
}

export function FAQ2({
  title = "Got Questions? We've Got Answers",
  subtitle = "Here are the most common questions we get about our platform. Can't find what you're looking for? Contact our support team.",
  ctaTitle = "Still have questions?",
  ctaSubtitle = "Our support team is here to help 24/7.",
  ctaButtonText = "Contact Support",
  faq1Question = "What's included in the free plan?",
  faq1Answer = "The free plan includes 1 website, basic templates, 1GB storage, and community support. Perfect for getting started!",
  faq2Question = "Can I upgrade or downgrade my plan anytime?",
  faq2Answer = "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.",
  faq3Question = "Do you offer refunds?",
  faq3Answer = "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full.",
  faq4Question = "Is there a setup fee?",
  faq4Answer = "No setup fees ever! You only pay for your chosen plan, and we include everything you need to get started.",
  faq5Question = "How secure is my website?",
  faq5Answer = "We take security seriously. All websites include free SSL certificates, regular backups, and enterprise-grade security monitoring.",
  faq6Question = "Can I export my website?",
  faq6Answer = "Yes, you can export your website data at any time. We believe in giving you full control over your content.",
  ...props
}: FAQ2Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
    { question: faq3Question, answer: faq3Answer },
    { question: faq4Question, answer: faq4Answer },
    { question: faq5Question, answer: faq5Answer },
    { question: faq6Question, answer: faq6Answer },
  ]

  // Set FAQ2-specific defaults
  const faqProps = {
    backgroundColor: "bg-gray-50",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...faqProps}>
      <Element id="faq2Content" is="div" canvas className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Side - Info */}
        <Element id="faq2LeftSide" is="div" canvas>
          {/* Title */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-6" canvas={false}>
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
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-8" canvas={false}>
            <p className="text-lg text-gray-600">
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                margin=""
              />
            </p>
          </Element>

          {/* CTA Box */}
          <Element is="div" className="bg-blue-50 rounded-lg p-6" canvas>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-2" canvas={false}>
              <h3 className="font-semibold text-gray-900">
                <CraftText
                  text={ctaTitle}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  margin=""
                />
              </h3>
            </Element>
            <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded mb-4" canvas={false}>
              <p className="text-gray-600">
                <CraftText
                  text={ctaSubtitle}
                  tagName="span"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  margin=""
                />
              </p>
            </Element>
            <Element is="div" canvas={false}>
              <CraftButton
                text={ctaButtonText}
                variant="default"
                size="default"
              />
            </Element>
          </Element>
        </Element>

        {/* Right Side - FAQs */}
        <Element id="faq2RightSide" is="div" canvas className="space-y-3">
          {faqs.map((faq, index) => (
            <Element key={index} is="div" className="bg-white rounded-lg shadow-sm" canvas={false}>
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-lg"
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
                  className={`w-6 h-6 flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180 bg-blue-100" : ""
                  }`}
                >
                  <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </Element>
    </Section>
  )
}

FAQ2.craft = {
  displayName: "FAQ 2",
  props: {
    title: "Got Questions? We've Got Answers",
    subtitle: "Here are the most common questions we get about our platform. Can't find what you're looking for? Contact our support team.",
    ctaTitle: "Still have questions?",
    ctaSubtitle: "Our support team is here to help 24/7.",
    ctaButtonText: "Contact Support",
    faq1Question: "What's included in the free plan?",
    faq1Answer: "The free plan includes 1 website, basic templates, 1GB storage, and community support. Perfect for getting started!",
    faq2Question: "Can I upgrade or downgrade my plan anytime?",
    faq2Answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.",
    faq3Question: "Do you offer refunds?",
    faq3Answer: "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full.",
    faq4Question: "Is there a setup fee?",
    faq4Answer: "No setup fees ever! You only pay for your chosen plan, and we include everything you need to get started.",
    faq5Question: "How secure is my website?",
    faq5Answer: "We take security seriously. All websites include free SSL certificates, regular backups, and enterprise-grade security monitoring.",
    faq6Question: "Can I export my website?",
    faq6Answer: "Yes, you can export your website data at any time. We believe in giving you full control over your content.",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
