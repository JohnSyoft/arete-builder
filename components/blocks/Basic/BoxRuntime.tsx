import React from "react";

interface BoxRuntimeProps {
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  display?:
    | "block"
    | "flex"
    | "inline-block"
    | "inline-flex"
    | "grid"
    | "inline-grid";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  backgroundImage?: string;
  gradient?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  borderWidth?: string;
  borderStyle?: string;
  children?: React.ReactNode;
  className?: string;
}

export function BoxRuntime({
  backgroundColor = "#ffffff",
  textColor = "#000000",
  padding = "16px",
  margin = "0",
  borderRadius = "0px",
  border = "none",
  borderColor = "#e5e7eb",
  width = "auto",
  height = "auto",
  minHeight = "auto",
  display = "block",
  alignItems = "stretch",
  justifyContent = "start",
  flexDirection = "row",
  gap = "0",
  backgroundImage = "",
  gradient = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  borderWidth = "1px",
  borderStyle = "solid",
  children,
  className = "",
}: BoxRuntimeProps) {
  // Build dynamic styles
  const boxStyles: React.CSSProperties = {
    backgroundColor,
    color: textColor,
    padding,
    margin,
    borderRadius,
    width,
    height: height !== "auto" ? height : undefined,
    minHeight: minHeight !== "auto" ? minHeight : undefined,
    display,
    alignItems,
    justifyContent,
    flexDirection,
    gap,
    borderWidth,
    borderStyle,
    borderColor,
  };

  // Handle background
  if (gradient && gradient !== "") {
    boxStyles.background = gradient;
  } else if (backgroundImage && backgroundImage !== "") {
    boxStyles.backgroundImage = `url(${backgroundImage})`;
    boxStyles.backgroundSize = backgroundSize;
    boxStyles.backgroundPosition = backgroundPosition;
    boxStyles.backgroundRepeat = "no-repeat";
  }

  // Handle border
  if (border && border !== "none") {
    boxStyles.border = `${borderWidth} ${borderStyle} ${borderColor}`;
  }

  return (
    <div 
      style={boxStyles} 
      className={className}
    >
      {children}
    </div>
  );
}
