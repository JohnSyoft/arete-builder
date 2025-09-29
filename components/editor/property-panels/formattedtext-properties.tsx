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

interface FormattedTextPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function FormattedTextProperties({
  elementProps,
  onPropChange,
}: FormattedTextPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Basic Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={elementProps?.content || ""}
            onChange={(e) => onPropChange("content", e.target.value)}
            placeholder="Enter your formatted text content"
            rows={4}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="tag">HTML Tag</Label>
          <Select
            value={elementProps?.tag || "p"}
            onValueChange={(value) => onPropChange("tag", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select HTML tag" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="p">Paragraph (p)</SelectItem>
              <SelectItem value="div">Div</SelectItem>
              <SelectItem value="span">Span</SelectItem>
              <SelectItem value="h1">Heading 1 (h1)</SelectItem>
              <SelectItem value="h2">Heading 2 (h2)</SelectItem>
              <SelectItem value="h3">Heading 3 (h3)</SelectItem>
              <SelectItem value="h4">Heading 4 (h4)</SelectItem>
              <SelectItem value="h5">Heading 5 (h5)</SelectItem>
              <SelectItem value="h6">Heading 6 (h6)</SelectItem>
              <SelectItem value="article">Article</SelectItem>
              <SelectItem value="section">Section</SelectItem>
              <SelectItem value="aside">Aside</SelectItem>
              <SelectItem value="blockquote">Blockquote</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Typography */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Typography</h3>
        
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
              <SelectItem value="text-3xl">3XL (30px)</SelectItem>
              <SelectItem value="text-4xl">4XL (36px)</SelectItem>
              <SelectItem value="text-5xl">5XL (48px)</SelectItem>
              <SelectItem value="text-6xl">6XL (60px)</SelectItem>
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
          <Label htmlFor="textAlign">Text Alignment</Label>
          <Select
            value={elementProps?.textAlign || "text-left"}
            onValueChange={(value) => onPropChange("textAlign", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select text alignment" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="text-left">Left</SelectItem>
              <SelectItem value="text-center">Center</SelectItem>
              <SelectItem value="text-right">Right</SelectItem>
              <SelectItem value="text-justify">Justify</SelectItem>
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