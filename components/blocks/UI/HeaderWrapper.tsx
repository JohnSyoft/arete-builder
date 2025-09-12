import React, { useState, useEffect } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";

interface HeaderWrapperProps {
  children?: React.ReactNode;
  // Flex properties (inherited from Flex)
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  justifyContent?:
    | "start"
    | "center"
    | "end"
    | "between"
    | "around"
    | "evenly"
    | "space-between";
  alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  minHeight?: string;
  padding?: string;
  margin?: string;
  // Advanced flex properties
  flexGrow?: string;
  flexShrink?: string;
  flexBasis?: string;
  order?: string;
  // Overflow control
  overflowX?: "visible" | "hidden" | "scroll" | "auto";
  // Resizer props
  width?: string;
  height?: string;
  // Header-specific properties
  logoUrl?: string;
  logoText?: string;
  navigationItems?: Array<{
    id: string;
    label: string;
    href: string;
    children?: Array<{
      id: string;
      label: string;
      href: string;
    }>;
  }>;
  backgroundColor?: string;
  textColor?: string;
  logoSize?: "small" | "medium" | "large";
  // Always non-editable for header wrapper
  nonEditable?: boolean;
}

export function HeaderWrapper({
  children,
  flexDirection = "row",
  gap = "gap-4",
  justifyContent = "between",
  alignItems = "center",
  wrap = "nowrap",
  minHeight = "min-h-[60px]",
  padding = "px-6 py-4",
  margin = "mb-0",
  flexGrow = "",
  flexShrink = "",
  flexBasis = "",
  order = "",
  overflowX = "visible",
  width = "w-full",
  height = "auto",
  logoUrl = "",
  logoText = "Logo",
  navigationItems = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/about" },
    { id: "contact", label: "Contact", href: "/contact" },
  ],
  backgroundColor = "#ffffff",
  textColor = "#000000",
  logoSize = "medium",
  nonEditable = true,
}: HeaderWrapperProps) {
  const {
    id,
    actions: { setProp },
    connectors: { connect, drag },
    fillSpace,
    nodeWidth,
    nodeHeight,
    parent,
    active,
    inNodeContext,
  } = useNode((node) => ({
    parent: node.data.parent,
    active: node.events.selected,
    nodeWidth: node.data.props.width,
    nodeHeight: node.data.props.height,
    fillSpace: node.data.props.fillSpace,
  }));

  const { isRootNode, parentDirection } = useEditor((state, query) => {
    return {
      parentDirection:
        parent &&
        state.nodes[parent] &&
        state.nodes[parent].data.props.flexDirection,
      isRootNode: query.node(id).isRoot(),
    };
  });

  const { openPanel } = usePropertiesPanelStore();

  const handleShowProperties = () => {
    const props = {
      flexDirection,
      gap,
      justifyContent,
      alignItems,
      wrap,
      minHeight,
      padding,
      margin,
      flexGrow,
      flexShrink,
      flexBasis,
      order,
      overflowX,
      width,
      height,
      logoUrl,
      logoText,
      navigationItems,
      backgroundColor,
      textColor,
      logoSize,
      nonEditable,
    };

    openPanel("headerWrapper", props, id, (newProps) => {
      // Update each prop individually
      Object.keys(newProps).forEach((key) => {
        setProp((prop: any) => (prop[key] = newProps[key]));
      });
    });
  };

  const getFlexDirectionClass = (direction: string) => {
    switch (direction) {
      case "row": return "flex-row";
      case "column": return "flex-col";
      case "row-reverse": return "flex-row-reverse";
      case "column-reverse": return "flex-col-reverse";
      default: return "flex-row";
    }
  };

  const getJustifyClass = (justify: string) => {
    switch (justify) {
      case "start": return "justify-start";
      case "center": return "justify-center";
      case "end": return "justify-end";
      case "between": return "justify-between";
      case "space-between": return "justify-between";
      case "around": return "justify-around";
      case "evenly": return "justify-evenly";
      default: return "justify-between";
    }
  };

  const getAlignClass = (align: string) => {
    switch (align) {
      case "start": return "items-start";
      case "center": return "items-center";
      case "end": return "items-end";
      case "stretch": return "items-stretch";
      case "baseline": return "items-baseline";
      default: return "items-center";
    }
  };

  const getWrapClass = (wrapValue: string) => {
    switch (wrapValue) {
      case "wrap": return "flex-wrap";
      case "wrap-reverse": return "flex-wrap-reverse";
      case "nowrap": return "flex-nowrap";
      default: return "flex-nowrap";
    }
  };

  const getAdvancedFlexClasses = () => {
    let classes = [];
    if (flexGrow) classes.push(flexGrow);
    if (flexShrink) classes.push(flexShrink);
    if (flexBasis) classes.push(flexBasis);
    if (order) classes.push(order);
    return classes.join(" ");
  };

  const getOverflowXClass = (overflow: string) => {
    switch (overflow) {
      case "hidden": return "overflow-x-hidden";
      case "scroll": return "overflow-x-scroll";
      case "auto": return "overflow-x-auto";
      case "visible":
      default: return "overflow-x-visible";
    }
  };

  const getLogoSizeClass = (size: string) => {
    switch (size) {
      case "small": return "h-8";
      case "large": return "h-12";
      case "medium":
      default: return "h-10";
    }
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      fillSpace={fillSpace}
      nodeWidth={nodeWidth}
      nodeHeight={nodeHeight}
      parentDirection={parentDirection}
      isRootNode={isRootNode}
      connect={connect}
      drag={drag}
      className={`
        ${getFlexDirectionClass(flexDirection)}
        ${gap}
        ${getJustifyClass(justifyContent)}
        ${getAlignClass(alignItems)}
        ${getWrapClass(wrap)}
        ${minHeight}
        ${getAdvancedFlexClasses()}
        ${getOverflowXClass(overflowX)}
        ${padding}
        ${margin}
      `}
      style={{
        width: width === "auto" ? "100%" : width,
        height: height === "auto" ? "auto" : height,
        backgroundColor,
        color: textColor,
      }}
    >
      <div
        className={`
          flex items-center justify-between w-full
          ${active ? "ring-2 ring-blue-500 ring-opacity-50" : ""}
          ${inNodeContext ? "ring-2 ring-blue-300 ring-opacity-30" : ""}
        `}
        onClick={(e) => {
          e.stopPropagation();
          handleShowProperties();
        }}
      >
        {/* Logo */}
        <div className="flex items-center">
          {logoUrl ? (
            <img
              src={logoUrl}
              alt={logoText}
              className={`${getLogoSizeClass(logoSize)} w-auto`}
            />
          ) : (
            <div className={`${getLogoSizeClass(logoSize)} flex items-center justify-center bg-gray-200 rounded px-3`}>
              <span className="font-bold text-gray-600">{logoText}</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <div key={item.id} className="relative group">
              <a
                href={item.href}
                className="text-sm font-medium hover:text-blue-600 transition-colors"
                style={{ color: textColor }}
              >
                {item.label}
              </a>
              {item.children && item.children.length > 0 && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {item.children.map((child) => (
                      <a
                        key={child.id}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            style={{ color: textColor }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {active && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="headerWrapper"
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => {}}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}
    </Resizer>
  );
}

HeaderWrapper.craft = {
  displayName: "Header Wrapper",
  props: {
    children: undefined,
    flexDirection: "row",
    gap: "gap-4",
    justifyContent: "between",
    alignItems: "center",
    wrap: "nowrap",
    minHeight: "min-h-[60px]",
    padding: "px-6 py-4",
    margin: "mb-0",
    flexGrow: "",
    flexShrink: "",
    flexBasis: "",
    order: "",
    overflowX: "visible",
    width: "w-full",
    height: "auto",
    logoUrl: "",
    logoText: "Logo",
    navigationItems: [
      { id: "home", label: "Home", href: "/" },
      { id: "about", label: "About", href: "/about" },
      { id: "contact", label: "Contact", href: "/contact" },
    ],
    backgroundColor: "#ffffff",
    textColor: "#000000",
    logoSize: "medium",
    nonEditable: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false, // Don't allow children in editor - it's a header wrapper
    canMoveOut: () => true,
  },
  isCanvas: false, // Not a canvas - it renders header content at runtime
};
