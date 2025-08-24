import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface TeamMember {
  name: string
  role: string
  bio: string
  image: string
}

interface Team2Props extends SectionProps {
  title?: string
  subtitle?: string
  team?: TeamMember[]
}

export function Team2({
  title = "Our Leadership Team",
  subtitle = "Meet the visionaries driving our company forward",
  team = [
    {
      name: "Alex Rodriguez",
      role: "Product Manager",
      bio: "Passionate about creating user-centered products that make a difference.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Jessica Kim",
      role: "Marketing Director",
      bio: "Expert in digital marketing strategies and brand development.",
      image: "/placeholder.svg?height=400&width=400"
    },
    {
      name: "Robert Taylor",
      role: "Sales Lead",
      bio: "Building relationships and driving growth through strategic partnerships.",
      image: "/placeholder.svg?height=400&width=400"
    }
  ],
  backgroundColor = "#f8fafc",
  ...props
}: Team2Props) {
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
      <Element id="team2Content" is="div" canvas>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg p-6 shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <CraftImage
                    src={member.image}
                    alt={member.name}
                    width="400"
                    height="400"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
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
                  <p className="text-primary font-medium mb-3">
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
                  <p className="text-muted-foreground text-sm">
                    <CraftText
                      text={member.bio}
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
        </div>
      </Element>
    </Section>
  )
}

Team2.craft = {
  displayName: "Team 2",
  props: {
    title: "Our Leadership Team",
    subtitle: "Meet the visionaries driving our company forward",
    team: [
      {
        name: "Alex Rodriguez",
        role: "Product Manager",
        bio: "Passionate about creating user-centered products that make a difference.",
        image: "/placeholder.svg?height=400&width=400"
      },
      {
        name: "Jessica Kim",
        role: "Marketing Director",
        bio: "Expert in digital marketing strategies and brand development.",
        image: "/placeholder.svg?height=400&width=400"
      },
      {
        name: "Robert Taylor",
        role: "Sales Lead",
        bio: "Building relationships and driving growth through strategic partnerships.",
        image: "/placeholder.svg?height=400&width=400"
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
