"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { RichTextEditor } from "@/components/ui/rich-text-editor";
import { ColorPickerComponent } from "@/components/ui/color-picker";

interface SharedFieldRendererProps {
  field: any;
  value: any;
  onChange: (value: any) => void;
  placeholder?: string;
}

// Helper function to validate dates
const isValidDate = (dateValue: any) => {
  if (!dateValue) return false;
  const date = new Date(dateValue);
  return date instanceof Date && !isNaN(date.getTime());
};

export function SharedFieldRenderer({
  field,
  value,
  onChange,
  placeholder,
}: SharedFieldRendererProps) {
  const fieldPlaceholder =
    placeholder || field.placeholder || `Enter ${field.name}`;

  switch (field.type) {
    case "plainText":
      return (
        <Input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={fieldPlaceholder}
        />
      );

    case "formattedText":
      return (
        <RichTextEditor
          value={value || ""}
          onChange={onChange}
          placeholder={fieldPlaceholder}
        />
      );

    case "number":
      return (
        <Input
          type="number"
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={fieldPlaceholder}
        />
      );

    case "date":
      return (
        <DatePicker
          date={value && isValidDate(value) ? new Date(value) : undefined}
          onDateChange={(date) => onChange(date ? date.toISOString() : "")}
          placeholder={`Select ${field.name}`}
        />
      );

    case "datetime":
      return (
        <Input
          type="datetime-local"
          value={
            value && isValidDate(value)
              ? new Date(value).toISOString().slice(0, 16)
              : ""
          }
          onChange={(e) => onChange(e.target.value)}
        />
      );

    case "toggle":
      return (
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            className="rounded border-gray-300"
          />
          <span className="text-sm text-muted-foreground">
            {value ? "Enabled" : "Disabled"}
          </span>
        </div>
      );

    case "option":
      return (
        <Select value={value || ""} onValueChange={onChange}>
          <SelectTrigger>
            <SelectValue placeholder={`Select ${field.name}`} />
          </SelectTrigger>
          <SelectContent>
            {field.options?.map((option: string) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      );

    case "color":
      return (
        <ColorPickerComponent
          value={value || "#000000"}
          onChange={onChange}
          label=""
          placeholder="Select color"
        />
      );

    case "link":
      return (
        <Input
          type="url"
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={fieldPlaceholder || `Enter ${field.name} URL`}
        />
      );

    case "image":
      return (
        <div className="space-y-2">
          <Input
            type="url"
            value={value || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter image URL"
          />
          {value && (
            <img
              src={value}
              alt="Preview"
              className="w-32 h-32 object-cover rounded border"
            />
          )}
        </div>
      );

    default:
      return (
        <Input
          value={value || ""}
          onChange={(e) => onChange(e.target.value)}
          placeholder={fieldPlaceholder}
        />
      );
  }
}
