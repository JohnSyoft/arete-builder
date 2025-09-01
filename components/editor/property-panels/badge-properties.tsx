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

interface BadgePropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function BadgeProperties({
  elementProps,
  onPropChange,
}: BadgePropertiesProps) {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="text">Badge Text</Label>
        <Input
          id="text"
          value={elementProps?.text || ""}
          onChange={(e) => onPropChange("text", e.target.value)}
          placeholder="Enter badge text"
          className="mt-1"
        />
      </div>

      <Accordion type="multiple" className="w-full">
        {/* Style Section */}
        <AccordionItem value="style">
          <AccordionTrigger className="text-sm font-medium">
            Badge Style
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="variant">Variant</Label>
              <Select
                value={elementProps?.variant || "default"}
                onValueChange={(value) => onPropChange("variant", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                  <SelectItem value="destructive">Destructive</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="className">Custom Classes</Label>
              <Input
                id="className"
                value={elementProps?.className || ""}
                onChange={(e) => onPropChange("className", e.target.value)}
                placeholder="e.g., bg-blue-100 text-blue-800"
                className="mt-1"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Spacing & Dimensions Section */}
        <AccordionItem value="spacing">
          <AccordionTrigger className="text-sm font-medium">
            Spacing & Dimensions
          </AccordionTrigger>
          <AccordionContent className="space-y-4">
            <div>
              <Label htmlFor="width">Width</Label>
              <Select
                value={elementProps?.width || "auto"}
                onValueChange={(value) =>
                  onPropChange("width", value === "auto" ? "auto" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Auto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="w-fit">Fit Content</SelectItem>
                  <SelectItem value="w-16">Fixed 64px</SelectItem>
                  <SelectItem value="w-24">Fixed 96px</SelectItem>
                  <SelectItem value="w-32">Fixed 128px</SelectItem>
                  <SelectItem value="w-48">Fixed 192px</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="height">Height</Label>
              <Select
                value={elementProps?.height || "auto"}
                onValueChange={(value) =>
                  onPropChange("height", value === "auto" ? "auto" : value)
                }
              >
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Auto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="auto">Auto</SelectItem>
                  <SelectItem value="h-fit">Fit Content</SelectItem>
                  <SelectItem value="h-6">Fixed 24px</SelectItem>
                  <SelectItem value="h-8">Fixed 32px</SelectItem>
                  <SelectItem value="h-10">Fixed 40px</SelectItem>
                  <SelectItem value="h-12">Fixed 48px</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="margin">Margin</Label>
              <Select
                value={elementProps?.margin || "my-1"}
                onValueChange={(value) => onPropChange("margin", value)}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">None</SelectItem>
                  <SelectItem value="m-1">Small (m-1)</SelectItem>
                  <SelectItem value="m-2">Medium (m-2)</SelectItem>
                  <SelectItem value="m-4">Large (m-4)</SelectItem>
                  <SelectItem value="my-1">Vertical Small (my-1)</SelectItem>
                  <SelectItem value="my-2">Vertical Medium (my-2)</SelectItem>
                  <SelectItem value="my-4">Vertical Large (my-4)</SelectItem>
                  <SelectItem value="mx-1">Horizontal Small (mx-1)</SelectItem>
                  <SelectItem value="mx-2">Horizontal Medium (mx-2)</SelectItem>
                  <SelectItem value="mx-4">Horizontal Large (mx-4)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
