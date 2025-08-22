import React from "react"
import { useNode } from "@craftjs/core"
import { InputProps } from "@/components/blocks/Basic/Input"

interface InputPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function InputProperties({ elementProps, onPropChange }: InputPropertiesProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-900 mb-4">Input Settings</h3>
        
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
              Input Type
            </label>
            <select
              value={elementProps?.type || "text"}
              onChange={(e) => onPropChange('type', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="text">Text</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
              <option value="number">Number</option>
              <option value="tel">Phone</option>
              <option value="url">URL</option>
              <option value="search">Search</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Value
            </label>
            <input
              type="text"
              value={elementProps?.value || ""}
              onChange={(e) => onPropChange('value', e.target.value)}
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
        </div>
      </div>
    </div>
  )
}
