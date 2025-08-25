import { useNode, useEditor } from "@craftjs/core"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"
import { Switch } from "@/components/ui/switch"

export interface SwitchListTileProps {
  items?: { id: string; label: string; subtitle?: string; enabled: boolean }[]
  disabled?: boolean
  className?: string
}

export function SwitchListTile({
  items = [
    { id: "1", label: "Setting 1", subtitle: "Enable this feature", enabled: false },
    { id: "2", label: "Setting 2", subtitle: "Turn on notifications", enabled: true },
    { id: "3", label: "Setting 3", subtitle: "Allow data sync", enabled: false }
  ],
  disabled = false,
  className = ""
}: SwitchListTileProps) {
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
    openPanel('switchlisttile', {
      items,
      disabled
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: SwitchListTileProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const handleItemToggle = (itemId: string) => {
    if (disabled) return

    setProp((props: SwitchListTileProps) => {
      props.items = (props.items || []).map(item =>
        item.id === itemId ? { ...item, enabled: !item.enabled } : item
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
            className={`flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 ${
              disabled ? "opacity-50" : ""
            }`}
          >
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">{item.label}</div>
              {item.subtitle && (
                <div className="text-xs text-gray-500">{item.subtitle}</div>
              )}
            </div>
            <Switch
              checked={item.enabled}
              disabled={disabled}
              onCheckedChange={() => handleItemToggle(item.id)}
              className="ml-3"
            />
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
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          SwitchListTile
        </div>
      )}
    </div>
  )
}

SwitchListTile.craft = {
  displayName: "SwitchListTile",
  props: {
    items: [
      { id: "1", label: "Setting 1", subtitle: "Enable this feature", enabled: false },
      { id: "2", label: "Setting 2", subtitle: "Turn on notifications", enabled: true },
      { id: "3", label: "Setting 3", subtitle: "Allow data sync", enabled: false }
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
