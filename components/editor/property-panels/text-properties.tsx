import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { CMSFieldSelector } from "./CMSFieldSelector";

interface TextPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function TextProperties({
  elementProps,
  onPropChange,
}: TextPropertiesProps) {
  // Check if this is a CMS field (read-only content)
  const isCMSField = !!(elementProps?.cmsField && elementProps?.cmsFieldId && elementProps?.cmsCollectionId);
  
  return (
    <div className="space-y-4">
      {/* CMS Field Selector */}
      <CMSFieldSelector 
        elementProps={elementProps}
        onPropChange={onPropChange}
        fieldTypes={['plainText', 'formattedText', 'date', 'number']}
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
        <Label htmlFor="text">Text Content</Label>
        <Textarea
          id="text"
          value={elementProps?.text || ""}
          onChange={(e) => onPropChange("text", e.target.value)}
          placeholder={isCMSField ? "Content populated from CMS" : "Enter text content"}
          className="mt-1"
          rows={3}
          disabled={isCMSField}
        />
        {isCMSField && (
          <p className="text-xs text-gray-500 mt-1">
            This field is read-only because it displays dynamic content from your CMS.
          </p>
        )}
      </div>

      <div>
        <Label htmlFor="tagName">Tag Type</Label>
        <Select
          value={elementProps?.tagName || "p"}
          onValueChange={(value) => onPropChange("tagName", value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="h1">Heading 1</SelectItem>
            <SelectItem value="h2">Heading 2</SelectItem>
            <SelectItem value="h3">Heading 3</SelectItem>
            <SelectItem value="h4">Heading 4</SelectItem>
            <SelectItem value="h5">Heading 5</SelectItem>
            <SelectItem value="h6">Heading 6</SelectItem>
            <SelectItem value="p">Paragraph</SelectItem>
            <SelectItem value="span">Span</SelectItem>
          </SelectContent>
        </Select>
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
                  <SelectValue placeholder="Default" />
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
                  <SelectItem value="text-xs">Extra Small (12px)</SelectItem>
                  <SelectItem value="text-sm">Small (14px)</SelectItem>
                  <SelectItem value="text-base">Base (16px)</SelectItem>
                  <SelectItem value="text-lg">Large (18px)</SelectItem>
                  <SelectItem value="text-xl">Extra Large (20px)</SelectItem>
                  <SelectItem value="text-2xl">2X Large (24px)</SelectItem>
                  <SelectItem value="text-3xl">3X Large (30px)</SelectItem>
                  <SelectItem value="text-4xl">4X Large (36px)</SelectItem>
                  <SelectItem value="text-5xl">5X Large (48px)</SelectItem>
                  <SelectItem value="text-6xl">6X Large (60px)</SelectItem>
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
                  <SelectItem value="font-thin">Thin (100)</SelectItem>
                  <SelectItem value="font-light">Light (300)</SelectItem>
                  <SelectItem value="font-normal">Normal (400)</SelectItem>
                  <SelectItem value="font-medium">Medium (500)</SelectItem>
                  <SelectItem value="font-semibold">Semibold (600)</SelectItem>
                  <SelectItem value="font-bold">Bold (700)</SelectItem>
                  <SelectItem value="font-extrabold">
                    Extra Bold (800)
                  </SelectItem>
                  <SelectItem value="font-black">Black (900)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="lineHeight">Line Height</Label>
              <Select
                value={elementProps?.lineHeight || "default"}
                onValueChange={(value) =>
                  onPropChange("lineHeight", value === "default" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="leading-none">None (1)</SelectItem>
                  <SelectItem value="leading-tight">Tight (1.25)</SelectItem>
                  <SelectItem value="leading-snug">Snug (1.375)</SelectItem>
                  <SelectItem value="leading-normal">Normal (1.5)</SelectItem>
                  <SelectItem value="leading-relaxed">
                    Relaxed (1.625)
                  </SelectItem>
                  <SelectItem value="leading-loose">Loose (2)</SelectItem>
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
                  <SelectValue placeholder="Default" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="tracking-tighter">
                    Tighter (-0.05em)
                  </SelectItem>
                  <SelectItem value="tracking-tight">
                    Tight (-0.025em)
                  </SelectItem>
                  <SelectItem value="tracking-normal">Normal (0em)</SelectItem>
                  <SelectItem value="tracking-wide">Wide (0.025em)</SelectItem>
                  <SelectItem value="tracking-wider">Wider (0.05em)</SelectItem>
                  <SelectItem value="tracking-widest">
                    Widest (0.1em)
                  </SelectItem>
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

            <div>
              <Label htmlFor="textTransform">Text Transform</Label>
              <Select
                value={elementProps?.textTransform || "none"}
                onValueChange={(value) =>
                  onPropChange("textTransform", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="uppercase">UPPERCASE</SelectItem>
                  <SelectItem value="lowercase">lowercase</SelectItem>
                  <SelectItem value="capitalize">Capitalize</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="textDecoration">Text Decoration</Label>
              <Select
                value={elementProps?.textDecoration || "none"}
                onValueChange={(value) =>
                  onPropChange("textDecoration", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="underline">Underline</SelectItem>
                  <SelectItem value="line-through">Line Through</SelectItem>
                  <SelectItem value="overline">Overline</SelectItem>
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
                  <SelectItem value="text-white">White</SelectItem>
                  <SelectItem value="text-black">Black</SelectItem>
                  <SelectItem value="text-gray-50">Gray 50</SelectItem>
                  <SelectItem value="text-gray-100">Gray 100</SelectItem>
                  <SelectItem value="text-gray-200">Gray 200</SelectItem>
                  <SelectItem value="text-gray-300">Gray 300</SelectItem>
                  <SelectItem value="text-gray-400">Gray 400</SelectItem>
                  <SelectItem value="text-gray-500">Gray 500</SelectItem>
                  <SelectItem value="text-gray-600">Gray 600</SelectItem>
                  <SelectItem value="text-gray-700">Gray 700</SelectItem>
                  <SelectItem value="text-gray-800">Gray 800</SelectItem>
                  <SelectItem value="text-gray-900">Gray 900</SelectItem>
                  <SelectItem value="text-blue-50">Blue 50</SelectItem>
                  <SelectItem value="text-blue-100">Blue 100</SelectItem>
                  <SelectItem value="text-blue-200">Blue 200</SelectItem>
                  <SelectItem value="text-blue-300">Blue 300</SelectItem>
                  <SelectItem value="text-blue-400">Blue 400</SelectItem>
                  <SelectItem value="text-blue-500">Blue 500</SelectItem>
                  <SelectItem value="text-blue-600">Blue 600</SelectItem>
                  <SelectItem value="text-blue-700">Blue 700</SelectItem>
                  <SelectItem value="text-blue-800">Blue 800</SelectItem>
                  <SelectItem value="text-blue-900">Blue 900</SelectItem>
                  <SelectItem value="text-red-500">Red 500</SelectItem>
                  <SelectItem value="text-red-600">Red 600</SelectItem>
                  <SelectItem value="text-red-700">Red 700</SelectItem>
                  <SelectItem value="text-green-500">Green 500</SelectItem>
                  <SelectItem value="text-green-600">Green 600</SelectItem>
                  <SelectItem value="text-green-700">Green 700</SelectItem>
                  <SelectItem value="text-yellow-500">Yellow 500</SelectItem>
                  <SelectItem value="text-yellow-600">Yellow 600</SelectItem>
                  <SelectItem value="text-purple-500">Purple 500</SelectItem>
                  <SelectItem value="text-purple-600">Purple 600</SelectItem>
                  <SelectItem value="text-indigo-500">Indigo 500</SelectItem>
                  <SelectItem value="text-indigo-600">Indigo 600</SelectItem>
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
                  <SelectValue placeholder="Transparent" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="transparent">Transparent</SelectItem>
                  <SelectItem value="bg-white">White</SelectItem>
                  <SelectItem value="bg-black">Black</SelectItem>
                  <SelectItem value="bg-gray-50">Gray 50</SelectItem>
                  <SelectItem value="bg-gray-100">Gray 100</SelectItem>
                  <SelectItem value="bg-gray-200">Gray 200</SelectItem>
                  <SelectItem value="bg-gray-300">Gray 300</SelectItem>
                  <SelectItem value="bg-gray-800">Gray 800</SelectItem>
                  <SelectItem value="bg-gray-900">Gray 900</SelectItem>
                  <SelectItem value="bg-blue-50">Blue 50</SelectItem>
                  <SelectItem value="bg-blue-100">Blue 100</SelectItem>
                  <SelectItem value="bg-blue-500">Blue 500</SelectItem>
                  <SelectItem value="bg-blue-600">Blue 600</SelectItem>
                  <SelectItem value="bg-red-50">Red 50</SelectItem>
                  <SelectItem value="bg-red-100">Red 100</SelectItem>
                  <SelectItem value="bg-red-500">Red 500</SelectItem>
                  <SelectItem value="bg-green-50">Green 50</SelectItem>
                  <SelectItem value="bg-green-100">Green 100</SelectItem>
                  <SelectItem value="bg-green-500">Green 500</SelectItem>
                  <SelectItem value="bg-yellow-50">Yellow 50</SelectItem>
                  <SelectItem value="bg-yellow-100">Yellow 100</SelectItem>
                  <SelectItem value="bg-purple-50">Purple 50</SelectItem>
                  <SelectItem value="bg-purple-100">Purple 100</SelectItem>
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
                value={elementProps?.margin || "my-2"}
                onValueChange={(value) =>
                  onPropChange("margin", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="m-1">All Sides (4px)</SelectItem>
                  <SelectItem value="m-2">All Sides (8px)</SelectItem>
                  <SelectItem value="m-4">All Sides (16px)</SelectItem>
                  <SelectItem value="m-6">All Sides (24px)</SelectItem>
                  <SelectItem value="m-8">All Sides (32px)</SelectItem>
                  <SelectItem value="my-1">Top & Bottom (4px)</SelectItem>
                  <SelectItem value="my-2">Top & Bottom (8px)</SelectItem>
                  <SelectItem value="my-4">Top & Bottom (16px)</SelectItem>
                  <SelectItem value="my-6">Top & Bottom (24px)</SelectItem>
                  <SelectItem value="my-8">Top & Bottom (32px)</SelectItem>
                  <SelectItem value="mx-1">Left & Right (4px)</SelectItem>
                  <SelectItem value="mx-2">Left & Right (8px)</SelectItem>
                  <SelectItem value="mx-4">Left & Right (16px)</SelectItem>
                  <SelectItem value="mx-auto">Horizontal Center</SelectItem>
                  <SelectItem value="mt-4">Top (16px)</SelectItem>
                  <SelectItem value="mb-4">Bottom (16px)</SelectItem>
                  <SelectItem value="ml-4">Left (16px)</SelectItem>
                  <SelectItem value="mr-4">Right (16px)</SelectItem>
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
                  <SelectItem value="p-1">All Sides (4px)</SelectItem>
                  <SelectItem value="p-2">All Sides (8px)</SelectItem>
                  <SelectItem value="p-4">All Sides (16px)</SelectItem>
                  <SelectItem value="p-6">All Sides (24px)</SelectItem>
                  <SelectItem value="p-8">All Sides (32px)</SelectItem>
                  <SelectItem value="py-1 px-2">
                    Vertical 4px, Horizontal 8px
                  </SelectItem>
                  <SelectItem value="py-2 px-4">
                    Vertical 8px, Horizontal 16px
                  </SelectItem>
                  <SelectItem value="py-3 px-6">
                    Vertical 12px, Horizontal 24px
                  </SelectItem>
                  <SelectItem value="py-4 px-8">
                    Vertical 16px, Horizontal 32px
                  </SelectItem>
                  <SelectItem value="px-0 py-0">None</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Effects Section */}
        <AccordionItem value="effects">
          <AccordionTrigger className="text-sm font-medium">
            Effects
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="textShadow">Text Shadow</Label>
              <Select
                value={elementProps?.textShadow || "none"}
                onValueChange={(value) =>
                  onPropChange("textShadow", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="drop-shadow-sm">Small</SelectItem>
                  <SelectItem value="drop-shadow">Default</SelectItem>
                  <SelectItem value="drop-shadow-md">Medium</SelectItem>
                  <SelectItem value="drop-shadow-lg">Large</SelectItem>
                  <SelectItem value="drop-shadow-xl">Extra Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="opacity">Opacity</Label>
              <Select
                value={elementProps?.opacity || "full"}
                onValueChange={(value) =>
                  onPropChange("opacity", value === "full" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="100%" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full">100%</SelectItem>
                  <SelectItem value="opacity-95">95%</SelectItem>
                  <SelectItem value="opacity-90">90%</SelectItem>
                  <SelectItem value="opacity-75">75%</SelectItem>
                  <SelectItem value="opacity-50">50%</SelectItem>
                  <SelectItem value="opacity-25">25%</SelectItem>
                  <SelectItem value="opacity-10">10%</SelectItem>
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
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="rounded-sm">Small (2px)</SelectItem>
                  <SelectItem value="rounded">Default (4px)</SelectItem>
                  <SelectItem value="rounded-md">Medium (6px)</SelectItem>
                  <SelectItem value="rounded-lg">Large (8px)</SelectItem>
                  <SelectItem value="rounded-xl">Extra Large (12px)</SelectItem>
                  <SelectItem value="rounded-2xl">2X Large (16px)</SelectItem>
                  <SelectItem value="rounded-full">Full</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="border">Border</Label>
              <Select
                value={elementProps?.border || "none"}
                onValueChange={(value) =>
                  onPropChange("border", value === "none" ? "" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="None" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="border">1px Gray</SelectItem>
                  <SelectItem value="border-2">2px Gray</SelectItem>
                  <SelectItem value="border border-gray-300">
                    1px Gray 300
                  </SelectItem>
                  <SelectItem value="border border-gray-400">
                    1px Gray 400
                  </SelectItem>
                  <SelectItem value="border border-blue-500">
                    1px Blue
                  </SelectItem>
                  <SelectItem value="border border-red-500">1px Red</SelectItem>
                  <SelectItem value="border border-green-500">
                    1px Green
                  </SelectItem>
                  <SelectItem value="border-dashed border-gray-300">
                    Dashed Gray
                  </SelectItem>
                  <SelectItem value="border-dotted border-gray-300">
                    Dotted Gray
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
