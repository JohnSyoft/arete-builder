import React, { useState } from "react";
import { useParams } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
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
import { ColorPickerComponent, GradientColorPicker } from "@/components/ui/color-picker";
import { ImageUpload } from "@/components/ui/image-upload";
import { Button } from "@/components/ui/button";
import { Link, Loader2 } from "lucide-react";
import { useUpload } from "@/hooks/useUpload";
import { toast } from "sonner";

interface FlexPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}


export function FlexProperties({
  elementProps,
  onPropChange,
}: FlexPropertiesProps) {
  const params = useParams();
  const projectId = params.projectId as string;
  const [showManualInput, setShowManualInput] = useState(false);

  const { uploadSingle, isUploading } = useUpload();

  const handleImageUpload = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;

    try {
      const file = Array.isArray(files) ? files[0] : files[0];
      const uploadedFile = await uploadSingle(file);

      if (uploadedFile?.url) {
        onPropChange("backgroundImage", uploadedFile.url);
        toast.success("Background image uploaded successfully!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload image. Please try again.");
    }
  };

  return (
    <Accordion
      type="multiple"
      defaultValue={["layout", "spacing", "advanced"]}
      className="w-full"
    >
      {/* Layout Section */}
      <AccordionItem value="layout">
        <AccordionTrigger className="text-sm font-medium">
          Layout
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="flexDirection">Direction</Label>
            <Select
              value={elementProps?.flexDirection || "row"}
              onValueChange={(value) => onPropChange("flexDirection", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="row">Row (→)</SelectItem>
                <SelectItem value="column">Column (↓)</SelectItem>
                <SelectItem value="row-reverse">Row Reverse (←)</SelectItem>
                <SelectItem value="column-reverse">
                  Column Reverse (↑)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="gap">Gap Between Items</Label>
            <Select
              value={elementProps?.gap || "gap-4"}
              onValueChange={(value) => onPropChange("gap", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gap-0">No Gap (0px)</SelectItem>
                <SelectItem value="gap-px">1px</SelectItem>
                <SelectItem value="gap-0.5">2px</SelectItem>
                <SelectItem value="gap-1">4px</SelectItem>
                <SelectItem value="gap-1.5">6px</SelectItem>
                <SelectItem value="gap-2">8px</SelectItem>
                <SelectItem value="gap-2.5">10px</SelectItem>
                <SelectItem value="gap-3">12px</SelectItem>
                <SelectItem value="gap-3.5">14px</SelectItem>
                <SelectItem value="gap-4">16px</SelectItem>
                <SelectItem value="gap-5">20px</SelectItem>
                <SelectItem value="gap-6">24px</SelectItem>
                <SelectItem value="gap-7">28px</SelectItem>
                <SelectItem value="gap-8">32px</SelectItem>
                <SelectItem value="gap-9">36px</SelectItem>
                <SelectItem value="gap-10">40px</SelectItem>
                <SelectItem value="gap-11">44px</SelectItem>
                <SelectItem value="gap-12">48px</SelectItem>
                <SelectItem value="gap-14">56px</SelectItem>
                <SelectItem value="gap-16">64px</SelectItem>
                <SelectItem value="gap-20">80px</SelectItem>
                <SelectItem value="gap-24">96px</SelectItem>
                <SelectItem value="gap-28">112px</SelectItem>
                <SelectItem value="gap-32">128px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="justifyContent">Main Axis Alignment</Label>
            <Select
              value={elementProps?.justifyContent || "start"}
              onValueChange={(value) => onPropChange("justifyContent", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="between">Space Between</SelectItem>
                <SelectItem value="around">Space Around</SelectItem>
                <SelectItem value="evenly">Space Evenly</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="alignItems">Cross Axis Alignment</Label>
            <Select
              value={elementProps?.alignItems || "center"}
              onValueChange={(value) => onPropChange("alignItems", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Start</SelectItem>
                <SelectItem value="center">Center</SelectItem>
                <SelectItem value="end">End</SelectItem>
                <SelectItem value="stretch">Stretch</SelectItem>
                <SelectItem value="baseline">Baseline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="wrap">Flex Wrap</Label>
            <Select
              value={elementProps?.wrap || "nowrap"}
              onValueChange={(value) => onPropChange("wrap", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="nowrap">No Wrap</SelectItem>
                <SelectItem value="wrap">Wrap</SelectItem>
                <SelectItem value="wrap-reverse">Wrap Reverse</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Advanced Flex Properties */}
      <AccordionItem value="advanced">
        <AccordionTrigger className="text-sm font-medium">
          Advanced Flex
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="flexGrow">Flex Grow (for child items)</Label>
            <Select
              value={elementProps?.flexGrow || "default"}
              onValueChange={(value) =>
                onPropChange("flexGrow", value === "default" ? "" : value)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="grow-0">No Growth (0)</SelectItem>
                <SelectItem value="grow">Grow (1)</SelectItem>
                <SelectItem value="grow-[2]">Grow 2x</SelectItem>
                <SelectItem value="grow-[3]">Grow 3x</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="flexShrink">Flex Shrink (for child items)</Label>
            <Select
              value={elementProps?.flexShrink || "default"}
              onValueChange={(value) =>
                onPropChange("flexShrink", value === "default" ? "" : value)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="shrink-0">No Shrink (0)</SelectItem>
                <SelectItem value="shrink">Shrink (1)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="flexBasis">Flex Basis (initial size)</Label>
            <Select
              value={elementProps?.flexBasis || "default"}
              onValueChange={(value) =>
                onPropChange("flexBasis", value === "default" ? "" : value)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Auto" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Auto</SelectItem>
                <SelectItem value="basis-0">0</SelectItem>
                <SelectItem value="basis-1/2">50%</SelectItem>
                <SelectItem value="basis-1/3">33.33%</SelectItem>
                <SelectItem value="basis-2/3">66.66%</SelectItem>
                <SelectItem value="basis-1/4">25%</SelectItem>
                <SelectItem value="basis-3/4">75%</SelectItem>
                <SelectItem value="basis-full">100%</SelectItem>
                <SelectItem value="basis-[100px]">100px</SelectItem>
                <SelectItem value="basis-[200px]">200px</SelectItem>
                <SelectItem value="basis-[300px]">300px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="order">Flex Order</Label>
            <Select
              value={elementProps?.order || "default"}
              onValueChange={(value) =>
                onPropChange("order", value === "default" ? "" : value)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Default" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="order-first">First (-9999)</SelectItem>
                <SelectItem value="order-last">Last (9999)</SelectItem>
                <SelectItem value="order-1">1</SelectItem>
                <SelectItem value="order-2">2</SelectItem>
                <SelectItem value="order-3">3</SelectItem>
                <SelectItem value="order-4">4</SelectItem>
                <SelectItem value="order-5">5</SelectItem>
                <SelectItem value="order-6">6</SelectItem>
                <SelectItem value="order-7">7</SelectItem>
                <SelectItem value="order-8">8</SelectItem>
                <SelectItem value="order-9">9</SelectItem>
                <SelectItem value="order-10">10</SelectItem>
                <SelectItem value="order-11">11</SelectItem>
                <SelectItem value="order-12">12</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Spacing Section */}
      <AccordionItem value="spacing">
        <AccordionTrigger className="text-sm font-medium">
          Spacing & Overflow
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="overflowX">Horizontal Overflow</Label>
            <Select
              value={elementProps?.overflowX || "visible"}
              onValueChange={(value) => onPropChange("overflowX", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="visible">Visible (default)</SelectItem>
                <SelectItem value="hidden">Hidden</SelectItem>
                <SelectItem value="scroll">
                  Scroll (always show scrollbar)
                </SelectItem>
                <SelectItem value="auto">
                  Auto (scrollbar when needed)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="padding">Padding</Label>
            <Select
              value={elementProps?.padding || "p-4"}
              onValueChange={(value) => onPropChange("padding", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="p-0">No Padding (0px)</SelectItem>
                <SelectItem value="p-px">1px</SelectItem>
                <SelectItem value="p-0.5">2px</SelectItem>
                <SelectItem value="p-1">4px</SelectItem>
                <SelectItem value="p-1.5">6px</SelectItem>
                <SelectItem value="p-2">8px</SelectItem>
                <SelectItem value="p-2.5">10px</SelectItem>
                <SelectItem value="p-3">12px</SelectItem>
                <SelectItem value="p-3.5">14px</SelectItem>
                <SelectItem value="p-4">16px</SelectItem>
                <SelectItem value="p-5">20px</SelectItem>
                <SelectItem value="p-6">24px</SelectItem>
                <SelectItem value="p-7">28px</SelectItem>
                <SelectItem value="p-8">32px</SelectItem>
                <SelectItem value="p-9">36px</SelectItem>
                <SelectItem value="p-10">40px</SelectItem>
                <SelectItem value="p-11">44px</SelectItem>
                <SelectItem value="p-12">48px</SelectItem>
                <SelectItem value="p-14">56px</SelectItem>
                <SelectItem value="p-16">64px</SelectItem>
                <SelectItem value="p-20">80px</SelectItem>
                <SelectItem value="p-24">96px</SelectItem>
                <SelectItem value="px-4">Horizontal 16px</SelectItem>
                <SelectItem value="py-4">Vertical 16px</SelectItem>
                <SelectItem value="px-6 py-4">H: 24px, V: 16px</SelectItem>
                <SelectItem value="px-8 py-6">H: 32px, V: 24px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="margin">Margin</Label>
            <Select
              value={elementProps?.margin || "my-4"}
              onValueChange={(value) => onPropChange("margin", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="m-0">No Margin (0px)</SelectItem>
                <SelectItem value="m-px">1px All</SelectItem>
                <SelectItem value="m-0.5">2px All</SelectItem>
                <SelectItem value="m-1">4px All</SelectItem>
                <SelectItem value="m-2">8px All</SelectItem>
                <SelectItem value="m-3">12px All</SelectItem>
                <SelectItem value="m-4">16px All</SelectItem>
                <SelectItem value="m-5">20px All</SelectItem>
                <SelectItem value="m-6">24px All</SelectItem>
                <SelectItem value="m-8">32px All</SelectItem>
                <SelectItem value="m-10">40px All</SelectItem>
                <SelectItem value="m-12">48px All</SelectItem>
                <SelectItem value="mx-0">No Horizontal</SelectItem>
                <SelectItem value="mx-1">4px Horizontal</SelectItem>
                <SelectItem value="mx-2">8px Horizontal</SelectItem>
                <SelectItem value="mx-4">16px Horizontal</SelectItem>
                <SelectItem value="mx-6">24px Horizontal</SelectItem>
                <SelectItem value="mx-8">32px Horizontal</SelectItem>
                <SelectItem value="mx-auto">Auto Horizontal</SelectItem>
                <SelectItem value="my-0">No Vertical</SelectItem>
                <SelectItem value="my-1">4px Vertical</SelectItem>
                <SelectItem value="my-2">8px Vertical</SelectItem>
                <SelectItem value="my-4">16px Vertical</SelectItem>
                <SelectItem value="my-6">24px Vertical</SelectItem>
                <SelectItem value="my-8">32px Vertical</SelectItem>
                <SelectItem value="my-12">48px Vertical</SelectItem>
                <SelectItem value="mt-4">Top 16px</SelectItem>
                <SelectItem value="mb-4">Bottom 16px</SelectItem>
                <SelectItem value="ml-4">Left 16px</SelectItem>
                <SelectItem value="mr-4">Right 16px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="minHeight">Minimum Height</Label>
            <Select
              value={elementProps?.minHeight || "min-h-[60px]"}
              onValueChange={(value) => onPropChange("minHeight", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="min-h-0">No Min Height</SelectItem>
                <SelectItem value="min-h-[20px]">20px</SelectItem>
                <SelectItem value="min-h-[30px]">30px</SelectItem>
                <SelectItem value="min-h-[40px]">40px</SelectItem>
                <SelectItem value="min-h-[50px]">50px</SelectItem>
                <SelectItem value="min-h-[60px]">60px</SelectItem>
                <SelectItem value="min-h-[80px]">80px</SelectItem>
                <SelectItem value="min-h-[100px]">100px</SelectItem>
                <SelectItem value="min-h-[120px]">120px</SelectItem>
                <SelectItem value="min-h-[150px]">150px</SelectItem>
                <SelectItem value="min-h-[200px]">200px</SelectItem>
                <SelectItem value="min-h-[250px]">250px</SelectItem>
                <SelectItem value="min-h-[300px]">300px</SelectItem>
                <SelectItem value="min-h-[400px]">400px</SelectItem>
                <SelectItem value="min-h-[500px]">500px</SelectItem>
                <SelectItem value="min-h-screen">Full Screen</SelectItem>
                <SelectItem value="min-h-[50vh]">50% Viewport</SelectItem>
                <SelectItem value="min-h-[75vh]">75% Viewport</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Background Section */}
      <AccordionItem value="background">
        <AccordionTrigger className="text-sm font-medium">Background</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <ColorPickerComponent
            value={elementProps?.backgroundColor || ''}
            onChange={(value) => onPropChange('backgroundColor', value)}
            label="Background Color"
            placeholder="Select background color"
          />

          <div>
            <div className="flex items-center justify-between mb-2">
              <Label htmlFor="backgroundImage">Background Image</Label>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowManualInput(!showManualInput)}
                className="text-xs"
              >
                <Link className="w-3 h-3 mr-1" />
                {showManualInput ? "Upload" : "URL"}
              </Button>
            </div>

            {showManualInput ? (
              <Input
                id="backgroundImage"
                value={elementProps?.backgroundImage || ''}
                onChange={(e) => onPropChange('backgroundImage', e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="mt-1"
                disabled={isUploading}
              />
            ) : (
              <div className="relative">
                <ImageUpload
                  value={elementProps?.backgroundImage || ""}
                  onChange={(url) => onPropChange("backgroundImage", url)}
                  onFilesSelected={handleImageUpload}
                  multiple={false}
                  maxFiles={1}
                  placeholder={isUploading ? "Uploading..." : "Upload a background image"}
                  variant="preview"
                  disabled={isUploading}
                />
                {isUploading && (
                  <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-lg">
                    <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                  </div>
                )}
              </div>
            )}
          </div>

          {elementProps?.backgroundImage && (
            <>
              <div>
                <Label htmlFor="backgroundSize">Background Size</Label>
                <Select value={elementProps?.backgroundSize || "cover"} onValueChange={(value) => onPropChange('backgroundSize', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cover">Cover</SelectItem>
                    <SelectItem value="contain">Contain</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                    <SelectItem value="100%">100%</SelectItem>
                    <SelectItem value="100% 100%">100% 100%</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="backgroundPosition">Background Position</Label>
                <Select value={elementProps?.backgroundPosition || "center"} onValueChange={(value) => onPropChange('backgroundPosition', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
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

              <div>
                <Label htmlFor="backgroundRepeat">Background Repeat</Label>
                <Select value={elementProps?.backgroundRepeat || "no-repeat"} onValueChange={(value) => onPropChange('backgroundRepeat', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-repeat">No Repeat</SelectItem>
                    <SelectItem value="repeat">Repeat</SelectItem>
                    <SelectItem value="repeat-x">Repeat X</SelectItem>
                    <SelectItem value="repeat-y">Repeat Y</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="gradient">Gradient Background</Label>
            <Select value={elementProps?.gradient || "none"} onValueChange={(value) => onPropChange('gradient', value === "none" ? "" : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="linear">Linear Gradient</SelectItem>
                <SelectItem value="radial">Radial Gradient</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {elementProps?.gradient && (
            <>
              <div>
                <Label htmlFor="gradientDirection">Gradient Direction</Label>
                <Select value={elementProps?.gradientDirection || "to-r"} onValueChange={(value) => onPropChange('gradientDirection', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="to-r">To Right</SelectItem>
                    <SelectItem value="to-l">To Left</SelectItem>
                    <SelectItem value="to-t">To Top</SelectItem>
                    <SelectItem value="to-b">To Bottom</SelectItem>
                    <SelectItem value="to-tr">To Top Right</SelectItem>
                    <SelectItem value="to-tl">To Top Left</SelectItem>
                    <SelectItem value="to-br">To Bottom Right</SelectItem>
                    <SelectItem value="to-bl">To Bottom Left</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <GradientColorPicker
                key={elementProps?.gradientColors || 'default'}
                value={elementProps?.gradientColors || ''}
                onChange={(value) => onPropChange('gradientColors', value)}
                label="Gradient Colors"
                placeholder="Select gradient colors"
              />
            </>
          )}
        </AccordionContent>
      </AccordionItem>

      {/* Border & Shadow Section */}
      <AccordionItem value="border">
        <AccordionTrigger className="text-sm font-medium">Border & Shadow</AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="borderWidth">Border Width</Label>
            <Select value={elementProps?.borderWidth || "none"} onValueChange={(value) => onPropChange('borderWidth', value === "none" ? "" : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="1px">1px</SelectItem>
                <SelectItem value="2px">2px</SelectItem>
                <SelectItem value="4px">4px</SelectItem>
                <SelectItem value="8px">8px</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {elementProps?.borderWidth && (
            <>
              <ColorPickerComponent
                value={elementProps?.borderColor || ''}
                onChange={(value) => onPropChange('borderColor', value)}
                label="Border Color"
                placeholder="Select border color"
              />

              <div>
                <Label htmlFor="borderStyle">Border Style</Label>
                <Select value={elementProps?.borderStyle || "solid"} onValueChange={(value) => onPropChange('borderStyle', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solid">Solid</SelectItem>
                    <SelectItem value="dashed">Dashed</SelectItem>
                    <SelectItem value="dotted">Dotted</SelectItem>
                    <SelectItem value="double">Double</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          <div>
            <Label htmlFor="borderRadius">Border Radius</Label>
            <Select value={elementProps?.borderRadius || "none"} onValueChange={(value) => onPropChange('borderRadius', value === "none" ? "" : value)}>
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="None" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="4px">Small (4px)</SelectItem>
                <SelectItem value="8px">Medium (8px)</SelectItem>
                <SelectItem value="12px">Large (12px)</SelectItem>
                <SelectItem value="16px">Extra Large (16px)</SelectItem>
                <SelectItem value="50%">Round</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="boxShadow">Box Shadow</Label>
            <Input
              id="boxShadow"
              value={elementProps?.boxShadow || ''}
              onChange={(e) => onPropChange('boxShadow', e.target.value)}
              placeholder="0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="opacity">Opacity</Label>
            <Input
              id="opacity"
              type="number"
              min="0"
              max="1"
              step="0.1"
              value={elementProps?.opacity || 1}
              onChange={(e) => onPropChange('opacity', parseFloat(e.target.value))}
              className="mt-1"
            />
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
