import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface BoxProps {
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  nonEditable?: boolean;
  display?:
    | "block"
    | "flex"
    | "inline-block"
    | "inline-flex"
    | "grid"
    | "inline-grid";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  backgroundImage?: string;
  gradient?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  borderWidth?: string;
  borderStyle?: string;
  children?: React.ReactNode;
}

export function Box({
  backgroundColor = "#ffffff",
  textColor = "#000000",
  padding = "16px",
  margin = "0",
  borderRadius = "0px",
  border = "none",
  borderColor = "#e5e7eb",
  width = "auto",
  height = "auto",
  minHeight = "auto",
  display = "block",
  alignItems = "start",
  justifyContent = "start",
  flexDirection = "row",
  gap = "0",
  backgroundImage = "",
  gradient = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  borderWidth = "0px",
  borderStyle = "solid",
  nonEditable = false,
  children,
}: BoxProps) {
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
        textColor,
        padding,
        margin,
        borderRadius,
        border,
        borderColor,
        width,
        height,
        minHeight,
        display,
        alignItems,
        justifyContent,
        flexDirection,
        gap,
        backgroundImage,
        gradient,
        backgroundSize,
        backgroundPosition,
        borderWidth,
        borderStyle,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: BoxProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getFlexClasses = () => {
    if (display === "flex" || display === "inline-flex") {
      const alignMap = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      };

      const justifyMap = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      };

      const directionMap = {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse",
      };

      return `${alignMap[alignItems]} ${justifyMap[justifyContent]} ${directionMap[flexDirection]}`;
    }
    return "";
  };

  const getDisplayClass = () => {
    const displayMap = {
      block: "block",
      flex: "flex",
      "inline-block": "inline-block",
      "inline-flex": "inline-flex",
      grid: "grid",
      "inline-grid": "inline-grid",
    };
    return displayMap[display];
  };

  const getGapClass = () => {
    if (
      display === "flex" ||
      display === "inline-flex" ||
      display === "grid" ||
      display === "inline-grid"
    ) {
      const gapValue = gap.replace("px", "");
      if (gapValue === "0") return "";
      return `gap-${
        gapValue === "4"
          ? "1"
          : gapValue === "8"
          ? "2"
          : gapValue === "12"
          ? "3"
          : gapValue === "16"
          ? "4"
          : gapValue === "20"
          ? "5"
          : gapValue === "24"
          ? "6"
          : "4"
      }`;
    }
    return "";
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
      style={{
        margin: margin || undefined,
      }}
    >
      <div
        className={`
          ${getDisplayClass()}
          ${getFlexClasses()}
          ${getGapClass()}
          ${
            !children
              ? "border-2 border-dashed border-gray-300 bg-gray-50/50"
              : ""
          }
        `}
        style={{
          backgroundColor: gradient ? undefined : backgroundColor,
          backgroundImage: gradient
            ? gradient
            : backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize:
            backgroundImage || gradient ? backgroundSize : undefined,
          backgroundPosition:
            backgroundImage || gradient ? backgroundPosition : undefined,
          color: textColor,
          padding: padding || undefined,
          borderRadius: borderRadius || undefined,
          border:
            borderWidth && borderWidth !== "0px"
              ? `${borderWidth} ${borderStyle} ${borderColor}`
              : "none",
          width: "100%",
          height: height ?? "100%",
          minHeight: minHeight !== "auto" ? minHeight : undefined,
        }}
      >
        {children}
      </div>

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

      {!nonEditable && (selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Box
        </div>
      )}
    </Resizer>
  );
}

Box.craft = {
  displayName: "Box",
  props: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    padding: "16px",
    margin: "0",
    borderRadius: "0px",
    border: "none",
    borderColor: "#e5e7eb",
    width: "auto",
    height: "auto",
    minHeight: "auto",
    display: "block",
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "row",
    gap: "0",
    backgroundImage: "",
    gradient: "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderWidth: "0px",
    borderStyle: "solid",
    nonEditable: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
