import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface Testimonial2Props extends SectionProps {
  quote?: string
  author?: string
  role?: string
  company?: string
  avatar?: string
  rating?: number
}

export function Testimonial2({
  quote = "This website builder has revolutionized our workflow. What used to take weeks now takes days, and the results are consistently professional and polished.",
  author = "David Park",
  role = "CTO",
  company = "InnovateTech Solutions",
  avatar = "/placeholder.svg?height=80&width=80",
  rating = 5,
  backgroundColor = "#ffffff",
  ...props
}: Testimonial2Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    padding: "py-20 px-4",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="testimonial2Content" is="div" canvas>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              {[...Array(rating)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>

            <blockquote className="text-2xl md:text-3xl font-light text-foreground leading-relaxed mb-8">
              "<CraftText
                text={quote}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />"
            </blockquote>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full mb-4 border-4 border-primary/20 overflow-hidden">
              <CraftImage
                src={avatar}
                alt={author}
                width="80"
                height="80"
              />
            </div>
            <h4 className="text-xl font-semibold text-foreground">
              <CraftText
                text={author}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </h4>
            <p className="text-muted-foreground">
              <CraftText
                text={role}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </p>
            <p className="text-primary font-medium">
              <CraftText
                text={company}
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

Testimonial2.craft = {
  displayName: "Testimonial 2",
  props: {
    quote: "This website builder has revolutionized our workflow. What used to take weeks now takes days, and the results are consistently professional and polished.",
    author: "David Park",
    role: "CTO",
    company: "InnovateTech Solutions",
    avatar: "/placeholder.svg?height=80&width=80",
    rating: 5,
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
