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

  const combinedClassName = `${backgroundColor} ${borderColor} ${borderRadius} ${borderWidth} ${textColor} ${fontSize} ${fontWeight} ${padding} ${margin} ${width} ${className}`.trim()

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
    backgroundColor: "bg-white",
    borderColor: "border-gray-300",
    borderRadius: "rounded-md",
    borderWidth: "border",
    textColor: "text-gray-900",
    fontSize: "text-sm",
    fontWeight: "font-normal",
    padding: "px-3 py-2",
    margin: "",
    width: "w-full",
    className: ""
  },
  related: {
    settings: InputSettings
  }
}
