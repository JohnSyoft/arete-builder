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
  backgroundColor?: string;
  backgroundType?: "color" | "gradient" | "image";
  backgroundImage?: string;
  backgroundSize?: "cover" | "contain" | "auto";
  backgroundPosition?: string;
  backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
  gradientType?: "linear" | "radial";
  gradientDirection?: string;
  gradientFrom?: string;
  gradientTo?: string;
  gradientVia?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  dotColor?: string;
  activeDotColor?: string;
  arrowColor?: string;
  arrowBackgroundColor?: string;
  slideBackgrounds?: SlideBackground[];
  children?: React.ReactNode;
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
  height = "400px",
  backgroundColor = "#ffffff",
  backgroundType = "color",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center center",
  backgroundRepeat = "no-repeat",
  gradientType = "linear",
  gradientDirection = "to right",
  gradientFrom = "#3b82f6",
  gradientTo = "#8b5cf6",
  gradientVia = "",
  borderRadius = "8px",
  margin = "8px",
  padding = "0px",
  dotColor = "#cbd5e1",
  activeDotColor = "#3b82f6",
  arrowColor = "#ffffff",
  arrowBackgroundColor = "rgba(0, 0, 0, 0.5)",
  slideBackgrounds = [],
  children,
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

  // Convert children to array once at the top level
  const childrenArray = React.Children.toArray(children);
  console.log({ childrenArray });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isPaused, setIsPaused] = useState(false);

  // Initialize slideCount based on children or default to 3
  const initialSlideCount = childrenArray.length > 0 ? childrenArray.length : 3;
  const [slideCount, setSlideCount] = useState(initialSlideCount);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Update slideCount when children change
  useEffect(() => {
    if (childrenArray.length > 0 && childrenArray.length !== slideCount) {
      setSlideCount(childrenArray.length);
      // Also update slideBackgrounds to match the children count
      setProp((props: CarouselProps) => {
        if (
          props.slideBackgrounds &&
          props.slideBackgrounds.length !== childrenArray.length
        ) {
          // Adjust slideBackgrounds array to match children count
          if (props.slideBackgrounds.length < childrenArray.length) {
            // Add more backgrounds if needed
            for (
              let i = props.slideBackgrounds.length;
              i < childrenArray.length;
              i++
            ) {
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
            props.slideBackgrounds = props.slideBackgrounds.slice(
              0,
              childrenArray.length
            );
          }
        }
      });
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
        backgroundColor,
        backgroundType,
        backgroundImage,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
        gradientType,
        gradientDirection,
        gradientFrom,
        gradientTo,
        gradientVia,
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

  const getBackgroundStyle = () => {
    const baseStyle = {
      borderRadius,
      padding,
      height,
    };

    switch (backgroundType) {
      case "gradient":
        const gradientColors = gradientVia
          ? `${gradientFrom}, ${gradientVia}, ${gradientTo}`
          : `${gradientFrom}, ${gradientTo}`;

        if (gradientType === "radial") {
          return {
            ...baseStyle,
            background: `radial-gradient(circle, ${gradientColors})`,
          };
        } else {
          return {
            ...baseStyle,
            background: `linear-gradient(${gradientDirection}, ${gradientColors})`,
          };
        }

      case "image":
        return {
          ...baseStyle,
          backgroundColor: backgroundColor,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize,
          backgroundPosition,
          backgroundRepeat,
        };

      default: // color
        return {
          ...baseStyle,
          backgroundColor,
        };
    }
  };

  const getSlideBackgroundStyle = (slideIndex: number) => {
    const slideBackground = slideBackgrounds[slideIndex];
    if (!slideBackground) {
      return {
        backgroundColor: "#f9fafb",
        borderRadius: "8px",
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
      }`}
      style={{ margin }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden" style={getBackgroundStyle()}>
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
                {/* Slide content container with CraftJS canvas */}
                <Element
                  id={`carousel-slide-${slideIndex}-${id}`}
                  is="div"
                  className="w-full h-full relative"
                  style={getSlideBackgroundStyle(slideIndex)}
                  canvas
                >
                  {/* Render child content for this slide if it exists */}
                  {childrenArray[slideIndex]}
                </Element>

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
    height: "400px",
    backgroundColor: "#ffffff",
    backgroundType: "color",
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    gradientType: "linear",
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
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
