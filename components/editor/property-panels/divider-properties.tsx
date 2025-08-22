import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DividerPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function DividerProperties({ elementProps, onPropChange }: DividerPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="color">Color</Label>
        <Select value={elementProps?.color || 'border-gray-200'} onValueChange={(value) => onPropChange('color', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="border-gray-200">Light Gray</SelectItem>
            <SelectItem value="border-gray-400">Gray</SelectItem>
            <SelectItem value="border-gray-600">Dark Gray</SelectItem>
            <SelectItem value="border-blue-300">Blue</SelectItem>
            <SelectItem value="border-green-300">Green</SelectItem>
            <SelectItem value="border-red-300">Red</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="thickness">Thickness</Label>
        <Select value={elementProps?.thickness || 'border-t'} onValueChange={(value) => onPropChange('thickness', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="border-t">Thin (1px)</SelectItem>
            <SelectItem value="border-t-2">Medium (2px)</SelectItem>
            <SelectItem value="border-t-4">Thick (4px)</SelectItem>
            <SelectItem value="border-t-8">Extra Thick (8px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="style">Style</Label>
        <Select value={elementProps?.style || 'border-solid'} onValueChange={(value) => onPropChange('style', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="border-solid">Solid</SelectItem>
            <SelectItem value="border-dashed">Dashed</SelectItem>
            <SelectItem value="border-dotted">Dotted</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Select value={elementProps?.margin || 'my-4'} onValueChange={(value) => onPropChange('margin', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="my-0">None</SelectItem>
            <SelectItem value="my-1">Small</SelectItem>
            <SelectItem value="my-2">Medium</SelectItem>
            <SelectItem value="my-4">Large</SelectItem>
            <SelectItem value="my-8">Extra Large</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
