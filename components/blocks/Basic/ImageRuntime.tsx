import React from "react"

interface ImageProps {
  src?: string
  alt?: string
  width?: string
  height?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  borderRadius?: string
  margin?: string
  padding?: string
}

export function ImageRuntime({
  src = "https://via.placeholder.com/400x300",
  alt = "Image",
  width = "w-full",
  height = "h-auto",
  objectFit = 'cover',
  borderRadius = '',
  margin = 'my-2',
  padding = 'p-0'
}: ImageProps) {
  const objectFitClass = `object-${objectFit}`
  
  return (
    <div className={`${margin} ${padding}`}>
      <img
        src={src}
        alt={alt}
        className={`${width} ${height} ${objectFitClass} ${borderRadius}`}
      />
    </div>
  )
}
