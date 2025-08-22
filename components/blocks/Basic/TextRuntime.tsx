import React from "react"

interface TextProps {
  text?: string
  fontSize?: string
  fontWeight?: string
  color?: string
  textAlign?: string
  tagName?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
  margin?: string
  padding?: string
}

export function TextRuntime({
  text = "Click to edit text",
  fontSize = "text-base",
  fontWeight = "font-normal",
  color = "text-gray-900",
  textAlign = "text-left",
  tagName = "p",
  margin = "my-2",
  padding = "px-0 py-0"
}: TextProps) {
  const Tag = tagName

  return (
    <Tag
      className={`${fontSize} ${fontWeight} ${color} ${textAlign} ${margin} ${padding}`}
      dangerouslySetInnerHTML={{ __html: text }}
    />
  )
}
