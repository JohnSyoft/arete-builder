import { Button as UIButton } from "@/components/ui/button";
import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface ButtonProps {
  text?: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  navigationType?: "page" | "url";
  pageSlug?: string;
  href?: string;
  target?: "_self" | "_blank";
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  boxShadow?: string;
  opacity?: string;
  showIcon?: boolean;
  iconType?: "arrow-right" | "arrow-left" | "external-link" | "download" | "play" | "plus" | "check" | "x";
  iconPosition?: "left" | "right";
  hoverEffect?: "none" | "scale" | "translate" | "glow" | "slide";
  transitionDuration?: string;
  nonEditable?: boolean;
  rel?: string;
  projectId?: string;
  // Advanced features
  gradient?: string;
  gradientDirection?: "to-r" | "to-l" | "to-t" | "to-b" | "to-tr" | "to-tl" | "to-br" | "to-bl";
  borderColor?: string;
  borderWidth?: string;
  borderStyle?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  // Advanced hover effects
  hoverBackgroundColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  hoverScale?: number;
  hoverShadow?: string;
  hoverTransform?: string;
  // Animation
  animation?: string;
  animationDuration?: string;
  animationDelay?: string;
  animationIteration?: string;
  animationDirection?: string;
  // Advanced styling
  className?: string;
  fontFamily?: string;
  fontWeight?: string;
  fontSize?: string;
  letterSpacing?: string;
  textTransform?: string;
  textDecoration?: string;
  textAlign?: string;
  // Accessibility
  ariaLabel?: string;
  role?: string;
  tabIndex?: number;
  // Advanced layout
  position?: string;
  zIndex?: string;
  display?: string;
  flex?: string;
  justifyContent?: string;
  alignItems?: string;
  // Visual effects
  filter?: string;
  backdropFilter?: string;
  transform?: string;
  // Interaction
  cursor?: string;
  userSelect?: string;
  pointerEvents?: string;
}

