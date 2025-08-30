"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Loader2 } from "lucide-react";
import {
  useCreateCollectionItem,
  useUpdateCollectionItem,
  type CollectionItem,
} from "@/hooks/useCollectionItems";
import { useModalStore } from "@/lib/store/modalStore";
import { SharedFieldRenderer } from "@/components/ui/shared-field-renderer";

interface CollectionItemDrawerProps {
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

export function CollectionItemDrawer({
  isOpen,
  onClose,
  collection,
  item,
  onSave,
}: CollectionItemDrawerProps) {
  const [formData, setFormData] = useState<{
    data: Record<string, any>;
    status: "draft" | "published" | "archived";
    slug: string;
  }>({
    data: {},
    status: "draft",
    slug: "",
  });

  const [initialFormData, setInitialFormData] = useState<{
    data: Record<string, any>;
    status: "draft" | "published" | "archived";
    slug: string;
  }>({
    data: {},
    status: "draft",
    slug: "",
  });

  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const createMutation = useCreateCollectionItem();
  const updateMutation = useUpdateCollectionItem();
  const isLoading = createMutation.isPending || updateMutation.isPending;
  const { openModal } = useModalStore();

  useEffect(() => {
    if (item) {
      const itemData = {
        data: item.data || {},
        status: item.status,
        slug: item.slug || "",
      };
      setFormData(itemData);
      setInitialFormData(itemData);
    } else {
      // Initialize with default values based on collection fields
      const defaultData: Record<string, any> = {};
      collection.fields?.forEach((field) => {
        switch (field.type) {
          case "plainText":
          case "formattedText":
          case "link":
            defaultData[field.name] = "";
            break;
          case "number":
            defaultData[field.name] = 0;
            break;
          case "toggle":
            defaultData[field.name] = false;
            break;
          case "date":
            defaultData[field.name] = new Date().toISOString();
            break;
          case "datetime":
            defaultData[field.name] = new Date().toISOString().slice(0, 16);
            break;
          case "option":
            defaultData[field.name] = field.options?.[0] || "";
            break;
          case "color":
            defaultData[field.name] = "#000000";
            break;
          default:
            defaultData[field.name] = "";
        }
      });

      const newFormData = {
        data: defaultData,
        status: "draft" as const,
        slug: "",
      };
      setFormData(newFormData);
      setInitialFormData(newFormData);
    }
    setHasUnsavedChanges(false);
  }, [item, collection.fields]);

  // Detect changes to form data
  useEffect(() => {
    const hasChanges =
      JSON.stringify(formData) !== JSON.stringify(initialFormData);
    setHasUnsavedChanges(hasChanges);
  }, [formData, initialFormData]);

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
          data: formData,
        });
      }

      onSave?.();
      setHasUnsavedChanges(false);
      onClose();
    } catch (error) {
      console.error("Failed to save item:", error);
    }
  };

  const handleClose = () => {
    if (hasUnsavedChanges) {
      openModal("confirmation", {
        title: "Unsaved Changes",
        message:
          "You have unsaved changes. Are you sure you want to close without saving?",
        onConfirm: () => {
          setHasUnsavedChanges(false);
          onClose();
        },
      });
    } else {
      onClose();
    }
  };

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleFieldChange = (fieldName: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [fieldName]: value,
      },
    }));

    // Auto-generate slug from title field
    if (fieldName === "title" && value) {
      const slug = generateSlug(value);
      setFormData((prev) => ({
        ...prev,
        slug,
      }));
    }
  };

  const renderField = (field: any) => {
    const value = formData.data[field.name] || "";

    return (
      <SharedFieldRenderer
        field={field}
        value={value}
        onChange={(newValue) => handleFieldChange(field.name, newValue)}
        placeholder={field.placeholder || `Enter ${field.name}`}
      />
    );
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent className="w-[50vw] min-w-[600px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {item ? `Edit ${collection.name}` : `Create ${collection.name}`}
            {hasUnsavedChanges && (
              <span className="text-orange-500 ml-2">•</span>
            )}
          </SheetTitle>
          <SheetDescription>
            {item
              ? `Update the details for this ${collection.name.toLowerCase()}.`
              : `Add a new ${collection.name.toLowerCase()} to your collection.`}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          {/* Collection Fields */}
          <div className="space-y-4">
            {collection.fields?.map((field) => (
              <div key={field.name} className="space-y-2">
                <Label htmlFor={field.name} className="text-sm font-medium">
                  {field.label || field.name}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </Label>
                {field.description && (
                  <p className="text-xs text-muted-foreground">
                    {field.description}
                  </p>
                )}
                {renderField(field)}
              </div>
            ))}
          </div>

          {/* Slug Field */}
          <div className="space-y-2">
            <Label htmlFor="slug" className="text-sm font-medium">
              Slug
            </Label>
            <Input
              id="slug"
              value={formData.slug}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, slug: e.target.value }))
              }
              placeholder="url-friendly-slug"
              className="font-mono text-sm"
            />
            <p className="text-xs text-muted-foreground">
              Used in URLs. Auto-generated from title.
            </p>
          </div>

          {/* Status Field */}
          <div className="space-y-2">
            <Label htmlFor="status" className="text-sm font-medium">
              Status
            </Label>
            <Select
              value={formData.status}
              onValueChange={(value: "draft" | "published" | "archived") =>
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

          {/* Actions */}
          <div className="flex justify-end space-x-2 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {item ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
