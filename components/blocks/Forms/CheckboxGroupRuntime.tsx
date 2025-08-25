
export interface CheckboxGroupRuntimeProps {
  label?: string
  options?: { value: string; label: string }[]
  selectedValues?: string[]
  disabled?: boolean
  direction?: "horizontal" | "vertical"
  className?: string
}

export function CheckboxGroupRuntime({
  label = "Select options:",
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" }
  ],
  selectedValues = [],
  disabled = false,
  direction = "vertical",
  className = ""
}: CheckboxGroupRuntimeProps) {
  return (
    <div className={`${className}`}>
      <fieldset className="p-4">
        <legend className="text-sm font-medium text-gray-900 mb-3">{label}</legend>
        <div className={`space-${direction === "horizontal" ? "x" : "y"}-3 ${direction === "horizontal" ? "flex flex-wrap" : "block"}`}>
          {options.map((option) => (
            <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                value={option.value}
                checked={selectedValues.includes(option.value)}
                disabled={disabled}
                readOnly
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
