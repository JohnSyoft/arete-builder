import { Button } from "@/components/ui/button"
import { useNode } from "@craftjs/core"
import React from "react"

interface Header2Props {
  brandName?: string
  navItems?: Array<{ label: string; href: string }>
  loginText?: string
  ctaText?: string
  backgroundColor?: string
}

export function Header2({
  brandName = "WebBuilder",
  navItems = [
    { label: "Product", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Resources", href: "#" },
    { label: "Pricing", href: "#" }
  ],
  loginText = "Login",
  ctaText = "Start Free",
  backgroundColor = "bg-gray-900"
}: Header2Props) {
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
      className={`${backgroundColor} text-white relative ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">W</span>
            </div>
            <div 
              contentEditable
              suppressContentEditableWarning
              onBlur={(e: React.FocusEvent<HTMLDivElement>) =>
                setProp((props: Header2Props) => (props.brandName = e.currentTarget.textContent || ""))
              }
              className="text-xl font-bold focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded p-1"
              dangerouslySetInnerHTML={{ __html: brandName }}
            />
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:bg-gray-800">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                  setProp((props: Header2Props) => (props.loginText = e.currentTarget.textContent || ""))
                }
                className="focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                dangerouslySetInnerHTML={{ __html: loginText }}
              />
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <span
                contentEditable
                suppressContentEditableWarning
                onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
                  setProp((props: Header2Props) => (props.ctaText = e.currentTarget.textContent || ""))
                }
                className="focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-blue-600 rounded"
                dangerouslySetInnerHTML={{ __html: ctaText }}
              />
            </Button>
          </div>
        </div>
      </div>
      {(selected || hovered) && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
          Header 2
        </div>
      )}
    </header>
  )
}

Header2.craft = {
  displayName: "Header 2",
  props: {
    brandName: "WebBuilder",
    navItems: [
      { label: "Product", href: "#" },
      { label: "Solutions", href: "#" },
      { label: "Resources", href: "#" },
      { label: "Pricing", href: "#" }
    ],
    loginText: "Login",
    ctaText: "Start Free",
    backgroundColor: "bg-gray-900",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
