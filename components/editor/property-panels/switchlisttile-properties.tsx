
interface SwitchListTilePropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function SwitchListTileProperties({ elementProps, onPropChange }: SwitchListTilePropertiesProps) {
  const handleItemChange = (index: number, field: string, value: string | boolean) => {
    const newItems = [...(elementProps?.items || [])]
    newItems[index] = { ...newItems[index], [field]: value }
    onPropChange('items', newItems)
  }

  const addItem = () => {
    const newItems = [...(elementProps?.items || []), { title: 'New Item', subtitle: '', value: 'new-item', defaultChecked: false }]
    onPropChange('items', newItems)
  }

  const removeItem = (index: number) => {
    const newItems = [...(elementProps?.items || [])]
    newItems.splice(index, 1)
    onPropChange('items', newItems)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Switch List Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              value={elementProps?.title || ""}
              onChange={(e) => onPropChange('title', e.target.value)}
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
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">List Items</h3>
        
        <div className="space-y-3">
          {(elementProps?.items || []).map((item: any, index: number) => (
            <div key={index} className="space-y-2 p-3 border border-gray-200 rounded-md">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={item.title || ""}
                  onChange={(e) => handleItemChange(index, 'title', e.target.value)}
                  placeholder="Title"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={() => removeItem(index)}
                  className="px-2 py-2 text-red-600 hover:text-red-800"
                >
                  ×
                </button>
              </div>
              <input
                type="text"
                value={item.subtitle || ""}
                onChange={(e) => handleItemChange(index, 'subtitle', e.target.value)}
                placeholder="Subtitle (optional)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={item.value || ""}
                onChange={(e) => handleItemChange(index, 'value', e.target.value)}
                placeholder="Value"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={item.defaultChecked || false}
                    onChange={(e) => handleItemChange(index, 'defaultChecked', e.target.checked)}
                    className="rounded"
                  />
                  <span className="text-sm text-gray-700">Default Checked</span>
                </label>
              </div>
            </div>
          ))}
          
          <button
            onClick={addItem}
            className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800"
          >
            + Add Item
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Appearance</h3>
        
        <div className="space-y-4">
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
              value={elementProps?.backgroundColor || "bg-white"}
              onChange={(e) => onPropChange('backgroundColor', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="bg-white">White</option>
              <option value="bg-gray-50">Gray 50</option>
              <option value="bg-gray-100">Gray 100</option>
              <option value="bg-blue-50">Blue 50</option>
              <option value="bg-green-50">Green 50</option>
              <option value="bg-transparent">Transparent</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Border Style
            </label>
            <select
              value={elementProps?.borderStyle || "border-gray-200"}
              onChange={(e) => onPropChange('borderStyle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="border-gray-200">Light Gray</option>
              <option value="border-gray-300">Gray</option>
              <option value="border-blue-300">Blue</option>
              <option value="border-green-300">Green</option>
              <option value="border-red-300">Red</option>
              <option value="border-none">None</option>
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
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
