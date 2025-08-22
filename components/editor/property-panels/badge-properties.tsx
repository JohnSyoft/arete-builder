import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BadgePropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function BadgeProperties({ elementProps, onPropChange }: BadgePropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Badge Text</Label>
        <Input
          id="text"
          value={elementProps?.text || ''}
          onChange={(e) => onPropChange('text', e.target.value)}
          placeholder="Enter badge text"
          className="mt-1"
        />
      </div>
      
      <div>
        <Label htmlFor="variant">Variant</Label>
        <Select value={elementProps?.variant || 'default'} onValueChange={(value) => onPropChange('variant', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="destructive">Destructive</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="className">Custom Classes</Label>
        <Input
          id="className"
          value={elementProps?.className || ''}
          onChange={(e) => onPropChange('className', e.target.value)}
          placeholder="e.g., bg-blue-100 text-blue-800"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Select value={elementProps?.margin || 'my-1'} onValueChange={(value) => onPropChange('margin', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">None</SelectItem>
            <SelectItem value="m-1">Small (m-1)</SelectItem>
            <SelectItem value="m-2">Medium (m-2)</SelectItem>
            <SelectItem value="m-4">Large (m-4)</SelectItem>
            <SelectItem value="my-1">Vertical Small (my-1)</SelectItem>
            <SelectItem value="my-2">Vertical Medium (my-2)</SelectItem>
            <SelectItem value="my-4">Vertical Large (my-4)</SelectItem>
            <SelectItem value="mx-1">Horizontal Small (mx-1)</SelectItem>
            <SelectItem value="mx-2">Horizontal Medium (mx-2)</SelectItem>
            <SelectItem value="mx-4">Horizontal Large (mx-4)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
