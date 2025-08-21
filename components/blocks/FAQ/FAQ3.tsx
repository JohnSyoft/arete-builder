"use client"

import { useState } from "react"

export function FAQ3() {
  const [activeCategory, setActiveCategory] = useState("general")
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const categories = {
    general: [
      {
        question: "How do I get started?",
        answer:
          "Simply sign up for a free account, choose a template, and start customizing. You can have your website live in minutes!",
      },
      {
        question: "Do I need technical skills?",
        answer:
          "Not at all! Our platform is designed for everyone. If you can use a computer, you can build a website with us.",
      },
      {
        question: "Can I try before I buy?",
        answer: "Yes! We offer a free plan and a 14-day free trial of our premium features. No credit card required.",
      },
    ],
    billing: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
      },
      {
        question: "When will I be charged?",
        answer:
          "You'll be charged immediately when you upgrade to a paid plan, then on the same date each billing cycle.",
      },
      {
        question: "Can I cancel anytime?",
        answer:
          "Yes, you can cancel your subscription at any time. Your website will remain active until the end of your billing period.",
      },
    ],
    technical: [
      {
        question: "What's your uptime guarantee?",
        answer: "We guarantee 99.9% uptime. If we fall short, we'll credit your account for the downtime.",
      },
      {
        question: "Do you provide backups?",
        answer: "Yes, we automatically backup your website daily and keep backups for 30 days.",
      },
      {
        question: "Can I use custom code?",
        answer: "Yes! Pro and Enterprise plans support custom HTML, CSS, and JavaScript.",
      },
    ],
  }

  const categoryLabels = {
    general: "General",
    billing: "Billing",
    technical: "Technical",
  }

  return (
    <section className="bg-gray-900 text-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300">Find answers to common questions organized by category</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(key)
                setOpenIndex(0)
              }}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === key ? "bg-blue-600 text-white" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {categories[activeCategory as keyof typeof categories].map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 focus:outline-none focus:bg-gray-750 rounded-lg"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
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
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
