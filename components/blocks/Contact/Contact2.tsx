import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftInput } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface ContactInfo {
  icon: string
  title: string
  details: string[]
}

interface Contact2Props extends SectionProps {
  title?: string
  subtitle?: string
  contactInfo?: ContactInfo[]
  formTitle?: string
}

export function Contact2({
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  contactInfo = [
    {
      icon: "📍",
      title: "Visit us",
      details: ["123 Business Ave", "Suite 100", "City, State 12345"]
    },
    {
      icon: "📞",
      title: "Call us",
      details: ["+1 (555) 123-4567", "Mon-Fri 9am-6pm EST"]
    },
    {
      icon: "✉️",
      title: "Email us",
      details: ["hello@example.com", "support@example.com"]
    }
  ],
  formTitle = "Send us a message",
  backgroundColor = "#ffffff",
  ...props
}: Contact2Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    padding: "py-16 lg:py-24",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="contact2Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-2xl mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        <CraftText
                          text={info.title}
                          tagName="span"
                          fontSize=""
                          fontWeight=""
                          color=""
                          margin=""
                          padding=""
                        />
                      </h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600">
                          <CraftText
                            text={detail}
                            tagName="span"
                            fontSize=""
                            fontWeight=""
                            color=""
                            margin=""
                            padding=""
                          />
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <CraftText
                  text={formTitle}
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
                    <CraftInput
                      type="text"
                      placeholder="John"
                      backgroundColor="#ffffff"
                      textColor="#000000"
                      borderRadius="rounded-lg"
                      padding="px-4 py-3"
                      margin=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
                    <CraftInput
                      type="text"
                      placeholder="Doe"
                      backgroundColor="#ffffff"
                      textColor="#000000"
                      borderRadius="rounded-lg"
                      padding="px-4 py-3"
                      margin=""
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <CraftInput
                    type="email"
                    placeholder="john@example.com"
                    backgroundColor="#ffffff"
                    textColor="#000000"
                    borderRadius="rounded-lg"
                    padding="px-4 py-3"
                    margin=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <CraftInput
                    type="text"
                    placeholder="How can we help?"
                    backgroundColor="#ffffff"
                    textColor="#000000"
                    borderRadius="rounded-lg"
                    padding="px-4 py-3"
                    margin=""
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none"
                  />
                </div>
                <CraftButton
                  text="Send Message"
                  variant="default"
                  size="default"
                  backgroundColor="#2563eb"
                  textColor="#ffffff"
                  borderRadius="rounded-lg"
                  margin=""
                  padding="px-8 py-3"
                />
              </form>
            </div>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Contact2.craft = {
  displayName: "Contact 2",
  props: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    contactInfo: [
      {
        icon: "📍",
        title: "Visit us",
        details: ["123 Business Ave", "Suite 100", "City, State 12345"]
      },
      {
        icon: "📞",
        title: "Call us",
        details: ["+1 (555) 123-4567", "Mon-Fri 9am-6pm EST"]
      },
      {
        icon: "✉️",
        title: "Email us",
        details: ["hello@example.com", "support@example.com"]
      }
    ],
    formTitle: "Send us a message",
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
