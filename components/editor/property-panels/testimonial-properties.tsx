"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface TestimonialPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function TestimonialProperties({
  elementProps,
  onPropChange,
}: TestimonialPropertiesProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Testimonial Properties</h3>

      {/* Customer Information */}
      <div className="space-y-3">
        <div>
          <Label>Customer Name</Label>
          <Input
            value={elementProps.name || ""}
            onChange={(e) => onPropChange("name", e.target.value)}
            placeholder="Sarah Johnson"
          />
        </div>

        <div>
          <Label>Customer Title/Position</Label>
          <Input
            value={elementProps.title || ""}
            onChange={(e) => onPropChange("title", e.target.value)}
            placeholder="CEO, Tech Company"
          />
        </div>

        <div>
          <Label>Company</Label>
          <Input
            value={elementProps.company || ""}
            onChange={(e) => onPropChange("company", e.target.value)}
            placeholder="Tech Innovations Inc."
          />
        </div>

        <div>
          <Label>Customer Avatar URL</Label>
          <Input
            value={elementProps.avatar || ""}
            onChange={(e) => onPropChange("avatar", e.target.value)}
            placeholder="https://example.com/customer-photo.jpg"
          />
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="space-y-3">
        <div>
          <Label>Testimonial Text</Label>
          <Textarea
            value={elementProps.content || ""}
            onChange={(e) => onPropChange("content", e.target.value)}
            placeholder="This service exceeded my expectations. The team was professional and delivered outstanding results."
            rows={4}
          />
        </div>

        <div>
          <Label>Service/Product Used</Label>
          <Input
            value={elementProps.service || ""}
            onChange={(e) => onPropChange("service", e.target.value)}
            placeholder="Web Development"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="space-y-3">
        <div>
          <Label>Rating (1-5)</Label>
          <Input
            type="number"
            min="1"
            max="5"
            step="0.1"
            value={elementProps.rating || ""}
            onChange={(e) =>
              onPropChange("rating", parseFloat(e.target.value) || 5)
            }
            placeholder="5.0"
          />
        </div>
      </div>

      {/* Date */}
      <div className="space-y-3">
        <div>
          <Label>Date</Label>
          <Input
            type="date"
            value={elementProps.date || ""}
            onChange={(e) => onPropChange("date", e.target.value)}
          />
        </div>
      </div>

      {/* Display Options */}
      <div className="space-y-3">
        <div>
          <Label>Layout Style</Label>
          <Select
            value={elementProps.layout || "card"}
            onValueChange={(value) => onPropChange("layout", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="card">Card</SelectItem>
              <SelectItem value="quote">Quote</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="featured">Featured</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showAvatar !== false}
            onCheckedChange={(checked) => onPropChange("showAvatar", checked)}
          />
          <Label>Show Avatar</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showRating !== false}
            onCheckedChange={(checked) => onPropChange("showRating", checked)}
          />
          <Label>Show Rating</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showCompany !== false}
            onCheckedChange={(checked) => onPropChange("showCompany", checked)}
          />
          <Label>Show Company</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showService !== false}
            onCheckedChange={(checked) => onPropChange("showService", checked)}
          />
          <Label>Show Service</Label>
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            checked={elementProps.showDate !== false}
            onCheckedChange={(checked) => onPropChange("showDate", checked)}
          />
          <Label>Show Date</Label>
        </div>
      </div>

      {/* Styling Options */}
      <div className="space-y-3">
        <div>
          <Label>Quote Style</Label>
          <Select
            value={elementProps.quoteStyle || "standard"}
            onValueChange={(value) => onPropChange("quoteStyle", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="large-quotes">Large Quotes</SelectItem>
              <SelectItem value="no-quotes">No Quotes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label>Background Style</Label>
          <Select
            value={elementProps.background || "white"}
            onValueChange={(value) => onPropChange("background", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="white">White</SelectItem>
              <SelectItem value="gray">Gray</SelectItem>
              <SelectItem value="gradient">Gradient</SelectItem>
              <SelectItem value="transparent">Transparent</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
