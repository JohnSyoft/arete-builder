
interface ChoiceChipsPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function ChoiceChipsProperties({ elementProps, onPropChange }: ChoiceChipsPropertiesProps) {
  const handleChipChange = (index: number, field: string, value: string) => {
    const newChips = [...(elementProps?.chips || [])]
    newChips[index] = { ...newChips[index], [field]: value }
    onPropChange('chips', newChips)
  }

  const addChip = () => {
    const newChips = [...(elementProps?.chips || []), { label: 'New Chip', value: 'new-chip' }]
    onPropChange('chips', newChips)
  }

  const removeChip = (index: number) => {
    const newChips = [...(elementProps?.chips || [])]
    newChips.splice(index, 1)
    onPropChange('chips', newChips)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Choice Chips Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Label
            </label>
            <input
              type="text"
              value={elementProps?.label || ""}
              onChange={(e) => onPropChange('label', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Selection Mode
            </label>
            <select
              value={elementProps?.selectionMode || "single"}
              onChange={(e) => onPropChange('selectionMode', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="single">Single Selection</option>
              <option value="multiple">Multiple Selection</option>
            </select>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.required || false}
                onChange={(e) => onPropChange('required', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Required</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.disabled || false}
                onChange={(e) => onPropChange('disabled', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Disabled</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Chips</h3>
        
        <div className="space-y-3">
          {(elementProps?.chips || []).map((chip: any, index: number) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={chip.label || ""}
                onChange={(e) => handleChipChange(index, 'label', e.target.value)}
                placeholder="Label"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={chip.value || ""}
                onChange={(e) => handleChipChange(index, 'value', e.target.value)}
                placeholder="Value"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => removeChip(index)}
                className="px-2 py-2 text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </div>
          ))}
          
          <button
            onClick={addChip}
            className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800"
          >
            + Add Chip
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Appearance</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Layout
            </label>
            <select
              value={elementProps?.layout || "wrap"}
              onChange={(e) => onPropChange('layout', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="wrap">Wrap</option>
              <option value="horizontal-scroll">Horizontal Scroll</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chip Size
            </label>
            <select
              value={elementProps?.chipSize || "medium"}
              onChange={(e) => onPropChange('chipSize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Color Theme
            </label>
            <select
              value={elementProps?.colorTheme || "blue"}
              onChange={(e) => onPropChange('colorTheme', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="red">Red</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
              <option value="pink">Pink</option>
              <option value="gray">Gray</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Background Color
            </label>
            <select
              value={elementProps?.backgroundColor || "bg-transparent"}
              onChange={(e) => onPropChange('backgroundColor', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bg-transparent">Transparent</option>
              <option value="bg-white">White</option>
              <option value="bg-gray-50">Gray 50</option>
              <option value="bg-gray-100">Gray 100</option>
              <option value="bg-blue-50">Blue 50</option>
              <option value="bg-green-50">Green 50</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Border Radius
            </label>
            <select
              value={elementProps?.borderRadius || "rounded-full"}
              onChange={(e) => onPropChange('borderRadius', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="rounded-none">None</option>
              <option value="rounded-sm">Small</option>
              <option value="rounded-md">Medium</option>
              <option value="rounded-lg">Large</option>
              <option value="rounded-xl">Extra Large</option>
              <option value="rounded-full">Full</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
