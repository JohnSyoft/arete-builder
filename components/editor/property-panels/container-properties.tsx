import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ContainerPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function ContainerProperties({ elementProps, onPropChange }: ContainerPropertiesProps) {
  return (
    <div className="space-y-4">
      {/* Background Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Background</h4>
        
        <div>
          <Label htmlFor="backgroundColor">Background Color</Label>
          <Input
            id="backgroundColor"
            type="color"
            value={elementProps?.backgroundColor || '#ffffff'}
            onChange={(e) => onPropChange('backgroundColor', e.target.value)}
            className="mt-1 h-10"
          />
        </div>

        <div>
          <Label htmlFor="backgroundImage">Background Image URL</Label>
          <Input
            id="backgroundImage"
            value={elementProps?.backgroundImage || ''}
            onChange={(e) => onPropChange('backgroundImage', e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="gradient">Gradient (CSS)</Label>
          <Input
            id="gradient"
            value={elementProps?.gradient || ''}
            onChange={(e) => onPropChange('gradient', e.target.value)}
            placeholder="linear-gradient(45deg, #ff0000, #0000ff)"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="backgroundSize">Background Size</Label>
          <Select value={elementProps?.backgroundSize || 'cover'} onValueChange={(value) => onPropChange('backgroundSize', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cover">Cover</SelectItem>
              <SelectItem value="contain">Contain</SelectItem>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="100% 100%">Stretch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="backgroundPosition">Background Position</Label>
          <Select value={elementProps?.backgroundPosition || 'center'} onValueChange={(value) => onPropChange('backgroundPosition', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Border Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Border</h4>
        
        <div>
          <Label htmlFor="borderWidth">Border Width</Label>
          <Select value={elementProps?.borderWidth || '0px'} onValueChange={(value) => onPropChange('borderWidth', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="1px">Thin (1px)</SelectItem>
              <SelectItem value="2px">Medium (2px)</SelectItem>
              <SelectItem value="4px">Thick (4px)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="borderStyle">Border Style</Label>
          <Select value={elementProps?.borderStyle || 'solid'} onValueChange={(value) => onPropChange('borderStyle', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solid">Solid</SelectItem>
              <SelectItem value="dashed">Dashed</SelectItem>
              <SelectItem value="dotted">Dotted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="borderColor">Border Color</Label>
          <Input
            id="borderColor"
            type="color"
            value={elementProps?.borderColor || '#e5e7eb'}
            onChange={(e) => onPropChange('borderColor', e.target.value)}
            className="mt-1 h-10"
          />
        </div>

        <div>
          <Label htmlFor="borderRadius">Border Radius</Label>
          <Select value={elementProps?.borderRadius || '0px'} onValueChange={(value) => onPropChange('borderRadius', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="4px">Small (4px)</SelectItem>
              <SelectItem value="8px">Medium (8px)</SelectItem>
              <SelectItem value="16px">Large (16px)</SelectItem>
              <SelectItem value="50%">Circle</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Spacing Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Spacing</h4>
        
        <div>
          <Label htmlFor="padding">Padding</Label>
          <Select value={elementProps?.padding || '16px'} onValueChange={(value) => onPropChange('padding', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="8px">Small (8px)</SelectItem>
              <SelectItem value="16px">Medium (16px)</SelectItem>
              <SelectItem value="24px">Large (24px)</SelectItem>
              <SelectItem value="32px">Extra Large (32px)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="margin">Margin</Label>
          <Select value={elementProps?.margin || '0px'} onValueChange={(value) => onPropChange('margin', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="8px">Small (8px)</SelectItem>
              <SelectItem value="16px">Medium (16px)</SelectItem>
              <SelectItem value="24px">Large (24px)</SelectItem>
              <SelectItem value="32px">Extra Large (32px)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Size Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Size</h4>
        
        <div>
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            value={elementProps?.width || '100%'}
            onChange={(e) => onPropChange('width', e.target.value)}
            placeholder="100%, 300px, auto"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="minHeight">Min Height</Label>
          <Input
            id="minHeight"
            value={elementProps?.minHeight || '200px'}
            onChange={(e) => onPropChange('minHeight', e.target.value)}
            placeholder="200px, auto, 500px"
            className="mt-1"
          />
        </div>
      </div>
    </div>
  )
}
