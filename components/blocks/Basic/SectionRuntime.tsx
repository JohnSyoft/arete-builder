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
  padding = "p-4",
  margin = "m-0",
  // Size properties
  width = "100%",
  height = "auto",
  minHeight = "min-h-[200px]",
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
  // Convert Tailwind classes to CSS values for inline styles
  const getPaddingValue = (paddingClass: string) => {
    const paddingMap: Record<string, string> = {
      "p-0": "0px",
      "p-1": "4px",
      "p-2": "8px", 
      "p-3": "12px",
      "p-4": "16px",
      "p-5": "20px",
      "p-6": "24px",
      "p-8": "32px",
      "p-10": "40px",
      "p-12": "48px",
      "p-16": "64px",
      "p-20": "80px",
      "p-24": "96px",
    };
    return paddingMap[paddingClass] || paddingClass;
  };

  const getMarginValue = (marginClass: string) => {
    const marginMap: Record<string, string> = {
      "m-0": "0px",
      "m-1": "4px",
      "m-2": "8px",
      "m-3": "12px", 
      "m-4": "16px",
      "m-5": "20px",
      "m-6": "24px",
      "m-8": "32px",
      "m-10": "40px",
      "m-12": "48px",
      "m-16": "64px",
      "m-20": "80px",
      "m-24": "96px",
    };
    return marginMap[marginClass] || marginClass;
  };

  const getMinHeightValue = (minHeightClass: string) => {
    if (minHeightClass.startsWith("min-h-[")) {
      return minHeightClass.replace("min-h-[", "").replace("]", "");
    }
    const minHeightMap: Record<string, string> = {
      "min-h-0": "0px",
      "min-h-full": "100%",
      "min-h-screen": "100vh",
      "min-h-min": "min-content",
      "min-h-max": "max-content",
      "min-h-fit": "fit-content",
    };
    return minHeightMap[minHeightClass] || minHeightClass;
  };

  // Build dynamic styles
  const sectionStyles: React.CSSProperties = {
    width,
    height: height !== "auto" ? height : undefined,
    maxHeight: maxHeight !== "none" ? maxHeight : undefined,
    padding: getPaddingValue(padding),
    margin: getMarginValue(margin),
    minHeight: getMinHeightValue(minHeight),
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

  return (
    <section 
      style={sectionStyles} 
      className={`relative ${className}`}
    >
      {hasOverlay && (
        <div 
          className="absolute inset-0 z-10" 
          style={{
            backgroundColor: overlayColor,
            opacity: parseFloat(overlayOpacity)
          }}
        />
      )}
      {hasContentWrapper ? (
        <div className="relative z-20">
          <div className={`max-w-${contentMaxWidth} mx-auto ${contentPadding}`}>
            {children}
          </div>
        </div>
      ) : (
        <div className="relative z-20">
          {children}
        </div>
      )}
    </section>
  )
}
