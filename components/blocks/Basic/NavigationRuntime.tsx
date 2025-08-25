import React, { useState } from "react"
import { Menu, X } from "lucide-react"

interface NavItem {
  label: string
  href: string
  isButton?: boolean
}

interface NavigationRuntimeProps {
  brand?: string
  brandHref?: string
  items?: NavItem[]
  layout?: 'horizontal' | 'vertical'
  position?: 'static' | 'fixed' | 'sticky'
  backgroundColor?: string
  textColor?: string
  hoverColor?: string
  padding?: string
  margin?: string
  borderBottom?: boolean
  shadow?: boolean
  mobileBreakpoint?: 'sm' | 'md' | 'lg'
  brandSize?: string
  itemSize?: string
}

export function NavigationRuntime({
  brand = "Brand",
  brandHref = "#",
  items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Get Started", href: "#cta", isButton: true }
  ],
  layout = 'horizontal',
  position = 'static',
  backgroundColor = 'bg-white',
  textColor = 'text-gray-900',
  hoverColor = 'hover:text-blue-600',
  padding = 'px-4 py-3',
  margin = '',
  borderBottom = true,
  shadow = true,
  mobileBreakpoint = 'md',
  brandSize = 'text-xl font-bold',
  itemSize = 'text-base'
}: NavigationRuntimeProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const getPositionClass = (pos: string) => {
    switch (pos) {
      case 'fixed': return 'fixed top-0 left-0 right-0 z-50'
      case 'sticky': return 'sticky top-0 z-50'
      default: return 'relative'
    }
  }

  const getMobileBreakpointClass = (bp: string) => {
    switch (bp) {
      case 'sm': return 'sm:flex'
      case 'md': return 'md:flex'
      case 'lg': return 'lg:flex'
      default: return 'md:flex'
    }
  }

  const containerClasses = `
    ${getPositionClass(position)}
    ${backgroundColor}
    ${textColor}
    ${padding}
    ${margin}
    ${borderBottom ? 'border-b border-gray-200' : ''}
    ${shadow ? 'shadow-sm' : ''}
    w-full
  `.trim()

  return (
    <nav className={containerClasses}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand */}
        <div className="flex-shrink-0">
          <a href={brandHref} className={`${brandSize} ${textColor} ${hoverColor} transition-colors`}>
            {brand}
          </a>
        </div>

        {/* Desktop Navigation */}
        {layout === 'horizontal' && (
          <div className={`hidden ${getMobileBreakpointClass(mobileBreakpoint)} items-center space-x-8`}>
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`
                  ${itemSize}
                  ${item.isButton 
                    ? 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors' 
                    : `${textColor} ${hoverColor} transition-colors`
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}

        {/* Mobile menu button */}
        {layout === 'horizontal' && (
          <div className={`${getMobileBreakpointClass(mobileBreakpoint).replace('flex', 'hidden')} flex`}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${textColor} ${hoverColor} p-2`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {layout === 'horizontal' && mobileMenuOpen && (
        <div className={`${getMobileBreakpointClass(mobileBreakpoint).replace('flex', 'hidden')} block mt-4 pb-4`}>
          <div className="flex flex-col space-y-4">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`
                  ${itemSize}
                  ${item.isButton 
                    ? 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center' 
                    : `${textColor} ${hoverColor} transition-colors`
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Vertical Layout */}
      {layout === 'vertical' && (
        <div className="flex flex-col space-y-4 mt-4">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`
                ${itemSize}
                ${item.isButton 
                  ? 'bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center' 
                  : `${textColor} ${hoverColor} transition-colors`
                }
              `}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
