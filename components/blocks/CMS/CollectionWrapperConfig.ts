import { type CardDesignType } from './CollectionCards';

// Shared interface for Collection Wrapper props
export interface CollectionWrapperBaseProps {
  children?: React.ReactNode;
  // Flex properties
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  gap?: string;
  justifyContent?: "start" | "center" | "end" | "between" | "around" | "evenly" | "space-between";
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
  // Editor-specific
  nonEditable?: boolean;
}

// Single source of truth for all default values
export const COLLECTION_WRAPPER_DEFAULTS: Required<Omit<CollectionWrapperBaseProps, 'children'>> = {
  // Flex properties
  flexDirection: "row",
  gap: "gap-4",
  justifyContent: "start",
  alignItems: "start",
  wrap: "wrap",
  minHeight: "min-h-[200px]",
  padding: "p-4",
  margin: "my-4",
  // Advanced flex properties
  flexGrow: "",
  flexShrink: "",
  flexBasis: "",
  order: "",
  // Overflow control
  overflowX: "visible",
  // Resizer props
  width: "auto",
  height: "auto",
  // Collection-specific properties
  collectionId: "",
  projectId: "",
  collectionName: "Collection",
  maxItems: 3,
  cardDesign: "default",
  // Field mapping for cards
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
  // Editor-specific
  nonEditable: true,
};

// Craft.js configuration
export const COLLECTION_WRAPPER_CRAFT_CONFIG = {
  displayName: "Collection Wrapper",
  props: {
    children: undefined,
    ...COLLECTION_WRAPPER_DEFAULTS,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => false, // Don't allow children in editor - it's a collection wrapper
    canMoveOut: () => true,
  },
  isCanvas: false, // Not a canvas - it renders collection items at runtime
};

// Utility function to merge props with defaults
export const mergeWithDefaults = <T extends Partial<CollectionWrapperBaseProps>>(
  props: T
): Required<CollectionWrapperBaseProps> & T => {
  return {
    children: undefined,
    ...COLLECTION_WRAPPER_DEFAULTS,
    ...props,
  } as Required<CollectionWrapperBaseProps> & T;
};
