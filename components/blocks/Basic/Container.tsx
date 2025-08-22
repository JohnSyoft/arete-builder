import React from "react"
import { useNode, Element, useEditor } from "@craftjs/core"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

export interface ContainerProps {
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: "cover" | "contain" | "auto"
  backgroundPosition?: string
  backgroundRepeat?: "repeat" | "no-repeat" | "repeat-x" | "repeat-y"
  gradient?: string
  useGradient?: boolean
  padding?: string
  margin?: string
  minHeight?: string
  maxWidth?: string
  borderRadius?: string
  border?: string
  boxShadow?: string
  className?: string
  children?: React.ReactNode
}

export function Container({
  backgroundColor = "transparent",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  gradient = "from-gray-100 to-gray-200",
  useGradient = false,
  padding = "p-8",
  margin = "",
  minHeight = "auto",
  maxWidth = "full",
  borderRadius = "",
  border = "",
  boxShadow = "",
  className = "",
  children,
}: ContainerProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }))

  const { openPanel } = usePropertiesPanelStore()
  const { actions } = useEditor()

  const handleDelete = () => {
    actions.delete(id)
  }

  const handleEdit = () => {
    console.log("Opening container properties panel...")
    openPanel("container", {
      backgroundColor,
      backgroundImage,
      backgroundSize,
      backgroundPosition,
      backgroundRepeat,
      gradient,
      useGradient,
      padding,
      margin,
      minHeight,
      maxWidth,
      borderRadius,
      border,
      boxShadow,
    }, id, (newProps: Partial<ContainerProps>) => {
      console.log("Updating container props:", newProps)
      // This will be handled by CraftJS setProp
    })
  }

  // Build dynamic styles
  const backgroundStyles: React.CSSProperties = {}
  
  if (useGradient) {
    // Use Tailwind gradient classes
    backgroundStyles.background = undefined
  } else if (backgroundImage) {
    backgroundStyles.backgroundImage = `url(${backgroundImage})`
    backgroundStyles.backgroundSize = backgroundSize
    backgroundStyles.backgroundPosition = backgroundPosition
    backgroundStyles.backgroundRepeat = backgroundRepeat
  } else if (backgroundColor && backgroundColor !== "transparent") {
    backgroundStyles.backgroundColor = backgroundColor
  }

  const containerClasses = [
    "relative",
    padding,
    margin,
    borderRadius,
    border,
    boxShadow,
    useGradient ? `bg-gradient-to-r ${gradient}` : "",
    maxWidth === "full" ? "w-full" : `max-w-${maxWidth}`,
    minHeight !== "auto" ? `min-h-${minHeight}` : "",
    selected ? "ring-2 ring-blue-500" : "",
    hovered ? "ring-1 ring-blue-300" : "",
    className,
  ].filter(Boolean).join(" ")

  return (
    <section
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={containerClasses}
      style={{
        minHeight: minHeight === "auto" ? "auto" : minHeight,
        ...backgroundStyles,
      }}
    >
      {/* Content area - Canvas for dropping components */}
      <Element id={`container-content-${id}`} is="div" canvas className="w-full h-full min-h-[100px]">
        {children}
      </Element>

      {/* Floating toolbar */}
      {(selected || hovered) && (
        <>
          <FloatingToolbar 
            onEdit={handleEdit} 
            onSettings={handleEdit}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={handleDelete}
            elementType="container"
            position={{ x: 0, y: 0 }}
          />
          <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
            Container
          </div>
        </>
      )}
    </section>
  )
}

Container.craft = {
  displayName: "Container",
  props: {
    backgroundColor: "transparent",
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat",
    gradient: "from-gray-100 to-gray-200",
    useGradient: false,
    padding: "p-8",
    margin: "",
    minHeight: "auto",
    maxWidth: "full",
    borderRadius: "",
    border: "",
    boxShadow: "",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false, // The container itself is not a canvas, but contains one
}
