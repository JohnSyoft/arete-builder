"use client"

import { useState } from "react"

export function FAQ5() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is your platform environmentally friendly?",
      answer:
        "Yes! We're powered by 100% renewable energy and carbon-neutral hosting. Every website you build helps support our green initiatives.",
    },
    {
      question: "How do you offset carbon emissions?",
      answer:
        "We partner with verified carbon offset projects including reforestation, renewable energy, and clean water initiatives worldwide.",
    },
    {
      question: "What makes your hosting 'green'?",
      answer:
        "Our data centers run on renewable energy sources like solar and wind power. We also use energy-efficient servers and cooling systems.",
    },
    {
      question: "Can I see my website's environmental impact?",
      answer:
        "Yes! Your dashboard shows your website's carbon footprint, energy usage, and the positive environmental impact you're making.",
    },
    {
      question: "Do you plant trees for new websites?",
      answer:
        "We plant one tree for every new website created on our platform through our partnership with global reforestation projects.",
    },
  ]

  return (
    <section className="bg-green-50 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-800 text-sm font-medium">🌱 Eco-Friendly FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Green Hosting Questions</h2>
          <p className="text-xl text-gray-600">Learn about our commitment to sustainable web hosting</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-green-100">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-green-50 focus:outline-none focus:bg-green-50 rounded-xl"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
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
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Our Environmental Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-bold mb-2">2.5M kg</div>
              <div className="text-green-100">CO₂ Emissions Prevented</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50,000</div>
              <div className="text-green-100">Trees Planted</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-green-100">Renewable Energy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
