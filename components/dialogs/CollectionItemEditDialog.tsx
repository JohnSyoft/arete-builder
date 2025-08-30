"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, Save, X } from "lucide-react";
import {
  useCreateCollectionItem,
  useUpdateCollectionItem,
  type CollectionItem,
} from "@/hooks/useCollectionItems";

interface CollectionItemEditDialogProps {
  isOpen: boolean;
  onClose: () => void;
  collection: {
    _id: string;
    name: string;
    fields: any[];
  };
  item?: CollectionItem | null;
  onSave?: () => void;
}

export function CollectionItemEditDialog({
  isOpen,
  onClose,
  collection,
  item,
  onSave,
}: CollectionItemEditDialogProps) {
  const [formData, setFormData] = useState<{
    data: Record<string, any>;
    status: "draft" | "published" | "archived";
    slug: string;
  }>({
    data: {},
    status: "draft",
    slug: "",
  });

  const createMutation = useCreateCollectionItem();
  const updateMutation = useUpdateCollectionItem();
  const isLoading = createMutation.isPending || updateMutation.isPending;

  useEffect(() => {
    if (item) {
      setFormData({
        data: item.data || {},
        status: item.status,
        slug: item.slug || "",
      });
    } else {
      // Initialize with default values based on collection fields
      const defaultData: Record<string, any> = {};
      collection.fields?.forEach((field) => {
        switch (field.type) {
          case "title":
          case "text":
          case "slug":
            defaultData[field.name] = "";
            break;
          case "number":
            defaultData[field.name] = 0;
            break;
          case "toggle":
            defaultData[field.name] = false;
            break;
          case "date":
            defaultData[field.name] = new Date().toISOString().split("T")[0];
            break;
          case "option":
            defaultData[field.name] = field.settings?.options?.[0] || "";
            break;
          default:
            defaultData[field.name] = "";
        }
      });

      setFormData({
        data: defaultData,
        status: "draft",
        slug: "",
      });
    }
  }, [item, collection.fields, isOpen]);

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [fieldName]: value,
      },
    }));

    // Auto-generate slug from title if no slug is set
    if (fieldName === "title" && !formData.slug && !item) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (item) {
        await updateMutation.mutateAsync({
          _id: item._id,
          data: formData.data,
          status: formData.status,
          slug: formData.slug,
        });
      } else {
        await createMutation.mutateAsync({
          collectionId: collection._id,
          data: {
            data: formData.data,
            status: formData.status,
            slug: formData.slug,
          },
        });
      }

      onSave?.();
      onClose();
    } catch (error) {
      console.error("Failed to save collection item:", error);
    }
  };

  const renderField = (field: any) => {
    const value = formData.data[field.name] || "";

    switch (field.type) {
      case "title":
      case "text":
      case "slug":
        return (
          <Input
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.settings?.placeholder || `Enter ${field.label}`}
          />
        );

      case "content":
      case "plainText":
        return (
          <Textarea
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.settings?.placeholder || `Enter ${field.label}`}
            rows={4}
          />
        );

      case "number":
        return (
          <Input
            type="number"
            value={value}
            onChange={(e) =>
              handleFieldChange(field.name, parseFloat(e.target.value) || 0)
            }
            placeholder={field.settings?.placeholder || `Enter ${field.label}`}
          />
        );

      case "date":
        return (
          <Input
            type="date"
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
          />
        );

      case "toggle":
        return (
          <Select
            value={value ? "true" : "false"}
            onValueChange={(val) =>
              handleFieldChange(field.name, val === "true")
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">Yes</SelectItem>
              <SelectItem value="false">No</SelectItem>
            </SelectContent>
          </Select>
        );

      case "option":
        return (
          <Select
            value={value}
            onValueChange={(val) => handleFieldChange(field.name, val)}
          >
            <SelectTrigger>
              <SelectValue
                placeholder={`Select ${field.label.toLowerCase()}`}
              />
            </SelectTrigger>
            <SelectContent>
              {field.settings?.options?.map((option: string) => (
                <SelectItem key={option} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );

      case "color":
        return (
          <Input
            type="color"
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
          />
        );

      default:
        return (
          <Input
            value={value}
            onChange={(e) => handleFieldChange(field.name, e.target.value)}
            placeholder={field.settings?.placeholder || `Enter ${field.label}`}
          />
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {item ? "Edit" : "Create"} {collection.name} Item
          </DialogTitle>
          <DialogDescription>
            {item
              ? `Update the details for this ${collection.name.toLowerCase()} item.`
              : `Create a new ${collection.name.toLowerCase()} item.`}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dynamic fields based on collection schema */}
          <div className="space-y-4">
            {collection.fields?.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name}>
                  {field.label}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </Label>
                {renderField(field)}
                {field.description && (
                  <p className="text-sm text-muted-foreground">
                    {field.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Meta fields */}
          <div className="border-t pt-4 space-y-4">
            <h3 className="text-lg font-medium">Item Settings</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={formData.status}
                  onValueChange={(value: any) =>
                    setFormData((prev) => ({ ...prev, status: value }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="draft">Draft</SelectItem>
                    <SelectItem value="published">Published</SelectItem>
                    <SelectItem value="archived">Archived</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="slug">Slug (URL)</Label>
                <Input
                  value={formData.slug}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, slug: e.target.value }))
                  }
                  placeholder="url-friendly-name"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4 pt-4 border-t">
            <Button type="button" variant="outline" onClick={onClose}>
              <X className="mr-2 h-4 w-4" />
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Save className="mr-2 h-4 w-4" />
              )}
              {item ? "Update" : "Create"} Item
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
