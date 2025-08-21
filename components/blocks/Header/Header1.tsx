import { Button } from "@/components/ui/button"
import { useNode } from "@craftjs/core"
import React from "react"

interface Header1Props {
  brandName?: string
  navItems?: string[]
  signInText?: string
  ctaText?: string
}

export function Header1({
  brandName = "WebBuilder",
  navItems = ["Features", "Templates", "Pricing", "About"],
  signInText = "Sign In",
  ctaText = "Get Started"
}: Header1Props) {
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
    <header 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`bg-white border-b border-gray-200 relative ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div 
              contentEditable
              suppressContentEditableWarning
              onBlur={(e: React.FocusEvent<HTMLDivElement>) =>
                setProp((props: Header1Props) => (props.brandName = e.currentTarget.textContent || ""))
              }
              className="text-xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded p-1"
              dangerouslySetInnerHTML={{ __html: brandName }}
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <span
                key={index}
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLSpanElement>) => {
                  const newItems = [...navItems]
                  newItems[index] = e.currentTarget.textContent || ""
                  setProp((props: Header1Props) => (props.navItems = newItems))
                }}
                className="text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 rounded p-1 cursor-text"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                  setProp((props: Header1Props) => (props.signInText = e.currentTarget.textContent || ""))
                }
                className="focus:outline-none"
                dangerouslySetInnerHTML={{ __html: signInText }}
              />
            </Button>
            <Button>
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                  setProp((props: Header1Props) => (props.ctaText = e.currentTarget.textContent || ""))
                }
                className="focus:outline-none"
                dangerouslySetInnerHTML={{ __html: ctaText }}
              />
            </Button>
          </div>
        </div>
      </div>
      {(selected || hovered) && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
          Header 1
        </div>
      )}
    </header>
  )
}

Header1.craft = {
  displayName: "Header 1",
  props: {
    brandName: "WebBuilder",
    navItems: ["Features", "Templates", "Pricing", "About"],
    signInText: "Sign In",
    ctaText: "Get Started",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
