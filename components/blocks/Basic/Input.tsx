import { useNode, useEditor } from "@craftjs/core"
import React from "react"
import { Input as ShadcnInput } from "@/components/ui/input"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"

export interface InputProps {
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

export function Input({
  placeholder = "Enter text...",
  type = "text",
  value = "",
  disabled = false,
  backgroundColor = "#ffffff",
  borderColor = "#d1d5db",
  borderRadius = "0.375rem",
  borderWidth = "1px",
  textColor = "#111827",
  fontSize = "0.875rem",
  fontWeight = "400",
  padding = "0.5rem 0.75rem",
  margin = "",
  width = "100%",
  className = "",
  ...props
}: InputProps) {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    selected,
    isHovered
  } = useNode((state) => ({
    selected: state.events.selected,
    isHovered: state.events.hovered
  }))

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProp((props: InputProps) => (props.value = e.target.value))
  }

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

  const combinedClassName = `${fallbackClasses.join(' ')} ${className}`.trim()

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className="relative inline-block"
    >
      <ShadcnInput
        placeholder={placeholder}
        type={type}
        value={value}
        disabled={disabled || !enabled}
        onChange={handleChange}
        className={combinedClassName}
        style={customStyles}
        {...props}
      />
      {enabled && (selected || isHovered) && (
        <FloatingToolbar
          elementType="text"
          onSettings={() => {}}
          onMove={() => {}}
          onLink={() => {}}
          onDelete={() => {}}
          position={{ x: 0, y: 0 }}
        />
      )}
    </div>
  )
}

export const InputSettings = () => {
  const {
    actions: { setProp },
    props
  } = useNode((node) => ({
    props: node.data.props
  }))

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Placeholder
        </label>
        <input
          type="text"
          value={props.placeholder || ""}
          onChange={(e) =>
            setProp((props: InputProps) => (props.placeholder = e.target.value))
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Input Type
        </label>
        <select
          value={props.type || "text"}
          onChange={(e) =>
            setProp((props: InputProps) => (props.type = e.target.value as InputProps["type"]))
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        >
          <option value="text">Text</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="number">Number</option>
          <option value="tel">Phone</option>
          <option value="url">URL</option>
          <option value="search">Search</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Default Value
        </label>
        <input
          type="text"
          value={props.value || ""}
          onChange={(e) =>
            setProp((props: InputProps) => (props.value = e.target.value))
          }
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
        />
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={props.disabled || false}
            onChange={(e) =>
              setProp((props: InputProps) => (props.disabled = e.target.checked))
            }
          />
          <span className="text-sm text-gray-700">Disabled</span>
        </label>
      </div>
    </div>
  )
}

Input.craft = {
  props: {
    placeholder: "Enter text...",
    type: "text",
    value: "",
    disabled: false,
    backgroundColor: "#ffffff",
    borderColor: "#d1d5db",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    textColor: "#111827",
    fontSize: "0.875rem",
    fontWeight: "400",
    padding: "0.5rem 0.75rem",
    margin: "",
    width: "100%",
    className: ""
  },
  related: {
    settings: InputSettings
  }
}
