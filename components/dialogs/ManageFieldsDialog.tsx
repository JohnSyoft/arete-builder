"use client";

import { useState } from "react";
import {
  Plus,
  Trash2,
  Edit3,
  GripVertical,
  Type,
  Link,
  Image,
  Calendar,
  Hash,
  ToggleLeft,
  FileText,
  Palette,
  File,
  ExternalLink,
  List,
  Users,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Collection,
  Field,
  useAddField,
  useUpdateField,
  useRemoveField,
} from "@/hooks/useCollections";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

interface ManageFieldsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  collection: Collection;
}

const fieldTypes = [
  {
    value: "title",
    label: "Title",
    icon: Type,
    description: "Main heading text",
  },
  {
    value: "slug",
    label: "Slug",
    icon: Link,
    description: "URL-friendly identifier",
  },
  {
    value: "content",
    label: "Rich Text",
    icon: FileText,
    description: "Rich text editor content",
  },
  {
    value: "plainText",
    label: "Plain Text",
    icon: Type,
    description: "Simple text input",
  },
  {
    value: "formattedText",
    label: "Formatted Text",
    icon: FileText,
    description: "Text with basic formatting",
  },
  {
    value: "date",
    label: "Date & Time",
    icon: Calendar,
    description: "Date and time picker",
  },
  {
    value: "link",
    label: "URL",
    icon: ExternalLink,
    description: "Link or URL input",
  },
  {
    value: "image",
    label: "Image",
    icon: Image,
    description: "Single image upload",
  },
  {
    value: "gallery",
    label: "Image Gallery",
    icon: Image,
    description: "Multiple image uploads",
  },
  {
    value: "color",
    label: "Color",
    icon: Palette,
    description: "Color picker",
  },
  {
    value: "toggle",
    label: "Boolean",
    icon: ToggleLeft,
    description: "True/false switch",
  },
  {
    value: "number",
    label: "Number",
    icon: Hash,
    description: "Numeric input",
  },
  {
    value: "option",
    label: "Select Option",
    icon: List,
    description: "Dropdown selection",
  },
  { value: "file", label: "File", icon: File, description: "File upload" },
  {
    value: "reference",
    label: "Reference",
    icon: Users,
    description: "Link to another collection item",
  },
  {
    value: "multiReference",
    label: "Multi Reference",
    icon: Users,
    description: "Link to multiple collection items",
  },
];

