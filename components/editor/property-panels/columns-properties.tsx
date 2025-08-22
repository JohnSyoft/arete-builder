import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ColumnsPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function ColumnsProperties({ elementProps, onPropChange }: ColumnsPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="columnCount">Number of Columns</Label>
        <Select value={elementProps?.columnCount?.toString() || '2'} onValueChange={(value) => onPropChange('columnCount', parseInt(value))}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1 Column</SelectItem>
            <SelectItem value="2">2 Columns</SelectItem>
            <SelectItem value="3">3 Columns</SelectItem>
            <SelectItem value="4">4 Columns</SelectItem>
            <SelectItem value="5">5 Columns</SelectItem>
            <SelectItem value="6">6 Columns</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="gap">Gap Between Columns</Label>
        <Select value={elementProps?.gap || 'gap-4'} onValueChange={(value) => onPropChange('gap', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gap-0">No Gap</SelectItem>
            <SelectItem value="gap-2">Small (8px)</SelectItem>
            <SelectItem value="gap-4">Medium (16px)</SelectItem>
            <SelectItem value="gap-6">Large (24px)</SelectItem>
            <SelectItem value="gap-8">Extra Large (32px)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="alignment">Column Alignment</Label>
        <Select value={elementProps?.alignment || 'stretch'} onValueChange={(value) => onPropChange('alignment', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="start">Top</SelectItem>
            <SelectItem value="center">Center</SelectItem>
            <SelectItem value="end">Bottom</SelectItem>
            <SelectItem value="stretch">Stretch</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="minHeight">Minimum Height</Label>
        <Select value={elementProps?.minHeight || 'min-h-[200px]'} onValueChange={(value) => onPropChange('minHeight', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="min-h-[100px]">Small (100px)</SelectItem>
            <SelectItem value="min-h-[200px]">Medium (200px)</SelectItem>
            <SelectItem value="min-h-[300px]">Large (300px)</SelectItem>
            <SelectItem value="min-h-[400px]">Extra Large (400px)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
