import React from "react"

interface DividerProps {
  orientation?: 'horizontal' | 'vertical'
  thickness?: string
  color?: string
  margin?: string
  style?: 'solid' | 'dashed' | 'dotted'
}

export function DividerRuntime({
  orientation = 'horizontal',
  thickness = '1px',
  color = '#e5e7eb',
  margin = 'my-4',
  style = 'solid'
}: DividerProps) {
  const dividerStyle: React.CSSProperties = {
    backgroundColor: orientation === 'horizontal' ? color : 'transparent',
    borderLeft: orientation === 'vertical' ? `${thickness} ${style} ${color}` : 'none',
    height: orientation === 'horizontal' ? thickness : '100%',
    width: orientation === 'vertical' ? thickness : '100%',
    minHeight: orientation === 'vertical' ? '50px' : undefined
  }

  return (
    <div className={margin}>
      <div style={dividerStyle} />
    </div>
  )
}
