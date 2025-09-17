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
import { ColorPickerComponent } from "@/components/ui/color-picker";
import { Plus, Trash2 } from "lucide-react";

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
    tabLabels = ["Tab 1", "Tab 2", "Tab 3"],
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
    const newLabel = `Tab ${tabLabels.length + 1}`;
    onPropChange("tabLabels", [...tabLabels, newLabel]);
  };

  const removeTab = (index: number) => {
    const newLabels = tabLabels.filter((_: string, i: number) => i !== index);
    onPropChange("tabLabels", newLabels);
  };

  const updateTabLabel = (index: number, value: string) => {
    const newLabels = [...tabLabels];
    newLabels[index] = value;
    onPropChange("tabLabels", newLabels);
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

      <ColorPickerComponent
        value={backgroundColor}
        onChange={(value) => onPropChange("backgroundColor", value)}
        label="Background Color"
        placeholder="Select background color"
      />

      <ColorPickerComponent
        value={activeColor}
        onChange={(value) => onPropChange("activeColor", value)}
        label="Active Color"
        placeholder="Select active color"
      />

      <ColorPickerComponent
        value={inactiveColor}
        onChange={(value) => onPropChange("inactiveColor", value)}
        label="Inactive Color"
        placeholder="Select inactive color"
      />

      <ColorPickerComponent
        value={borderColor}
        onChange={(value) => onPropChange("borderColor", value)}
        label="Border Color"
        placeholder="Select border color"
      />

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
          {tabLabels.map((label: string, index: number) => (
            <div key={`tab-${index}`} className="border rounded p-3 space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium">Tab {index + 1}</Label>
                {tabLabels.length > 1 && (
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
                  value={label}
                  onChange={(e) => updateTabLabel(index, e.target.value)}
                  placeholder="Tab label"
                  className="mt-1"
                />
              </div>

              <div className="text-xs text-gray-500 mt-2">
                Drop components into this tab's content area in the editor to add content.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
