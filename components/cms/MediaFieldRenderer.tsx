"use client";

import { ImageUpload } from "@/components/ui/image-upload";
import { VideoUpload } from "@/components/ui/video-upload";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";

interface MediaFieldRendererProps {
  field: {
    type: "image" | "video" | "gallery" | "file";
    name: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number;
    accept?: string;
    helpText?: string;
  };
  value: string | string[] | File[];
  onChange: (value: string | string[] | File[]) => void;
  placeholder?: string;
  projectId?: string;
  disabled?: boolean;
}

export function MediaFieldRenderer({
  field,
  value,
  onChange,
  placeholder,
  // projectId, // Currently unused but kept for future API integration
  disabled = false,
}: MediaFieldRendererProps) {
  const handleFilesSelected = (files: File[]) => {
    // For multiple mode, combine existing URLs with new files
    if (field.multiple || field.type === "gallery") {
      const existingUrls = Array.isArray(value)
        ? value.filter((v) => typeof v === "string")
        : typeof value === "string" && value.trim() !== ""
        ? [value]
        : [];

      // Combine existing URLs with new files - pass as mixed array
      const combinedValue = [...existingUrls, ...files] as (string | File)[];
      onChange(combinedValue as any);
    } else {
      // For single mode, replace with new files
      onChange(files);
    }
  };

  const handleUploadError = (error: string) => {
    console.error(`Upload error for ${field.name}:`, error);
    // You could show a toast notification here
  };

  // Separate values for display (URLs) and files for upload
  const displayValue = Array.isArray(value)
    ? (value.filter((v) => typeof v === "string") as string[])
    : typeof value === "string"
    ? value
    : "";

  const renderField = () => {
    const commonProps = {
      value: displayValue,
      onChange: (newValue: string | string[]) => {
        // Handle URL changes (for displaying existing uploaded files)
        onChange(newValue);
      },
      onFilesSelected: handleFilesSelected,
      multiple: field.multiple || false,
      maxFiles: field.maxFiles || 10,
      maxSize: field.maxSize || 10,
      disabled,
      placeholder:
        placeholder ||
        field.placeholder ||
        `Select ${field.label || field.name}`,
      onUploadError: handleUploadError,
      variant: "grid" as const,
    };
    // console.log(field.type, "TYPE IS HERE");
    switch (field.type) {
      case "image":
        return (
          <ImageUpload
            {...commonProps}
            maxSize={field.maxSize || 10} // 10MB for images
          />
        );

      case "video":
        return (
          <VideoUpload
            {...commonProps}
            maxSize={field.maxSize || 100} // 100MB for videos
          />
        );

      case "gallery":
        return (
          <ImageUpload
            {...commonProps}
            multiple={true}
            maxSize={field.maxSize || 10}
            variant="grid"
          />
        );

      case "file":
        return (
          <FileUpload
            {...commonProps}
            accept={field.accept || "*"}
            maxSize={field.maxSize || 50} // 50MB for general files
            variant="default"
          />
        );

      default:
        return (
          <FileUpload
            {...commonProps}
            accept={field.accept || "*"}
            maxSize={field.maxSize || 10}
            variant="compact"
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <Label htmlFor={field.name} className="text-sm font-medium">
        {field.label || field.name}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      {field.helpText && (
        <p className="text-xs text-muted-foreground">{field.helpText}</p>
      )}

      {renderField()}
    </div>
  );
}
