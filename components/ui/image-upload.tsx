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
  variant?: "default" | "compact" | "grid";
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

  const removeImage = (urlToRemove: string) => {
    if (multiple) {
      const newUrls = currentImages.filter((url) => url !== urlToRemove);
      onChange?.(newUrls);
    } else {
      onChange?.("");
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      {/* Display current images */}
      {currentImages.length > 0 && (
        <div
          className={cn(
            "grid gap-4",
            variant === "grid"
              ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              : "grid-cols-1"
          )}
        >
          {currentImages.map((url, index) => (
            <div key={index} className="relative group">
              <div className="aspect-square overflow-hidden rounded-lg border bg-muted">
                <img
                  src={url}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => removeImage(url)}
                    className="bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors"
                    disabled={disabled}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload new images */}
      {(multiple || currentImages.length === 0) && (
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
          variant={variant}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
