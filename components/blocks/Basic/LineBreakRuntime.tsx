import React from "react"

interface LineBreakRuntimeProps {
  height?: string
  margin?: string
}

export function LineBreakRuntime({
  height = "h-4",
  margin = "my-1"
}: LineBreakRuntimeProps) {
  return (
    <div 
      className={`w-full ${height} ${margin}`}
      aria-hidden="true"
    />
  )
}
