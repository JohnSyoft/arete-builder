"use client";

import { ImageUpload } from "@/components/ui/image-upload";
import { VideoUpload } from "@/components/ui/video-upload";
import { FileUpload } from "@/components/ui/file-upload";
import { Label } from "@/components/ui/label";

interface MediaFieldRendererProps {
  field: {
    name: string;
    type: string;
    label?: string;
    required?: boolean;
    multiple?: boolean;
    maxFiles?: number;
    maxSize?: number;
    accept?: string;
    placeholder?: string;
    helpText?: string;
  };
  value: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  projectId?: string;
  disabled?: boolean;
}

export function MediaFieldRenderer({
  field,
  value,
  onChange,
  placeholder,
  projectId,
  disabled = false,
}: MediaFieldRendererProps) {
  const handleUploadError = (error: string) => {
    console.error(`Upload error for ${field.name}:`, error);
    // You could show a toast notification here
  };

  const renderField = () => {
    const commonProps = {
      value,
      onChange,
      multiple: field.multiple || false,
      maxFiles: field.maxFiles || 10,
      maxSize: field.maxSize || 10,
      disabled,
      projectId,
      saveToDatabase: true,
      placeholder:
        placeholder ||
        field.placeholder ||
        `Upload ${field.label || field.name}`,
      onUploadError: handleUploadError,
      variant: "grid" as const,
    };

    switch (field.type) {
      case "image":
        return (
          <ImageUpload
            {...commonProps}
            folder={`projects/${projectId}/images`}
            maxSize={field.maxSize || 10} // 10MB for images
          />
        );

      case "video":
        return (
          <VideoUpload
            {...commonProps}
            folder={`projects/${projectId}/videos`}
            maxSize={field.maxSize || 100} // 100MB for videos
          />
        );

      case "gallery":
        return (
          <ImageUpload
            {...commonProps}
            multiple={true}
            folder={`projects/${projectId}/gallery`}
            maxSize={field.maxSize || 10}
            variant="grid"
          />
        );

      case "file":
        return (
          <FileUpload
            {...commonProps}
            accept={field.accept || "*"}
            folder={`projects/${projectId}/files`}
            maxSize={field.maxSize || 50} // 50MB for general files
            variant="default"
          />
        );

      default:
        return (
          <FileUpload
            {...commonProps}
            accept={field.accept || "*"}
            folder={`projects/${projectId}/uploads`}
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
