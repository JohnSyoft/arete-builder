import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
}

interface Testimonial4Props extends SectionProps {
  title?: string
  testimonials?: Testimonial[]
}

export function Testimonial4({
  title = "Success Stories",
  testimonials = [
    {
      quote: "Game-changing platform that has transformed our digital presence.",
      author: "Alex Thompson",
      role: "E-commerce Manager",
      company: "RetailPro",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "Exceptional quality and performance. Highly recommended!",
      author: "Maria Santos",
      role: "Creative Director",
      company: "BrandStudio",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
  ...props
}: Testimonial4Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    padding: "py-20 px-4",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="testimonial4Content" is="div" canvas>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
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
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-3xl p-8 border border-border shadow-lg relative z-10">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">"</span>
                  </div>

                  <p className="text-lg text-foreground mb-8 leading-relaxed">
                    <CraftText
                      text={testimonial.quote}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <CraftImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width="64"
                        height="64"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">
                        <CraftText
                          text={testimonial.author}
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
                          text={testimonial.role}
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
                          text={testimonial.company}
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
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Testimonial4.craft = {
  displayName: "Testimonial 4",
  props: {
    title: "Success Stories",
    testimonials: [
      {
        quote: "Game-changing platform that has transformed our digital presence.",
        author: "Alex Thompson",
        role: "E-commerce Manager",
        company: "RetailPro",
        avatar: "/placeholder.svg?height=60&width=60",
      },
      {
        quote: "Exceptional quality and performance. Highly recommended!",
        author: "Maria Santos",
        role: "Creative Director",
        company: "BrandStudio",
        avatar: "/placeholder.svg?height=60&width=60",
      },
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
