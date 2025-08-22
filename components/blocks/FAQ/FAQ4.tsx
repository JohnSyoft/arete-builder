"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"

export function FAQ4() {
  const [searchTerm, setSearchTerm] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "How do I customize my website design?",
      answer:
        "Use our visual editor to drag and drop elements, change colors, fonts, and layouts. Everything updates in real-time so you can see your changes instantly.",
      category: "design",
    },
    {
      question: "Can I add my own images and videos?",
      answer:
        "Yes! Upload unlimited images and videos to our media library. We automatically optimize them for web performance.",
      category: "content",
    },
    {
      question: "How do I set up online payments?",
      answer:
        "Connect your Stripe or PayPal account in the integrations section. We handle all the technical setup and security compliance.",
      category: "ecommerce",
    },
    {
      question: "Can I connect my social media accounts?",
      answer: "Add social media buttons, embed feeds, and automatically share your content across platforms.",
      category: "integrations",
    },
    {
      question: "How do I improve my website's SEO?",
      answer:
        "Our built-in SEO tools help you optimize titles, descriptions, and content. We also provide SEO recommendations and analytics.",
      category: "seo",
    },
    {
      question: "Can I collaborate with team members?",
      answer:
        "Yes! Invite team members with different permission levels. You can control who can edit, publish, or just view your website.",
      category: "collaboration",
    },
  ]

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="bg-gradient-to-br from-orange-50 to-pink-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Help Center</h2>
          <p className="text-xl text-gray-600 mb-8">Search our knowledge base for quick answers</p>

          <div className="max-w-md mx-auto">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for answers..."
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
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-orange-100">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-orange-50 focus:outline-none focus:bg-orange-50 rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center space-x-3">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full capitalize">
                    {faq.category}
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
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
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
            <h3 className="text-lg font-medium text-gray-900 mb-2">No results found</h3>
            <p className="text-gray-600">Try searching with different keywords or contact our support team.</p>
          </div>
        )}
      </div>
    </section>
  )
}