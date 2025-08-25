
export interface CheckboxListTileRuntimeProps {
  items?: { id: string; label: string; subtitle?: string; checked: boolean }[]
  disabled?: boolean
  className?: string
}

export function CheckboxListTileRuntime({
  items = [
    { id: "1", label: "Item 1", subtitle: "Subtitle for item 1", checked: false },
    { id: "2", label: "Item 2", subtitle: "Subtitle for item 2", checked: false },
    { id: "3", label: "Item 3", subtitle: "Subtitle for item 3", checked: false }
  ],
  disabled = false,
  className = ""
}: CheckboxListTileRuntimeProps) {
  return (
    <div className={`${className}`}>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer ${
              disabled ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <input
              type="checkbox"
              checked={item.checked}
              disabled={disabled}
              readOnly
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
    </div>
  )
}
