import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import { Resizer } from "../Resizer";

interface TextProps {
  text?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
  tagName?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span";
  margin?: string;
  padding?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  textTransform?: string;
  textDecoration?: string;
  backgroundColor?: string;
  textShadow?: string;
  opacity?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
  height?: string;
  // Advanced typography
  wordSpacing?: string;
  textIndent?: string;
  whiteSpace?: string;
  wordBreak?: string;
  textOverflow?: string;
  // Visual effects
  backgroundGradient?: string;
  textGradient?: string;
  boxShadow?: string;
  transform?: string;
  transition?: string;
  // Hover effects
  hoverColor?: string;
  hoverBackgroundColor?: string;
  hoverScale?: number;
  hoverShadow?: string;
  hoverTransform?: string;
  // Animation
  animation?: string;
  animationDuration?: string;
  animationDelay?: string;
  animationIteration?: string;
  animationDirection?: string;
  // Layout
  position?: string;
  zIndex?: string;
  overflow?: string;
  display?: string;
  // Interaction
  cursor?: string;
  userSelect?: string;
  pointerEvents?: string;
  // Accessibility
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
  // CMS props
  cmsField?: string; // Field name to map to
  cmsFieldType?: string; // Type of field (for rendering logic)
  cmsFieldId?: string; // Field ID
  cmsCollectionId?: string; // Collection ID
  cmsFieldLabel?: string; // Human readable label
  // Non-editable prop
  nonEditable?: boolean;
  className?: string;
}

