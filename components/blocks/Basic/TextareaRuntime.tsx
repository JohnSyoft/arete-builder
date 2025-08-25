import React from "react"

export interface TextareaRuntimeProps {
  placeholder?: string
  value?: string
  disabled?: boolean
  rows?: number
  cols?: number
  backgroundColor?: string
  borderColor?: string
  borderRadius?: string
  borderWidth?: string
  textColor?: string
  fontSize?: string
  fontWeight?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  resize?: "none" | "both" | "horizontal" | "vertical"
  className?: string
}

export function TextareaRuntime({
  placeholder = "Enter your message...",
  value = "",
  disabled = false,
  rows = 4,
  cols,
  backgroundColor = "bg-white",
  borderColor = "border-gray-300",
  borderRadius = "rounded-md",
  borderWidth = "border",
  textColor = "text-gray-900",
  fontSize = "text-sm",
  fontWeight = "font-normal",
  padding = "p-3",
  margin = "",
  width = "w-full",
  height = "",
  resize = "vertical",
  className = "",
  ...props
}: TextareaRuntimeProps) {
  // Create custom styles object for proper styling
  const customStyles = {
    backgroundColor: backgroundColor.startsWith('#') ? backgroundColor : undefined,
    borderColor: borderColor.startsWith('#') ? borderColor : undefined,
    borderRadius: borderRadius.includes('rem') || borderRadius.includes('px') ? borderRadius : undefined,
    borderWidth: borderWidth.includes('px') ? borderWidth : undefined,
    color: textColor.startsWith('#') ? textColor : undefined,
    fontSize: fontSize.includes('rem') || fontSize.includes('px') ? fontSize : undefined,
    fontWeight: fontWeight,
    padding: padding.includes('rem') || padding.includes('px') ? padding : undefined,
    margin: margin.includes('rem') || margin.includes('px') ? margin : undefined,
    width: width.includes('%') || width.includes('px') || width.includes('rem') ? width : undefined,
    height: height.includes('px') || height.includes('rem') ? height : undefined,
    resize: resize,
  }

  // Fallback classes for Tailwind classes that can't be converted to inline styles
  const fallbackClasses = []
  if (backgroundColor.startsWith('bg-')) fallbackClasses.push(backgroundColor)
  if (borderColor.startsWith('border-')) fallbackClasses.push(borderColor)
  if (borderRadius.startsWith('rounded')) fallbackClasses.push(borderRadius)
  if (borderWidth === 'border') fallbackClasses.push('border')
  if (textColor.startsWith('text-')) fallbackClasses.push(textColor)
  if (fontSize.startsWith('text-')) fallbackClasses.push(fontSize)
  if (fontWeight.startsWith('font-')) fallbackClasses.push(fontWeight)
  if (padding.startsWith('p-') || padding.startsWith('px-') || padding.startsWith('py-')) fallbackClasses.push(padding)
  if (margin.startsWith('m-') || margin.startsWith('mx-') || margin.startsWith('my-')) fallbackClasses.push(margin)
  if (width.startsWith('w-')) fallbackClasses.push(width)
  if (height.startsWith('h-')) fallbackClasses.push(height)

  const combinedClassName = `
    ${fallbackClasses.join(' ')} 
    ${className}
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-500 
    focus:border-blue-500
    transition-colors
  `.trim()

  return (
    <textarea
      placeholder={placeholder}
      defaultValue={value}
      disabled={disabled}
      rows={rows}
      cols={cols}
      className={combinedClassName}
      style={customStyles}
      {...props}
    />
  )
}
