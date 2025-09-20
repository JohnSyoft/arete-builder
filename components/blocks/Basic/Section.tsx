import React, { useEffect } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

export interface SectionProps {
  children?: React.ReactNode;
  nonEditable?: boolean;
  // Background properties
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  backgroundAttachment?: string;
  gradient?: string;
  // Border properties
  borderStyle?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  // Spacing properties
  padding?: string;
  margin?: string;
  // Size properties
  width?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  // Shadow and effects
  boxShadow?: string;
  opacity?: string;
  // Overflow
  overflow?: string;
  // Custom classes
  className?: string;
  // Overlay properties
  hasOverlay?: boolean;
  overlayColor?: string;
  overlayOpacity?: string;
  // Content wrapper properties
  hasContentWrapper?: boolean;
  contentMaxWidth?: string;
  contentPadding?: string;
}

export function Section({
  children,
  nonEditable = false,
  // Background properties
  backgroundColor = "",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  backgroundAttachment = "scroll",
  gradient = "",
  // Border properties
  borderStyle = "solid",
  borderWidth = "0px",
  borderColor = "#e5e7eb",
  borderRadius = "0px",
  // Spacing properties
  padding = "p-4",
  margin = "m-0",
  // Size properties
  width = "100%",
  height = "auto",
  minHeight = "min-h-[200px]",
  maxHeight = "none",
  // Shadow and effects
  boxShadow = "none",
  opacity = "1",
  // Overflow
  overflow = "visible",
  // Custom classes
  className = "",
  // Overlay properties
  hasOverlay = false,
  overlayColor = "#000000",
  overlayOpacity = "0.2",
  // Content wrapper properties
  hasContentWrapper = false,
  contentMaxWidth = "7xl",
  contentPadding = "px-4 sm:px-6 lg:px-8 py-24 lg:py-32",
}: SectionProps) {
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


  const handleShowProperties = () => {
    if (nonEditable) return; // Don't show properties panel for non-editable components
    
    
    openPanel(
      "container",
      {
        backgroundColor,
        backgroundImage,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
        backgroundAttachment,
        gradient,
        borderStyle,
        borderWidth,
        borderColor,
        borderRadius,
        padding,
        margin,
        width,
        height,
        minHeight,
        maxHeight,
        boxShadow,
        opacity,
        overflow,
        hasOverlay,
        overlayColor,
        overlayOpacity,
        hasContentWrapper,
        contentMaxWidth,
        contentPadding,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: SectionProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  // Convert Tailwind classes to CSS values for inline styles
  const getPaddingValue = (paddingClass: string) => {
    const paddingMap: Record<string, string> = {
      "p-0": "0px",
      "p-1": "4px",
      "p-2": "8px", 
      "p-3": "12px",
      "p-4": "16px",
      "p-5": "20px",
      "p-6": "24px",
      "p-8": "32px",
      "p-10": "40px",
      "p-12": "48px",
      "p-16": "64px",
      "p-20": "80px",
      "p-24": "96px",
    };
    return paddingMap[paddingClass] || paddingClass;
  };

  const getMarginValue = (marginClass: string) => {
    const marginMap: Record<string, string> = {
      "m-0": "0px",
      "m-1": "4px",
      "m-2": "8px",
      "m-3": "12px", 
      "m-4": "16px",
      "m-5": "20px",
      "m-6": "24px",
      "m-8": "32px",
      "m-10": "40px",
      "m-12": "48px",
      "m-16": "64px",
      "m-20": "80px",
      "m-24": "96px",
    };
    return marginMap[marginClass] || marginClass;
  };

  const getMinHeightValue = (minHeightClass: string) => {
    if (minHeightClass.startsWith("min-h-[")) {
      return minHeightClass.replace("min-h-[", "").replace("]", "");
    }
    const minHeightMap: Record<string, string> = {
      "min-h-0": "0px",
      "min-h-full": "100%",
      "min-h-screen": "100vh",
      "min-h-min": "min-content",
      "min-h-max": "max-content",
      "min-h-fit": "fit-content",
    };
    return minHeightMap[minHeightClass] || minHeightClass;
  };

  // Build dynamic styles
  const sectionStyles: React.CSSProperties = {
    width,
    height: height !== "auto" ? height : undefined,
    maxHeight: maxHeight !== "none" ? maxHeight : undefined,
    padding: getPaddingValue(padding),
    margin: getMarginValue(margin),
    minHeight: getMinHeightValue(minHeight),
    borderStyle,
    borderWidth,
    borderColor,
    borderRadius,
    boxShadow,
    opacity: parseFloat(opacity),
    overflow,
  };

  // Handle background
  if (gradient && gradient !== "") {
    sectionStyles.background = gradient;
  } else if (backgroundImage && backgroundImage !== "") {
    sectionStyles.backgroundImage = `url(${backgroundImage})`;
    sectionStyles.backgroundSize = backgroundSize;
    sectionStyles.backgroundPosition = backgroundPosition;
    sectionStyles.backgroundRepeat = backgroundRepeat;
    sectionStyles.backgroundAttachment = backgroundAttachment;
    if (backgroundColor && backgroundColor !== "") {
      sectionStyles.backgroundColor = backgroundColor;
    }
  } else if (backgroundColor && backgroundColor !== "") {
    sectionStyles.backgroundColor = backgroundColor;
  }
  // Get max-width class for content wrapper
  const getMaxWidthClass = (maxWidth: string) => {
    const maxWidthMap: Record<string, string> = {
      "none": "max-w-none",
      "xs": "max-w-xs",
      "sm": "max-w-sm",
      "md": "max-w-md",
      "lg": "max-w-lg",
      "xl": "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-7xl",
      "full": "max-w-full",
      "screen-sm": "max-w-screen-sm",
      "screen-md": "max-w-screen-md",
      "screen-lg": "max-w-screen-lg",
      "screen-xl": "max-w-screen-xl",
      "screen-2xl": "max-w-screen-2xl"
    }
    return maxWidthMap[maxWidth] || "max-w-7xl"
  }

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative ${className} ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <section
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
        style={sectionStyles}
      >
        {/* Conditional overlay */}
        {hasOverlay && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: overlayColor,
              opacity: parseFloat(overlayOpacity),
            }}
          />
        )}

        {/* Conditional content wrapper */}
        {hasContentWrapper ? (
          <div className="relative z-20">
            <div className={`${getMaxWidthClass(contentMaxWidth)} mx-auto ${contentPadding}`}>
              {children}
            </div>
          </div>
        ) : (
          <div className="relative z-20">
            {children}
          </div>
        )}
      </section>

      {/* Floating toolbar shown on hover/selection */}
      {!nonEditable && (selected || hovered) && (
        <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-50">
          <FloatingToolbar
            elementType="container"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => {
              actions.delete(id);
            }}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {!nonEditable && (selected || hovered) && (
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded-br z-10">
          Section
        </div>
      )}
    </Resizer>
  );
}

Section.craft = {
  displayName: "Section",
  props: {
    // Background properties
    backgroundColor: "",
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    gradient: "",
    // Border properties
    borderStyle: "solid",
    borderWidth: "0px",
    borderColor: "#e5e7eb",
    borderRadius: "0px",
    // Spacing properties
    padding: "p-4",
    margin: "m-0",
    // Size properties
    width: "100%",
    height: "auto",
    minHeight: "min-h-[200px]",
    maxHeight: "none",
    // Shadow and effects
    boxShadow: "none",
    opacity: "1",
    // Overflow
    overflow: "visible",
    // Custom classes
    className: "",
    // Overlay properties
    hasOverlay: false,
    overlayColor: "#000000",
    overlayOpacity: "0.2",
    // Content wrapper properties
    hasContentWrapper: false,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8 py-24 lg:py-32",
    nonEditable: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