export function Text({
  text = "Click to edit text",
  fontSize = "text-base",
  fontWeight = "font-normal",
  color = "text-gray-900",
  textAlign = "text-left",
  tagName = "p",
  margin = "my-2",
  padding = "px-0 py-0",
  fontFamily = "",
  lineHeight = "",
  letterSpacing = "",
  textTransform = "",
  textDecoration = "",
  backgroundColor = "",
  textShadow = "",
  opacity = "",
  borderRadius = "",
  border = "",
  width = "auto",
  height = "auto",
  // Advanced typography
  wordSpacing = "",
  textIndent = "",
  whiteSpace = "",
  wordBreak = "",
  textOverflow = "",
  // Visual effects
  backgroundGradient = "",
  textGradient = "",
  boxShadow = "",
  transform = "",
  transition = "",
  // Hover effects
  hoverColor = "",
  hoverBackgroundColor = "",
  hoverScale = 1,
  hoverShadow = "",
  hoverTransform = "",
  // Animation
  animation = "",
  animationDuration = "1s",
  animationDelay = "0s",
  animationIteration = "1",
  animationDirection = "normal",
  // Layout
  position = "",
  zIndex = "",
  overflow = "",
  display = "",
  // Interaction
  cursor = "",
  userSelect = "",
  pointerEvents = "",
  // Accessibility
  ariaLabel = "",
  role = "",
  tabIndex,
  // CMS props
  cmsField,
  cmsFieldType,
  cmsFieldId,
  cmsCollectionId,
  cmsFieldLabel,
  // Non-editable prop
  nonEditable = false,
  className = "",
}: TextProps) {
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

  // Debug logging
  console.log("Text Component Debug:", {
    isCMSField,
    cmsProps: { cmsField, cmsFieldType, cmsFieldId, cmsCollectionId, cmsFieldLabel }
  });

  const handleShowProperties = () => {
    if (nonEditable) return; // Don't show properties panel for non-editable components
    
    console.log("Text handleShowProperties called", {
      text,
      tagName,
      fontSize,
      fontWeight,
      color,
      textAlign,
      margin,
      padding,
      fontFamily,
      lineHeight,
      letterSpacing,
      textTransform,
      textDecoration,
      backgroundColor,
      textShadow,
      opacity,
      borderRadius,
      border,
      width,
      height,
      id,
    });
    openPanel(
      "text",
      {
        text,
        tagName,
        fontSize,
        fontWeight,
        color,
        textAlign,
        margin,
        padding,
        fontFamily,
        lineHeight,
        letterSpacing,
        textTransform,
        textDecoration,
        backgroundColor,
        textShadow,
        opacity,
        borderRadius,
        border,
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
        console.log("Text props change callback called", newProps);
        Object.keys(newProps).forEach((key) => {
          if (key !== '_cmsContext') { // Don't update the context data
            setProp((props: TextProps) => {
              (props as any)[key] = newProps[key];
            });
          }
        });
      }
    );
  };

  const Tag = tagName;

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group rounded ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""} ${margin}`}
    >
      <Tag
        contentEditable={!isReadOnly}
        suppressContentEditableWarning
        onBlur={isReadOnly ? undefined : (e: React.FocusEvent<HTMLElement>) =>
          setProp(
            (props: TextProps) =>
              (props.text = e.currentTarget.textContent || "")
          )
        }
        className={`
          ${fontSize} 
          ${fontWeight} 
          ${color} 
          ${textAlign} 
          ${fontFamily}
          ${lineHeight}
          ${letterSpacing}
          ${textTransform}
          ${textDecoration}
          ${backgroundColor}
          ${textShadow}
          ${opacity}
          ${borderRadius}
          ${border}
          ${padding}
          ${wordSpacing}
          ${textIndent}
          ${whiteSpace}
          ${wordBreak}
          ${textOverflow}
          ${boxShadow}
          ${transform}
          ${transition}
          ${position}
          ${zIndex}
          ${overflow}
          ${display}
          ${cursor}
          ${userSelect}
          ${pointerEvents}
          ${className}
          rounded 
          min-h-[1.5rem]
          block
          ${hoverColor ? `hover:${hoverColor}` : ''}
          ${hoverBackgroundColor ? `hover:${hoverBackgroundColor}` : ''}
          ${hoverScale !== 1 ? `hover:scale-${Math.round(hoverScale * 100)}` : ''}
          ${hoverShadow ? `hover:${hoverShadow}` : ''}
          ${hoverTransform ? `hover:${hoverTransform}` : ''}
          ${animation ? `animate-${animation}` : ''}
        `
          .trim()
          .replace(/\s+/g, " ")}
        style={{ 
          outline: "none", 
          cursor: isReadOnly ? "default" : "text",
          userSelect: isReadOnly ? "none" : "auto",
          backgroundGradient: backgroundGradient || undefined,
          textGradient: textGradient || undefined,
          animation: animation ? `${animation} ${animationDuration} ${animationDelay} ${animationIteration} ${animationDirection}` : undefined,
          ...(ariaLabel && { 'aria-label': ariaLabel }),
          ...(role && { role }),
          ...(tabIndex !== undefined && { tabIndex }),
        }}
        dangerouslySetInnerHTML={{ __html: displayText }}
      />

      {/* Floating toolbar shown on hover/selection */}
      {!nonEditable && (selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="text"
            onEdit={() => {}}
            onGenerateAI={() => {}}
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
          {isCMSField ? `CMS Field: ${cmsFieldLabel || cmsField}` : "Text"}
          {isReadOnly && <span className="ml-1 opacity-75">(read-only)</span>}
        </div>
      )}
    </Resizer>
  );
}

Text.craft = {
  displayName: "Text",
  props: {
    text: "Click to edit text",
    fontSize: "text-base",
    fontWeight: "font-normal",
    color: "text-gray-900",
    textAlign: "text-left",
    tagName: "p",
    margin: "my-2",
    padding: "px-0 py-0",
    fontFamily: "",
    lineHeight: "",
    letterSpacing: "",
    textTransform: "",
    textDecoration: "",
    backgroundColor: "",
    textShadow: "",
    opacity: "",
    borderRadius: "",
    border: "",
    width: "auto",
    height: "auto",
    // Advanced typography
    wordSpacing: "",
    textIndent: "",
    whiteSpace: "",
    wordBreak: "",
    textOverflow: "",
    // Visual effects
    backgroundGradient: "",
    textGradient: "",
    boxShadow: "",
    transform: "",
    transition: "",
    // Hover effects
    hoverColor: "",
    hoverBackgroundColor: "",
    hoverScale: 1,
    hoverShadow: "",
    hoverTransform: "",
    // Animation
    animation: "",
    animationDuration: "1s",
    animationDelay: "0s",
    animationIteration: "1",
    animationDirection: "normal",
    // Layout
    position: "",
    zIndex: "",
    overflow: "",
    display: "",
    // Interaction
    cursor: "",
    userSelect: "",
    pointerEvents: "",
    // Accessibility
    ariaLabel: "",
    role: "",
    tabIndex: undefined,
    // CMS props
    cmsField: "",
    cmsFieldType: "",
    cmsFieldId: "",
    cmsCollectionId: "",
    cmsFieldLabel: "",
    // Non-editable prop
    nonEditable: false,
    className: "",
  },

  rules: {
    canDrag: (node) => !node.data.props.nonEditable,
    canMoveIn: (node) => !node.data.props.nonEditable,
    canMoveOut: (node) => !node.data.props.nonEditable,
  },
};
