import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabProps {
  variant?: "default" | "pills" | "underline" | "card";
  orientation?: "horizontal" | "vertical";
  defaultValue?: string;
  tabs: TabItem[];
  backgroundColor?: string;
  activeColor?: string;
  inactiveColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  spacing?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export function Tab({
  variant = "default",
  orientation = "horizontal",
  defaultValue,
  tabs = [
    { id: "tab1", label: "Tab 1", content: "Content for Tab 1" },
    { id: "tab2", label: "Tab 2", content: "Content for Tab 2" },
    { id: "tab3", label: "Tab 3", content: "Content for Tab 3" },
  ],
  backgroundColor = "#ffffff",
  activeColor = "#3b82f6",
  inactiveColor = "#6b7280",
  borderColor = "#e5e7eb",
  borderRadius = "6px",
  padding = "12px",
  margin = "8px",
  spacing = "4px",
  size = "md",
  fullWidth = false,
  children,
}: TabProps) {
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
      "tab",
      {
        variant,
        orientation,
        defaultValue,
        tabs,
        backgroundColor,
        activeColor,
        inactiveColor,
        borderColor,
        borderRadius,
        padding,
        margin,
        spacing,
        size,
        fullWidth,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: TabProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getVariantClasses = () => {
    switch (variant) {
      case "pills":
        return {
          list: "bg-gray-100 p-1 rounded-lg",
          trigger:
            "rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm",
        };
      case "underline":
        return {
          list: "bg-transparent border-b",
          trigger:
            "border-b-2 border-transparent data-[state=active]:border-current rounded-none",
        };
      case "card":
        return {
          list: "bg-white border rounded-t-lg",
          trigger:
            "border-b data-[state=active]:border-b-white data-[state=active]:bg-white rounded-none",
        };
      default:
        return {
          list: "bg-gray-50 rounded-md",
          trigger: "data-[state=active]:bg-white data-[state=active]:shadow-sm",
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "h-8 px-2 text-sm";
      case "lg":
        return "h-12 px-6 text-lg";
      default:
        return "h-10 px-4 text-base";
    }
  };

  const variantClasses = getVariantClasses();
  const sizeClasses = getSizeClasses();

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
      style={{
        margin,
        width: fullWidth ? "100%" : "auto",
      }}
    >
      <Tabs
        defaultValue={defaultValue || tabs[0]?.id}
        orientation={orientation}
        className="w-full"
      >
        <TabsList
          className={`${variantClasses.list} ${
            fullWidth ? "w-full" : "inline-flex"
          }`}
          style={{
            backgroundColor:
              variant === "underline" ? "transparent" : backgroundColor,
            borderColor,
            gap: spacing,
          }}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              value={tab.id}
              className={`${variantClasses.trigger} ${sizeClasses} transition-all`}
              style={
                {
                  borderRadius: variant === "underline" ? "0" : borderRadius,
                  color: inactiveColor,
                  "--active-color": activeColor,
                } as React.CSSProperties
              }
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent
            key={tab.id}
            value={tab.id}
            className="mt-4"
            style={{ padding }}
          >
            {typeof tab.content === "string" ? (
              <div className="text-gray-700">{tab.content}</div>
            ) : (
              tab.content
            )}
          </TabsContent>
        ))}
      </Tabs>

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
          Tab
        </div>
      )}
    </div>
  );
}

Tab.craft = {
  displayName: "Tab",
  props: {
    variant: "default",
    orientation: "horizontal",
    tabs: [
      { id: "tab1", label: "Tab 1", content: "Content for Tab 1" },
      { id: "tab2", label: "Tab 2", content: "Content for Tab 2" },
      { id: "tab3", label: "Tab 3", content: "Content for Tab 3" },
    ],
    backgroundColor: "#ffffff",
    activeColor: "#3b82f6",
    inactiveColor: "#6b7280",
    borderColor: "#e5e7eb",
    borderRadius: "6px",
    padding: "12px",
    margin: "8px",
    spacing: "4px",
    size: "md",
    fullWidth: false,
  },
  related: {
    toolbar: () => <div></div>,
  },
};
