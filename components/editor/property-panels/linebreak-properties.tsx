import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ColorPickerComponent } from "@/components/ui/color-picker";

interface LineBreakPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function LineBreakProperties({
  elementProps,
  onPropChange,
}: LineBreakPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Basic Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="clear">Clear</Label>
          <Select
            value={elementProps?.clear || "none"}
            onValueChange={(value) => onPropChange("clear", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select clear" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="right">Right</SelectItem>
              <SelectItem value="both">Both</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="lineHeight">Line Height</Label>
          <Input
            id="lineHeight"
            value={elementProps?.lineHeight || ""}
            onChange={(e) => onPropChange("lineHeight", e.target.value)}
            placeholder="e.g., 1.5, 24px, 1.5em"
          />
        </div>
      </div>

      {/* Dimensions */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Dimensions</h3>
        
        <div className="space-y-2">
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            value={elementProps?.width || ""}
            onChange={(e) => onPropChange("width", e.target.value)}
            placeholder="e.g., 100%, 300px, w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            value={elementProps?.height || ""}
            onChange={(e) => onPropChange("height", e.target.value)}
            placeholder="e.g., 20px, 1.25rem, h-5"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="minHeight">Min Height</Label>
          <Input
            id="minHeight"
            value={elementProps?.minHeight || ""}
            onChange={(e) => onPropChange("minHeight", e.target.value)}
            placeholder="e.g., 10px, 0.625rem"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxHeight">Max Height</Label>
          <Input
            id="maxHeight"
            value={elementProps?.maxHeight || ""}
            onChange={(e) => onPropChange("maxHeight", e.target.value)}
            placeholder="e.g., 50px, 3.125rem"
          />
        </div>
      </div>

      {/* Spacing */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Spacing</h3>
        
        <div className="space-y-2">
          <Label htmlFor="margin">Margin</Label>
          <Input
            id="margin"
            value={elementProps?.margin || ""}
            onChange={(e) => onPropChange("margin", e.target.value)}
            placeholder="e.g., 4px, 1rem, my-4"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="padding">Padding</Label>
          <Input
            id="padding"
            value={elementProps?.padding || ""}
            onChange={(e) => onPropChange("padding", e.target.value)}
            placeholder="e.g., 8px, 2rem, p-4"
          />
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Colors</h3>
        
        <div className="space-y-2">
          <Label>Background Color</Label>
          <ColorPickerComponent
            value={elementProps?.backgroundColor || "transparent"}
            onChange={(color) => onPropChange("backgroundColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label>Border Color</Label>
          <ColorPickerComponent
            value={elementProps?.borderColor || "transparent"}
            onChange={(color) => onPropChange("borderColor", color)}
          />
        </div>
      </div>

      {/* Borders */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Borders</h3>
        
        <div className="space-y-2">
          <Label htmlFor="borderWidth">Border Width</Label>
          <Select
            value={elementProps?.borderWidth || "border-0"}
            onValueChange={(value) => onPropChange("borderWidth", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select border width" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="border-0">None</SelectItem>
              <SelectItem value="border">1px</SelectItem>
              <SelectItem value="border-2">2px</SelectItem>
              <SelectItem value="border-4">4px</SelectItem>
              <SelectItem value="border-8">8px</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="borderStyle">Border Style</Label>
          <Select
            value={elementProps?.borderStyle || "border-solid"}
            onValueChange={(value) => onPropChange("borderStyle", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select border style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="border-solid">Solid</SelectItem>
              <SelectItem value="border-dashed">Dashed</SelectItem>
              <SelectItem value="border-dotted">Dotted</SelectItem>
              <SelectItem value="border-double">Double</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="borderRadius">Border Radius</Label>
          <Select
            value={elementProps?.borderRadius || "rounded-none"}
            onValueChange={(value) => onPropChange("borderRadius", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select border radius" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rounded-none">None</SelectItem>
              <SelectItem value="rounded-sm">Small</SelectItem>
              <SelectItem value="rounded">Default</SelectItem>
              <SelectItem value="rounded-md">Medium</SelectItem>
              <SelectItem value="rounded-lg">Large</SelectItem>
              <SelectItem value="rounded-xl">Extra Large</SelectItem>
              <SelectItem value="rounded-full">Full</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Layout */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Layout</h3>
        
        <div className="space-y-2">
          <Label htmlFor="display">Display</Label>
          <Select
            value={elementProps?.display || "block"}
            onValueChange={(value) => onPropChange("display", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="block">Block</SelectItem>
              <SelectItem value="inline">Inline</SelectItem>
              <SelectItem value="inline-block">Inline Block</SelectItem>
              <SelectItem value="flex">Flex</SelectItem>
              <SelectItem value="inline-flex">Inline Flex</SelectItem>
              <SelectItem value="grid">Grid</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="position">Position</Label>
          <Select
            value={elementProps?.position || "static"}
            onValueChange={(value) => onPropChange("position", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="static">Static</SelectItem>
              <SelectItem value="relative">Relative</SelectItem>
              <SelectItem value="absolute">Absolute</SelectItem>
              <SelectItem value="fixed">Fixed</SelectItem>
              <SelectItem value="sticky">Sticky</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="zIndex">Z-Index</Label>
          <Input
            id="zIndex"
            type="number"
            value={elementProps?.zIndex || ""}
            onChange={(e) => onPropChange("zIndex", parseInt(e.target.value) || 0)}
            placeholder="e.g., 1, 10, 999"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="overflow">Overflow</Label>
          <Select
            value={elementProps?.overflow || "visible"}
            onValueChange={(value) => onPropChange("overflow", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select overflow" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visible">Visible</SelectItem>
              <SelectItem value="hidden">Hidden</SelectItem>
              <SelectItem value="scroll">Scroll</SelectItem>
              <SelectItem value="auto">Auto</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Visual Effects */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Visual Effects</h3>
        
        <div className="space-y-2">
          <Label htmlFor="opacity">Opacity</Label>
          <Slider
            value={[elementProps?.opacity || 1]}
            onValueChange={([value]) => onPropChange("opacity", value)}
            min={0}
            max={1}
            step={0.1}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="visibility">Visibility</Label>
          <Select
            value={elementProps?.visibility || "visible"}
            onValueChange={(value) => onPropChange("visibility", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select visibility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="visible">Visible</SelectItem>
              <SelectItem value="hidden">Hidden</SelectItem>
              <SelectItem value="collapse">Collapse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="boxShadow">Box Shadow</Label>
          <Input
            id="boxShadow"
            value={elementProps?.boxShadow || ""}
            onChange={(e) => onPropChange("boxShadow", e.target.value)}
            placeholder="e.g., 0 2px 4px rgba(0,0,0,0.1)"
          />
        </div>
      </div>

      {/* Accessibility */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Accessibility</h3>
        
        <div className="space-y-2">
          <Label htmlFor="ariaLabel">ARIA Label</Label>
          <Input
            id="ariaLabel"
            value={elementProps?.ariaLabel || ""}
            onChange={(e) => onPropChange("ariaLabel", e.target.value)}
            placeholder="Accessible label for screen readers"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={elementProps?.role || ""}
            onChange={(e) => onPropChange("role", e.target.value)}
            placeholder="e.g., separator, presentation"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tabIndex">Tab Index</Label>
          <Input
            id="tabIndex"
            type="number"
            value={elementProps?.tabIndex || ""}
            onChange={(e) => onPropChange("tabIndex", parseInt(e.target.value) || 0)}
            placeholder="e.g., 0, 1, -1"
          />
        </div>
      </div>

      {/* Custom Class */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Custom Styling</h3>
        
        <div className="space-y-2">
          <Label htmlFor="className">Custom Class Name</Label>
          <Input
            id="className"
            value={elementProps?.className || ""}
            onChange={(e) => onPropChange("className", e.target.value)}
            placeholder="e.g., my-custom-class"
          />
        </div>
      </div>
    </div>
  );
}