
interface SignaturePropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function SignatureProperties({ elementProps, onPropChange }: SignaturePropertiesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Signature Pad Settings</h3>
        
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
              Placeholder Text
            </label>
            <input
              type="text"
              value={elementProps?.placeholder || "Sign here"}
              onChange={(e) => onPropChange('placeholder', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
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
                checked={elementProps?.showClearButton || true}
                onChange={(e) => onPropChange('showClearButton', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Show Clear Button</span>
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
        <h3 className="text-sm font-medium text-gray-900 mb-4">Canvas Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Canvas Width
            </label>
            <input
              type="number"
              value={elementProps?.canvasWidth || 400}
              onChange={(e) => onPropChange('canvasWidth', parseInt(e.target.value))}
              min="200"
              max="800"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Canvas Height
            </label>
            <input
              type="number"
              value={elementProps?.canvasHeight || 200}
              onChange={(e) => onPropChange('canvasHeight', parseInt(e.target.value))}
              min="100"
              max="400"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pen Color
            </label>
            <select
              value={elementProps?.penColor || "black"}
              onChange={(e) => onPropChange('penColor', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="black">Black</option>
              <option value="blue">Blue</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
              <option value="brown">Brown</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pen Width
            </label>
            <input
              type="number"
              value={elementProps?.penWidth || 2}
              onChange={(e) => onPropChange('penWidth', parseInt(e.target.value))}
              min="1"
              max="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Appearance</h3>
        
        <div className="space-y-4">
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
              <option value="border-dashed border-gray-300">Dashed</option>
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shadow
            </label>
            <select
              value={elementProps?.shadow || "shadow-sm"}
              onChange={(e) => onPropChange('shadow', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="shadow-none">None</option>
              <option value="shadow-sm">Small</option>
              <option value="shadow-md">Medium</option>
              <option value="shadow-lg">Large</option>
              <option value="shadow-xl">Extra Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
