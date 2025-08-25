import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface HeadingProps {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  textAlign?: 'left' | 'center' | 'right' | 'justify'
  fontSize?: string
  fontWeight?: string
  color?: string
  margin?: string
  padding?: string
  fontFamily?: string
  lineHeight?: string
  letterSpacing?: string
}

export function Heading({
  text = "Enter your heading here",
  level = 1,
  textAlign = 'left',
  fontSize = '',
  fontWeight = '',
  color = 'text-gray-900',
  margin = 'my-4',
  padding = '',
  fontFamily = '',
  lineHeight = '',
  letterSpacing = ''
}: HeadingProps) {
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
    openPanel('heading', {
      text,
      level,
      textAlign,
      fontSize,
      fontWeight,
      color,
      margin,
      padding,
      fontFamily,
      lineHeight,
      letterSpacing
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: HeadingProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getDefaultFontSize = (headingLevel: number) => {
    if (fontSize) return fontSize
    switch (headingLevel) {
      case 1: return 'text-4xl md:text-5xl'
      case 2: return 'text-3xl md:text-4xl'
      case 3: return 'text-2xl md:text-3xl'
      case 4: return 'text-xl md:text-2xl'
      case 5: return 'text-lg md:text-xl'
      case 6: return 'text-base md:text-lg'
      default: return 'text-2xl'
    }
  }

  const getDefaultFontWeight = (headingLevel: number) => {
    if (fontWeight) return fontWeight
    switch (headingLevel) {
      case 1: return 'font-bold'
      case 2: return 'font-bold'
      case 3: return 'font-semibold'
      case 4: return 'font-semibold'
      case 5: return 'font-medium'
      case 6: return 'font-medium'
      default: return 'font-semibold'
    }
  }

  const getTextAlignClass = (align: string) => {
    switch (align) {
      case 'left': return 'text-left'
      case 'center': return 'text-center'
      case 'right': return 'text-right'
      case 'justify': return 'text-justify'
      default: return 'text-left'
    }
  }

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleShowProperties()
  }

  const headingClasses = `
    ${getDefaultFontSize(level)}
    ${getDefaultFontWeight(level)}
    ${getTextAlignClass(textAlign)}
    ${color}
    ${margin}
    ${padding}
    ${fontFamily}
    ${lineHeight}
    ${letterSpacing}
    outline-none
  `.trim()

  return (
    <div 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative group ${selected ? "ring-2 ring-blue-500 ring-opacity-50" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <HeadingTag
        className={headingClasses}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          setProp((props: HeadingProps) => {
            props.text = e.target.textContent || ""
          })
        }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="text"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}
      
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          H{level} Heading
        </div>
      )}
    </div>
  )
}

Heading.craft = {
  displayName: "Heading",
  props: {
    text: "Enter your heading here",
    level: 1,
    textAlign: 'left',
    fontSize: '',
    fontWeight: '',
    color: 'text-gray-900',
    margin: 'my-4',
    padding: '',
    fontFamily: '',
    lineHeight: '',
    letterSpacing: ''
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
