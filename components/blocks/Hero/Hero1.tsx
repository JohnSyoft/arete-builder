import { Button } from "@/components/ui/button"
import { useNode } from "@craftjs/core"
import React from "react"

interface Hero1Props {
  title?: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  backgroundColor?: string
}

export function Hero1({ 
  title = "Build Amazing Websites",
  subtitle = "Create stunning, professional websites with our powerful drag-and-drop builder. No coding required.",
  primaryButtonText = "Get Started Free",
  secondaryButtonText = "Watch Demo",
  backgroundColor = "from-blue-600 to-purple-600"
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
        <div className="text-center">
          <h1 
            contentEditable
            suppressContentEditableWarning
            onBlur={(e: React.FocusEvent<HTMLHeadingElement>) =>
              setProp((props: Hero1Props) => (props.title = e.currentTarget.textContent || ""))
            }
            className="text-4xl md:text-6xl font-bold mb-6 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded p-1"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p 
            contentEditable
            suppressContentEditableWarning
            onBlur={(e: React.FocusEvent<HTMLParagraphElement>) =>
              setProp((props: Hero1Props) => (props.subtitle = e.currentTarget.textContent || ""))
            }
            className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded p-1"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                  setProp((props: Hero1Props) => (props.primaryButtonText = e.currentTarget.textContent || ""))
                }
                className="focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                dangerouslySetInnerHTML={{ __html: primaryButtonText }}
              />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                  setProp((props: Hero1Props) => (props.secondaryButtonText = e.currentTarget.textContent || ""))
                }
                className="focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-transparent rounded"
                dangerouslySetInnerHTML={{ __html: secondaryButtonText }}
              />
            </Button>
          </div>
        </div>
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
    title: "Build Amazing Websites",
    subtitle: "Create stunning, professional websites with our powerful drag-and-drop builder. No coding required.",
    primaryButtonText: "Get Started Free",
    secondaryButtonText: "Watch Demo",
    backgroundColor: "from-blue-600 to-purple-600",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
