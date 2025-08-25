
export interface PinCodeRuntimeProps {
  length?: number
  value?: string
  disabled?: boolean
  masked?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function PinCodeRuntime({
  length = 4,
  value = "",
  disabled = false,
  masked = false,
  size = "md",
  className = ""
}: PinCodeRuntimeProps) {
  const getSizeClasses = () => {
    switch (size) {
      case "sm": return "w-8 h-8 text-sm"
      case "lg": return "w-16 h-16 text-xl"
      default: return "w-12 h-12 text-base"
    }
  }

  return (
    <div className={`${className}`}>
      <div className="flex space-x-2">
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            type={masked ? "password" : "text"}
            value={value[index] || ''}
            disabled={disabled}
            className={`${getSizeClasses()} border border-gray-300 rounded text-center focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
              disabled ? "bg-gray-100 cursor-not-allowed" : ""
            }`}
            maxLength={1}
            readOnly
          />
        ))}
      </div>
    </div>
  )
}
