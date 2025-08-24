import { Element, useNode } from "@craftjs/core"
import React from "react"
import { Section, SectionProps } from "@/components/blocks/Basic/Section"
import { CraftText } from "../../editor/craft-components"
import { CraftImage } from "../../editor/craft-components"

interface GalleryImage {
  src: string
  alt: string
}

interface Gallery1Props extends SectionProps {
  title?: string
  subtitle?: string
  images?: GalleryImage[]
}

export function Gallery1({
  title = "Our Gallery",
  subtitle = "Explore our collection of beautiful moments and memories captured through our lens.",
  images = [
    { src: "/placeholder.svg?height=400&width=400&query=gallery image 1", alt: "Gallery image 1" },
    { src: "/placeholder.svg?height=400&width=400&query=gallery image 2", alt: "Gallery image 2" },
    { src: "/placeholder.svg?height=400&width=400&query=gallery image 3", alt: "Gallery image 3" },
    { src: "/placeholder.svg?height=400&width=400&query=gallery image 4", alt: "Gallery image 4" },
    { src: "/placeholder.svg?height=400&width=400&query=gallery image 5", alt: "Gallery image 5" },
    { src: "/placeholder.svg?height=400&width=400&query=gallery image 6", alt: "Gallery image 6" }
  ],
  backgroundColor = "#ffffff",
  ...props
}: Gallery1Props) {
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
      <Element id="gallery1Content" is="div" canvas>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-square">
                  <div className="w-full h-full transition-transform duration-300 group-hover:scale-110">
                    <CraftImage
                      src={image.src}
                      alt={image.alt}
                      width="400"
                      height="400"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Element>
    </Section>
  )
}

Gallery1.craft = {
  displayName: "Gallery 1",
  props: {
    title: "Our Gallery",
    subtitle: "Explore our collection of beautiful moments and memories captured through our lens.",
    images: [
      { src: "/placeholder.svg?height=400&width=400&query=gallery image 1", alt: "Gallery image 1" },
      { src: "/placeholder.svg?height=400&width=400&query=gallery image 2", alt: "Gallery image 2" },
      { src: "/placeholder.svg?height=400&width=400&query=gallery image 3", alt: "Gallery image 3" },
      { src: "/placeholder.svg?height=400&width=400&query=gallery image 4", alt: "Gallery image 4" },
      { src: "/placeholder.svg?height=400&width=400&query=gallery image 5", alt: "Gallery image 5" },
      { src: "/placeholder.svg?height=400&width=400&query=gallery image 6", alt: "Gallery image 6" }
    ],
    backgroundColor: "#ffffff"
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
