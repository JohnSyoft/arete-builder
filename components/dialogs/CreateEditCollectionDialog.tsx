"use client";

import { useEffect } from "react";
import { Database, Palette, Type, Settings } from "lucide-react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  useCreateCollection,
  useUpdateCollection,
  Collection,
} from "@/hooks/useCollections";
import { toast } from "sonner";
import {
  collectionSchema,
  type CollectionFormData,
} from "@/lib/validations/collections";

interface CreateEditCollectionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  projectId: string;
  collection: Collection | null;
  mode: "create" | "edit";
}

const colorOptions = [
  { name: "Blue", value: "#3b82f6", class: "bg-blue-500" },
  { name: "Green", value: "#10b981", class: "bg-green-500" },
  { name: "Purple", value: "#8b5cf6", class: "bg-purple-500" },
  { name: "Red", value: "#ef4444", class: "bg-red-500" },
  { name: "Orange", value: "#f97316", class: "bg-orange-500" },
  { name: "Pink", value: "#ec4899", class: "bg-pink-500" },
  { name: "Indigo", value: "#6366f1", class: "bg-indigo-500" },
  { name: "Yellow", value: "#eab308", class: "bg-yellow-500" },
];

const iconOptions = [
  "📄",
  "📝",
  "📰",
  "📚",
  "🏷️",
  "👥",
  "🛍️",
  "🎨",
  "📊",
  "📅",
  "🔗",
  "💬",
  "📷",
  "🎵",
  "📹",
  "🗂️",
];

export function CreateEditCollectionDialog({
  isOpen,
  onClose,
  projectId,
  collection,
  mode,
}: CreateEditCollectionDialogProps) {
  const createMutation = useCreateCollection();
  const updateMutation = useUpdateCollection();
  const isLoading = createMutation.isPending || updateMutation.isPending;

  // Add custom scrollbar hiding
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .hide-scrollbar::-webkit-scrollbar {
        display: none;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
    reset,
  } = useForm<CollectionFormData>({
    resolver: yupResolver(collectionSchema),
    defaultValues: {
      name: "",
      description: "",
      slug: "",
      singularName: "",
      pluralName: "",
      icon: iconOptions[0],
      color: colorOptions[0].value,
    },
  });

  const formData = watch();

  useEffect(() => {
    if (collection) {
      reset({
        name: collection.name,
        description: collection.description || "",
        slug: collection.slug,
        singularName: collection.settings?.singularName || "",
        pluralName: collection.settings?.pluralName || "",
        icon: collection.settings?.icon || iconOptions[0],
        color: collection.settings?.color || colorOptions[0].value,
      });
    } else {
      reset({
        name: "",
        description: "",
        slug: "",
        singularName: "",
        pluralName: "",
        icon: iconOptions[0],
        color: colorOptions[0].value,
      });
    }
  }, [collection, reset]);

  // Auto-generate slug from name
  useEffect(() => {
    if (formData.name && mode === "create") {
      const slug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);

      // Auto-generate plural/singular names
      const singular = formData.name.toLowerCase();
      const plural = singular.endsWith("s") ? singular : `${singular}s`;
      setValue("singularName", singular);
      setValue("pluralName", plural);
    }
  }, [formData.name, mode, setValue]);

  const onSubmit = async (data: CollectionFormData) => {
    try {
      const requestData = {
        name: data.name,
        description: data.description,
        slug: data.slug,
        settings: {
          singularName: data.singularName,
          pluralName: data.pluralName,
          icon: data.icon,
          color: data.color,
        },
      };

      if (mode === "create") {
        await createMutation.mutateAsync({ projectId, data: requestData });
        toast.success("Collection created successfully");
      } else if (collection) {
        await updateMutation.mutateAsync({
          ...requestData,
          _id: collection._id,
        });
        toast.success("Collection updated successfully");
      }

      onClose();
    } catch (error) {
      // Handle error appropriately
      console.error("Collection operation failed:", error);
      toast.error(
        mode === "create"
          ? "Failed to create collection"
          : "Failed to update collection"
      );
    }
  };

  const generateSlug = () => {
    if (formData.name) {
      const slug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setValue("slug", slug);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            {mode === "create" ? "Create Collection" : "Edit Collection"}
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 flex flex-col min-h-0"
        >
          <div
            className="flex-1 overflow-y-auto space-y-6 pr-2 hide-scrollbar"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {/* Basic Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Type className="h-4 w-4" />
                Basic Information
              </h3>

              <div className="space-y-2">
                <label className="text-sm font-medium">Collection Name</label>
                <Input
                  placeholder="e.g., Blog Posts, Products, Team Members"
                  {...register("name")}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Description (Optional)
                </label>
                <Textarea
                  placeholder="Describe what this collection will contain..."
                  className="resize-none"
                  rows={2}
                  {...register("description")}
                  aria-invalid={errors.description ? "true" : "false"}
                />
                {errors.description && (
                  <p className="text-sm text-destructive">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Slug</label>
                  <div className="flex">
                    <Input
                      placeholder="collection-slug"
                      {...register("slug")}
                      aria-invalid={errors.slug ? "true" : "false"}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={generateSlug}
                      className="ml-2"
                    >
                      Generate
                    </Button>
                  </div>
                  {errors.slug && (
                    <p className="text-sm text-destructive">
                      {errors.slug.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Used in URLs and API endpoints
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Icon</label>
                  <div className="grid grid-cols-8 gap-2">
                    {iconOptions.map((icon) => (
                      <Button
                        key={icon}
                        type="button"
                        variant={formData.icon === icon ? "default" : "outline"}
                        size="sm"
                        className="aspect-square p-0"
                        onClick={() => setValue("icon", icon)}
                      >
                        {icon}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Advanced Settings */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Advanced Settings
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Singular Name</label>
                  <Input
                    placeholder="e.g., blog post"
                    {...register("singularName")}
                    aria-invalid={errors.singularName ? "true" : "false"}
                  />
                  {errors.singularName && (
                    <p className="text-sm text-destructive">
                      {errors.singularName.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Used in forms and single item views
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Plural Name</label>
                  <Input
                    placeholder="e.g., blog posts"
                    {...register("pluralName")}
                    aria-invalid={errors.pluralName ? "true" : "false"}
                  />
                  {errors.pluralName && (
                    <p className="text-sm text-destructive">
                      {errors.pluralName.message}
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    Used in lists and navigation
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium flex items-center gap-2">
                  <Palette className="h-4 w-4" />
                  Color Theme
                </label>
                <div className="flex gap-2">
                  {colorOptions.map((color) => (
                    <Button
                      key={color.value}
                      type="button"
                      variant="outline"
                      size="sm"
                      className={`w-8 h-8 p-0 ${color.class} ${
                        formData.color === color.value
                          ? "ring-2 ring-offset-2 ring-black"
                          : ""
                      }`}
                      onClick={() => setValue("color", color.value)}
                    >
                      <span className="sr-only">{color.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Preview</label>
              <div className="border rounded-lg p-4 bg-muted/50">
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm"
                    style={{ backgroundColor: formData.color }}
                  >
                    {formData.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">
                      {formData.name || "Collection Name"}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {formData.description || "Collection description"}
                    </p>
                  </div>
                  <Badge variant="outline" className="ml-auto">
                    {formData.slug || "collection-slug"}
                  </Badge>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-shrink-0 mt-6">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || isLoading}>
              {isSubmitting || isLoading
                ? mode === "create"
                  ? "Creating..."
                  : "Updating..."
                : mode === "create"
                ? "Create Collection"
                : "Update Collection"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
