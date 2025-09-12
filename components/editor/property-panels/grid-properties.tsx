import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface GridPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function GridProperties({ elementProps, onPropChange }: GridPropertiesProps) {
  return (
    <Accordion type="multiple" defaultValue={["layout", "spacing", "dimensions"]} className="w-full">
      {/* Layout Section */}
      <AccordionItem value="layout">
        <AccordionTrigger className="text-sm font-medium">Grid Layout</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="columns">Columns</Label>
            <Select value={elementProps?.columns?.toString() || "3"} onValueChange={(value) => onPropChange('columns', parseInt(value))}>
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
            <Label htmlFor="autoRows">Auto Rows</Label>
            <Select value={elementProps?.autoRows || "minmax(200px, auto)"} onValueChange={(value) => onPropChange('autoRows', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="minmax(150px, auto)">Min 150px</SelectItem>
                <SelectItem value="minmax(200px, auto)">Min 200px</SelectItem>
                <SelectItem value="minmax(250px, auto)">Min 250px</SelectItem>
                <SelectItem value="1fr">Equal Height</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="autoFit">Auto Fit Columns</Label>
            <Select value={elementProps?.autoFit ? "true" : "false"} onValueChange={(value) => onPropChange('autoFit', value === "true")}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">Fixed Columns</SelectItem>
                <SelectItem value="true">Auto Fit</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {elementProps?.autoFit && (
            <div>
              <Label htmlFor="minColumnWidth">Min Column Width</Label>
              <Input
                id="minColumnWidth"
                value={elementProps?.minColumnWidth || '200px'}
                onChange={(e) => onPropChange('minColumnWidth', e.target.value)}
                placeholder="200px, 250px, 15rem"
                className="mt-1"
              />
            </div>
          )}
        </AccordionContent>
      </AccordionItem>

      {/* Spacing Section */}
      <AccordionItem value="spacing">
        <AccordionTrigger className="text-sm font-medium">Spacing</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="gap">Grid Gap</Label>
            <Select value={elementProps?.gap || "16px"} onValueChange={(value) => onPropChange('gap', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8px">Small (8px)</SelectItem>
                <SelectItem value="16px">Medium (16px)</SelectItem>
                <SelectItem value="24px">Large (24px)</SelectItem>
                <SelectItem value="32px">Extra Large (32px)</SelectItem>
                <SelectItem value="48px">Huge (48px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="rowGap">Row Gap (Override)</Label>
            <Input
              id="rowGap"
              value={elementProps?.rowGap || ''}
              onChange={(e) => onPropChange('rowGap', e.target.value)}
              placeholder="16px, 24px (leave empty to use grid gap)"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="columnGap">Column Gap (Override)</Label>
            <Input
              id="columnGap"
              value={elementProps?.columnGap || ''}
              onChange={(e) => onPropChange('columnGap', e.target.value)}
              placeholder="16px, 24px (leave empty to use grid gap)"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="padding">Padding</Label>
            <Select value={elementProps?.padding || "0px"} onValueChange={(value) => onPropChange('padding', value)}>
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

      {/* Alignment Section */}
      <AccordionItem value="alignment">
        <AccordionTrigger className="text-sm font-medium">Alignment</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="justifyItems">Justify Items</Label>
            <Select value={elementProps?.justifyItems || "stretch"} onValueChange={(value) => onPropChange('justifyItems', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stretch">Stretch</SelectItem>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="alignItems">Align Items</Label>
            <Select value={elementProps?.alignItems || "stretch"} onValueChange={(value) => onPropChange('alignItems', value)}>
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stretch">Stretch</SelectItem>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Dimensions Section */}
      <AccordionItem value="dimensions">
        <AccordionTrigger className="text-sm font-medium">Dimensions</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="width">Width</Label>
            <Input
              id="width"
              value={elementProps?.width || '100%'}
              onChange={(e) => onPropChange('width', e.target.value)}
              placeholder="100%, 500px, auto"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              value={elementProps?.height || 'auto'}
              onChange={(e) => onPropChange('height', e.target.value)}
              placeholder="auto, 300px, 50vh"
              className="mt-1"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
