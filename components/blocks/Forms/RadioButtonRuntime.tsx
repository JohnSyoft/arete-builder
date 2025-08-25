
export interface RadioButtonRuntimeProps {
  name?: string
  options?: { value: string; label: string }[]
  selectedValue?: string
  disabled?: boolean
  direction?: "horizontal" | "vertical"
  className?: string
}

export function RadioButtonRuntime({
  name = "radio-group",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ],
  selectedValue = "",
  disabled = false,
  direction = "vertical",
  className = ""
}: RadioButtonRuntimeProps) {
  return (
    <div className={`${className}`}>
      <div className={`space-${direction === "horizontal" ? "x" : "y"}-3 ${direction === "horizontal" ? "flex" : "block"}`}>
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selectedValue === option.value}
              disabled={disabled}
              className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
