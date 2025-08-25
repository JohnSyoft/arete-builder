import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface TextProps {
  text?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  textAlign?: string
  tagName?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
  margin?: string
  padding?: string
  fontFamily?: string
  lineHeight?: string
  letterSpacing?: string
  textTransform?: string
  textDecoration?: string
  backgroundColor?: string
  textShadow?: string
  opacity?: string
  borderRadius?: string
  border?: string
}

export function Text({
  text = "Click to edit text",
  fontSize = "text-base",
  fontWeight = "font-normal",
  color = "text-gray-900",
  textAlign = "text-left",
  tagName = "p",
  margin = "my-2",
  padding = "px-0 py-0",
  fontFamily = "",
  lineHeight = "",
  letterSpacing = "",
  textTransform = "",
  textDecoration = "",
  backgroundColor = "",
  textShadow = "",
  opacity = "",
  borderRadius = "",
  border = ""
}: TextProps) {
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
    console.log('Text handleShowProperties called', { 
      text, tagName, fontSize, fontWeight, color, textAlign, margin, padding,
      fontFamily, lineHeight, letterSpacing, textTransform, textDecoration,
      backgroundColor, textShadow, opacity, borderRadius, border, id 
    })
    openPanel('text', {
      text,
      tagName,
      fontSize,
      fontWeight,
      color,
      textAlign,
      margin,
      padding,
      fontFamily,
      lineHeight,
      letterSpacing,
      textTransform,
      textDecoration,
      backgroundColor,
      textShadow,
      opacity,
      borderRadius,
      border
    }, id, (newProps) => {
      console.log('Text props change callback called', newProps)
      Object.keys(newProps).forEach(key => {
        setProp((props: TextProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const Tag = tagName

  return (
    <div 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative group p-1 rounded ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <Tag
        contentEditable
        suppressContentEditableWarning
        onBlur={(e: React.FocusEvent<HTMLElement>) =>
          setProp((props: TextProps) => (props.text = e.currentTarget.textContent || ""))
        }
        className={`
          ${fontSize} 
          ${fontWeight} 
          ${color} 
          ${textAlign} 
          ${margin} 
          ${padding}
          ${fontFamily}
          ${lineHeight}
          ${letterSpacing}
          ${textTransform}
          ${textDecoration}
          ${backgroundColor}
          ${textShadow}
          ${opacity}
          ${borderRadius}
          ${border}
          rounded 
          min-h-[1.5rem]
        `.trim().replace(/\s+/g, ' ')}
        style={{ outline: 'none', cursor: 'text' }}
        dangerouslySetInnerHTML={{ __html: text }}
      />
      
      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="text"
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
      
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Text
        </div>
      )}
    </div>
  )
}

Text.craft = {
  displayName: "Text",
  props: {
    text: "Click to edit text",
    fontSize: "text-base",
    fontWeight: "font-normal",
    color: "text-gray-900",
    textAlign: "text-left",
    tagName: "p",
    margin: "my-2",
    padding: "px-0 py-0",
    fontFamily: "",
    lineHeight: "",
    letterSpacing: "",
    textTransform: "",
    textDecoration: "",
    backgroundColor: "",
    textShadow: "",
    opacity: "",
    borderRadius: "",
    border: ""
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
