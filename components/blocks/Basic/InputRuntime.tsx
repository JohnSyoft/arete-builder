import React from "react"
import { Input as ShadcnInput } from "@/components/ui/input"

export interface InputRuntimeProps {
  placeholder?: string
  type?: "text" | "email" | "password" | "number" | "tel" | "url" | "search"
  value?: string
  disabled?: boolean
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
  className?: string
}

export function InputRuntime({
  placeholder = "Enter text...",
  type = "text",
  value = "",
  disabled = false,
  backgroundColor = "bg-white",
  borderColor = "border-gray-300",
  borderRadius = "rounded-md",
  borderWidth = "border",
  textColor = "text-gray-900",
  fontSize = "text-sm",
  fontWeight = "font-normal",
  padding = "px-3 py-2",
  margin = "",
  width = "w-full",
  className = "",
  ...props
}: InputRuntimeProps) {
  const combinedClassName = `${backgroundColor} ${borderColor} ${borderRadius} ${borderWidth} ${textColor} ${fontSize} ${fontWeight} ${padding} ${margin} ${width} ${className}`.trim()

  return (
    <ShadcnInput
      placeholder={placeholder}
      type={type}
      defaultValue={value}
      disabled={disabled}
      className={combinedClassName}
      {...props}
    />
  )
}
