import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ColorPickerComponent } from "@/components/ui/color-picker"

interface CardPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function CardProperties({ elementProps, onPropChange }: CardPropertiesProps) {
  return (
    <Accordion type="multiple" defaultValue={["style", "spacing"]} className="w-full">
      {/* Style Section */}
      <AccordionItem value="style">
        <AccordionTrigger className="text-sm font-medium">Style</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="variant">Card Variant</Label>
            <Select value={elementProps?.variant || "default"} onValueChange={(value) => onPropChange('variant', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="outlined">Outlined</SelectItem>
                <SelectItem value="elevated">Elevated</SelectItem>
                <SelectItem value="flat">Flat</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="shadow">Shadow</Label>
            <Select value={elementProps?.shadow || "md"} onValueChange={(value) => onPropChange('shadow', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
                <SelectItem value="xl">Extra Large</SelectItem>
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
                <SelectItem value="16px">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <ColorPickerComponent
            value={elementProps?.backgroundColor || '#ffffff'}
            onChange={(value) => onPropChange('backgroundColor', value)}
            label="Background Color"
            placeholder="Select background color"
          />

          <ColorPickerComponent
            value={elementProps?.borderColor || '#e5e7eb'}
            onChange={(value) => onPropChange('borderColor', value)}
            label="Border Color"
            placeholder="Select border color"
          />
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
                <SelectItem value="32px">Extra Large (32px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Behavior Section */}
      <AccordionItem value="behavior">
        <AccordionTrigger className="text-sm font-medium">Behavior</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="hoverable">Hoverable</Label>
            <Select value={elementProps?.hoverable ? "true" : "false"} onValueChange={(value) => onPropChange('hoverable', value === "true")}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">No</SelectItem>
                <SelectItem value="true">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="clickable">Clickable</Label>
            <Select value={elementProps?.clickable ? "true" : "false"} onValueChange={(value) => onPropChange('clickable', value === "true")}>
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
    </Accordion>
  )
}
