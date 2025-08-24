import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface VisualStory {
  src: string
  alt: string
  title: string
  description: string
}

interface Gallery4Props extends SectionProps {
  badge?: string
  title?: string
  subtitle?: string
  stories?: VisualStory[]
}

export function Gallery4({
  badge = "Gallery",
  title = "Visual Stories",
  subtitle = "Each image tells a unique story. Browse through our collection of memorable moments.",
  stories = [
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 1",
      alt: "Story 1",
      title: "Story Title 1",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 2",
      alt: "Story 2",
      title: "Story Title 2",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 3",
      alt: "Story 3",
      title: "Story Title 3",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 4",
      alt: "Story 4",
      title: "Story Title 4",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 5",
      alt: "Story 5",
      title: "Story Title 5",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 6",
      alt: "Story 6",
      title: "Story Title 6",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 7",
      alt: "Story 7",
      title: "Story Title 7",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 8",
      alt: "Story 8",
      title: "Story Title 8",
      description: "Beautiful moment captured"
    },
    {
      src: "/placeholder.svg?height=300&width=400&query=visual story 9",
      alt: "Story 9",
      title: "Story Title 9",
      description: "Beautiful moment captured"
    }
  ],
  backgroundColor = "#ffffff",
  ...props
}: Gallery4Props) {
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
      <Element id="gallery4Content" is="div" canvas>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-4">
              <CraftText
                text={badge}
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-card border">
                <div className="w-full h-64 overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-105">
                    <CraftImage
                      src={story.src}
                      alt={story.alt}
                      width="400"
                      height="300"
                    />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold mb-1">
                    <CraftText
                      text={story.title}
                      tagName="span"
                      fontSize=""
                      fontWeight=""
                      color=""
                      margin=""
                      padding=""
                    />
                  </h3>
                  <p className="text-sm text-white/80">
                    <CraftText
                      text={story.description}
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

Gallery4.craft = {
  displayName: "Gallery 4",
  props: {
    badge: "Gallery",
    title: "Visual Stories",
    subtitle: "Each image tells a unique story. Browse through our collection of memorable moments.",
    stories: [
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 1",
        alt: "Story 1",
        title: "Story Title 1",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 2",
        alt: "Story 2",
        title: "Story Title 2",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 3",
        alt: "Story 3",
        title: "Story Title 3",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 4",
        alt: "Story 4",
        title: "Story Title 4",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 5",
        alt: "Story 5",
        title: "Story Title 5",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 6",
        alt: "Story 6",
        title: "Story Title 6",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 7",
        alt: "Story 7",
        title: "Story Title 7",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 8",
        alt: "Story 8",
        title: "Story Title 8",
        description: "Beautiful moment captured"
      },
      {
        src: "/placeholder.svg?height=300&width=400&query=visual story 9",
        alt: "Story 9",
        title: "Story Title 9",
        description: "Beautiful moment captured"
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
