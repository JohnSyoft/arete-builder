import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface GridProps {
  children?: React.ReactNode;
  columns?: number;
  autoRows?: string;
  autoFit?: boolean;
  minColumnWidth?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  padding?: string;
  justifyItems?: "stretch" | "start" | "center" | "end";
  alignItems?: "stretch" | "start" | "center" | "end";
  width?: string;
  height?: string;
}

export function Grid({
  children,
  columns = 3,
  autoRows = "minmax(200px, auto)",
  autoFit = false,
  minColumnWidth = "200px",
  gap = "16px",
  rowGap = "",
  columnGap = "",
  padding = "0px",
  justifyItems = "stretch",
  alignItems = "stretch",
  width = "100%",
  height = "auto",
}: GridProps) {
  console.log({ autoFit });
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
      "grid",
      {
        columns,
        autoRows,
        autoFit,
        minColumnWidth,
        gap,
        rowGap,
        columnGap,
        padding,
        justifyItems,
        alignItems,
        width,
        height,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: GridProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getGridTemplateColumns = () => {
    if (autoFit) {
      return `repeat(auto-fit, minmax(${minColumnWidth}, 1fr))`;
    }
    return `repeat(${columns}, 1fr)`;
  };

  const getGridStyles = () => {
    return {
      display: "grid",
      gridTemplateColumns: getGridTemplateColumns(),
      gridAutoRows: autoRows,
      gap: rowGap && columnGap ? `${rowGap} ${columnGap}` : gap,
      justifyItems,
      alignItems,
      padding,
      width,
      height,
      minHeight: "200px",
    };
  };

  const gridContent = (
    <div
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
      style={getGridStyles()}
    >
      {children || (
        // Show placeholder only when there are no children
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-3 bg-gray-50/50 flex items-center justify-center min-h-[100px] col-span-full text-center text-gray-500 text-sm">
          Grid Container
          <br />
          <span className="text-xs">Drop components here</span>
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

      {/* Label */}
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Grid ({autoFit ? "Auto-fit" : `${columns} cols`})
        </div>
      )}
    </div>
  );

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
    >
      {gridContent}
    </Resizer>
  );
}

Grid.craft = {
  displayName: "Grid",
  props: {
    children: undefined,
    columns: 3,
    autoRows: "minmax(200px, auto)",
    autoFit: false,
    minColumnWidth: "200px",
    gap: "16px",
    rowGap: "",
    columnGap: "",
    padding: "0px",
    justifyItems: "stretch",
    alignItems: "stretch",
    width: "100%",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this grid
};
