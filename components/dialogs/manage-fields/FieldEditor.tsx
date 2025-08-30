"use client";

import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { Field } from "@/hooks/useCollections";
import { fieldTypes, DefaultValueField } from "./";
import { UseFormRegister, FieldErrors, UseFormSetValue } from "react-hook-form";
import { FieldFormData } from "@/lib/validations/fields";

interface FieldEditorProps {
  field: Field | null;
  register: UseFormRegister<FieldFormData>;
  formData: FieldFormData;
  errors: FieldErrors<FieldFormData>;
  setValue: UseFormSetValue<FieldFormData>;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  allCollections?: any[];
  isLoading?: boolean;
}

export function FieldEditor({
  field,
  register,
  formData,
  errors,
  setValue,
  onSubmit,
  onCancel,
  allCollections = [],
  isLoading = false,
}: FieldEditorProps) {
  if (!field && !formData.name) {
    return (
      <div className="flex items-center justify-center h-full text-muted-foreground">
        <p>Select a field to edit its properties</p>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="space-y-6 overflow-y-auto">
        {/* Field Header */}

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Basic Information */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="text-sm font-medium">Field Name</label>
              <Input
                placeholder="e.g., Title, Description"
                {...register("name")}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium">Field Type</label>
              <Select
                value={formData.type}
                onValueChange={(value) => setValue("type", value)}
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
                            <div className="font-medium">{type.label}</div>
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
              {errors.type && (
                <p className="text-sm text-destructive">
                  {errors.type.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium">
              Description (Optional)
            </label>
            <Textarea
              placeholder="Describe what this field is for..."
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

          {/* Field Options */}
          <div className="space-y-3">
            <Separator />
            <h4 className="font-medium text-sm">Options</h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-row items-center justify-between rounded-lg border p-2.5">
                <div className="space-y-0.5">
                  <label className="text-sm font-medium">Required</label>
                  <p className="text-xs text-muted-foreground">
                    Must be filled
                  </p>
                </div>
                <Switch
                  checked={formData.required}
                  onCheckedChange={(checked) => setValue("required", checked)}
                />
              </div>

              {(formData.type === "plainText" ||
                formData.type === "formattedText") && (
                <div className="flex flex-row items-center justify-between rounded-lg border p-2.5">
                  <div className="space-y-0.5">
                    <label className="text-sm font-medium">Text Area</label>
                    <p className="text-xs text-muted-foreground">
                      Multi-line input
                    </p>
                  </div>
                  <Switch
                    checked={formData.textArea}
                    onCheckedChange={(checked) => setValue("textArea", checked)}
                  />
                </div>
              )}
            </div>

            {(formData.type === "plainText" ||
              formData.type === "formattedText") && (
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Placeholder</label>
                  <Input
                    placeholder="Enter placeholder text..."
                    {...register("placeholder")}
                    aria-invalid={errors.placeholder ? "true" : "false"}
                  />
                  {errors.placeholder && (
                    <p className="text-sm text-destructive">
                      {errors.placeholder.message}
                    </p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Max Length</label>
                  <Input
                    type="number"
                    placeholder="0"
                    {...register("maxLength")}
                    aria-invalid={errors.maxLength ? "true" : "false"}
                  />
                  {errors.maxLength && (
                    <p className="text-sm text-destructive">
                      {errors.maxLength.message}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-sm font-medium">Default Value</label>
              <DefaultValueField
                fieldType={formData.type}
                formData={formData}
                onFormDataChange={(data) => {
                  // For now, we'll handle this in a simple way
                  setValue("defaultValue", data.defaultValue || "");
                  if (data.options) {
                    setValue("options", data.options);
                  }
                  if (data.referenceCollection) {
                    setValue("referenceCollection", data.referenceCollection);
                  }
                }}
                allCollections={allCollections}
              />
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-3">
            <Button type="button" variant="outline" onClick={onCancel}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {field ? "Update Field" : "Add Field"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
