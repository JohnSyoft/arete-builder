import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface AlertPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function AlertProperties({ elementProps, onPropChange }: AlertPropertiesProps) {
  return (
    <Accordion type="multiple" defaultValue={["content", "style"]} className="w-full">
      {/* Content Section */}
      <AccordionItem value="content">
        <AccordionTrigger className="text-sm font-medium">Content</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="title">Alert Title</Label>
            <Input
              id="title"
              value={elementProps?.title || 'Alert Title'}
              onChange={(e) => onPropChange('title', e.target.value)}
              placeholder="Enter alert title"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="message">Alert Message</Label>
            <Input
              id="message"
              value={elementProps?.message || 'This is an alert message.'}
              onChange={(e) => onPropChange('message', e.target.value)}
              placeholder="Enter alert message"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="showIcon">Show Icon</Label>
            <Select value={elementProps?.showIcon ? "true" : "false"} onValueChange={(value) => onPropChange('showIcon', value === "true")}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Yes</SelectItem>
                <SelectItem value="false">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="dismissible">Dismissible</Label>
            <Select value={elementProps?.dismissible ? "true" : "false"} onValueChange={(value) => onPropChange('dismissible', value === "true")}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">No</SelectItem>
                <SelectItem value="true">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Style Section */}
      <AccordionItem value="style">
        <AccordionTrigger className="text-sm font-medium">Style</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="variant">Alert Type</Label>
            <Select value={elementProps?.variant || "info"} onValueChange={(value) => onPropChange('variant', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="default">Default</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="size">Size</Label>
            <Select value={elementProps?.size || "medium"} onValueChange={(value) => onPropChange('size', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="borderRadius">Border Radius</Label>
            <Select value={elementProps?.borderRadius || "8px"} onValueChange={(value) => onPropChange('borderRadius', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0px">None</SelectItem>
                <SelectItem value="4px">Small</SelectItem>
                <SelectItem value="8px">Medium</SelectItem>
                <SelectItem value="12px">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="shadow">Shadow</Label>
            <Select value={elementProps?.shadow || "none"} onValueChange={(value) => onPropChange('shadow', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Colors Section */}
      <AccordionItem value="colors">
        <AccordionTrigger className="text-sm font-medium">Custom Colors</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="backgroundColor">Background Color</Label>
            <Input
              id="backgroundColor"
              type="color"
              value={elementProps?.backgroundColor || '#f3f4f6'}
              onChange={(e) => onPropChange('backgroundColor', e.target.value)}
              className="mt-1 h-10"
            />
          </div>

          <div>
            <Label htmlFor="textColor">Text Color</Label>
            <Input
              id="textColor"
              type="color"
              value={elementProps?.textColor || '#374151'}
              onChange={(e) => onPropChange('textColor', e.target.value)}
              className="mt-1 h-10"
            />
          </div>

          <div>
            <Label htmlFor="borderColor">Border Color</Label>
            <Input
              id="borderColor"
              type="color"
              value={elementProps?.borderColor || '#d1d5db'}
              onChange={(e) => onPropChange('borderColor', e.target.value)}
              className="mt-1 h-10"
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Spacing Section */}
      <AccordionItem value="spacing">
        <AccordionTrigger className="text-sm font-medium">Spacing</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="padding">Padding</Label>
            <Select value={elementProps?.padding || "16px"} onValueChange={(value) => onPropChange('padding', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8px">Small (8px)</SelectItem>
                <SelectItem value="16px">Medium (16px)</SelectItem>
                <SelectItem value="24px">Large (24px)</SelectItem>
                <SelectItem value="32px">Extra Large (32px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="margin">Margin</Label>
            <Select value={elementProps?.margin || "8px"} onValueChange={(value) => onPropChange('margin', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0px">None</SelectItem>
                <SelectItem value="8px">Small (8px)</SelectItem>
                <SelectItem value="16px">Medium (16px)</SelectItem>
                <SelectItem value="24px">Large (24px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
