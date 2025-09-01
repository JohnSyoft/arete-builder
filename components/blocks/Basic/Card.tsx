import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface CardProps {
  variant?: "default" | "outlined" | "elevated" | "flat";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  borderRadius?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  hoverable?: boolean;
  clickable?: boolean;
  overflow?: "visible" | "hidden" | "auto" | "scroll";
  children?: React.ReactNode;
}

export function Card({
  variant = "default",
  shadow = "md",
  borderRadius = "8px",
  backgroundColor = "#ffffff",
  borderColor = "#e5e7eb",
  padding = "16px",
  margin = "8px",
  width = "auto",
  height = "auto",
  hoverable = false,
  clickable = false,
  overflow = "hidden",
  children,
}: CardProps) {
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
    openPanel(
      "card",
      {
        variant,
        shadow,
        borderRadius,
        backgroundColor,
        borderColor,
        padding,
        margin,
        height,
        hoverable,
        clickable,
        overflow,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: CardProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "outlined":
        return "border-2";
      case "elevated":
        return "shadow-lg";
      case "flat":
        return "shadow-none border-0";
      default:
        return "border";
    }
  };

  const getShadowClass = (shadowSize: string) => {
    switch (shadowSize) {
      case "none":
        return "shadow-none";
      case "sm":
        return "shadow-sm";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
      case "xl":
        return "shadow-xl";
      default:
        return "shadow-md";
    }
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
      style={{ margin, overflow: "visible" }}
    >
      <div
        className={`
          ${getVariantStyles(variant)}
          ${getShadowClass(shadow)}
          ${
            hoverable
              ? "transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              : ""
          }
          ${clickable ? "cursor-pointer" : ""}
          ${
            !children
              ? "min-h-[200px] border-2 border-dashed border-gray-300 bg-gray-50/50"
              : ""
          }
        `}
        style={{
          backgroundColor,
          borderColor: variant !== "flat" ? borderColor : undefined,
          borderRadius,
          padding,
          width: "100%",
          height: "100%",
          // overflow,
        }}
      >
        {children || (
          <div className="flex items-center justify-center h-full text-center text-gray-500">
            <div>
              <div className="text-lg font-medium">Card Component</div>
              <div className="text-sm mt-1">Add content to this card</div>
            </div>
          </div>
        )}
      </div>

      {(selected || hovered) && (
        <div className="absolute -bottom-12 left-0 z-50">
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
          Card
        </div>
      )}
    </Resizer>
  );
}

Card.craft = {
  displayName: "Card",
  props: {
    variant: "default",
    shadow: "md",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    borderColor: "#e5e7eb",
    padding: "16px",
    margin: "8px",
    width: "auto",
    height: "auto",
    hoverable: false,
    clickable: false,
    overflow: "hidden",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
