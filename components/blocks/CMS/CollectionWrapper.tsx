import React, { useState, useEffect, useMemo } from "react";
import { useNode, useEditor } from "@craftjs/core";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { Resizer } from "../Resizer";
import { useCollectionItems } from "@/hooks/useCollectionItems";
import { useCollection } from "@/hooks/useCollections";
import { cardComponents, getFieldValue, type CardDesignType } from './CollectionCards';

interface CollectionWrapperProps {
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
  // Collection-specific properties
  collectionId?: string;
  projectId?: string;
  collectionName?: string;
  maxItems?: number;
  cardDesign?: CardDesignType;
  // Field mapping for cards
  titleField?: string;
  descriptionField?: string;
  imageField?: string;
  dateField?: string;
  linkField?: string;
  categoryField?: string;
  authorField?: string;
  priceField?: string;
  ratingField?: string;
  tagsField?: string;
  // Always non-editable for collection wrapper
  nonEditable?: boolean;
}

export function CollectionWrapper({
  children,
  flexDirection = "row",
  gap = "gap-4",
  justifyContent = "start",
  alignItems = "start",
  wrap = "wrap",
  minHeight = "min-h-[200px]",
  padding = "p-4",
  margin = "my-4",
  flexGrow = "",
  flexShrink = "",
  flexBasis = "",
  order = "",
  overflowX = "visible",
  width = "auto",
  height = "auto",
  collectionId = "",
  projectId = "",
  collectionName = "Collection",
  maxItems = 3,
  cardDesign = "default",
  titleField = "title",
  descriptionField = "description",
  imageField = "image",
  dateField = "date",
  linkField = "link",
  categoryField = "category",
  authorField = "author",
  priceField = "price",
  ratingField = "rating",
  tagsField = "tags",
  nonEditable = true, // Always true for collection wrapper
}: CollectionWrapperProps) {
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

  // Fetch collection data for preview in editor
  const { data: collectionData } = useCollection(collectionId);
  const collection = collectionData?.data?.collection;
  
  const { 
    data: itemsData, 
    isLoading: itemsLoading, 
    error: itemsError 
  } = useCollectionItems(collectionId, { limit: maxItems });
  
  const items = itemsData?.items || [];

  const handleShowProperties = () => {
    openPanel(
      "collectionWrapper",
      {
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
        collectionId,
        projectId,
        collectionName,
        maxItems,
        cardDesign,
        titleField,
        descriptionField,
        imageField,
        dateField,
        linkField,
        categoryField,
        authorField,
        priceField,
        ratingField,
        tagsField,
      },
      id,
      (newProps: any) => {
        // Update all props that have changed
        Object.keys(newProps).forEach((key) => {
          setProp((props: CollectionWrapperProps) => {
            (props as any)[key] = newProps[key];
          });
        });
      }
    );
  };

  const getFlexDirectionClass = (direction: string) => {
    switch (direction) {
      case "row":
        return "flex-row";
      case "column":
        return "flex-col";
      case "row-reverse":
        return "flex-row-reverse";
      case "column-reverse":
        return "flex-col-reverse";
      default:
        return "flex-row";
    }
  };

  const getJustifyClass = (justify: string) => {
    switch (justify) {
      case "start":
        return "justify-start";
      case "center":
        return "justify-center";
      case "end":
        return "justify-end";
      case "between":
        return "justify-between";
      case "around":
        return "justify-around";
      case "evenly":
        return "justify-evenly";
      default:
        return "justify-start";
    }
  };

  const getAlignClass = (align: string) => {
    switch (align) {
      case "start":
        return "items-start";
      case "center":
        return "items-center";
      case "end":
        return "items-end";
      case "stretch":
        return "items-stretch";
      case "baseline":
        return "items-baseline";
      default:
        return "items-start";
    }
  };

  const getWrapClass = (wrapValue: string) => {
    switch (wrapValue) {
      case "wrap":
        return "flex-wrap";
      case "wrap-reverse":
        return "flex-wrap-reverse";
      case "nowrap":
        return "flex-nowrap";
      default:
        return "flex-wrap";
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
      case "hidden":
        return "overflow-x-hidden";
      case "scroll":
        return "overflow-x-scroll";
      case "auto":
        return "overflow-x-auto";
      case "visible":
      default:
        return "overflow-x-visible";
    }
  };

  // Memoize editor preview data for better performance
  const editorPreviewItems = useMemo(() => {
    if (!items || items.length === 0) return [];
    
    return items.slice(0, 3).map((item: any) => { // Limit to 3 items for editor preview
      const itemData = item.data || {};
      
      // Parse tags if it's a string
      let tags: string[] = [];
      const tagsValue = getFieldValue(itemData, tagsField);
      if (tagsValue) {
        if (Array.isArray(tagsValue)) {
          tags = tagsValue;
        } else if (typeof tagsValue === 'string') {
          tags = tagsValue.split(',').map(tag => tag.trim()).filter(Boolean);
        }
      }
      
      // Parse rating if it's a string
      let rating: number | undefined;
      const ratingValue = getFieldValue(itemData, ratingField);
      if (ratingValue) {
        const numRating = parseFloat(ratingValue);
        if (!isNaN(numRating)) {
          rating = Math.min(Math.max(numRating, 0), 5);
        }
      }
      
      return {
        item,
        data: {
          title: getFieldValue(itemData, titleField),
          description: getFieldValue(itemData, descriptionField),
          image: getFieldValue(itemData, imageField),
          date: getFieldValue(itemData, dateField),
          link: getFieldValue(itemData, linkField),
          category: getFieldValue(itemData, categoryField),
          author: getFieldValue(itemData, authorField),
          price: getFieldValue(itemData, priceField),
          rating,
          tags,
        }
      };
    });
  }, [items, titleField, descriptionField, imageField, dateField, linkField, categoryField, authorField, priceField, ratingField, tagsField]);

  // Get the card component for the selected design
  const CardComponent = cardComponents[cardDesign] || cardComponents.default;

  // Render collection items in editor preview
  const renderCollectionItems = () => {
    if (itemsLoading) {
      return (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading {collectionName}...</p>
        </div>
      );
    }

    if (itemsError) {
      return (
        <div className="text-center py-8">
          <p className="text-red-600 mb-4">Error loading collection items</p>
        </div>
      );
    }

    if (!items || items.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg">
            No {collectionName.toLowerCase()} items found.
          </p>
        </div>
      );
    }

    return (
      <div className={`
        flex 
        ${getFlexDirectionClass(flexDirection)}
        ${gap} 
        ${getJustifyClass(justifyContent)} 
        ${getAlignClass(alignItems)} 
        ${getWrapClass(wrap)}
        ${getAdvancedFlexClasses()}
        ${getOverflowXClass(overflowX)}
      `}>
        {editorPreviewItems.map(({ item, data }, index) => (
          <CardComponent 
            key={item._id || index}
            item={item}
            index={index}
            data={data}
            className={`
              ${cardDesign === 'timeline' ? 'mb-4' : ''}
              ${cardDesign === 'grid' ? 'w-48' : ''}
              ${cardDesign === 'compact' ? 'w-full max-w-lg' : ''}
              editor-preview-card
            `}
          />
        ))}
      </div>
    );
  };

  const flexDirectionClass = getFlexDirectionClass(flexDirection);
  const justifyClass = getJustifyClass(justifyContent);
  const alignClass = getAlignClass(alignItems);
  const wrapClass = getWrapClass(wrap);
  const advancedClasses = getAdvancedFlexClasses();
  const overflowClass = getOverflowXClass(overflowX);

  return (
    <Resizer
      propKey={{ width: "width", height: "height" }}
      className={`
        relative group 
        ${minHeight}
        flex 
        ${flexDirectionClass}
        ${gap} 
        ${justifyClass} 
        ${alignClass} 
        ${wrapClass}
        ${advancedClasses}
        ${overflowClass}
        ${selected ? "ring-2 ring-blue-500" : ""} 
        ${hovered ? "ring-1 ring-blue-300" : ""}
        ${margin}
        ${padding}
        cms-collection-wrapper
      `}
      style={{
        width: width === "auto" ? "100%" : width,
        height: height === "auto" ? "auto" : height,
      }}
    >
      {/* Collection items preview in editor */}
      <div className="w-full">
        {collectionId ? (
          renderCollectionItems()
        ) : (
          <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
            <div className="text-lg font-semibold text-gray-700 mb-2">
              {collectionName || "Collection"}
            </div>
            <div className="text-sm text-gray-500 mb-4">
              No collection selected
            </div>
            <div className="text-xs text-gray-400">
              Select a collection in the properties panel
            </div>
          </div>
        )}
      </div>

      {/* Floating toolbar */}
      {(selected || hovered) && (
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

      {/* Selection indicator */}
      {(selected || hovered) && (
        <div className="absolute -top-6 left-0 bg-blue-500 text-white text-xs px-2 py-1 rounded z-10">
          Collection: {collectionName || "Unnamed"}
        </div>
      )}
    </Resizer>
  );
}

CollectionWrapper.craft = {
  displayName: "Collection Wrapper",
  props: {
    children: undefined,
    flexDirection: "row",
    gap: "gap-4",
    justifyContent: "start",
    alignItems: "start",
    wrap: "wrap",
    minHeight: "min-h-[200px]",
    padding: "p-4",
    margin: "my-4",
    flexGrow: "",
    flexShrink: "",
    flexBasis: "",
    order: "",
    overflowX: "visible",
    width: "auto",
    height: "auto",
    collectionId: "",
    projectId: "",
    collectionName: "Collection",
    maxItems: 3,
    cardDesign: "default",
    titleField: "title",
    descriptionField: "description",
    imageField: "image",
    dateField: "date",
    linkField: "link",
    categoryField: "category",
    authorField: "author",
    priceField: "price",
    ratingField: "rating",
    tagsField: "tags",
    nonEditable: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false, // Don't allow children in editor - it's a collection wrapper
    canMoveOut: () => true,
  },
  isCanvas: false, // Not a canvas - it renders collection items at runtime
};
