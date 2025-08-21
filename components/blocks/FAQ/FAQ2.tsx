"use client"

import { useState } from "react"

export function FAQ2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What's included in the free plan?",
      answer:
        "The free plan includes 1 website, basic templates, 1GB storage, and community support. Perfect for getting started!",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect at your next billing cycle.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your payment in full.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees ever! You only pay for your chosen plan, and we include everything you need to get started.",
    },
    {
      question: "How secure is my website?",
      answer:
        "We take security seriously. All websites include free SSL certificates, regular backups, and enterprise-grade security monitoring.",
    },
    {
      question: "Can I export my website?",
      answer:
        "Yes, you can export your website data at any time. We believe in giving you full control over your content.",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Got Questions? We've Got Answers</h2>
            <p className="text-lg text-gray-600 mb-8">
              Here are the most common questions we get about our platform. Can't find what you're looking for? Contact
              our support team.
            </p>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Still have questions?</h3>
              <p className="text-gray-600 mb-4">Our support team is here to help 24/7.</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50 rounded-lg"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
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
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
