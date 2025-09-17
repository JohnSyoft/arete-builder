import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";

interface TabPanelProps {
  label?: string;
  value?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  minHeight?: string;
  nonEditable?: boolean;
  children?: React.ReactNode;
}

export function TabPanel({
  label = "Tab Panel",
  value = "panel1",
  backgroundColor = "#ffffff",
  borderColor = "#e5e7eb",
  borderRadius = "6px",
  padding = "16px",
  margin = "0px",
  minHeight = "200px",
  nonEditable = false,
  children,
}: TabPanelProps) {
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
      "tabpanel",
      {
        label,
        value,
        backgroundColor,
        borderColor,
        borderRadius,
        padding,
        margin,
        minHeight,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: TabPanelProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
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
    >
      <div
        className={`
          border rounded
          ${
            !children
              ? "border-2 border-dashed border-gray-300 bg-gray-50/50"
              : ""
          }
        `}
        style={{
          backgroundColor,
          borderColor,
          borderRadius,
          padding,
          minHeight,
        }}
      >
        {children || (
          <div className="flex items-center justify-center h-full text-center text-gray-500">
            <div>
              <div className="text-lg font-medium">Tab Panel: {label}</div>
              <div className="text-sm mt-1">Add content to this tab panel</div>
            </div>
          </div>
        )}
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
          Tab Panel
        </div>
      )}
    </div>
  );
}

TabPanel.craft = {
  displayName: "Tab Panel",
  props: {
    label: "Tab Panel",
    value: "panel1",
    backgroundColor: "#ffffff",
    borderColor: "#e5e7eb",
    borderRadius: "6px",
    padding: "16px",
    margin: "0px",
    minHeight: "200px",
    nonEditable: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this tab panel
};
