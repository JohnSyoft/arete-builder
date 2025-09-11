import { useNode, useEditor } from "@craftjs/core";
import React from "react";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { useCMSContextStore } from "@/lib/store/cmsContextStore";
import { Resizer } from "../Resizer";

interface ImageProps {
  src?: string;
  alt?: string;
  width?: string;
  height?: string;
  objectFit?: string;
  borderRadius?: string;
  margin?: string;
  padding?: string;
  // CMS props
  cmsField?: string;
  cmsFieldType?: string;
  cmsFieldId?: string;
  cmsCollectionId?: string;
  cmsFieldLabel?: string;
  // Non-editable prop
  nonEditable?: boolean;
}

export function Image({
  src = "/placeholder.svg?height=200&width=300",
  alt = "Image",
  width = "300px",
  height = "200px",
  objectFit = "object-cover",
  borderRadius = "rounded-lg",
  margin = "my-2",
  padding = "p-0",
  cmsField,
  cmsFieldType,
  cmsFieldId,
  cmsCollectionId,
  cmsFieldLabel,
  nonEditable = false,
}: ImageProps) {
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

  // If this is a CMS field and we have item data, use the CMS data
  const displaySrc = React.useMemo(() => {
    if (cmsField && currentItemData?.data?.[cmsField]) {
      const value = currentItemData.data[cmsField];

      // Handle different field types
      if (cmsFieldType === "image" && value) {
        return value;
      }
      if (cmsFieldType === "gallery" && Array.isArray(value) && value.length > 0) {
        return value[0]; // Use first image from gallery
      }
    }
    return src;
  }, [cmsField, currentItemData, src, cmsFieldType]);

  const displayAlt = React.useMemo(() => {
    if (cmsField && cmsFieldLabel) {
      return `${cmsFieldLabel} image`;
    }
    return alt;
  }, [cmsField, cmsFieldLabel, alt]);

  // Check if this is a CMS field (read-only content)
  const isCMSField = !!(cmsField && cmsFieldId && cmsCollectionId);

  const handleShowProperties = () => {
    openPanel(
      "image",
      {
        src,
        alt,
        width,
        height,
        objectFit,
        borderRadius,
        margin,
        padding,
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
        Object.keys(newProps).forEach((key) => {
          if (key !== '_cmsContext') { // Don't update the context data
            setProp((props: ImageProps) => {
              (props as any)[key] = newProps[key];
            });
          }
        });
      }
    );
  };

  const handleImageClick = () => {
    handleShowProperties();
  };

  const handleAltClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleShowProperties();
  };

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
     
      className={`
        relative 
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
        ${margin}
      `}
    >
      <img
        src={displaySrc}
        alt={displayAlt}
        style={{
          width: "100%",
          height: "100%",
        }}
        className={`
          ${objectFit} 
          ${borderRadius}
          ${padding}
          cursor-pointer
          transition-opacity
          hover:opacity-80
        `}
        onClick={handleImageClick}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src =
            "/placeholder.svg?height=200&width=300&text=Image+Not+Found";
        }}
      />

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="image"
            onEdit={() => handleImageClick()}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => actions.delete(id)}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}

      {/* Alt text edit button */}
      {(selected || hovered) && (
        <>
          <div className={`absolute top-0 left-0 text-white text-xs px-2 py-1 rounded-br z-10 ${
            isCMSField ? "bg-green-500" : "bg-blue-500"
          }`}>
            {isCMSField ? `CMS Field: ${cmsFieldLabel || cmsField}` : "Image"}
            {isCMSField && <span className="ml-1 opacity-75">(read-only)</span>}
          </div>
          <button
            onClick={handleAltClick}
            className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded hover:bg-opacity-70"
          >
            Edit Alt
          </button>
        </>
      )}
    </Resizer>
  );
}

Image.craft = {
  displayName: "Image",
  props: {
    src: "/placeholder.svg?height=200&width=300",
    alt: "Image",
    width: "300px",
    height: "200px",
    objectFit: "object-cover",
    borderRadius: "rounded-lg",
    margin: "my-2",
    padding: "p-0",
    // CMS props
    cmsField: "",
    cmsFieldType: "",
    cmsFieldId: "",
    cmsCollectionId: "",
    cmsFieldLabel: "",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
