import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftInput } from "../../editor/craft-components"
import { CraftButton } from "../../editor/craft-components"

interface Newsletter3Props extends SectionProps {
  title?: string
  description?: string
  buttonText?: string
  emailPlaceholder?: string
  stats?: string[]
}

export function Newsletter3({
  title = "Never Miss an Update",
  description = "Subscribe to our newsletter for the latest news, product updates, and exclusive offers delivered to your inbox.",
  buttonText = "Subscribe to Newsletter",
  emailPlaceholder = "Enter your email address",
  stats = ["10k+ subscribers", "Weekly digest", "Cancel anytime"],
  backgroundColor = "linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))",
  ...props
}: Newsletter3Props) {
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
      <Element id="newsletter3Content" is="div" canvas>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              <CraftText
                text={title}
                tagName="span"
                fontSize=""
                fontWeight=""
                color="text-white"
                margin=""
                padding=""
              />
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              <CraftText
                text={description}
                tagName="span"
                fontSize=""
                fontWeight=""
                color="text-white/80"
                margin=""
                padding=""
              />
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-lg mx-auto">
            <div className="space-y-4">
              <div className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg">
                <CraftInput
                  type="email"
                  placeholder={emailPlaceholder}
                />
              </div>
              <div className="w-full px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-white/90 transition-colors text-center">
                <CraftButton
                  text={buttonText}
                  variant="ghost"
                  size="default"
                />
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-6 text-sm text-white/60">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span>
                    <CraftText
                      text={stat}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color="text-white/60"
                      margin=""
                      padding=""
                    />
                  </span>
                  {index < stats.length - 1 && <span>•</span>}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Newsletter3.craft = {
  displayName: "Newsletter 3",
  props: {
    title: "Never Miss an Update",
    description: "Subscribe to our newsletter for the latest news, product updates, and exclusive offers delivered to your inbox.",
    buttonText: "Subscribe to Newsletter",
    emailPlaceholder: "Enter your email address",
    stats: ["10k+ subscribers", "Weekly digest", "Cancel anytime"],
    backgroundColor: "linear-gradient(to right, rgb(37, 99, 235), rgb(147, 51, 234))"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
