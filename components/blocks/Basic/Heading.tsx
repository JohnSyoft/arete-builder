import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

export interface HeadingProps {
  text?: string;
  level?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textAlign?: string;
  fontSize?: string;
  fontWeight?: string;
  textColor?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  backgroundColor?: string;
  opacity?: string;
  borderRadius?: string;
  border?: string;
  borderColor?: string;
  shadow?: string;
  width?: string;
  height?: string;
}

export function Heading({
  text = "Enter your heading here",
  level = "h2",
  textAlign = "text-left",
  fontSize = "",
  fontWeight = "",
  textColor = "text-gray-900",
  margin = "my-4",
  padding = "",
  fontFamily = "",
  lineHeight = "",
  letterSpacing = "",
  textTransform = "",
  backgroundColor = "",
  opacity = "",
  borderRadius = "",
  border = "",
  borderColor = "",
  shadow = "",
  width = "auto",
  height = "auto",
}: HeadingProps) {
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
      "heading",
      {
        text,
        level,
        textAlign,
        fontSize,
        fontWeight,
        textColor,
        margin,
        padding,
        fontFamily,
        lineHeight,
        letterSpacing,
        textTransform,
        backgroundColor,
        opacity,
        borderRadius,
        border,
        borderColor,
        shadow,
        width,
        height,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: HeadingProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getDefaultFontSize = (headingLevel: string) => {
    if (fontSize) return fontSize;
    switch (headingLevel) {
      case "h1":
        return "text-4xl md:text-5xl";
      case "h2":
        return "text-3xl md:text-4xl";
      case "h3":
        return "text-2xl md:text-3xl";
      case "h4":
        return "text-xl md:text-2xl";
      case "h5":
        return "text-lg md:text-xl";
      case "h6":
        return "text-base md:text-lg";
      default:
        return "text-2xl";
    }
  };

  const getDefaultFontWeight = (headingLevel: string) => {
    if (fontWeight) return fontWeight;
    switch (headingLevel) {
      case "h1":
        return "font-bold";
      case "h2":
        return "font-bold";
      case "h3":
        return "font-semibold";
      case "h4":
        return "font-semibold";
      case "h5":
        return "font-medium";
      case "h6":
        return "font-medium";
      default:
        return "font-semibold";
    }
  };

  const getTextAlignClass = (align: string) => {
    switch (align) {
      case "left":
        return "text-left";
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      case "justify":
        return "text-justify";
      default:
        return "text-left";
    }
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleShowProperties();
  };

  const headingClasses = `
    ${getDefaultFontSize(level)}
    ${getDefaultFontWeight(level)}
    ${textAlign}
    ${textColor}
    ${margin}
    ${padding}
    ${fontFamily}
    ${lineHeight}
    ${letterSpacing}
    ${textTransform}
    ${backgroundColor}
    ${opacity}
    ${borderRadius}
    ${border}
    ${borderColor}
    ${shadow}
    outline-none
  `.trim();

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      style={{
        margin: margin,
        padding: padding,
        width: width,
        height: height,
      }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      } ${backgroundColor} ${borderRadius} ${border} ${borderColor} ${shadow} ${opacity}`}
    >
      <HeadingTag
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          setProp((props: HeadingProps) => {
            props.text = e.target.textContent || "";
          });
        }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        className={`
          ${getDefaultFontSize(level)}
          ${getDefaultFontWeight(level)}
          ${textAlign}
          ${textColor}
          ${fontFamily}
          ${lineHeight}
          ${letterSpacing}
          ${textTransform}
          outline-none
          min-h-[1.5rem]
          w-full
          h-full
        `
          .trim()
          .replace(/\s+/g, " ")}
        style={{ outline: "none", cursor: "text" }}
        dangerouslySetInnerHTML={{ __html: text }}
      />

      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="text"
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
          H{level} Heading
        </div>
      )}
    </Resizer>
  );
}

Heading.craft = {
  displayName: "Heading",
  props: {
    text: "Enter your heading here",
    level: "h2",
    textAlign: "text-left",
    fontSize: "",
    fontWeight: "",
    textColor: "text-gray-900",
    margin: "my-4",
    padding: "",
    fontFamily: "",
    lineHeight: "",
    letterSpacing: "",
    textTransform: "",
    backgroundColor: "",
    opacity: "",
    borderRadius: "",
    border: "",
    borderColor: "",
    shadow: "",
    width: "auto",
    height: "auto",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};
