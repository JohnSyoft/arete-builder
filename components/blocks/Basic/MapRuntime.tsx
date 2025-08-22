import React from "react"

interface MapProps {
  location?: string
  zoom?: number
  width?: string
  height?: string
  margin?: string
  borderRadius?: string
}

export function MapRuntime({
  location = "New York, NY",
  zoom = 14,
  width = "w-full",
  height = "h-64",
  margin = "my-4",
  borderRadius = "rounded-lg"
}: MapProps) {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(location)}&zoom=${zoom}`
  
  return (
    <div className={`${margin} ${width} ${height}`}>
      <div className={`${width} ${height} ${borderRadius} overflow-hidden bg-gray-200 flex items-center justify-center`}>
        <div className="text-gray-500 text-center">
          <div className="text-lg font-semibold">Map</div>
          <div className="text-sm">{location}</div>
          <div className="text-xs mt-2">Map integration requires API key</div>
        </div>
      </div>
    </div>
  )
}
