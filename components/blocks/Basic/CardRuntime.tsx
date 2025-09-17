import React from "react"

interface CardRuntimeProps {
  variant?: 'outlined' | 'elevated' | 'flat'
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  borderRadius?: string
  border?: boolean
  borderColor?: string
  backgroundColor?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  hoverable?: boolean
  clickable?: boolean
  overflow?: "visible" | "hidden" | "auto" | "scroll"
  hoverEffect?: boolean
  children?: React.ReactNode
  // Navigation props
  onDoubleClick?: () => void
  collectionId?: string
  projectId?: string
  collectionName?: string
  componentSlug?: string
}

export function CardRuntime({
  variant = 'outlined',
  shadow = 'md',
  borderRadius = '8px',
  border = true,
  borderColor = '#e5e7eb',
  backgroundColor = '#ffffff',
  padding = '16px',
  margin = '8px',
  width = 'auto',
  height = 'auto',
  hoverable = false,
  clickable = false,
  overflow = 'hidden',
  hoverEffect = false,
  children,
  onDoubleClick,
  collectionId,
  projectId,
  collectionName,
  componentSlug
}: CardRuntimeProps) {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "outlined":
        return "border-2";
      case "elevated":
        return "shadow-lg";
      case "flat":
        return "shadow-none border-0";
      default:
        return "border";
    }
  };

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
    <div 
      className={`${margin.startsWith('m-') ? margin : ''} ${width.startsWith('w-') ? width : ''} ${height.startsWith('h-') ? height : ''}`}
      style={{
        margin: margin.startsWith('m-') ? undefined : margin,
        width: width.startsWith('w-') ? undefined : width,
        height: height.startsWith('h-') ? undefined : height,
      }}
    >
      <div 
        className={`
          ${getVariantStyles(variant)}
          ${getShadowClass(shadow)}
          ${borderRadius.startsWith('rounded-') ? borderRadius : ''}
          ${backgroundColor.startsWith('bg-') ? backgroundColor : ''} 
          ${border && borderColor.startsWith('border-') ? borderColor : ''} 
          ${padding.startsWith('p-') ? padding : ''}
          ${hoverEffect ? 'transition-all duration-200 hover:shadow-lg hover:-translate-y-1' : ''}
        `}
        style={{
          backgroundColor: backgroundColor.startsWith('bg-') ? undefined : backgroundColor,
          borderColor: variant !== "flat" ? (borderColor.startsWith('border-') ? undefined : borderColor) : undefined,
          borderRadius: borderRadius.startsWith('rounded-') ? undefined : borderRadius,
          padding: padding.startsWith('p-') ? undefined : padding,
          width: "100%",
          height: "100%",
          overflow,
        }}
        onDoubleClick={onDoubleClick}
      >
        {children}
      </div>
    </div>
  )
}
