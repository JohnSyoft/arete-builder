
interface CreditCardFormPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function CreditCardFormProperties({ elementProps, onPropChange }: CreditCardFormPropertiesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Credit Card Form Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Form Title
            </label>
            <input
              type="text"
              value={elementProps?.title || "Payment Information"}
              onChange={(e) => onPropChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.showCardIcons || true}
                onChange={(e) => onPropChange('showCardIcons', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Show Card Icons</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.enableValidation || true}
                onChange={(e) => onPropChange('enableValidation', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Enable Validation</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.required || true}
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
        <h3 className="text-sm font-medium text-gray-900 mb-4">Field Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.showNameField || true}
                onChange={(e) => onPropChange('showNameField', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Show Cardholder Name</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.showBillingAddress || false}
                onChange={(e) => onPropChange('showBillingAddress', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Show Billing Address</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Layout Style
            </label>
            <select
              value={elementProps?.layout || "stacked"}
              onChange={(e) => onPropChange('layout', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="stacked">Stacked</option>
              <option value="inline">Inline</option>
              <option value="compact">Compact</option>
            </select>
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
              <option value="bg-transparent">Transparent</option>
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
              <option value="border-none">None</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Border Radius
            </label>
            <select
              value={elementProps?.borderRadius || "rounded-lg"}
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
              value={elementProps?.shadow || "shadow-md"}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Padding
            </label>
            <select
              value={elementProps?.padding || "p-6"}
              onChange={(e) => onPropChange('padding', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="p-2">Small</option>
              <option value="p-4">Medium</option>
              <option value="p-6">Large</option>
              <option value="p-8">Extra Large</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
