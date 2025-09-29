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

interface IconPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function IconProperties({
  elementProps,
  onPropChange,
}: IconPropertiesProps) {
  return (
    <div className="space-y-6">
      {/* Basic Properties */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Basic Properties</h3>
        
        <div className="space-y-2">
          <Label htmlFor="icon">Icon</Label>
          <Select
            value={elementProps?.icon || "star"}
            onValueChange={(value) => onPropChange("icon", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select an icon" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="star">Star</SelectItem>
              <SelectItem value="heart">Heart</SelectItem>
              <SelectItem value="thumbs-up">Thumbs Up</SelectItem>
              <SelectItem value="thumbs-down">Thumbs Down</SelectItem>
              <SelectItem value="bookmark">Bookmark</SelectItem>
              <SelectItem value="share">Share</SelectItem>
              <SelectItem value="download">Download</SelectItem>
              <SelectItem value="upload">Upload</SelectItem>
              <SelectItem value="edit">Edit</SelectItem>
              <SelectItem value="trash">Trash</SelectItem>
              <SelectItem value="copy">Copy</SelectItem>
              <SelectItem value="link">Link</SelectItem>
              <SelectItem value="external-link">External Link</SelectItem>
              <SelectItem value="mail">Mail</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
              <SelectItem value="map-pin">Map Pin</SelectItem>
              <SelectItem value="calendar">Calendar</SelectItem>
              <SelectItem value="clock">Clock</SelectItem>
              <SelectItem value="user">User</SelectItem>
              <SelectItem value="users">Users</SelectItem>
              <SelectItem value="settings">Settings</SelectItem>
              <SelectItem value="search">Search</SelectItem>
              <SelectItem value="filter">Filter</SelectItem>
              <SelectItem value="menu">Menu</SelectItem>
              <SelectItem value="x">Close</SelectItem>
              <SelectItem value="check">Check</SelectItem>
              <SelectItem value="plus">Plus</SelectItem>
              <SelectItem value="minus">Minus</SelectItem>
              <SelectItem value="arrow-left">Arrow Left</SelectItem>
              <SelectItem value="arrow-right">Arrow Right</SelectItem>
              <SelectItem value="arrow-up">Arrow Up</SelectItem>
              <SelectItem value="arrow-down">Arrow Down</SelectItem>
              <SelectItem value="chevron-left">Chevron Left</SelectItem>
              <SelectItem value="chevron-right">Chevron Right</SelectItem>
              <SelectItem value="chevron-up">Chevron Up</SelectItem>
              <SelectItem value="chevron-down">Chevron Down</SelectItem>
              <SelectItem value="play">Play</SelectItem>
              <SelectItem value="pause">Pause</SelectItem>
              <SelectItem value="stop">Stop</SelectItem>
              <SelectItem value="volume-2">Volume</SelectItem>
              <SelectItem value="volume-x">Mute</SelectItem>
              <SelectItem value="home">Home</SelectItem>
              <SelectItem value="info">Info</SelectItem>
              <SelectItem value="alert-circle">Alert Circle</SelectItem>
              <SelectItem value="check-circle">Check Circle</SelectItem>
              <SelectItem value="x-circle">X Circle</SelectItem>
              <SelectItem value="help-circle">Help Circle</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="size">Size</Label>
          <Select
            value={elementProps?.size || "w-4 h-4"}
            onValueChange={(value) => onPropChange("size", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="w-3 h-3">Extra Small (12px)</SelectItem>
              <SelectItem value="w-4 h-4">Small (16px)</SelectItem>
              <SelectItem value="w-5 h-5">Medium (20px)</SelectItem>
              <SelectItem value="w-6 h-6">Large (24px)</SelectItem>
              <SelectItem value="w-8 h-8">Extra Large (32px)</SelectItem>
              <SelectItem value="w-10 h-10">2XL (40px)</SelectItem>
              <SelectItem value="w-12 h-12">3XL (48px)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="customSize">Custom Size</Label>
          <Input
            id="customSize"
            value={elementProps?.customSize || ""}
            onChange={(e) => onPropChange("customSize", e.target.value)}
            placeholder="e.g., 1.5rem, 24px"
          />
        </div>
      </div>

      {/* Colors */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Colors</h3>
        
        <div className="space-y-2">
          <Label>Icon Color</Label>
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
          <Label>Border Color</Label>
          <ColorPickerComponent
            value={elementProps?.borderColor || "transparent"}
            onChange={(color) => onPropChange("borderColor", color)}
          />
        </div>
      </div>

      {/* Styling */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Styling</h3>
        
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
          <Label htmlFor="padding">Padding</Label>
          <Select
            value={elementProps?.padding || "p-0"}
            onValueChange={(value) => onPropChange("padding", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select padding" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="p-0">None</SelectItem>
              <SelectItem value="p-1">Small</SelectItem>
              <SelectItem value="p-2">Medium</SelectItem>
              <SelectItem value="p-3">Large</SelectItem>
              <SelectItem value="p-4">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Effects */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Effects</h3>
        
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
          <div className="text-xs text-gray-500 text-center">
            {Math.round((elementProps?.opacity || 1) * 100)}%
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="rotation">Rotation</Label>
          <Slider
            value={[elementProps?.rotation || 0]}
            onValueChange={([value]) => onPropChange("rotation", value)}
            min={-360}
            max={360}
            step={1}
            className="w-full"
          />
          <div className="text-xs text-gray-500 text-center">
            {elementProps?.rotation || 0}°
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="scale">Scale</Label>
          <Slider
            value={[elementProps?.scale || 1]}
            onValueChange={([value]) => onPropChange("scale", value)}
            min={0.1}
            max={3}
            step={0.1}
            className="w-full"
          />
          <div className="text-xs text-gray-500 text-center">
            {elementProps?.scale || 1}x
          </div>
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
              <Label>Hover Color</Label>
              <ColorPickerComponent
                value={elementProps?.hoverColor || "#000000"}
                onChange={(color) => onPropChange("hoverColor", color)}
              />
            </div>

            <div className="space-y-2">
              <Label>Hover Background Color</Label>
              <ColorPickerComponent
                value={elementProps?.hoverBackgroundColor || "transparent"}
                onChange={(color) => onPropChange("hoverBackgroundColor", color)}
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
              <div className="text-xs text-gray-500 text-center">
                {elementProps?.hoverScale || 1}x
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="hoverRotation">Hover Rotation</Label>
              <Slider
                value={[elementProps?.hoverRotation || 0]}
                onValueChange={([value]) => onPropChange("hoverRotation", value)}
                min={-180}
                max={180}
                step={1}
                className="w-full"
              />
              <div className="text-xs text-gray-500 text-center">
                {elementProps?.hoverRotation || 0}°
              </div>
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
              <SelectValue placeholder="Select animation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="spin">Spin</SelectItem>
              <SelectItem value="pulse">Pulse</SelectItem>
              <SelectItem value="bounce">Bounce</SelectItem>
              <SelectItem value="ping">Ping</SelectItem>
              <SelectItem value="wiggle">Wiggle</SelectItem>
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
              <SelectValue placeholder="Select duration" />
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
          <Select
            value={elementProps?.role || ""}
            onValueChange={(value) => onPropChange("role", value === "none" ? "" : value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="button">Button</SelectItem>
              <SelectItem value="link">Link</SelectItem>
              <SelectItem value="img">Image</SelectItem>
              <SelectItem value="presentation">Presentation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}