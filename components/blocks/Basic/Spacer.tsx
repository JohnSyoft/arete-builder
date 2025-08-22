import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface SpacerProps {
  height?: string
  backgroundColor?: string
  margin?: string
}

export function Spacer({
  height = "h-8",
  backgroundColor = "bg-transparent",
  margin = "my-0"
}: SpacerProps) {
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
    openPanel('spacer', {
      height,
      backgroundColor,
      margin
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: SpacerProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const handleHeightChange = () => {
    const heights = [
      { label: "Extra Small (4px)", value: "h-1" },
      { label: "Small (8px)", value: "h-2" },
      { label: "Medium (16px)", value: "h-4" },
      { label: "Large (32px)", value: "h-8" },
      { label: "Extra Large (64px)", value: "h-16" },
      { label: "XXL (128px)", value: "h-32" },
    ]
    
    const selection = prompt(
      `Select height:\n${heights.map((h, i) => `${i + 1}. ${h.label}`).join('\n')}\n\nEnter number (1-${heights.length}):`,
      "4"
    )
    
    const index = parseInt(selection || "4") - 1
    if (index >= 0 && index < heights.length) {
      setProp((props: SpacerProps) => (props.height = heights[index].value))
    }
  }

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`
        relative 
        w-full 
        ${height} 
        ${backgroundColor} 
        ${margin}
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
        cursor-pointer
        transition-all
        hover:bg-gray-100
      `}
      onClick={handleHeightChange}
    >
      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="container"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}
      
      {(selected || hovered) && (
        <>
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
            Spacer
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-xs text-gray-400 bg-white px-2 py-1 rounded shadow">
              Click to change height
            </div>
          </div>
        </>
      )}
    </div>
  )
}

Spacer.craft = {
  displayName: "Spacer",
  props: {
    height: "h-8",
    backgroundColor: "bg-transparent",
    margin: "my-0",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
