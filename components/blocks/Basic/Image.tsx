import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface ImageProps {
  src?: string
  alt?: string
  width?: string
  height?: string
  objectFit?: string
  borderRadius?: string
  margin?: string
  padding?: string
}

export function Image({
  src = "/placeholder.svg?height=200&width=300",
  alt = "Image",
  width = "300px",
  height = "200px",
  objectFit = "object-cover",
  borderRadius = "rounded-lg",
  margin = "my-2",
  padding = "p-0"
}: ImageProps) {
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
    openPanel('image', {
      src,
      alt,
      width,
      height,
      objectFit,
      borderRadius,
      margin,
      padding
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: ImageProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const handleImageClick = () => {
    handleShowProperties()
  }

  const handleAltClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleShowProperties()
  }

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      style={{
        width: width,
      }}
      className={`
        relative 
        ${margin} 
        ${padding}
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
      `}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: width,
          height: height,
        }}
        className={`
          ${objectFit} 
          ${borderRadius}
          cursor-pointer
          transition-opacity
          hover:opacity-80
        `}
        onClick={handleImageClick}
        onError={(e) => {
          const target = e.target as HTMLImageElement
          target.src = "/placeholder.svg?height=200&width=300&text=Image+Not+Found"
        }}
      />
      
      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="image"
            onEdit={() => handleImageClick()}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}
      
      {/* Alt text edit button */}
      {(selected || hovered) && (
        <>
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
            Image
          </div>
          <button
            onClick={handleAltClick}
            className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-70"
          >
            Edit Alt
          </button>
        </>
      )}
    </div>
  )
}

Image.craft = {
  displayName: "Image",
  props: {
    src: "/placeholder.svg?height=200&width=300",
    alt: "Image",
    width: "300px",
    height: "200px",
    objectFit: "object-cover",
    borderRadius: "rounded-lg",
    margin: "my-2",
    padding: "p-0",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
