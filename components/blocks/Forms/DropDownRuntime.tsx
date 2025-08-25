
export interface DropDownRuntimeProps {
  placeholder?: string
  options?: { value: string; label: string }[]
  value?: string
  disabled?: boolean
  className?: string
}

export function DropDownRuntime({
  placeholder = "Select an option...",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ],
  value = "",
  disabled = false,
  className = ""
}: DropDownRuntimeProps) {
  return (
    <select
      value={value}
      disabled={disabled}
      className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 disabled:bg-gray-100 ${className}`}
    >
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
