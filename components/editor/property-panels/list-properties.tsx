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

interface ListPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function ListProperties({
  elementProps,
  onPropChange,
}: ListPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Basic Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="listType">List Type</Label>
          <Select
            value={elementProps?.listType || "ul"}
            onValueChange={(value) => onPropChange("listType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select list type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ul">Unordered List (ul)</SelectItem>
              <SelectItem value="ol">Ordered List (ol)</SelectItem>
              <SelectItem value="dl">Description List (dl)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="items">List Items (one per line)</Label>
          <Textarea
            id="items"
            value={elementProps?.items || ""}
            onChange={(e) => onPropChange("items", e.target.value)}
            placeholder="Item 1&#10;Item 2&#10;Item 3"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="start">Start Number (for ordered lists)</Label>
          <Input
            id="start"
            type="number"
            value={elementProps?.start || 1}
            onChange={(e) => onPropChange("start", parseInt(e.target.value) || 1)}
            placeholder="Starting number"
            min="1"
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

        <div className="space-y-2">
          <Label htmlFor="lineHeight">Line Height</Label>
          <Select
            value={elementProps?.lineHeight || "leading-normal"}
            onValueChange={(value) => onPropChange("lineHeight", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select line height" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="leading-none">None (1)</SelectItem>
              <SelectItem value="leading-tight">Tight (1.25)</SelectItem>
              <SelectItem value="leading-snug">Snug (1.375)</SelectItem>
              <SelectItem value="leading-normal">Normal (1.5)</SelectItem>
              <SelectItem value="leading-relaxed">Relaxed (1.625)</SelectItem>
              <SelectItem value="leading-loose">Loose (2)</SelectItem>
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
            value={elementProps?.backgroundColor || "transparent"}
            onChange={(color) => onPropChange("backgroundColor", color)}
          />
        </div>

        <div className="space-y-2">
          <Label>Marker Color (for bullets/numbers)</Label>
          <ColorPickerComponent
            value={elementProps?.markerColor || "#000000"}
            onChange={(color) => onPropChange("markerColor", color)}
          />
        </div>
      </div>

      {/* List Style */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">List Style</h3>
        
        <div className="space-y-2">
          <Label htmlFor="listStyleType">List Style Type</Label>
          <Select
            value={elementProps?.listStyleType || "disc"}
            onValueChange={(value) => onPropChange("listStyleType", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select list style type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="disc">Disc (•)</SelectItem>
              <SelectItem value="circle">Circle (○)</SelectItem>
              <SelectItem value="square">Square (■)</SelectItem>
              <SelectItem value="decimal">Decimal (1, 2, 3)</SelectItem>
              <SelectItem value="decimal-leading-zero">Decimal Leading Zero (01, 02, 03)</SelectItem>
              <SelectItem value="lower-roman">Lower Roman (i, ii, iii)</SelectItem>
              <SelectItem value="upper-roman">Upper Roman (I, II, III)</SelectItem>
              <SelectItem value="lower-alpha">Lower Alpha (a, b, c)</SelectItem>
              <SelectItem value="upper-alpha">Upper Alpha (A, B, C)</SelectItem>
              <SelectItem value="lower-greek">Lower Greek (α, β, γ)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="listStylePosition">List Style Position</Label>
          <Select
            value={elementProps?.listStylePosition || "outside"}
            onValueChange={(value) => onPropChange("listStylePosition", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select list style position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="outside">Outside</SelectItem>
              <SelectItem value="inside">Inside</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="customMarker">Custom Marker</Label>
          <Input
            id="customMarker"
            value={elementProps?.customMarker || ""}
            onChange={(e) => onPropChange("customMarker", e.target.value)}
            placeholder="e.g., ✓, →, ★"
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

        <div className="space-y-2">
          <Label htmlFor="itemSpacing">Item Spacing</Label>
          <Input
            id="itemSpacing"
            value={elementProps?.itemSpacing || ""}
            onChange={(e) => onPropChange("itemSpacing", e.target.value)}
            placeholder="e.g., 8px, 0.5rem, space-y-2"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="indent">Indentation</Label>
          <Input
            id="indent"
            value={elementProps?.indent || ""}
            onChange={(e) => onPropChange("indent", e.target.value)}
            placeholder="e.g., 20px, 1.25rem, pl-6"
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
            placeholder="e.g., list, navigation, menu"
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