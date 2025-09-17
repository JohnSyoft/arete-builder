import React from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ColorPickerComponent, GradientColorPicker } from "@/components/ui/color-picker"

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

      {/* Background Section */}
      <AccordionItem value="background">
        <AccordionTrigger className="text-sm font-medium">Background</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <ColorPickerComponent
            value={elementProps?.backgroundColor || ''}
            onChange={(value) => onPropChange('backgroundColor', value)}
            label="Background Color"
            placeholder="Select background color"
          />

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

          {elementProps?.backgroundImage && (
            <>
              <div>
                <Label htmlFor="backgroundSize">Background Size</Label>
                <Select value={elementProps?.backgroundSize || "cover"} onValueChange={(value) => onPropChange('backgroundSize', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cover">Cover</SelectItem>
                    <SelectItem value="contain">Contain</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="100%">100%</SelectItem>
                    <SelectItem value="100% 100%">100% 100%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="backgroundPosition">Background Position</Label>
                <Select value={elementProps?.backgroundPosition || "center"} onValueChange={(value) => onPropChange('backgroundPosition', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="center">Center</SelectItem>
                    <SelectItem value="top">Top</SelectItem>
                    <SelectItem value="bottom">Bottom</SelectItem>
                    <SelectItem value="left">Left</SelectItem>
                    <SelectItem value="right">Right</SelectItem>
                    <SelectItem value="top left">Top Left</SelectItem>
                    <SelectItem value="top right">Top Right</SelectItem>
                    <SelectItem value="bottom left">Bottom Left</SelectItem>
                    <SelectItem value="bottom right">Bottom Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="backgroundRepeat">Background Repeat</Label>
                <Select value={elementProps?.backgroundRepeat || "no-repeat"} onValueChange={(value) => onPropChange('backgroundRepeat', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-repeat">No Repeat</SelectItem>
                    <SelectItem value="repeat">Repeat</SelectItem>
                    <SelectItem value="repeat-x">Repeat X</SelectItem>
                    <SelectItem value="repeat-y">Repeat Y</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="gradient">Gradient Background</Label>
            <Select value={elementProps?.gradient || "none"} onValueChange={(value) => onPropChange('gradient', value === "none" ? "" : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="linear">Linear Gradient</SelectItem>
                <SelectItem value="radial">Radial Gradient</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {elementProps?.gradient && (
            <>
              <div>
                <Label htmlFor="gradientDirection">Gradient Direction</Label>
                <Select value={elementProps?.gradientDirection || "to-r"} onValueChange={(value) => onPropChange('gradientDirection', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="to-r">To Right</SelectItem>
                    <SelectItem value="to-l">To Left</SelectItem>
                    <SelectItem value="to-t">To Top</SelectItem>
                    <SelectItem value="to-b">To Bottom</SelectItem>
                    <SelectItem value="to-tr">To Top Right</SelectItem>
                    <SelectItem value="to-tl">To Top Left</SelectItem>
                    <SelectItem value="to-br">To Bottom Right</SelectItem>
                    <SelectItem value="to-bl">To Bottom Left</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <GradientColorPicker
                key={elementProps?.gradientColors || 'default'}
                value={elementProps?.gradientColors || ''}
                onChange={(value) => onPropChange('gradientColors', value)}
                label="Gradient Colors"
                placeholder="Select gradient colors"
              />
            </>
          )}
        </AccordionContent>
      </AccordionItem>

      {/* Border & Shadow Section */}
      <AccordionItem value="border">
        <AccordionTrigger className="text-sm font-medium">Border & Shadow</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="borderWidth">Border Width</Label>
            <Select value={elementProps?.borderWidth || "none"} onValueChange={(value) => onPropChange('borderWidth', value === "none" ? "" : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="1px">1px</SelectItem>
                <SelectItem value="2px">2px</SelectItem>
                <SelectItem value="4px">4px</SelectItem>
                <SelectItem value="8px">8px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {elementProps?.borderWidth && (
            <>
              <ColorPickerComponent
                value={elementProps?.borderColor || ''}
                onChange={(value) => onPropChange('borderColor', value)}
                label="Border Color"
                placeholder="Select border color"
              />

              <div>
                <Label htmlFor="borderStyle">Border Style</Label>
                <Select value={elementProps?.borderStyle || "solid"} onValueChange={(value) => onPropChange('borderStyle', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solid">Solid</SelectItem>
                    <SelectItem value="dashed">Dashed</SelectItem>
                    <SelectItem value="dotted">Dotted</SelectItem>
                    <SelectItem value="double">Double</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="borderRadius">Border Radius</Label>
            <Select value={elementProps?.borderRadius || "none"} onValueChange={(value) => onPropChange('borderRadius', value === "none" ? "" : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="4px">Small (4px)</SelectItem>
                <SelectItem value="8px">Medium (8px)</SelectItem>
                <SelectItem value="12px">Large (12px)</SelectItem>
                <SelectItem value="16px">Extra Large (16px)</SelectItem>
                <SelectItem value="50%">Round</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="boxShadow">Box Shadow</Label>
            <Input
              id="boxShadow"
              value={elementProps?.boxShadow || ''}
              onChange={(e) => onPropChange('boxShadow', e.target.value)}
              placeholder="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="opacity">Opacity</Label>
            <Input
              id="opacity"
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={elementProps?.opacity || 1}
              onChange={(e) => onPropChange('opacity', parseFloat(e.target.value))}
              className="mt-1"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
