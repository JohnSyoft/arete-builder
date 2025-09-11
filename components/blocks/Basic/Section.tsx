import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

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
  padding = "16px",
  margin = "0px",
  // Size properties
  width = "100%",
  height = "auto",
  minHeight = "200px",
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

  // Build dynamic styles
  const sectionStyles: React.CSSProperties = {
    width,
    height: height !== "auto" ? height : undefined,
    minHeight,
    maxHeight: maxHeight !== "none" ? maxHeight : undefined,
    padding,
    margin,
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

  return (
    <section
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${className} ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""}`}
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
        <div
          className={`relative max-w-${contentMaxWidth} mx-auto ${contentPadding}`}
        >
          {children}
        </div>
      ) : (
        children
      )}

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
    </section>
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
    padding: "16px",
    margin: "0px",
    // Size properties
    width: "100%",
    height: "auto",
    minHeight: "200px",
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
