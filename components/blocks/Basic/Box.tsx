import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface BoxProps {
  backgroundColor?: string;
  textColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  border?: string;
  borderColor?: string;
  width?: string;
  height?: string;
  minHeight?: string;
  nonEditable?: boolean;
  display?:
    | "block"
    | "flex"
    | "inline-block"
    | "inline-flex"
    | "grid"
    | "inline-grid";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly";
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  backgroundImage?: string;
  gradient?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  borderWidth?: string;
  borderStyle?: string;
  className?: string;
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  hoverScale?: string;
  hoverShadow?: string;
  transitionDuration?: string;
  children?: React.ReactNode;
  // Advanced layout
  position?: string;
  zIndex?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  overflow?: string;
  // Advanced visual effects
  boxShadow?: string;
  textShadow?: string;
  opacity?: string;
  transform?: string;
  filter?: string;
  backdropFilter?: string;
  // Advanced backgrounds
  backgroundAttachment?: string;
  backgroundRepeat?: string;
  backgroundClip?: string;
  // Advanced borders
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderTopLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomLeftRadius?: string;
  borderBottomRightRadius?: string;
  // Advanced hover effects
  hoverOpacity?: string;
  hoverTransform?: string;
  hoverFilter?: string;
  hoverBackdropFilter?: string;
  // Animation
  animation?: string;
  animationDuration?: string;
  animationDelay?: string;
  animationIteration?: string;
  animationDirection?: string;
  animationFillMode?: string;
  animationPlayState?: string;
  // Interaction
  cursor?: string;
  userSelect?: string;
  pointerEvents?: string;
  // Accessibility
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
  // Advanced flexbox
  flex?: string;
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  flexWrap?: string;
  alignContent?: string;
  alignSelf?: string;
  order?: string;
  // Advanced grid
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridTemplateAreas?: string;
  gridColumn?: string;
  gridRow?: string;
  gridArea?: string;
  gridGap?: string;
  gridColumnGap?: string;
  gridRowGap?: string;
  justifyItems?: string;
  alignItems?: string;
  placeItems?: string;
  justifySelf?: string;
  alignSelf?: string;
  placeSelf?: string;
}

