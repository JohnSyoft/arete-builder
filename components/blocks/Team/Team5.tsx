import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface TeamMember {
  name: string
  role: string
  focus: string
  image: string
}

interface Team5Props extends SectionProps {
  title?: string
  subtitle?: string
  team?: TeamMember[]
  footerText?: string
}

export function Team5({
  title = "🌱 Our Green Team",
  subtitle = "Meet the passionate individuals dedicated to creating a sustainable future through innovation and commitment.",
  team = [
    {
      name: "Elena Rodriguez",
      role: "Sustainability Director",
      focus: "Environmental Impact",
      image: "/placeholder.svg?height=280&width=280",
    },
    {
      name: "Marcus Johnson",
      role: "Green Technology Lead",
      focus: "Renewable Solutions",
      image: "/placeholder.svg?height=280&width=280",
    },
    {
      name: "Priya Patel",
      role: "Community Outreach",
      focus: "Social Responsibility",
      image: "/placeholder.svg?height=280&width=280",
    },
    {
      name: "Oliver Thompson",
      role: "Research Scientist",
      focus: "Climate Solutions",
      image: "/placeholder.svg?height=280&width=280",
    },
  ],
  footerText = "♻️ Committed to carbon-neutral operations by 2025",
  backgroundColor = "linear-gradient(to right, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))",
  ...props
}: Team5Props) {
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
      <Element id="team5Content" is="div" canvas>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-green-200/50 dark:border-green-800/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative mb-4">
                  <div className="w-20 h-20 rounded-full mx-auto border-2 border-green-200 dark:border-green-800 overflow-hidden">
                    <CraftImage
                      src={member.image}
                      alt={member.name}
                      width="80"
                      height="80"
                    />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🌿</span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    <CraftText
                      text={member.name}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium text-sm mb-2">
                    <CraftText
                      text={member.role}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </p>
                  <p className="text-muted-foreground text-xs">
                    <CraftText
                      text={member.focus}
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
          <div className="text-center mt-8">
            <p className="text-sm text-muted-foreground">
              <CraftText
                text={footerText}
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

Team5.craft = {
  displayName: "Team 5",
  props: {
    title: "🌱 Our Green Team",
    subtitle: "Meet the passionate individuals dedicated to creating a sustainable future through innovation and commitment.",
    team: [
      {
        name: "Elena Rodriguez",
        role: "Sustainability Director",
        focus: "Environmental Impact",
        image: "/placeholder.svg?height=280&width=280",
      },
      {
        name: "Marcus Johnson",
        role: "Green Technology Lead",
        focus: "Renewable Solutions",
        image: "/placeholder.svg?height=280&width=280",
      },
      {
        name: "Priya Patel",
        role: "Community Outreach",
        focus: "Social Responsibility",
        image: "/placeholder.svg?height=280&width=280",
      },
      {
        name: "Oliver Thompson",
        role: "Research Scientist",
        focus: "Climate Solutions",
        image: "/placeholder.svg?height=280&width=280",
      },
    ],
    footerText: "♻️ Committed to carbon-neutral operations by 2025",
    backgroundColor: "linear-gradient(to right, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
