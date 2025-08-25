import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface FlexProps {
  itemCount?: number
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: string
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  minHeight?: string
  padding?: string
  margin?: string
  backgroundColor?: string
  borderRadius?: string
  border?: string
}

export function Flex({
  itemCount = 3,
  flexDirection = 'row',
  gap = 'gap-4',
  justifyContent = 'start',
  alignItems = 'center',
  wrap = 'nowrap',
  minHeight = 'min-h-[60px]',
  padding = 'p-4',
  margin = 'my-4',
  backgroundColor = 'transparent',
  borderRadius = '0px',
  border = 'none'
}: FlexProps) {
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

  const flexProps = { 
    itemCount, 
    flexDirection, 
    gap, 
    justifyContent, 
    alignItems, 
    wrap, 
    minHeight, 
    padding, 
    margin,
    backgroundColor,
    borderRadius,
    border
  }
  
  const updateProps = (newProps: Partial<FlexProps>) => {
    setProp((props: FlexProps) => {
      Object.assign(props, newProps)
    })
  }

  const handleOpenPanel = () => {
    openPanel('flex', flexProps, id, updateProps)
  }

  const getFlexDirectionClass = (direction: string) => {
    switch (direction) {
      case 'row': return 'flex-row'
      case 'column': return 'flex-col'
      case 'row-reverse': return 'flex-row-reverse'
      case 'column-reverse': return 'flex-col-reverse'
      default: return 'flex-row'
    }
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

  const containerStyles = {
    backgroundColor: backgroundColor !== 'transparent' ? backgroundColor : undefined,
    borderRadius: borderRadius !== '0px' ? borderRadius : undefined,
    border: border !== 'none' ? border : undefined,
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
      style={containerStyles}
      onClick={handleOpenPanel}
    >
      <div className={`
        flex 
        ${getFlexDirectionClass(flexDirection)}
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
              bg-gray-50/50 min-w-[100px]
              flex items-center justify-center
              ${flexDirection.includes('row') ? 'flex-1' : 'w-full'}
              ${flexDirection.includes('col') ? 'min-h-[60px]' : ''}
            `}
          >
            <div className="text-center text-gray-500 text-sm">
              {flexDirection.includes('row') ? `Item ${index + 1}` : `Row ${index + 1}`}
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
          Flex {flexDirection} ({itemCount} items)
        </div>
      )}
    </div>
  )
}

Flex.craft = {
  displayName: "Flex",
  props: {
    itemCount: 3,
    flexDirection: 'row',
    gap: 'gap-4',
    justifyContent: 'start',
    alignItems: 'center',
    wrap: 'nowrap',
    minHeight: 'min-h-[60px]',
    padding: 'p-4',
    margin: 'my-4',
    backgroundColor: 'transparent',
    borderRadius: '0px',
    border: 'none',
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
