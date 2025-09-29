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

interface SectionPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function SectionProperties({
  elementProps,
  onPropChange,
}: SectionPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Basic Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="tag">HTML Tag</Label>
          <Select
            value={elementProps?.tag || "section"}
            onValueChange={(value) => onPropChange("tag", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select HTML tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="section">Section</SelectItem>
              <SelectItem value="div">Div</SelectItem>
              <SelectItem value="article">Article</SelectItem>
              <SelectItem value="aside">Aside</SelectItem>
              <SelectItem value="header">Header</SelectItem>
              <SelectItem value="footer">Footer</SelectItem>
              <SelectItem value="main">Main</SelectItem>
              <SelectItem value="nav">Nav</SelectItem>
            </SelectContent>
          </Select>
        </div>

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
              <SelectItem value="flex">Flex</SelectItem>
              <SelectItem value="grid">Grid</SelectItem>
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
            placeholder="e.g., 100vh, 500px, h-screen"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="minHeight">Min Height</Label>
          <Input
            id="minHeight"
            value={elementProps?.minHeight || ""}
            onChange={(e) => onPropChange("minHeight", e.target.value)}
            placeholder="e.g., 100vh, 500px"
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

      {/* Background */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Background</h3>
        
        <div className="space-y-2">
          <Label>Background Color</Label>
          <ColorPickerComponent
            value={elementProps?.backgroundColor || "transparent"}
            onChange={(color) => onPropChange("backgroundColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="backgroundImage">Background Image</Label>
          <Input
            id="backgroundImage"
            value={elementProps?.backgroundImage || ""}
            onChange={(e) => onPropChange("backgroundImage", e.target.value)}
            placeholder="e.g., url('image.jpg')"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="backgroundSize">Background Size</Label>
          <Select
            value={elementProps?.backgroundSize || "cover"}
            onValueChange={(value) => onPropChange("backgroundSize", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select background size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cover">Cover</SelectItem>
              <SelectItem value="contain">Contain</SelectItem>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="100% 100%">Stretch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="backgroundPosition">Background Position</Label>
          <Select
            value={elementProps?.backgroundPosition || "center"}
            onValueChange={(value) => onPropChange("backgroundPosition", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select background position" />
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

        <div className="space-y-2">
          <Label htmlFor="backgroundRepeat">Background Repeat</Label>
          <Select
            value={elementProps?.backgroundRepeat || "no-repeat"}
            onValueChange={(value) => onPropChange("backgroundRepeat", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select background repeat" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="no-repeat">No Repeat</SelectItem>
              <SelectItem value="repeat">Repeat</SelectItem>
              <SelectItem value="repeat-x">Repeat X</SelectItem>
              <SelectItem value="repeat-y">Repeat Y</SelectItem>
              <SelectItem value="space">Space</SelectItem>
              <SelectItem value="round">Round</SelectItem>
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
            </SelectContent>
          </Select>
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