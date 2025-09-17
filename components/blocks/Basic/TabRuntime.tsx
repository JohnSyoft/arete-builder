import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Tab Content Container Runtime Component
export const TabContentContainerRuntime = ({ children, label }: { children?: React.ReactNode; label: string }) => {
  return (
    <div className="min-h-[200px] rounded-lg p-4 border border-gray-200 bg-transparent">
      {children}
    </div>
  );
};

interface TabRuntimeProps {
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

export function TabRuntime({
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
}: TabRuntimeProps) {
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

        {tabLabels.map((label, index) => {
          // Extract the content for this specific tab
          // Children should be an array of TabContentContainer components
          const tabContent = Array.isArray(children) ? children[index] : (index === 0 ? children : null);
          
          return (
            <TabsContent
              key={`tab-${index + 1}`}
              value={`tab-${index + 1}`}
              className="mt-4"
              style={{ padding }}
            >
              <div className="min-h-[200px] rounded-lg p-4">
                {tabContent}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
