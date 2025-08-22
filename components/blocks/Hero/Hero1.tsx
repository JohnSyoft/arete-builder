import { Button } from "@/components/ui/button"
import { useNode, Element } from "@craftjs/core"
import React from "react"
import { Text as CraftText } from "@/components/blocks/Basic/Text"
import { Button as CraftButton } from "@/components/blocks/Basic/Button"

interface Hero1Props {
  backgroundColor?: string
  padding?: string
  minHeight?: string
}

export function Hero1({ 
  backgroundColor = "from-blue-600 to-purple-600",
}: Hero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }))

  return (
    <section 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative bg-gradient-to-r ${backgroundColor} text-white ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <Element id="heroContent" is="div" canvas className="text-center">
          {/* Title as draggable component with padding for drag area */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded" canvas={false}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              <CraftText
                text="Build Amazing Websites"
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
              />
            </h1>
          </Element>
          
          {/* Subtitle as draggable component with padding for drag area */}
          <Element is="div" className="p-2 hover:ring-1 hover:ring-blue-300 hover:ring-dashed rounded max-w-3xl mx-auto" canvas={false}>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              <CraftText
                text="Create stunning, professional websites with our powerful drag-and-drop builder. No coding required."
                tagName="span"
                fontSize=""
                fontWeight=""
                color=""
                margin=""
              />
            </p>
          </Element>
          
          {/* Buttons container with individual draggable buttons */}
          <Element is="div" className="flex flex-col sm:flex-row gap-4 justify-center" canvas>
            <CraftButton
              text="Get Started Free"
              size="lg"
              backgroundColor="white"
              textColor="#2563eb"
              borderRadius="8px"
              margin=""
              padding="px-6 py-3"
              width="w-auto"
            />
            <CraftButton
              text="Watch Demo"
              variant="outline"
              size="lg"
              backgroundColor="transparent"
              textColor="white"
              borderRadius="8px"
              margin=""
              padding="px-6 py-3"
              width="w-auto"
            />
          </Element>
        </Element>
      </div>
      {(selected || hovered) && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
          Hero 1
        </div>
      )}
    </section>
  )
}

Hero1.craft = {
  displayName: "Hero 1",
  props: {
    backgroundColor: "from-blue-600 to-purple-600",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true, // Allow components to be dropped into the hero canvas
    canMoveOut: () => true,
  },
  isCanvas: false, // The Hero container is not a canvas, but it contains one
}
