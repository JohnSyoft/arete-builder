import React from "react"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/css"

interface ColorPickerComponentProps {
  value: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
}

export function ColorPickerComponent({ 
  value, 
  onChange, 
  label, 
  placeholder = "Select color" 
}: ColorPickerComponentProps) {
  const [color, setColor] = useColor(value || "#000000")

  const handleColorChange = (newColor: any) => {
    setColor(newColor)
    onChange(newColor.hex)
  }

  return (
    <div>
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start mt-1"
            style={{ backgroundColor: value || undefined }}
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded border border-gray-300"
                style={{ backgroundColor: value || '#ffffff' }}
              />
              <span className="text-sm">
                {value || placeholder}
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-3">
            <ColorPicker 
              color={color} 
              onChange={handleColorChange}
              hideInput={["rgb", "hsv"]}
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onChange('')}
                className="flex-1"
              >
                Clear
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onChange('transparent')}
                className="flex-1"
              >
                Transparent
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

// Gradient Color Picker Component
interface GradientColorPickerProps {
  value: string
  onChange: (value: string) => void
  label: string
  placeholder?: string
}

export function GradientColorPicker({ 
  value, 
  onChange, 
  label, 
  placeholder = "Select gradient colors" 
}: GradientColorPickerProps) {
  // Parse existing gradient colors or use defaults
  const getInitialColors = () => {
    if (value) {
      const colors = value.split(',').map(c => c.trim())
      return [
        colors[0] || "#3b82f6",
        colors[1] || "#8b5cf6", 
        colors[2] || "#ec4899"
      ]
    }
    return ["#3b82f6", "#8b5cf6", "#ec4899"]
  }

  const initialColors = getInitialColors()
  const [color1, setColor1] = useColor(initialColors[0])
  const [color2, setColor2] = useColor(initialColors[1])
  const [color3, setColor3] = useColor(initialColors[2])

  const handleColorChange = (color: any, index: number) => {
    const colors = value ? value.split(',').map(c => c.trim()) : ['#3b82f6', '#8b5cf6', '#ec4899']
    colors[index] = color.hex
    onChange(colors.join(', '))
  }

  return (
    <div>
      <Label>{label}</Label>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start mt-1"
          >
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div 
                  className="w-3 h-3 rounded border border-gray-300"
                  style={{ backgroundColor: color1.hex }}
                />
                <div 
                  className="w-3 h-3 rounded border border-gray-300"
                  style={{ backgroundColor: color2.hex }}
                />
                <div 
                  className="w-3 h-3 rounded border border-gray-300"
                  style={{ backgroundColor: color3.hex }}
                />
              </div>
              <span className="text-sm">
                {value || placeholder}
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="space-y-4">
            <div>
              <Label className="text-sm font-medium">Color 1</Label>
              <ColorPicker 
                color={color1} 
                onChange={(color) => handleColorChange(color, 0)}
                hideInput={["rgb", "hsv"]}
                height={120}
              />
            </div>
            <div>
              <Label className="text-sm font-medium">Color 2</Label>
              <ColorPicker 
                color={color2} 
                onChange={(color) => handleColorChange(color, 1)}
                hideInput={["rgb", "hsv"]}
                height={120}
              />
            </div>
            <div>
              <Label className="text-sm font-medium">Color 3 (Optional)</Label>
              <ColorPicker 
                color={color3} 
                onChange={(color) => handleColorChange(color, 2)}
                hideInput={["rgb", "hsv"]}
                height={120}
              />
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => onChange('')}
                className="flex-1"
              >
                Clear
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => onChange('transparent')}
                className="flex-1"
              >
                Transparent
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
