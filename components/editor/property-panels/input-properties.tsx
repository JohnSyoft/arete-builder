import React from "react"
import { useNode } from "@craftjs/core"
import { InputProps } from "@/components/blocks/Basic/Input"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CMSFieldSelector } from "./CMSFieldSelector"

interface InputPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function InputProperties({ elementProps, onPropChange }: InputPropertiesProps) {
  // Check if this is a CMS field (read-only content)
  const isCMSField = !!(elementProps?.cmsField && elementProps?.cmsFieldId && elementProps?.cmsCollectionId);

  return (
    <div className="space-y-4">
      {/* CMS Field Selector */}
      <CMSFieldSelector 
        elementProps={elementProps}
        onPropChange={onPropChange}
        fieldTypes={['plainText', 'number', 'email', 'url', 'tel']}
      />

      {/* CMS Field Info - only show if bound to CMS */}
      {isCMSField && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">CMS Field Bound</span>
          </div>
          <p className="text-xs text-green-600 mt-1">
            Input from "{elementProps?.cmsFieldLabel || elementProps?.cmsField}" field.
            Only styling can be edited.
          </p>
        </div>
      )}

      <Accordion type="multiple" className="w-full">
        {/* Basic Settings */}
        <AccordionItem value="basic">
          <AccordionTrigger className="text-sm font-medium">Basic Settings</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="placeholder">Placeholder Text</Label>
              <Input
                id="placeholder"
                value={elementProps?.placeholder || ""}
                onChange={(e) => onPropChange('placeholder', e.target.value)}
                placeholder="Enter placeholder text"
                className="mt-1"
                disabled={isCMSField}
              />
            </div>

