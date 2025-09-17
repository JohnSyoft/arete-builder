import React from "react";
import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface FlexProps {
  children?: React.ReactNode;
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "space-between";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  minHeight?: string;
  padding?: string;
  margin?: string;
  // Advanced flex properties
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  order?: string;
  // Overflow control
  overflowX?: "visible" | "hidden" | "scroll" | "auto";
  // Resizer props
  width?: string;
  height?: string;
  // Non-editable prop for card wrappers
  nonEditable?: boolean;
  // Background styling
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: "cover" | "contain" | "auto" | "100%" | "100% 100%";
  backgroundPosition?: "center" | "top" | "bottom" | "left" | "right" | "top left" | "top right" | "bottom left" | "bottom right";
  backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y";
  // Border styling
  border?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: "solid" | "dashed" | "dotted" | "double" | "none";
  borderRadius?: string;
  // Shadow styling
  boxShadow?: string;
  // Gradient support
  gradient?: string;
  gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl";
  gradientColors?: string;
  // Opacity
  opacity?: number;
}

export function Flex({
  children,
  flexDirection = "row",
  gap = "gap-4",
  justifyContent = "start",
  alignItems = "center",
  wrap = "nowrap",
  minHeight = "min-h-[60px]",
  padding = "p-4",
  margin = "my-4",
  flexGrow = "",
  flexShrink = "",
  flexBasis = "",
  order = "",
  overflowX = "visible",
  width = "auto",
  height = "auto",
  nonEditable = false,
  // Background styling defaults
  backgroundColor = "",
  backgroundImage = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  backgroundRepeat = "no-repeat",
  // Border styling defaults
  border = "",
  borderWidth = "",
  borderColor = "",
  borderStyle = "solid",
  borderRadius = "",
  // Shadow styling defaults
  boxShadow = "",
  // Gradient defaults
  gradient = "",
  gradientDirection = "to-r",
  gradientColors = "",
  // Opacity default
  opacity = 1,
}: FlexProps) {
  console.log({flexDirection,nonEditable})
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
      "flex",
      {
        flexDirection,
        gap,
        justifyContent,
        alignItems,
        wrap,
        minHeight,
        padding,
        margin,
        flexGrow,
        flexShrink,
        flexBasis,
        order,
        overflowX,
        width,
        height,
        backgroundColor,
        backgroundImage,
        backgroundSize,
        backgroundPosition,
        backgroundRepeat,
        border,
        borderWidth,
        borderColor,
        borderStyle,
        borderRadius,
        boxShadow,
        gradient,
        gradientDirection,
        gradientColors,
        opacity,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: FlexProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getFlexDirectionClass = (direction: string) => {
    switch (direction) {
      case "row":
        return "flex-row";
      case "column":
        return "flex-col";
      case "row-reverse":
        return "flex-row-reverse";
      case "column-reverse":
        return "flex-col-reverse";
      default:
        return "flex-row";
    }
  };

  const getJustifyClass = (justify: string) => {
    switch (justify) {
      case "start":
        return "justify-start";
      case "center":
        return "justify-center";
      case "end":
        return "justify-end";
      case "between":
        return "justify-between";
      case "around":
        return "justify-around";
      case "evenly":
        return "justify-evenly";
      default:
        return "justify-start";
    }
  };

  const getAlignClass = (align: string) => {
    switch (align) {
      case "start":
        return "items-start";
      case "center":
        return "items-center";
      case "end":
        return "items-end";
      case "stretch":
        return "items-stretch";
      case "baseline":
        return "items-baseline";
      default:
        return "items-center";
    }
  };

  const getWrapClass = (wrapValue: string) => {
    switch (wrapValue) {
      case "wrap":
        return "flex-wrap";
      case "wrap-reverse":
        return "flex-wrap-reverse";
      case "nowrap":
        return "flex-nowrap";
      default:
        return "flex-nowrap";
    }
  };

  const getAdvancedFlexClasses = () => {
    let classes = [];
    if (flexGrow) classes.push(flexGrow);
    if (flexShrink) classes.push(flexShrink);
    if (flexBasis) classes.push(flexBasis);
    if (order) classes.push(order);
    return classes.join(" ");
  };

  const getOverflowXClass = (overflow: string) => {
    switch (overflow) {
      case "hidden":
        return "overflow-x-hidden";
      case "scroll":
        return "overflow-x-scroll";
      case "auto":
        return "overflow-x-auto";
      case "visible":
      default:
        return "overflow-x-visible";
    }
  };

  // Helper function to get background styles
  const getBackgroundStyles = () => {
    const styles: React.CSSProperties = {};
    
    // Handle gradient background
    if (gradient && gradientColors) {
      const gradientMap: Record<string, string> = {
        "to-r": "to right",
        "to-l": "to left", 
        "to-t": "to top",
        "to-b": "to bottom",
        "to-tr": "to top right",
        "to-tl": "to top left",
        "to-br": "to bottom right",
        "to-bl": "to bottom left",
      };
      const direction = gradientMap[gradientDirection] || "to right";
      styles.background = `linear-gradient(${direction}, ${gradientColors})`;
    } else if (backgroundColor) {
      styles.backgroundColor = backgroundColor;
    }
    
    // Handle background image
    if (backgroundImage) {
      styles.backgroundImage = `url(${backgroundImage})`;
      styles.backgroundSize = backgroundSize;
      styles.backgroundPosition = backgroundPosition;
      styles.backgroundRepeat = backgroundRepeat;
    }
    
    return styles;
  };

  // Helper function to get border styles
  const getBorderStyles = () => {
    const styles: React.CSSProperties = {};
    
    if (border) {
      styles.border = border;
    } else {
      if (borderWidth) styles.borderWidth = borderWidth;
      if (borderColor) styles.borderColor = borderColor;
      if (borderStyle) styles.borderStyle = borderStyle;
    }
    
    if (borderRadius) styles.borderRadius = borderRadius;
    
    return styles;
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        opacity,
        boxShadow: boxShadow || undefined,
        ...getBackgroundStyles(),
        ...getBorderStyles(),
      }}
      className={`
        relative group 
        ${minHeight}
        flex 
        ${getFlexDirectionClass(flexDirection)}
        ${gap} 
        ${getJustifyClass(justifyContent)} 
        ${getAlignClass(alignItems)} 
        ${getWrapClass(wrap)}
        ${getAdvancedFlexClasses()}
        ${getOverflowXClass(overflowX)}
        ${!nonEditable && selected ? "ring-2 ring-blue-500" : ""} 
        ${!nonEditable && hovered ? "ring-1 ring-blue-300" : ""}
        ${margin}
        ${padding}
      `}
    >
      {children}

      {/* Floating toolbar - only show if not non-editable */}
      {!nonEditable && (selected || hovered) && (
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

      {/* Selection indicator - only show if not non-editable */}
      {!nonEditable && (selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-purple-500 text-white text-xs px-2 py-1 rounded z-10">
          Flex {flexDirection}
        </div>
      )}
    </Resizer>
  );
}

Flex.craft = {
  displayName: "Flex",
  props: {
    children: undefined,
    flexDirection: "row",
    gap: "gap-4",
    justifyContent: "start",
    alignItems: "center",
    wrap: "nowrap",
    minHeight: "min-h-[60px]",
    padding: "p-4",
    margin: "my-4",
    flexGrow: "",
    flexShrink: "",
    flexBasis: "",
    order: "",
    overflowX: "visible",
    width: "auto",
    height: "auto",
    nonEditable: false,
    // Background styling defaults
    backgroundColor: "",
    backgroundImage: "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // Border styling defaults
    border: "",
    borderWidth: "",
    borderColor: "",
    borderStyle: "solid",
    borderRadius: "",
    // Shadow styling defaults
    boxShadow: "",
    // Gradient defaults
    gradient: "",
    gradientDirection: "to-r",
    gradientColors: "",
    // Opacity default
    opacity: 1,
  },
  rules: {
    canDrag: (node) => !node.data.props.nonEditable,
    canMoveIn: (node) => !node.data.props.nonEditable,
    canMoveOut: (node) => !node.data.props.nonEditable,
  },
  isCanvas: true, // Allow components to be dropped into this flex container
};
