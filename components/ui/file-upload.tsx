"use client";

import React, { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import {
  Upload,
  X,
  Image,
  Video,
  File,
  Play,
  Eye,
  AlertCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number; // in MB
  onFilesSelected?: (files: File[]) => void;
  onFilesUploaded?: (uploadedFiles: UploadedFile[]) => void;
  onUploadError?: (error: string) => void;
  className?: string;
  disabled?: boolean;
  folder?: string;
  projectId?: string;
  saveToDatabase?: boolean;
  placeholder?: string;
  variant?: "default" | "compact" | "grid";
}

interface UploadedFile {
  url: string;
  originalname: string;
  mimetype: string;
  size: number;
  fileName: string;
  folder: string;
}

interface FileWithPreview extends File {
  preview?: string;
  id: string;
  uploadProgress?: number;
  uploaded?: boolean;
  error?: string;
  uploadedData?: UploadedFile;
}

export function FileUpload({
  accept = "image/*,video/*",
  multiple = false,
  maxFiles = 10,
  maxSize = 100, // 100MB
  onFilesSelected,
  onFilesUploaded,
  onUploadError,
  className,
  disabled = false,
  folder = "general",
  projectId,
  saveToDatabase = false,
  placeholder,
  variant = "default",
}: FileUploadProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateFileId = () =>
    `file_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  const createFilePreview = useCallback((file: File): FileWithPreview => {
    const fileWithPreview = Object.assign(file, {
      id: generateFileId(),
      uploadProgress: 0,
      uploaded: false,
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

  const uploadFile = async (file: FileWithPreview): Promise<UploadedFile> => {
    const formData = new FormData();
    formData.append("files", file);
    if (projectId) formData.append("projectId", projectId);
    formData.append("saveToDatabase", saveToDatabase.toString());

    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.upload.addEventListener("progress", (event) => {
        if (event.lengthComputable) {
          const progress = Math.round((event.loaded / event.total) * 100);
          setFiles((prev) =>
            prev.map((f) =>
              f.id === file.id ? { ...f, uploadProgress: progress } : f
            )
          );
        }
      });

      xhr.addEventListener("load", () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          if (response.success && response.data.files.length > 0) {
            resolve(response.data.files[0]);
          } else {
            reject(new Error("Upload failed"));
          }
        } else {
          reject(new Error(`Upload failed with status ${xhr.status}`));
        }
      });

      xhr.addEventListener("error", () => {
        reject(new Error("Network error"));
      });

      // Get auth token from localStorage or wherever you store it
      const token = localStorage.getItem("authToken");
      if (token) {
        xhr.setRequestHeader("Authorization", `Bearer ${token}`);
      }

      xhr.open("POST", `/api/v1/upload?folder=${folder}`);
      xhr.send(formData);
    });
  };

  const handleUpload = async () => {
    if (files.length === 0 || isUploading) return;

    setIsUploading(true);
    const uploadPromises: Promise<UploadedFile>[] = [];

    files.forEach((file) => {
      if (!file.uploaded) {
        const uploadPromise = uploadFile(file)
          .then((uploadedData) => {
            setFiles((prev) =>
              prev.map((f) =>
                f.id === file.id
                  ? { ...f, uploaded: true, uploadedData, uploadProgress: 100 }
                  : f
              )
            );
            return uploadedData;
          })
          .catch((error) => {
            setFiles((prev) =>
              prev.map((f) =>
                f.id === file.id
                  ? { ...f, error: error.message, uploadProgress: 0 }
                  : f
              )
            );
            throw error;
          });

        uploadPromises.push(uploadPromise);
      }
    });

    try {
      const uploadedFiles = await Promise.all(uploadPromises);
      onFilesUploaded?.(uploadedFiles);
    } catch (error) {
      onUploadError?.("Some files failed to upload");
    } finally {
      setIsUploading(false);
    }
  };

  const removeFile = (fileId: string) => {
    setFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === fileId);
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter((f) => f.id !== fileId);
    });
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

  const openFileDialog = () => {
    if (disabled) return;
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

  if (variant === "compact") {
    return (
      <div className={cn("space-y-2", className)}>
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
          onClick={openFileDialog}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-6 h-6 mx-auto mb-2 text-muted-foreground" />
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
                {file.uploaded && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
                {file.error && <AlertCircle className="w-4 h-4 text-red-500" />}
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

        {files.length > 0 && !files.every((f) => f.uploaded) && (
          <Button
            onClick={handleUpload}
            disabled={isUploading}
            className="w-full"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload {files.length} file{files.length > 1 ? "s" : ""}
              </>
            )}
          </Button>
        )}
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className={cn("space-y-4", className)}>
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
          onClick={openFileDialog}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
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

                    {file.uploadProgress !== undefined &&
                      file.uploadProgress > 0 &&
                      !file.uploaded && (
                        <Progress
                          value={file.uploadProgress}
                          className="mt-2"
                        />
                      )}

                    {file.uploaded && (
                      <div className="flex items-center mt-2 text-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        <span className="text-xs">Uploaded</span>
                      </div>
                    )}

                    {file.error && (
                      <div className="flex items-center mt-2 text-red-600">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        <span className="text-xs">Error</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {files.length > 0 && !files.every((f) => f.uploaded) && (
          <Button
            onClick={handleUpload}
            disabled={isUploading}
            className="w-full"
            size="lg"
          >
            {isUploading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Uploading {files.filter((f) => !f.uploaded).length} file
                {files.filter((f) => !f.uploaded).length > 1 ? "s" : ""}...
              </>
            ) : (
              <>
                <Upload className="w-5 h-5 mr-2" />
                Upload {files.filter((f) => !f.uploaded).length} file
                {files.filter((f) => !f.uploaded).length > 1 ? "s" : ""}
              </>
            )}
          </Button>
        )}
      </div>
    );
  }

  // Default variant
  return (
    <div className={cn("space-y-4", className)}>
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
        onClick={openFileDialog}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="w-10 h-10 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
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

                    {file.uploadProgress !== undefined &&
                      file.uploadProgress > 0 &&
                      !file.uploaded && (
                        <Progress
                          value={file.uploadProgress}
                          className="mt-2"
                        />
                      )}
                  </div>

                  <div className="flex items-center space-x-2">
                    {file.uploaded && (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                    {file.error && (
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    )}
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

      {files.length > 0 && !files.every((f) => f.uploaded) && (
        <Button
          onClick={handleUpload}
          disabled={isUploading}
          className="w-full"
          size="lg"
        >
          {isUploading ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Uploading {files.filter((f) => !f.uploaded).length} file
              {files.filter((f) => !f.uploaded).length > 1 ? "s" : ""}...
            </>
          ) : (
            <>
              <Upload className="w-5 h-5 mr-2" />
              Upload {files.filter((f) => !f.uploaded).length} file
              {files.filter((f) => !f.uploaded).length > 1 ? "s" : ""}
            </>
          )}
        </Button>
      )}
    </div>
  );
}
