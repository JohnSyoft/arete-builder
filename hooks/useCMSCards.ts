import { useCollectionItems } from "@/hooks/useCollectionItems";
import { useCollection } from "@/hooks/useCollections";
import { useMemo } from "react";

// CMS Data Provider Hook for Card Components
export const useCMSCardData = (
  collectionId: string,
  fieldMappings: any,
  options: {
    itemsToShow?: number;
    status?: "published" | "draft" | "archived";
    sortBy?: string;
    sortOrder?: "asc" | "desc";
  } = {}
) => {
  const { itemsToShow = 6, status = "published", sortBy = "createdAt", sortOrder = "desc" } = options;

  // Get collection schema
  const { data: collectionResponse } = useCollection(collectionId);
  const collection = collectionResponse?.collection;

  // Get collection items
  const { data: itemsResponse, isLoading, error } = useCollectionItems(collectionId, {
    limit: itemsToShow,
    status,
    sortBy,
    sortOrder,
    populate: true, // Populate reference fields
  });
  
  console.log("useCMSCardData - Raw itemsResponse:", itemsResponse);
  const items = itemsResponse?.items || [];

  // Transform items based on field mappings - memoized to update when dependencies change
  const transformedItems = useMemo(() => {
    console.log("=== useCMSCardData Transform Debug ===");
    console.log("Collection ID:", collectionId);
    console.log("Field Mappings:", fieldMappings);
    console.log("Raw items to transform:", items);
    console.log("Items length:", items?.length || 0);
    
    if (!items || items.length === 0) {
      console.log("useCMSCardData - No items to transform");
      return [];
    }

    const transformed = items.map((item: any, index: number) => {
      console.log(`useCMSCardData - Transforming item ${index}:`, item);
      console.log(`useCMSCardData - Item data:`, item.data);
      const transformedItem: any = {};

      // Map each field based on fieldMappings configuration
      Object.entries(fieldMappings).forEach(([targetField, sourceField]) => {
        if (typeof sourceField === "string") {
          // Access nested data
          const value = item.data?.[sourceField];
          console.log(`useCMSCardData - Mapping ${sourceField} -> ${targetField}:`, value);
          if (value !== undefined) {
            transformedItem[targetField] = value;
          }
        }
      });

      // Add metadata
      transformedItem.id = item._id;
      transformedItem.slug = item.slug;
      transformedItem.status = item.status;
      transformedItem.createdAt = item.createdAt;
      transformedItem.updatedAt = item.updatedAt;

      console.log("useCMSCardData - Final transformed item:", transformedItem);
      return transformedItem;
    });

    console.log("useCMSCardData - All transformed items:", transformed);
    console.log("=====================================");
    return transformed;
  }, [items, fieldMappings]); // Re-transform when items or fieldMappings change

  return {
    items: transformedItems,
    collection,
    isLoading,
    error,
    totalItems: itemsResponse?.pagination?.totalItems || 0,
  };
};

// Helper function to auto-detect field mappings
export const autoDetectFieldMappings = (collectionFields: any[]) => {
  const mappings: any = {};

  collectionFields.forEach((field) => {
    const fieldName = field.name.toLowerCase();
    const fieldType = field.type;

    // Auto-map based on common field names and types
    if (fieldName.includes("title") || fieldName.includes("name")) {
      mappings.title = field.name;
    } else if (fieldName.includes("excerpt") || fieldName.includes("description") || fieldName.includes("summary")) {
      mappings.excerpt = field.name;
    } else if (fieldName.includes("image") || fieldName.includes("photo") || fieldType === "image") {
      mappings.image = field.name;
    } else if (fieldName.includes("date") || fieldType === "date" || fieldType === "datetime") {
      mappings.date = field.name;
    } else if (fieldName.includes("author") || fieldName.includes("creator")) {
      mappings.author = field.name;
    } else if (fieldName.includes("category") || fieldName.includes("tag")) {
      mappings.category = field.name;
    } else if (fieldName.includes("url") || fieldName.includes("link") || fieldType === "url") {
      mappings.url = field.name;
    } else if (fieldName.includes("price") || fieldType === "number") {
      mappings.price = field.name;
    }
  });

  return mappings;
};

// Helper to generate preview data for field mapping configuration
export const generatePreviewData = (collection: any, fieldMappings: any) => {
  if (!collection?.fields) return [];

  const previewItems = [];
  for (let i = 0; i < 3; i++) {
    const item: any = {};
    
    Object.entries(fieldMappings).forEach(([targetField, sourceField]) => {
      const field = collection.fields.find((f: any) => f.name === sourceField);
      if (field) {
        // Generate sample data based on field type
        switch (field.type) {
          case "plainText":
          case "formattedText":
            item[targetField] = `Sample ${field.name} ${i + 1}`;
            break;
          case "image":
            item[targetField] = `https://images.unsplash.com/photo-150${i + 1}?w=400&h=300&fit=crop`;
            break;
          case "date":
            item[targetField] = new Date().toISOString().split('T')[0];
            break;
          case "number":
            item[targetField] = (i + 1) * 100;
            break;
          default:
            item[targetField] = `Sample ${targetField} ${i + 1}`;
        }
      }
    });

    item.id = `preview-${i + 1}`;
    item.slug = `sample-item-${i + 1}`;
    previewItems.push(item);
  }

  return previewItems;
};
