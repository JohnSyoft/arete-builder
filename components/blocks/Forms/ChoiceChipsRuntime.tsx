import { X } from "lucide-react";

export interface ChoiceChipsRuntimeProps {
  options?: { value: string; label: string }[]
  selectedValues?: string[]
  multiSelect?: boolean
  disabled?: boolean
  variant?: "default" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function ChoiceChipsRuntime({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
    { value: "option4", label: "Option 4" }
  ],
  selectedValues = [],
  multiSelect = true,
  disabled = false,
  variant = "default",
  size = "md",
  className = ""
}: ChoiceChipsRuntimeProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm": return "px-2 py-1 text-xs"
      case "lg": return "px-4 py-2 text-base"
      default: return "px-3 py-1.5 text-sm"
    }
  }

  const getVariantClasses = (isSelected: boolean) => {
    const base = "inline-flex items-center rounded-full transition-colors cursor-pointer"
    
    if (isSelected) {
      switch (variant) {
        case "outline":
          return `${base} border-2 border-blue-500 bg-blue-50 text-blue-700`
        default:
          return `${base} bg-blue-500 text-white`
      }
    } else {
      switch (variant) {
        case "outline":
          return `${base} border border-gray-300 text-gray-700 hover:bg-gray-50`
        default:
          return `${base} bg-gray-200 text-gray-700 hover:bg-gray-300`
      }
    }
  }

  return (
    <div className={`${className}`}>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = selectedValues.includes(option.value)
          return (
            <div
              key={option.value}
              className={`${getVariantClasses(isSelected)} ${getSizeClasses()} ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span>{option.label}</span>
              {isSelected && multiSelect && (
                <X className="w-3 h-3 ml-1 hover:bg-white/20 rounded-full" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
