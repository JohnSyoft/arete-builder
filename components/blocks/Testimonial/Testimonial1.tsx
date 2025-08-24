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

interface Testimonial1Props extends SectionProps {
  title?: string
  subtitle?: string
  testimonials?: Testimonial[]
}

export function Testimonial1({
  title = "What Our Customers Say",
  subtitle = "Don't just take our word for it. Here's what real customers have to say about their experience.",
  testimonials = [
    {
      quote: "This platform has completely transformed how we build and deploy websites. The drag-and-drop interface is intuitive and powerful.",
      author: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      avatar: "/placeholder.svg?height=60&width=60"
    },
    {
      quote: "The component library is extensive and the customization options are endless. We've reduced our development time by 70%.",
      author: "Michael Chen",
      role: "Lead Developer",
      company: "StartupXYZ",
      avatar: "/placeholder.svg?height=60&width=60"
    },
    {
      quote: "Outstanding support and documentation. The team is responsive and the platform keeps getting better with each update.",
      author: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      avatar: "/placeholder.svg?height=60&width=60"
    }
  ],
  backgroundColor = "#f8fafc",
  ...props
}: Testimonial1Props) {
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
      <Element id="testimonial1Content" is="div" canvas>
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
            <p className="text-muted-foreground max-w-2xl mx-auto">
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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl p-8 border border-border shadow-sm">
                <div className="mb-6">
                  <div className="text-primary text-4xl mb-4">"</div>
                  <p className="text-foreground leading-relaxed">
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

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <CraftImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      width="60"
                      height="60"
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
                    <p className="text-sm text-muted-foreground">
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
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Testimonial1.craft = {
  displayName: "Testimonial 1",
  props: {
    title: "What Our Customers Say",
    subtitle: "Don't just take our word for it. Here's what real customers have to say about their experience.",
    testimonials: [
      {
        quote: "This platform has completely transformed how we build and deploy websites. The drag-and-drop interface is intuitive and powerful.",
        author: "Sarah Johnson",
        role: "Product Manager",
        company: "TechCorp",
        avatar: "/placeholder.svg?height=60&width=60"
      },
      {
        quote: "The component library is extensive and the customization options are endless. We've reduced our development time by 70%.",
        author: "Michael Chen",
        role: "Lead Developer",
        company: "StartupXYZ",
        avatar: "/placeholder.svg?height=60&width=60"
      },
      {
        quote: "Outstanding support and documentation. The team is responsive and the platform keeps getting better with each update.",
        author: "Emily Rodriguez",
        role: "Design Director",
        company: "Creative Agency",
        avatar: "/placeholder.svg?height=60&width=60"
      }
    ],
    backgroundColor: "#f8fafc"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
