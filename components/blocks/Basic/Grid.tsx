import { useNode, useEditor, Element } from "@craftjs/core"
import React from "react"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

interface GridProps {
  columns?: number
  rows?: number
  gap?: string
  columnGap?: string
  rowGap?: string
  templateColumns?: string
  templateRows?: string
  autoFlow?: 'row' | 'column' | 'dense' | 'row dense' | 'column dense'
  alignItems?: 'start' | 'center' | 'end' | 'stretch'
  justifyItems?: 'start' | 'center' | 'end' | 'stretch'
  minHeight?: string
  padding?: string
  margin?: string
}

export function Grid({
  columns = 3,
  rows = 2,
  gap = 'gap-4',
  columnGap = '',
  rowGap = '',
  templateColumns = '',
  templateRows = '',
  autoFlow = 'row',
  alignItems = 'stretch',
  justifyItems = 'stretch',
  minHeight = 'min-h-[200px]',
  padding = 'p-4',
  margin = 'my-4'
}: GridProps) {
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
    openPanel('grid', {
      columns,
      rows,
      gap,
      columnGap,
      rowGap,
      templateColumns,
      templateRows,
      autoFlow,
      alignItems,
      justifyItems,
      minHeight,
      padding,
      margin
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: GridProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getColumnsClass = (cols: number) => {
    if (templateColumns) return ''
    switch (cols) {
      case 1: return 'grid-cols-1'
      case 2: return 'grid-cols-2'
      case 3: return 'grid-cols-3'
      case 4: return 'grid-cols-4'
      case 5: return 'grid-cols-5'
      case 6: return 'grid-cols-6'
      case 12: return 'grid-cols-12'
      default: return 'grid-cols-3'
    }
  }

  const getRowsClass = (rowCount: number) => {
    if (templateRows) return ''
    switch (rowCount) {
      case 1: return 'grid-rows-1'
      case 2: return 'grid-rows-2'
      case 3: return 'grid-rows-3'
      case 4: return 'grid-rows-4'
      case 5: return 'grid-rows-5'
      case 6: return 'grid-rows-6'
      default: return 'grid-rows-2'
    }
  }

  const getAlignItemsClass = (align: string) => {
    switch (align) {
      case 'start': return 'items-start'
      case 'center': return 'items-center'
      case 'end': return 'items-end'
      case 'stretch': return 'items-stretch'
      default: return 'items-stretch'
    }
  }

  const getJustifyItemsClass = (justify: string) => {
    switch (justify) {
      case 'start': return 'justify-items-start'
      case 'center': return 'justify-items-center'
      case 'end': return 'justify-items-end'
      case 'stretch': return 'justify-items-stretch'
      default: return 'justify-items-stretch'
    }
  }

  const getAutoFlowClass = (flow: string) => {
    switch (flow) {
      case 'row': return 'grid-flow-row'
      case 'column': return 'grid-flow-col'
      case 'dense': return 'grid-flow-row-dense'
      case 'row dense': return 'grid-flow-row-dense'
      case 'column dense': return 'grid-flow-col-dense'
      default: return 'grid-flow-row'
    }
  }

  const gridClasses = `
    grid
    ${getColumnsClass(columns)}
    ${getRowsClass(rows)}
    ${gap}
    ${columnGap}
    ${rowGap}
    ${getAlignItemsClass(alignItems)}
    ${getJustifyItemsClass(justifyItems)}
    ${getAutoFlowClass(autoFlow)}
    ${minHeight}
  `.trim()

  const gridStyles = {
    ...(templateColumns && { gridTemplateColumns: templateColumns }),
    ...(templateRows && { gridTemplateRows: templateRows })
  }

  const totalCells = columns * rows

  return (
    <div 
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative group ${padding} ${margin} ${selected ? "ring-2 ring-blue-500" : ""} ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div 
        className={gridClasses}
        style={gridStyles}
      >
        {Array.from({ length: totalCells }, (_, index) => (
          <Element
            key={index}
            id={`grid-cell-${index}`}
            is="div"
            canvas
            className="border-2 border-dashed border-gray-300 rounded-lg p-4 min-h-[100px] bg-gray-50/50"
          >
            <div className="text-center text-gray-500 text-sm">
              Cell {index + 1}
              {/* <br /> */}
              <span className="text-xs">Drop components here</span>
            </div>
          </Element>
        ))}
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
          Grid ({columns}×{rows})
        </div>
      )}
    </div>
  )
}

Grid.craft = {
  displayName: "Grid",
  props: {
    columns: 3,
    rows: 2,
    gap: 'gap-4',
    columnGap: '',
    rowGap: '',
    templateColumns: '',
    templateRows: '',
    autoFlow: 'row',
    alignItems: 'stretch',
    justifyItems: 'stretch',
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
