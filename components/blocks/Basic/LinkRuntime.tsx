import React from "react"

interface LinkProps {
  text?: string
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  color?: string
  fontSize?: string
  fontWeight?: string
  textDecoration?: string
  margin?: string
  padding?: string
}

export function LinkRuntime({
  text = "Click here",
  href = "#",
  target = "_self",
  color = "text-blue-600",
  fontSize = "text-base",
  fontWeight = "font-normal",
  textDecoration = "hover:underline",
  margin = "my-1",
  padding = "p-0"
}: LinkProps) {
  return (
    <div className={`${margin} ${padding}`}>
      <a
        href={href}
        target={target}
        className={`${color} ${fontSize} ${fontWeight} ${textDecoration}`}
      >
        {text}
      </a>
    </div>
  )
}
