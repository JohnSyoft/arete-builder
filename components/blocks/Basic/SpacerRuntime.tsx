import React from "react"

interface SpacerProps {
  height?: string
  width?: string
  margin?: string
}

export function SpacerRuntime({
  height = "h-8",
  width = "w-full",
  margin = ""
}: SpacerProps) {
  return (
    <div className={`${height} ${width} ${margin}`} />
  )
}
