import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"

interface PageHeader1Props extends SectionProps {
  title?: string
  subtitle?: string
}

export function PageHeader1({
  title = "Welcome to Our Platform",
  subtitle = "Discover amazing features and build something incredible with our tools",
  backgroundColor = "linear-gradient(to right, #2563eb, #9333ea)",
  ...props
}: PageHeader1Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    color: "#ffffff",
    padding: "py-16",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="pageHeader1Content" is="div" canvas>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              <CraftText
                text={title}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
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
        </div>
      </Element>
    </Section>
  )
}

PageHeader1.craft = {
  displayName: "Page Header 1",
  props: {
    title: "Welcome to Our Platform",
    subtitle: "Discover amazing features and build something incredible with our tools",
    backgroundColor: "linear-gradient(to right, #2563eb, #9333ea)"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
