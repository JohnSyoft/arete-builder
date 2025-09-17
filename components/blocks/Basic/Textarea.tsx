import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

export interface TextareaProps {
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  rows?: number;
  cols?: number;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  resize?: "none" | "both" | "horizontal" | "vertical";
  className?: string;
}

export function Textarea({
  placeholder = "Enter your message...",
  value = "",
  disabled = false,
  rows = 4,
  cols,
  backgroundColor = "#ffffff",
  borderColor = "#d1d5db",
  borderRadius = "0.375rem",
  borderWidth = "1px",
  textColor = "#111827",
  fontSize = "0.875rem",
  fontWeight = "400",
  padding = "0.75rem",
  margin = "",
  width = "100%",
  height = "",
  resize = "vertical",
  className = "",
  ...props
}: TextareaProps) {
  const {
    connectors: { connect, drag },
    actions: { setProp },
    selected,
    isHovered,
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    isHovered: state.events.hovered,
    id: state.id,
  }));

  const { enabled, actions } = useEditor((state, query) => ({
    enabled: state.options.enabled,
    actions: query,
  }));

  const { openPanel } = usePropertiesPanelStore();

  const handleShowProperties = () => {
    openPanel(
      "textarea",
      {
        placeholder,
        value,
        disabled,
        backgroundColor,
        borderColor,
        borderRadius,
        borderWidth,
        textColor,
        fontSize,
        fontWeight,
        padding,
        margin,
        width,
        height,
        rows,
        resize,
        className,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: TextareaProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const handleDelete = () => {
    actions.delete(id);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProp((props: TextareaProps) => (props.value = e.target.value));
  };

  // Create custom styles object for proper styling
  const customStyles = {
    backgroundColor: backgroundColor.startsWith("#")
      ? backgroundColor
      : undefined,
    borderColor: borderColor.startsWith("#") ? borderColor : undefined,
    borderRadius:
      borderRadius.includes("rem") || borderRadius.includes("px")
        ? borderRadius
        : undefined,
    borderWidth: borderWidth.includes("px") ? borderWidth : undefined,
    color: textColor.startsWith("#") ? textColor : undefined,
    fontSize:
      fontSize.includes("rem") || fontSize.includes("px")
        ? fontSize
        : undefined,
    fontWeight: fontWeight,
    padding:
      padding.includes("rem") || padding.includes("px") ? padding : undefined,
    margin:
      margin.includes("rem") || margin.includes("px") ? margin : undefined,
    width:
      width.includes("%") || width.includes("px") || width.includes("rem")
        ? width
        : undefined,
    height:
      height.includes("px") || height.includes("rem") ? height : undefined,
    resize: resize,
  };

  // Fallback classes for Tailwind classes that can't be converted to inline styles
  const fallbackClasses = [];
  if (backgroundColor.startsWith("bg-")) fallbackClasses.push(backgroundColor);
  if (borderColor.startsWith("border-")) fallbackClasses.push(borderColor);
  if (borderRadius.startsWith("rounded")) fallbackClasses.push(borderRadius);
  if (borderWidth === "border") fallbackClasses.push("border");
  if (textColor.startsWith("text-")) fallbackClasses.push(textColor);
  if (fontSize.startsWith("text-")) fallbackClasses.push(fontSize);
  if (fontWeight.startsWith("font-")) fallbackClasses.push(fontWeight);
  if (
    padding.startsWith("p-") ||
    padding.startsWith("px-") ||
    padding.startsWith("py-")
  )
    fallbackClasses.push(padding);
  if (
    margin.startsWith("m-") ||
    margin.startsWith("mx-") ||
    margin.startsWith("my-")
  )
    fallbackClasses.push(margin);
  if (width.startsWith("w-")) fallbackClasses.push(width);
  if (height.startsWith("h-")) fallbackClasses.push(height);

  const combinedClassName = `
    ${fallbackClasses.join(" ")} 
    ${className}
    focus:outline-none 
    focus:ring-2 
    focus:ring-blue-500 
    focus:border-blue-500
    transition-colors
  `.trim();

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative inline-block ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${isHovered ? "ring-1 ring-blue-300" : ""}`}
    >
      <div
        ref={(ref) => {
          if (ref) {
            connect(drag(ref));
          }
        }}
      >
        <textarea
          placeholder={placeholder}
          value={value}
          disabled={disabled || !enabled}
          rows={rows}
          cols={cols}
          onChange={handleChange}
          className={combinedClassName}
          style={customStyles}
          {...props}
        />
      </div>
      {enabled && (selected || isHovered) && (
        <FloatingToolbar
          elementType="text"
          onSettings={handleShowProperties}
          onMove={() => {}}
          onLink={() => {}}
          onDelete={handleDelete}
          position={{ x: 0, y: 0 }}
        />
      )}
    </Resizer>
  );
}

Textarea.craft = {
  displayName: "Textarea",
  props: {
    placeholder: "Enter your message...",
    value: "",
    disabled: false,
    rows: 4,
    backgroundColor: "#ffffff",
    borderColor: "#d1d5db",
    borderRadius: "0.375rem",
    borderWidth: "1px",
    textColor: "#111827",
    fontSize: "0.875rem",
    fontWeight: "400",
    padding: "0.75rem",
    margin: "",
    width: "100%",
    height: "",
    resize: "vertical",
    className: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
