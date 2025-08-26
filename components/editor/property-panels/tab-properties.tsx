import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function TabProperties({
  elementProps,
  onPropChange,
}: TabPropertiesProps) {
  const {
    variant = "default",
    orientation = "horizontal",
    tabs = [],
    backgroundColor = "#ffffff",
    activeColor = "#3b82f6",
    inactiveColor = "#6b7280",
    borderColor = "#e5e7eb",
    borderRadius = "6px",
    padding = "12px",
    margin = "8px",
    spacing = "4px",
    size = "md",
    fullWidth = false,
  } = elementProps;

  const addTab = () => {
    const newTab = {
      id: `tab${tabs.length + 1}`,
      label: `Tab ${tabs.length + 1}`,
      content: `Content for Tab ${tabs.length + 1}`,
    };
    onPropChange("tabs", [...tabs, newTab]);
  };

  const removeTab = (index: number) => {
    const newTabs = tabs.filter((_: any, i: number) => i !== index);
    onPropChange("tabs", newTabs);
  };

  const updateTab = (
    index: number,
    field: "label" | "content",
    value: string
  ) => {
    const newTabs = [...tabs];
    newTabs[index] = { ...newTabs[index], [field]: value };
    onPropChange("tabs", newTabs);
  };

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="variant">Variant</Label>
        <Select
          value={variant}
          onValueChange={(value) => onPropChange("variant", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="pills">Pills</SelectItem>
            <SelectItem value="underline">Underline</SelectItem>
            <SelectItem value="card">Card</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="orientation">Orientation</Label>
        <Select
          value={orientation}
          onValueChange={(value) => onPropChange("orientation", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="horizontal">Horizontal</SelectItem>
            <SelectItem value="vertical">Vertical</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="size">Size</Label>
        <Select
          value={size}
          onValueChange={(value) => onPropChange("size", value)}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sm">Small</SelectItem>
            <SelectItem value="md">Medium</SelectItem>
            <SelectItem value="lg">Large</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center justify-between">
        <Label htmlFor="fullWidth">Full Width</Label>
        <Switch
          id="fullWidth"
          checked={fullWidth}
          onCheckedChange={(checked) => onPropChange("fullWidth", checked)}
        />
      </div>

      <div>
        <Label htmlFor="backgroundColor">Background Color</Label>
        <div className="flex gap-2">
          <Input
            id="backgroundColor"
            type="color"
            value={backgroundColor}
            onChange={(e) => onPropChange("backgroundColor", e.target.value)}
            className="w-12 h-8 p-1 border rounded"
          />
          <Input
            value={backgroundColor}
            onChange={(e) => onPropChange("backgroundColor", e.target.value)}
            placeholder="#ffffff"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="activeColor">Active Color</Label>
        <div className="flex gap-2">
          <Input
            id="activeColor"
            type="color"
            value={activeColor}
            onChange={(e) => onPropChange("activeColor", e.target.value)}
            className="w-12 h-8 p-1 border rounded"
          />
          <Input
            value={activeColor}
            onChange={(e) => onPropChange("activeColor", e.target.value)}
            placeholder="#3b82f6"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="inactiveColor">Inactive Color</Label>
        <div className="flex gap-2">
          <Input
            id="inactiveColor"
            type="color"
            value={inactiveColor}
            onChange={(e) => onPropChange("inactiveColor", e.target.value)}
            className="w-12 h-8 p-1 border rounded"
          />
          <Input
            value={inactiveColor}
            onChange={(e) => onPropChange("inactiveColor", e.target.value)}
            placeholder="#6b7280"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="borderColor">Border Color</Label>
        <div className="flex gap-2">
          <Input
            id="borderColor"
            type="color"
            value={borderColor}
            onChange={(e) => onPropChange("borderColor", e.target.value)}
            className="w-12 h-8 p-1 border rounded"
          />
          <Input
            value={borderColor}
            onChange={(e) => onPropChange("borderColor", e.target.value)}
            placeholder="#e5e7eb"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="borderRadius">Border Radius</Label>
        <Input
          id="borderRadius"
          value={borderRadius}
          onChange={(e) => onPropChange("borderRadius", e.target.value)}
          placeholder="6px"
        />
      </div>

      <div>
        <Label htmlFor="padding">Padding</Label>
        <Input
          id="padding"
          value={padding}
          onChange={(e) => onPropChange("padding", e.target.value)}
          placeholder="12px"
        />
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Input
          id="margin"
          value={margin}
          onChange={(e) => onPropChange("margin", e.target.value)}
          placeholder="8px"
        />
      </div>

      <div>
        <Label htmlFor="spacing">Tab Spacing</Label>
        <Input
          id="spacing"
          value={spacing}
          onChange={(e) => onPropChange("spacing", e.target.value)}
          placeholder="4px"
        />
      </div>

      <div>
        <div className="flex items-center justify-between mb-2">
          <Label>Tabs</Label>
          <Button onClick={addTab} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Tab
          </Button>
        </div>

        <div className="space-y-3">
          {tabs.map((tab: TabItem, index: number) => (
            <div key={tab.id} className="border rounded p-3 space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Tab {index + 1}</Label>
                {tabs.length > 1 && (
                  <Button
                    onClick={() => removeTab(index)}
                    size="sm"
                    variant="outline"
                    className="h-6 w-6 p-0"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                )}
              </div>

              <div>
                <Label className="text-xs">Label</Label>
                <Input
                  value={tab.label}
                  onChange={(e) => updateTab(index, "label", e.target.value)}
                  placeholder="Tab label"
                  className="mt-1"
                />
              </div>

              <div>
                <Label className="text-xs">Content</Label>
                <Input
                  value={typeof tab.content === "string" ? tab.content : ""}
                  onChange={(e) => updateTab(index, "content", e.target.value)}
                  placeholder="Tab content"
                  className="mt-1"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
