import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { Image as CraftImage } from "@/components/blocks/Basic/Image"

interface Team1Props extends SectionProps {
  title?: string
  subtitle?: string
  teamMembers?: Array<{
    name: string
    role: string
    image: string
    alt?: string
  }>
}

export function Team1({
  title = "Meet Our Team",
  subtitle = "The talented individuals behind our success, dedicated to delivering excellence.",
  teamMembers = [
    { 
      name: "Sarah Johnson", 
      role: "CEO & Founder", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612542b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      alt: "Sarah Johnson"
    },
    { 
      name: "Michael Chen", 
      role: "CTO", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      alt: "Michael Chen"
    },
    { 
      name: "Emily Davis", 
      role: "Head of Design", 
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      alt: "Emily Davis"
    },
    { 
      name: "David Wilson", 
      role: "Lead Developer", 
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
      alt: "David Wilson"
    }
  ],
  backgroundColor = "#ffffff",
  ...props
}: Team1Props) {
  const {
    connectors: { connect, drag }
  } = useNode()

  const sectionProps = {
    backgroundColor,
    color: "#111827",
    ...props
  }

  return (
    <Section {...sectionProps}>
      <Element id="team1Content" is="div" canvas>
        <div className="max-w-6xl mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
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
            <p className="text-gray-600 max-w-2xl mx-auto">
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

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Element key={index} is="div" className="text-center group" canvas>
                {/* Profile Image */}
                <div className="relative mb-4 mx-auto w-48 h-48 rounded-full overflow-hidden">
                  <CraftImage
                    src={member.image}
                    alt={member.alt || member.name}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
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

                {/* Role */}
                <p className="text-gray-600">
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
              </Element>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Team1.craft = {
  displayName: "Team 1",
  props: {
    title: "Meet Our Team",
    subtitle: "The talented individuals behind our success, dedicated to delivering excellence.",
    teamMembers: [
      { 
        name: "Sarah Johnson", 
        role: "CEO & Founder", 
        image: "https://images.unsplash.com/photo-1494790108755-2616b612542b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
        alt: "Sarah Johnson"
      },
      { 
        name: "Michael Chen", 
        role: "CTO", 
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
        alt: "Michael Chen"
      },
      { 
        name: "Emily Davis", 
        role: "Head of Design", 
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
        alt: "Emily Davis"
      },
      { 
        name: "David Wilson", 
        role: "Lead Developer", 
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
        alt: "David Wilson"
      }
    ],
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
