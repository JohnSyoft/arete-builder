import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftInput } from "../../editor/craft-components"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Newsletter1Props extends SectionProps {
  title?: string
  description?: string
  placeholder?: string
  buttonText?: string
  disclaimer?: string
}

export function Newsletter1({
  title = "Stay Updated",
  description = "Subscribe to our newsletter and be the first to know about our latest updates, features, and exclusive content.",
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  disclaimer = "No spam, unsubscribe at any time.",
  backgroundColor = "#2563eb",
  ...props
}: Newsletter1Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    color: "#ffffff",
    padding: "py-16 px-4",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="newsletter1Content" is="div" canvas>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">
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
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
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
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1">
              <CraftInput
                type="email"
                placeholder={placeholder}
                backgroundColor="#ffffff"
                textColor="#000000"
                borderRadius="rounded-lg"
                padding="px-4 py-3"
                margin=""
              />
            </div>
            <CraftButton
              text={buttonText}
              variant="default"
              size="default"
              backgroundColor="#ffffff"
              textColor="#2563eb"
              borderRadius="rounded-lg"
              margin=""
              padding="px-6 py-3"
            />
          </div>
          <p className="text-primary-foreground/60 text-sm mt-4">
            <CraftText
              text={disclaimer}
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
    </Section>
  )
}

Newsletter1.craft = {
  displayName: "Newsletter 1",
  props: {
    title: "Stay Updated",
    description: "Subscribe to our newsletter and be the first to know about our latest updates, features, and exclusive content.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    disclaimer: "No spam, unsubscribe at any time.",
    backgroundColor: "#2563eb"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
