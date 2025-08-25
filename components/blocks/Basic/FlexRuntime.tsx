import React from 'react'

interface FlexRuntimeProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse'
  gap?: string
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  alignItems?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
  minHeight?: string
  padding?: string
  margin?: string
  // Advanced flex properties
  flexGrow?: string
  flexShrink?: string
  flexBasis?: string
  order?: string
  // Legacy properties (not used but prevent errors from old data)
  backgroundColor?: string
  borderRadius?: string
  border?: string
  children?: React.ReactNode
}

export function FlexRuntime({
  flexDirection = 'row',
  gap = 'gap-4',
  justifyContent = 'start',
  alignItems = 'center',
  wrap = 'nowrap',
  minHeight = 'min-h-[60px]',
  padding = 'p-4',
  margin = 'my-4',
  flexGrow = '',
  flexShrink = '',
  flexBasis = '',
  order = '',
  // Legacy properties (destructure but ignore)
  backgroundColor,
  borderRadius,
  border,
  children
}: FlexRuntimeProps) {
  
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

  const getAdvancedFlexClasses = () => {
    let classes = []
    if (flexGrow) classes.push(flexGrow)
    if (flexShrink) classes.push(flexShrink)
    if (flexBasis) classes.push(flexBasis)
    if (order) classes.push(order)
    return classes.join(' ')
  }

  return (
    <div 
      className={`
        ${padding} 
        ${margin}
      `}
    >
      <div className={`
        flex 
        ${getFlexDirectionClass(flexDirection)}
        ${gap} 
        ${getJustifyClass(justifyContent)} 
        ${getAlignClass(alignItems)} 
        ${getWrapClass(wrap)}
        ${minHeight}
        ${getAdvancedFlexClasses()}
      `}>
        {children}
      </div>
    </div>
  )
}
