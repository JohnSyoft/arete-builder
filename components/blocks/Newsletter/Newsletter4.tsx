import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftInput } from "../../editor/craft-components"
import { CraftButton } from "../../editor/craft-components"

interface Feature {
  title: string
  description: string
}

interface Newsletter4Props extends SectionProps {
  badgeText?: string
  title?: string
  description?: string
  formTitle?: string
  buttonText?: string
  emailPlaceholder?: string
  privacyText?: string
  features?: Feature[]
}

export function Newsletter4({
  badgeText = "Newsletter",
  title = "Stay in the Loop",
  description = "Join our community of innovators and get exclusive access to industry insights, product updates, and expert tips.",
  formTitle = "Subscribe Now",
  buttonText = "Subscribe",
  emailPlaceholder = "you@example.com",
  privacyText = "We respect your privacy. Unsubscribe at any time.",
  features = [
    {
      title: "Expert Insights",
      description: "Get actionable tips from industry leaders"
    },
    {
      title: "Early Access",
      description: "Be first to know about new features"
    },
    {
      title: "Exclusive Content",
      description: "Access subscriber-only resources"
    }
  ],
  ...props
}: Newsletter4Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    padding: "py-16 px-4",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="newsletter4Content" is="div" canvas>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
                <CraftText
                  text={badgeText}
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </span>
              <h2 className="text-3xl font-bold text-foreground mb-4">
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
              <p className="text-muted-foreground mb-6">
                <CraftText
                  text={description}
                  tagName="span"
                  fontSize=""
                  fontWeight=""
                  color=""
                  margin=""
                  padding=""
                />
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">
                        <CraftText
                          text={feature.title}
                          tagName="span"
                          fontSize=""
                          fontWeight=""
                          color=""
                          margin=""
                          padding=""
                        />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <CraftText
                          text={feature.description}
                          tagName="span"
                          fontSize=""
                          fontWeight=""
                          color=""
                          margin=""
                          padding=""
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card rounded-2xl p-8 border shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">
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
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <CraftInput
                    type="email"
                    placeholder={emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Frequency</label>
                  <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none">
                    <option>Weekly digest</option>
                    <option>Bi-weekly updates</option>
                    <option>Monthly newsletter</option>
                  </select>
                </div>
                <CraftButton
                  text={buttonText}
                  variant="default"
                  size="default"
                />
                <p className="text-xs text-muted-foreground text-center">
                  <CraftText
                    text={privacyText}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Newsletter4.craft = {
  displayName: "Newsletter 4",
  props: {
    badgeText: "Newsletter",
    title: "Stay in the Loop",
    description: "Join our community of innovators and get exclusive access to industry insights, product updates, and expert tips.",
    formTitle: "Subscribe Now",
    buttonText: "Subscribe",
    emailPlaceholder: "you@example.com",
    privacyText: "We respect your privacy. Unsubscribe at any time.",
    features: [
      {
        title: "Expert Insights",
        description: "Get actionable tips from industry leaders"
      },
      {
        title: "Early Access",
        description: "Be first to know about new features"
      },
      {
        title: "Exclusive Content",
        description: "Access subscriber-only resources"
      }
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
