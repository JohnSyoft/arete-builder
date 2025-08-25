import React from "react"

interface CheckboxRuntimeProps {
  name?: string
  label?: string
  checked?: boolean
  required?: boolean
  disabled?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: string
  labelPosition?: 'left' | 'right'
  margin?: string
  padding?: string
  fontSize?: string
}

export function CheckboxRuntime({
  name = "checkbox",
  label = "Checkbox Label",
  checked = false,
  required = false,
  disabled = false,
  size = 'md',
  color = 'text-blue-600',
  labelPosition = 'right',
  margin = 'my-2',
  padding = '',
  fontSize = 'text-base'
}: CheckboxRuntimeProps) {
  const getSizeClass = (checkboxSize: string) => {
    switch (checkboxSize) {
      case 'sm': return 'h-3 w-3'
      case 'md': return 'h-4 w-4'
      case 'lg': return 'h-5 w-5'
      default: return 'h-4 w-4'
    }
  }

  const checkboxClasses = `
    ${getSizeClass(size)}
    ${color}
    border-gray-300
    rounded
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-0
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `.trim()

  const labelClasses = `
    ${fontSize}
    text-gray-700
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    select-none
  `.trim()

  const containerClasses = `
    flex items-center
    ${labelPosition === 'left' ? 'flex-row-reverse' : 'flex-row'}
    ${margin}
    ${padding}
    gap-2
  `.trim()

  return (
    <div className={containerClasses}>
      <input
        type="checkbox"
        name={name}
        required={required}
        disabled={disabled}
        defaultChecked={checked}
        className={checkboxClasses}
      />
      <label className={labelClasses}>
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    </div>
  )
}
