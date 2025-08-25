import { Minus, Plus } from "lucide-react"

export interface CounterButtonRuntimeProps {
  value?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline"
  className?: string
}

export function CounterButtonRuntime({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  size = "md",
  variant = "default",
  className = ""
}: CounterButtonRuntimeProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm": return { button: "w-6 h-6 text-xs", text: "text-sm px-2" }
      case "lg": return { button: "w-10 h-10 text-lg", text: "text-lg px-4" }
      default: return { button: "w-8 h-8 text-sm", text: "text-base px-3" }
    }
  }

  const getVariantClasses = () => {
    const base = "flex items-center justify-center rounded transition-colors"
    switch (variant) {
      case "outline":
        return `${base} border border-gray-300 text-gray-700 hover:bg-gray-50`
      default:
        return `${base} bg-blue-500 text-white hover:bg-blue-600`
    }
  }

  const sizeClasses = getSizeClasses()
  const variantClasses = getVariantClasses()

  return (
    <div className={`inline-flex items-center ${className}`}>
      <button
        className={`${variantClasses} ${sizeClasses.button} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={disabled || value <= min}
      >
        <Minus className="w-3 h-3" />
      </button>
      
      <span className={`${sizeClasses.text} min-w-[3rem] text-center`}>
        {value}
      </span>
      
      <button
        className={`${variantClasses} ${sizeClasses.button} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        disabled={disabled || value >= max}
      >
        <Plus className="w-3 h-3" />
      </button>
    </div>
  )
}
