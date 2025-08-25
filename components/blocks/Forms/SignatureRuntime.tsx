import { RotateCcw } from "lucide-react"

export interface SignatureRuntimeProps {
  width?: number
  height?: number
  strokeColor?: string
  strokeWidth?: number
  disabled?: boolean
  placeholder?: string
  className?: string
}

export function SignatureRuntime({
  width = 400,
  height = 200,
  strokeColor = "#000000",
  strokeWidth = 2,
  disabled = false,
  placeholder = "Sign here...",
  className = ""
}: SignatureRuntimeProps) {
  return (
    <div className={`${className}`}>
      <div className="border border-gray-300 rounded-lg p-4 bg-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{placeholder}</span>
          <button
            disabled={disabled}
            className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            title="Clear signature"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
        
        <canvas
          width={width}
          height={height}
          className={`border border-gray-200 rounded cursor-crosshair ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        />
      </div>
    </div>
  )
}
