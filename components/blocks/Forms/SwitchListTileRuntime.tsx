
export interface SwitchListTileRuntimeProps {
  items?: { id: string; label: string; subtitle?: string; enabled: boolean }[]
  disabled?: boolean
  className?: string
}

export function SwitchListTileRuntime({
  items = [
    { id: "1", label: "Setting 1", subtitle: "Enable this feature", enabled: false },
    { id: "2", label: "Setting 2", subtitle: "Turn on notifications", enabled: true },
    { id: "3", label: "Setting 3", subtitle: "Allow data sync", enabled: false }
  ],
  disabled = false,
  className = ""
}: SwitchListTileRuntimeProps) {
  return (
    <div className={`${className}`}>
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
            <div className="ml-3">
              <div className={`h-5 w-9 bg-gray-200 rounded-full shadow-inner ${item.enabled ? 'bg-blue-600' : ''} ${disabled ? 'opacity-50' : ''}`}>
                <div className={`dot absolute w-4 h-4 bg-white rounded-full shadow transition ${item.enabled ? 'translate-x-4' : 'translate-x-0'}`} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
