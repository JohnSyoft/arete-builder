"use client";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { CMSFieldSelector } from "./CMSFieldSelector";

interface FormattedTextPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function FormattedTextProperties({
  elementProps,
  onPropChange,
}: FormattedTextPropertiesProps) {
  // Check if this is a CMS field (read-only content)
  const isCMSField = !!(elementProps?.cmsField && elementProps?.cmsFieldId && elementProps?.cmsCollectionId);
  
  return (
    <div className="space-y-4">
      {/* CMS Field Selector */}
      <CMSFieldSelector 
        elementProps={elementProps}
        onPropChange={onPropChange}
        fieldTypes={['formattedText', 'plainText']}
      />

      {/* CMS Field Info - only show if bound to CMS */}
      {isCMSField && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">CMS Field Bound</span>
          </div>
          <p className="text-xs text-green-600 mt-1">
            Content from "{elementProps?.cmsFieldLabel || elementProps?.cmsField}" field.
            Only styling can be edited.
          </p>
        </div>
      )}

      {/* Content Section */}
      <div>
        <Label htmlFor="text">Formatted Content</Label>
        <div className="mt-1">
          <RichTextEditor
            value={elementProps?.text || ""}
            onChange={(value) => onPropChange("text", value)}
            placeholder={isCMSField ? "Content populated from CMS" : "Start writing..."}
            className="min-h-[200px]"
            readOnly={isCMSField}
          />
        </div>
        {isCMSField && (
          <p className="text-xs text-gray-500 mt-1">
            This field is read-only because it displays dynamic content from your CMS.
          </p>
        )}
      </div>

      <Accordion type="multiple" className="w-full">
        {/* Typography Section */}
        <AccordionItem value="typography">
          <AccordionTrigger className="text-sm font-medium">
            Typography
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="fontFamily">Font Family</Label>
              <Select
                value={elementProps?.fontFamily || "default"}
                onValueChange={(value) =>
                  onPropChange("fontFamily", value === "default" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="font-sans">Sans Serif</SelectItem>
                  <SelectItem value="font-serif">Serif</SelectItem>
                  <SelectItem value="font-mono">Monospace</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fontSize">Font Size</Label>
              <Select
                value={elementProps?.fontSize || "text-base"}
                onValueChange={(value) => onPropChange("fontSize", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-xs">Extra Small</SelectItem>
                  <SelectItem value="text-sm">Small</SelectItem>
                  <SelectItem value="text-base">Base</SelectItem>
                  <SelectItem value="text-lg">Large</SelectItem>
                  <SelectItem value="text-xl">Extra Large</SelectItem>
                  <SelectItem value="text-2xl">2X Large</SelectItem>
                  <SelectItem value="text-3xl">3X Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="fontWeight">Font Weight</Label>
              <Select
                value={elementProps?.fontWeight || "font-normal"}
                onValueChange={(value) => onPropChange("fontWeight", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="font-thin">Thin</SelectItem>
                  <SelectItem value="font-light">Light</SelectItem>
                  <SelectItem value="font-normal">Normal</SelectItem>
                  <SelectItem value="font-medium">Medium</SelectItem>
                  <SelectItem value="font-semibold">Semi Bold</SelectItem>
                  <SelectItem value="font-bold">Bold</SelectItem>
                  <SelectItem value="font-extrabold">Extra Bold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="lineHeight">Line Height</Label>
              <Select
                value={elementProps?.lineHeight || "leading-relaxed"}
                onValueChange={(value) =>
                  onPropChange("lineHeight", value === "default" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="leading-none">None</SelectItem>
                  <SelectItem value="leading-tight">Tight</SelectItem>
                  <SelectItem value="leading-snug">Snug</SelectItem>
                  <SelectItem value="leading-normal">Normal</SelectItem>
                  <SelectItem value="leading-relaxed">Relaxed</SelectItem>
                  <SelectItem value="leading-loose">Loose</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="letterSpacing">Letter Spacing</Label>
              <Select
                value={elementProps?.letterSpacing || "default"}
                onValueChange={(value) =>
                  onPropChange(
                    "letterSpacing",
                    value === "default" ? "" : value
                  )
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="tracking-tighter">Tighter</SelectItem>
                  <SelectItem value="tracking-tight">Tight</SelectItem>
                  <SelectItem value="tracking-normal">Normal</SelectItem>
                  <SelectItem value="tracking-wide">Wide</SelectItem>
                  <SelectItem value="tracking-wider">Wider</SelectItem>
                  <SelectItem value="tracking-widest">Widest</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="textAlign">Text Alignment</Label>
              <Select
                value={elementProps?.textAlign || "text-left"}
                onValueChange={(value) => onPropChange("textAlign", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-left">Left</SelectItem>
                  <SelectItem value="text-center">Center</SelectItem>
                  <SelectItem value="text-right">Right</SelectItem>
                  <SelectItem value="text-justify">Justify</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Colors Section */}
        <AccordionItem value="colors">
          <AccordionTrigger className="text-sm font-medium">
            Colors
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="color">Text Color</Label>
              <Select
                value={elementProps?.color || "text-gray-900"}
                onValueChange={(value) => onPropChange("color", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="text-gray-900">Dark Gray</SelectItem>
                  <SelectItem value="text-gray-700">Gray</SelectItem>
                  <SelectItem value="text-gray-500">Light Gray</SelectItem>
                  <SelectItem value="text-black">Black</SelectItem>
                  <SelectItem value="text-white">White</SelectItem>
                  <SelectItem value="text-red-500">Red</SelectItem>
                  <SelectItem value="text-blue-500">Blue</SelectItem>
                  <SelectItem value="text-green-500">Green</SelectItem>
                  <SelectItem value="text-yellow-500">Yellow</SelectItem>
                  <SelectItem value="text-purple-500">Purple</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="backgroundColor">Background Color</Label>
              <Select
                value={elementProps?.backgroundColor || "transparent"}
                onValueChange={(value) =>
                  onPropChange(
                    "backgroundColor",
                    value === "transparent" ? "" : value
                  )
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transparent">Transparent</SelectItem>
                  <SelectItem value="bg-white">White</SelectItem>
                  <SelectItem value="bg-gray-50">Light Gray</SelectItem>
                  <SelectItem value="bg-gray-100">Gray 100</SelectItem>
                  <SelectItem value="bg-gray-200">Gray 200</SelectItem>
                  <SelectItem value="bg-red-50">Light Red</SelectItem>
                  <SelectItem value="bg-blue-50">Light Blue</SelectItem>
                  <SelectItem value="bg-green-50">Light Green</SelectItem>
                  <SelectItem value="bg-yellow-50">Light Yellow</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Spacing Section */}
        <AccordionItem value="spacing">
          <AccordionTrigger className="text-sm font-medium">
            Spacing
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="margin">Margin</Label>
              <Select
                value={elementProps?.margin || "my-4"}
                onValueChange={(value) =>
                  onPropChange("margin", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="m-1">Small</SelectItem>
                  <SelectItem value="m-2">Medium</SelectItem>
                  <SelectItem value="m-4">Large</SelectItem>
                  <SelectItem value="my-2">Vertical Small</SelectItem>
                  <SelectItem value="my-4">Vertical Medium</SelectItem>
                  <SelectItem value="my-6">Vertical Large</SelectItem>
                  <SelectItem value="mx-2">Horizontal Small</SelectItem>
                  <SelectItem value="mx-4">Horizontal Medium</SelectItem>
                  <SelectItem value="mx-6">Horizontal Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="padding">Padding</Label>
              <Select
                value={elementProps?.padding || "px-0 py-0"}
                onValueChange={(value) =>
                  onPropChange("padding", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="p-1">Small</SelectItem>
                  <SelectItem value="p-2">Medium</SelectItem>
                  <SelectItem value="p-4">Large</SelectItem>
                  <SelectItem value="px-2 py-1">Horizontal Small</SelectItem>
                  <SelectItem value="px-4 py-2">Horizontal Medium</SelectItem>
                  <SelectItem value="px-6 py-3">Horizontal Large</SelectItem>
                  <SelectItem value="px-0 py-2">Vertical Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Layout Section */}
        <AccordionItem value="layout">
          <AccordionTrigger className="text-sm font-medium">
            Layout
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="maxWidth">Max Width</Label>
              <Select
                value={elementProps?.maxWidth || "none"}
                onValueChange={(value) => onPropChange("maxWidth", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="max-w-xs">Extra Small</SelectItem>
                  <SelectItem value="max-w-sm">Small</SelectItem>
                  <SelectItem value="max-w-md">Medium</SelectItem>
                  <SelectItem value="max-w-lg">Large</SelectItem>
                  <SelectItem value="max-w-xl">Extra Large</SelectItem>
                  <SelectItem value="max-w-2xl">2X Large</SelectItem>
                  <SelectItem value="max-w-4xl">4X Large</SelectItem>
                  <SelectItem value="max-w-full">Full</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Border Section */}
        <AccordionItem value="border">
          <AccordionTrigger className="text-sm font-medium">
            Border & Radius
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="border">Border</Label>
              <Select
                value={elementProps?.border || "none"}
                onValueChange={(value) =>
                  onPropChange("border", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="border">Border</SelectItem>
                  <SelectItem value="border-2">Border 2px</SelectItem>
                  <SelectItem value="border-4">Border 4px</SelectItem>
                  <SelectItem value="border-gray-200">Light Gray</SelectItem>
                  <SelectItem value="border-gray-400">Gray</SelectItem>
                  <SelectItem value="border-gray-600">Dark Gray</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="borderRadius">Border Radius</Label>
              <Select
                value={elementProps?.borderRadius || "none"}
                onValueChange={(value) =>
                  onPropChange("borderRadius", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="rounded-sm">Small</SelectItem>
                  <SelectItem value="rounded">Medium</SelectItem>
                  <SelectItem value="rounded-md">Medium+</SelectItem>
                  <SelectItem value="rounded-lg">Large</SelectItem>
                  <SelectItem value="rounded-xl">Extra Large</SelectItem>
                  <SelectItem value="rounded-full">Full</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
