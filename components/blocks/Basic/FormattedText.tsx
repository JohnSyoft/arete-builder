import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import { Resizer } from "../Resizer";

interface FormattedTextProps {
  text?: string;
  content?: string;
  tag?: "p" | "div" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "article" | "section" | "aside" | "blockquote";
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  textAlign?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  lineHeight?: string;
  letterSpacing?: string;
  wordSpacing?: string;
  textDecoration?: string;
  textTransform?: string;
  textShadow?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  borderWidth?: string;
  borderColor?: string;
  borderStyle?: string;
  boxShadow?: string;
  width?: string;
  height?: string;
  maxWidth?: string;
  minWidth?: string;
  maxHeight?: string;
  minHeight?: string;
  opacity?: number;
  visibility?: "visible" | "hidden" | "collapse";
  display?: string;
  position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  zIndex?: number;
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap";
  wordBreak?: "normal" | "break-all" | "break-word" | "keep-all";
  textOverflow?: "clip" | "ellipsis" | "string";
  animation?: string;
  animationDuration?: string;
  animationDelay?: string;
  animationIteration?: string;
  transition?: string;
  transitionDuration?: string;
  transitionTiming?: string;
  transitionDelay?: string;
  hoverColor?: string;
  hoverBackgroundColor?: string;
  hoverTransform?: string;
  hoverScale?: number;
  hoverRotate?: number;
  hoverTranslateX?: string;
  hoverTranslateY?: string;
  hoverOpacity?: number;
  hoverShadow?: string;
  className?: string;
  style?: string;
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
  // CMS props
  cmsField?: string;
  cmsFieldType?: string;
  cmsFieldId?: string;
  cmsCollectionId?: string;
  cmsFieldLabel?: string;
}

