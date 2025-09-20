import { useState } from "react";
import { useParams } from "next/navigation";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ColorPickerComponent } from "@/components/ui/color-picker"
import { ImageUpload } from "@/components/ui/image-upload";
import { Button } from "@/components/ui/button";
import { Link, Loader2 } from "lucide-react";
import { useUpload } from "@/hooks/useUpload";
import { toast } from "sonner";

interface ContainerPropertiesProps {
  elementProps: any
  onPropChange: (key: string, value: any) => void
}

export function ContainerProperties({ elementProps, onPropChange }: ContainerPropertiesProps) {
  const params = useParams();
  const projectId = params.projectId as string;
  const [showManualInput, setShowManualInput] = useState(false);

  const { uploadSingle, isUploading } = useUpload();

  const handleImageUpload = async (files: File[]) => {
    if (!files || files.length === 0) return;

    try {
      const file = files[0];
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
    <div className="space-y-4">
      {/* Background Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Background</h4>
        
        <ColorPickerComponent
          value={elementProps?.backgroundColor || '#ffffff'}
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

        <div>
          <Label htmlFor="gradient">Gradient (CSS)</Label>
          <Input
            id="gradient"
            value={elementProps?.gradient || ''}
            onChange={(e) => onPropChange('gradient', e.target.value)}
            placeholder="linear-gradient(45deg, #ff0000, #0000ff)"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="backgroundSize">Background Size</Label>
          <Select value={elementProps?.backgroundSize || 'cover'} onValueChange={(value) => onPropChange('backgroundSize', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cover">Cover</SelectItem>
              <SelectItem value="contain">Contain</SelectItem>
              <SelectItem value="auto">Auto</SelectItem>
              <SelectItem value="100% 100%">Stretch</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="backgroundPosition">Background Position</Label>
          <Select value={elementProps?.backgroundPosition || 'center'} onValueChange={(value) => onPropChange('backgroundPosition', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="center">Center</SelectItem>
              <SelectItem value="top">Top</SelectItem>
              <SelectItem value="bottom">Bottom</SelectItem>
              <SelectItem value="left">Left</SelectItem>
              <SelectItem value="right">Right</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Border Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Border</h4>
        
        <div>
          <Label htmlFor="borderWidth">Border Width</Label>
          <Select value={elementProps?.borderWidth || '0px'} onValueChange={(value) => onPropChange('borderWidth', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="1px">Thin (1px)</SelectItem>
              <SelectItem value="2px">Medium (2px)</SelectItem>
              <SelectItem value="4px">Thick (4px)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="borderStyle">Border Style</Label>
          <Select value={elementProps?.borderStyle || 'solid'} onValueChange={(value) => onPropChange('borderStyle', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="solid">Solid</SelectItem>
              <SelectItem value="dashed">Dashed</SelectItem>
              <SelectItem value="dotted">Dotted</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <ColorPickerComponent
          value={elementProps?.borderColor || '#e5e7eb'}
          onChange={(value) => onPropChange('borderColor', value)}
          label="Border Color"
          placeholder="Select border color"
        />

        <div>
          <Label htmlFor="borderRadius">Border Radius</Label>
          <Select value={elementProps?.borderRadius || '0px'} onValueChange={(value) => onPropChange('borderRadius', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0px">None</SelectItem>
              <SelectItem value="4px">Small (4px)</SelectItem>
              <SelectItem value="8px">Medium (8px)</SelectItem>
              <SelectItem value="16px">Large (16px)</SelectItem>
              <SelectItem value="50%">Circle</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Spacing Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Spacing</h4>
        
        <div>
          <Label htmlFor="padding">Padding</Label>
          <Select value={elementProps?.padding || 'p-4'} onValueChange={(value) => onPropChange('padding', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="p-0">None</SelectItem>
              <SelectItem value="p-2">Small</SelectItem>
              <SelectItem value="p-4">Medium</SelectItem>
              <SelectItem value="p-6">Large</SelectItem>
              <SelectItem value="p-8">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="margin">Margin</Label>
          <Select value={elementProps?.margin || 'm-0'} onValueChange={(value) => onPropChange('margin', value)}>
            <SelectTrigger className="mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="m-0">None</SelectItem>
              <SelectItem value="m-2">Small</SelectItem>
              <SelectItem value="m-4">Medium</SelectItem>
              <SelectItem value="m-6">Large</SelectItem>
              <SelectItem value="m-8">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Overlay Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Overlay</h4>
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="hasOverlay"
            checked={elementProps?.hasOverlay || false}
            onChange={(e) => onPropChange('hasOverlay', e.target.checked)}
            className="rounded"
          />
          <Label htmlFor="hasOverlay">Enable Overlay</Label>
        </div>

        {elementProps?.hasOverlay && (
          <>
            <ColorPickerComponent
              value={elementProps?.overlayColor || '#000000'}
              onChange={(value) => onPropChange('overlayColor', value)}
              label="Overlay Color"
              placeholder="Select overlay color"
            />

            <div>
              <Label htmlFor="overlayOpacity">Overlay Opacity</Label>
              <Input
                id="overlayOpacity"
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={elementProps?.overlayOpacity || '0.2'}
                onChange={(e) => onPropChange('overlayOpacity', e.target.value)}
                className="mt-1"
              />
              <div className="text-xs text-gray-500 mt-1">
                {Math.round((elementProps?.overlayOpacity || 0.2) * 100)}%
              </div>
            </div>
          </>
        )}
      </div>

      {/* Content Wrapper Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Content Wrapper</h4>
        
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="hasContentWrapper"
            checked={elementProps?.hasContentWrapper || false}
            onChange={(e) => onPropChange('hasContentWrapper', e.target.checked)}
            className="rounded"
          />
          <Label htmlFor="hasContentWrapper">Enable Content Wrapper</Label>
        </div>

        {elementProps?.hasContentWrapper && (
          <>
            <div>
              <Label htmlFor="contentMaxWidth">Max Width</Label>
              <Select value={elementProps?.contentMaxWidth || '7xl'} onValueChange={(value) => onPropChange('contentMaxWidth', value)}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="xs">XS</SelectItem>
                  <SelectItem value="sm">SM</SelectItem>
                  <SelectItem value="md">MD</SelectItem>
                  <SelectItem value="lg">LG</SelectItem>
                  <SelectItem value="xl">XL</SelectItem>
                  <SelectItem value="2xl">2XL</SelectItem>
                  <SelectItem value="3xl">3XL</SelectItem>
                  <SelectItem value="4xl">4XL</SelectItem>
                  <SelectItem value="5xl">5XL</SelectItem>
                  <SelectItem value="6xl">6XL</SelectItem>
                  <SelectItem value="7xl">7XL</SelectItem>
                  <SelectItem value="full">Full</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="contentPadding">Content Padding</Label>
              <Input
                id="contentPadding"
                value={elementProps?.contentPadding || 'px-4 sm:px-6 lg:px-8 py-24 lg:py-32'}
                onChange={(e) => onPropChange('contentPadding', e.target.value)}
                placeholder="px-4 sm:px-6 lg:px-8 py-24 lg:py-32"
                className="mt-1"
              />
            </div>
          </>
        )}
      </div>

      {/* Size Section */}
      <div className="space-y-3">
        <h4 className="text-sm font-medium text-gray-700 border-b pb-1">Size</h4>
        
        <div>
          <Label htmlFor="width">Width</Label>
          <Input
            id="width"
            value={elementProps?.width || '100%'}
            onChange={(e) => onPropChange('width', e.target.value)}
            placeholder="100%, 300px, auto"
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="minHeight">Min Height</Label>
          <Input
            id="minHeight"
            value={elementProps?.minHeight || 'min-h-[200px]'}
            onChange={(e) => onPropChange('minHeight', e.target.value)}
            placeholder="min-h-[200px], auto, min-h-[500px]"
            className="mt-1"
          />
        </div>
      </div>
    </div>
  )
}
