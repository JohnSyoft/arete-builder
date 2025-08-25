import React from "react"

interface FlexRowRuntimeProps {
  itemCount?: number
  gap?: string
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  minHeight?: string
  padding?: string
  margin?: string
  children?: React.ReactNode
}

export function FlexRowRuntime({
  gap = 'gap-4',
  justifyContent = 'start',
  alignItems = 'center',
  wrap = 'nowrap',
  minHeight = 'min-h-[60px]',
  padding = 'p-4',
  margin = 'my-4',
  children
}: FlexRowRuntimeProps) {
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
    <div className={`${padding} ${margin}`}>
      <div className={`
        flex 
        ${gap} 
        ${getJustifyClass(justifyContent)} 
        ${getAlignClass(alignItems)} 
        ${getWrapClass(wrap)}
        ${minHeight}
      `}>
        {children}
      </div>
    </div>
  )
}
