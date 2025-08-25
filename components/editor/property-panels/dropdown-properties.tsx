
interface DropDownPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function DropDownProperties({ elementProps, onPropChange }: DropDownPropertiesProps) {
  const handleOptionChange = (index: number, field: string, value: string) => {
    const newOptions = [...(elementProps?.options || [])]
    newOptions[index] = { ...newOptions[index], [field]: value }
    onPropChange('options', newOptions)
  }

  const addOption = () => {
    const newOptions = [...(elementProps?.options || []), { label: 'New Option', value: 'new-option' }]
    onPropChange('options', newOptions)
  }

  const removeOption = (index: number) => {
    const newOptions = [...(elementProps?.options || [])]
    newOptions.splice(index, 1)
    onPropChange('options', newOptions)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Dropdown Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Placeholder Text
            </label>
            <input
              type="text"
              value={elementProps?.placeholder || ""}
              onChange={(e) => onPropChange('placeholder', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Value
            </label>
            <input
              type="text"
              value={elementProps?.defaultValue || ""}
              onChange={(e) => onPropChange('defaultValue', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Options</h3>
        
        <div className="space-y-3">
          {(elementProps?.options || []).map((option: any, index: number) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                value={option.label || ""}
                onChange={(e) => handleOptionChange(index, 'label', e.target.value)}
                placeholder="Label"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={option.value || ""}
                onChange={(e) => handleOptionChange(index, 'value', e.target.value)}
                placeholder="Value"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => removeOption(index)}
                className="px-2 py-2 text-red-600 hover:text-red-800"
              >
                ×
              </button>
            </div>
          ))}
          
          <button
            onClick={addOption}
            className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800"
          >
            + Add Option
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Appearance</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Width
            </label>
            <select
              value={elementProps?.width || "w-full"}
              onChange={(e) => onPropChange('width', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="w-full">Full Width</option>
              <option value="w-1/2">Half Width</option>
              <option value="w-1/3">One Third</option>
              <option value="w-2/3">Two Thirds</option>
              <option value="w-1/4">Quarter Width</option>
              <option value="w-3/4">Three Quarters</option>
              <option value="w-auto">Auto</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Background Color
            </label>
            <select
              value={elementProps?.backgroundColor || "bg-white"}
              onChange={(e) => onPropChange('backgroundColor', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bg-white">White</option>
              <option value="bg-gray-50">Gray 50</option>
              <option value="bg-gray-100">Gray 100</option>
              <option value="bg-blue-50">Blue 50</option>
              <option value="bg-green-50">Green 50</option>
              <option value="bg-yellow-50">Yellow 50</option>
              <option value="bg-red-50">Red 50</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Border Style
            </label>
            <select
              value={elementProps?.borderStyle || "border-gray-300"}
              onChange={(e) => onPropChange('borderStyle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="border-gray-300">Gray</option>
              <option value="border-blue-300">Blue</option>
              <option value="border-green-300">Green</option>
              <option value="border-red-300">Red</option>
              <option value="border-yellow-300">Yellow</option>
              <option value="border-purple-300">Purple</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Border Radius
            </label>
            <select
              value={elementProps?.borderRadius || "rounded-md"}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Font Size
            </label>
            <select
              value={elementProps?.fontSize || "text-sm"}
              onChange={(e) => onPropChange('fontSize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="text-xs">Extra Small</option>
              <option value="text-sm">Small</option>
              <option value="text-base">Base</option>
              <option value="text-lg">Large</option>
              <option value="text-xl">Extra Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
