import React from "react"

interface GridRuntimeProps {
  columns?: number
  autoRows?: string
  autoFit?: boolean
  minColumnWidth?: string
  gap?: string
  rowGap?: string
  columnGap?: string
  padding?: string
  justifyItems?: "stretch" | "start" | "center" | "end"
  alignItems?: "stretch" | "start" | "center" | "end"
  width?: string
  height?: string
  // Background styling
  backgroundColor?: string
  backgroundImage?: string
  backgroundSize?: "cover" | "contain" | "auto" | "100%" | "100% 100%"
  backgroundPosition?: "center" | "top" | "bottom" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right"
  backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y"
  // Border styling
  border?: string
  borderWidth?: string
  borderColor?: string
  borderStyle?: "solid" | "dashed" | "dotted" | "double" | "none"
  borderRadius?: string
  // Shadow styling
  boxShadow?: string
  // Gradient support
  gradient?: string
  gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl"
  gradientColors?: string
  // Opacity
  opacity?: number
  children?: React.ReactNode
}

export function GridRuntime({
  columns = 3,
  autoRows = "minmax(200px, auto)",
  autoFit = false,
  minColumnWidth = "200px",
  gap = "16px",
  rowGap = "",
  columnGap = "",
  padding = "0px",
  justifyItems = "stretch",
  alignItems = "stretch",
  width = "100%",
  height = "auto",
  // Background styling defaults
  backgroundColor = "",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  // Border styling defaults
  border = "",
  borderWidth = "",
  borderColor = "",
  borderStyle = "solid",
  borderRadius = "",
  // Shadow styling defaults
  boxShadow = "",
  // Gradient defaults
  gradient = "",
  gradientDirection = "to-r",
  gradientColors = "",
  // Opacity default
  opacity = 1,
  children
}: GridRuntimeProps) {
  const getGridTemplateColumns = () => {
    if (autoFit) {
      return `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
    }
    return `repeat(${columns}, 1fr)`;
  };

  // Convert Tailwind gap classes to CSS values
  const getGapValue = (gapClass: string) => {
    const gapMap: Record<string, string> = {
      "gap-0": "0px",
      "gap-1": "4px",
      "gap-2": "8px",
      "gap-3": "12px",
      "gap-4": "16px",
      "gap-5": "20px",
      "gap-6": "24px",
      "gap-8": "32px",
      "gap-10": "40px",
      "gap-12": "48px",
      "gap-16": "64px",
      "gap-20": "80px",
      "gap-24": "96px",
    };
    return gapMap[gapClass] || gapClass;
  };

  // Helper function to get background styles
  const getBackgroundStyles = () => {
    const styles: React.CSSProperties = {};
    
    // Handle gradient background
    if (gradient && gradientColors) {
      const gradientMap: Record<string, string> = {
        "to-r": "to right",
        "to-l": "to left", 
        "to-t": "to top",
        "to-b": "to bottom",
        "to-tr": "to top right",
        "to-tl": "to top left",
        "to-br": "to bottom right",
        "to-bl": "to bottom left",
      };
      const direction = gradientMap[gradientDirection] || "to right";
      styles.background = `linear-gradient(${direction}, ${gradientColors})`;
    } else if (backgroundColor) {
      styles.backgroundColor = backgroundColor;
    }
    
    // Handle background image
    if (backgroundImage) {
      styles.backgroundImage = `url(${backgroundImage})`;
      styles.backgroundSize = backgroundSize;
      styles.backgroundPosition = backgroundPosition;
      styles.backgroundRepeat = backgroundRepeat;
    }
    
    return styles;
  };

  // Helper function to get border styles
  const getBorderStyles = () => {
    const styles: React.CSSProperties = {};
    
    if (border) {
      styles.border = border;
    } else {
      if (borderWidth) styles.borderWidth = borderWidth;
      if (borderColor) styles.borderColor = borderColor;
      if (borderStyle) styles.borderStyle = borderStyle;
    }
    
    if (borderRadius) styles.borderRadius = borderRadius;
    
    return styles;
  };

  const getGridStyles = () => {
    return {
      display: "grid",
      gridTemplateColumns: getGridTemplateColumns(),
      gridAutoRows: autoRows,
      gap: rowGap && columnGap ? `${rowGap} ${columnGap}` : getGapValue(gap),
      justifyItems,
      alignItems,
      padding,
      width,
      height,
      minHeight: "200px",
      opacity,
      boxShadow: boxShadow || undefined,
      ...getBackgroundStyles(),
      ...getBorderStyles(),
    };
  };

  return (
    <div style={getGridStyles()}>
      {children || (
        // Show placeholder only when there are no children
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50/50 flex items-center justify-center min-h-[100px] col-span-full text-center text-gray-500 text-sm">
          Grid Container
          <br />
          <span className="text-xs">Drop components here</span>
        </div>
      )}
    </div>
  )
}
