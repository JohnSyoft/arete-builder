import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface NavigationPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function NavigationProperties({ elementProps, onPropChange }: NavigationPropertiesProps) {
  return (
    <Accordion type="multiple" defaultValue={["layout", "style"]} className="w-full">
      {/* Layout Section */}
      <AccordionItem value="layout">
        <AccordionTrigger className="text-sm font-medium">Layout</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="orientation">Orientation</Label>
            <Select value={elementProps?.orientation || "horizontal"} onValueChange={(value) => onPropChange('orientation', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="horizontal">Horizontal</SelectItem>
                <SelectItem value="vertical">Vertical</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="alignment">Alignment</Label>
            <Select value={elementProps?.alignment || "start"} onValueChange={(value) => onPropChange('alignment', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="between">Space Between</SelectItem>
                <SelectItem value="around">Space Around</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="gap">Gap Between Items</Label>
            <Select value={elementProps?.gap || "16px"} onValueChange={(value) => onPropChange('gap', value)}>
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
            <Label htmlFor="wrap">Wrap Items</Label>
            <Select value={elementProps?.wrap ? "true" : "false"} onValueChange={(value) => onPropChange('wrap', value === "true")}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">No Wrap</SelectItem>
                <SelectItem value="true">Wrap</SelectItem>
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
            <Label htmlFor="variant">Navigation Style</Label>
            <Select value={elementProps?.variant || "default"} onValueChange={(value) => onPropChange('variant', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="pills">Pills</SelectItem>
                <SelectItem value="tabs">Tabs</SelectItem>
                <SelectItem value="breadcrumb">Breadcrumb</SelectItem>
                <SelectItem value="sidebar">Sidebar</SelectItem>
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
        </AccordionContent>
      </AccordionItem>

      {/* Link Styles Section */}
      <AccordionItem value="links">
        <AccordionTrigger className="text-sm font-medium">Link Styles</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="linkColor">Link Color</Label>
            <Input
              id="linkColor"
              type="color"
              value={elementProps?.linkColor || '#3b82f6'}
              onChange={(e) => onPropChange('linkColor', e.target.value)}
              className="mt-1 h-10"
            />
          </div>

          <div>
            <Label htmlFor="activeLinkColor">Active Link Color</Label>
            <Input
              id="activeLinkColor"
              type="color"
              value={elementProps?.activeLinkColor || '#1d4ed8'}
              onChange={(e) => onPropChange('activeLinkColor', e.target.value)}
              className="mt-1 h-10"
            />
          </div>

          <div>
            <Label htmlFor="hoverLinkColor">Hover Link Color</Label>
            <Input
              id="hoverLinkColor"
              type="color"
              value={elementProps?.hoverLinkColor || '#2563eb'}
              onChange={(e) => onPropChange('hoverLinkColor', e.target.value)}
              className="mt-1 h-10"
            />
          </div>

          <div>
            <Label htmlFor="linkWeight">Link Font Weight</Label>
            <Select value={elementProps?.linkWeight || "medium"} onValueChange={(value) => onPropChange('linkWeight', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="semibold">Semi Bold</SelectItem>
                <SelectItem value="bold">Bold</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="underline">Underline Links</Label>
            <Select value={elementProps?.underline || "hover"} onValueChange={(value) => onPropChange('underline', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Never</SelectItem>
                <SelectItem value="hover">On Hover</SelectItem>
                <SelectItem value="always">Always</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Spacing Section */}
      <AccordionItem value="spacing">
        <AccordionTrigger className="text-sm font-medium">Spacing</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="padding">Padding</Label>
            <Select value={elementProps?.padding || "12px"} onValueChange={(value) => onPropChange('padding', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8px">Small (8px)</SelectItem>
                <SelectItem value="12px">Medium (12px)</SelectItem>
                <SelectItem value="16px">Large (16px)</SelectItem>
                <SelectItem value="24px">Extra Large (24px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="linkPadding">Link Padding</Label>
            <Select value={elementProps?.linkPadding || "8px"} onValueChange={(value) => onPropChange('linkPadding', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="4px">Small (4px)</SelectItem>
                <SelectItem value="8px">Medium (8px)</SelectItem>
                <SelectItem value="12px">Large (12px)</SelectItem>
                <SelectItem value="16px">Extra Large (16px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
