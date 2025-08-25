import { useNode, useEditor } from "@craftjs/core"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"

export interface CheckboxGroupProps {
  label?: string
  options?: { value: string; label: string }[]
  selectedValues?: string[]
  disabled?: boolean
  direction?: "horizontal" | "vertical"
  className?: string
}

export function CheckboxGroup({
  label = "Select options:",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ],
  selectedValues = [],
  disabled = false,
  direction = "vertical",
  className = ""
}: CheckboxGroupProps) {
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
    openPanel('checkboxgroup', {
      label,
      options,
      selectedValues,
      disabled,
      direction
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: CheckboxGroupProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const handleCheckboxChange = (value: string) => {
    if (disabled) return

    setProp((props: CheckboxGroupProps) => {
      const currentSelected = props.selectedValues || []
      if (currentSelected.includes(value)) {
        props.selectedValues = currentSelected.filter(v => v !== value)
      } else {
        props.selectedValues = [...currentSelected, value]
      }
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
      <fieldset className="p-4">
        <legend className="text-sm font-medium text-gray-900 mb-3">{label}</legend>
        <div className={`space-${direction === "horizontal" ? "x" : "y"}-3 ${direction === "horizontal" ? "flex flex-wrap" : "block"}`}>
          {options.map((option) => (
            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedValues.includes(option.value)}
                disabled={disabled}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                onChange={() => handleCheckboxChange(option.value)}
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>

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
        <div className="absolute -top-6 left-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded z-10">
          CheckboxGroup
        </div>
      )}
    </div>
  )
}

CheckboxGroup.craft = {
  displayName: "CheckboxGroup",
  props: {
    label: "Select options:",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" }
    ],
    selectedValues: [],
    disabled: false,
    direction: "vertical",
    className: ""
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  }
}
