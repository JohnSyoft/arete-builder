import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ImageUpload } from "@/components/ui/image-upload";
import { ColorPickerComponent } from "@/components/ui/color-picker";
import { useState } from "react";
import { useUpload } from "@/hooks/useUpload";
import { toast } from "sonner";
import { Link, Loader2 } from "lucide-react";

interface SlideBackground {
  backgroundType: "color" | "gradient" | "image";
  backgroundColor: string;
  backgroundImage: string;
  backgroundSize: "cover" | "contain" | "auto";
  backgroundPosition: string;
  backgroundRepeat: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
  gradientType: "linear" | "radial";
  gradientDirection: string;
  gradientFrom: string;
  gradientTo: string;
  gradientVia?: string;
}

interface CarouselPropertiesProps {
elementProps: {
    autoplay: boolean;
    autoplayDelay: number;
    infinite: boolean;
    showDots: boolean;
    showArrows: boolean;
    pauseOnHover: boolean;
    transition: "slide" | "fade" | "scale";
    transitionDuration: number;
    slidesToShow: number;
    slidesToScroll: number;
    height: string;
    borderRadius: string;
    margin: string;
    padding: string;
    dotColor: string;
    activeDotColor: string;
    arrowColor: string;
    arrowBackgroundColor: string;
    slideBackgrounds?: SlideBackground[];
  };
  onPropChange: (key: string, value: any) => void;
}

