import React from "react"
import { useNode, useEditor } from "@craftjs/core"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"
import { X } from "lucide-react"

export interface ChoiceChipsProps {
  options?: { value: string; label: string }[]
  selectedValues?: string[]
  multiSelect?: boolean
  disabled?: boolean
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ChoiceChips({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" }
  ],
  selectedValues = [],
  multiSelect = true,
  disabled = false,
  variant = "default",
  size = "md",
  className = ""
}: ChoiceChipsProps) {
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
    openPanel('choicechips', {
      options,
      selectedValues,
      multiSelect,
      disabled,
      variant,
      size
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: ChoiceChipsProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const getSizeClasses = () => {
    switch (size) {
      case "sm": return "px-2 py-1 text-xs"
      case "lg": return "px-4 py-2 text-base"
      default: return "px-3 py-1.5 text-sm"
    }
  }

  const getVariantClasses = (isSelected: boolean) => {
    const base = "inline-flex items-center rounded-full transition-colors cursor-pointer"
    
    if (isSelected) {
      switch (variant) {
        case "outline":
          return `${base} border-2 border-blue-500 bg-blue-50 text-blue-700`
        default:
          return `${base} bg-blue-500 text-white`
      }
    } else {
      switch (variant) {
        case "outline":
          return `${base} border border-gray-300 text-gray-700 hover:bg-gray-50`
        default:
          return `${base} bg-gray-200 text-gray-700 hover:bg-gray-300`
      }
    }
  }

  const handleChipClick = (value: string) => {
    if (disabled) return

    setProp((props: ChoiceChipsProps) => {
      if (multiSelect) {
        const currentSelected = props.selectedValues || []
        if (currentSelected.includes(value)) {
          props.selectedValues = currentSelected.filter(v => v !== value)
        } else {
          props.selectedValues = [...currentSelected, value]
        }
      } else {
        props.selectedValues = props.selectedValues?.[0] === value ? [] : [value]
      }
    })
  }

  const removeChip = (value: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (disabled) return

    setProp((props: ChoiceChipsProps) => {
      props.selectedValues = (props.selectedValues || []).filter(v => v !== value)
    })
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
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value)
          return (
            <div
              key={option.value}
              className={`${getVariantClasses(isSelected)} ${getSizeClasses()} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handleChipClick(option.value)}
            >
              <span>{option.label}</span>
              {isSelected && multiSelect && (
                <X 
                  className="w-3 h-3 ml-1 hover:bg-white/20 rounded-full" 
                  onClick={(e) => removeChip(option.value, e)}
                />
              )}
            </div>
          )
        })}
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50">
          <FloatingToolbar
            elementType="checkbox"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-teal-500 text-white text-xs px-2 py-1 rounded z-10">
          ChoiceChips
        </div>
      )}
    </div>
  )
}

ChoiceChips.craft = {
  displayName: "ChoiceChips",
  props: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4" }
    ],
    selectedValues: [],
    multiSelect: true,
    disabled: false,
    variant: "default",
    size: "md",
    className: ""
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  }
}