export function FormattedText({
  text = "<p>Click to edit formatted text</p>",
  content = "<p>Click to edit formatted text</p>",
  tag = "p",
  fontSize = "text-base",
  fontWeight = "font-normal",
  color = "text-gray-900",
  textAlign = "text-left",
  margin = "my-4",
  padding = "px-0 py-0",
  fontFamily = "",
  lineHeight = "leading-relaxed",
  letterSpacing = "",
  wordSpacing = "",
  textDecoration = "",
  textTransform = "",
  textShadow = "",
  backgroundColor = "",
  borderRadius = "",
  border = "",
  borderWidth = "",
  borderColor = "",
  borderStyle = "",
  boxShadow = "",
  width = "auto",
  height = "auto",
  maxWidth = "none",
  minWidth = "",
  maxHeight = "",
  minHeight = "",
  opacity = 1,
  visibility = "visible",
  display = "",
  position = "static",
  zIndex = 0,
  overflow = "visible",
  whiteSpace = "normal",
  wordBreak = "normal",
  textOverflow = "clip",
  animation = "",
  animationDuration = "1s",
  animationDelay = "0s",
  animationIteration = "1",
  transition = "",
  transitionDuration = "150ms",
  transitionTiming = "ease",
  transitionDelay = "0s",
  hoverColor = "",
  hoverBackgroundColor = "",
  hoverTransform = "",
  hoverScale = 1,
  hoverRotate = 0,
  hoverTranslateX = "",
  hoverTranslateY = "",
  hoverOpacity = 1,
  hoverShadow = "",
  className = "",
  style = "",
  ariaLabel = "",
  role = "",
  tabIndex = 0,
  cmsField,
  cmsFieldType,
  cmsFieldId,
  cmsCollectionId,
  cmsFieldLabel,
}: FormattedTextProps) {
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

  // Check if this is a CMS field (read-only content)
  const isCMSField = !!(cmsField && cmsFieldId && cmsCollectionId);

  // If this is a CMS field and we have item data, use the CMS data
  const displayText = React.useMemo(() => {
    if (cmsField && currentItemData?.data?.[cmsField]) {
      const value = currentItemData.data[cmsField];
      return String(value);
    }
    return text;
  }, [cmsField, currentItemData, text]);

  const handleShowProperties = () => {
    console.log("FormattedText handleShowProperties called", {
      text,
      fontSize,
      fontWeight,
      color,
      textAlign,
      margin,
      padding,
      fontFamily,
      lineHeight,
      letterSpacing,
      backgroundColor,
      borderRadius,
      border,
      width,
      height,
      maxWidth,
      id,
    });
    openPanel(
      "formattedText",
      {
        text,
        fontSize,
        fontWeight,
        color,
        textAlign,
        margin,
        padding,
        fontFamily,
        lineHeight,
        letterSpacing,
        backgroundColor,
        borderRadius,
        border,
        width,
        height,
        maxWidth,
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
        console.log("FormattedText props change callback called", newProps);
        Object.keys(newProps).forEach((key) => {
          if (key !== '_cmsContext') { // Don't update the context data
            setProp((props: FormattedTextProps) => {
              (props as any)[key] = newProps[key];
            });
          }
        });
      }
    );
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group rounded ${
        selected ? "ring-2 ring-blue-500" : ""
      } ${hovered ? "ring-1 ring-blue-300" : ""} ${margin}`}
    >
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e: React.FocusEvent<HTMLDivElement>) => {
          const htmlContent = e.currentTarget.innerHTML;
          setProp((props: FormattedTextProps) => (props.text = htmlContent));
        }}
        className={`
          prose prose-sm max-w-none
          ${fontSize} 
          ${fontWeight} 
          ${color} 
          ${textAlign} 
          ${fontFamily}
          ${lineHeight}
          ${letterSpacing}
          ${backgroundColor}
          ${borderRadius}
          ${border}
          ${padding}
          ${maxWidth !== "none" ? maxWidth : ""}
          ${minWidth}
          ${maxHeight}
          ${minHeight}
          ${display}
          ${position}
          ${overflow}
          ${whiteSpace}
          ${wordBreak}
          ${textOverflow}
          ${className}
          min-h-[2rem]
          focus:outline-none
          [&_p]:my-2
          [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:my-4
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:my-3
          [&_h3]:text-lg [&_h3]:font-bold [&_h3]:my-3
          [&_h4]:text-base [&_h4]:font-bold [&_h4]:my-2
          [&_h5]:text-sm [&_h5]:font-bold [&_h5]:my-2
          [&_h6]:text-sm [&_h6]:font-bold [&_h6]:my-2
          [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:my-2
          [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:my-2
          [&_li]:my-1
          [&_blockquote]:border-l-4 [&_blockquote]:border-gray-300 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-4
          [&_strong]:font-bold
          [&_em]:italic
          [&_a]:text-blue-600 [&_a]:underline
        `
          .trim()
          .replace(/\s+/g, " ")}
        style={{
          outline: "none",
          cursor: "text",
          width: width !== "auto" ? width : undefined,
          height: height !== "auto" ? height : undefined,
          wordSpacing: wordSpacing || undefined,
          textDecoration: textDecoration || undefined,
          textTransform: textTransform || undefined,
          textShadow: textShadow || undefined,
          borderWidth: borderWidth || undefined,
          borderColor: borderColor || undefined,
          borderStyle: borderStyle || undefined,
          boxShadow: boxShadow || undefined,
          opacity: opacity !== 1 ? opacity : undefined,
          visibility: visibility !== "visible" ? visibility : undefined,
          zIndex: zIndex !== 0 ? zIndex : undefined,
          ...(animation && {
            animation: `${animation} ${animationDuration} ${animationDelay} ${animationIteration}`,
          }),
          ...(transition && {
            transition: transition || `all ${transitionDuration} ${transitionTiming} ${transitionDelay}`,
          }),
          ...(style && JSON.parse(style)),
        }}
        dangerouslySetInnerHTML={{ __html: displayText }}
      />

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="formattedText"
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

      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          {cmsField
            ? `Formatted Text (${cmsFieldLabel || cmsField})`
            : "Formatted Text"}
        </div>
      )}
    </Resizer>
  );
}

FormattedText.craft = {
  displayName: "Formatted Text",
  props: {
    text: "<p>Click to edit formatted text</p>",
    content: "<p>Click to edit formatted text</p>",
    tag: "p",
    fontSize: "text-base",
    fontWeight: "font-normal",
    color: "text-gray-900",
    textAlign: "text-left",
    margin: "my-4",
    padding: "px-0 py-0",
    fontFamily: "",
    lineHeight: "leading-relaxed",
    letterSpacing: "",
    wordSpacing: "",
    textDecoration: "",
    textTransform: "",
    textShadow: "",
    backgroundColor: "",
    borderRadius: "",
    border: "",
    borderWidth: "",
    borderColor: "",
    borderStyle: "",
    boxShadow: "",
    width: "auto",
    height: "auto",
    maxWidth: "none",
    minWidth: "",
    maxHeight: "",
    minHeight: "",
    opacity: 1,
    visibility: "visible",
    display: "",
    position: "static",
    zIndex: 0,
    overflow: "visible",
    whiteSpace: "normal",
    wordBreak: "normal",
    textOverflow: "clip",
    animation: "",
    animationDuration: "1s",
    animationDelay: "0s",
    animationIteration: "1",
    transition: "",
    transitionDuration: "150ms",
    transitionTiming: "ease",
    transitionDelay: "0s",
    hoverColor: "",
    hoverBackgroundColor: "",
    hoverTransform: "",
    hoverScale: 1,
    hoverRotate: 0,
    hoverTranslateX: "",
    hoverTranslateY: "",
    hoverOpacity: 1,
    hoverShadow: "",
    className: "",
    style: "",
    ariaLabel: "",
    role: "",
    tabIndex: 0,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
