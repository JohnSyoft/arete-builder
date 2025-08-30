"use client";

import { Database } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { RichTextEditor } from "@/components/ui/rich-text-editor";

interface DefaultValueFieldProps {
  fieldType: string;
  formData: any;
  onFormDataChange: (data: any) => void;
  allCollections: any[];
}

export function DefaultValueField({
  fieldType,
  formData,
  onFormDataChange,
  allCollections,
}: DefaultValueFieldProps) {
  switch (fieldType) {
    case "number":
      return (
        <Input
          type="number"
          placeholder="0"
          value={formData.defaultValue}
          onChange={(e) =>
            onFormDataChange({ ...formData, defaultValue: e.target.value })
          }
        />
      );

    case "toggle":
      return (
        <Select
          value={formData.defaultValue}
          onValueChange={(value) =>
            onFormDataChange({ ...formData, defaultValue: value })
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select default value" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="true">True</SelectItem>
            <SelectItem value="false">False</SelectItem>
          </SelectContent>
        </Select>
      );

    case "color":
      return (
        <div className="flex gap-2">
          <Input
            type="color"
            value={formData.defaultValue || "#000000"}
            onChange={(e) =>
              onFormDataChange({ ...formData, defaultValue: e.target.value })
            }
            className="w-16 h-10 p-1 border rounded"
          />
          <Input
            placeholder="#000000"
            value={formData.defaultValue}
            onChange={(e) =>
              onFormDataChange({ ...formData, defaultValue: e.target.value })
            }
          />
        </div>
      );

    case "date":
      return (
        <DatePicker
          date={
            formData.defaultValue ? new Date(formData.defaultValue) : undefined
          }
          onDateChange={(date) =>
            onFormDataChange({
              ...formData,
              defaultValue: date ? date.toISOString() : "",
            })
          }
          placeholder="Select default date"
        />
      );

    case "datetime":
      return (
        <Input
          type="datetime-local"
          value={formData.defaultValue}
          onChange={(e) =>
            onFormDataChange({ ...formData, defaultValue: e.target.value })
          }
        />
      );

    case "reference":
      return (
        <div className="space-y-2">
          <Select
            value={formData.referenceCollection}
            onValueChange={(value) =>
              onFormDataChange({ ...formData, referenceCollection: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select collection to reference" />
            </SelectTrigger>
            <SelectContent>
              {allCollections.map((col: any) => (
                <SelectItem key={col._id} value={col._id}>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    {col.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input
            placeholder="Default reference ID (optional)"
            value={formData.defaultValue}
            onChange={(e) =>
              onFormDataChange({ ...formData, defaultValue: e.target.value })
            }
          />
        </div>
      );

    case "multiReference":
      return (
        <div className="space-y-2">
          <Select
            value={formData.referenceCollection}
            onValueChange={(value) =>
              onFormDataChange({ ...formData, referenceCollection: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select collection to reference" />
            </SelectTrigger>
            <SelectContent>
              {allCollections.map((col: any) => (
                <SelectItem key={col._id} value={col._id}>
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4" />
                    {col.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Textarea
            placeholder="Default reference IDs (comma-separated, optional)"
            value={formData.defaultValue}
            onChange={(e) =>
              onFormDataChange({ ...formData, defaultValue: e.target.value })
            }
            rows={2}
          />
        </div>
      );

    case "option":
      return (
        <div className="space-y-2">
          <Textarea
            placeholder="Enter options (one per line)"
            value={formData.options.join("\n")}
            onChange={(e) =>
              onFormDataChange({
                ...formData,
                options: e.target.value.split("\n").filter(Boolean),
              })
            }
            rows={3}
          />
          <Select
            value={formData.defaultValue}
            onValueChange={(value) =>
              onFormDataChange({ ...formData, defaultValue: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select default option" />
            </SelectTrigger>
            <SelectContent>
              {formData.options.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      );

    case "formattedText":
      return (
        <RichTextEditor
          value={formData.defaultValue || ""}
          onChange={(value) =>
            onFormDataChange({ ...formData, defaultValue: value })
          }
          placeholder="Default HTML content..."
        />
      );

    default:
      return (
        <Input
          placeholder="Default value..."
          value={formData.defaultValue}
          onChange={(e) =>
            onFormDataChange({ ...formData, defaultValue: e.target.value })
          }
        />
      );
  }
}
