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

interface RowPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function RowProperties({
  elementProps,
  onPropChange,
}: RowPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Basic Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="tag">HTML Tag</Label>
          <Select
            value={elementProps?.tag || "div"}
            onValueChange={(value) => onPropChange("tag", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select HTML tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="div">Div</SelectItem>
              <SelectItem value="section">Section</SelectItem>
              <SelectItem value="article">Article</SelectItem>
              <SelectItem value="aside">Aside</SelectItem>
              <SelectItem value="header">Header</SelectItem>
              <SelectItem value="footer">Footer</SelectItem>
              <SelectItem value="main">Main</SelectItem>
              <SelectItem value="nav">Nav</SelectItem>
              <SelectItem value="span">Span</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="display">Display</Label>
          <Select
            value={elementProps?.display || "flex"}
            onValueChange={(value) => onPropChange("display", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select display" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flex">Flex</SelectItem>
              <SelectItem value="inline-flex">Inline Flex</SelectItem>
              <SelectItem value="grid">Grid</SelectItem>
              <SelectItem value="inline-grid">Inline Grid</SelectItem>
              <SelectItem value="block">Block</SelectItem>
              <SelectItem value="inline-block">Inline Block</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
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
            placeholder="e.g., 100%, 1200px, w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            value={elementProps?.height || ""}
            onChange={(e) => onPropChange("height", e.target.value)}
            placeholder="e.g., auto, 100px, h-32"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="minHeight">Min Height</Label>
          <Input
            id="minHeight"
            value={elementProps?.minHeight || ""}
            onChange={(e) => onPropChange("minHeight", e.target.value)}
            placeholder="e.g., 100px, 10rem"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxWidth">Max Width</Label>
          <Input
            id="maxWidth"
            value={elementProps?.maxWidth || ""}
            onChange={(e) => onPropChange("maxWidth", e.target.value)}
            placeholder="e.g., 1200px, 100%"
          />
        </div>
      </div>

      {/* Flexbox Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Flexbox Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="flexDirection">Flex Direction</Label>
          <Select
            value={elementProps?.flexDirection || "row"}
            onValueChange={(value) => onPropChange("flexDirection", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flex direction" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="row">Row</SelectItem>
              <SelectItem value="row-reverse">Row Reverse</SelectItem>
              <SelectItem value="column">Column</SelectItem>
              <SelectItem value="column-reverse">Column Reverse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="justifyContent">Justify Content</Label>
          <Select
            value={elementProps?.justifyContent || "flex-start"}
            onValueChange={(value) => onPropChange("justifyContent", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select justify content" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flex-start">Flex Start</SelectItem>
              <SelectItem value="flex-end">Flex End</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="space-between">Space Between</SelectItem>
              <SelectItem value="space-around">Space Around</SelectItem>
              <SelectItem value="space-evenly">Space Evenly</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="alignItems">Align Items</Label>
          <Select
            value={elementProps?.alignItems || "stretch"}
            onValueChange={(value) => onPropChange("alignItems", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select align items" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="stretch">Stretch</SelectItem>
              <SelectItem value="flex-start">Flex Start</SelectItem>
              <SelectItem value="flex-end">Flex End</SelectItem>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="baseline">Baseline</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="flexWrap">Flex Wrap</Label>
          <Select
            value={elementProps?.flexWrap || "nowrap"}
            onValueChange={(value) => onPropChange("flexWrap", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select flex wrap" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="nowrap">No Wrap</SelectItem>
              <SelectItem value="wrap">Wrap</SelectItem>
              <SelectItem value="wrap-reverse">Wrap Reverse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="gap">Gap</Label>
          <Input
            id="gap"
            value={elementProps?.gap || ""}
            onChange={(e) => onPropChange("gap", e.target.value)}
            placeholder="e.g., 1rem, 16px, gap-4"
          />
        </div>
      </div>

      {/* Grid Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Grid Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="gridTemplateColumns">Grid Template Columns</Label>
          <Input
            id="gridTemplateColumns"
            value={elementProps?.gridTemplateColumns || ""}
            onChange={(e) => onPropChange("gridTemplateColumns", e.target.value)}
            placeholder="e.g., 1fr 1fr, repeat(3, 1fr)"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gridTemplateRows">Grid Template Rows</Label>
          <Input
            id="gridTemplateRows"
            value={elementProps?.gridTemplateRows || ""}
            onChange={(e) => onPropChange("gridTemplateRows", e.target.value)}
            placeholder="e.g., auto 1fr auto"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gridGap">Grid Gap</Label>
          <Input
            id="gridGap"
            value={elementProps?.gridGap || ""}
            onChange={(e) => onPropChange("gridGap", e.target.value)}
            placeholder="e.g., 1rem, 16px"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="gridAutoFlow">Grid Auto Flow</Label>
          <Select
            value={elementProps?.gridAutoFlow || "row"}
            onValueChange={(value) => onPropChange("gridAutoFlow", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select grid auto flow" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="row">Row</SelectItem>
              <SelectItem value="column">Column</SelectItem>
              <SelectItem value="dense">Dense</SelectItem>
              <SelectItem value="row-dense">Row Dense</SelectItem>
              <SelectItem value="column-dense">Column Dense</SelectItem>
            </SelectContent>
          </Select>
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
            placeholder="e.g., 0, 2rem, my-8"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="padding">Padding</Label>
          <Input
            id="padding"
            value={elementProps?.padding || ""}
            onChange={(e) => onPropChange("padding", e.target.value)}
            placeholder="e.g., 2rem, py-16 px-4"
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
          <Label>Text Color</Label>
          <ColorPickerComponent
            value={elementProps?.color || "inherit"}
            onChange={(color) => onPropChange("color", color)}
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
          <Label>Border Color</Label>
          <ColorPickerComponent
            value={elementProps?.borderColor || "#d1d5db"}
            onChange={(color) => onPropChange("borderColor", color)}
          />
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
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Layout */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Layout</h3>
        
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
          <Label htmlFor="boxShadow">Box Shadow</Label>
          <Input
            id="boxShadow"
            value={elementProps?.boxShadow || ""}
            onChange={(e) => onPropChange("boxShadow", e.target.value)}
            placeholder="e.g., 0 4px 6px rgba(0,0,0,0.1)"
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
            placeholder="e.g., region, main, banner"
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