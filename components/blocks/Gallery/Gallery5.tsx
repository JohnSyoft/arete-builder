import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface NatureImage {
  src: string
  alt: string
  height: "200" | "250"
}

interface Gallery5Props extends SectionProps {
  title?: string
  subtitle?: string
  footerText?: string
  columns?: NatureImage[][]
}

export function Gallery5({
  title = "🌿 Nature Gallery",
  subtitle = "Celebrating the beauty of our natural world through sustainable photography practices.",
  footerText = "🌱 All images captured with eco-friendly practices",
  columns = [
    [
      { src: "/placeholder.svg?height=250&width=300", alt: "Forest", height: "250" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Mountains", height: "200" }
    ],
    [
      { src: "/placeholder.svg?height=200&width=300", alt: "Ocean", height: "200" },
      { src: "/placeholder.svg?height=250&width=300", alt: "Wildlife", height: "250" }
    ],
    [
      { src: "/placeholder.svg?height=250&width=300", alt: "Flowers", height: "250" },
      { src: "/placeholder.svg?height=200&width=300", alt: "Sunset", height: "200" }
    ],
    [
      { src: "/placeholder.svg?height=200&width=300", alt: "River", height: "200" },
      { src: "/placeholder.svg?height=250&width=300", alt: "Trees", height: "250" }
    ]
  ],
  backgroundColor = "linear-gradient(to right, #f0fdf4, #ecfdf5)",
  ...props
}: Gallery5Props) {
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
      <Element id="gallery5Content" is="div" canvas>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((image, imageIndex) => (
                  <div key={imageIndex} className="w-full rounded-lg shadow-md overflow-hidden">
                    <CraftImage
                      src={image.src}
                      alt={image.alt}
                      width="300"
                      height={image.height}
                    />
                  </div>
                ))}
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

Gallery5.craft = {
  displayName: "Gallery 5",
  props: {
    title: "🌿 Nature Gallery",
    subtitle: "Celebrating the beauty of our natural world through sustainable photography practices.",
    footerText: "🌱 All images captured with eco-friendly practices",
    columns: [
      [
        { src: "/placeholder.svg?height=250&width=300", alt: "Forest", height: "250" },
        { src: "/placeholder.svg?height=200&width=300", alt: "Mountains", height: "200" }
      ],
      [
        { src: "/placeholder.svg?height=200&width=300", alt: "Ocean", height: "200" },
        { src: "/placeholder.svg?height=250&width=300", alt: "Wildlife", height: "250" }
      ],
      [
        { src: "/placeholder.svg?height=250&width=300", alt: "Flowers", height: "250" },
        { src: "/placeholder.svg?height=200&width=300", alt: "Sunset", height: "200" }
      ],
      [
        { src: "/placeholder.svg?height=200&width=300", alt: "River", height: "200" },
        { src: "/placeholder.svg?height=250&width=300", alt: "Trees", height: "250" }
      ]
    ],
    backgroundColor: "linear-gradient(to right, #f0fdf4, #ecfdf5)"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
