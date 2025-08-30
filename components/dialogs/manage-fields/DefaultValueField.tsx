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
import { ImageUpload } from "@/components/ui/image-upload";
import { useCollectionItems } from "@/hooks/useCollectionItems";

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
  // Helper function to get display name for collection items
  const getDisplayName = (item: any) => {
    // Check for title field first (case insensitive)
    const titleField = Object.keys(item.data || {}).find(
      (key) => key.toLowerCase() === "title"
    );
    if (titleField && item.data[titleField]) {
      return item.data[titleField];
    }

    // Fallback to slug
    if (item.slug) {
      return item.slug;
    }

    // Last fallback to ID
    return item._id;
  };

  // Component to render reference item selector
  const ReferenceItemSelector = ({
    collectionId,
    value,
    onChange,
    placeholder = "Select default item",
  }: {
    collectionId: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  }) => {
    const { data: itemsResponse, isLoading } = useCollectionItems(
      collectionId,
      {
        limit: 100,
        sortBy: "createdAt",
        sortOrder: "desc",
      }
    );

    const items = itemsResponse?.items || [];

    if (isLoading) {
      return (
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Loading items..." />
          </SelectTrigger>
        </Select>
      );
    }

    return (
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {items.length === 0 ? (
            <SelectItem value="default" disabled>
              No items found in collection
            </SelectItem>
          ) : (
            items.map((item: any) => (
              <SelectItem key={item._id} value={item._id}>
                {getDisplayName(item)}
              </SelectItem>
            ))
          )}
        </SelectContent>
      </Select>
    );
  };
//   console.log({ fieldType });
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

    case "image":
      return (
        <ImageUpload
          value={formData.defaultValue || ""}
          onChange={(value) =>
            onFormDataChange({ ...formData, defaultValue: value })
          }
          multiple={false}
          variant="compact"
          placeholder="Select default image"
        />
      );

    case "reference":
      return (
        <div className="space-y-2">
          <Select
            value={formData.referenceCollection}
            onValueChange={(value) =>
              onFormDataChange({
                ...formData,
                referenceCollection: value,
                defaultValue: "", // Reset default value when collection changes
              })
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
          {formData.referenceCollection && (
            <ReferenceItemSelector
              collectionId={formData.referenceCollection}
              value={formData.defaultValue || ""}
              onChange={(value) =>
                onFormDataChange({ ...formData, defaultValue: value })
              }
              placeholder="Select default item (optional)"
            />
          )}
        </div>
      );

    case "multiReference":
      return (
        <div className="space-y-2">
          <Select
            value={formData.referenceCollection}
            onValueChange={(value) =>
              onFormDataChange({
                ...formData,
                referenceCollection: value,
                defaultValue: "", // Reset default value when collection changes
              })
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
          {formData.referenceCollection && (
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Default items (optional - enter IDs separated by commas):
              </p>
              <Textarea
                placeholder="Enter item IDs (comma-separated, optional)"
                value={formData.defaultValue}
                onChange={(e) =>
                  onFormDataChange({
                    ...formData,
                    defaultValue: e.target.value,
                  })
                }
                rows={2}
              />
              <p className="text-xs text-muted-foreground">
                You can find item IDs in the CMS section of the referenced
                collection.
              </p>
            </div>
          )}
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
