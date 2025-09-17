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
import { ColorPickerComponent } from "@/components/ui/color-picker";

interface AlertPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function AlertProperties({
  elementProps,
  onPropChange,
}: AlertPropertiesProps) {
  return (
    <Accordion
      type="multiple"
      defaultValue={["content", "style", "spacing"]}
      className="w-full"
    >
      {/* Content Section */}
      <AccordionItem value="content">
        <AccordionTrigger className="text-sm font-medium">
          Content
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="title">Alert Title</Label>
            <Input
              id="title"
              value={elementProps?.title || "Alert Title"}
              onChange={(e) => onPropChange("title", e.target.value)}
              placeholder="Enter alert title"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="message">Alert Message</Label>
            <Input
              id="message"
              value={elementProps?.message || "This is an alert message."}
              onChange={(e) => onPropChange("message", e.target.value)}
              placeholder="Enter alert message"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="showIcon">Show Icon</Label>
            <Select
              value={elementProps?.showIcon ? "true" : "false"}
              onValueChange={(value) =>
                onPropChange("showIcon", value === "true")
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="true">Yes</SelectItem>
                <SelectItem value="false">No</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="dismissible">Dismissible</Label>
            <Select
              value={elementProps?.dismissible ? "true" : "false"}
              onValueChange={(value) =>
                onPropChange("dismissible", value === "true")
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="false">No</SelectItem>
                <SelectItem value="true">Yes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Style Section */}
      <AccordionItem value="style">
        <AccordionTrigger className="text-sm font-medium">
          Style
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="variant">Alert Type</Label>
            <Select
              value={elementProps?.variant || "info"}
              onValueChange={(value) => onPropChange("variant", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="success">Success</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="default">Default</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="size">Size</Label>
            <Select
              value={elementProps?.size || "medium"}
              onValueChange={(value) => onPropChange("size", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="borderRadius">Border Radius</Label>
            <Select
              value={elementProps?.borderRadius || "8px"}
              onValueChange={(value) => onPropChange("borderRadius", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0px">None</SelectItem>
                <SelectItem value="4px">Small</SelectItem>
                <SelectItem value="8px">Medium</SelectItem>
                <SelectItem value="12px">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="shadow">Shadow</Label>
            <Select
              value={elementProps?.shadow || "none"}
              onValueChange={(value) => onPropChange("shadow", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">None</SelectItem>
                <SelectItem value="sm">Small</SelectItem>
                <SelectItem value="md">Medium</SelectItem>
                <SelectItem value="lg">Large</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>

      {/* Colors Section */}
      <AccordionItem value="colors">
        <AccordionTrigger className="text-sm font-medium">
          Custom Colors
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <ColorPickerComponent
            value={elementProps?.backgroundColor || "#f3f4f6"}
            onChange={(value) => onPropChange("backgroundColor", value)}
            label="Background Color"
            placeholder="Select background color"
          />

          <ColorPickerComponent
            value={elementProps?.textColor || "#374151"}
            onChange={(value) => onPropChange("textColor", value)}
            label="Text Color"
            placeholder="Select text color"
          />

          <ColorPickerComponent
            value={elementProps?.borderColor || "#d1d5db"}
            onChange={(value) => onPropChange("borderColor", value)}
            label="Border Color"
            placeholder="Select border color"
          />
        </AccordionContent>
      </AccordionItem>

      {/* Spacing Section */}
      <AccordionItem value="spacing">
        <AccordionTrigger className="text-sm font-medium">
          Spacing & Dimensions
        </AccordionTrigger>
        <AccordionContent className="space-y-3">
          <div>
            <Label htmlFor="width">Width</Label>
            <Select
              value={elementProps?.width || "auto"}
              onValueChange={(value) => onPropChange("width", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="100%">Full Width (100%)</SelectItem>
                <SelectItem value="75%">Three Quarters (75%)</SelectItem>
                <SelectItem value="50%">Half (50%)</SelectItem>
                <SelectItem value="25%">Quarter (25%)</SelectItem>
                <SelectItem value="200px">Small (200px)</SelectItem>
                <SelectItem value="400px">Medium (400px)</SelectItem>
                <SelectItem value="600px">Large (600px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="height">Height</Label>
            <Select
              value={elementProps?.height || "auto"}
              onValueChange={(value) => onPropChange("height", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="auto">Auto</SelectItem>
                <SelectItem value="60px">Small (60px)</SelectItem>
                <SelectItem value="80px">Medium (80px)</SelectItem>
                <SelectItem value="100px">Large (100px)</SelectItem>
                <SelectItem value="120px">Extra Large (120px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="padding">Padding</Label>
            <Select
              value={elementProps?.padding || "16px"}
              onValueChange={(value) => onPropChange("padding", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="8px">Small (8px)</SelectItem>
                <SelectItem value="16px">Medium (16px)</SelectItem>
                <SelectItem value="24px">Large (24px)</SelectItem>
                <SelectItem value="32px">Extra Large (32px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="margin">Margin</Label>
            <Select
              value={elementProps?.margin || "8px"}
              onValueChange={(value) => onPropChange("margin", value)}
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0px">None</SelectItem>
                <SelectItem value="8px">Small (8px)</SelectItem>
                <SelectItem value="16px">Medium (16px)</SelectItem>
                <SelectItem value="24px">Large (24px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
