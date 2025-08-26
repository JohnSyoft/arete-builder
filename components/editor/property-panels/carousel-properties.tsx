import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
  Plus,
  Trash2,
  Image,
  Type,
  CreditCard,
  MessageSquare,
} from "lucide-react";

interface CarouselSlide {
  id: string;
  content: React.ReactNode;
  image?: string;
  title?: string;
  description?: string;
}

interface CarouselPropertiesProps {
  elementProps: any;
  onPropChange: (key: string, value: any) => void;
}

export function CarouselProperties({
  elementProps,
  onPropChange,
}: CarouselPropertiesProps) {
  const {
    variant = "image",
    slides = [],
    autoplay = false,
    autoplayDelay = 3000,
    infinite = true,
    showDots = true,
    showArrows = true,
    showThumbnails = false,
    pauseOnHover = true,
    transition = "slide",
    transitionDuration = 300,
    slidesToShow = 1,
    slidesToScroll = 1,
    responsive = {
      mobile: { slidesToShow: 1, slidesToScroll: 1 },
      tablet: { slidesToShow: 2, slidesToScroll: 1 },
      desktop: { slidesToShow: 3, slidesToScroll: 1 },
    },
    height = "400px",
    backgroundColor = "#ffffff",
    borderRadius = "8px",
    margin = "8px",
    padding = "0px",
    dotColor = "#cbd5e1",
    activeDotColor = "#3b82f6",
    arrowColor = "#ffffff",
    arrowBackgroundColor = "rgba(0, 0, 0, 0.5)",
    thumbnailSize = "60px",
    gap = "16px",
  } = elementProps;

  const addSlide = () => {
    const newSlide = {
      id: `slide${slides.length + 1}`,
      content: `Slide ${slides.length + 1} Content`,
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      title: `Slide ${slides.length + 1}`,
      description: `This is slide ${slides.length + 1}`,
    };
    onPropChange("slides", [...slides, newSlide]);
  };

  const removeSlide = (index: number) => {
    const newSlides = slides.filter((_: any, i: number) => i !== index);
    onPropChange("slides", newSlides);
  };

  const updateSlide = (
    index: number,
    field: keyof CarouselSlide,
    value: string
  ) => {
    const newSlides = [...slides];
    newSlides[index] = { ...newSlides[index], [field]: value };
    onPropChange("slides", newSlides);
  };

  const updateResponsive = (
    breakpoint: "mobile" | "tablet" | "desktop",
    field: "slidesToShow" | "slidesToScroll",
    value: number
  ) => {
    const newResponsive = {
      ...responsive,
      [breakpoint]: {
        ...responsive[breakpoint],
        [field]: value,
      },
    };
    onPropChange("responsive", newResponsive);
  };

  const getVariantIcon = (variantType: string) => {
    switch (variantType) {
      case "image":
        return <Image className="w-4 h-4" />;
      case "card":
        return <CreditCard className="w-4 h-4" />;
      case "testimonial":
        return <MessageSquare className="w-4 h-4" />;
      default:
        return <Type className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Basic Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Basic Settings
        </h3>

        <div>
          <Label htmlFor="variant">Variant</Label>
          <Select
            value={variant}
            onValueChange={(value) => onPropChange("variant", value)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="image">
                <div className="flex items-center gap-2">
                  <Image className="w-4 h-4" />
                  Image Carousel
                </div>
              </SelectItem>
              <SelectItem value="card">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  Card Carousel
                </div>
              </SelectItem>
              <SelectItem value="content">
                <div className="flex items-center gap-2">
                  <Type className="w-4 h-4" />
                  Content Carousel
                </div>
              </SelectItem>
              <SelectItem value="testimonial">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Testimonial Carousel
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="height">Height</Label>
          <Input
            id="height"
            value={height}
            onChange={(e) => onPropChange("height", e.target.value)}
            placeholder="400px"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="slidesToShow">Slides to Show</Label>
            <Input
              id="slidesToShow"
              type="number"
              min="1"
              max="10"
              value={slidesToShow}
              onChange={(e) =>
                onPropChange("slidesToShow", parseInt(e.target.value))
              }
            />
          </div>
          <div>
            <Label htmlFor="slidesToScroll">Slides to Scroll</Label>
            <Input
              id="slidesToScroll"
              type="number"
              min="1"
              max="10"
              value={slidesToScroll}
              onChange={(e) =>
                onPropChange("slidesToScroll", parseInt(e.target.value))
              }
            />
          </div>
        </div>
      </div>

      {/* Navigation & Controls */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Navigation & Controls
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="showArrows">Show Arrows</Label>
            <Switch
              id="showArrows"
              checked={showArrows}
              onCheckedChange={(checked) => onPropChange("showArrows", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="showDots">Show Dots</Label>
            <Switch
              id="showDots"
              checked={showDots}
              onCheckedChange={(checked) => onPropChange("showDots", checked)}
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="showThumbnails">Show Thumbnails</Label>
            <Switch
              id="showThumbnails"
              checked={showThumbnails}
              onCheckedChange={(checked) =>
                onPropChange("showThumbnails", checked)
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <Label htmlFor="infinite">Infinite Loop</Label>
            <Switch
              id="infinite"
              checked={infinite}
              onCheckedChange={(checked) => onPropChange("infinite", checked)}
            />
          </div>
        </div>
      </div>

      {/* Autoplay Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Autoplay Settings
        </h3>

        <div className="flex items-center justify-between">
          <Label htmlFor="autoplay">Enable Autoplay</Label>
          <Switch
            id="autoplay"
            checked={autoplay}
            onCheckedChange={(checked) => onPropChange("autoplay", checked)}
          />
        </div>

        {autoplay && (
          <>
            <div>
              <Label htmlFor="autoplayDelay">Autoplay Delay (ms)</Label>
              <Input
                id="autoplayDelay"
                type="number"
                min="1000"
                max="10000"
                step="500"
                value={autoplayDelay}
                onChange={(e) =>
                  onPropChange("autoplayDelay", parseInt(e.target.value))
                }
              />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="pauseOnHover">Pause on Hover</Label>
              <Switch
                id="pauseOnHover"
                checked={pauseOnHover}
                onCheckedChange={(checked) =>
                  onPropChange("pauseOnHover", checked)
                }
              />
            </div>
          </>
        )}
      </div>

      {/* Animation Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Animation Settings
        </h3>

        <div>
          <Label htmlFor="transition">Transition Effect</Label>
          <Select
            value={transition}
            onValueChange={(value) => onPropChange("transition", value)}
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

        <div>
          <Label htmlFor="transitionDuration">Transition Duration (ms)</Label>
          <Input
            id="transitionDuration"
            type="number"
            min="100"
            max="2000"
            step="100"
            value={transitionDuration}
            onChange={(e) =>
              onPropChange("transitionDuration", parseInt(e.target.value))
            }
          />
        </div>
      </div>

      {/* Responsive Settings */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Responsive Settings
        </h3>

        {(["mobile", "tablet", "desktop"] as const).map((breakpoint) => (
          <div key={breakpoint} className="p-3 border rounded-lg space-y-2">
            <Label className="text-sm font-medium capitalize">
              {breakpoint}
            </Label>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Label className="text-xs">Slides to Show</Label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={responsive[breakpoint].slidesToShow}
                  onChange={(e) =>
                    updateResponsive(
                      breakpoint,
                      "slidesToShow",
                      parseInt(e.target.value)
                    )
                  }
                  className="text-xs"
                />
              </div>
              <div>
                <Label className="text-xs">Slides to Scroll</Label>
                <Input
                  type="number"
                  min="1"
                  max="10"
                  value={responsive[breakpoint].slidesToScroll}
                  onChange={(e) =>
                    updateResponsive(
                      breakpoint,
                      "slidesToScroll",
                      parseInt(e.target.value)
                    )
                  }
                  className="text-xs"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styling */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
          Styling
        </h3>

        <div>
          <Label htmlFor="backgroundColor">Background Color</Label>
          <div className="flex gap-2">
            <Input
              id="backgroundColor"
              type="color"
              value={backgroundColor}
              onChange={(e) => onPropChange("backgroundColor", e.target.value)}
              className="w-12 h-8 p-1 border rounded"
            />
            <Input
              value={backgroundColor}
              onChange={(e) => onPropChange("backgroundColor", e.target.value)}
              placeholder="#ffffff"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="borderRadius">Border Radius</Label>
            <Input
              id="borderRadius"
              value={borderRadius}
              onChange={(e) => onPropChange("borderRadius", e.target.value)}
              placeholder="8px"
            />
          </div>
          <div>
            <Label htmlFor="gap">Gap</Label>
            <Input
              id="gap"
              value={gap}
              onChange={(e) => onPropChange("gap", e.target.value)}
              placeholder="16px"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="padding">Padding</Label>
            <Input
              id="padding"
              value={padding}
              onChange={(e) => onPropChange("padding", e.target.value)}
              placeholder="0px"
            />
          </div>
          <div>
            <Label htmlFor="margin">Margin</Label>
            <Input
              id="margin"
              value={margin}
              onChange={(e) => onPropChange("margin", e.target.value)}
              placeholder="8px"
            />
          </div>
        </div>

        {/* Navigation Colors */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Navigation Colors</Label>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Dot Color</Label>
              <div className="flex gap-1">
                <Input
                  type="color"
                  value={dotColor}
                  onChange={(e) => onPropChange("dotColor", e.target.value)}
                  className="w-8 h-6 p-0 border rounded"
                />
                <Input
                  value={dotColor}
                  onChange={(e) => onPropChange("dotColor", e.target.value)}
                  className="text-xs"
                  placeholder="#cbd5e1"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Active Dot Color</Label>
              <div className="flex gap-1">
                <Input
                  type="color"
                  value={activeDotColor}
                  onChange={(e) =>
                    onPropChange("activeDotColor", e.target.value)
                  }
                  className="w-8 h-6 p-0 border rounded"
                />
                <Input
                  value={activeDotColor}
                  onChange={(e) =>
                    onPropChange("activeDotColor", e.target.value)
                  }
                  className="text-xs"
                  placeholder="#3b82f6"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs">Arrow Color</Label>
              <div className="flex gap-1">
                <Input
                  type="color"
                  value={arrowColor}
                  onChange={(e) => onPropChange("arrowColor", e.target.value)}
                  className="w-8 h-6 p-0 border rounded"
                />
                <Input
                  value={arrowColor}
                  onChange={(e) => onPropChange("arrowColor", e.target.value)}
                  className="text-xs"
                  placeholder="#ffffff"
                />
              </div>
            </div>
            <div>
              <Label className="text-xs">Arrow Background</Label>
              <Input
                value={arrowBackgroundColor}
                onChange={(e) =>
                  onPropChange("arrowBackgroundColor", e.target.value)
                }
                className="text-xs"
                placeholder="rgba(0, 0, 0, 0.5)"
              />
            </div>
          </div>
        </div>

        {showThumbnails && (
          <div>
            <Label htmlFor="thumbnailSize">Thumbnail Size</Label>
            <Input
              id="thumbnailSize"
              value={thumbnailSize}
              onChange={(e) => onPropChange("thumbnailSize", e.target.value)}
              placeholder="60px"
            />
          </div>
        )}
      </div>

      {/* Slides Management */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-900 border-b pb-2">
            Slides
          </h3>
          <Button onClick={addSlide} size="sm" variant="outline">
            <Plus className="w-4 h-4 mr-1" />
            Add Slide
          </Button>
        </div>

        <div className="space-y-3 max-h-60 overflow-y-auto">
          {slides.map((slide: CarouselSlide, index: number) => (
            <div key={slide.id} className="border rounded-lg p-3 space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium flex items-center gap-2">
                  {getVariantIcon(variant)}
                  Slide {index + 1}
                </Label>
                {slides.length > 1 && (
                  <Button
                    onClick={() => removeSlide(index)}
                    size="sm"
                    variant="outline"
                    className="h-6 w-6 p-0"
                  >
                    <Trash2 className="w-3 h-3" />
                  </Button>
                )}
              </div>

              <div className="space-y-2">
                <div>
                  <Label className="text-xs">Title</Label>
                  <Input
                    value={slide.title || ""}
                    onChange={(e) =>
                      updateSlide(index, "title", e.target.value)
                    }
                    placeholder="Slide title"
                    className="text-xs"
                  />
                </div>

                {(variant === "image" ||
                  variant === "card" ||
                  variant === "testimonial") && (
                  <div>
                    <Label className="text-xs">Image URL</Label>
                    <Input
                      value={slide.image || ""}
                      onChange={(e) =>
                        updateSlide(index, "image", e.target.value)
                      }
                      placeholder="https://example.com/image.jpg"
                      className="text-xs"
                    />
                  </div>
                )}

                <div>
                  <Label className="text-xs">
                    {variant === "testimonial" ? "Quote" : "Description"}
                  </Label>
                  <Input
                    value={slide.description || ""}
                    onChange={(e) =>
                      updateSlide(index, "description", e.target.value)
                    }
                    placeholder={
                      variant === "testimonial"
                        ? "Testimonial quote"
                        : "Slide description"
                    }
                    className="text-xs"
                  />
                </div>

                {variant === "content" && (
                  <div>
                    <Label className="text-xs">Content</Label>
                    <Input
                      value={
                        typeof slide.content === "string" ? slide.content : ""
                      }
                      onChange={(e) =>
                        updateSlide(index, "content", e.target.value)
                      }
                      placeholder="Slide content"
                      className="text-xs"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
