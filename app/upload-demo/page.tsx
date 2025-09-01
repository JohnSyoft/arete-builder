"use client";

import { useState } from "react";
import { ImageUpload } from "@/components/ui/image-upload";
import { VideoUpload } from "@/components/ui/video-upload";
import { FileUpload } from "@/components/ui/file-upload";
import { MediaFieldRenderer } from "@/components/cms/MediaFieldRenderer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function UploadDemo() {
  const [singleImage, setSingleImage] = useState<string>("");
  const [multipleImages, setMultipleImages] = useState<string[]>([]);
  const [singleVideo, setSingleVideo] = useState<string>("");
  const [multipleVideos, setMultipleVideos] = useState<string[]>([]);
  // const [files, setFiles] = useState<string[]>([]); // Currently unused

  const handleUploadError = (error: string) => {
    console.error("Upload error:", error);
    // In a real app, you'd show a toast notification
    alert(`Upload error: ${error}`);
  };

  const imageField = {
    name: "avatar",
    type: "image",
    label: "Profile Avatar",
    required: true,
    maxSize: 5,
    helpText: "Upload a profile picture (max 5MB)",
  };

  const galleryField = {
    name: "gallery",
    type: "gallery",
    label: "Image Gallery",
    multiple: true,
    maxFiles: 10,
    maxSize: 10,
    helpText: "Upload multiple images for your gallery",
  };

  const videoField = {
    name: "intro_video",
    type: "video",
    label: "Introduction Video",
    maxSize: 100,
    helpText: "Upload an introduction video (max 100MB)",
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Upload Components Demo</h1>
        <p className="text-muted-foreground">
          Beautiful, feature-rich upload components for images, videos, and
          files
        </p>
      </div>

      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="basic">Basic Uploads</TabsTrigger>
          <TabsTrigger value="variants">Variants</TabsTrigger>
          <TabsTrigger value="cms">CMS Fields</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Single Image Upload
                  <Badge variant="secondary">Image</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload
                  value={singleImage}
                  onChange={(value) =>
                    setSingleImage(
                      Array.isArray(value) ? value[0] || "" : value
                    )
                  }
                  multiple={false}
                  placeholder="Upload a single image"
                  onUploadError={handleUploadError}
                  folder="demo/single-images"
                />
                {singleImage && (
                  <div className="mt-4 p-2 bg-muted rounded text-sm">
                    <strong>Selected:</strong> {singleImage}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Multiple Images Upload
                  <Badge variant="secondary">Gallery</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload
                  value={multipleImages}
                  onChange={(value) =>
                    setMultipleImages(Array.isArray(value) ? value : [value])
                  }
                  multiple={true}
                  maxFiles={5}
                  placeholder="Upload multiple images"
                  onUploadError={handleUploadError}
                  folder="demo/galleries"
                />
                {multipleImages.length > 0 && (
                  <div className="mt-4 p-2 bg-muted rounded text-sm">
                    <strong>Selected ({multipleImages.length}):</strong>
                    <ul className="mt-1 space-y-1">
                      {multipleImages.map((url, index) => (
                        <li key={index} className="truncate">
                          • {url}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  Single Video Upload
                  <Badge variant="secondary">Video</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <VideoUpload
                  value={singleVideo}
                  onChange={(value) =>
                    setSingleVideo(
                      Array.isArray(value) ? value[0] || "" : value
                    )
                  }
                  multiple={false}
                  placeholder="Upload a video"
                  onUploadError={handleUploadError}
                  folder="demo/videos"
                />
                {singleVideo && (
                  <div className="mt-4 p-2 bg-muted rounded text-sm">
                    <strong>Selected:</strong> {singleVideo}
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  General File Upload
                  <Badge variant="secondary">Files</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <FileUpload
                  multiple={true}
                  maxFiles={3}
                  accept="*"
                  placeholder="Upload any files"
                  onUploadError={handleUploadError}
                  folder="demo/files"
                  variant="compact"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="variants" className="space-y-6">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Compact Variant</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload
                  value=""
                  onChange={() => {}}
                  variant="compact"
                  placeholder="Compact image upload"
                  folder="demo/compact"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Default Variant</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload
                  value=""
                  onChange={() => {}}
                  variant="default"
                  placeholder="Default image upload"
                  folder="demo/default"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Grid Variant</CardTitle>
              </CardHeader>
              <CardContent>
                <ImageUpload
                  value={[]}
                  onChange={() => {}}
                  multiple={true}
                  variant="grid"
                  placeholder="Grid image upload"
                  folder="demo/grid"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="cms" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Image Field (CMS)</CardTitle>
              </CardHeader>
              <CardContent>
                <MediaFieldRenderer
                  field={imageField}
                  value=""
                  onChange={() => {}}
                  projectId="demo-project"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Gallery Field (CMS)</CardTitle>
              </CardHeader>
              <CardContent>
                <MediaFieldRenderer
                  field={galleryField}
                  value={[]}
                  onChange={() => {}}
                  projectId="demo-project"
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Video Field (CMS)</CardTitle>
              </CardHeader>
              <CardContent>
                <MediaFieldRenderer
                  field={videoField}
                  value=""
                  onChange={() => {}}
                  projectId="demo-project"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Advanced Video Upload with Custom Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <VideoUpload
                value={multipleVideos}
                onChange={(value) =>
                  setMultipleVideos(Array.isArray(value) ? value : [value])
                }
                multiple={true}
                maxFiles={3}
                maxSize={200}
                placeholder="Upload multiple videos (max 200MB each)"
                onUploadError={handleUploadError}
                folder="demo/advanced-videos"
                variant="grid"
              />
              {multipleVideos.length > 0 && (
                <div className="mt-6 p-4 bg-muted rounded">
                  <h4 className="font-semibold mb-2">
                    Uploaded Videos ({multipleVideos.length})
                  </h4>
                  <div className="space-y-2">
                    {multipleVideos.map((url, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-background rounded"
                      >
                        <span className="truncate flex-1 mr-2">
                          Video {index + 1}
                        </span>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 text-sm"
                        >
                          View
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Features</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Image Upload</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Drag & drop support</li>
                <li>• Image previews</li>
                <li>• Multiple file selection</li>
                <li>• File size validation</li>
                <li>• Auto-upload to S3</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Video Upload</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Built-in video player</li>
                <li>• Custom controls</li>
                <li>• Fullscreen support</li>
                <li>• Poster image support</li>
                <li>• Large file support</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">General Features</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Progress tracking</li>
                <li>• Error handling</li>
                <li>• Multiple variants</li>
                <li>• TypeScript support</li>
                <li>• Responsive design</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