export function Box({
  backgroundColor = "#ffffff",
  textColor = "#000000",
  padding = "16px",
  margin = "0",
  borderRadius = "0px",
  border = "none",
  borderColor = "#e5e7eb",
  width = "auto",
  height = "auto",
  minHeight = "auto",
  display = "block",
  alignItems = "start",
  justifyContent = "start",
  flexDirection = "row",
  gap = "0",
  backgroundImage = "",
  gradient = "",
  backgroundSize = "cover",
  backgroundPosition = "center",
  borderWidth = "0px",
  borderStyle = "solid",
  className = "",
  hoverBackgroundColor = "",
  hoverTextColor = "",
  hoverBorderColor = "",
  hoverScale = "1",
  hoverShadow = "",
  transitionDuration = "300ms",
  nonEditable = false,
  children,
  // Advanced layout
  position = "",
  zIndex = "",
  top = "",
  right = "",
  bottom = "",
  left = "",
  overflow = "",
  // Advanced visual effects
  boxShadow = "",
  textShadow = "",
  opacity = "",
  transform = "",
  filter = "",
  backdropFilter = "",
  // Advanced backgrounds
  backgroundAttachment = "",
  backgroundRepeat = "",
  backgroundClip = "",
  // Advanced borders
  borderTop = "",
  borderRight = "",
  borderBottom = "",
  borderLeft = "",
  borderTopLeftRadius = "",
  borderTopRightRadius = "",
  borderBottomLeftRadius = "",
  borderBottomRightRadius = "",
  // Advanced hover effects
  hoverOpacity = "",
  hoverTransform = "",
  hoverFilter = "",
  hoverBackdropFilter = "",
  // Animation
  animation = "",
  animationDuration = "1s",
  animationDelay = "0s",
  animationIteration = "1",
  animationDirection = "normal",
  animationFillMode = "",
  animationPlayState = "",
  // Interaction
  cursor = "",
  userSelect = "",
  pointerEvents = "",
  // Accessibility
  ariaLabel = "",
  role = "",
  tabIndex,
  // Advanced flexbox
  flex = "",
  flexGrow = "",
  flexShrink = "",
  flexBasis = "",
  flexWrap = "",
  alignContent = "",
  alignSelf = "",
  order = "",
  // Advanced grid
  gridTemplateColumns = "",
  gridTemplateRows = "",
  gridTemplateAreas = "",
  gridColumn = "",
  gridRow = "",
  gridArea = "",
  gridGap = "",
  gridColumnGap = "",
  gridRowGap = "",
  justifyItems = "",
  placeItems = "",
  justifySelf = "",
  placeSelf = "",
}: BoxProps) {
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
      "container",
      {
        backgroundColor,
        textColor,
        padding,
        margin,
        borderRadius,
        border,
        borderColor,
        width,
        height,
        minHeight,
        display,
        alignItems,
        justifyContent,
        flexDirection,
        gap,
        backgroundImage,
        gradient,
        backgroundSize,
        backgroundPosition,
        borderWidth,
        borderStyle,
        hoverBackgroundColor,
        hoverTextColor,
        hoverBorderColor,
        hoverScale,
        hoverShadow,
        transitionDuration,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: BoxProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getFlexClasses = () => {
    if (display === "flex" || display === "inline-flex") {
      const alignMap = {
        start: "items-start",
        center: "items-center",
        end: "items-end",
        stretch: "items-stretch",
        baseline: "items-baseline",
      };

      const justifyMap = {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
        between: "justify-between",
        around: "justify-around",
        evenly: "justify-evenly",
      };

      const directionMap = {
        row: "flex-row",
        column: "flex-col",
        "row-reverse": "flex-row-reverse",
        "column-reverse": "flex-col-reverse",
      };

      return `${alignMap[alignItems]} ${justifyMap[justifyContent]} ${directionMap[flexDirection]}`;
    }
    return "";
  };

  const getDisplayClass = () => {
    const displayMap = {
      block: "block",
      flex: "flex",
      "inline-block": "inline-block",
      "inline-flex": "inline-flex",
      grid: "grid",
      "inline-grid": "inline-grid",
    };
    return displayMap[display];
  };

  const getGapClass = () => {
    if (
      display === "flex" ||
      display === "inline-flex" ||
      display === "grid" ||
      display === "inline-grid"
    ) {
      const gapValue = gap.replace("px", "");
      if (gapValue === "0") return "";
      return `gap-${
        gapValue === "4"
          ? "1"
          : gapValue === "8"
          ? "2"
          : gapValue === "12"
          ? "3"
          : gapValue === "16"
          ? "4"
          : gapValue === "20"
          ? "5"
          : gapValue === "24"
          ? "6"
          : "4"
      }`;
    }
    return "";
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
      style={{
        margin: margin || undefined,
      }}
    >
      <div
        className={`
          ${getDisplayClass()}
          ${getFlexClasses()}
          ${getGapClass()}
          ${className}
          ${position}
          ${zIndex}
          ${overflow}
          ${boxShadow}
          ${textShadow}
          ${opacity}
          ${transform}
          ${filter}
          ${backdropFilter}
          ${backgroundAttachment}
          ${backgroundRepeat}
          ${backgroundClip}
          ${borderTop}
          ${borderRight}
          ${borderBottom}
          ${borderLeft}
          ${borderTopLeftRadius}
          ${borderTopRightRadius}
          ${borderBottomLeftRadius}
          ${borderBottomRightRadius}
          ${cursor}
          ${userSelect}
          ${pointerEvents}
          ${flex}
          ${flexGrow}
          ${flexShrink}
          ${flexBasis}
          ${flexWrap}
          ${alignContent}
          ${alignSelf}
          ${order}
          ${gridTemplateColumns}
          ${gridTemplateRows}
          ${gridTemplateAreas}
          ${gridColumn}
          ${gridRow}
          ${gridArea}
          ${gridGap}
          ${gridColumnGap}
          ${gridRowGap}
          ${justifyItems}
          ${placeItems}
          ${justifySelf}
          ${placeSelf}
          transition-all duration-300 ease-in-out
          hover:scale-${hoverScale === "1.05" ? "105" : hoverScale === "1.1" ? "110" : hoverScale === "1.15" ? "115" : "100"}
          ${hoverShadow && hoverShadow !== "none" ? `hover:${hoverShadow}` : ""}
          ${hoverOpacity ? `hover:${hoverOpacity}` : ""}
          ${hoverTransform ? `hover:${hoverTransform}` : ""}
          ${hoverFilter ? `hover:${hoverFilter}` : ""}
          ${hoverBackdropFilter ? `hover:${hoverBackdropFilter}` : ""}
          ${animation ? `animate-${animation}` : ""}
          ${
            !children
              ? "border-2 border-dashed border-gray-300 bg-gray-50/50"
              : ""
          }
        `}
        style={{
          backgroundColor: gradient ? undefined : backgroundColor,
          backgroundImage: gradient
            ? gradient
            : backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize:
            backgroundImage || gradient ? backgroundSize : undefined,
          backgroundPosition:
            backgroundImage || gradient ? backgroundPosition : undefined,
          backgroundAttachment: backgroundAttachment || undefined,
          backgroundRepeat: backgroundRepeat || undefined,
          backgroundClip: backgroundClip || undefined,
          color: textColor,
          padding: padding || undefined,
          borderRadius: borderRadius || undefined,
          border:
            borderWidth && borderWidth !== "0px"
              ? `${borderWidth} ${borderStyle} ${borderColor}`
              : "none",
          width: "100%",
          height: height ?? "100%",
          minHeight: minHeight !== "auto" ? minHeight : undefined,
          transitionDuration: transitionDuration || "300ms",
          // Advanced layout
          position: position || undefined,
          zIndex: zIndex || undefined,
          top: top || undefined,
          right: right || undefined,
          bottom: bottom || undefined,
          left: left || undefined,
          overflow: overflow || undefined,
          // Advanced visual effects
          boxShadow: boxShadow || undefined,
          textShadow: textShadow || undefined,
          opacity: opacity || undefined,
          transform: transform || undefined,
          filter: filter || undefined,
          backdropFilter: backdropFilter || undefined,
          // Animation
          animation: animation ? `${animation} ${animationDuration} ${animationDelay} ${animationIteration} ${animationDirection}` : undefined,
          animationFillMode: animationFillMode || undefined,
          animationPlayState: animationPlayState || undefined,
          // Advanced flexbox
          flex: flex || undefined,
          flexGrow: flexGrow || undefined,
          flexShrink: flexShrink || undefined,
          flexBasis: flexBasis || undefined,
          flexWrap: flexWrap || undefined,
          alignContent: alignContent || undefined,
          alignSelf: alignSelf || undefined,
          order: order || undefined,
          // Advanced grid
          gridTemplateColumns: gridTemplateColumns || undefined,
          gridTemplateRows: gridTemplateRows || undefined,
          gridTemplateAreas: gridTemplateAreas || undefined,
          gridColumn: gridColumn || undefined,
          gridRow: gridRow || undefined,
          gridArea: gridArea || undefined,
          gridGap: gridGap || undefined,
          gridColumnGap: gridColumnGap || undefined,
          gridRowGap: gridRowGap || undefined,
          justifyItems: justifyItems || undefined,
          placeItems: placeItems || undefined,
          justifySelf: justifySelf || undefined,
          placeSelf: placeSelf || undefined,
          // Hover effects
          "--hover-bg": hoverBackgroundColor || backgroundColor,
          "--hover-text": hoverTextColor || textColor,
          "--hover-border": hoverBorderColor || borderColor,
          // Accessibility
          ...(ariaLabel && { 'aria-label': ariaLabel }),
          ...(role && { role }),
          ...(tabIndex !== undefined && { tabIndex }),
        } as React.CSSProperties & {
          "--hover-bg": string;
          "--hover-text": string;
          "--hover-border": string;
        }}
        onMouseEnter={(e) => {
          if (hoverBackgroundColor) {
            e.currentTarget.style.backgroundColor = hoverBackgroundColor;
          }
          if (hoverTextColor) {
            e.currentTarget.style.color = hoverTextColor;
          }
          if (hoverBorderColor && borderWidth !== "0px") {
            e.currentTarget.style.borderColor = hoverBorderColor;
          }
        }}
        onMouseLeave={(e) => {
          if (hoverBackgroundColor) {
            e.currentTarget.style.backgroundColor = gradient ? undefined : backgroundColor;
          }
          if (hoverTextColor) {
            e.currentTarget.style.color = textColor;
          }
          if (hoverBorderColor && borderWidth !== "0px") {
            e.currentTarget.style.borderColor = borderColor;
          }
        }}
      >
        {children}
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
          Box
        </div>
      )}
    </Resizer>
  );
}

