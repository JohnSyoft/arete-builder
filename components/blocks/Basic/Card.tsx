import { useNode, useEditor } from "@craftjs/core";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";
import { apiClient } from "@/lib/api/apiClient";

interface CardProps {
  variant?: "default" | "outlined" | "elevated" | "flat";
  shadow?: "none" | "sm" | "md" | "lg" | "xl";
  borderRadius?: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  hoverable?: boolean;
  clickable?: boolean;
  overflow?: "visible" | "hidden" | "auto" | "scroll";
  children?: React.ReactNode;
  nonEditable?: boolean;
  // Navigation props
  onDoubleClick?: () => void;
  collectionId?: string;
  projectId?: string;
  collectionName?: string;
  componentSlug?: string;
}

export function Card({
  variant = "default",
  shadow = "md",
  borderRadius = "8px",
  backgroundColor = "#ffffff",
  borderColor = "#e5e7eb",
  padding = "16px",
  margin = "8px",
  width = "auto",
  height = "auto",
  hoverable = false,
  clickable = false,
  overflow = "hidden",
  children,
  nonEditable = false,
  onDoubleClick,
  collectionId,
  projectId,
  collectionName,
  componentSlug,
}: CardProps) {
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

  const { actions, query } = useEditor();
  const { openPanel } = usePropertiesPanelStore();
  const router = useRouter();
  const [componentLayout, setComponentLayout] = useState<any>(null);
  const [isLoadingComponent, setIsLoadingComponent] = useState(false);
console.log({componentSlug})
  // Fetch component layout when componentSlug is provided
  useEffect(() => {
    if (componentSlug && projectId && !componentLayout) {
      setIsLoadingComponent(true);
      apiClient.get(`/components/slug/${componentSlug}`, {
        params: { projectId }
      })
        .then((response) => {
          if ( response?.data?.component) {
            const component = response.data.component;
            if (component.layout) {
              // Parse layout if it's a string
              const layout = typeof component.layout === 'string' 
                ? JSON.parse(component.layout) 
                : component.layout;
              setComponentLayout(layout);
            }
          }
        })
        .catch((error) => {
          console.error('Error fetching component:', error);
        })
        .finally(() => {
          setIsLoadingComponent(false);
        });
    }
  }, [componentSlug, projectId, componentLayout]);

  const handleDoubleClick = () => {
    // Always allow double-click navigation regardless of nonEditable state
    if (onDoubleClick) {
      onDoubleClick();
    } else if (collectionId && projectId) {
      // Default behavior: navigate to component editor
      // Use provided slug or generate a unique design-specific one
      const slug = componentSlug
      router.push(`/${projectId}/components/${slug}/editor`);
    }
  };

  const handleShowProperties = () => {
    if (nonEditable) return; // Don't show properties panel for non-editable components
    
    openPanel(
      "card",
      {
        variant,
        shadow,
        borderRadius,
        backgroundColor,
        borderColor,
        padding,
        margin,
        height,
        hoverable,
        clickable,
        overflow,
      },
      id,
      (newProps) => {
        Object.keys(newProps).forEach((key) => {
          setProp((props: CardProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case "outlined":
        return "border-2";
      case "elevated":
        return "shadow-lg";
      case "flat":
        return "shadow-none border-0";
      default:
        return "border";
    }
  };

  const getShadowClass = (shadowSize: string) => {
    switch (shadowSize) {
      case "none":
        return "shadow-none";
      case "sm":
        return "shadow-sm";
      case "md":
        return "shadow-md";
      case "lg":
        return "shadow-lg";
      case "xl":
        return "shadow-xl";
      default:
        return "shadow-md";
    }
  };

  // Check if we're in the component editor context
  const isInComponentEditor = () => {
    if (typeof window !== 'undefined') {
      return window.location.pathname.includes('/components/') && window.location.pathname.includes('/editor');
    }
    return false;
  };

  // Render component layout content
  const renderComponentContent = () => {
    if (isLoadingComponent) {
      return (
        <div className="flex items-center justify-center h-32 text-gray-500">
          <div className="text-sm">Loading component...</div>
        </div>
      );
    }

    // If nonEditable is false, render CraftJS children for editing
    if (!nonEditable) {
      return children;
    }

    if (componentLayout && componentSlug) {
      try {
        // Get the main card node from the layout (should be the first child of ROOT)
        const rootNode = componentLayout.ROOT;
        if (rootNode && rootNode.nodes && rootNode.nodes.length > 0) {
          const cardNodeId = rootNode.nodes[0];
          const cardNode = componentLayout[cardNodeId];
          
          if (cardNode && cardNode.nodes && cardNode.nodes.length > 0) {
            // Render the card's children directly as static content for index pages
            return (
              <div className="w-full">
                {cardNode.nodes.map((nodeId: string) => {
                  const node = componentLayout[nodeId];
                  if (!node) return null;
                  
                  return (
                    <div key={nodeId} className="mb-2">
                      {renderNode(node)}
                    </div>
                  );
                })}
              </div>
            );
          }
        }
      } catch (error) {
        console.error('Error rendering component layout:', error);
      }
    }

    return null;
  };

  // Render individual node based on its type
  const renderNode = (node: any) => {
    const { type, props } = node;
    const componentType = type?.resolvedName;

    switch (componentType) {
      case "Heading":
        return (
          <div 
            className={`${props.fontSize || 'text-lg'} ${props.fontWeight || 'font-semibold'} ${props.margin || 'mb-2'}`}
            style={{ color: props.color }}
          >
            {props.text}
          </div>
        );
      
      case "Text":
        return (
          <div 
            className={`${props.fontSize || 'text-sm'} ${props.margin || 'mb-2'}`}
            style={{ color: props.color }}
          >
            {props.text}
          </div>
        );
      
      case "Image":
        return (
          <img
            src={props.src}
            alt={props.alt || ''}
            className={`${props.borderRadius || 'rounded'} ${props.margin || 'mb-2'}`}
            style={{
              width: props.width || '100%',
              height: props.height || 'auto',
              objectFit: props.objectFit || 'cover'
            }}
          />
        );
      
      case "Link":
        return (
          <a
            href={props.href || '#'}
            target={props.target || '_self'}
            className={`${props.fontSize || 'text-sm'} ${props.color || 'text-blue-600'} ${props.margin || 'mb-2'} inline-block`}
            style={{ textDecoration: props.textDecoration }}
          >
            {props.text}
          </a>
        );
      
      case "Badge":
        return (
          <span className={`inline-block px-2 py-1 text-xs rounded ${props.margin || 'mb-2'} ${
            props.variant === 'outline' ? 'border border-gray-300 text-gray-600' : 'bg-gray-200 text-gray-800'
          }`}>
            {props.text}
          </span>
        );
      
      default:
        return (
          <div className={`text-sm text-gray-600 ${props.margin || 'mb-2'}`}>
            {props.text || `Unknown component: ${componentType}`}
          </div>
        );
    }
  };

  const cardContent = (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`
        ${getVariantStyles(variant)}
        ${getShadowClass(shadow)}
        ${
          hoverable
            ? "transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            : ""
        }
          ${clickable ? "cursor-pointer" : ""}
          ${(collectionId || onDoubleClick) ? "cursor-pointer" : ""}
        ${
          !children
            ? "min-h-[200px] border-2 border-dashed border-gray-300 bg-gray-50/50"
            : ""
        }
      `}
      style={{
        backgroundColor,
        borderColor: variant !== "flat" ? borderColor : undefined,
        borderRadius,
        padding,
        width: "100%",
        height: "100%",
        // overflow,
      }}
      onDoubleClick={handleDoubleClick}
    >
      {/* Render component content only when nonEditable is true */}
      {componentSlug && nonEditable ? renderComponentContent() : children}
    </div>
  );

  if (nonEditable) {
    return (
      <div
        className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
          hovered ? "ring-1 ring-blue-300" : ""
        }`}
        style={{ margin, overflow: "visible" }}
      >
        {cardContent}
      </div>
    );
  }

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
      style={{ margin, overflow: "visible" }}
    >
      {cardContent}

      {!nonEditable && (selected || hovered) && (
        <div className="absolute -bottom-12 left-0 z-50">
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
          Card
        </div>
      )}

      {/* Double-click hint for navigation */}
      {(selected || hovered) && (collectionId || onDoubleClick) && (
        <div className="absolute -bottom-6 left-0 bg-gray-600 text-white text-xs px-2 py-1 rounded z-10">
          Double-click to edit component
        </div>
      )}
    </Resizer>
  );
}

Card.craft = {
  displayName: "Card",
  props: {
    variant: "default",
    shadow: "md",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    borderColor: "#e5e7eb",
    padding: "16px",
    margin: "8px",
    width: "auto",
    height: "auto",
    hoverable: false,
    clickable: false,
    overflow: "hidden",
    nonEditable: false,
    onDoubleClick: undefined,
    collectionId: "",
    projectId: "",
    collectionName: "",
    componentSlug: "",
  },
  rules: {
    canDrag: (node) => !node.data.props.nonEditable,
    canMoveIn: (node) => true, // Always allow children to be added
    canMoveOut: (node) => !node.data.props.nonEditable,
  },
};
