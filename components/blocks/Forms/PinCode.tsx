import React from "react"
import { useNode, useEditor } from "@craftjs/core"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

export interface PinCodeProps {
  length?: number
  value?: string
  disabled?: boolean
  masked?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function PinCode({
  length = 4,
  value = "",
  disabled = false,
  masked = false,
  size = "md",
  className = ""
}: PinCodeProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id
  }))

  const { actions } = useEditor()
  const { openPanel } = usePropertiesPanelStore()

  const handleShowProperties = () => {
    openPanel('pincode', {
      length,
      value,
      disabled,
      masked,
      size
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: PinCodeProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm": return "w-8 h-8 text-sm"
      case "lg": return "w-16 h-16 text-xl"
      default: return "w-12 h-12 text-base"
    }
  }

  const handleInputChange = (index: number, inputValue: string) => {
    if (inputValue.length > 1) return // Only allow single character
    
    const newValue = value.split('')
    newValue[index] = inputValue
    
    // Fill with empty strings up to the desired length
    while (newValue.length < length) {
      newValue.push('')
    }
    
    const updatedValue = newValue.slice(0, length).join('')
    
    setProp((props: PinCodeProps) => {
      props.value = updatedValue
    })

    // Focus next input if value was entered
    if (inputValue && index < length - 1) {
      const nextInput = document.querySelector(`#pin-${id}-${index + 1}`) as HTMLInputElement
      nextInput?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !value[index] && index > 0) {
      const prevInput = document.querySelector(`#pin-${id}-${index - 1}`) as HTMLInputElement
      prevInput?.focus()
    }
  }

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative ${className} ${
        selected ? "ring-2 ring-blue-500 rounded" : ""
      } ${hovered ? "ring-1 ring-blue-300 rounded" : ""}`}
    >
      <div className="flex space-x-2">
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            id={`pin-${id}-${index}`}
            type={masked ? "password" : "text"}
            value={value[index] || ''}
            disabled={disabled}
            className={`${getSizeClasses()} border border-gray-300 rounded text-center focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              disabled ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            maxLength={1}
            onChange={(e) => handleInputChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
          />
        ))}
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50">
          <FloatingToolbar
            elementType="input"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-red-500 text-white text-xs px-2 py-1 rounded z-10">
          PinCode
        </div>
      )}
    </div>
  )
}

PinCode.craft = {
  displayName: "PinCode",
  props: {
    length: 4,
    value: "",
    disabled: false,
    masked: false,
    size: "md",
    className: ""
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  }
}
