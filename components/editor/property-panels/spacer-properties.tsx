import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SpacerPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function SpacerProperties({ elementProps, onPropChange }: SpacerPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="height">Height</Label>
        <Select value={elementProps?.height || 'h-8'} onValueChange={(value) => onPropChange('height', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h-1">Extra Small (4px)</SelectItem>
            <SelectItem value="h-2">Small (8px)</SelectItem>
            <SelectItem value="h-4">Medium (16px)</SelectItem>
            <SelectItem value="h-8">Large (32px)</SelectItem>
            <SelectItem value="h-16">Extra Large (64px)</SelectItem>
            <SelectItem value="h-32">XXL (128px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="backgroundColor">Background Color</Label>
        <Select value={elementProps?.backgroundColor || 'bg-transparent'} onValueChange={(value) => onPropChange('backgroundColor', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bg-transparent">Transparent</SelectItem>
            <SelectItem value="bg-gray-100">Light Gray</SelectItem>
            <SelectItem value="bg-gray-200">Gray</SelectItem>
            <SelectItem value="bg-blue-100">Light Blue</SelectItem>
            <SelectItem value="bg-green-100">Light Green</SelectItem>
            <SelectItem value="bg-red-100">Light Red</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Select value={elementProps?.margin || 'my-0'} onValueChange={(value) => onPropChange('margin', value)}>
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
