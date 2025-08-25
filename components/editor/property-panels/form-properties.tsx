
interface FormPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function FormProperties({ elementProps, onPropChange }: FormPropertiesProps) {
  const handleHeaderChange = (key: string, value: string) => {
    const newHeaders = { ...(elementProps?.headers || {}), [key]: value }
    onPropChange('headers', newHeaders)
  }

  const removeHeader = (key: string) => {
    const newHeaders = { ...(elementProps?.headers || {}) }
    delete newHeaders[key]
    onPropChange('headers', newHeaders)
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Form Settings</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Form Title
            </label>
            <input
              type="text"
              value={elementProps?.title || ""}
              onChange={(e) => onPropChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              value={elementProps?.description || ""}
              onChange={(e) => onPropChange('description', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Submit Button Text
            </label>
            <input
              type="text"
              value={elementProps?.submitButtonText || ""}
              onChange={(e) => onPropChange('submitButtonText', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">API Configuration</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Submit URL
            </label>
            <input
              type="url"
              value={elementProps?.submitUrl || ""}
              onChange={(e) => onPropChange('submitUrl', e.target.value)}
              placeholder="https://api.example.com/submit"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              HTTP Method
            </label>
            <select
              value={elementProps?.method || "POST"}
              onChange={(e) => onPropChange('method', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="PATCH">PATCH</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Custom Headers
            </label>
            <div className="space-y-2">
              {Object.entries(elementProps?.headers || {}).map(([key, value]) => (
                <div key={key} className="flex space-x-2">
                  <input
                    type="text"
                    value={key}
                    onChange={(e) => {
                      const newHeaders = { ...(elementProps?.headers || {}) }
                      delete newHeaders[key]
                      newHeaders[e.target.value] = value
                      onPropChange('headers', newHeaders)
                    }}
                    placeholder="Header name"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={value as string}
                    onChange={(e) => handleHeaderChange(key, e.target.value)}
                    placeholder="Header value"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={() => removeHeader(key)}
                    className="px-2 py-2 text-red-600 hover:text-red-800"
                  >
                    ×
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleHeaderChange('Authorization', 'Bearer ')}
                className="w-full px-3 py-2 border border-dashed border-gray-300 rounded-md text-sm text-gray-600 hover:border-gray-400 hover:text-gray-800"
              >
                + Add Header
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Form Behavior</h3>
        
        <div className="space-y-4">
          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.validateOnSubmit || true}
                onChange={(e) => onPropChange('validateOnSubmit', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Validate on Submit</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.resetAfterSubmit || true}
                onChange={(e) => onPropChange('resetAfterSubmit', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Reset After Submit</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.showSuccessMessage || true}
                onChange={(e) => onPropChange('showSuccessMessage', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Show Success Message</span>
            </label>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Success Message
            </label>
            <input
              type="text"
              value={elementProps?.successMessage || ""}
              onChange={(e) => onPropChange('successMessage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Error Message
            </label>
            <input
              type="text"
              value={elementProps?.errorMessage || ""}
              onChange={(e) => onPropChange('errorMessage', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Redirect URL (after success)
            </label>
            <input
              type="url"
              value={elementProps?.redirectUrl || ""}
              onChange={(e) => onPropChange('redirectUrl', e.target.value)}
              placeholder="https://example.com/thank-you"
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
              Width
            </label>
            <select
              value={elementProps?.width || "100%"}
              onChange={(e) => onPropChange('width', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="100%">Full Width</option>
              <option value="50%">Half Width</option>
              <option value="33.33%">One Third</option>
              <option value="66.66%">Two Thirds</option>
              <option value="25%">Quarter Width</option>
              <option value="75%">Three Quarters</option>
              <option value="auto">Auto</option>
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
        </div>
      </div>
    </div>
  )
}