export function Button({
  text = "Click me",
  variant = "default",
  size = "default",
  navigationType = "url",
  pageSlug = "",
  href = "#",
  target = "_self",
  backgroundColor = "",
  textColor = "",
  borderRadius = "",
  margin = "my-2",
  padding = "",
  width = "w-auto",
  height = "h-auto",
  boxShadow = "",
  opacity = "",
  showIcon = false,
  iconType = "arrow-right",
  iconPosition = "right",
  hoverEffect = "none",
  transitionDuration = "300ms",
  rel = "",
  projectId,
  nonEditable = false,
  // Advanced features
  gradient = "",
  gradientDirection = "to-r",
  borderColor = "",
  borderWidth = "",
  borderStyle = "solid",
  disabled = false,
  loading = false,
  loadingText = "Loading...",
  fullWidth = false,
  // Advanced hover effects
  hoverBackgroundColor = "",
  hoverTextColor = "",
  hoverBorderColor = "",
  hoverScale = 1.05,
  hoverShadow = "",
  hoverTransform = "",
  // Animation
  animation = "",
  animationDuration = "1s",
  animationDelay = "0s",
  animationIteration = "1",
  animationDirection = "normal",
  // Advanced styling
  className = "",
  fontFamily = "",
  fontWeight = "",
  fontSize = "",
  letterSpacing = "",
  textTransform = "",
  textDecoration = "",
  textAlign = "",
  // Accessibility
  ariaLabel = "",
  role = "",
  tabIndex,
  // Advanced layout
  position = "",
  zIndex = "",
  display = "",
  flex = "",
  justifyContent = "",
  alignItems = "",
  // Visual effects
  filter = "",
  backdropFilter = "",
  transform = "",
  // Interaction
  cursor = "",
  userSelect = "",
  pointerEvents = "",
}: ButtonProps) {
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

  const getIcon = () => {
    const iconClass = "w-4 h-4 transition-transform group-hover:translate-x-1";
    
    switch (iconType) {
      case "arrow-right":
        return <i className={`fa-solid fa-arrow-right ${iconClass}`}></i>;
      case "arrow-left":
        return <i className={`fa-solid fa-arrow-left ${iconClass}`}></i>;
      case "external-link":
        return <i className={`fa-solid fa-external-link ${iconClass}`}></i>;
      case "download":
        return <i className={`fa-solid fa-download ${iconClass}`}></i>;
      case "play":
        return <i className={`fa-solid fa-play ${iconClass}`}></i>;
      case "plus":
        return <i className={`fa-solid fa-plus ${iconClass}`}></i>;
      case "check":
        return <i className={`fa-solid fa-check ${iconClass}`}></i>;
      case "x":
        return <i className={`fa-solid fa-x ${iconClass}`}></i>;
      default:
        return <i className={`fa-solid fa-arrow-right ${iconClass}`}></i>;
    }
  };

  const getHoverClasses = () => {
    switch (hoverEffect) {
      case "scale":
        return "hover:scale-105";
      case "translate":
        return "hover:-translate-y-1";
      case "glow":
        return "hover:shadow-lg hover:shadow-blue-500/25";
      case "slide":
        return "hover:translate-x-1";
      default:
        return "";
    }
  };

  const handleShowProperties = () => {
    if (nonEditable) return; // Don't show properties panel for non-editable components
    
    openPanel(
      "button",
      {
        text,
        variant,
        size,
        href,
        target,
        backgroundColor,
        textColor,
        borderRadius,
        margin,
        padding,
        width,
        height,
        boxShadow,
        opacity,
        showIcon,
        iconType,
        iconPosition,
        hoverEffect,
        transitionDuration,
        rel,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: ButtonProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const handleHrefClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleShowProperties();
  };

  const customStyles = {
    backgroundColor: gradient ? undefined : (backgroundColor || undefined),
    background: gradient ? `linear-gradient(${gradientDirection}, ${gradient})` : undefined,
    color: textColor || undefined,
    borderRadius: borderRadius || undefined,
    boxShadow: boxShadow || undefined,
    opacity: opacity || undefined,
    transitionDuration: transitionDuration || undefined,
    borderColor: borderColor || undefined,
    borderWidth: borderWidth || undefined,
    borderStyle: borderStyle || undefined,
    fontFamily: fontFamily || undefined,
    fontWeight: fontWeight || undefined,
    fontSize: fontSize || undefined,
    letterSpacing: letterSpacing || undefined,
    textTransform: textTransform || undefined,
    textDecoration: textDecoration || undefined,
    textAlign: textAlign || undefined,
    position: position || undefined,
    zIndex: zIndex || undefined,
    display: display || undefined,
    flex: flex || undefined,
    justifyContent: justifyContent || undefined,
    alignItems: alignItems || undefined,
    filter: filter || undefined,
    backdropFilter: backdropFilter || undefined,
    transform: transform || undefined,
    cursor: cursor || undefined,
    userSelect: userSelect || undefined,
    pointerEvents: pointerEvents || undefined,
    animation: animation ? `${animation} ${animationDuration} ${animationDelay} ${animationIteration} ${animationDirection}` : undefined,
    ...(ariaLabel && { 'aria-label': ariaLabel }),
    ...(role && { role }),
    ...(tabIndex !== undefined && { tabIndex }),
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`
        relative 
        ${margin || ""}
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
      `}
    >
      <a 
        href={href} 
        target={target} 
        rel={rel || undefined}
        className={`
          inline-flex items-center px-8 py-4 font-semibold rounded-full transition-colors group
          ${!gradient ? (backgroundColor || "bg-gray-800") : ""}
          ${textColor || "text-white"}
          ${borderRadius || ""}
          ${padding || ""}
          ${getHoverClasses()}
          ${hoverEffect === "none" ? "hover:bg-gray-700" : ""}
          ${boxShadow || ""}
          ${opacity || ""}
          ${width || ""}
          ${height || ""}
          ${borderColor ? `border-${borderColor}` : ""}
          ${borderWidth ? `border-${borderWidth}` : ""}
          ${borderStyle ? `border-${borderStyle}` : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          ${loading ? "opacity-75 cursor-wait" : ""}
          ${fullWidth ? "w-full" : ""}
          ${hoverBackgroundColor ? `hover:${hoverBackgroundColor}` : ""}
          ${hoverTextColor ? `hover:${hoverTextColor}` : ""}
          ${hoverBorderColor ? `hover:border-${hoverBorderColor}` : ""}
          ${hoverScale !== 1.05 ? `hover:scale-${Math.round(hoverScale * 100)}` : ""}
          ${hoverShadow ? `hover:${hoverShadow}` : ""}
          ${hoverTransform ? `hover:${hoverTransform}` : ""}
          ${animation ? `animate-${animation}` : ""}
          ${fontFamily || ""}
          ${fontWeight || ""}
          ${fontSize || ""}
          ${letterSpacing || ""}
          ${textTransform || ""}
          ${textDecoration || ""}
          ${textAlign || ""}
          ${position || ""}
          ${zIndex || ""}
          ${display || ""}
          ${flex || ""}
          ${justifyContent || ""}
          ${alignItems || ""}
          ${filter || ""}
          ${backdropFilter || ""}
          ${transform || ""}
          ${cursor || ""}
          ${userSelect || ""}
          ${pointerEvents || ""}
          ${className || ""}
        `}
        style={customStyles}
      >
        {showIcon && iconPosition === "left" && !loading && (
          <span className="mr-2">
            {getIcon()}
          </span>
        )}
        {loading && (
          <span className="mr-2">
            <i className="fa-solid fa-spinner animate-spin"></i>
          </span>
        )}
        <span
          contentEditable={!loading}
          suppressContentEditableWarning
          onBlur={(e: React.FocusEvent<HTMLSpanElement>) =>
            setProp(
              (props: ButtonProps) =>
                (props.text = e.currentTarget.textContent || "")
            )
          }
          style={{ outline: "none", cursor: loading ? "wait" : "text" }}
          className="rounded"
          dangerouslySetInnerHTML={{ __html: loading ? loadingText : text }}
        />
        {showIcon && iconPosition === "right" && !loading && (
          <span className="ml-2">
            {getIcon()}
          </span>
        )}
      </a>

      {/* Floating toolbar shown on hover/selection */}
      {!nonEditable && (selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="button"
            onEdit={() => {}}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => handleHrefClick({} as React.MouseEvent)}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {!nonEditable && (selected || hovered) && (
        <>
          <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
            Button
          </div>
          <button
            onClick={handleHrefClick}
            className="absolute -bottom-6 left-0 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-70"
          >
            Edit Link
          </button>
        </>
      )}
    </Resizer>
  );
}

Button.craft = {
  displayName: "Button",
  props: {
    text: "Click me",
    variant: "default",
    size: "default",
    navigationType: "url",
    pageSlug: "",
    href: "#",
    target: "_self",
    backgroundColor: "bg-gray-800",
    textColor: "text-white",
    borderRadius: "rounded-full",
    margin: "my-2",
    padding: "px-8 py-4",
    width: "w-auto",
    height: "h-auto",
    boxShadow: "",
    opacity: "",
    showIcon: true,
    iconType: "arrow-right",
    iconPosition: "right",
    hoverEffect: "none",
    transitionDuration: "300ms",
    rel: "",
    projectId: "",
    nonEditable: false,
    // Advanced features
    gradient: "",
    gradientDirection: "to-r",
    borderColor: "",
    borderWidth: "",
    borderStyle: "solid",
    disabled: false,
    loading: false,
    loadingText: "Loading...",
    fullWidth: false,
    // Advanced hover effects
    hoverBackgroundColor: "",
    hoverTextColor: "",
    hoverBorderColor: "",
    hoverScale: 1.05,
    hoverShadow: "",
    hoverTransform: "",
    // Animation
    animation: "",
    animationDuration: "1s",
    animationDelay: "0s",
    animationIteration: "1",
    animationDirection: "normal",
    // Advanced styling
    className: "",
    fontFamily: "",
    fontWeight: "",
    fontSize: "",
    letterSpacing: "",
    textTransform: "",
    textDecoration: "",
    textAlign: "",
    // Accessibility
    ariaLabel: "",
    role: "",
    tabIndex: undefined,
    // Advanced layout
    position: "",
    zIndex: "",
    display: "",
    flex: "",
    justifyContent: "",
    alignItems: "",
    // Visual effects
    filter: "",
    backdropFilter: "",
    transform: "",
    // Interaction
    cursor: "",
    userSelect: "",
    pointerEvents: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
