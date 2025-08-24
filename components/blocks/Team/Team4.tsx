import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface TeamMember {
  name: string
  role: string
  credentials: string
  experience: string
  image: string
}

interface Team4Props extends SectionProps {
  title?: string
  subtitle?: string
  badgeText?: string
  team?: TeamMember[]
}

export function Team4({
  title = "Expert Leadership",
  subtitle = "Our leadership team brings decades of combined experience and expertise to guide our mission.",
  badgeText = "Our Team",
  team = [
    {
      name: "Dr. Amanda Foster",
      role: "Chief Medical Officer",
      credentials: "MD, PhD",
      experience: "15+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kevin Park",
      role: "Head of Operations",
      credentials: "MBA, PMP",
      experience: "12+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Rachel Green",
      role: "Customer Success Lead",
      credentials: "BA, CSM",
      experience: "8+ years",
      image: "/placeholder.svg?height=300&width=300",
    },
  ],
  ...props
}: Team4Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    padding: "py-16 px-4",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="team4Content" is="div" canvas>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
              <CraftText
                text={badgeText}
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
                padding=""
              />
            </span>
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6 mx-auto w-32 h-32">
                  <div className="w-full h-full rounded-full border-4 border-primary/10 overflow-hidden">
                    <CraftImage
                      src={member.image}
                      alt={member.name}
                      width="128"
                      height="128"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
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
                <p className="text-primary font-medium mb-2">
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
                <p className="text-sm text-muted-foreground mb-1">
                  <CraftText
                    text={member.credentials}
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
                    text={`${member.experience} experience`}
                    tagName="span"
                    fontSize=""
                    fontWeight=""
                    color=""
                    margin=""
                    padding=""
                  />
                </p>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Team4.craft = {
  displayName: "Team 4",
  props: {
    title: "Expert Leadership",
    subtitle: "Our leadership team brings decades of combined experience and expertise to guide our mission.",
    badgeText: "Our Team",
    team: [
      {
        name: "Dr. Amanda Foster",
        role: "Chief Medical Officer",
        credentials: "MD, PhD",
        experience: "15+ years",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Kevin Park",
        role: "Head of Operations",
        credentials: "MBA, PMP",
        experience: "12+ years",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        name: "Rachel Green",
        role: "Customer Success Lead",
        credentials: "BA, CSM",
        experience: "8+ years",
        image: "/placeholder.svg?height=300&width=300",
      },
    ]
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
