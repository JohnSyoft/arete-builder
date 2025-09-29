import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

interface SelectPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function SelectProperties({
  elementProps,
  onPropChange,
}: SelectPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Basic Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="placeholder">Placeholder</Label>
          <Input
            id="placeholder"
            value={elementProps?.placeholder || ""}
            onChange={(e) => onPropChange("placeholder", e.target.value)}
            placeholder="Enter placeholder text"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="defaultValue">Default Value</Label>
          <Input
            id="defaultValue"
            value={elementProps?.defaultValue || ""}
            onChange={(e) => onPropChange("defaultValue", e.target.value)}
            placeholder="Enter default selected value"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="options">Options (one per line)</Label>
          <Textarea
            id="options"
            value={elementProps?.options || ""}
            onChange={(e) => onPropChange("options", e.target.value)}
            placeholder="Option 1&#10;Option 2&#10;Option 3"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            value={elementProps?.name || ""}
            onChange={(e) => onPropChange("name", e.target.value)}
            placeholder="Form field name"
          />
        </div>
      </div>

      {/* Styling */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Styling</h3>
        
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
            placeholder="e.g., 40px, 2.5rem, h-10"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="fontSize">Font Size</Label>
          <Select
            value={elementProps?.fontSize || "text-base"}
            onValueChange={(value) => onPropChange("fontSize", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select font size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text-xs">Extra Small (12px)</SelectItem>
              <SelectItem value="text-sm">Small (14px)</SelectItem>
              <SelectItem value="text-base">Base (16px)</SelectItem>
              <SelectItem value="text-lg">Large (18px)</SelectItem>
              <SelectItem value="text-xl">Extra Large (20px)</SelectItem>
              <SelectItem value="text-2xl">2XL (24px)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fontWeight">Font Weight</Label>
          <Select
            value={elementProps?.fontWeight || "font-normal"}
            onValueChange={(value) => onPropChange("fontWeight", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select font weight" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="font-thin">Thin (100)</SelectItem>
              <SelectItem value="font-extralight">Extra Light (200)</SelectItem>
              <SelectItem value="font-light">Light (300)</SelectItem>
              <SelectItem value="font-normal">Normal (400)</SelectItem>
              <SelectItem value="font-medium">Medium (500)</SelectItem>
              <SelectItem value="font-semibold">Semi Bold (600)</SelectItem>
              <SelectItem value="font-bold">Bold (700)</SelectItem>
              <SelectItem value="font-extrabold">Extra Bold (800)</SelectItem>
              <SelectItem value="font-black">Black (900)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Colors</h3>
        
        <div className="space-y-2">
          <Label>Text Color</Label>
          <ColorPickerComponent
            value={elementProps?.color || "#000000"}
            onChange={(color) => onPropChange("color", color)}
          />
        </div>

        <div className="space-y-2">
          <Label>Background Color</Label>
          <ColorPickerComponent
            value={elementProps?.backgroundColor || "#ffffff"}
            onChange={(color) => onPropChange("backgroundColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label>Border Color</Label>
          <ColorPickerComponent
            value={elementProps?.borderColor || "#d1d5db"}
            onChange={(color) => onPropChange("borderColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label>Placeholder Color</Label>
          <ColorPickerComponent
            value={elementProps?.placeholderColor || "#9ca3af"}
            onChange={(color) => onPropChange("placeholderColor", color)}
          />
        </div>
      </div>

      {/* Borders */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Borders</h3>
        
        <div className="space-y-2">
          <Label htmlFor="borderWidth">Border Width</Label>
          <Select
            value={elementProps?.borderWidth || "border"}
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
            value={elementProps?.borderRadius || "rounded-md"}
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

      {/* Behavior */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Behavior</h3>
        
        <div className="flex items-center space-x-2">
          <Switch
            id="disabled"
            checked={elementProps?.disabled || false}
            onCheckedChange={(checked) => onPropChange("disabled", checked)}
          />
          <Label htmlFor="disabled">Disabled</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="required"
            checked={elementProps?.required || false}
            onCheckedChange={(checked) => onPropChange("required", checked)}
          />
          <Label htmlFor="required">Required</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="multiple"
            checked={elementProps?.multiple || false}
            onCheckedChange={(checked) => onPropChange("multiple", checked)}
          />
          <Label htmlFor="multiple">Multiple Selection</Label>
        </div>

        <div className="space-y-2">
          <Label htmlFor="size">Size (for multiple selection)</Label>
          <Input
            id="size"
            type="number"
            value={elementProps?.size || ""}
            onChange={(e) => onPropChange("size", parseInt(e.target.value) || undefined)}
            placeholder="Number of visible options"
            min="1"
            max="20"
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
          <Label htmlFor="boxShadow">Box Shadow</Label>
          <Input
            id="boxShadow"
            value={elementProps?.boxShadow || ""}
            onChange={(e) => onPropChange("boxShadow", e.target.value)}
            placeholder="e.g., 0 4px 6px rgba(0,0,0,0.1)"
          />
        </div>
      </div>

      {/* Focus States */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Focus States</h3>
        
        <div className="space-y-2">
          <Label>Focus Border Color</Label>
          <ColorPickerComponent
            value={elementProps?.focusBorderColor || "#3b82f6"}
            onChange={(color) => onPropChange("focusBorderColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label>Focus Background Color</Label>
          <ColorPickerComponent
            value={elementProps?.focusBackgroundColor || "transparent"}
            onChange={(color) => onPropChange("focusBackgroundColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="focusRingWidth">Focus Ring Width</Label>
          <Select
            value={elementProps?.focusRingWidth || "ring-2"}
            onValueChange={(value) => onPropChange("focusRingWidth", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select focus ring width" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ring-0">None</SelectItem>
              <SelectItem value="ring-1">1px</SelectItem>
              <SelectItem value="ring-2">2px</SelectItem>
              <SelectItem value="ring-4">4px</SelectItem>
              <SelectItem value="ring-8">8px</SelectItem>
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
          <Label htmlFor="ariaDescribedBy">ARIA Described By</Label>
          <Input
            id="ariaDescribedBy"
            value={elementProps?.ariaDescribedBy || ""}
            onChange={(e) => onPropChange("ariaDescribedBy", e.target.value)}
            placeholder="ID of element that describes this select"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="role">Role</Label>
          <Input
            id="role"
            value={elementProps?.role || ""}
            onChange={(e) => onPropChange("role", e.target.value)}
            placeholder="e.g., combobox, listbox"
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