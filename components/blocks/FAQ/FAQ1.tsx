"use client"

import { useState } from "react"

export function FAQ1() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How easy is it to build a website?",
      answer:
        "Our drag-and-drop builder makes it incredibly easy. You can have a professional website up and running in just a few minutes, no coding required.",
    },
    {
      question: "Can I use my own domain name?",
      answer:
        "Yes! You can connect your existing domain or purchase a new one directly through our platform. We'll handle all the technical setup for you.",
    },
    {
      question: "Is my website mobile-friendly?",
      answer:
        "Absolutely. All our templates are fully responsive and automatically adapt to look great on desktop, tablet, and mobile devices.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support via chat, email, and phone. Our team of experts is always ready to help you succeed.",
    },
    {
      question: "Can I sell products on my website?",
      answer:
        "Yes! Our e-commerce features let you sell physical and digital products, accept payments, manage inventory, and track orders all in one place.",
    },
  ]

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about building your website</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
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
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
