
export interface SwitchRuntimeProps {
  checked?: boolean
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export function SwitchRuntime({
  checked = false,
  disabled = false,
  size = "md",
  className = ""
}: SwitchRuntimeProps) {
  const getSizeClass = () => {
    switch (size) {
      case "sm": return "h-4 w-7"
      case "lg": return "h-7 w-12"
      default: return "h-5 w-9"
    }
  }

  return (
    <label className={`inline-flex items-center ${className}`}>
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          className="sr-only"
        />
        <div className={`${getSizeClass()} bg-gray-200 rounded-full shadow-inner ${checked ? 'bg-blue-600' : ''} ${disabled ? 'opacity-50' : ''}`}>
          <div className={`dot absolute w-4 h-4 bg-white rounded-full shadow transition ${checked ? 'translate-x-4' : 'translate-x-0'} ${size === 'sm' ? 'w-3 h-3' : size === 'lg' ? 'w-6 h-6' : ''}`} />
        </div>
      </div>
    </label>
  )
}
