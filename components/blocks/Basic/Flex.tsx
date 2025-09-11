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
}: FlexProps) {
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

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      // style={{
      //   margin: margin,
      //   padding: padding,
      // }}
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
  },
  rules: {
    canDrag: (node) => !node.data.props.nonEditable,
    canMoveIn: (node) => !node.data.props.nonEditable,
    canMoveOut: (node) => !node.data.props.nonEditable,
  },
  isCanvas: true, // Allow components to be dropped into this flex container
};
