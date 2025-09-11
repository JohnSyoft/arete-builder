import { useNode } from "@craftjs/core";
import { CosmeticCard1 } from "./CosmeticCard1";
import { useCMSCardData } from "@/hooks/useCMSCards";
import { useMemo } from "react";

interface FieldMapping {
  image?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  author?: string;
  category?: string;
  url?: string;
}

interface DisplayOptions {
  showImage?: boolean;
  showDate?: boolean;
  showAuthor?: boolean;
  showCategory?: boolean;
  showExcerpt?: boolean;
  excerptLength?: number;
  imageHeight?: string;
}

interface CMSCollectionWrapperProps {
  collection?: string;
  collectionName?: string;
  fieldMappings?: FieldMapping;
  displayOptions?: DisplayOptions;
  itemsToShow?: number;
  columns?: number;
  gap?: string;
  backgroundColor?: string;
  cardBackground?: string;
  primaryColor?: string;
  accentColor?: string;
  textColor?: string;
  
  // CMS context data
  cmsCollectionId?: string;
  cmsCollectionName?: string;
  cmsFields?: Array<{
    id: string;
    name: string;
    type: string;
    label: string;
  }>;
  
  // Component editor integration
  componentId?: string;
  projectId?: string;
  onEditComponent?: (componentId: string) => void;
}

export function CMSCollectionWrapper({
  collection = "",
  collectionName = "",
  fieldMappings = {
    image: "featured_image",
    title: "title",
    excerpt: "content",
    date: "published_date",
    author: "author.name",
    category: "category",
    url: "slug",
  },
  displayOptions = {
    showImage: true,
    showDate: true,
    showAuthor: false,
    showCategory: true,
    showExcerpt: true,
    excerptLength: 120,
    imageHeight: "200px",
  },
  itemsToShow = 3,
  columns = 3,
  gap = "gap-8",
  backgroundColor = "#fdf7f3",
  cardBackground = "#ffffff",
  primaryColor = "#481E0B",
  accentColor = "#E67E22",
  textColor = "#333333",
  cmsCollectionId,
  cmsCollectionName,
  cmsFields = [],
  componentId,
  projectId,
  onEditComponent,
  ...props
}: CMSCollectionWrapperProps) {
  const {
    connectors: { connect },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Get CMS data
  const {
    items: cmsItems,
    isLoading,
    error,
  } = useCMSCardData(collection || "", fieldMappings, {
    itemsToShow,
    status: "published",
  });

  // Memoize the card component props to prevent unnecessary re-renders
  const cardProps = useMemo(() => ({
    collection,
    collectionName,
    fieldMappings,
    displayOptions,
    itemsToShow,
    columns,
    gap,
    backgroundColor,
    cardBackground,
    primaryColor,
    accentColor,
    textColor,
    cmsCollectionId,
    cmsCollectionName,
    cmsFields,
  }), [
    collection,
    collectionName,
    fieldMappings,
    displayOptions,
    itemsToShow,
    columns,
    gap,
    backgroundColor,
    cardBackground,
    primaryColor,
    accentColor,
    textColor,
    cmsCollectionId,
    cmsCollectionName,
    cmsFields,
  ]);


  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(ref);
        }
      }}
      className={`bg-red-800 p-14 relative group ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      {/* Render the actual card component */}
      <CosmeticCard1 {...cardProps} />
      
      {/* Overlay for non-editable indication */}
      <div className="absolute inset-0 pointer-events-none bg-transparent" />
      
      {/* Selection indicators and controls */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          CMS Collection: {collectionName || "Untitled"}
        </div>
      )}
      
      
   
    </div>
  );
}

CMSCollectionWrapper.craft = {
  displayName: "CMS Collection",
  props: {
    collection: "",
    collectionName: "",
    fieldMappings: {
      image: "featured_image",
      title: "title",
      excerpt: "content",
      date: "published_date",
      author: "author.name",
      category: "category",
      url: "slug",
    },
    displayOptions: {
      showImage: true,
      showDate: true,
      showAuthor: false,
      showCategory: true,
      showExcerpt: true,
      excerptLength: 120,
      imageHeight: "200px",
    },
    itemsToShow: 3,
    columns: 3,
    gap: "gap-8",
    backgroundColor: "#fdf7f3",
    cardBackground: "#ffffff",
    primaryColor: "#481E0B",
    accentColor: "#E67E22",
    textColor: "#333333",
    cmsCollectionId: "",
    cmsCollectionName: "",
    cmsFields: [],
    componentId: "",
  },
  rules: {
    // Make this component non-editable in the main editor
    canDrag: () => false,
    canDrop: () => false,
    canMoveIn: () => false,
    canMoveOut: () => false,
  },
  isCanvas: false,
};
