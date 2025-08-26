import { useNode, useEditor } from "@craftjs/core";
import React, { useState, useEffect, useRef } from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface CarouselSlide {
  id: string;
  content: React.ReactNode;
  image?: string;
  title?: string;
  description?: string;
}

interface CarouselProps {
  variant?: "image" | "card" | "content" | "testimonial";
  slides: CarouselSlide[];
  autoplay?: boolean;
  autoplayDelay?: number;
  infinite?: boolean;
  showDots?: boolean;
  showArrows?: boolean;
  showThumbnails?: boolean;
  pauseOnHover?: boolean;
  transition?: "slide" | "fade" | "scale";
  transitionDuration?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: {
    mobile: { slidesToShow: number; slidesToScroll: number };
    tablet: { slidesToShow: number; slidesToScroll: number };
    desktop: { slidesToShow: number; slidesToScroll: number };
  };
  height?: string;
  backgroundColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  dotColor?: string;
  activeDotColor?: string;
  arrowColor?: string;
  arrowBackgroundColor?: string;
  thumbnailSize?: string;
  gap?: string;
  children?: React.ReactNode;
}

export function Carousel({
  variant = "image",
  slides = [
    {
      id: "slide1",
      content: "Slide 1 Content",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      title: "Slide 1",
      description: "This is the first slide",
    },
    {
      id: "slide2",
      content: "Slide 2 Content",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      title: "Slide 2",
      description: "This is the second slide",
    },
    {
      id: "slide3",
      content: "Slide 3 Content",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
      title: "Slide 3",
      description: "This is the third slide",
    },
  ],
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleShowProperties = () => {
    openPanel(
      "carousel",
      {
        variant,
        slides,
        autoplay,
        autoplayDelay,
        infinite,
        showDots,
        showArrows,
        showThumbnails,
        pauseOnHover,
        transition,
        transitionDuration,
        slidesToShow,
        slidesToScroll,
        responsive,
        height,
        backgroundColor,
        borderRadius,
        margin,
        padding,
        dotColor,
        activeDotColor,
        arrowColor,
        arrowBackgroundColor,
        thumbnailSize,
        gap,
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

  // Autoplay functionality
  useEffect(() => {
    if (isPlaying && !isPaused && slides.length > 1) {
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
  }, [isPlaying, isPaused, autoplayDelay, currentSlide]);

  const nextSlide = () => {
    if (infinite) {
      setCurrentSlide((prev) => (prev + slidesToScroll) % slides.length);
    } else {
      setCurrentSlide((prev) =>
        Math.min(prev + slidesToScroll, slides.length - slidesToShow)
      );
    }
  };

  const prevSlide = () => {
    if (infinite) {
      setCurrentSlide((prev) =>
        prev - slidesToScroll < 0
          ? slides.length - slidesToShow
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

  const renderSlideContent = (slide: CarouselSlide) => {
    switch (variant) {
      case "image":
        return (
          <div className="w-full h-full">
            <img
              src={
                slide.image ||
                "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop"
              }
              alt={slide.title || "Slide"}
              className="w-full h-full object-cover"
            />
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
                {slide.title && (
                  <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                )}
                {slide.description && (
                  <p className="text-sm opacity-90">{slide.description}</p>
                )}
              </div>
            )}
          </div>
        );
      case "card":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 h-full">
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.title || "Card"}
                className="w-full h-32 object-cover rounded mb-4"
              />
            )}
            {slide.title && (
              <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
            )}
            {slide.description && (
              <p className="text-gray-600 text-sm">{slide.description}</p>
            )}
            {slide.content && <div className="mt-4">{slide.content}</div>}
          </div>
        );
      case "testimonial":
        return (
          <div className="bg-white rounded-lg shadow-md p-8 text-center h-full">
            <div className="text-4xl text-gray-400 mb-4">"</div>
            {slide.description && (
              <p className="text-gray-700 mb-6 italic">{slide.description}</p>
            )}
            {slide.image && (
              <img
                src={slide.image}
                alt={slide.title || "Testimonial"}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
            )}
            {slide.title && (
              <h4 className="font-semibold text-gray-900">{slide.title}</h4>
            )}
          </div>
        );
      default: // content
        return (
          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
            {typeof slide.content === "string" ? (
              <div className="text-center p-8">
                <div className="text-lg font-medium text-gray-800">
                  {slide.content}
                </div>
                {slide.title && (
                  <div className="text-sm text-gray-600 mt-2">
                    {slide.title}
                  </div>
                )}
              </div>
            ) : (
              slide.content
            )}
          </div>
        );
    }
  };

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
      <div
        className="relative overflow-hidden"
        style={{
          backgroundColor,
          borderRadius,
          padding,
          height,
        }}
      >
        {/* Main carousel container */}
        <div className="relative h-full">
          <div
            ref={carouselRef}
            className="flex h-full"
            style={{
              ...getTransitionStyle(),
              gap,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-shrink-0 relative"
                style={{
                  width: `${100 / slidesToShow}%`,
                  display:
                    transition === "fade" && index !== currentSlide
                      ? "none"
                      : "block",
                }}
              >
                {renderSlideContent(slide)}
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        {showArrows && slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
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
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition-opacity opacity-0 group-hover:opacity-100"
              style={{
                backgroundColor: arrowBackgroundColor,
                color: arrowColor,
              }}
              disabled={
                !infinite && currentSlide >= slides.length - slidesToShow
              }
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Autoplay Control */}
        {autoplay && (
          <button
            onClick={togglePlayPause}
            className="absolute top-2 right-2 p-2 rounded-full bg-black/50 text-white transition-opacity opacity-0 group-hover:opacity-100"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      {/* Dots Navigation */}
      {showDots && slides.length > 1 && (
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

      {/* Thumbnails Navigation */}
      {showThumbnails && slides.length > 1 && (
        <div className="flex justify-center space-x-2 mt-4 overflow-x-auto">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 rounded border-2 overflow-hidden transition-opacity ${
                index === currentSlide ? "border-blue-500" : "border-gray-300"
              }`}
              style={{
                width: thumbnailSize,
                height: thumbnailSize,
                opacity: index === currentSlide ? 1 : 0.6,
              }}
            >
              <img
                src={
                  slide.image ||
                  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=60&h=60&fit=crop"
                }
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Empty state */}
      {slides.length === 0 && (
        <div className="flex items-center justify-center h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded">
          <div className="text-center text-gray-500">
            <div className="text-lg font-medium">Carousel Component</div>
            <div className="text-sm mt-1">Add slides via properties panel</div>
          </div>
        </div>
      )}

      {/* Floating toolbar */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
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
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Carousel
        </div>
      )}
    </div>
  );
}

Carousel.craft = {
  displayName: "Carousel",
  props: {
    variant: "image",
    slides: [
      {
        id: "slide1",
        content: "Slide 1 Content",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
        title: "Slide 1",
        description: "This is the first slide",
      },
      {
        id: "slide2",
        content: "Slide 2 Content",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
        title: "Slide 2",
        description: "This is the second slide",
      },
      {
        id: "slide3",
        content: "Slide 3 Content",
        image:
          "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop",
        title: "Slide 3",
        description: "This is the third slide",
      },
    ],
    autoplay: false,
    autoplayDelay: 3000,
    infinite: true,
    showDots: true,
    showArrows: true,
    showThumbnails: false,
    pauseOnHover: true,
    transition: "slide",
    transitionDuration: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: {
      mobile: { slidesToShow: 1, slidesToScroll: 1 },
      tablet: { slidesToShow: 2, slidesToScroll: 1 },
      desktop: { slidesToShow: 3, slidesToScroll: 1 },
    },
    height: "400px",
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    margin: "8px",
    padding: "0px",
    dotColor: "#cbd5e1",
    activeDotColor: "#3b82f6",
    arrowColor: "#ffffff",
    arrowBackgroundColor: "rgba(0, 0, 0, 0.5)",
    thumbnailSize: "60px",
    gap: "16px",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
