import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ButtonPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function ButtonProperties({ elementProps, onPropChange }: ButtonPropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="buttonText">Button Text</Label>
        <Input
          id="buttonText"
          value={elementProps?.text || ''}
          onChange={(e) => onPropChange('text', e.target.value)}
          placeholder="Button text"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="variant">Button Style</Label>
        <Select value={elementProps?.variant || 'default'} onValueChange={(value) => onPropChange('variant', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="outline">Outline</SelectItem>
            <SelectItem value="secondary">Secondary</SelectItem>
            <SelectItem value="ghost">Ghost</SelectItem>
            <SelectItem value="link">Link</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="size">Button Size</Label>
        <Select value={elementProps?.size || 'default'} onValueChange={(value) => onPropChange('size', value)}>
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="href">Link URL</Label>
        <Input
          id="href"
          value={elementProps?.href || ''}
          onChange={(e) => onPropChange('href', e.target.value)}
          placeholder="https://example.com"
          className="mt-1"
        />
      </div>
    </div>
  )
}
