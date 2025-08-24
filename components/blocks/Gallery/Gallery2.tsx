import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface MasonryImage {
  src: string
  alt: string
  height: "300" | "400"
}

interface Gallery2Props extends SectionProps {
  title?: string
  subtitle?: string
  columns?: MasonryImage[][]
}

export function Gallery2({
  title = "Photo Gallery",
  subtitle = "A curated collection of our finest work",
  columns = [
    [
      { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 1", height: "300" },
      { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 2", height: "400" }
    ],
    [
      { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 3", height: "400" },
      { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 4", height: "300" }
    ],
    [
      { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 5", height: "300" },
      { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 6", height: "400" }
    ],
    [
      { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 7", height: "400" },
      { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 8", height: "300" }
    ]
  ],
  backgroundColor = "#f8fafc",
  ...props
}: Gallery2Props) {
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
      <Element id="gallery2Content" is="div" canvas>
        <div className="max-w-7xl mx-auto">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="grid gap-4">
                {column.map((image, imageIndex) => (
                  <div key={imageIndex} className="rounded-lg overflow-hidden">
                    <CraftImage
                      src={image.src}
                      alt={image.alt}
                      width="250"
                      height={image.height}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Gallery2.craft = {
  displayName: "Gallery 2",
  props: {
    title: "Photo Gallery",
    subtitle: "A curated collection of our finest work",
    columns: [
      [
        { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 1", height: "300" },
        { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 2", height: "400" }
      ],
      [
        { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 3", height: "400" },
        { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 4", height: "300" }
      ],
      [
        { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 5", height: "300" },
        { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 6", height: "400" }
      ],
      [
        { src: "/placeholder.svg?height=400&width=250", alt: "Gallery 7", height: "400" },
        { src: "/placeholder.svg?height=300&width=250", alt: "Gallery 8", height: "300" }
      ]
    ],
    backgroundColor: "#f8fafc"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
