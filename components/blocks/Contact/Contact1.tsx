import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Input as CraftInput } from "@/components/blocks/Basic/Input"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"
import { Textarea as CraftTextarea } from "@/components/blocks/Basic/Textarea"
import { LineBreak } from "@/components/blocks/Basic/LineBreak"

interface Contact1Props extends SectionProps {
  title?: string
  subtitle?: string
  contactInfo?: {
    address: {
      title: string
      lines: string[]
    }
    phone: {
      title: string
      number: string
    }
    email: {
      title: string
      address: string
    }
  }
  formTitle?: string
  submitButtonText?: string
}

export function Contact1({
  title = "Get in Touch",
  subtitle = "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
  contactInfo = {
    address: {
      title: "Address",
      lines: ["123 Business Street", "Suite 100", "City, State 12345"]
    },
    phone: {
      title: "Phone", 
      number: "+1 (555) 123-4567"
    },
    email: {
      title: "Email",
      address: "hello@company.com"
    }
  },
  formTitle = "Send us a message",
  submitButtonText = "Send Message",
  backgroundColor = "#ffffff",
  ...props
}: Contact1Props) {
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
      <Element id="contact1Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
            <p className="text-lg text-gray-600">
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

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <Element is="div" canvas>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                <CraftText
                  text="Contact Information"
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <Element is="div" className="flex items-start gap-4" canvas>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">📍</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      <CraftText
                        text={contactInfo.address.title}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </h4>
                    <div className="text-gray-600">
                      {contactInfo.address.lines.map((line, index) => (
                        <div key={index}>
                          <CraftText
                            text={line}
                            tagName="span"
                            fontSize=""
                            fontWeight=""
                            color=""
                            margin=""
                            padding=""
                          />
                          {/* {index < contactInfo.address.lines.length - 1 && <br />} */}
                        </div>
                      ))}
                    </div>
                  </div>
                </Element>

                {/* Phone */}
                <Element is="div" className="flex items-start gap-4" canvas>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">📞</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      <CraftText
                        text={contactInfo.phone.title}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </h4>
                    <p className="text-gray-600">
                      <CraftText
                        text={contactInfo.phone.number}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </p>
                  </div>
                </Element>

                {/* Email */}
                <Element is="div" className="flex items-start gap-4" canvas>
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-600">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">
                      <CraftText
                        text={contactInfo.email.title}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </h4>
                    <p className="text-gray-600">
                      <CraftText
                        text={contactInfo.email.address}
                        tagName="span"
                        fontSize=""
                        fontWeight=""
                        color=""
                        margin=""
                        padding=""
                      />
                    </p>
                  </div>
                </Element>
              </div>
            </Element>

            {/* Contact Form */}
            <Element is="div" canvas>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <CraftInput
                      type="text"
                      placeholder="First name"
                      margin=""
                      padding=""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <CraftInput
                      type="text"
                      placeholder="Last name"
                      margin=""
                      padding=""
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <CraftInput
                    type="email"
                    placeholder="your@email.com"
                    margin=""
                    padding=""
                  />
                </div>
                
                <LineBreak height="h-2" margin="my-2" />
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <CraftInput
                    type="text"
                    placeholder="Subject"
                    margin=""
                    padding=""
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <CraftTextarea
                    placeholder="Your message..."
                    rows={6}
                    margin=""
                    padding="0.75rem"
                    width="100%"
                  />
                </div>
                
                <CraftButton
                  text={submitButtonText}
                  variant="default"
                  size="lg"
                  backgroundColor="#2563eb"
                  textColor="#ffffff"
                  borderRadius="8px"
                  margin=""
                  padding="px-8 py-3"
                  width="w-full"
                />
              </form>
            </Element>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Contact1.craft = {
  displayName: "Contact 1",
  props: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    contactInfo: {
      address: {
        title: "Address",
        lines: ["123 Business Street", "Suite 100", "City, State 12345"]
      },
      phone: {
        title: "Phone", 
        number: "+1 (555) 123-4567"
      },
      email: {
        title: "Email",
        address: "hello@company.com"
      }
    },
    formTitle: "Send us a message",
    submitButtonText: "Send Message",
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
