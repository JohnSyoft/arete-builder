import { useState } from "react";
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
import { ImageUpload } from "@/components/ui/image-upload";
import { Button } from "@/components/ui/button";
import { Link, Loader2 } from "lucide-react";
import { useUpload } from "@/hooks/useUpload";
import { toast } from "sonner";
import { CMSFieldSelector } from "./CMSFieldSelector";

interface ImagePropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function ImageProperties({
  elementProps,
  onPropChange,
}: ImagePropertiesProps) {
  const params = useParams();
  const projectId = params.projectId as string;
  const [showManualInput, setShowManualInput] = useState(false);

  const { uploadSingle, isUploading } = useUpload();
  
  // Check if this is a CMS field (read-only content)
  const isCMSField = !!(elementProps?.cmsField && elementProps?.cmsFieldId && elementProps?.cmsCollectionId);

  const handleImageUpload = async (files: File[]) => {
    if (!files || files.length === 0) return;

    try {
      const file = files[0];
      const uploadedFile = await uploadSingle(file);

      if (uploadedFile?.url) {
        onPropChange("src", uploadedFile.url);
        toast.success("Image uploaded successfully!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="space-y-4">
      {/* CMS Field Selector */}
      <CMSFieldSelector 
        elementProps={elementProps}
        onPropChange={onPropChange}
        fieldTypes={['image', 'gallery']}
      />

      {/* CMS Field Info - only show if bound to CMS */}
      {isCMSField && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium text-green-800">CMS Field Bound</span>
          </div>
          <p className="text-xs text-green-600 mt-1">
            Image from "{elementProps?.cmsFieldLabel || elementProps?.cmsField}" field.
            Only styling can be edited.
          </p>
        </div>
      )}

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="src">Image</Label>
          {!isCMSField && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowManualInput(!showManualInput)}
              className="text-xs"
            >
              <Link className="w-3 h-3 mr-1" />
              {showManualInput ? "Upload" : "URL"}
            </Button>
          )}
        </div>

        {showManualInput ? (
          <Input
            id="src"
            value={elementProps?.src || ""}
            onChange={(e) => onPropChange("src", e.target.value)}
            placeholder={isCMSField ? "Image populated from CMS" : "https://example.com/image.jpg"}
            className="mt-1"
            disabled={isUploading || isCMSField}
          />
        ) : (
          <div className="relative">
            <ImageUpload
              value={elementProps?.src || ""}
              onChange={(url) => onPropChange("src", url)}
              onFilesSelected={handleImageUpload}
              multiple={false}
              maxFiles={1}
              placeholder={isCMSField ? "Image from CMS field" : (isUploading ? "Uploading..." : "Upload an image")}
              variant="preview"
              disabled={isUploading || isCMSField}
            />
            {isUploading && (
              <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-lg">
                <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        <Label htmlFor="alt">Alt Text</Label>
        <Input
          id="alt"
          value={elementProps?.alt || ""}
          onChange={(e) => onPropChange("alt", e.target.value)}
          placeholder="Describe the image"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="width">Width</Label>
        <Input
          id="width"
          value={elementProps?.width || "300px"}
          onChange={(e) => onPropChange("width", e.target.value)}
          placeholder="300px, 100%, auto"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="height">Height</Label>
        <Input
          id="height"
          value={elementProps?.height || "200px"}
          onChange={(e) => onPropChange("height", e.target.value)}
          placeholder="200px, auto, 100%"
          className="mt-1"
        />
      </div>

      <div>
        <Label htmlFor="objectFit">Object Fit</Label>
        <Select
          value={elementProps?.objectFit || "object-cover"}
          onValueChange={(value) => onPropChange("objectFit", value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="object-cover">Cover</SelectItem>
            <SelectItem value="object-contain">Contain</SelectItem>
            <SelectItem value="object-fill">Fill</SelectItem>
            <SelectItem value="object-none">None</SelectItem>
            <SelectItem value="object-scale-down">Scale Down</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="borderRadius">Border Radius</Label>
        <Select
          value={elementProps?.borderRadius || "rounded-lg"}
          onValueChange={(value) => onPropChange("borderRadius", value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rounded-none">None</SelectItem>
            <SelectItem value="rounded-sm">Small</SelectItem>
            <SelectItem value="rounded">Default</SelectItem>
            <SelectItem value="rounded-lg">Large</SelectItem>
            <SelectItem value="rounded-xl">Extra Large</SelectItem>
            <SelectItem value="rounded-full">Full</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Select
          value={elementProps?.margin || "my-2"}
          onValueChange={(value) => onPropChange("margin", value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="m-0">None</SelectItem>
            <SelectItem value="my-1">Small Y</SelectItem>
            <SelectItem value="my-2">Medium Y</SelectItem>
            <SelectItem value="my-4">Large Y</SelectItem>
            <SelectItem value="m-2">All Small</SelectItem>
            <SelectItem value="m-4">All Medium</SelectItem>
            <SelectItem value="m-8">All Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="padding">Padding</Label>
        <Select
          value={elementProps?.padding || "p-0"}
          onValueChange={(value) => onPropChange("padding", value)}
        >
          <SelectTrigger className="mt-1">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="p-0">None</SelectItem>
            <SelectItem value="p-1">Small</SelectItem>
            <SelectItem value="p-2">Medium</SelectItem>
            <SelectItem value="p-4">Large</SelectItem>
            <SelectItem value="p-8">Extra Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Animation Properties */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-3">Animation</h4>
        
        <div>
          <Label htmlFor="animation">Animation Type</Label>
          <Select
            value={elementProps?.animation || "none"}
            onValueChange={(value) => onPropChange("animation", value === "none" ? "" : value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select animation" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="pulse">Pulse</SelectItem>
              <SelectItem value="bounce">Bounce</SelectItem>
              <SelectItem value="spin">Spin</SelectItem>
              <SelectItem value="ping">Ping</SelectItem>
              <SelectItem value="wiggle">Wiggle</SelectItem>
              <SelectItem value="float">Float</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {elementProps?.animation && elementProps?.animation !== "none" && (
          <>
            <div className="grid grid-cols-2 gap-2 mt-3">
              <div>
                <Label htmlFor="animationDuration">Duration</Label>
                <Input
                  id="animationDuration"
                  value={elementProps?.animationDuration || "150ms"}
                  onChange={(e) => onPropChange("animationDuration", e.target.value)}
                  placeholder="150ms"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="animationDelay">Delay</Label>
                <Input
                  id="animationDelay"
                  value={elementProps?.animationDelay || "0ms"}
                  onChange={(e) => onPropChange("animationDelay", e.target.value)}
                  placeholder="0ms"
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-3">
              <div>
                <Label htmlFor="animationDirection">Direction</Label>
                <Select
                  value={elementProps?.animationDirection || "normal"}
                  onValueChange={(value) => onPropChange("animationDirection", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="reverse">Reverse</SelectItem>
                    <SelectItem value="alternate">Alternate</SelectItem>
                    <SelectItem value="alternate-reverse">Alternate Reverse</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="animationIteration">Iteration</Label>
                <Select
                  value={elementProps?.animationIteration || "infinite"}
                  onValueChange={(value) => onPropChange("animationIteration", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Once</SelectItem>
                    <SelectItem value="2">Twice</SelectItem>
                    <SelectItem value="3">Three times</SelectItem>
                    <SelectItem value="infinite">Infinite</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {elementProps?.animation === "spin" && (
              <div className="mt-3">
                <Label htmlFor="spinDirection">Spin Direction</Label>
                <Select
                  value={elementProps?.spinDirection || "clockwise"}
                  onValueChange={(value) => onPropChange("spinDirection", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clockwise">Clockwise</SelectItem>
                    <SelectItem value="counter-clockwise">Counter Clockwise</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
          </>
        )}

        <div className="mt-3">
          <Label htmlFor="transitionDuration">Transition Duration</Label>
          <Input
            id="transitionDuration"
            value={elementProps?.transitionDuration || "300ms"}
            onChange={(e) => onPropChange("transitionDuration", e.target.value)}
            placeholder="300ms"
            className="mt-1"
          />
        </div>
      </div>

      {/* Filter Effects */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-3">Filter Effects</h4>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="filterBrightness">Brightness</Label>
            <Input
              id="filterBrightness"
              type="number"
              step="0.1"
              min="0"
              max="3"
              value={elementProps?.filterBrightness || ""}
              onChange={(e) => onPropChange("filterBrightness", e.target.value)}
              placeholder="1.0 (normal)"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="filterContrast">Contrast</Label>
            <Input
              id="filterContrast"
              type="number"
              step="0.1"
              min="0"
              max="3"
              value={elementProps?.filterContrast || ""}
              onChange={(e) => onPropChange("filterContrast", e.target.value)}
              placeholder="1.0 (normal)"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <Label htmlFor="filterSaturate">Saturation</Label>
            <Input
              id="filterSaturate"
              type="number"
              step="0.1"
              min="0"
              max="3"
              value={elementProps?.filterSaturate || ""}
              onChange={(e) => onPropChange("filterSaturate", e.target.value)}
              placeholder="1.0 (normal)"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="filterHueRotate">Hue Rotate</Label>
            <Input
              id="filterHueRotate"
              type="number"
              step="10"
              min="0"
              max="360"
              value={elementProps?.filterHueRotate || ""}
              onChange={(e) => onPropChange("filterHueRotate", e.target.value)}
              placeholder="0deg"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <Label htmlFor="filterBlur">Blur</Label>
            <Input
              id="filterBlur"
              type="number"
              step="0.5"
              min="0"
              max="20"
              value={elementProps?.filterBlur || ""}
              onChange={(e) => onPropChange("filterBlur", e.target.value)}
              placeholder="0px"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="filterGrayscale">Grayscale</Label>
            <Input
              id="filterGrayscale"
              type="number"
              step="0.1"
              min="0"
              max="1"
              value={elementProps?.filterGrayscale || ""}
              onChange={(e) => onPropChange("filterGrayscale", e.target.value)}
              placeholder="0 (color)"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <Label htmlFor="filterSepia">Sepia</Label>
            <Input
              id="filterSepia"
              type="number"
              step="0.1"
              min="0"
              max="1"
              value={elementProps?.filterSepia || ""}
              onChange={(e) => onPropChange("filterSepia", e.target.value)}
              placeholder="0 (normal)"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="filterInvert">Invert</Label>
            <Input
              id="filterInvert"
              type="number"
              step="0.1"
              min="0"
              max="1"
              value={elementProps?.filterInvert || ""}
              onChange={(e) => onPropChange("filterInvert", e.target.value)}
              placeholder="0 (normal)"
              className="mt-1"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-3">
          <div>
            <Label htmlFor="filterOpacity">Opacity</Label>
            <Input
              id="filterOpacity"
              type="number"
              step="0.1"
              min="0"
              max="1"
              value={elementProps?.filterOpacity || ""}
              onChange={(e) => onPropChange("filterOpacity", e.target.value)}
              placeholder="1.0 (opaque)"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="filter">Custom Filter</Label>
            <Input
              id="filter"
              value={elementProps?.filter || ""}
              onChange={(e) => onPropChange("filter", e.target.value)}
              placeholder="drop-shadow(2px 2px 4px #000)"
              className="mt-1"
            />
          </div>
        </div>
      </div>

      {/* Hover Effects */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-3">Hover Effects</h4>
        
        {/* Transform Effects */}
        <div className="mb-4">
          <h5 className="text-xs font-medium text-gray-600 mb-2">Transform Effects</h5>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="hoverScale">Hover Scale</Label>
              <Input
                id="hoverScale"
                type="number"
                step="0.1"
                min="0.1"
                max="3"
                value={elementProps?.hoverScale || ""}
                onChange={(e) => onPropChange("hoverScale", e.target.value)}
                placeholder="1.1 (110%)"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hoverRotate">Hover Rotate</Label>
              <Input
                id="hoverRotate"
                type="number"
                step="5"
                min="-360"
                max="360"
                value={elementProps?.hoverRotate || ""}
                onChange={(e) => onPropChange("hoverRotate", e.target.value)}
                placeholder="5deg"
                className="mt-1"
              />
            </div>
          </div>
          <div className="mt-3">
            <Label htmlFor="hoverTransform">Custom Transform</Label>
            <Input
              id="hoverTransform"
              value={elementProps?.hoverTransform || ""}
              onChange={(e) => onPropChange("hoverTransform", e.target.value)}
              placeholder="translateX(10px) translateY(-5px)"
              className="mt-1"
            />
          </div>
        </div>

        {/* Filter Effects on Hover */}
        <div className="mb-4">
          <h5 className="text-xs font-medium text-gray-600 mb-2">Filter Effects on Hover</h5>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="hoverBrightness">Hover Brightness</Label>
              <Input
                id="hoverBrightness"
                type="number"
                step="0.1"
                min="0"
                max="3"
                value={elementProps?.hoverBrightness || ""}
                onChange={(e) => onPropChange("hoverBrightness", e.target.value)}
                placeholder="1.2 (120%)"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hoverContrast">Hover Contrast</Label>
              <Input
                id="hoverContrast"
                type="number"
                step="0.1"
                min="0"
                max="3"
                value={elementProps?.hoverContrast || ""}
                onChange={(e) => onPropChange("hoverContrast", e.target.value)}
                placeholder="1.1 (110%)"
                className="mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div>
              <Label htmlFor="hoverSaturate">Hover Saturation</Label>
              <Input
                id="hoverSaturate"
                type="number"
                step="0.1"
                min="0"
                max="3"
                value={elementProps?.hoverSaturate || ""}
                onChange={(e) => onPropChange("hoverSaturate", e.target.value)}
                placeholder="1.3 (130%)"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hoverBlur">Hover Blur</Label>
              <Input
                id="hoverBlur"
                type="number"
                step="0.5"
                min="0"
                max="20"
                value={elementProps?.hoverBlur || ""}
                onChange={(e) => onPropChange("hoverBlur", e.target.value)}
                placeholder="2px"
                className="mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div>
              <Label htmlFor="hoverGrayscale">Hover Grayscale</Label>
              <Input
                id="hoverGrayscale"
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={elementProps?.hoverGrayscale || ""}
                onChange={(e) => onPropChange("hoverGrayscale", e.target.value)}
                placeholder="0.5 (50%)"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hoverSepia">Hover Sepia</Label>
              <Input
                id="hoverSepia"
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={elementProps?.hoverSepia || ""}
                onChange={(e) => onPropChange("hoverSepia", e.target.value)}
                placeholder="0.3 (30%)"
                className="mt-1"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <div>
              <Label htmlFor="hoverInvert">Hover Invert</Label>
              <Input
                id="hoverInvert"
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={elementProps?.hoverInvert || ""}
                onChange={(e) => onPropChange("hoverInvert", e.target.value)}
                placeholder="0.1 (10%)"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hoverOpacity">Hover Opacity</Label>
              <Input
                id="hoverOpacity"
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={elementProps?.hoverOpacity || ""}
                onChange={(e) => onPropChange("hoverOpacity", e.target.value)}
                placeholder="0.8 (80%)"
                className="mt-1"
              />
            </div>
          </div>
          <div className="mt-3">
            <Label htmlFor="hoverFilter">Custom Hover Filter</Label>
            <Input
              id="hoverFilter"
              value={elementProps?.hoverFilter || ""}
              onChange={(e) => onPropChange("hoverFilter", e.target.value)}
              placeholder="drop-shadow(4px 4px 8px rgba(0,0,0,0.3))"
              className="mt-1"
            />
          </div>
        </div>

        {/* Overlay Effects on Hover */}
        <div>
          <h5 className="text-xs font-medium text-gray-600 mb-2">Overlay Effects on Hover</h5>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label htmlFor="hoverOverlayColor">Hover Overlay Color</Label>
              <Input
                id="hoverOverlayColor"
                value={elementProps?.hoverOverlayColor || ""}
                onChange={(e) => onPropChange("hoverOverlayColor", e.target.value)}
                placeholder="#000000"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="hoverOverlayOpacity">Hover Overlay Opacity</Label>
              <Input
                id="hoverOverlayOpacity"
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={elementProps?.hoverOverlayOpacity || ""}
                onChange={(e) => onPropChange("hoverOverlayOpacity", e.target.value)}
                placeholder="0.3 (30%)"
                className="mt-1"
              />
            </div>
          </div>
          <div className="mt-3">
            <Label htmlFor="hoverOverlayBlendMode">Hover Blend Mode</Label>
            <Select
              value={elementProps?.hoverOverlayBlendMode || "none"}
              onValueChange={(value) => onPropChange("hoverOverlayBlendMode", value === "none" ? "" : value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select blend mode" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="multiply">Multiply</SelectItem>
                <SelectItem value="screen">Screen</SelectItem>
                <SelectItem value="overlay">Overlay</SelectItem>
                <SelectItem value="soft-light">Soft Light</SelectItem>
                <SelectItem value="hard-light">Hard Light</SelectItem>
                <SelectItem value="color-dodge">Color Dodge</SelectItem>
                <SelectItem value="color-burn">Color Burn</SelectItem>
                <SelectItem value="darken">Darken</SelectItem>
                <SelectItem value="lighten">Lighten</SelectItem>
                <SelectItem value="difference">Difference</SelectItem>
                <SelectItem value="exclusion">Exclusion</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Box Shadow */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-3">Box Shadow</h4>
        
        <div>
          <Label htmlFor="boxShadow">Box Shadow</Label>
          <Input
            id="boxShadow"
            value={elementProps?.boxShadow || ""}
            onChange={(e) => onPropChange("boxShadow", e.target.value)}
            placeholder="0 4px 6px rgba(0, 0, 0, 0.1)"
            className="mt-1"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="hoverBoxShadow">Hover Box Shadow</Label>
          <Input
            id="hoverBoxShadow"
            value={elementProps?.hoverBoxShadow || ""}
            onChange={(e) => onPropChange("hoverBoxShadow", e.target.value)}
            placeholder="0 8px 15px rgba(0, 0, 0, 0.2)"
            className="mt-1"
          />
        </div>
      </div>

      {/* Border */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-3">Border</h4>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <Label htmlFor="borderWidth">Border Width</Label>
            <Input
              id="borderWidth"
              value={elementProps?.borderWidth || ""}
              onChange={(e) => onPropChange("borderWidth", e.target.value)}
              placeholder="1px"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="borderStyle">Border Style</Label>
            <Select
              value={elementProps?.borderStyle || "none"}
              onValueChange={(value) => onPropChange("borderStyle", value === "none" ? "" : value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue placeholder="Select style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="solid">Solid</SelectItem>
                <SelectItem value="dashed">Dashed</SelectItem>
                <SelectItem value="dotted">Dotted</SelectItem>
                <SelectItem value="double">Double</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-3">
          <Label htmlFor="borderColor">Border Color</Label>
          <Input
            id="borderColor"
            value={elementProps?.borderColor || ""}
            onChange={(e) => onPropChange("borderColor", e.target.value)}
            placeholder="#000000"
            className="mt-1"
          />
        </div>
      </div>

      {/* Accessibility */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-3">Accessibility</h4>
        
        <div>
          <Label htmlFor="ariaLabel">Aria Label</Label>
          <Input
            id="ariaLabel"
            value={elementProps?.ariaLabel || ""}
            onChange={(e) => onPropChange("ariaLabel", e.target.value)}
            placeholder="Descriptive label for screen readers"
            className="mt-1"
          />
        </div>
        <div className="mt-3">
          <Label htmlFor="role">Role</Label>
          <Select
            value={elementProps?.role || "none"}
            onValueChange={(value) => onPropChange("role", value === "none" ? "" : value)}
          >
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="img">Image</SelectItem>
              <SelectItem value="button">Button</SelectItem>
              <SelectItem value="link">Link</SelectItem>
              <SelectItem value="presentation">Presentation</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-3">
          <Label htmlFor="tabIndex">Tab Index</Label>
          <Input
            id="tabIndex"
            type="number"
            value={elementProps?.tabIndex || ""}
            onChange={(e) => onPropChange("tabIndex", e.target.value)}
            placeholder="0"
            className="mt-1"
          />
        </div>
      </div>

      {/* Custom CSS */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium mb-3">Custom CSS</h4>
        
        <div>
          <Label htmlFor="className">Custom Classes</Label>
          <Input
            id="className"
            value={elementProps?.className || ""}
            onChange={(e) => onPropChange("className", e.target.value)}
            placeholder="custom-class another-class"
            className="mt-1"
          />
        </div>
      </div>
    </div>
  );
}
