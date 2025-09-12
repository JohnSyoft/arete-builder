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
  children
}: GridRuntimeProps) {
  const getGridTemplateColumns = () => {
    if (autoFit) {
      return `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
    }
    return `repeat(${columns}, 1fr)`;
  };

  const getGridStyles = () => {
    return {
      display: "grid",
      gridTemplateColumns: getGridTemplateColumns(),
      gridAutoRows: autoRows,
      gap: rowGap && columnGap ? `${rowGap} ${columnGap}` : gap,
      justifyItems,
      alignItems,
      padding,
      width,
      height,
      minHeight: "200px",
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