Box.craft = {
  displayName: "Box",
  props: {
    backgroundColor: "#ffffff",
    textColor: "#000000",
    padding: "16px",
    margin: "0",
    borderRadius: "0px",
    border: "none",
    borderColor: "#e5e7eb",
    width: "auto",
    height: "auto",
    minHeight: "auto",
    display: "block",
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "row",
    gap: "0",
    backgroundImage: "",
    gradient: "",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderWidth: "0px",
    borderStyle: "solid",
    className: "",
    hoverBackgroundColor: "",
    hoverTextColor: "",
    hoverBorderColor: "",
    hoverScale: "1",
    hoverShadow: "none",
    transitionDuration: "300ms",
    nonEditable: false,
    // Advanced layout
    position: "",
    zIndex: "",
    top: "",
    right: "",
    bottom: "",
    left: "",
    overflow: "",
    // Advanced visual effects
    boxShadow: "",
    textShadow: "",
    opacity: "",
    transform: "",
    filter: "",
    backdropFilter: "",
    // Advanced backgrounds
    backgroundAttachment: "",
    backgroundRepeat: "",
    backgroundClip: "",
    // Advanced borders
    borderTop: "",
    borderRight: "",
    borderBottom: "",
    borderLeft: "",
    borderTopLeftRadius: "",
    borderTopRightRadius: "",
    borderBottomLeftRadius: "",
    borderBottomRightRadius: "",
    // Advanced hover effects
    hoverOpacity: "",
    hoverTransform: "",
    hoverFilter: "",
    hoverBackdropFilter: "",
    // Animation
    animation: "",
    animationDuration: "1s",
    animationDelay: "0s",
    animationIteration: "1",
    animationDirection: "normal",
    animationFillMode: "",
    animationPlayState: "",
    // Interaction
    cursor: "",
    userSelect: "",
    pointerEvents: "",
    // Accessibility
    ariaLabel: "",
    role: "",
    tabIndex: undefined,
    // Advanced flexbox
    flex: "",
    flexGrow: "",
    flexShrink: "",
    flexBasis: "",
    flexWrap: "",
    alignContent: "",
    alignSelf: "",
    order: "",
    // Advanced grid
    gridTemplateColumns: "",
    gridTemplateRows: "",
    gridTemplateAreas: "",
    gridColumn: "",
    gridRow: "",
    gridArea: "",
    gridGap: "",
    gridColumnGap: "",
    gridRowGap: "",
    justifyItems: "",
    placeItems: "",
    justifySelf: "",
    placeSelf: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true,
};