export function CarouselProperties({
  elementProps,
  onPropChange,
}: CarouselPropertiesProps) {
  // Provide default values if properties is undefined
  const defaultProperties = {
    autoplay: false,
    autoplayDelay: 3000,
    infinite: true,
    showDots: true,
    showArrows: true,
    pauseOnHover: true,
    transition: "slide" as const,
    transitionDuration: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    height: "h-96",
    borderRadius: "rounded-lg",
    margin: "m-2",
    padding: "p-0",
    dotColor: "#cbd5e1",
    activeDotColor: "#3b82f6",
    arrowColor: "#ffffff",
    arrowBackgroundColor: "rgba(0, 0, 0, 0.5)",
    slideBackgrounds: [],
  };

  const currentProperties = { ...defaultProperties, ...elementProps };
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [showSlideManualInput, setShowSlideManualInput] = useState(false);
  
  const { uploadSingle, isUploading } = useUpload();

  const updateProperty = (key: string, value: any) => {
    if (onPropChange) {
      onPropChange(key, value);
    }
  };

  const handleSlideImageUpload = async (files: FileList | File[]) => {
    if (!files || files.length === 0) return;

    try {
      const file = Array.isArray(files) ? files[0] : files[0];
      const uploadedFile = await uploadSingle(file);

      if (uploadedFile?.url) {
        updateSlideBackground(selectedSlide, "backgroundImage", uploadedFile.url);
        toast.success("Slide background image uploaded successfully!");
      }
    } catch (error) {
      console.error("Upload failed:", error);
      toast.error("Failed to upload slide background image. Please try again.");
    }
  };

  const updateSlideBackground = (
    slideIndex: number,
    key: string,
    value: any
  ) => {

    const slideBackgrounds = [...(currentProperties.slideBackgrounds || [])];

    // Ensure we have enough slide backgrounds
    while (slideBackgrounds.length <= slideIndex) {
      slideBackgrounds.push({
        backgroundType: "color",
        backgroundColor: "#ffffff",
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        gradientType: "linear",
        gradientDirection: "to right",
        gradientFrom: "#3b82f6",
        gradientTo: "#8b5cf6",
        gradientVia: "",
      });
    }

    // Update the specific slide background
    slideBackgrounds[slideIndex] = {
      ...slideBackgrounds[slideIndex],
      [key]: value,
    };
// console.log(slideBackgrounds);
    updateProperty("slideBackgrounds", slideBackgrounds);
  };

  const getSlideBackground = (slideIndex: number): SlideBackground => {
    const slideBackgrounds = currentProperties.slideBackgrounds || [];
    return (
      slideBackgrounds[slideIndex] || {
        backgroundType: "color",
        backgroundColor: "#ffffff",
        backgroundImage: "",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        gradientType: "linear",
        gradientDirection: "to right",
        gradientFrom: "#3b82f6",
        gradientTo: "#8b5cf6",
        gradientVia: "",
      }
    );
  };

  return (
    <div className="space-y-4">
      {/* Basic Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Basic Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="height">Height</Label>
            <Select
              value={currentProperties.height}
              onValueChange={(value) => updateProperty("height", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select height" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="h-16">Small (64px)</SelectItem>
                <SelectItem value="h-20">Medium (80px)</SelectItem>
                <SelectItem value="h-24">Large (96px)</SelectItem>
                <SelectItem value="h-32">XL (128px)</SelectItem>
                <SelectItem value="h-40">2XL (160px)</SelectItem>
                <SelectItem value="h-48">3XL (192px)</SelectItem>
                <SelectItem value="h-56">4XL (224px)</SelectItem>
                <SelectItem value="h-64">5XL (256px)</SelectItem>
                <SelectItem value="h-72">6XL (288px)</SelectItem>
                <SelectItem value="h-80">7XL (320px)</SelectItem>
                <SelectItem value="h-96">8XL (384px)</SelectItem>
                <SelectItem value="h-screen">Full Screen</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="slidesToShow">Slides to Show</Label>
            <Input
              id="slidesToShow"
              type="number"
              min="1"
              max="5"
              value={currentProperties.slidesToShow}
              onChange={(e) =>
                updateProperty("slidesToShow", parseInt(e.target.value))
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="slidesToScroll">Slides to Scroll</Label>
            <Input
              id="slidesToScroll"
              type="number"
              min="1"
              max="5"
              value={currentProperties.slidesToScroll}
              onChange={(e) =>
                updateProperty("slidesToScroll", parseInt(e.target.value))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Navigation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="showArrows">Show Arrows</Label>
            <Switch
              id="showArrows"
              checked={currentProperties.showArrows}
              onCheckedChange={(checked) =>
                updateProperty("showArrows", checked)
              }
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="showDots">Show Dots</Label>
            <Switch
              id="showDots"
              checked={currentProperties.showDots}
              onCheckedChange={(checked) => updateProperty("showDots", checked)}
            />
          </div>

          <div className="flex items-center justify-between">
            <Label htmlFor="infinite">Infinite Loop</Label>
            <Switch
              id="infinite"
              checked={currentProperties.infinite}
              onCheckedChange={(checked) => updateProperty("infinite", checked)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Autoplay */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Autoplay</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="autoplay">Enable Autoplay</Label>
            <Switch
              id="autoplay"
              checked={currentProperties.autoplay}
              onCheckedChange={(checked) => updateProperty("autoplay", checked)}
            />
          </div>

          {currentProperties.autoplay && (
            <>
              <div className="space-y-2">
                <Label htmlFor="autoplayDelay">Autoplay Delay (ms)</Label>
                <Input
                  id="autoplayDelay"
                  type="number"
                  min="1000"
                  max="10000"
                  step="100"
                  value={currentProperties.autoplayDelay}
                  onChange={(e) =>
                    updateProperty("autoplayDelay", parseInt(e.target.value))
                  }
                />
              </div>

              <div className="flex items-center justify-between">
                <Label htmlFor="pauseOnHover">Pause on Hover</Label>
                <Switch
                  id="pauseOnHover"
                  checked={currentProperties.pauseOnHover}
                  onCheckedChange={(checked) =>
                    updateProperty("pauseOnHover", checked)
                  }
                />
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Animation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Animation</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="transition">Transition Effect</Label>
            <Select
              value={currentProperties.transition}
              onValueChange={(value) => updateProperty("transition", value)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="slide">Slide</SelectItem>
                <SelectItem value="fade">Fade</SelectItem>
                <SelectItem value="scale">Scale</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="transitionDuration">Duration (ms)</Label>
            <Input
              id="transitionDuration"
              type="number"
              min="100"
              max="2000"
              step="50"
              value={currentProperties.transitionDuration}
              onChange={(e) =>
                updateProperty("transitionDuration", parseInt(e.target.value))
              }
            />
          </div>
        </CardContent>
      </Card>

      {/* Styling */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Container Styling</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">

          <div className="space-y-2">
            <Label htmlFor="borderRadius">Border Radius</Label>
            <Select
              value={currentProperties.borderRadius}
              onValueChange={(value) => updateProperty("borderRadius", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select border radius" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rounded-none">None (0px)</SelectItem>
                <SelectItem value="rounded-sm">Small (2px)</SelectItem>
                <SelectItem value="rounded">Default (4px)</SelectItem>
                <SelectItem value="rounded-md">Medium (6px)</SelectItem>
                <SelectItem value="rounded-lg">Large (8px)</SelectItem>
                <SelectItem value="rounded-xl">XL (12px)</SelectItem>
                <SelectItem value="rounded-2xl">2XL (16px)</SelectItem>
                <SelectItem value="rounded-3xl">3XL (24px)</SelectItem>
                <SelectItem value="rounded-full">Full (9999px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="margin">Margin</Label>
            <Select
              value={currentProperties.margin}
              onValueChange={(value) => updateProperty("margin", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select margin" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="m-0">None (0px)</SelectItem>
                <SelectItem value="m-1">Small (4px)</SelectItem>
                <SelectItem value="m-2">Medium (8px)</SelectItem>
                <SelectItem value="m-3">Large (12px)</SelectItem>
                <SelectItem value="m-4">XL (16px)</SelectItem>
                <SelectItem value="m-5">2XL (20px)</SelectItem>
                <SelectItem value="m-6">3XL (24px)</SelectItem>
                <SelectItem value="m-8">4XL (32px)</SelectItem>
                <SelectItem value="m-10">5XL (40px)</SelectItem>
                <SelectItem value="m-12">6XL (48px)</SelectItem>
                <SelectItem value="m-16">7XL (64px)</SelectItem>
                <SelectItem value="m-20">8XL (80px)</SelectItem>
                <SelectItem value="m-24">9XL (96px)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="padding">Padding</Label>
            <Select
              value={currentProperties.padding}
              onValueChange={(value) => updateProperty("padding", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select padding" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="p-0">None (0px)</SelectItem>
                <SelectItem value="p-1">Small (4px)</SelectItem>
                <SelectItem value="p-2">Medium (8px)</SelectItem>
                <SelectItem value="p-3">Large (12px)</SelectItem>
                <SelectItem value="p-4">XL (16px)</SelectItem>
                <SelectItem value="p-5">2XL (20px)</SelectItem>
                <SelectItem value="p-6">3XL (24px)</SelectItem>
                <SelectItem value="p-8">4XL (32px)</SelectItem>
                <SelectItem value="p-10">5XL (40px)</SelectItem>
                <SelectItem value="p-12">6XL (48px)</SelectItem>
                <SelectItem value="p-16">7XL (64px)</SelectItem>
                <SelectItem value="p-20">8XL (80px)</SelectItem>
                <SelectItem value="p-24">9XL (96px)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Individual Slide Backgrounds */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">
            Individual Slide Backgrounds
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Slide Selector */}
          <div className="space-y-2">
            <Label>Select Slide to Edit</Label>
            <div className="flex gap-2 flex-wrap">
              {Array.from(
                {
                  length: Math.max(
                    3,
                    currentProperties.slideBackgrounds?.length || 3
                  ),
                },
                (_, index) => (
                  <Button
                    key={index}
                    variant={selectedSlide === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => {
                      setSelectedSlide(index);
                      // Ensure slideBackground exists for this index when selected
                      if (!currentProperties.slideBackgrounds?.[index]) {
                        const slideBackgrounds = [...(currentProperties.slideBackgrounds || [])];
                        while (slideBackgrounds.length <= index) {
                          slideBackgrounds.push({
                            backgroundType: "color",
                            backgroundColor: "#ffffff",
                            backgroundImage: "",
                            backgroundSize: "cover",
                            backgroundPosition: "center center",
                            backgroundRepeat: "no-repeat",
                            gradientType: "linear",
                            gradientDirection: "to right",
                            gradientFrom: "#3b82f6",
                            gradientTo: "#8b5cf6",
                            gradientVia: "",
                          });
                        }
                        updateProperty("slideBackgrounds", slideBackgrounds);
                      }
                    }}
                  >
                    Slide {index + 1}
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Background Type for Selected Slide */}
          <div className="space-y-2">
            <Label htmlFor="slideBackgroundType">Background Type</Label>
            <Select
              value={getSlideBackground(selectedSlide).backgroundType}
              onValueChange={(value) =>
                updateSlideBackground(selectedSlide, "backgroundType", value)
              }
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="color">Solid Color</SelectItem>
                <SelectItem value="gradient">Gradient</SelectItem>
                <SelectItem value="image">Image</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Solid Color Background */}
          {getSlideBackground(selectedSlide).backgroundType === "color" && (
            <ColorPickerComponent
              value={getSlideBackground(selectedSlide).backgroundColor}
              onChange={(value) =>
                updateSlideBackground(
                  selectedSlide,
                  "backgroundColor",
                  value
                )
              }
              label="Background Color"
              placeholder="Select background color"
            />
          )}

          {/* Gradient Background */}
          {getSlideBackground(selectedSlide).backgroundType === "gradient" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="slideGradientType">Gradient Type</Label>
                <Select
                  value={getSlideBackground(selectedSlide).gradientType}
                  onValueChange={(value) =>
                    updateSlideBackground(selectedSlide, "gradientType", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="linear">Linear</SelectItem>
                    <SelectItem value="radial">Radial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {getSlideBackground(selectedSlide).gradientType === "linear" && (
                <div className="space-y-2">
                  <Label htmlFor="slideGradientDirection">Direction</Label>
                  <Select
                    value={getSlideBackground(selectedSlide).gradientDirection}
                    onValueChange={(value) =>
                      updateSlideBackground(
                        selectedSlide,
                        "gradientDirection",
                        value
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="to right">To Right</SelectItem>
                      <SelectItem value="to left">To Left</SelectItem>
                      <SelectItem value="to bottom">To Bottom</SelectItem>
                      <SelectItem value="to top">To Top</SelectItem>
                      <SelectItem value="to bottom right">
                        To Bottom Right
                      </SelectItem>
                      <SelectItem value="to bottom left">
                        To Bottom Left
                      </SelectItem>
                      <SelectItem value="to top right">To Top Right</SelectItem>
                      <SelectItem value="to top left">To Top Left</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              <ColorPickerComponent
                value={getSlideBackground(selectedSlide).gradientFrom}
                onChange={(value) =>
                  updateSlideBackground(
                    selectedSlide,
                    "gradientFrom",
                    value
                  )
                }
                label="From Color"
                placeholder="Select from color"
              />

              <ColorPickerComponent
                value={getSlideBackground(selectedSlide).gradientVia || ""}
                onChange={(value) =>
                  updateSlideBackground(
                    selectedSlide,
                    "gradientVia",
                    value
                  )
                }
                label="Via Color (Optional)"
                placeholder="Select via color"
              />

              <ColorPickerComponent
                value={getSlideBackground(selectedSlide).gradientTo}
                onChange={(value) =>
                  updateSlideBackground(
                    selectedSlide,
                    "gradientTo",
                    value
                  )
                }
                label="To Color"
                placeholder="Select to color"
              />
            </>
          )}

          {/* Image Background */}
          {getSlideBackground(selectedSlide).backgroundType === "image" && (
            <>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="slideBackgroundImage">
                    Slide Background Image
                  </Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowSlideManualInput(!showSlideManualInput)}
                    className="text-xs"
                  >
                    <Link className="w-3 h-3 mr-1" />
                    {showSlideManualInput ? "Upload" : "URL"}
                  </Button>
                </div>

                {showSlideManualInput ? (
                  <Input
                    id="slideBackgroundImage"
                    value={getSlideBackground(selectedSlide).backgroundImage}
                    onChange={(e) =>
                      updateSlideBackground(
                        selectedSlide,
                        "backgroundImage",
                        e.target.value
                      )
                    }
                    placeholder="https://example.com/image.jpg"
                    disabled={isUploading}
                  />
                ) : (
                  <div className="relative">
                    <ImageUpload
                      value={getSlideBackground(selectedSlide).backgroundImage}
                      onChange={(url) => updateSlideBackground(selectedSlide, "backgroundImage", url)}
                      onFilesSelected={handleSlideImageUpload}
                      multiple={false}
                      maxFiles={1}
                      placeholder={isUploading ? "Uploading..." : "Upload slide background"}
                      variant="preview"
                      disabled={isUploading}
                    />
                    {isUploading && (
                      <div className="absolute inset-0 bg-white/50 flex items-center justify-center rounded-lg">
                        <Loader2 className="h-6 w-6 animate-spin text-blue-500" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="slideBackgroundSize">Image Size</Label>
                <Select
                  value={getSlideBackground(selectedSlide).backgroundSize}
                  onValueChange={(value) =>
                    updateSlideBackground(
                      selectedSlide,
                      "backgroundSize",
                      value
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cover">Cover</SelectItem>
                    <SelectItem value="contain">Contain</SelectItem>
                    <SelectItem value="auto">Auto</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="slideBackgroundPosition">Image Position</Label>
                <Select
                  value={getSlideBackground(selectedSlide).backgroundPosition}
                  onValueChange={(value) =>
                    updateSlideBackground(
                      selectedSlide,
                      "backgroundPosition",
                      value
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="center center">Center Center</SelectItem>
                    <SelectItem value="top center">Top Center</SelectItem>
                    <SelectItem value="bottom center">Bottom Center</SelectItem>
                    <SelectItem value="center left">Center Left</SelectItem>
                    <SelectItem value="center right">Center Right</SelectItem>
                    <SelectItem value="top left">Top Left</SelectItem>
                    <SelectItem value="top right">Top Right</SelectItem>
                    <SelectItem value="bottom left">Bottom Left</SelectItem>
                    <SelectItem value="bottom right">Bottom Right</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="slideBackgroundRepeat">Image Repeat</Label>
                <Select
                  value={getSlideBackground(selectedSlide).backgroundRepeat}
                  onValueChange={(value) =>
                    updateSlideBackground(
                      selectedSlide,
                      "backgroundRepeat",
                      value
                    )
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="no-repeat">No Repeat</SelectItem>
                    <SelectItem value="repeat">Repeat</SelectItem>
                    <SelectItem value="repeat-x">Repeat X</SelectItem>
                    <SelectItem value="repeat-y">Repeat Y</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Colors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-sm">Navigation Colors</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ColorPickerComponent
            value={currentProperties.dotColor}
            onChange={(value) => updateProperty("dotColor", value)}
            label="Dot Color"
            placeholder="Select dot color"
          />

          <ColorPickerComponent
            value={currentProperties.activeDotColor}
            onChange={(value) => updateProperty("activeDotColor", value)}
            label="Active Dot Color"
            placeholder="Select active dot color"
          />

          <ColorPickerComponent
            value={currentProperties.arrowColor}
            onChange={(value) => updateProperty("arrowColor", value)}
            label="Arrow Color"
            placeholder="Select arrow color"
          />

          <ColorPickerComponent
            value={currentProperties.arrowBackgroundColor}
            onChange={(value) => updateProperty("arrowBackgroundColor", value)}
            label="Arrow Background"
            placeholder="Select arrow background color"
          />
        </CardContent>
      </Card>
    </div>
  );
}
