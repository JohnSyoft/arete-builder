
interface RatingBarPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function RatingBarProperties({ elementProps, onPropChange }: RatingBarPropertiesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Rating Bar Settings</h3>
        
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
              Maximum Rating
            </label>
            <input
              type="number"
              value={elementProps?.maxRating || 5}
              onChange={(e) => onPropChange('maxRating', parseInt(e.target.value))}
              min="1"
              max="10"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Rating
            </label>
            <input
              type="number"
              value={elementProps?.defaultRating || 0}
              onChange={(e) => onPropChange('defaultRating', parseInt(e.target.value))}
              min="0"
              max={elementProps?.maxRating || 5}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.allowHalfStars || false}
                onChange={(e) => onPropChange('allowHalfStars', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Allow Half Stars</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.readonly || false}
                onChange={(e) => onPropChange('readonly', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Read Only</span>
            </label>
          </div>

          <div>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={elementProps?.showValue || false}
                onChange={(e) => onPropChange('showValue', e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-700">Show Rating Value</span>
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Appearance</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Star Size
            </label>
            <select
              value={elementProps?.starSize || "medium"}
              onChange={(e) => onPropChange('starSize', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="xlarge">Extra Large</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Star Color
            </label>
            <select
              value={elementProps?.starColor || "yellow"}
              onChange={(e) => onPropChange('starColor', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="red">Red</option>
              <option value="pink">Pink</option>
              <option value="purple">Purple</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Empty Star Color
            </label>
            <select
              value={elementProps?.emptyStarColor || "gray"}
              onChange={(e) => onPropChange('emptyStarColor', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="gray">Gray</option>
              <option value="lightgray">Light Gray</option>
              <option value="silver">Silver</option>
              <option value="transparent">Transparent</option>
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
