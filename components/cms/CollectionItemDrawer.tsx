"use client";

import { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
import { MediaFieldRenderer } from "@/components/cms/MediaFieldRenderer";
import { Loader2 } from "lucide-react";
import {
  useCreateCollectionItem,
  useUpdateCollectionItem,
  useCollectionItems,
  type CollectionItem,
} from "@/hooks/useCollectionItems";
import { useModalStore } from "@/lib/store/modalStore";
import { SharedFieldRenderer } from "@/components/ui/shared-field-renderer";
import {
  createCollectionItemSchema,
  type CollectionItemFormData,
} from "@/lib/validations/collection-items";

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
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const createMutation = useCreateCollectionItem();
  const updateMutation = useUpdateCollectionItem();
  const isLoading = createMutation.isPending || updateMutation.isPending;
  const { openModal } = useModalStore();

  // Create dynamic validation schema based on collection fields
  const validationSchema = useMemo(() => {
    return createCollectionItemSchema(collection.fields || []);
  }, [collection.fields]);

  // Generate default values based on collection fields
  const getDefaultValues = useMemo((): CollectionItemFormData => {
    const defaultData: Record<string, any> = {};

    collection.fields?.forEach((field) => {
      // Use field's default value if available
      if (field.defaultValue !== undefined && field.defaultValue !== "") {
        defaultData[field.name] = field.defaultValue;
        return;
      }

      // Otherwise, set type-appropriate defaults
      switch (field.type) {
        case "plainText":
        case "formattedText":
        case "link":
        case "email":
        case "url":
          defaultData[field.name] = "";
          break;
        case "number":
          defaultData[field.name] = 0;
          break;
        case "boolean":
        case "toggle":
          defaultData[field.name] = false;
          break;
        case "date":
          defaultData[field.name] = new Date().toISOString().split("T")[0];
          break;
        case "datetime":
          defaultData[field.name] = new Date().toISOString().slice(0, 16);
          break;
        case "select":
        case "option":
          defaultData[field.name] =
            field.options?.[0]?.value || field.options?.[0] || "";
          break;
        case "multiSelect":
        case "multiReference":
        case "gallery":
          defaultData[field.name] = [];
          break;
        case "color":
          defaultData[field.name] = "#000000";
          break;
        case "reference":
        case "image":
        case "video":
        case "file":
          defaultData[field.name] = "";
          break;
        default:
          defaultData[field.name] = "";
      }
    });

    return {
      data: defaultData,
      status: "draft",
      slug: "",
    };
  }, [collection.fields]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
    watch,
    setValue,
    reset,
    control,
  } = useForm<CollectionItemFormData>({
    resolver: yupResolver(validationSchema),
    defaultValues: getDefaultValues,
  });

  const formData = watch();

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
    placeholder = "Select item",
    multiple = false,
  }: {
    collectionId: string;
    value: string | string[];
    onChange: (value: string | string[]) => void;
    placeholder?: string;
    multiple?: boolean;
  }) => {
    const { data: itemsResponse, isLoading: itemsLoading } = useCollectionItems(
      collectionId,
      {
        limit: 100,
        sortBy: "createdAt",
        sortOrder: "desc",
      }
    );

    const items = itemsResponse?.items || [];

    if (itemsLoading) {
      return (
        <Select disabled>
          <SelectTrigger>
            <SelectValue placeholder="Loading items..." />
          </SelectTrigger>
        </Select>
      );
    }

    if (multiple) {
      // For multi-reference, we'll use a simpler approach for now
      // You could enhance this with a multi-select component later
      const selectedIds = Array.isArray(value) ? value : value ? [value] : [];
      const selectedItems = items.filter((item: any) =>
        selectedIds.includes(item._id)
      );

      return (
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            Selected items:{" "}
            {selectedItems.length > 0
              ? selectedItems.map(getDisplayName).join(", ")
              : "None"}
          </div>
          <Select
            value=""
            onValueChange={(itemId) => {
              if (!selectedIds.includes(itemId)) {
                onChange([...selectedIds, itemId]);
              }
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Add item..." />
            </SelectTrigger>
            <SelectContent>
              {items
                .filter((item: any) => !selectedIds.includes(item._id))
                .map((item: any) => (
                  <SelectItem key={item._id} value={item._id}>
                    {getDisplayName(item)}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          {selectedItems.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {selectedItems.map((item: any) => (
                <span
                  key={item._id}
                  className="inline-flex items-center gap-1 px-2 py-1 bg-muted rounded text-xs"
                >
                  {getDisplayName(item)}
                  <button
                    type="button"
                    onClick={() => {
                      const newValue = selectedIds.filter(
                        (id) => id !== item._id
                      );
                      onChange(newValue);
                    }}
                    className="hover:text-red-500"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Select
        value={value as string}
        onValueChange={onChange as (value: string) => void}
      >
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

  // Load item data when editing
  useEffect(() => {
    if (item) {
      const itemData = {
        data: item.data || {},
        status: item.status,
        slug: item.slug || "",
      };
      reset(itemData);
    } else {
      reset(getDefaultValues);
    }
    setHasUnsavedChanges(false);
  }, [item, getDefaultValues, reset]);

  // Track unsaved changes
  useEffect(() => {
    setHasUnsavedChanges(isDirty);
  }, [isDirty]);

  const onSubmit = async (data: CollectionItemFormData) => {
    try {
      if (item) {
        await updateMutation.mutateAsync({
          _id: item._id,
          data: data.data,
          status: data.status,
          slug: data.slug,
        });
      } else {
        await createMutation.mutateAsync({
          collectionId: collection._id,
          data: data,
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
    setValue(`data.${fieldName}`, value);

    // Auto-generate slug from title field
    if (fieldName === "title" && value) {
      const slug = generateSlug(value);
      setValue("slug", slug);
    }
  };

  const renderField = (field: any) => {
    const value = formData.data[field.name] || "";
    const fieldError = errors.data?.[field.name];

    // Handle reference fields with smart dropdown
    if (field.type === "reference" && field.referenceCollection) {
      return (
        <div className="space-y-1">
          <ReferenceItemSelector
            collectionId={field.referenceCollection}
            value={value}
            onChange={(newValue) => handleFieldChange(field.name, newValue)}
            placeholder={`Select ${field.name}`}
          />
          {fieldError && (
            <p className="text-sm text-destructive">
              {String(fieldError.message || fieldError)}
            </p>
          )}
        </div>
      );
    }

    // Handle multi-reference fields
    if (field.type === "multiReference" && field.referenceCollection) {
      return (
        <div className="space-y-1">
          <ReferenceItemSelector
            collectionId={field.referenceCollection}
            value={value}
            onChange={(newValue) => handleFieldChange(field.name, newValue)}
            placeholder={`Select ${field.name}`}
            multiple={true}
          />
          {fieldError && (
            <p className="text-sm text-destructive">
              {String(fieldError.message || fieldError)}
            </p>
          )}
        </div>
      );
    }

    // Handle media fields (image, video, gallery, file)
    // MediaFieldRenderer handles its own label, so we return it directly
    if (["image", "video", "gallery", "file"].includes(field.type)) {
      return (
        <div className="space-y-1">
          <MediaFieldRenderer
            field={field}
            value={value}
            onChange={(newValue: any) =>
              handleFieldChange(field.name, newValue)
            }
            placeholder={field.placeholder || `Upload ${field.name}`}
            projectId={collection._id}
          />
          {fieldError && (
            <p className="text-sm text-destructive">
              {String(fieldError.message || fieldError)}
            </p>
          )}
        </div>
      );
    }

    // Use the shared field renderer for other field types
    return (
      <div className="space-y-1">
        <SharedFieldRenderer
          field={field}
          value={value}
          onChange={(newValue) => handleFieldChange(field.name, newValue)}
          placeholder={field.placeholder || `Enter ${field.name}`}
        />
        {fieldError && (
          <p className="text-sm text-destructive">
            {String(fieldError.message || fieldError)}
          </p>
        )}
      </div>
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

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-6">
          {/* Collection Fields */}
          <div className="space-y-4">
            {collection.fields?.map((field) => {
              // Media fields already include their own labels and descriptions
              if (["image", "video", "gallery", "file"].includes(field.type)) {
                return <div key={field.name}>{renderField(field)}</div>;
              }

              // For non-media fields, render with label and description
              return (
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
              );
            })}
          </div>

          {/* Slug Field */}
          <div className="space-y-2">
            <Label htmlFor="slug" className="text-sm font-medium">
              Slug
            </Label>
            <Input
              id="slug"
              {...register("slug")}
              placeholder="url-friendly-slug"
              className="font-mono text-sm"
              aria-invalid={errors.slug ? "true" : "false"}
            />
            {errors.slug && (
              <p className="text-sm text-destructive">{errors.slug.message}</p>
            )}
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
                setValue("status", value)
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
            {errors.status && (
              <p className="text-sm text-destructive">
                {errors.status.message}
              </p>
            )}
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
            <Button type="submit" disabled={isLoading || isSubmitting}>
              {(isLoading || isSubmitting) && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {item ? "Update" : "Create"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
