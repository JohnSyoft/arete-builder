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
    </div>
  );
}
