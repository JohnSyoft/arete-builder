import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FlexPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function FlexProperties({ elementProps, onPropChange }: FlexPropertiesProps) {
  return (
    <Accordion type="multiple" defaultValue={["layout", "style"]} className="w-full">
      {/* Layout Section */}
      <AccordionItem value="layout">
        <AccordionTrigger className="text-sm font-medium">Layout</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="itemCount">Number of Items</Label>
            <Select value={elementProps?.itemCount?.toString() || '3'} onValueChange={(value) => onPropChange('itemCount', parseInt(value))}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Item</SelectItem>
                <SelectItem value="2">2 Items</SelectItem>
                <SelectItem value="3">3 Items</SelectItem>
                <SelectItem value="4">4 Items</SelectItem>
                <SelectItem value="5">5 Items</SelectItem>
                <SelectItem value="6">6 Items</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="flexDirection">Direction</Label>
            <Select value={elementProps?.flexDirection || 'row'} onValueChange={(value) => onPropChange('flexDirection', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="row">Row (→)</SelectItem>
                <SelectItem value="column">Column (↓)</SelectItem>
                <SelectItem value="row-reverse">Row Reverse (←)</SelectItem>
                <SelectItem value="column-reverse">Column Reverse (↑)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="gap">Gap Between Items</Label>
            <Select value={elementProps?.gap || 'gap-4'} onValueChange={(value) => onPropChange('gap', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gap-0">No Gap</SelectItem>
                <SelectItem value="gap-1">Tiny (4px)</SelectItem>
                <SelectItem value="gap-2">Small (8px)</SelectItem>
                <SelectItem value="gap-4">Medium (16px)</SelectItem>
                <SelectItem value="gap-6">Large (24px)</SelectItem>
                <SelectItem value="gap-8">Extra Large (32px)</SelectItem>
                <SelectItem value="gap-12">Huge (48px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="justifyContent">Main Axis Alignment</Label>
            <Select value={elementProps?.justifyContent || 'start'} onValueChange={(value) => onPropChange('justifyContent', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="between">Space Between</SelectItem>
                <SelectItem value="around">Space Around</SelectItem>
                <SelectItem value="evenly">Space Evenly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="alignItems">Cross Axis Alignment</Label>
            <Select value={elementProps?.alignItems || 'center'} onValueChange={(value) => onPropChange('alignItems', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="stretch">Stretch</SelectItem>
                <SelectItem value="baseline">Baseline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="wrap">Flex Wrap</Label>
            <Select value={elementProps?.wrap || 'nowrap'} onValueChange={(value) => onPropChange('wrap', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nowrap">No Wrap</SelectItem>
                <SelectItem value="wrap">Wrap</SelectItem>
                <SelectItem value="wrap-reverse">Wrap Reverse</SelectItem>
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
            <Label htmlFor="backgroundColor">Background Color</Label>
            <Input
              id="backgroundColor"
              type="color"
              value={elementProps?.backgroundColor === 'transparent' ? '#ffffff' : elementProps?.backgroundColor || '#ffffff'}
              onChange={(e) => onPropChange('backgroundColor', e.target.value)}
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
                <SelectItem value="12px">Large (12px)</SelectItem>
                <SelectItem value="16px">Extra Large (16px)</SelectItem>
                <SelectItem value="24px">Huge (24px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="border">Border</Label>
            <Select value={elementProps?.border || 'none'} onValueChange={(value) => onPropChange('border', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="1px solid #e5e7eb">Light Border</SelectItem>
                <SelectItem value="2px solid #d1d5db">Medium Border</SelectItem>
                <SelectItem value="2px solid #9ca3af">Dark Border</SelectItem>
                <SelectItem value="2px dashed #d1d5db">Dashed Border</SelectItem>
                <SelectItem value="2px dotted #d1d5db">Dotted Border</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="minHeight">Minimum Height</Label>
            <Select value={elementProps?.minHeight || 'min-h-[60px]'} onValueChange={(value) => onPropChange('minHeight', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="min-h-[40px]">Small (40px)</SelectItem>
                <SelectItem value="min-h-[60px]">Medium (60px)</SelectItem>
                <SelectItem value="min-h-[80px]">Large (80px)</SelectItem>
                <SelectItem value="min-h-[100px]">Extra Large (100px)</SelectItem>
                <SelectItem value="min-h-[150px]">Huge (150px)</SelectItem>
                <SelectItem value="min-h-[200px]">Massive (200px)</SelectItem>
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
            <Select value={elementProps?.padding || 'p-4'} onValueChange={(value) => onPropChange('padding', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="p-0">None</SelectItem>
                <SelectItem value="p-1">Tiny (4px)</SelectItem>
                <SelectItem value="p-2">Small (8px)</SelectItem>
                <SelectItem value="p-4">Medium (16px)</SelectItem>
                <SelectItem value="p-6">Large (24px)</SelectItem>
                <SelectItem value="p-8">Extra Large (32px)</SelectItem>
                <SelectItem value="p-12">Huge (48px)</SelectItem>
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
                <SelectItem value="my-1">Tiny (4px)</SelectItem>
                <SelectItem value="my-2">Small (8px)</SelectItem>
                <SelectItem value="my-4">Medium (16px)</SelectItem>
                <SelectItem value="my-6">Large (24px)</SelectItem>
                <SelectItem value="my-8">Extra Large (32px)</SelectItem>
                <SelectItem value="my-12">Huge (48px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
