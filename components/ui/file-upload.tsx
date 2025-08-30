"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { X, Image, Video, File, Play, Eye, FolderOpen } from "lucide-react";

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in MB
  onFilesSelected?: (files: File[]) => void;
  onUploadError?: (error: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  variant?: "default" | "compact" | "grid";
  value?: string | string[]; // For displaying uploaded files
  onChange?: (value: string | string[]) => void;
}

interface FileWithPreview extends File {
  preview?: string;
  id: string;
}

export function FileUpload({
  accept = "image/*,video/*",
  multiple = false,
  maxFiles = 10,
  maxSize = 100, // 100MB
  onFilesSelected,
  onUploadError,
  className,
  disabled = false,
  placeholder,
  variant = "default",
  value,
  onChange,
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateFileId = () =>
    `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const createFilePreview = useCallback((file: File): FileWithPreview => {
    const fileWithPreview = Object.assign(file, {
      id: generateFileId(),
    }) as FileWithPreview;

    if (file.type.startsWith("image/")) {
      fileWithPreview.preview = URL.createObjectURL(file);
    }

    return fileWithPreview;
  }, []);

  const validateFile = (file: File): string | null => {
    if (file.size > maxSize * 1024 * 1024) {
      return `File size must be less than ${maxSize}MB`;
    }

    const acceptedTypes = accept.split(",").map((type) => type.trim());
    const isAccepted = acceptedTypes.some((type) => {
      if (type === "image/*") return file.type.startsWith("image/");
      if (type === "video/*") return file.type.startsWith("video/");
      return (
        file.type === type ||
        file.name.toLowerCase().endsWith(type.replace("*", ""))
      );
    });

    if (!isAccepted) {
      return `File type not accepted. Allowed types: ${accept}`;
    }

    return null;
  };

  const handleFiles = useCallback(
    (fileList: FileList) => {
      const newFiles = Array.from(fileList);

      if (!multiple && newFiles.length > 1) {
        onUploadError?.("Only one file is allowed");
        return;
      }

      if (files.length + newFiles.length > maxFiles) {
        onUploadError?.(`Maximum ${maxFiles} files allowed`);
        return;
      }

      const validatedFiles: FileWithPreview[] = [];
      const errors: string[] = [];

      newFiles.forEach((file) => {
        const error = validateFile(file);
        if (error) {
          errors.push(`${file.name}: ${error}`);
        } else {
          validatedFiles.push(createFilePreview(file));
        }
      });

      if (errors.length > 0) {
        onUploadError?.(errors.join("\n"));
        return;
      }

      const updatedFiles = multiple
        ? [...files, ...validatedFiles]
        : validatedFiles;
      setFiles(updatedFiles);
      onFilesSelected?.(validatedFiles);
    },
    [
      files,
      multiple,
      maxFiles,
      maxSize,
      accept,
      createFilePreview,
      onFilesSelected,
      onUploadError,
    ]
  );

  const removeFile = (fileId: string) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === fileId);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter((f) => f.id !== fileId);
    });
  };

  const removeUploadedFile = (urlToRemove: string) => {
    if (multiple && Array.isArray(value)) {
      const newUrls = value.filter((url) => url !== urlToRemove);
      onChange?.(newUrls);
    } else {
      onChange?.("");
    }
  };

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      if (disabled) return;

      const droppedFiles = e.dataTransfer.files;
      if (droppedFiles.length > 0) {
        handleFiles(droppedFiles);
      }
    },
    [disabled, handleFiles]
  );

  const openFileDialog = (event?: React.MouseEvent) => {
    if (disabled) return;
    event?.stopPropagation();
    event?.preventDefault();
    fileInputRef.current?.click();
  };

  const getFileIcon = (file: FileWithPreview) => {
    if (file.type.startsWith("image/")) return <Image className="w-4 h-4" />;
    if (file.type.startsWith("video/")) return <Video className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
  };

  const getFileTypeLabel = (file: FileWithPreview) => {
    if (file.type.startsWith("image/")) return "Image";
    if (file.type.startsWith("video/")) return "Video";
    return "File";
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  // Get current uploaded files to display
  const currentFiles = React.useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  if (variant === "compact") {
    return (
      <div className={cn("space-y-2", className)}>
        {/* Display uploaded files */}
        {currentFiles.length > 0 && (
          <div className="space-y-2 mb-3">
            {currentFiles.map((url, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 p-2 border rounded bg-muted/30"
              >
                <div className="w-8 h-8 rounded overflow-hidden flex-shrink-0">
                  {url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                    <img
                      src={url}
                      alt="Uploaded file"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <File className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <span className="flex-1 text-sm truncate">
                  {url.split("/").pop() || "Uploaded file"}
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeUploadedFile(url)}
                  className="p-1 h-auto"
                  disabled={disabled}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors",
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25",
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-primary hover:bg-primary/5"
          )}
          onClick={(e) => openFileDialog(e)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FolderOpen className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {placeholder ||
              (multiple
                ? "Click or drag files here"
                : "Click or drag a file here")}
          </p>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          className="hidden"
          disabled={disabled}
        />

        {files.length > 0 && (
          <div className="space-y-2">
            {files.map((file) => (
              <div
                key={file.id}
                className="flex items-center space-x-2 p-2 border rounded"
              >
                {getFileIcon(file)}
                <span className="flex-1 text-sm truncate">{file.name}</span>
                <Badge variant="outline" className="text-xs">
                  {formatFileSize(file.size)}
                </Badge>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => removeFile(file.id)}
                  className="p-1 h-auto"
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={cn("space-y-4", className)}>
        {/* Display uploaded files */}
        {currentFiles.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
            {currentFiles.map((url, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-0">
                  {url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                    <div className="aspect-square relative">
                      <img
                        src={url}
                        alt="Uploaded file"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="sm" variant="secondary" className="mr-2">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : url.match(/\.(mp4|mov|avi|mkv|webm)$/i) ? (
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <Play className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <File className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}

                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        File
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeUploadedFile(url)}
                        className="p-1 h-auto"
                        disabled={disabled}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>

                    <p className="text-sm font-medium truncate mb-1">
                      {url.split("/").pop() || "Uploaded file"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div
          className={cn(
            "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
            isDragOver
              ? "border-primary bg-primary/5"
              : "border-muted-foreground/25",
            disabled
              ? "opacity-50 cursor-not-allowed"
              : "hover:border-primary hover:bg-primary/5"
          )}
          onClick={(e) => openFileDialog(e)}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <FolderOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Select Files</h3>
          <p className="text-muted-foreground mb-4">
            {placeholder ||
              (multiple
                ? "Drag and drop files here, or click to browse"
                : "Drag and drop a file here, or click to browse")}
          </p>
          <Button variant="outline" disabled={disabled}>
            Choose Files
          </Button>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
          className="hidden"
          disabled={disabled}
        />

        {files.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((file) => (
              <Card key={file.id} className="relative overflow-hidden">
                <CardContent className="p-0">
                  {file.type.startsWith("image/") && file.preview ? (
                    <div className="aspect-square relative">
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Button size="sm" variant="secondary" className="mr-2">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ) : file.type.startsWith("video/") ? (
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <Play className="w-12 h-12 text-muted-foreground" />
                    </div>
                  ) : (
                    <div className="aspect-square bg-muted flex items-center justify-center">
                      <File className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}

                  <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {getFileTypeLabel(file)}
                      </Badge>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeFile(file.id)}
                        className="p-1 h-auto"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>

                    <p className="text-sm font-medium truncate mb-1">
                      {file.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(file.size)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("space-y-4", className)}>
      {/* Display uploaded files */}
      {currentFiles.length > 0 && (
        <div className="space-y-3 mb-4">
          {currentFiles.map((url, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                      <img
                        src={url}
                        alt="Uploaded file"
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                        <File className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {url.split("/").pop() || "Uploaded file"}
                    </p>
                    <Badge variant="secondary" className="text-xs mt-1">
                      File
                    </Badge>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeUploadedFile(url)}
                      disabled={disabled}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragOver
            ? "border-primary bg-primary/5"
            : "border-muted-foreground/25",
          disabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:border-primary hover:bg-primary/5"
        )}
        onClick={(e) => openFileDialog(e)}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <FolderOpen className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-semibold mb-2">Select Files</h3>
        <p className="text-muted-foreground mb-4">
          {placeholder ||
            (multiple
              ? "Drag and drop files here, or click to browse"
              : "Drag and drop a file here, or click to browse")}
        </p>
        <Button variant="outline" disabled={disabled}>
          Choose Files
        </Button>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(e) => e.target.files && handleFiles(e.target.files)}
        className="hidden"
        disabled={disabled}
      />

      {files.length > 0 && (
        <div className="space-y-3">
          {files.map((file) => (
            <Card key={file.id}>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {file.type.startsWith("image/") && file.preview ? (
                      <img
                        src={file.preview}
                        alt={file.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-muted rounded flex items-center justify-center">
                        {getFileIcon(file)}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <p className="text-sm font-medium truncate">
                        {file.name}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {getFileTypeLabel(file)}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {formatFileSize(file.size)}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => removeFile(file.id)}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
