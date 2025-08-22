import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface ColumnsProps {
  columnCount?: number
  gap?: string
  alignment?: 'start' | 'center' | 'end' | 'stretch'
  minHeight?: string
  padding?: string
  margin?: string
}

export function Columns({
  columnCount = 2,
  gap = 'gap-4',
  alignment = 'stretch',
  minHeight = 'min-h-[200px]',
  padding = 'p-4',
  margin = 'my-4'
}: ColumnsProps) {
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
    console.log('Columns handleShowProperties called', { columnCount, gap, alignment, minHeight, padding, margin, id })
    openPanel('columns', {
      columnCount,
      gap,
      alignment,
      minHeight,
      padding,
      margin
    }, id, (newProps) => {
      console.log('Columns props change callback called', newProps)
      Object.keys(newProps).forEach(key => {
        setProp((props: ColumnsProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getGridColsClass = (count: number) => {
    switch (count) {
      case 1: return 'grid-cols-1'
      case 2: return 'grid-cols-2'
      case 3: return 'grid-cols-3'
      case 4: return 'grid-cols-4'
      case 5: return 'grid-cols-5'
      case 6: return 'grid-cols-6'
      default: return 'grid-cols-2'
    }
  }

  const getItemsClass = (align: string) => {
    switch (align) {
      case 'start': return 'items-start'
      case 'center': return 'items-center'
      case 'end': return 'items-end'
      case 'stretch': return 'items-stretch'
      default: return 'items-stretch'
    }
  }

  return (
    <div 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative group ${padding} ${margin} ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div className={`grid ${getGridColsClass(columnCount)} ${gap} ${getItemsClass(alignment)} ${minHeight}`}>
        {Array.from({ length: columnCount }, (_, index) => (
          <Element
            key={index}
            id={`column-${index}`}
            is="div"
            canvas
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[150px] bg-gray-50/50"
          >
            <div className="text-center text-gray-500 text-sm">
              Column {index + 1}
              <br />
              <span className="text-xs">Drop components here</span>
            </div>
          </Element>
        ))}
      </div>
      
      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="columns"
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
          Columns ({columnCount})
        </div>
      )}
    </div>
  )
}

Columns.craft = {
  displayName: "Columns",
  props: {
    columnCount: 2,
    gap: 'gap-4',
    alignment: 'stretch',
    minHeight: 'min-h-[200px]',
    padding: 'p-4',
    margin: 'my-4',
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
}
