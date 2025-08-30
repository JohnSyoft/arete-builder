"use client";

import React, { useState } from "react";
import { FileUpload } from "@/components/ui/file-upload";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Play, Volume2, VolumeX, Maximize, Download, X } from "lucide-react";

interface VideoUploadProps {
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

interface VideoPlayerProps {
  src: string;
  onRemove?: () => void;
  disabled?: boolean;
}

function VideoPlayer({ src, onRemove, disabled }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const openFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <Card className="relative overflow-hidden group">
      <CardContent className="p-0">
        <div
          className="relative aspect-video bg-black"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <video
            ref={videoRef}
            src={src}
            className="w-full h-full object-cover"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
            muted={isMuted}
          />

          {/* Play/Pause Overlay */}
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full w-16 h-16"
                onClick={togglePlay}
              >
                <Play className="w-8 h-8 ml-1" fill="currentColor" />
              </Button>
            </div>
          )}

          {/* Controls Overlay */}
          {(showControls || !isPlaying) && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity">
              {/* Top controls */}
              <div className="absolute top-2 right-2 flex space-x-2">
                {onRemove && (
                  <Button
                    size="sm"
                    variant="destructive"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={onRemove}
                    disabled={disabled}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                )}
              </div>

              {/* Bottom controls */}
              <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={togglePlay}
                  >
                    {isPlaying ? (
                      <div className="w-3 h-3 flex space-x-0.5">
                        <div className="w-1 h-3 bg-current"></div>
                        <div className="w-1 h-3 bg-current"></div>
                      </div>
                    ) : (
                      <Play className="w-3 h-3 ml-0.5" fill="currentColor" />
                    )}
                  </Button>

                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={toggleMute}
                  >
                    {isMuted ? (
                      <VolumeX className="w-3 h-3" />
                    ) : (
                      <Volume2 className="w-3 h-3" />
                    )}
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={openFullscreen}
                  >
                    <Maximize className="w-3 h-3" />
                  </Button>

                  <Button
                    size="sm"
                    variant="secondary"
                    className="rounded-full w-8 h-8 p-0"
                    onClick={() => window.open(src, "_blank")}
                  >
                    <Download className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function VideoUpload({
  value,
  onChange,
  onFilesSelected,
  multiple = false,
  maxFiles = 5,
  maxSize = 100, // 100MB for videos
  className,
  disabled = false,
  placeholder,
  variant = "default",
  onUploadError,
}: VideoUploadProps) {
  const currentVideos = React.useMemo(() => {
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  }, [value]);

  const removeVideo = (urlToRemove: string) => {
    if (multiple) {
      const newUrls = currentVideos.filter((url) => url !== urlToRemove);
      onChange?.(newUrls);
    } else {
      onChange?.("");
    }
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Display current videos */}
      {currentVideos.length > 0 && (
        <div
          className={cn(
            "grid gap-6",
            variant === "grid" ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"
          )}
        >
          {currentVideos.map((url, index) => (
            <VideoPlayer
              key={index}
              src={url}
              onRemove={() => removeVideo(url)}
              disabled={disabled}
            />
          ))}
        </div>
      )}

      {/* Upload new videos */}
      {(multiple || currentVideos.length === 0) && (
        <FileUpload
          accept="video/*"
          multiple={multiple}
          maxFiles={maxFiles}
          maxSize={maxSize}
          onFilesSelected={onFilesSelected}
          onUploadError={onUploadError}
          disabled={disabled}
          placeholder={
            placeholder || (multiple ? "Upload videos" : "Upload a video")
          }
          variant={variant}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
