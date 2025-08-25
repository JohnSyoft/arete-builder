import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface NavigationProps {
  orientation?: 'horizontal' | 'vertical'
  alignment?: 'start' | 'center' | 'end' | 'between' | 'around'
  gap?: string
  wrap?: boolean
  variant?: 'default' | 'pills' | 'tabs' | 'breadcrumb' | 'sidebar'
  size?: 'small' | 'medium' | 'large'
  backgroundColor?: string
  borderColor?: string
  borderRadius?: string
  linkColor?: string
  activeLinkColor?: string
  hoverLinkColor?: string
  linkWeight?: 'normal' | 'medium' | 'semibold' | 'bold'
  underline?: 'none' | 'hover' | 'always'
  padding?: string
  linkPadding?: string
}

export function Navigation({
  orientation = 'horizontal',
  alignment = 'start',
  gap = '16px',
  wrap = false,
  variant = 'default',
  size = 'medium',
  backgroundColor = '#ffffff',
  borderColor = '#e5e7eb',
  borderRadius = '8px',
  linkColor = '#3b82f6',
  activeLinkColor = '#1d4ed8',
  hoverLinkColor = '#2563eb',
  linkWeight = 'medium',
  underline = 'hover',
  padding = '12px',
  linkPadding = '8px'
}: NavigationProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id
  }))

  const { actions } = useEditor()
  const { openPanel } = usePropertiesPanelStore()

  const handleShowProperties = () => {
    openPanel('navigation', {
      orientation,
      alignment,
      gap,
      wrap,
      variant,
      size,
      backgroundColor,
      borderColor,
      borderRadius,
      linkColor,
      activeLinkColor,
      hoverLinkColor,
      linkWeight,
      underline,
      padding,
      linkPadding
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: NavigationProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getFlexDirection = () => {
    return orientation === 'vertical' ? 'column' : 'row'
  }

  const getJustifyContent = () => {
    switch (alignment) {
      case 'center': return 'center'
      case 'end': return 'flex-end'
      case 'between': return 'space-between'
      case 'around': return 'space-around'
      default: return 'flex-start'
    }
  }

  const getFontWeight = () => {
    switch (linkWeight) {
      case 'normal': return '400'
      case 'medium': return '500'
      case 'semibold': return '600'
      case 'bold': return '700'
      default: return '500'
    }
  }

  const getTextDecoration = () => {
    switch (underline) {
      case 'always': return 'underline'
      case 'none': return 'none'
      default: return 'none' // hover will be handled in CSS
    }
  }

  const navStyles = {
    backgroundColor,
    borderColor,
    borderRadius,
    padding,
    border: '1px solid',
    display: 'flex',
    flexDirection: getFlexDirection(),
    justifyContent: getJustifyContent(),
    alignItems: orientation === 'horizontal' ? 'center' : 'flex-start',
    gap,
    flexWrap: wrap ? 'wrap' : 'nowrap'
  } as React.CSSProperties

  const linkStyles = {
    color: linkColor,
    fontWeight: getFontWeight(),
    textDecoration: getTextDecoration(),
    padding: linkPadding,
    borderRadius: variant === 'pills' ? '20px' : variant === 'tabs' ? '0' : '4px',
    backgroundColor: variant === 'pills' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
    borderBottom: variant === 'tabs' ? '2px solid transparent' : 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  }

  // Sample navigation items for demo
  const navItems = ['Home', 'About', 'Services', 'Contact']

  return (
    <div 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
      onClick={handleShowProperties}
    >
      <nav style={navStyles}>
        {navItems.map((item, index) => (
          <a
            key={index}
            href="#"
            style={{
              ...linkStyles,
              ...(index === 0 && { // First item is "active"
                color: activeLinkColor,
                backgroundColor: variant === 'pills' ? 'rgba(29, 78, 216, 0.2)' : undefined,
                borderBottomColor: variant === 'tabs' ? activeLinkColor : undefined
              })
            }}
            onMouseEnter={(e) => {
              if (index !== 0) { // Don't change active item
                e.currentTarget.style.color = hoverLinkColor
                if (underline === 'hover') {
                  e.currentTarget.style.textDecoration = 'underline'
                }
              }
            }}
            onMouseLeave={(e) => {
              if (index !== 0) {
                e.currentTarget.style.color = linkColor
                if (underline === 'hover') {
                  e.currentTarget.style.textDecoration = 'none'
                }
              }
            }}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Floating toolbar */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="navigation"
            onEdit={() => {}}
            onGenerateAI={() => {}}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {/* Label */}
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Navigation ({variant})
        </div>
      )}
    </div>
  )
}

Navigation.craft = {
  displayName: "Navigation",
  props: {
    orientation: 'horizontal',
    alignment: 'start',
    gap: '16px',
    wrap: false,
    variant: 'default',
    size: 'medium',
    backgroundColor: '#ffffff',
    borderColor: '#e5e7eb',
    borderRadius: '8px',
    linkColor: '#3b82f6',
    activeLinkColor: '#1d4ed8',
    hoverLinkColor: '#2563eb',
    linkWeight: 'medium',
    underline: 'hover',
    padding: '12px',
    linkPadding: '8px'
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
