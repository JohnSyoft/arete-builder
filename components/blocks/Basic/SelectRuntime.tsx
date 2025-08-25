import React from "react"

interface SelectOption {
  value: string
  label: string
}

interface SelectRuntimeProps {
  name?: string
  placeholder?: string
  options?: SelectOption[]
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'filled' | 'underlined'
  backgroundColor?: string
  borderColor?: string
  textColor?: string
  placeholderColor?: string
  margin?: string
  padding?: string
  width?: string
  borderRadius?: string
  fontSize?: string
}

export function SelectRuntime({
  name = "select",
  placeholder = "Choose an option",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ],
  required = false,
  disabled = false,
  multiple = false,
  size = 'md',
  variant = 'default',
  backgroundColor = 'bg-white',
  borderColor = 'border-gray-300',
  textColor = 'text-gray-900',
  placeholderColor = 'text-gray-500',
  margin = 'my-2',
  padding = '',
  width = 'w-full',
  borderRadius = 'rounded-md',
  fontSize = ''
}: SelectRuntimeProps) {
  const getSizeClass = (selectSize: string) => {
    switch (selectSize) {
      case 'sm': return 'py-1 px-2 text-sm'
      case 'md': return 'py-2 px-3 text-base'
      case 'lg': return 'py-3 px-4 text-lg'
      default: return 'py-2 px-3 text-base'
    }
  }

  const getVariantClass = (selectVariant: string) => {
    switch (selectVariant) {
      case 'default': return `border ${borderColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`
      case 'filled': return `${backgroundColor} border-0 focus:ring-2 focus:ring-blue-500`
      case 'underlined': return 'border-0 border-b-2 border-gray-300 rounded-none focus:ring-0 focus:border-blue-500 bg-transparent'
      default: return `border ${borderColor} focus:ring-2 focus:ring-blue-500 focus:border-blue-500`
    }
  }

  const selectClasses = `
    ${width}
    ${margin}
    ${padding}
    ${getSizeClass(size)}
    ${getVariantClass(variant)}
    ${backgroundColor}
    ${textColor}
    ${borderRadius}
    ${fontSize}
    transition-colors duration-200
    focus:outline-none
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
  `.trim()

  return (
    <select
      name={name}
      required={required}
      disabled={disabled}
      multiple={multiple}
      className={selectClasses}
      defaultValue=""
    >
      <option value="" disabled className={placeholderColor}>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