export function ManageFieldsDialog({
  isOpen,
  onClose,
  collection,
}: ManageFieldsDialogProps) {
  const [editingField, setEditingField] = useState<Field | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "plainText",
    description: "",
    required: false,
    textArea: false,
    localization: false,
    placeholder: "",
    maxLength: "",
    defaultValue: "",
  });

  const addFieldMutation = useAddField();
  const updateFieldMutation = useUpdateField();
  const removeFieldMutation = useRemoveField();

  const handleAddField = () => {
    setEditingField(null);
    setShowAddForm(true);
    setFormData({
      name: "",
      type: "plainText",
      description: "",
      required: false,
      textArea: false,
      localization: false,
      placeholder: "",
      maxLength: "",
      defaultValue: "",
    });
  };

  const handleEditField = (field: Field) => {
    setEditingField(field);
    setShowAddForm(true);
    setFormData({
      name: field.name,
      type: field.type,
      description: field.description || "",
      required: field.required || false,
      textArea: field.textArea || false,
      localization: field.localization || false,
      placeholder: field.placeholder || "",
      maxLength: field.maxLength?.toString() || "",
      defaultValue: field.defaultValue || "",
    });
  };

  const handleDeleteField = async (fieldId: string) => {
    try {
      await removeFieldMutation.mutateAsync({
        collectionId: collection._id,
        fieldId,
      });
      toast.success("Field deleted successfully");
    } catch (error) {
      toast.error("Failed to delete field");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Field name is required");
      return;
    }

    try {
      const fieldData = {
        ...formData,
        id: editingField?.id || crypto.randomUUID(),
        maxLength: formData.maxLength
          ? parseInt(formData.maxLength)
          : undefined,
        type: formData.type as Field["type"],
      };

      if (editingField) {
        await updateFieldMutation.mutateAsync({
          collectionId: collection._id,
          fieldId: editingField.id,
          field: fieldData,
        });
        toast.success("Field updated successfully");
      } else {
        await addFieldMutation.mutateAsync({
          collectionId: collection._id,
          field: fieldData,
        });
        toast.success("Field added successfully");
      }

      setShowAddForm(false);
      setEditingField(null);
    } catch (error) {
      toast.error(
        editingField ? "Failed to update field" : "Failed to add field"
      );
    }
  };

  const getFieldIcon = (type: string) => {
    const fieldType = fieldTypes.find((ft) => ft.value === type);
    return fieldType?.icon || Type;
  };

  const getFieldTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      title: "bg-blue-100 text-blue-800",
      slug: "bg-green-100 text-green-800",
      content: "bg-purple-100 text-purple-800",
      plainText: "bg-gray-100 text-gray-800",
      formattedText: "bg-yellow-100 text-yellow-800",
      date: "bg-pink-100 text-pink-800",
      link: "bg-indigo-100 text-indigo-800",
      image: "bg-orange-100 text-orange-800",
      gallery: "bg-red-100 text-red-800",
      color: "bg-emerald-100 text-emerald-800",
      toggle: "bg-cyan-100 text-cyan-800",
      number: "bg-violet-100 text-violet-800",
      option: "bg-rose-100 text-rose-800",
      file: "bg-amber-100 text-amber-800",
      reference: "bg-teal-100 text-teal-800",
      multiReference: "bg-slate-100 text-slate-800",
    };
    return colors[type] || "bg-gray-100 text-gray-800";
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className="text-lg">{collection.settings?.icon}</span>
            Manage Fields - {collection.name}
          </DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-hidden">
          {!showAddForm ? (
            <div className="space-y-4">
              {/* Add Field Button */}
              <Button onClick={handleAddField} className="w-full gap-2">
                <Plus className="h-4 w-4" />
                Add New Field
              </Button>

              {/* Fields List */}
              <div className="space-y-2 max-h-[400px] overflow-y-auto">
                {collection.fields.length === 0 ? (
                  <div className="text-center py-8 text-muted-foreground">
                    <Type className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p>No fields yet. Add your first field to get started.</p>
                  </div>
                ) : (
                  collection.fields.map((field) => {
                    const Icon = getFieldIcon(field.type);
                    return (
                      <Card
                        key={field.id}
                        className="group hover:shadow-sm transition-shadow"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3 flex-1">
                              <GripVertical className="h-4 w-4 text-muted-foreground cursor-move" />
                              <Icon className="h-4 w-4 text-muted-foreground" />
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">
                                    {field.name}
                                  </span>
                                  {field.required && (
                                    <Badge
                                      variant="destructive"
                                      className="text-xs"
                                    >
                                      Required
                                    </Badge>
                                  )}
                                  <Badge
                                    variant="secondary"
                                    className={cn(
                                      "text-xs",
                                      getFieldTypeColor(field.type)
                                    )}
                                  >
                                    {
                                      fieldTypes.find(
                                        (ft) => ft.value === field.type
                                      )?.label
                                    }
                                  </Badge>
                                </div>
                                {field.description && (
                                  <p className="text-sm text-muted-foreground mt-1">
                                    {field.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleEditField(field)}
                              >
                                <Edit3 className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => handleDeleteField(field.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6 max-h-[500px] overflow-y-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium">
                  {editingField ? "Edit Field" : "Add New Field"}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setShowAddForm(false);
                    setEditingField(null);
                  }}
                >
                  Cancel
                </Button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Field Name</label>
                    <Input
                      placeholder="e.g., Title, Description"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Field Type</label>
                    <Select
                      value={formData.type}
                      onValueChange={(value) =>
                        setFormData({ ...formData, type: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select field type" />
                      </SelectTrigger>
                      <SelectContent>
                        {fieldTypes.map((type) => {
                          const Icon = type.icon;
                          return (
                            <SelectItem key={type.value} value={type.value}>
                              <div className="flex items-center gap-2">
                                <Icon className="h-4 w-4" />
                                <div>
                                  <div className="font-medium">
                                    {type.label}
                                  </div>
                                  <div className="text-xs text-muted-foreground">
                                    {type.description}
                                  </div>
                                </div>
                              </div>
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Description (Optional)
                  </label>
                  <Textarea
                    placeholder="Describe what this field is for..."
                    className="resize-none"
                    rows={2}
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                  />
                </div>

                {/* Field Options */}
                <div className="space-y-4">
                  <Separator />
                  <h4 className="font-medium">Field Options</h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-row items-center justify-between rounded-lg border p-3">
                      <div className="space-y-0.5">
                        <label className="text-sm font-medium">
                          Required Field
                        </label>
                        <p className="text-xs text-muted-foreground">
                          This field must be filled
                        </p>
                      </div>
                      <Switch
                        checked={formData.required}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, required: checked })
                        }
                      />
                    </div>

                    {(formData.type === "plainText" ||
                      formData.type === "formattedText") && (
                      <div className="flex flex-row items-center justify-between rounded-lg border p-3">
                        <div className="space-y-0.5">
                          <label className="text-sm font-medium">
                            Text Area
                          </label>
                          <p className="text-xs text-muted-foreground">
                            Use multi-line input
                          </p>
                        </div>
                        <Switch
                          checked={formData.textArea}
                          onCheckedChange={(checked) =>
                            setFormData({ ...formData, textArea: checked })
                          }
                        />
                      </div>
                    )}
                  </div>

                  {(formData.type === "plainText" ||
                    formData.type === "formattedText") && (
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Placeholder Text
                        </label>
                        <Input
                          placeholder="Enter placeholder text..."
                          value={formData.placeholder}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              placeholder: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium">
                          Max Length
                        </label>
                        <Input
                          type="number"
                          placeholder="0"
                          value={formData.maxLength}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              maxLength: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Default Value</label>
                    <Input
                      placeholder="Default value..."
                      value={formData.defaultValue}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          defaultValue: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-2 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowAddForm(false);
                      setEditingField(null);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={
                      addFieldMutation.isPending ||
                      updateFieldMutation.isPending
                    }
                  >
                    {editingField ? "Update Field" : "Add Field"}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
