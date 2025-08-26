import React from "react";

interface TabPanelRuntimeProps {
  label?: string;
  value?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  padding?: string;
  margin?: string;
  minHeight?: string;
  children?: React.ReactNode;
}

export function TabPanelRuntime({
  label = "Tab Panel",
  value = "panel1",
  backgroundColor = "#ffffff",
  borderColor = "#e5e7eb",
  borderRadius = "6px",
  padding = "16px",
  margin = "0px",
  minHeight = "200px",
  children,
}: TabPanelRuntimeProps) {
  return (
    <div style={{ margin }}>
      <div
        className="border rounded"
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
              <div className="text-sm mt-1">Content goes here</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
