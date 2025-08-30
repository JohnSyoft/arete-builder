import { useState } from "react";
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
import { Link } from "lucide-react";

interface ImagePropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function ImageProperties({
  elementProps,
  onPropChange,
}: ImagePropertiesProps) {
  const [showManualInput, setShowManualInput] = useState(false);

  return (
    <div className="space-y-4">
      <div>
        <div className="flex items-center justify-between mb-2">
          <Label htmlFor="src">Image</Label>
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
            id="src"
            value={elementProps?.src || ""}
            onChange={(e) => onPropChange("src", e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="mt-1"
          />
        ) : (
          <ImageUpload
            value={elementProps?.src || ""}
            onChange={(url) => onPropChange("src", url)}
            multiple={false}
            maxFiles={1}
            placeholder="Upload an image"
            variant="compact"
            folder="editor/images"
          />
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
