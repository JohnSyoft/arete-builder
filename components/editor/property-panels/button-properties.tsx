import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

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
        <Label htmlFor="href">Link URL</Label>
        <Input
          id="href"
          value={elementProps?.href || ''}
          onChange={(e) => onPropChange('href', e.target.value)}
          placeholder="https://example.com"
          className="mt-1"
        />
      </div>

      <Accordion type="multiple" className="w-full">
        {/* Style Section */}
        <AccordionItem value="style">
          <AccordionTrigger className="text-sm font-medium">Button Style</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="variant">Button Variant</Label>
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
                  <SelectItem value="xl">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="width">Width</Label>
              <Select value={elementProps?.width || 'auto'} onValueChange={(value) => onPropChange('width', value === 'auto' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Auto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="w-full">Full Width</SelectItem>
                  <SelectItem value="w-fit">Fit Content</SelectItem>
                  <SelectItem value="w-32">Fixed 128px</SelectItem>
                  <SelectItem value="w-48">Fixed 192px</SelectItem>
                  <SelectItem value="w-64">Fixed 256px</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Colors Section */}
        <AccordionItem value="colors">
          <AccordionTrigger className="text-sm font-medium">Colors</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="backgroundColor">Background Color</Label>
              <Select value={elementProps?.backgroundColor || 'default'} onValueChange={(value) => onPropChange('backgroundColor', value === 'default' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="#ffffff">White</SelectItem>
                  <SelectItem value="#000000">Black</SelectItem>
                  <SelectItem value="#3b82f6">Blue</SelectItem>
                  <SelectItem value="#2563eb">Blue 600</SelectItem>
                  <SelectItem value="#1d4ed8">Blue 700</SelectItem>
                  <SelectItem value="#ef4444">Red</SelectItem>
                  <SelectItem value="#dc2626">Red 600</SelectItem>
                  <SelectItem value="#22c55e">Green</SelectItem>
                  <SelectItem value="#16a34a">Green 600</SelectItem>
                  <SelectItem value="#f59e0b">Yellow</SelectItem>
                  <SelectItem value="#d97706">Orange</SelectItem>
                  <SelectItem value="#8b5cf6">Purple</SelectItem>
                  <SelectItem value="#6366f1">Indigo</SelectItem>
                  <SelectItem value="#06b6d4">Cyan</SelectItem>
                  <SelectItem value="#6b7280">Gray</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="textColor">Text Color</Label>
              <Select value={elementProps?.textColor || 'default'} onValueChange={(value) => onPropChange('textColor', value === 'default' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="#ffffff">White</SelectItem>
                  <SelectItem value="#000000">Black</SelectItem>
                  <SelectItem value="#374151">Gray 700</SelectItem>
                  <SelectItem value="#6b7280">Gray 500</SelectItem>
                  <SelectItem value="#3b82f6">Blue</SelectItem>
                  <SelectItem value="#2563eb">Blue 600</SelectItem>
                  <SelectItem value="#ef4444">Red</SelectItem>
                  <SelectItem value="#22c55e">Green</SelectItem>
                  <SelectItem value="#f59e0b">Yellow</SelectItem>
                  <SelectItem value="#8b5cf6">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderColor">Border Color</Label>
              <Select value={elementProps?.borderColor || 'default'} onValueChange={(value) => onPropChange('borderColor', value === 'default' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="#e5e7eb">Gray 200</SelectItem>
                  <SelectItem value="#d1d5db">Gray 300</SelectItem>
                  <SelectItem value="#9ca3af">Gray 400</SelectItem>
                  <SelectItem value="#3b82f6">Blue</SelectItem>
                  <SelectItem value="#2563eb">Blue 600</SelectItem>
                  <SelectItem value="#ef4444">Red</SelectItem>
                  <SelectItem value="#22c55e">Green</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Spacing Section */}
        <AccordionItem value="spacing">
          <AccordionTrigger className="text-sm font-medium">Spacing</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="margin">Margin</Label>
              <Select value={elementProps?.margin || 'none'} onValueChange={(value) => onPropChange('margin', value === 'none' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="m-1">All Sides (4px)</SelectItem>
                  <SelectItem value="m-2">All Sides (8px)</SelectItem>
                  <SelectItem value="m-4">All Sides (16px)</SelectItem>
                  <SelectItem value="m-6">All Sides (24px)</SelectItem>
                  <SelectItem value="my-2">Top & Bottom (8px)</SelectItem>
                  <SelectItem value="my-4">Top & Bottom (16px)</SelectItem>
                  <SelectItem value="mx-2">Left & Right (8px)</SelectItem>
                  <SelectItem value="mx-4">Left & Right (16px)</SelectItem>
                  <SelectItem value="mx-auto">Horizontal Center</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="padding">Padding</Label>
              <Select value={elementProps?.padding || 'default'} onValueChange={(value) => onPropChange('padding', value === 'default' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="px-2 py-1">Small (8px x 4px)</SelectItem>
                  <SelectItem value="px-3 py-2">Medium (12px x 8px)</SelectItem>
                  <SelectItem value="px-4 py-2">Default (16px x 8px)</SelectItem>
                  <SelectItem value="px-6 py-3">Large (24px x 12px)</SelectItem>
                  <SelectItem value="px-8 py-4">Extra Large (32px x 16px)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Effects Section */}
        <AccordionItem value="effects">
          <AccordionTrigger className="text-sm font-medium">Effects</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="borderRadius">Border Radius</Label>
              <Select value={elementProps?.borderRadius || 'default'} onValueChange={(value) => onPropChange('borderRadius', value === 'default' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="0px">None</SelectItem>
                  <SelectItem value="2px">Small (2px)</SelectItem>
                  <SelectItem value="4px">Default (4px)</SelectItem>
                  <SelectItem value="6px">Medium (6px)</SelectItem>
                  <SelectItem value="8px">Large (8px)</SelectItem>
                  <SelectItem value="12px">Extra Large (12px)</SelectItem>
                  <SelectItem value="16px">2X Large (16px)</SelectItem>
                  <SelectItem value="9999px">Full Rounded</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="boxShadow">Shadow</Label>
              <Select value={elementProps?.boxShadow || 'none'} onValueChange={(value) => onPropChange('boxShadow', value === 'none' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="0 1px 2px 0 rgb(0 0 0 / 0.05)">Small</SelectItem>
                  <SelectItem value="0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)">Default</SelectItem>
                  <SelectItem value="0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)">Medium</SelectItem>
                  <SelectItem value="0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)">Large</SelectItem>
                  <SelectItem value="0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="opacity">Opacity</Label>
              <Select value={elementProps?.opacity || 'full'} onValueChange={(value) => onPropChange('opacity', value === 'full' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="100%" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">100%</SelectItem>
                  <SelectItem value="0.95">95%</SelectItem>
                  <SelectItem value="0.9">90%</SelectItem>
                  <SelectItem value="0.75">75%</SelectItem>
                  <SelectItem value="0.5">50%</SelectItem>
                  <SelectItem value="0.25">25%</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Behavior Section */}
        <AccordionItem value="behavior">
          <AccordionTrigger className="text-sm font-medium">Behavior</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="target">Link Target</Label>
              <Select value={elementProps?.target || 'same'} onValueChange={(value) => onPropChange('target', value === 'same' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Same Window" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="same">Same Window</SelectItem>
                  <SelectItem value="_blank">New Window/Tab</SelectItem>
                  <SelectItem value="_parent">Parent Frame</SelectItem>
                  <SelectItem value="_top">Top Frame</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="rel">Link Relationship</Label>
              <Select value={elementProps?.rel || 'none'} onValueChange={(value) => onPropChange('rel', value === 'none' ? '' : value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="nofollow">No Follow</SelectItem>
                  <SelectItem value="noopener">No Opener</SelectItem>
                  <SelectItem value="noreferrer">No Referrer</SelectItem>
                  <SelectItem value="nofollow noopener">No Follow + No Opener</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
