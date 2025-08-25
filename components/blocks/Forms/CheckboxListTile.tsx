import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

export interface CheckboxListTileProps {
  items?: { id: string; label: string; subtitle?: string; checked: boolean }[]
  disabled?: boolean
  className?: string
}

export function CheckboxListTile({
  items = [
    { id: "1", label: "Item 1", subtitle: "Subtitle for item 1", checked: false },
    { id: "2", label: "Item 2", subtitle: "Subtitle for item 2", checked: false },
    { id: "3", label: "Item 3", subtitle: "Subtitle for item 3", checked: false }
  ],
  disabled = false,
  className = ""
}: CheckboxListTileProps) {
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
    openPanel('checkboxlisttile', {
      items,
      disabled
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: CheckboxListTileProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const handleItemToggle = (itemId: string) => {
    if (disabled) return

    setProp((props: CheckboxListTileProps) => {
      props.items = (props.items || []).map(item =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
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
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={() => handleItemToggle(item.id)}
          >
            <input
              type="checkbox"
              checked={item.checked}
              disabled={disabled}
              onChange={() => {}} // Handled by parent onClick
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div className="ml-3 flex-1">
              <div className="text-sm font-medium text-gray-900">{item.label}</div>
              {item.subtitle && (
                <div className="text-xs text-gray-500">{item.subtitle}</div>
              )}
            </div>
          </div>
        ))}
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
        <div className="absolute -top-6 left-0 bg-green-500 text-white text-xs px-2 py-1 rounded z-10">
          CheckboxListTile
        </div>
      )}
    </div>
  )
}

CheckboxListTile.craft = {
  displayName: "CheckboxListTile",
  props: {
    items: [
      { id: "1", label: "Item 1", subtitle: "Subtitle for item 1", checked: false },
      { id: "2", label: "Item 2", subtitle: "Subtitle for item 2", checked: false },
      { id: "3", label: "Item 3", subtitle: "Subtitle for item 3", checked: false }
    ],
    disabled: false,
    className: ""
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  }
}
