import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface FlexRowProps {
  itemCount?: number
  gap?: string
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  minHeight?: string
  padding?: string
  margin?: string
}

export function FlexRow({
  itemCount = 3,
  gap = 'gap-4',
  justifyContent = 'start',
  alignItems = 'center',
  wrap = 'nowrap',
  minHeight = 'min-h-[60px]',
  padding = 'p-4',
  margin = 'my-4'
}: FlexRowProps) {
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

  const flexRowProps = { itemCount, gap, justifyContent, alignItems, wrap, minHeight, padding, margin }
  
  const updateProps = (newProps: Partial<FlexRowProps>) => {
    setProp((props: FlexRowProps) => {
      Object.assign(props, newProps)
    })
  }

  const handleOpenPanel = () => {
    openPanel('flexrow', flexRowProps, id, updateProps)
  }

  const getJustifyClass = (justify: string) => {
    switch (justify) {
      case 'start': return 'justify-start'
      case 'center': return 'justify-center'
      case 'end': return 'justify-end'
      case 'between': return 'justify-between'
      case 'around': return 'justify-around'
      case 'evenly': return 'justify-evenly'
      default: return 'justify-start'
    }
  }

  const getAlignClass = (align: string) => {
    switch (align) {
      case 'start': return 'items-start'
      case 'center': return 'items-center'
      case 'end': return 'items-end'
      case 'stretch': return 'items-stretch'
      case 'baseline': return 'items-baseline'
      default: return 'items-center'
    }
  }

  const getWrapClass = (wrapValue: string) => {
    switch (wrapValue) {
      case 'wrap': return 'flex-wrap'
      case 'wrap-reverse': return 'flex-wrap-reverse'
      case 'nowrap': return 'flex-nowrap'
      default: return 'flex-nowrap'
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
        relative group 
        ${padding} 
        ${margin} 
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
        cursor-pointer
      `}
      onClick={handleOpenPanel}
    >
      <div className={`
        flex 
        ${gap} 
        ${getJustifyClass(justifyContent)} 
        ${getAlignClass(alignItems)} 
        ${getWrapClass(wrap)}
        ${minHeight}
      `}>
        {Array.from({ length: itemCount }, (_, index) => (
          <Element
            key={index}
            id={`flex-item-${index}`}
            is="div"
            canvas
            className={`
              border-2 border-dashed border-gray-300 rounded-lg p-3
              bg-gray-50/50 flex-1 min-w-[100px]
              flex items-center justify-center
            `}
          >
            <div className="text-center text-gray-500 text-sm">
              Item {index + 1}
              <br />
              <span className="text-xs">Drop here</span>
            </div>
          </Element>
        ))}
      </div>
      
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="container"
            onSettings={handleOpenPanel}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}
      
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-purple-500 text-white text-xs px-2 py-1 rounded z-10">
          Flex Row ({itemCount} items)
        </div>
      )}
    </div>
  )
}

FlexRow.craft = {
  displayName: "FlexRow",
  props: {
    itemCount: 3,
    gap: 'gap-4',
    justifyContent: 'start',
    alignItems: 'center',
    wrap: 'nowrap',
    minHeight: 'min-h-[60px]',
    padding: 'p-4',
    margin: 'my-4',
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
