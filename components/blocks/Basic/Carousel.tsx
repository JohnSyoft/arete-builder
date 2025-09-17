import { useNode, useEditor, Element } from "@craftjs/core";
import React, { useState, useEffect, useRef } from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Plus,
  Trash2,
} from "lucide-react";

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

interface CarouselProps {
  autoplay?: boolean;
  autoplayDelay?: number;
  infinite?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  pauseOnHover?: boolean;
  transition?: "slide" | "fade" | "scale";
  transitionDuration?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  height?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  dotColor?: string;
  activeDotColor?: string;
  arrowColor?: string;
  arrowBackgroundColor?: string;
  slideBackgrounds?: SlideBackground[];
  children?: React.ReactNode;
  nonEditable?: boolean;
}

export function Carousel({
  autoplay = false,
  autoplayDelay = 3000,
  infinite = true,
  showDots = true,
  showArrows = true,
  pauseOnHover = true,
  transition = "slide",
  transitionDuration = 300,
  slidesToShow = 1,
  slidesToScroll = 1,
  height = "h-96",
  borderRadius = "rounded-lg",
  margin = "m-2",
  padding = "p-0",
  dotColor = "#cbd5e1",
  activeDotColor = "#3b82f6",
  arrowColor = "#ffffff",
  arrowBackgroundColor = "rgba(0, 0, 0, 0.5)",
  slideBackgrounds = [],
  children,
  nonEditable = false,
}: CarouselProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    actions: { setProp },
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
  }));

  const { actions } = useEditor();
  const { openPanel } = usePropertiesPanelStore();

  // Smart styling: handle Tailwind classes vs raw CSS values
  const getHeightValue = (heightClass: string) => {
    const heightMap: Record<string, string> = {
      "h-16": "64px", "h-20": "80px", "h-24": "96px", "h-32": "128px",
      "h-40": "160px", "h-48": "192px", "h-56": "224px", "h-64": "256px",
      "h-72": "288px", "h-80": "320px", "h-96": "384px", "h-screen": "100vh",
    };
    return heightMap[heightClass] || heightClass;
  };

  const getBorderRadiusValue = (borderRadiusClass: string) => {
    const borderRadiusMap: Record<string, string> = {
      "rounded-none": "0px", "rounded-sm": "2px", "rounded": "4px", "rounded-md": "6px",
      "rounded-lg": "8px", "rounded-xl": "12px", "rounded-2xl": "16px", "rounded-3xl": "24px",
      "rounded-full": "9999px",
    };
    return borderRadiusMap[borderRadiusClass] || borderRadiusClass;
  };

  const getMarginValue = (marginClass: string) => {
    const marginMap: Record<string, string> = {
      "m-0": "0px", "m-1": "4px", "m-2": "8px", "m-3": "12px", "m-4": "16px",
      "m-5": "20px", "m-6": "24px", "m-8": "32px", "m-10": "40px", "m-12": "48px",
      "m-16": "64px", "m-20": "80px", "m-24": "96px",
    };
    return marginMap[marginClass] || marginClass;
  };

  const getPaddingValue = (paddingClass: string) => {
    const paddingMap: Record<string, string> = {
      "p-0": "0px", "p-1": "4px", "p-2": "8px", "p-3": "12px", "p-4": "16px",
      "p-5": "20px", "p-6": "24px", "p-8": "32px", "p-10": "40px", "p-12": "48px",
      "p-16": "64px", "p-20": "80px", "p-24": "96px",
    };
    return paddingMap[paddingClass] || paddingClass;
  };

  // Convert children to array once at the top level
  const childrenArray = React.Children.toArray(children);
  
  // Initialize slideCount based on children or default to 3
  const initialSlideCount = childrenArray.length > 0 ? childrenArray.length : 3;
  const [slideCount, setSlideCount] = useState(initialSlideCount);
  
  console.log({ childrenArray, slideBackgrounds, slideCount });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Initialize slideBackgrounds on mount if not present
  useEffect(() => {
    if (!slideBackgrounds || slideBackgrounds.length === 0) {
      setProp((props: CarouselProps) => {
        if (!props.slideBackgrounds) {
          props.slideBackgrounds = [];
        }
        
        // Initialize with default backgrounds for the initial slide count
        for (let i = 0; i < slideCount; i++) {
          props.slideBackgrounds.push({
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
      });
    }
  }, []); // Run only on mount

  // Update slideCount when children change AND ensure slideBackgrounds array matches
  useEffect(() => {
    const targetSlideCount = childrenArray.length > 0 ? childrenArray.length : slideCount;
    
    // Always ensure slideBackgrounds array has the right length
    setProp((props: CarouselProps) => {
      if (!props.slideBackgrounds) {
        props.slideBackgrounds = [];
      }
      
      // If slideBackgrounds array doesn't match the target slide count, fix it
      if (props.slideBackgrounds.length !== targetSlideCount) {
        if (props.slideBackgrounds.length < targetSlideCount) {
          // Add more backgrounds if needed
          for (let i = props.slideBackgrounds.length; i < targetSlideCount; i++) {
            props.slideBackgrounds.push({
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
        } else {
          // Remove excess backgrounds
          props.slideBackgrounds = props.slideBackgrounds.slice(0, targetSlideCount);
        }
      }
    });
    
    // Update slideCount if children changed
    if (childrenArray.length > 0 && childrenArray.length !== slideCount) {
      setSlideCount(childrenArray.length);
    }
  }, [children, slideCount, childrenArray.length, setProp]);

  const handleShowProperties = () => {
    openPanel(
      "carousel",
      {
        autoplay,
        autoplayDelay,
        infinite,
        showDots,
        showArrows,
        pauseOnHover,
        transition,
        transitionDuration,
        slidesToShow,
        slidesToScroll,
        height,
        borderRadius,
        margin,
        padding,
        dotColor,
        activeDotColor,
        arrowColor,
        arrowBackgroundColor,
        slideBackgrounds,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: CarouselProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const addSlide = () => {
    const newSlideBackground: SlideBackground = {
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
    };

    setProp((props: CarouselProps) => {
      if (!props.slideBackgrounds) {
        props.slideBackgrounds = [];
      }
      props.slideBackgrounds.push(newSlideBackground);
    });

    setSlideCount((prev) => prev + 1);
  };

  const removeSlide = (index: number) => {
    if (slideCount > 1) {
      setProp((props: CarouselProps) => {
        if (props.slideBackgrounds && props.slideBackgrounds.length > index) {
          props.slideBackgrounds.splice(index, 1);
        }
      });

      setSlideCount((prev) => prev - 1);
      if (currentSlide >= slideCount - 1) {
        setCurrentSlide(Math.max(0, currentSlide - 1));
      }
    }
  };

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying && !isPaused && slideCount > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoplayDelay);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isPaused, autoplayDelay, currentSlide, slideCount]);

  const nextSlide = () => {
    if (infinite) {
      setCurrentSlide((prev) => (prev + slidesToScroll) % slideCount);
    } else {
      setCurrentSlide((prev) =>
        Math.min(prev + slidesToScroll, slideCount - slidesToShow)
      );
    }
  };

  const prevSlide = () => {
    if (infinite) {
      setCurrentSlide((prev) =>
        prev - slidesToScroll < 0
          ? slideCount - slidesToShow
          : prev - slidesToScroll
      );
    } else {
      setCurrentSlide((prev) => Math.max(prev - slidesToScroll, 0));
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const getTransitionStyle = () => {
    const translateX = -(currentSlide * (100 / slidesToShow));

    switch (transition) {
      case "fade":
        return {
          transform: "translateX(0)",
          opacity: 1,
          transition: `opacity ${transitionDuration}ms ease-in-out`,
        };
      case "scale":
        return {
          transform: `translateX(${translateX}%) scale(${
            currentSlide ? 0.9 : 1
          })`,
          transition: `transform ${transitionDuration}ms ease-in-out`,
        };
      default: // slide
        return {
          transform: `translateX(${translateX}%)`,
          transition: `transform ${transitionDuration}ms ease-in-out`,
        };
    }
  };

  const getContainerStyle = () => {
    return {
      borderRadius: borderRadius.startsWith('rounded-') ? getBorderRadiusValue(borderRadius) : borderRadius,
      padding: padding.startsWith('p-') ? getPaddingValue(padding) : padding,
      height: height.startsWith('h-') ? getHeightValue(height) : height,
      backgroundColor: "transparent", // No main background, only individual slide backgrounds
    };
  };

  const getSlideBackgroundStyle = (slideIndex: number) => {
    const slideBackground = slideBackgrounds?.[slideIndex];
    
    if (!slideBackground) {
      return {
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
        width: "100%",
        height: "100%",
        minHeight: "200px", // Ensure slides have visible height
      };
    }

    const baseStyle = {
      borderRadius: "8px",
      width: "100%",
      height: "100%",
    };

    switch (slideBackground.backgroundType) {
      case "gradient":
        const gradientColors = slideBackground.gradientVia
          ? `${slideBackground.gradientFrom}, ${slideBackground.gradientVia}, ${slideBackground.gradientTo}`
          : `${slideBackground.gradientFrom}, ${slideBackground.gradientTo}`;

        if (slideBackground.gradientType === "radial") {
          return {
            ...baseStyle,
            background: `radial-gradient(circle, ${gradientColors})`,
          };
        } else {
          return {
            ...baseStyle,
            background: `linear-gradient(${slideBackground.gradientDirection}, ${gradientColors})`,
          };
        }

      case "image":
        return {
          ...baseStyle,
          backgroundColor: slideBackground.backgroundColor,
          backgroundImage: slideBackground.backgroundImage
            ? `url(${slideBackground.backgroundImage})`
            : undefined,
          backgroundSize: slideBackground.backgroundSize,
          backgroundPosition: slideBackground.backgroundPosition,
          backgroundRepeat: slideBackground.backgroundRepeat,
        };

      default: // color
        return {
          ...baseStyle,
          backgroundColor: slideBackground.backgroundColor,
        };
    }
  };

  // Generate slides array for rendering
  const slides = Array.from({ length: slideCount }, (_, index) => index);

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      } ${margin.startsWith('m-') ? margin : ''}`}
      style={{ 
        margin: margin.startsWith('m-') ? undefined : getMarginValue(margin)
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden" style={getContainerStyle()}>
        {/* Main carousel container */}
        <div className="relative h-full">
          <div
            ref={carouselRef}
            className="flex h-full"
            style={{
              ...getTransitionStyle(),
              gap: "16px",
            }}
          >
            {slides.map((slideIndex) => (
              <div
                key={`slide-${slideIndex}`}
                className="flex-shrink-0 relative"
                style={{
                  width: `calc(${100 / slidesToShow}% - ${
                    (16 * (slidesToShow - 1)) / slidesToShow
                  }px)`,
                  height: "100%",
                }}
              >
                {/* Slide background wrapper */}
                <div
                  className="w-full h-full relative"
                  style={{
                    ...getSlideBackgroundStyle(slideIndex),
                    minHeight: "200px",
                  }}
                >
                  {/* CraftJS canvas for content */}
                  <Element
                    id={`carousel-slide-${slideIndex}-${id}`}
                    is="div"
                    className="w-full h-full relative"
                    style={{
                      backgroundColor: "transparent", // Don't override the background
                      minHeight: "inherit",
                    }}
                    canvas
                  >
                    {/* Render child content for this slide if it exists */}
                    {childrenArray[slideIndex]}
                  </Element>
                </div>

                {/* Remove slide button */}
                {slideCount > 1 && (selected || hovered) && (
                  <button
                    onClick={() => removeSlide(slideIndex)}
                    className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors z-20"
                    title="Remove slide"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showArrows && slideCount > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 z-10"
              style={{
                backgroundColor: arrowBackgroundColor,
                color: arrowColor,
              }}
              disabled={!infinite && currentSlide === 0}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100 z-10"
              style={{
                backgroundColor: arrowBackgroundColor,
                color: arrowColor,
              }}
              disabled={!infinite && currentSlide >= slideCount - slidesToShow}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Autoplay Control */}
        {autoplay && (
          <button
            onClick={togglePlayPause}
            className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white transition-opacity opacity-0 group-hover:opacity-100 z-10"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        )}

        {/* Add slide button */}
        {(selected || hovered) && (
          <button
            onClick={addSlide}
            className="absolute bottom-2 right-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors z-20"
            title="Add slide"
          >
            <Plus className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && slideCount > 1 && (
        <div className="flex justify-center space-x-2 mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="w-2 h-2 rounded-full transition-colors"
              style={{
                backgroundColor:
                  index === currentSlide ? activeDotColor : dotColor,
              }}
            />
          ))}
        </div>
      )}

      {/* Empty state */}
      {slideCount === 0 && (
        <div className="flex items-center justify-center h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded">
          <div className="text-center text-gray-500">
            <div className="text-lg font-medium">Carousel Component</div>
            <div className="text-sm mt-1">Add slides via the + button</div>
          </div>
        </div>
      )}

      {/* Floating toolbar */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 z-50">
          <FloatingToolbar
            elementType="container"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {(selected || hovered) && (
        <div className="absolute top-2 left-24 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Carousel ({slideCount} slides)
        </div>
      )}
    </div>
  );
}

Carousel.craft = {
  displayName: "Carousel",
  props: {
    autoplay: false,
    autoplayDelay: 3000,
    infinite: true,
    showDots: true,
    showArrows: true,
    pauseOnHover: true,
    transition: "slide",
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
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
