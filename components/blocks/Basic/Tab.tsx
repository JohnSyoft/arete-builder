import { useNode, useEditor, Element } from "@craftjs/core";
import React, { useState } from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Tab Content Container Component
const TabContentContainer = ({ children, label }: { children?: React.ReactNode; label: string }) => {
  const { connectors: { connect, drag } } = useNode();
  
  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`min-h-[200px] rounded-lg p-4 ${
        !children || (Array.isArray(children) && children.length === 0)
          ? "border-2 border-dashed border-gray-300 bg-gray-50/30"
          : "border border-gray-200 bg-transparent"
      }`}
    >
      {!children || (Array.isArray(children) && children.length === 0) ? (
        <div className="text-center text-gray-500 text-sm">
          Drop components here for {label}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

TabContentContainer.craft = {
  displayName: "Tab Content",
  rules: {
    canDrag: () => false,
    canDelete: () => false,
    canMoveIn: () => true,
    canMoveOut: () => false,
  },
};

// Export the TabContentContainer for use in the component resolver
export { TabContentContainer };

interface TabItem {
  id: string;
  label: string;
}

interface TabProps {
  variant?: "default" | "pills" | "underline" | "card";
  orientation?: "horizontal" | "vertical";
  defaultValue?: string;
  tabLabels?: string[];
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
  nonEditable?: boolean;
  children?: React.ReactNode;
}

export function Tab({
  variant = "default",
  orientation = "horizontal",
  defaultValue,
  tabLabels = ["Tab 1", "Tab 2", "Tab 3"],
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
  nonEditable = false,
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
    if (nonEditable) return; // Don't show properties panel for non-editable components
    
    openPanel(
      "tab",
      {
        variant,
        orientation,
        defaultValue,
        tabLabels,
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
  
  // Track active tab for styling
  const [activeTab, setActiveTab] = useState(defaultValue || `tab-1`);

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
        value={activeTab}
        onValueChange={setActiveTab}
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
          {tabLabels.map((label, index) => {
            const tabValue = `tab-${index + 1}`;
            const isActive = activeTab === tabValue;
            
            return (
              <TabsTrigger
                key={tabValue}
                value={tabValue}
                className={`${variantClasses.trigger} ${sizeClasses} transition-all`}
                style={{
                  borderRadius: variant === "underline" ? "0" : borderRadius,
                  color: isActive ? activeColor : inactiveColor,
                  borderColor: variant === "underline" 
                    ? (isActive ? activeColor : "transparent")
                    : borderColor,
                  borderBottomColor: variant === "underline" && isActive ? activeColor : undefined,
                  backgroundColor: isActive && variant === "pills" ? "#ffffff" : undefined,
                  boxShadow: isActive && variant === "pills" ? "0 1px 3px 0 rgb(0 0 0 / 0.1)" : undefined,
                }}
              >
                {label}
              </TabsTrigger>
            );
          })}
        </TabsList>

        {tabLabels.map((label, index) => (
          <TabsContent
            key={`tab-${index + 1}`}
            value={`tab-${index + 1}`}
            className="mt-4"
            style={{ padding }}
          >
            <Element
              id={`tab-content-${index + 1}`}
              is={TabContentContainer}
              label={label}
              canvas
            />
          </TabsContent>
        ))}
      </Tabs>

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
    tabLabels: ["Tab 1", "Tab 2", "Tab 3"],
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
    nonEditable: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into tab content areas
};
