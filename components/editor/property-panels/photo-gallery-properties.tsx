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
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

interface PhotoGalleryPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function PhotoGalleryProperties({
  elementProps,
  onPropChange,
}: PhotoGalleryPropertiesProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={["content", "layout", "styling"]}
      className="w-full"
    >
      {/* Content Section */}
      <AccordionItem value="content">
        <AccordionTrigger className="text-sm font-medium">
          Content
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="title">Gallery Title</Label>
            <Input
              id="title"
              value={elementProps?.title || "Photo Gallery"}
              onChange={(e) => onPropChange("title", e.target.value)}
              className="mt-1"
              placeholder="Enter gallery title"
            />
          </div>

          <div>
            <Label htmlFor="subtitle">Gallery Subtitle</Label>
            <Input
              id="subtitle"
              value={
                elementProps?.subtitle ||
                "A beautiful collection of photographs"
              }
              onChange={(e) => onPropChange("subtitle", e.target.value)}
              className="mt-1"
              placeholder="Enter gallery subtitle"
            />
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Layout Section */}
      <AccordionItem value="layout">
        <AccordionTrigger className="text-sm font-medium">
          Layout
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="layout">Gallery Layout</Label>
            <Select
              value={elementProps?.layout || "grid"}
              onValueChange={(value) => onPropChange("layout", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grid">Grid Layout</SelectItem>
                <SelectItem value="masonry">Masonry Layout</SelectItem>
                <SelectItem value="horizontal">Horizontal Scroll</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="columns">Columns (Grid Layout)</Label>
            <Select
              value={elementProps?.columns?.toString() || "3"}
              onValueChange={(value) =>
                onPropChange("columns", parseInt(value))
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Column</SelectItem>
                <SelectItem value="2">2 Columns</SelectItem>
                <SelectItem value="3">3 Columns</SelectItem>
                <SelectItem value="4">4 Columns</SelectItem>
                <SelectItem value="5">5 Columns</SelectItem>
                <SelectItem value="6">6 Columns</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="gap">Gap Between Photos</Label>
            <Select
              value={elementProps?.gap || "gap-6"}
              onValueChange={(value) => onPropChange("gap", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gap-2">Small (8px)</SelectItem>
                <SelectItem value="gap-4">Medium (16px)</SelectItem>
                <SelectItem value="gap-6">Large (24px)</SelectItem>
                <SelectItem value="gap-8">Extra Large (32px)</SelectItem>
                <SelectItem value="gap-10">XXL (40px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Styling Section */}
      <AccordionItem value="styling">
        <AccordionTrigger className="text-sm font-medium">
          Photo Options
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="imageHeight">Photo Height</Label>
            <Select
              value={elementProps?.imageHeight || "300px"}
              onValueChange={(value) => onPropChange("imageHeight", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="200px">Small (200px)</SelectItem>
                <SelectItem value="250px">Medium-Small (250px)</SelectItem>
                <SelectItem value="300px">Medium (300px)</SelectItem>
                <SelectItem value="350px">Medium-Large (350px)</SelectItem>
                <SelectItem value="400px">Large (400px)</SelectItem>
                <SelectItem value="450px">Extra Large (450px)</SelectItem>
                <SelectItem value="500px">XXL (500px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="showOverlay"
              checked={elementProps?.showOverlay ?? true}
              onCheckedChange={(checked) =>
                onPropChange("showOverlay", checked)
              }
            />
            <Label htmlFor="showOverlay">Show Hover Overlay</Label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="enableLightbox"
              checked={elementProps?.enableLightbox ?? false}
              onCheckedChange={(checked) =>
                onPropChange("enableLightbox", checked)
              }
            />
            <Label htmlFor="enableLightbox">Enable Lightbox</Label>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Background Section */}
      <AccordionItem value="background">
        <AccordionTrigger className="text-sm font-medium">
          Background
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="backgroundColor">Background Color</Label>
            <Select
              value={elementProps?.backgroundColor || "white"}
              onValueChange={(value) => onPropChange("backgroundColor", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="white">White</SelectItem>
                <SelectItem value="gray-50">Light Gray</SelectItem>
                <SelectItem value="gray-100">Medium Gray</SelectItem>
                <SelectItem value="blue-50">Light Blue</SelectItem>
                <SelectItem value="green-50">Light Green</SelectItem>
                <SelectItem value="purple-50">Light Purple</SelectItem>
                <SelectItem value="transparent">Transparent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="padding">Section Padding</Label>
            <Select
              value={elementProps?.padding || "py-20 px-4"}
              onValueChange={(value) => onPropChange("padding", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="py-8 px-4">
                  Small (32px vertical, 16px horizontal)
                </SelectItem>
                <SelectItem value="py-12 px-4">
                  Medium (48px vertical, 16px horizontal)
                </SelectItem>
                <SelectItem value="py-16 px-4">
                  Large (64px vertical, 16px horizontal)
                </SelectItem>
                <SelectItem value="py-20 px-4">
                  Extra Large (80px vertical, 16px horizontal)
                </SelectItem>
                <SelectItem value="py-24 px-4">
                  XXL (96px vertical, 16px horizontal)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
