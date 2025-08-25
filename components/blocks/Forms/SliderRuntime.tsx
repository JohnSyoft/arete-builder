
export interface SliderRuntimeProps {
  value?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  className?: string
}

export function SliderRuntime({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  className = ""
}: SliderRuntimeProps) {
  return (
    <div className={`p-4 ${className}`}>
      <div className="w-full">
        <input
          type="range"
          value={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{min}</span>
          <span>{value}</span>
          <span>{max}</span>
        </div>
      </div>
    </div>
  )
}
