import React from "react"

export interface SectionProps {
  children?: React.ReactNode
  // Background properties
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: string
  backgroundPosition?: string
  backgroundRepeat?: string
  backgroundAttachment?: string
  gradient?: string
  // Border properties
  borderStyle?: string
  borderWidth?: string
  borderColor?: string
  borderRadius?: string
  // Spacing properties
  padding?: string
  margin?: string
  // Size properties
  width?: string
  height?: string
  minHeight?: string
  maxHeight?: string
  // Shadow and effects
  boxShadow?: string
  opacity?: string
  // Overflow
  overflow?: string
  // Custom classes
  className?: string
  // Overlay properties
  hasOverlay?: boolean
  overlayColor?: string
  overlayOpacity?: string
  // Content wrapper properties
  hasContentWrapper?: boolean
  contentMaxWidth?: string
  contentPadding?: string
}

export function SectionRuntime({
  children,
  // Background properties
  backgroundColor = "",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  backgroundAttachment = "scroll",
  gradient = "",
  // Border properties
  borderStyle = "solid",
  borderWidth = "0px",
  borderColor = "#e5e7eb",
  borderRadius = "0px",
  // Spacing properties
  padding = "16px",
  margin = "0px",
  // Size properties
  width = "100%",
  height = "auto",
  minHeight = "200px",
  maxHeight = "none",
  // Shadow and effects
  boxShadow = "none",
  opacity = "1",
  // Overflow
  overflow = "visible",
  // Custom classes
  className = "",
  // Overlay properties
  hasOverlay = false,
  overlayColor = "#000000",
  overlayOpacity = "0.2",
  // Content wrapper properties
  hasContentWrapper = false,
  contentMaxWidth = "7xl",
  contentPadding = "px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
}: SectionProps) {
  // Build dynamic styles
  const sectionStyles: React.CSSProperties = {
    width,
    height: height !== "auto" ? height : undefined,
    minHeight,
    maxHeight: maxHeight !== "none" ? maxHeight : undefined,
    padding,
    margin,
    borderStyle,
    borderWidth,
    borderColor,
    borderRadius,
    boxShadow,
    opacity: parseFloat(opacity),
    overflow,
  }

  // Handle background
  if (gradient && gradient !== "") {
    sectionStyles.background = gradient
  } else if (backgroundImage && backgroundImage !== "") {
    sectionStyles.backgroundImage = `url(${backgroundImage})`
    sectionStyles.backgroundSize = backgroundSize
    sectionStyles.backgroundPosition = backgroundPosition
    sectionStyles.backgroundRepeat = backgroundRepeat
    sectionStyles.backgroundAttachment = backgroundAttachment
  } else if (backgroundColor && backgroundColor !== "") {
    sectionStyles.backgroundColor = backgroundColor
  }

  // Get max-width class for content wrapper
  const getMaxWidthClass = (maxWidth: string) => {
    const maxWidthMap: Record<string, string> = {
      "none": "max-w-none",
      "xs": "max-w-xs",
      "sm": "max-w-sm",
      "md": "max-w-md",
      "lg": "max-w-lg",
      "xl": "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      "full": "max-w-full",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    }
    return maxWidthMap[maxWidth] || "max-w-7xl"
  }

  const content = hasContentWrapper ? (
    <div className={`${getMaxWidthClass(contentMaxWidth)} mx-auto ${contentPadding}`}>
      {children}
    </div>
  ) : children

  return (
    <section 
 
      style={sectionStyles} 
      className={className}
    >
      {hasOverlay && (
        <div 
          className="absolute inset-0" 
          style={{
            backgroundColor: overlayColor,
            opacity: parseFloat(overlayOpacity)
          }}
        />
      )}
      {hasContentWrapper ? (
        <div className="relative">
          {content}
        </div>
      ) : (
        content
      )}
    </section>
  )
}
