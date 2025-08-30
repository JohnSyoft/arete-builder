"use client";

import { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useUpload } from "@/hooks/useUpload";
import { toast } from "sonner";
import { Upload, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function UploadDemo() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const { upload, isUploading, progress, error, uploadedFiles, reset } =
    useUpload({
      folder: "demo",
      projectId: "demo-project",
      saveToDatabase: true,
      onSuccess: (files) => {
        const urls = files.map((file) => file.url);
        setUploadedUrls((prev) => [...prev, ...urls]);
        setSelectedFiles([]);
        toast.success(`Successfully uploaded ${files.length} file(s)`);
      },
      onError: (error) => {
        toast.error(`Upload failed: ${error}`);
      },
    });

  const handleFilesSelected = (files: File[]) => {
    setSelectedFiles(files);
    reset(); // Clear any previous upload state
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      toast.error("Please select files to upload");
      return;
    }

    try {
      await upload(selectedFiles);
    } catch (error) {
      // Error is already handled in the hook
      console.error("Upload failed:", error);
    }
  };

  const handleUploadError = (error: string) => {
    toast.error(error);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>File Upload Demo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* File Selection */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Select Files</h3>
            <FileUpload
              accept="image/*,video/*,.pdf,.doc,.docx"
              multiple={true}
              maxFiles={5}
              maxSize={50} // 50MB
              onFilesSelected={handleFilesSelected}
              onUploadError={handleUploadError}
              placeholder="Choose files to upload"
              variant="grid"
              value={uploadedUrls}
              onChange={(value) => {
                if (Array.isArray(value)) {
                  setUploadedUrls(value);
                } else if (value) {
                  setUploadedUrls([value]);
                } else {
                  setUploadedUrls([]);
                }
              }}
            />
          </div>

          {/* Selected Files */}
          {selectedFiles.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Selected Files</h3>
              <div className="space-y-2">
                {selectedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-muted rounded flex items-center justify-center">
                        📄
                      </div>
                      <div>
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(file.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                    <Badge variant="secondary">
                      {file.type.split("/")[0] || "file"}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Upload Button */}
          <div className="flex items-center justify-between">
            <div>
              {selectedFiles.length > 0 && (
                <p className="text-sm text-muted-foreground">
                  {selectedFiles.length} file(s) selected
                </p>
              )}
            </div>
            <Button
              onClick={handleUpload}
              disabled={isUploading || selectedFiles.length === 0}
              className="min-w-[120px]"
            >
              {isUploading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Uploading...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Files
                </>
              )}
            </Button>
          </div>

          {/* Upload Progress */}
          {progress && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Upload Progress</span>
                <span className="text-sm text-muted-foreground">
                  {progress.percentage}%
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress.percentage}%` }}
                />
              </div>
            </div>
          )}

          {/* Upload Error */}
          {error && (
            <div className="flex items-center space-x-2 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
              <AlertCircle className="w-5 h-5 text-destructive" />
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          {/* Upload Success */}
          {uploadedFiles.length > 0 && !isUploading && (
            <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <p className="text-sm text-green-700">
                Successfully uploaded {uploadedFiles.length} file(s)
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Uploaded Files Display */}
      {uploadedUrls.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Uploaded Files ({uploadedUrls.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {uploadedUrls.map((url, index) => (
                <div key={index} className="border rounded-lg overflow-hidden">
                  {url.match(/\.(jpg|jpeg|png|gif|webp)$/i) ? (
                    <img
                      src={url}
                      alt={`Uploaded file ${index + 1}`}
                      className="w-full h-32 object-cover"
                    />
                  ) : (
                    <div className="w-full h-32 bg-muted flex items-center justify-center">
                      <span className="text-2xl">📄</span>
                    </div>
                  )}
                  <div className="p-2">
                    <p className="text-xs truncate">
                      {url.split("/").pop() || "File"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
