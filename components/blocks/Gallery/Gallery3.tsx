import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface Gallery3Props extends SectionProps {
  title?: string
  subtitle?: string
  featuredImage1?: string
  featuredImage2?: string
  thumbnails?: Array<{ src: string; alt: string }>
}

export function Gallery3({
  title = "Featured Gallery",
  subtitle = "Discover our most captivating images showcasing creativity and excellence.",
  featuredImage1 = "/placeholder.svg?height=400&width=600",
  featuredImage2 = "/placeholder.svg?height=400&width=600",
  thumbnails = [
    { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 1" },
    { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 2" },
    { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 3" },
    { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 4" }
  ],
  backgroundColor = "linear-gradient(to bottom right, #dbeafe, #e0e7ff)",
  ...props
}: Gallery3Props) {
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
      <Element id="gallery3Content" is="div" canvas>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="w-full rounded-lg shadow-lg overflow-hidden">
                <CraftImage
                  src={featuredImage1}
                  alt="Featured"
                  width="600"
                  height="400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full rounded-lg overflow-hidden">
                  <CraftImage
                    src={thumbnails[0].src}
                    alt={thumbnails[0].alt}
                    width="290"
                    height="200"
                  />
                </div>
                <div className="w-full rounded-lg overflow-hidden">
                  <CraftImage
                    src={thumbnails[1].src}
                    alt={thumbnails[1].alt}
                    width="290"
                    height="200"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="w-full rounded-lg overflow-hidden">
                  <CraftImage
                    src={thumbnails[2].src}
                    alt={thumbnails[2].alt}
                    width="290"
                    height="200"
                  />
                </div>
                <div className="w-full rounded-lg overflow-hidden">
                  <CraftImage
                    src={thumbnails[3].src}
                    alt={thumbnails[3].alt}
                    width="290"
                    height="200"
                  />
                </div>
              </div>
              <div className="w-full rounded-lg shadow-lg overflow-hidden">
                <CraftImage
                  src={featuredImage2}
                  alt="Featured 2"
                  width="600"
                  height="400"
                />
              </div>
            </div>
          </div>
        </div>
      </Element>
    </Section>
  )
}

Gallery3.craft = {
  displayName: "Gallery 3",
  props: {
    title: "Featured Gallery",
    subtitle: "Discover our most captivating images showcasing creativity and excellence.",
    featuredImage1: "/placeholder.svg?height=400&width=600",
    featuredImage2: "/placeholder.svg?height=400&width=600",
    thumbnails: [
      { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 1" },
      { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 2" },
      { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 3" },
      { src: "/placeholder.svg?height=200&width=290", alt: "Thumbnail 4" }
    ],
    backgroundColor: "linear-gradient(to bottom right, #dbeafe, #e0e7ff)"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
