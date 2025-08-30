"use client";

import { useState, useEffect } from "react";
import { Database, Palette, Type, Settings } from "lucide-react";
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
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    slug: "",
    singularName: "",
    pluralName: "",
    icon: iconOptions[0],
    color: colorOptions[0].value,
  });

  const createMutation = useCreateCollection();
  const updateMutation = useUpdateCollection();
  const isLoading = createMutation.isPending || updateMutation.isPending;

  useEffect(() => {
    if (collection) {
      setFormData({
        name: collection.name,
        description: collection.description || "",
        slug: collection.slug,
        singularName: collection.settings?.singularName || "",
        pluralName: collection.settings?.pluralName || "",
        icon: collection.settings?.icon || iconOptions[0],
        color: collection.settings?.color || colorOptions[0].value,
      });
    } else {
      setFormData({
        name: "",
        description: "",
        slug: "",
        singularName: "",
        pluralName: "",
        icon: iconOptions[0],
        color: colorOptions[0].value,
      });
    }
  }, [collection]);

  // Auto-generate slug from name
  useEffect(() => {
    if (formData.name && mode === "create") {
      const slug = formData.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");
      setFormData((prev) => ({ ...prev, slug }));

      // Auto-generate plural/singular names
      const singular = formData.name.toLowerCase();
      const plural = singular.endsWith("s") ? singular : `${singular}s`;
      setFormData((prev) => ({
        ...prev,
        singularName: singular,
        pluralName: plural,
      }));
    }
  }, [formData.name, mode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Collection name is required");
      return;
    }

    try {
      const requestData = {
        name: formData.name,
        description: formData.description,
        slug: formData.slug,
        settings: {
          singularName: formData.singularName,
          pluralName: formData.pluralName,
          icon: formData.icon,
          color: formData.color,
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
      setFormData((prev) => ({ ...prev, slug }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            {mode === "create" ? "Create Collection" : "Edit Collection"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
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
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">
                Description (Optional)
              </label>
              <Textarea
                placeholder="Describe what this collection will contain..."
                className="resize-none"
                rows={2}
                value={formData.description}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Slug</label>
                <div className="flex">
                  <Input
                    placeholder="collection-slug"
                    value={formData.slug}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, slug: e.target.value }))
                    }
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
                      onClick={() => setFormData((prev) => ({ ...prev, icon }))}
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
                  value={formData.singularName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      singularName: e.target.value,
                    }))
                  }
                />
                <p className="text-xs text-muted-foreground">
                  Used in forms and single item views
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Plural Name</label>
                <Input
                  placeholder="e.g., blog posts"
                  value={formData.pluralName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      pluralName: e.target.value,
                    }))
                  }
                />
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
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, color: color.value }))
                    }
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

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading
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
