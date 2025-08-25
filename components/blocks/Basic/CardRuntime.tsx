import React from "react"

interface CardRuntimeProps {
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  border?: boolean
  borderColor?: string
  backgroundColor?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  hoverEffect?: boolean
  children?: React.ReactNode
}

export function CardRuntime({
  shadow = 'md',
  rounded = 'lg',
  border = true,
  borderColor = 'border-gray-200',
  backgroundColor = 'bg-white',
  padding = 'p-6',
  margin = 'my-4',
  width = 'w-full',
  height = 'h-auto',
  hoverEffect = false,
  children
}: CardRuntimeProps) {
  const getShadowClass = (shadowSize: string) => {
    switch (shadowSize) {
      case 'none': return 'shadow-none'
      case 'sm': return 'shadow-sm'
      case 'md': return 'shadow-md'
      case 'lg': return 'shadow-lg'
      case 'xl': return 'shadow-xl'
      case '2xl': return 'shadow-2xl'
      default: return 'shadow-md'
    }
  }

  const getRoundedClass = (roundedSize: string) => {
    switch (roundedSize) {
      case 'none': return 'rounded-none'
      case 'sm': return 'rounded-sm'
      case 'md': return 'rounded-md'
      case 'lg': return 'rounded-lg'
      case 'xl': return 'rounded-xl'
      case '2xl': return 'rounded-2xl'
      case 'full': return 'rounded-full'
      default: return 'rounded-lg'
    }
  }

  return (
    <div className={`${margin} ${width} ${height}`}>
      <div 
        className={`
          ${backgroundColor} 
          ${padding} 
          ${getShadowClass(shadow)} 
          ${getRoundedClass(rounded)}
          ${border ? `border ${borderColor}` : ''}
          ${hoverEffect ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1' : ''}
        `}
      >
        {children}
      </div>
    </div>
  )
}
