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
import { useState } from "react";

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
    backgroundColor: string;
    backgroundType: "color" | "gradient" | "image";
    backgroundImage: string;
    backgroundSize: "cover" | "contain" | "auto";
    backgroundPosition: string;
    backgroundRepeat: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
    gradientType: "linear" | "radial";
    gradientDirection: string;
    gradientFrom: string;
    gradientTo: string;
    gradientVia?: string;
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
    height: "400px",
    backgroundColor: "#ffffff",
    backgroundType: "color" as const,
    backgroundImage: "",
    backgroundSize: "cover" as const,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat" as const,
    gradientType: "linear" as const,
    gradientDirection: "to right",
    gradientFrom: "#3b82f6",
    gradientTo: "#8b5cf6",
    gradientVia: "",
    borderRadius: "8px",
    margin: "8px",
    padding: "0px",
    dotColor: "#cbd5e1",
    activeDotColor: "#3b82f6",
    arrowColor: "#ffffff",
    arrowBackgroundColor: "rgba(0, 0, 0, 0.5)",
    slideBackgrounds: [],
  };

  const currentProperties = { ...defaultProperties, ...elementProps };
  const [selectedSlide, setSelectedSlide] = useState(0);

  const updateProperty = (key: string, value: any) => {
    if (onPropChange) {
      onPropChange(key, value);
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
            <Input
              id="height"
              value={currentProperties.height}
              onChange={(e) => updateProperty("height", e.target.value)}
              placeholder="400px"
            />
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
          <CardTitle className="text-sm">Background & Styling</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="backgroundType">Background Type</Label>
            <Select
              value={currentProperties.backgroundType}
              onValueChange={(value) => updateProperty("backgroundType", value)}
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
          {currentProperties.backgroundType === "color" && (
            <div className="space-y-2">
              <Label htmlFor="backgroundColor">Background Color</Label>
              <Input
                id="backgroundColor"
                type="color"
                value={currentProperties.backgroundColor}
                onChange={(e) =>
                  updateProperty("backgroundColor", e.target.value)
                }
              />
            </div>
          )}

          {/* Gradient Background */}
          {currentProperties.backgroundType === "gradient" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="gradientType">Gradient Type</Label>
                <Select
                  value={currentProperties.gradientType}
                  onValueChange={(value) =>
                    updateProperty("gradientType", value)
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

              {currentProperties.gradientType === "linear" && (
                <div className="space-y-2">
                  <Label htmlFor="gradientDirection">Direction</Label>
                  <Select
                    value={currentProperties.gradientDirection}
                    onValueChange={(value) =>
                      updateProperty("gradientDirection", value)
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

              <div className="space-y-2">
                <Label htmlFor="gradientFrom">From Color</Label>
                <Input
                  id="gradientFrom"
                  type="color"
                  value={currentProperties.gradientFrom}
                  onChange={(e) =>
                    updateProperty("gradientFrom", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gradientVia">Via Color (Optional)</Label>
                <Input
                  id="gradientVia"
                  type="color"
                  value={currentProperties.gradientVia || ""}
                  onChange={(e) =>
                    updateProperty("gradientVia", e.target.value)
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gradientTo">To Color</Label>
                <Input
                  id="gradientTo"
                  type="color"
                  value={currentProperties.gradientTo}
                  onChange={(e) => updateProperty("gradientTo", e.target.value)}
                />
              </div>
            </>
          )}

          {/* Image Background */}
          {currentProperties.backgroundType === "image" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="backgroundImage">Background Image URL</Label>
                <Input
                  id="backgroundImage"
                  value={currentProperties.backgroundImage}
                  onChange={(e) =>
                    updateProperty("backgroundImage", e.target.value)
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="backgroundSize">Image Size</Label>
                <Select
                  value={currentProperties.backgroundSize}
                  onValueChange={(value) =>
                    updateProperty("backgroundSize", value)
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
                <Label htmlFor="backgroundPosition">Image Position</Label>
                <Select
                  value={currentProperties.backgroundPosition}
                  onValueChange={(value) =>
                    updateProperty("backgroundPosition", value)
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
                <Label htmlFor="backgroundRepeat">Image Repeat</Label>
                <Select
                  value={currentProperties.backgroundRepeat}
                  onValueChange={(value) =>
                    updateProperty("backgroundRepeat", value)
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

          <div className="space-y-2">
            <Label htmlFor="borderRadius">Border Radius</Label>
            <Input
              id="borderRadius"
              value={currentProperties.borderRadius}
              onChange={(e) => updateProperty("borderRadius", e.target.value)}
              placeholder="8px"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="margin">Margin</Label>
            <Input
              id="margin"
              value={currentProperties.margin}
              onChange={(e) => updateProperty("margin", e.target.value)}
              placeholder="8px"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="padding">Padding</Label>
            <Input
              id="padding"
              value={currentProperties.padding}
              onChange={(e) => updateProperty("padding", e.target.value)}
              placeholder="0px"
            />
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
                    currentProperties.slideBackgrounds?.length || 0
                  ),
                },
                (_, index) => (
                  <Button
                    key={index}
                    variant={selectedSlide === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSlide(index)}
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
            <div className="space-y-2">
              <Label htmlFor="slideBackgroundColor">Background Color</Label>
              <Input
                id="slideBackgroundColor"
                type="color"
                value={getSlideBackground(selectedSlide).backgroundColor}
                onChange={(e) =>
                  updateSlideBackground(
                    selectedSlide,
                    "backgroundColor",
                    e.target.value
                  )
                }
              />
            </div>
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

              <div className="space-y-2">
                <Label htmlFor="slideGradientFrom">From Color</Label>
                <Input
                  id="slideGradientFrom"
                  type="color"
                  value={getSlideBackground(selectedSlide).gradientFrom}
                  onChange={(e) =>
                    updateSlideBackground(
                      selectedSlide,
                      "gradientFrom",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slideGradientVia">Via Color (Optional)</Label>
                <Input
                  id="slideGradientVia"
                  type="color"
                  value={getSlideBackground(selectedSlide).gradientVia || ""}
                  onChange={(e) =>
                    updateSlideBackground(
                      selectedSlide,
                      "gradientVia",
                      e.target.value
                    )
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="slideGradientTo">To Color</Label>
                <Input
                  id="slideGradientTo"
                  type="color"
                  value={getSlideBackground(selectedSlide).gradientTo}
                  onChange={(e) =>
                    updateSlideBackground(
                      selectedSlide,
                      "gradientTo",
                      e.target.value
                    )
                  }
                />
              </div>
            </>
          )}

          {/* Image Background */}
          {getSlideBackground(selectedSlide).backgroundType === "image" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="slideBackgroundImage">
                  Background Image URL
                </Label>
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
                />
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
          <div className="space-y-2">
            <Label htmlFor="dotColor">Dot Color</Label>
            <Input
              id="dotColor"
              type="color"
              value={currentProperties.dotColor}
              onChange={(e) => updateProperty("dotColor", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="activeDotColor">Active Dot Color</Label>
            <Input
              id="activeDotColor"
              type="color"
              value={currentProperties.activeDotColor}
              onChange={(e) => updateProperty("activeDotColor", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="arrowColor">Arrow Color</Label>
            <Input
              id="arrowColor"
              type="color"
              value={currentProperties.arrowColor}
              onChange={(e) => updateProperty("arrowColor", e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="arrowBackgroundColor">Arrow Background</Label>
            <Input
              id="arrowBackgroundColor"
              value={currentProperties.arrowBackgroundColor}
              onChange={(e) =>
                updateProperty("arrowBackgroundColor", e.target.value)
              }
              placeholder="rgba(0, 0, 0, 0.5)"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
