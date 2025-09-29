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

interface BoxPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function BoxProperties({
  elementProps,
  onPropChange,
}: BoxPropertiesProps) {
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
              <SelectItem value="inline-grid">Inline Grid</SelectItem>
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
            placeholder="e.g., 100px, 50%, w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            value={elementProps?.height || ""}
            onChange={(e) => onPropChange("height", e.target.value)}
            placeholder="e.g., 200px, 50vh, h-screen"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="minWidth">Min Width</Label>
          <Input
            id="minWidth"
            value={elementProps?.minWidth || ""}
            onChange={(e) => onPropChange("minWidth", e.target.value)}
            placeholder="e.g., 100px, 50%"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="minHeight">Min Height</Label>
          <Input
            id="minHeight"
            value={elementProps?.minHeight || ""}
            onChange={(e) => onPropChange("minHeight", e.target.value)}
            placeholder="e.g., 100px, 50vh"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxWidth">Max Width</Label>
          <Input
            id="maxWidth"
            value={elementProps?.maxWidth || ""}
            onChange={(e) => onPropChange("maxWidth", e.target.value)}
            placeholder="e.g., 500px, 100%"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="maxHeight">Max Height</Label>
          <Input
            id="maxHeight"
            value={elementProps?.maxHeight || ""}
            onChange={(e) => onPropChange("maxHeight", e.target.value)}
            placeholder="e.g., 500px, 100vh"
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
            placeholder="e.g., 4px, 1rem, m-4"
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
          <Input
            id="borderWidth"
            value={elementProps?.borderWidth || ""}
            onChange={(e) => onPropChange("borderWidth", e.target.value)}
            placeholder="e.g., 1px, 2px, border-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="borderStyle">Border Style</Label>
          <Select
            value={elementProps?.borderStyle || "solid"}
            onValueChange={(value) => onPropChange("borderStyle", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select border style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solid">Solid</SelectItem>
              <SelectItem value="dashed">Dashed</SelectItem>
              <SelectItem value="dotted">Dotted</SelectItem>
              <SelectItem value="double">Double</SelectItem>
              <SelectItem value="none">None</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Border Color</Label>
          <ColorPickerComponent
            value={elementProps?.borderColor || "#000000"}
            onChange={(color) => onPropChange("borderColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="borderRadius">Border Radius</Label>
          <Input
            id="borderRadius"
            value={elementProps?.borderRadius || ""}
            onChange={(e) => onPropChange("borderRadius", e.target.value)}
            placeholder="e.g., 4px, 8px, rounded-lg"
          />
        </div>
      </div>

      {/* Shadows */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Shadows</h3>
        
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

      {/* Hover Effects */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Hover Effects</h3>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="hoverEffects"
            checked={elementProps?.hoverEffects || false}
            onCheckedChange={(checked) => onPropChange("hoverEffects", checked)}
          />
          <Label htmlFor="hoverEffects">Enable Hover Effects</Label>
        </div>

        {elementProps?.hoverEffects && (
          <>
            <div className="space-y-2">
              <Label>Hover Background Color</Label>
              <ColorPickerComponent
                value={elementProps?.hoverBackgroundColor || "transparent"}
                onChange={(color) => onPropChange("hoverBackgroundColor", color)}
              />
            </div>

            <div className="space-y-2">
              <Label>Hover Text Color</Label>
              <ColorPickerComponent
                value={elementProps?.hoverColor || "transparent"}
                onChange={(color) => onPropChange("hoverColor", color)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hoverScale">Hover Scale</Label>
              <Slider
                value={[elementProps?.hoverScale || 1]}
                onValueChange={([value]) => onPropChange("hoverScale", value)}
                min={0.5}
                max={2}
                step={0.1}
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="transitionDuration">Transition Duration</Label>
              <Select
                value={elementProps?.transitionDuration || "150ms"}
                onValueChange={(value) => onPropChange("transitionDuration", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select transition duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="75ms">75ms</SelectItem>
                  <SelectItem value="100ms">100ms</SelectItem>
                  <SelectItem value="150ms">150ms</SelectItem>
                  <SelectItem value="200ms">200ms</SelectItem>
                  <SelectItem value="300ms">300ms</SelectItem>
                  <SelectItem value="500ms">500ms</SelectItem>
                  <SelectItem value="700ms">700ms</SelectItem>
                  <SelectItem value="1000ms">1000ms</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      </div>

      {/* Animation */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Animation</h3>
        
        <div className="space-y-2">
          <Label htmlFor="animation">Animation Type</Label>
          <Select
            value={elementProps?.animation || "none"}
            onValueChange={(value) => onPropChange("animation", value === "none" ? "" : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select animation type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="fade-in">Fade In</SelectItem>
              <SelectItem value="slide-in-left">Slide In Left</SelectItem>
              <SelectItem value="slide-in-right">Slide In Right</SelectItem>
              <SelectItem value="slide-in-top">Slide In Top</SelectItem>
              <SelectItem value="slide-in-bottom">Slide In Bottom</SelectItem>
              <SelectItem value="zoom-in">Zoom In</SelectItem>
              <SelectItem value="bounce">Bounce</SelectItem>
              <SelectItem value="pulse">Pulse</SelectItem>
              <SelectItem value="spin">Spin</SelectItem>
              <SelectItem value="float">Float</SelectItem>
              <SelectItem value="wiggle">Wiggle</SelectItem>
              <SelectItem value="shake">Shake</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="animationDuration">Animation Duration</Label>
          <Select
            value={elementProps?.animationDuration || "1s"}
            onValueChange={(value) => onPropChange("animationDuration", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select animation duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0.5s">0.5s</SelectItem>
              <SelectItem value="1s">1s</SelectItem>
              <SelectItem value="1.5s">1.5s</SelectItem>
              <SelectItem value="2s">2s</SelectItem>
              <SelectItem value="3s">3s</SelectItem>
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