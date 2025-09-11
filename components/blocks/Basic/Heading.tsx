import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
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
  // CMS props
  cmsField?: string;
  cmsFieldType?: string;
  cmsFieldId?: string;
  cmsCollectionId?: string;
  cmsFieldLabel?: string;
  // Non-editable prop
  nonEditable?: boolean;
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
  cmsField,
  cmsFieldType,
  cmsFieldId,
  cmsCollectionId,
  cmsFieldLabel,
  nonEditable = false,
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
  const { currentItemData } = useCMSContextStore();

  // Check if this is a CMS field (read-only content) or non-editable
  const isCMSField = !!(cmsField && cmsFieldId && cmsCollectionId);
  const isReadOnly = isCMSField || nonEditable;

  // If this is a CMS field and we have item data, use the CMS data
  const displayText = React.useMemo(() => {
    if (cmsField && currentItemData?.data?.[cmsField]) {
      const value = currentItemData.data[cmsField];

      // Handle different field types
      switch (cmsFieldType) {
        case "date":
          return new Date(value).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
        case "number":
          return String(value);
        case "toggle":
          return value ? "✓ Yes" : "✗ No";
        default:
          return String(value);
      }
    }
    return text;
  }, [cmsField, currentItemData, text, cmsFieldType]);

  const handleShowProperties = () => {
    if (nonEditable) return; // Don't show properties panel for non-editable components
    
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
        // CMS props
        cmsField,
        cmsFieldType,
        cmsFieldId,
        cmsCollectionId,
        cmsFieldLabel,
        // CMS context data for the properties panel
        _cmsContext: {
          currentCollectionId: currentItemData?.collection || null,
          currentItemData,
          projectId: window.location.pathname.split('/')[2], // Extract projectId from URL
        }
      },
      id,
      (newProps) => {
        console.log("Heading onPropsChange called with:", newProps);
        Object.keys(newProps).forEach((key) => {
          if (key !== '_cmsContext') { // Don't update the context data
            setProp((props: HeadingProps) => {
              (props as any)[key] = newProps[key];
            });
          }
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
      case "text-left":
        return "text-left";
      case "center":
      case "text-center":
        return "text-center";
      case "right":
      case "text-right":
        return "text-right";
      case "justify":
      case "text-justify":
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
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      } ${margin}`}
    >
      <HeadingTag
        contentEditable={!isReadOnly}
        suppressContentEditableWarning
        onBlur={isReadOnly ? undefined : (e) => {
          setProp((props: HeadingProps) => {
            props.text = e.target.textContent || "";
          });
        }}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        className={`
          ${getDefaultFontSize(level)}
          ${getDefaultFontWeight(level)}
          ${getTextAlignClass(textAlign)}
          ${textColor}
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
          ${padding}
          outline-none
          min-h-[1.5rem]
          block
        `
          .trim()
          .replace(/\s+/g, " ")}
        style={{ 
          outline: "none", 
          cursor: isReadOnly ? "default" : "text",
          userSelect: isReadOnly ? "none" : "auto"
        }}
        dangerouslySetInnerHTML={{ __html: displayText }}
      />

      {!nonEditable && (selected || hovered) && (
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

      {!nonEditable && (selected || hovered) && (
        <div className={`absolute -top-6 left-0 text-white text-xs px-2 py-1 rounded z-10 ${
          isCMSField ? "bg-green-500" : "bg-blue-500"
        }`}>
          {isCMSField ? `CMS Field: ${cmsFieldLabel || cmsField}` : `H${level} Heading`}
          {isReadOnly && <span className="ml-1 opacity-75">(read-only)</span>}
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
    // CMS props
    cmsField: "",
    cmsFieldType: "",
    cmsFieldId: "",
    cmsCollectionId: "",
    cmsFieldLabel: "",
    // Non-editable prop
    nonEditable: false,
  },
  rules: {
    canDrag: (node) => !node.data.props.nonEditable,
    canMoveIn: (node) => !node.data.props.nonEditable,
    canMoveOut: (node) => !node.data.props.nonEditable,
  },
};
