import React from "react"

interface GridRuntimeProps {
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
  children?: React.ReactNode
}

export function GridRuntime({
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
  margin = 'my-4',
  children
}: GridRuntimeProps) {
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
    ${padding}
    ${margin}
  `.trim()

  const gridStyles = {
    ...(templateColumns && { gridTemplateColumns: templateColumns }),
    ...(templateRows && { gridTemplateRows: templateRows })
  }

  return (
    <div 
      className={gridClasses}
      style={gridStyles}
    >
      {children}
    </div>
  )
}
