import { Button } from "@/components/ui/button"
import { useNode } from "@craftjs/core"
import React from "react"

interface Hero2Props {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  backgroundColor?: string
}

export function Hero2({ 
  title = "The Future of Web Design",
  subtitle = "Transform your ideas into beautiful, responsive websites. Our intuitive platform makes web design accessible to everyone.",
  primaryButtonText = "Start Building",
  secondaryButtonText = "View Examples",
  backgroundColor = "bg-white"
}: Hero2Props) {
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
      className={`relative ${backgroundColor} ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
          <div>
            <h1 
              contentEditable
              suppressContentEditableWarning
              onBlur={(e: React.FocusEvent<HTMLHeadingElement>) =>
                setProp((props: Hero2Props) => (props.title = e.currentTarget.textContent || ""))
              }
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded p-1"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p 
              contentEditable
              suppressContentEditableWarning
              onBlur={(e: React.FocusEvent<HTMLParagraphElement>) =>
                setProp((props: Hero2Props) => (props.subtitle = e.currentTarget.textContent || ""))
              }
              className="text-lg text-gray-600 mb-8 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded p-1"
              dangerouslySetInnerHTML={{ __html: subtitle }}
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                    setProp((props: Hero2Props) => (props.primaryButtonText = e.currentTarget.textContent || ""))
                  }
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                  dangerouslySetInnerHTML={{ __html: primaryButtonText }}
                />
              </Button>
              <Button size="lg" variant="outline">
                <span
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                    setProp((props: Hero2Props) => (props.secondaryButtonText = e.currentTarget.textContent || ""))
                  }
                  className="focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                  dangerouslySetInnerHTML={{ __html: secondaryButtonText }}
                />
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                Free Forever Plan
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center">
              <img
                src="/placeholder.svg?height=400&width=400"
                alt="Website Builder Preview"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      {(selected || hovered) && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
          Hero 2
        </div>
      )}
    </section>
  )
}

Hero2.craft = {
  displayName: "Hero 2",
  props: {
    title: "The Future of Web Design",
    subtitle: "Transform your ideas into beautiful, responsive websites. Our intuitive platform makes web design accessible to everyone.",
    primaryButtonText: "Start Building",
    secondaryButtonText: "View Examples",
    backgroundColor: "bg-white",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
