import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftInput } from "../../editor/craft-components"
import { CraftButton } from "../../editor/craft-components"

interface Newsletter5Props extends SectionProps {
  title?: string
  description?: string
  buttonText?: string
  emailPlaceholder?: string
  features?: string[]
  impactMessage?: string
}

export function Newsletter5({
  title = "🌱 Join Our Eco Newsletter",
  description = "Stay informed about sustainable practices, environmental news, and green innovations. Together, we can make a difference for our planet.",
  buttonText = "🌿 Subscribe",
  emailPlaceholder = "your.email@example.com",
  features = ["🌱 Carbon neutral emails", "📅 Monthly updates", "🔒 Privacy protected"],
  impactMessage = "🌳 For every 100 subscribers, we plant a tree in partnership with environmental organizations.",
  backgroundColor = "linear-gradient(to right, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))",
  ...props
}: Newsletter5Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    padding: "py-16 px-4",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="newsletter5Content" is="div" canvas>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-green-200/50 dark:border-green-800/50 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-2xl">🌍</span>
              <span className="text-2xl">📧</span>
              <span className="text-2xl">♻️</span>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <CraftInput
                    type="email"
                    placeholder={emailPlaceholder}
                  />
                </div>
                <CraftButton
                  text={buttonText}
                  variant="default"
                  size="default"
                />
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CraftText
                      text={feature}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 p-4 bg-green-100/50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <CraftText
                  text={impactMessage}
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
      </Element>
    </Section>
  )
}

Newsletter5.craft = {
  displayName: "Newsletter 5",
  props: {
    title: "🌱 Join Our Eco Newsletter",
    description: "Stay informed about sustainable practices, environmental news, and green innovations. Together, we can make a difference for our planet.",
    buttonText: "🌿 Subscribe",
    emailPlaceholder: "your.email@example.com",
    features: ["🌱 Carbon neutral emails", "📅 Monthly updates", "🔒 Privacy protected"],
    impactMessage: "🌳 For every 100 subscribers, we plant a tree in partnership with environmental organizations.",
    backgroundColor: "linear-gradient(to right, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
