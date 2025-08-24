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
  logo: string
}

interface Testimonial5Props extends SectionProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
}

export function Testimonial5({
  title = "Customer Success Stories",
  subtitle = "See how leading companies are transforming their web presence with our platform",
  testimonials = [
    {
      quote:
        "This platform has exceeded all our expectations. The ease of use combined with powerful features makes it perfect for our agency.",
      author: "Sophie Williams",
      role: "Agency Founder",
      company: "Digital Craft Co.",
      avatar: "/placeholder.svg?height=70&width=70",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      quote:
        "We've built over 50 websites using this platform. The consistency and quality are unmatched in the industry.",
      author: "Marcus Johnson",
      role: "Lead Developer",
      company: "WebFlow Studios",
      avatar: "/placeholder.svg?height=70&width=70",
      logo: "/placeholder.svg?height=40&width=120",
    },
    {
      quote: "The ROI has been incredible. We're delivering projects faster and our clients are happier than ever.",
      author: "Isabella Chen",
      role: "Project Manager",
      company: "TechSolutions Inc.",
      avatar: "/placeholder.svg?height=70&width=70",
      logo: "/placeholder.svg?height=40&width=120",
    },
  ],
  backgroundColor = "linear-gradient(to bottom right, transparent, rgba(255, 255, 255, 0.05), transparent)",
  ...props
}: Testimonial5Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    padding: "py-24 px-4",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="testimonial5Content" is="div" canvas>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-6">
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
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
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

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="bg-card rounded-3xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                  <div className="mb-6">
                    <div className="text-primary text-5xl mb-4 opacity-50">"</div>
                    <p className="text-foreground text-lg leading-relaxed flex-grow">
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
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                        <CraftImage
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width="64"
                          height="64"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground">
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
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="h-8 opacity-60 group-hover:opacity-100 transition-opacity">
                        <CraftImage
                          src={testimonial.logo}
                          alt={testimonial.company}
                          width="120"
                          height="32"
                        />
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">
                            ★
                          </span>
                        ))}
                      </div>
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

Testimonial5.craft = {
  displayName: "Testimonial 5",
  props: {
    title: "Customer Success Stories",
    subtitle: "See how leading companies are transforming their web presence with our platform",
    testimonials: [
      {
        quote:
          "This platform has exceeded all our expectations. The ease of use combined with powerful features makes it perfect for our agency.",
        author: "Sophie Williams",
        role: "Agency Founder",
        company: "Digital Craft Co.",
        avatar: "/placeholder.svg?height=70&width=70",
        logo: "/placeholder.svg?height=40&width=120",
      },
      {
        quote:
          "We've built over 50 websites using this platform. The consistency and quality are unmatched in the industry.",
        author: "Marcus Johnson",
        role: "Lead Developer",
        company: "WebFlow Studios",
        avatar: "/placeholder.svg?height=70&width=70",
        logo: "/placeholder.svg?height=40&width=120",
      },
      {
        quote: "The ROI has been incredible. We're delivering projects faster and our clients are happier than ever.",
        author: "Isabella Chen",
        role: "Project Manager",
        company: "TechSolutions Inc.",
        avatar: "/placeholder.svg?height=70&width=70",
        logo: "/placeholder.svg?height=40&width=120",
      },
    ],
    backgroundColor: "linear-gradient(to bottom right, transparent, rgba(255, 255, 255, 0.05), transparent)"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
