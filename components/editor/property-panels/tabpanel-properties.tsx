import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface TabPanelPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function TabPanelProperties({
  elementProps,
  onPropChange,
}: TabPanelPropertiesProps) {
  const {
    label = "Tab Panel",
    value = "panel1",
    backgroundColor = "#ffffff",
    borderColor = "#e5e7eb",
    borderRadius = "6px",
    padding = "16px",
    margin = "0px",
    minHeight = "200px",
  } = elementProps;

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="label">Label</Label>
        <Input
          id="label"
          value={label}
          onChange={(e) => onPropChange("label", e.target.value)}
          placeholder="Tab Panel"
        />
      </div>

      <div>
        <Label htmlFor="value">Value</Label>
        <Input
          id="value"
          value={value}
          onChange={(e) => onPropChange("value", e.target.value)}
          placeholder="panel1"
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
          placeholder="16px"
        />
      </div>

      <div>
        <Label htmlFor="margin">Margin</Label>
        <Input
          id="margin"
          value={margin}
          onChange={(e) => onPropChange("margin", e.target.value)}
          placeholder="0px"
        />
      </div>

      <div>
        <Label htmlFor="minHeight">Min Height</Label>
        <Input
          id="minHeight"
          value={minHeight}
          onChange={(e) => onPropChange("minHeight", e.target.value)}
          placeholder="200px"
        />
      </div>
    </div>
  );
}
