import React, { useRef } from "react"
import { useNode, useEditor } from "@craftjs/core"
import { FloatingToolbar } from "@/components/editor/floating-toolbar"
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store"
import { RotateCcw } from "lucide-react"

export interface SignatureProps {
  width?: number
  height?: number
  strokeColor?: string
  strokeWidth?: number
  disabled?: boolean
  placeholder?: string
  className?: string
}

export function Signature({
  width = 400,
  height = 200,
  strokeColor = "#000000",
  strokeWidth = 2,
  disabled = false,
  placeholder = "Sign here...",
  className = ""
}: SignatureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = React.useState(false)

  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id
  }))

  const { actions } = useEditor()
  const { openPanel } = usePropertiesPanelStore()

  const handleShowProperties = () => {
    openPanel('signature', {
      width,
      height,
      strokeColor,
      strokeWidth,
      disabled,
      placeholder
    }, id, (newProps) => {
      Object.keys(newProps).forEach(key => {
        setProp((props: SignatureProps) => {
          (props as any)[key] = newProps[key]
        })
      })
    })
  }

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (disabled) return
    setIsDrawing(true)
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    ctx.beginPath()
    ctx.moveTo(x, y)
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || disabled) return
    
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    ctx.lineWidth = strokeWidth
    ctx.strokeStyle = strokeColor
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearSignature = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref))
        }
      }}
      className={`relative ${className} ${
        selected ? "ring-2 ring-blue-500 rounded" : ""
      } ${hovered ? "ring-1 ring-blue-300 rounded" : ""}`}
    >
      <div className="border border-gray-300 rounded-lg p-4 bg-white">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">{placeholder}</span>
          <button
            onClick={clearSignature}
            disabled={disabled}
            className="p-1 text-gray-500 hover:text-gray-700 disabled:opacity-50"
            title="Clear signature"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
        
        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className={`border border-gray-200 rounded cursor-crosshair ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>

      {(selected || hovered) && (
        <div className="absolute -top-8 left-0 z-50">
          <FloatingToolbar
            elementType="input"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-purple-500 text-white text-xs px-2 py-1 rounded z-10">
          Signature
        </div>
      )}
    </div>
  )
}

Signature.craft = {
  displayName: "Signature",
  props: {
    width: 400,
    height: 200,
    strokeColor: "#000000",
    strokeWidth: 2,
    disabled: false,
    placeholder: "Sign here...",
    className: ""
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  }
}
