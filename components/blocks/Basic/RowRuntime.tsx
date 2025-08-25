import React from "react"

interface RowRuntimeProps {
  rowCount?: number
  gap?: string
  alignment?: 'start' | 'center' | 'end' | 'stretch'
  minHeight?: string
  padding?: string
  margin?: string
  children?: React.ReactNode
}

export function RowRuntime({
  rowCount = 2,
  gap = 'gap-4',
  alignment = 'stretch',
  minHeight = 'min-h-[100px]',
  padding = 'p-4',
  margin = 'my-4',
  children
}: RowRuntimeProps) {
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
    <div className={`${padding} ${margin}`}>
      <div className={`flex flex-col ${gap} ${getItemsClass(alignment)}`}>
        {children}
      </div>
    </div>
  )
}
