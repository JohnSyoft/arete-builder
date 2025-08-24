import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
  rating: number
}

interface Testimonial3Props extends SectionProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
}

export function Testimonial3({
  title = "Trusted by Thousands",
  subtitle = "Join the community of satisfied customers",
  testimonials = [
    {
      quote: "The best website builder I've ever used. Intuitive, powerful, and the results speak for themselves.",
      author: "Jennifer Liu",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5
    },
    {
      quote: "Incredible flexibility and ease of use. Our team was up and running in no time.",
      author: "Robert Kim",
      role: "Startup Founder",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5
    },
    {
      quote: "Outstanding customer support and a product that delivers on its promises.",
      author: "Amanda Foster",
      role: "Freelance Designer",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5
    },
    {
      quote: "This platform has streamlined our entire web development process.",
      author: "Carlos Martinez",
      role: "Agency Owner",
      avatar: "/placeholder.svg?height=50&width=50",
      rating: 5
    }
  ],
  backgroundColor = "linear-gradient(to right, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.1))",
  ...props
}: Testimonial3Props) {
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
      <Element id="testimonial3Content" is="div" canvas>
        <div className="max-w-6xl mx-auto">
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
            <p className="text-muted-foreground">
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

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-foreground mb-6 leading-relaxed">
                  "<CraftText
                    text={testimonial.quote}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <CraftImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width="50"
                      height="50"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
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
                    <p className="text-sm text-muted-foreground">
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
              </div>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Testimonial3.craft = {
  displayName: "Testimonial 3",
  props: {
    title: "Trusted by Thousands",
    subtitle: "Join the community of satisfied customers",
    testimonials: [
      {
        quote: "The best website builder I've ever used. Intuitive, powerful, and the results speak for themselves.",
        author: "Jennifer Liu",
        role: "Marketing Director",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5
      },
      {
        quote: "Incredible flexibility and ease of use. Our team was up and running in no time.",
        author: "Robert Kim",
        role: "Startup Founder",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5
      },
      {
        quote: "Outstanding customer support and a product that delivers on its promises.",
        author: "Amanda Foster",
        role: "Freelance Designer",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5
      },
      {
        quote: "This platform has streamlined our entire web development process.",
        author: "Carlos Martinez",
        role: "Agency Owner",
        avatar: "/placeholder.svg?height=50&width=50",
        rating: 5
      }
    ],
    backgroundColor: "linear-gradient(to right, rgba(37, 99, 235, 0.05), rgba(37, 99, 235, 0.1))"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
