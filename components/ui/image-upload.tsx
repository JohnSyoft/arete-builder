"use client";

import React from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { cn } from "@/lib/utils";

interface ImageUploadProps {
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  onFilesSelected?: (files: File[]) => void;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in MB
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  variant?: "default" | "compact" | "grid" | "preview";
  onUploadError?: (error: string) => void;
}

export function ImageUpload({
  value,
  onChange,
  onFilesSelected,
  multiple = false,
  maxFiles = 10,
  maxSize = 10, // 10MB for images
  className,
  disabled = false,
  placeholder,
  variant = "default",
  onUploadError,
}: ImageUploadProps) {
  const currentImages = React.useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  return (
    <div className={cn("space-y-4", className)}>
      {/* Always show FileUpload - it handles displaying uploaded images and upload interface */}
      <FileUpload
        accept="image/*"
        multiple={multiple}
        maxFiles={maxFiles}
        maxSize={maxSize}
        onFilesSelected={onFilesSelected}
        onUploadError={onUploadError}
        disabled={disabled}
        placeholder={
          placeholder || (multiple ? "Upload images" : "Upload an image")
        }
        variant={variant === "default" && !multiple ? "preview" : variant}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
