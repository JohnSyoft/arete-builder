import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface HeroCarouselSimplePropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function HeroCarouselSimpleProperties({
  elementProps,
  onPropChange,
}: HeroCarouselSimplePropertiesProps) {
  const {
    title = "MiniMax M1",
    description = "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
    primaryButtonText = "Learn more",
    secondaryButtonText = "Try Now",
    gradientFrom = "#ff6b6b",
    gradientTo = "#ee5a24",
    backgroundColor = "#ffffff",
    padding = "0",
    minHeight = "100vh",
  } = elementProps;

  return (
    <div className="space-y-6">
      {/* Content Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Content Settings
        </h3>

        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => onPropChange("title", e.target.value)}
            placeholder="Enter hero title"
          />
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            value={description}
            onChange={(e) => onPropChange("description", e.target.value)}
            placeholder="Enter hero description"
            rows={3}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="primaryButtonText">Primary Button Text</Label>
            <Input
              id="primaryButtonText"
              value={primaryButtonText}
              onChange={(e) =>
                onPropChange("primaryButtonText", e.target.value)
              }
              placeholder="Primary button"
            />
          </div>
          <div>
            <Label htmlFor="secondaryButtonText">Secondary Button Text</Label>
            <Input
              id="secondaryButtonText"
              value={secondaryButtonText}
              onChange={(e) =>
                onPropChange("secondaryButtonText", e.target.value)
              }
              placeholder="Secondary button"
            />
          </div>
        </div>
      </div>

      {/* Gradient Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Gradient Settings
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="gradientFrom">Gradient From</Label>
            <div className="flex gap-2">
              <Input
                id="gradientFrom"
                type="color"
                value={gradientFrom}
                onChange={(e) => onPropChange("gradientFrom", e.target.value)}
                className="w-12 h-8 p-1 border rounded"
              />
              <Input
                value={gradientFrom}
                onChange={(e) => onPropChange("gradientFrom", e.target.value)}
                placeholder="#ff6b6b"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="gradientTo">Gradient To</Label>
            <div className="flex gap-2">
              <Input
                id="gradientTo"
                type="color"
                value={gradientTo}
                onChange={(e) => onPropChange("gradientTo", e.target.value)}
                className="w-12 h-8 p-1 border rounded"
              />
              <Input
                value={gradientTo}
                onChange={(e) => onPropChange("gradientTo", e.target.value)}
                placeholder="#ee5a24"
              />
            </div>
          </div>
        </div>

        {/* Gradient Presets */}
        <div>
          <Label>Gradient Presets</Label>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button
              onClick={() => {
                onPropChange("gradientFrom", "#ff6b6b");
                onPropChange("gradientTo", "#ee5a24");
              }}
              className="h-12 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
              style={{
                background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
              }}
              title="Red Orange"
            />
            <button
              onClick={() => {
                onPropChange("gradientFrom", "#ffa726");
                onPropChange("gradientTo", "#ff9800");
              }}
              className="h-12 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
              style={{
                background: "linear-gradient(135deg, #ffa726, #ff9800)",
              }}
              title="Orange"
            />
            <button
              onClick={() => {
                onPropChange("gradientFrom", "#42a5f5");
                onPropChange("gradientTo", "#1976d2");
              }}
              className="h-12 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
              style={{
                background: "linear-gradient(135deg, #42a5f5, #1976d2)",
              }}
              title="Blue"
            />
            <button
              onClick={() => {
                onPropChange("gradientFrom", "#66bb6a");
                onPropChange("gradientTo", "#4caf50");
              }}
              className="h-12 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
              style={{
                background: "linear-gradient(135deg, #66bb6a, #4caf50)",
              }}
              title="Green"
            />
            <button
              onClick={() => {
                onPropChange("gradientFrom", "#ab47bc");
                onPropChange("gradientTo", "#9c27b0");
              }}
              className="h-12 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
              style={{
                background: "linear-gradient(135deg, #ab47bc, #9c27b0)",
              }}
              title="Purple"
            />
            <button
              onClick={() => {
                onPropChange("gradientFrom", "#ef5350");
                onPropChange("gradientTo", "#f44336");
              }}
              className="h-12 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
              style={{
                background: "linear-gradient(135deg, #ef5350, #f44336)",
              }}
              title="Red"
            />
          </div>
        </div>
      </div>

      {/* Section Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Section Settings
        </h3>

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

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="padding">Padding</Label>
            <Input
              id="padding"
              value={padding}
              onChange={(e) => onPropChange("padding", e.target.value)}
              placeholder="0"
            />
          </div>
          <div>
            <Label htmlFor="minHeight">Min Height</Label>
            <Input
              id="minHeight"
              value={minHeight}
              onChange={(e) => onPropChange("minHeight", e.target.value)}
              placeholder="100vh"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
