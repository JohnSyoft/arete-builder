import React from "react"

interface ColumnsProps {
  children?: React.ReactNode
  columnCount?: number
  gap?: string
  alignment?: 'start' | 'center' | 'end' | 'stretch'
  minHeight?: string
  padding?: string
  margin?: string
}

export function ColumnsRuntime({
  children,
  columnCount = 2,
  gap = 'gap-4',
  alignment = 'stretch',
  minHeight = 'min-h-[200px]',
  padding = 'p-4',
  margin = 'my-4'
}: ColumnsProps) {
  const gridCols = `grid-cols-${columnCount}`
  const alignmentClass = `items-${alignment}`
  
  return (
    <div className={`grid ${gridCols} ${gap} ${alignmentClass} ${minHeight} ${padding} ${margin}`}>
      {children}
    </div>
  )
}
