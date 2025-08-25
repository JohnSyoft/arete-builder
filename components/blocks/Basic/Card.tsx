import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface CardProps {
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  border?: boolean
  borderColor?: string
  backgroundColor?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  hoverEffect?: boolean
  children?: React.ReactNode
}

export function Card({
  shadow = 'md',
  rounded = 'lg',
  border = true,
  borderColor = 'border-gray-200',
  backgroundColor = 'bg-white',
  padding = 'p-6',
  margin = 'my-4',
  width = 'w-full',
  height = 'h-auto',
  hoverEffect = false,
  children
}: CardProps) {
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
    openPanel('card', {
      shadow,
      rounded,
      border,
      borderColor,
      backgroundColor,
      padding,
      margin,
      width,
      height,
      hoverEffect
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: CardProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getShadowClass = (shadowSize: string) => {
    switch (shadowSize) {
      case 'none': return 'shadow-none'
      case 'sm': return 'shadow-sm'
      case 'md': return 'shadow-md'
      case 'lg': return 'shadow-lg'
      case 'xl': return 'shadow-xl'
      case '2xl': return 'shadow-2xl'
      default: return 'shadow-md'
    }
  }

  const getRoundedClass = (roundedSize: string) => {
    switch (roundedSize) {
      case 'none': return 'rounded-none'
      case 'sm': return 'rounded-sm'
      case 'md': return 'rounded-md'
      case 'lg': return 'rounded-lg'
      case 'xl': return 'rounded-xl'
      case '2xl': return 'rounded-2xl'
      case 'full': return 'rounded-full'
      default: return 'rounded-lg'
    }
  }

  return (
    <div 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative group ${margin} ${width} ${height} ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div 
        className={`
          ${backgroundColor} 
          ${padding} 
          ${getShadowClass(shadow)} 
          ${getRoundedClass(rounded)}
          ${border ? `border ${borderColor}` : ''}
          ${hoverEffect ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1' : ''}
          ${!children ? 'min-h-[200px] border-2 border-dashed border-gray-300 bg-gray-50/50' : ''}
        `}
      >
        {children || (
          <div className="flex items-center justify-center h-full text-center text-gray-500">
            <div>
              <div className="text-lg font-medium">Card Component</div>
              <div className="text-sm mt-1">Add content to this card</div>
            </div>
          </div>
        )}
      </div>
      
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
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Card
        </div>
      )}
    </div>
  )
}

Card.craft = {
  displayName: "Card",
  props: {
    shadow: 'md',
    rounded: 'lg',
    border: true,
    borderColor: 'border-gray-200',
    backgroundColor: 'bg-white',
    padding: 'p-6',
    margin: 'my-4',
    width: 'w-full',
    height: 'h-auto',
    hoverEffect: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
}