            <div>
              <Label htmlFor="type">Input Type</Label>
              <Select
                value={elementProps?.type || "text"}
                onValueChange={(value) => onPropChange('type', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text">Text</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="password">Password</SelectItem>
                  <SelectItem value="number">Number</SelectItem>
                  <SelectItem value="tel">Phone</SelectItem>
                  <SelectItem value="url">URL</SelectItem>
                  <SelectItem value="search">Search</SelectItem>
                  <SelectItem value="date">Date</SelectItem>
                  <SelectItem value="time">Time</SelectItem>
                  <SelectItem value="datetime-local">Date & Time</SelectItem>
                  <SelectItem value="color">Color</SelectItem>
                  <SelectItem value="file">File</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="value">Default Value</Label>
              <Input
                id="value"
                value={elementProps?.value || ""}
                onChange={(e) => onPropChange('value', e.target.value)}
                placeholder="Enter default value"
                className="mt-1"
                disabled={isCMSField}
              />
            </div>

            <div>
              <Label htmlFor="name">Name Attribute</Label>
              <Input
                id="name"
                value={elementProps?.name || ""}
                onChange={(e) => onPropChange('name', e.target.value)}
                placeholder="input-name"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="id">ID Attribute</Label>
              <Input
                id="id"
                value={elementProps?.id || ""}
                onChange={(e) => onPropChange('id', e.target.value)}
                placeholder="input-id"
                className="mt-1"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Validation & Behavior */}
        <AccordionItem value="validation">
          <AccordionTrigger className="text-sm font-medium">Validation & Behavior</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="required"
                checked={!!elementProps?.required}
                onCheckedChange={(checked) => onPropChange('required', checked)}
              />
              <Label htmlFor="required">Required Field</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="disabled"
                checked={!!elementProps?.disabled}
                onCheckedChange={(checked) => onPropChange('disabled', checked)}
              />
              <Label htmlFor="disabled">Disabled</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="readonly"
                checked={!!elementProps?.readOnly}
                onCheckedChange={(checked) => onPropChange('readOnly', checked)}
              />
              <Label htmlFor="readonly">Read Only</Label>
            </div>

            <div>
              <Label htmlFor="minLength">Minimum Length</Label>
              <Input
                id="minLength"
                type="number"
                value={elementProps?.minLength || ""}
                onChange={(e) => onPropChange('minLength', e.target.value)}
                placeholder="0"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="maxLength">Maximum Length</Label>
              <Input
                id="maxLength"
                type="number"
                value={elementProps?.maxLength || ""}
                onChange={(e) => onPropChange('maxLength', e.target.value)}
                placeholder="100"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="pattern">Pattern (Regex)</Label>
              <Input
                id="pattern"
                value={elementProps?.pattern || ""}
                onChange={(e) => onPropChange('pattern', e.target.value)}
                placeholder="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="errorMessage">Error Message</Label>
              <Input
                id="errorMessage"
                value={elementProps?.errorMessage || ""}
                onChange={(e) => onPropChange('errorMessage', e.target.value)}
                placeholder="Please enter a valid value"
                className="mt-1"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Styling */}
        <AccordionItem value="styling">
          <AccordionTrigger className="text-sm font-medium">Styling</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="width">Width</Label>
              <Select
                value={elementProps?.width || "w-full"}
                onValueChange={(value) => onPropChange('width', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="w-auto">Auto</SelectItem>
                  <SelectItem value="w-full">Full Width</SelectItem>
                  <SelectItem value="w-1/2">Half Width</SelectItem>
                  <SelectItem value="w-1/3">One Third</SelectItem>
                  <SelectItem value="w-2/3">Two Thirds</SelectItem>
                  <SelectItem value="w-1/4">Quarter Width</SelectItem>
                  <SelectItem value="w-3/4">Three Quarters</SelectItem>
                  <SelectItem value="w-48">Fixed (192px)</SelectItem>
                  <SelectItem value="w-64">Fixed (256px)</SelectItem>
                  <SelectItem value="w-80">Fixed (320px)</SelectItem>
                  <SelectItem value="w-96">Fixed (384px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="height">Height</Label>
              <Select
                value={elementProps?.height || "h-10"}
                onValueChange={(value) => onPropChange('height', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="h-8">Small (32px)</SelectItem>
                  <SelectItem value="h-10">Medium (40px)</SelectItem>
                  <SelectItem value="h-12">Large (48px)</SelectItem>
                  <SelectItem value="h-14">Extra Large (56px)</SelectItem>
                  <SelectItem value="h-16">2X Large (64px)</SelectItem>
                  <SelectItem value="h-auto">Auto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                value={elementProps?.fontSize || "text-sm"}
                onValueChange={(value) => onPropChange('fontSize', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-xs">Extra Small (12px)</SelectItem>
                  <SelectItem value="text-sm">Small (14px)</SelectItem>
                  <SelectItem value="text-base">Base (16px)</SelectItem>
                  <SelectItem value="text-lg">Large (18px)</SelectItem>
                  <SelectItem value="text-xl">Extra Large (20px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderRadius">Border Radius</Label>
              <Select
                value={elementProps?.borderRadius || "rounded-md"}
                onValueChange={(value) => onPropChange('borderRadius', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="rounded-none">None</SelectItem>
                  <SelectItem value="rounded-sm">Small (2px)</SelectItem>
                  <SelectItem value="rounded">Default (4px)</SelectItem>
                  <SelectItem value="rounded-md">Medium (6px)</SelectItem>
                  <SelectItem value="rounded-lg">Large (8px)</SelectItem>
                  <SelectItem value="rounded-xl">Extra Large (12px)</SelectItem>
                  <SelectItem value="rounded-full">Full</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderWidth">Border Width</Label>
              <Select
                value={elementProps?.borderWidth || "border"}
                onValueChange={(value) => onPropChange('borderWidth', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="border-0">None</SelectItem>
                  <SelectItem value="border">Thin (1px)</SelectItem>
                  <SelectItem value="border-2">Medium (2px)</SelectItem>
                  <SelectItem value="border-4">Thick (4px)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderStyle">Border Style</Label>
              <Select
                value={elementProps?.borderStyle || "border-solid"}
                onValueChange={(value) => onPropChange('borderStyle', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="border-solid">Solid</SelectItem>
                  <SelectItem value="border-dashed">Dashed</SelectItem>
                  <SelectItem value="border-dotted">Dotted</SelectItem>
                  <SelectItem value="border-double">Double</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Colors */}
        <AccordionItem value="colors">
          <AccordionTrigger className="text-sm font-medium">Colors</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="textColor">Text Color</Label>
              <Select
                value={elementProps?.textColor || "text-gray-900"}
                onValueChange={(value) => onPropChange('textColor', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-gray-900">Dark Gray</SelectItem>
                  <SelectItem value="text-gray-700">Medium Gray</SelectItem>
                  <SelectItem value="text-gray-500">Light Gray</SelectItem>
                  <SelectItem value="text-black">Black</SelectItem>
                  <SelectItem value="text-white">White</SelectItem>
                  <SelectItem value="text-blue-600">Blue</SelectItem>
                  <SelectItem value="text-red-600">Red</SelectItem>
                  <SelectItem value="text-green-600">Green</SelectItem>
                  <SelectItem value="text-purple-600">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="backgroundColor">Background Color</Label>
              <Select
                value={elementProps?.backgroundColor || "bg-white"}
                onValueChange={(value) => onPropChange('backgroundColor', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bg-white">White</SelectItem>
                  <SelectItem value="bg-gray-50">Light Gray</SelectItem>
                  <SelectItem value="bg-gray-100">Gray 100</SelectItem>
                  <SelectItem value="bg-gray-200">Gray 200</SelectItem>
                  <SelectItem value="bg-blue-50">Light Blue</SelectItem>
                  <SelectItem value="bg-red-50">Light Red</SelectItem>
                  <SelectItem value="bg-green-50">Light Green</SelectItem>
                  <SelectItem value="bg-yellow-50">Light Yellow</SelectItem>
                  <SelectItem value="bg-transparent">Transparent</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderColor">Border Color</Label>
              <Select
                value={elementProps?.borderColor || "border-gray-300"}
                onValueChange={(value) => onPropChange('borderColor', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="border-gray-200">Light Gray</SelectItem>
                  <SelectItem value="border-gray-300">Gray</SelectItem>
                  <SelectItem value="border-gray-400">Dark Gray</SelectItem>
                  <SelectItem value="border-blue-300">Blue</SelectItem>
                  <SelectItem value="border-red-300">Red</SelectItem>
                  <SelectItem value="border-green-300">Green</SelectItem>
                  <SelectItem value="border-purple-300">Purple</SelectItem>
                  <SelectItem value="border-transparent">Transparent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Spacing */}
        <AccordionItem value="spacing">
          <AccordionTrigger className="text-sm font-medium">Spacing</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="padding">Padding</Label>
              <Select
                value={elementProps?.padding || "px-3 py-2"}
                onValueChange={(value) => onPropChange('padding', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="px-2 py-1">Small (8px x 4px)</SelectItem>
                  <SelectItem value="px-3 py-2">Medium (12px x 8px)</SelectItem>
                  <SelectItem value="px-4 py-3">Large (16px x 12px)</SelectItem>
                  <SelectItem value="px-6 py-4">Extra Large (24px x 16px)</SelectItem>
                  <SelectItem value="p-0">None</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="margin">Margin</Label>
              <Select
                value={elementProps?.margin || "m-0"}
                onValueChange={(value) => onPropChange('margin', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m-0">None</SelectItem>
                  <SelectItem value="m-1">Small (4px)</SelectItem>
                  <SelectItem value="m-2">Medium (8px)</SelectItem>
                  <SelectItem value="m-4">Large (16px)</SelectItem>
                  <SelectItem value="my-2">Vertical (8px)</SelectItem>
                  <SelectItem value="mx-2">Horizontal (8px)</SelectItem>
                  <SelectItem value="mx-auto">Center</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Effects */}
        <AccordionItem value="effects">
          <AccordionTrigger className="text-sm font-medium">Effects</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="boxShadow">Box Shadow</Label>
              <Select
                value={elementProps?.boxShadow || "shadow-sm"}
                onValueChange={(value) => onPropChange('boxShadow', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shadow-none">None</SelectItem>
                  <SelectItem value="shadow-sm">Small</SelectItem>
                  <SelectItem value="shadow">Default</SelectItem>
                  <SelectItem value="shadow-md">Medium</SelectItem>
                  <SelectItem value="shadow-lg">Large</SelectItem>
                  <SelectItem value="shadow-xl">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="opacity">Opacity</Label>
              <Select
                value={elementProps?.opacity || "opacity-100"}
                onValueChange={(value) => onPropChange('opacity', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="opacity-100">100%</SelectItem>
                  <SelectItem value="opacity-90">90%</SelectItem>
                  <SelectItem value="opacity-75">75%</SelectItem>
                  <SelectItem value="opacity-50">50%</SelectItem>
                  <SelectItem value="opacity-25">25%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="focusRing">Focus Ring</Label>
              <Select
                value={elementProps?.focusRing || "focus:ring-2"}
                onValueChange={(value) => onPropChange('focusRing', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="focus:ring-0">None</SelectItem>
                  <SelectItem value="focus:ring-1">Thin</SelectItem>
                  <SelectItem value="focus:ring-2">Default</SelectItem>
                  <SelectItem value="focus:ring-4">Thick</SelectItem>
                  <SelectItem value="focus:ring-8">Extra Thick</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Accessibility */}
        <AccordionItem value="accessibility">
          <AccordionTrigger className="text-sm font-medium">Accessibility</AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="ariaLabel">Aria Label</Label>
              <Input
                id="ariaLabel"
                value={elementProps?.ariaLabel || ""}
                onChange={(e) => onPropChange('ariaLabel', e.target.value)}
                placeholder="Descriptive label for screen readers"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="ariaDescribedBy">Aria Described By</Label>
              <Input
                id="ariaDescribedBy"
                value={elementProps?.ariaDescribedBy || ""}
                onChange={(e) => onPropChange('ariaDescribedBy', e.target.value)}
                placeholder="ID of element that describes this input"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="tabIndex">Tab Index</Label>
              <Input
                id="tabIndex"
                type="number"
                value={elementProps?.tabIndex || ""}
                onChange={(e) => onPropChange('tabIndex', e.target.value)}
                placeholder="0"
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="autoComplete">Auto Complete</Label>
              <Select
                value={elementProps?.autoComplete || "off"}
                onValueChange={(value) => onPropChange('autoComplete', value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="off">Off</SelectItem>
                  <SelectItem value="on">On</SelectItem>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="username">Username</SelectItem>
                  <SelectItem value="current-password">Current Password</SelectItem>
                  <SelectItem value="new-password">New Password</SelectItem>
                  <SelectItem value="tel">Phone</SelectItem>
                  <SelectItem value="url">URL</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
