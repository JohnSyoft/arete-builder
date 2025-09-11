import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { useCMSCardData } from "@/hooks/useCMSCards";
import { usePropertiesPanelStore } from "@/lib/store/properties-panel-store";
import { FloatingToolbar } from "@/components/editor/floating-toolbar";
import { useMemo, useEffect } from "react";

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

interface CosmeticCard1Props {
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

  // CMS context data for properties panel
  cmsCollectionId?: string;
  cmsCollectionName?: string;
  cmsFields?: Array<{
    id: string;
    name: string;
    type: string;
    label: string;
  }>;

  // Preview data (for design mode)
  previewData?: Array<{
    image?: string;
    title?: string;
    excerpt?: string;
    date?: string;
    author?: string;
    category?: string;
    url?: string;
  }>;
}

export function CosmeticCard1({
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
  // CMS context data
  cmsCollectionId,
  cmsCollectionName,
  cmsFields = [],
  previewData = [
    {
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Advanced Anti-Aging Facial Treatments",
      excerpt:
        "Discover cutting-edge non-invasive treatments that restore youthful radiance and reduce signs of aging naturally.",
      date: "March 15, 2024",
      author: "Dr. Sarah Wilson",
      category: "Anti-Aging",
      url: "/treatments/anti-aging-facial",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Luxury Skincare Consultation Experience",
      excerpt:
        "Personalized skincare analysis using advanced technology to create your perfect beauty routine and treatment plan.",
      date: "March 12, 2024",
      author: "Dr. Michael Chen",
      category: "Treatments",
      url: "/treatments/facial-rejuvenation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559599101-f09722fb4948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Holistic Wellness & Beauty Integration",
      excerpt:
        "Combining traditional wellness practices with modern aesthetic treatments for complete mind-body beauty transformation.",
      date: "March 10, 2024",
      author: "Dr. Emma Rodriguez",
      category: "Wellness",
      url: "/wellness/holistic-beauty",
    },
  ],
  ...props
}: CosmeticCard1Props) {
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

  const { openPanel } = usePropertiesPanelStore();

  // Helper function to get CMS field props for a specific field
  const getCMSFieldProps = (fieldName: string, fieldType: string) => {
    const field = cmsFields.find(f => f.name === fieldName);
    if (!field || !cmsCollectionId) return {};
    
    return {
      cmsField: field.name,
      cmsFieldType: field.type,
      cmsFieldId: field.id,
      cmsCollectionId: cmsCollectionId,
      cmsFieldLabel: field.label,
    };
  };

  const handleShowProperties = () => {
    openPanel(
      "cmscard",
      {
        collection,
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
      },
      id,
      (newProps) => {
        console.log("CosmeticCard1 - onPropChange called with:", newProps);

        Object.keys(newProps).forEach((key) => {
          console.log(`CosmeticCard1 - Setting prop ${key}:`, newProps[key]);

          if (key === "_batch") {
            // Handle batch updates - the value contains the complete props object
            console.log(
              "CosmeticCard1 - Handling batch update:",
              newProps[key]
            );
            setProp((props: CosmeticCard1Props) => {
              Object.keys(newProps[key]).forEach((batchKey) => {
                (props as any)[batchKey] = newProps[key][batchKey];
              });
            });
          } else {
            // Handle individual property updates
            setProp((props: CosmeticCard1Props) => {
              (props as any)[key] = newProps[key];
            });
          }
        });
      }
    );
  };

  // Get CMS data or fallback to preview data
  const {
    items: cmsItems,
    isLoading,
    error,
  } = useCMSCardData(collection || "", fieldMappings, {
    itemsToShow,
    status: "published",
  });

  // Debug prop changes
  useEffect(() => {
    console.log("CosmeticCard1 - itemsToShow changed:", itemsToShow);
  }, [itemsToShow]);

  console.log({ itemsToShow });

  // Transform CMS data to display format - memoized to prevent unnecessary re-renders
  const transformCMSItem = useMemo(() => {
    return (item: any) => {
      // The useCMSCardData hook already maps the fields, so we can access them directly
      const transformedItem = {
        image:
          item.image ||
          "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: item.title || "Sample Title",
        excerpt:
          item.excerpt || "This is a sample description for the content item.",
        date: item.date
          ? new Date(item.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : item.createdAt
          ? new Date(item.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
        author: item.author || "Content Author",
        category: item.category || "General",
        url: item.url || item.slug || "#",
      };

      return transformedItem;
    };
  }, [fieldMappings]); // Re-create when fieldMappings change

  // Memoize display data to ensure it updates when dependencies change
  const displayData = useMemo(() => {
    if (collection && cmsItems && cmsItems.length > 0) {
      // Transform CMS items to display format
      const data = cmsItems.slice(0, itemsToShow).map(transformCMSItem);
      return data;
    } else if (
      collection &&
      !isLoading &&
      (!cmsItems || cmsItems.length === 0)
    ) {
      // Collection is selected but no data available - show placeholders
      const data = Array(itemsToShow)
        .fill(null)
        .map((_, index) => ({
          image:
            "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          title: `No Data Available ${index + 1}`,
          excerpt:
            "This collection doesn't have any published items yet. Add some content to see it displayed here.",
          date: new Date().toLocaleDateString(),
          author: "No Author",
          category: "Empty",
          url: "#",
        }));
      return data;
    } else {
      // No collection selected - use preview data
      const data = previewData.slice(0, itemsToShow);
      return data;
    }
  }, [
    collection,
    cmsItems,
    itemsToShow,
    isLoading,
    transformCMSItem,
    previewData,
  ]);

  const truncateText = (text: string, length: number) => {
    if (!text) return "";

    // Strip HTML tags for display in text components
    const strippedText = text.replace(/<[^>]*>/g, "");

    if (strippedText.length <= length) return strippedText;
    return strippedText.substring(0, length).trim() + "...";
  };
  console.log({ selected });
  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`p-4 relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Element
        id="cosmeticCard1Container"
        is={Box}
        backgroundColor={backgroundColor}
        padding="80px 40px"
        margin="0"
        display="block"
        canvas
      >
        {/* Cards Grid */}
        <Element
          id="cosmeticCard1Grid"
          is={Grid}
          canvas
          columns={columns}
          autoFit={false}
          minColumnWidth="320px"
          gap={gap}
          autoRows="auto"
          padding="p-4"
        >
          {isLoading
            ? // Loading state
              Array(itemsToShow)
                .fill(null)
                .map((_, index) => (
                  <Element
                    key={`loading-${collection}-${index}`}
                    id={`cosmeticCard1Loading-${collection}-${index}`}
                    is={Box}
                    backgroundColor={cardBackground}
                    margin="0"
                    borderRadius="24px"
                    display="block"
                    padding="20px"
                    canvas={false}
                  >
                    <div className="animate-pulse">
                      <div className="w-full h-64 bg-gray-200 rounded-lg mb-6"></div>
                      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
                      <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                    </div>
                  </Element>
                ))
            : // Actual data
              displayData.map((item, index) => {
                // Create a unique key that changes when data changes
                const uniqueKey = collection
                  ? `${collection}-${
                      item.id || item.url || item.title
                    }-${index}`
                  : `preview-${index}`;

                return (
                  <Element
                    key={uniqueKey}
                    id={`cosmeticCard1Item-${uniqueKey}`}
                    is={Box}
                    backgroundColor={cardBackground}
                    //   padding="0"
                    margin="0"
                    borderRadius="24px"
                    display="block"
                    padding="20px"
                    canvas
                  >
                    {/* Card Image */}
                    {item.image && (
                      <Element
                        id={`cosmeticCard1Image-${uniqueKey}`}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 24px 0"
                        display="block"
                        width="100%"
                        height="200px"
                        canvas
                      >
                        <CraftImage
                          src={item.image}
                          alt={item.title || "Card image"}
                          width="w-full"
                          {...getCMSFieldProps(fieldMappings.image || 'image', 'image')}
                          height="h-full"
                          objectFit="object-cover"
                          borderRadius="12px"
                          margin=""
                          padding=""
                        />

                        {/* Category Badge */}
                        {/* {displayOptions.showCategory && item.category && (
                        <Element
                          id={`cosmeticCard1Category-${index}`}
                          is={Box}
                          backgroundColor={accentColor}
                          padding="8px 16px"
                          margin="0"
                          borderRadius="20px"
                          display="inline-block"
                          canvas={false}
                        >
                          <CraftText
                            text={item.category}
                            tagName="span"
                            fontSize="text-sm"
                            {...getCMSFieldProps(fieldMappings.category || 'category', 'plainText')}
                            fontWeight="font-semibold"
                            color="white"
                            textAlign="text-center"
                            margin="0"
                          />
                        </Element>
                      )} */}
                      </Element>
                    )}

                    {/* Card Content */}
                    <Element
                      id={`cosmeticCard1Content-${uniqueKey}`}
                      is={Box}
                      backgroundColor="transparent"
                      padding="32px"
                      margin="0"
                      display="block"
                      canvas
                    >
                      {/* Date and Author */}
                      {(displayOptions.showDate ||
                        displayOptions.showAuthor) && (
                        <Element
                          id={`cosmeticCard1Meta-${uniqueKey}`}
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-4"
                          margin="mb-4"
                          wrap="wrap"
                        >
                          {displayOptions.showDate && item.date && (
                            <Element
                              id={`cosmeticCard1Date-${uniqueKey}`}
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin="0"
                              display="block"
                              canvas={false}
                            >
                              <CraftText
                                text={item.date}
                                tagName="span"
                                fontSize="text-sm"
                                {...getCMSFieldProps(fieldMappings.date || 'date', 'date')}
                                fontWeight="font-medium"
                                color={accentColor}
                                textAlign="text-left"
                                margin="0"
                              />
                            </Element>
                          )}

                          {displayOptions.showAuthor && item.author && (
                            <Element
                              id={`cosmeticCard1Author-${uniqueKey}`}
                              is={Flex}
                              canvas
                              flexDirection="row"
                              justifyContent="start"
                              alignItems="center"
                              gap="gap-2"
                              margin="0"
                              wrap="nowrap"
                            >
                              <Element
                                id={`cosmeticCard1AuthorDot-${uniqueKey}`}
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin="0"
                                display="block"
                                canvas={false}
                              >
                                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                              </Element>

                              <Element
                                id={`cosmeticCard1AuthorText-${uniqueKey}`}
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin="0"
                                display="block"
                                canvas={false}
                              >
                                <CraftText
                                  text={item.author}
                                  tagName="span"
                                  fontSize="text-sm"
                                  {...getCMSFieldProps(fieldMappings.author || 'author', 'plainText')}
                                  fontWeight="font-medium"
                                  color="#666666"
                                  textAlign="text-left"
                                  margin="0"
                                />
                              </Element>
                            </Element>
                          )}
                        </Element>
                      )}

                      {/* Title */}
                      <Element
                        id={`cosmeticCard1TitleText-${uniqueKey}`}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 16px 0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={item.title || "Card Title"}
                          tagName="h3"
                          fontSize="text-xl md:text-2xl"
                          {...getCMSFieldProps(fieldMappings.title || 'title', 'plainText')}
                          fontWeight="font-bold"
                          color={textColor}
                          textAlign="text-left"
                          margin="0"
                          lineHeight="leading-tight"
                        />
                      </Element>

                      {/* Excerpt */}
                      {displayOptions.showExcerpt && item.excerpt && (
                        <Element
                          id={`cosmeticCard1Excerpt-${uniqueKey}`}
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0 0 24px 0"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={truncateText(
                              item.excerpt,
                              displayOptions.excerptLength || 120
                            )}
                            tagName="p"
                            fontSize="text-base"
                            {...getCMSFieldProps(fieldMappings.excerpt || 'excerpt', 'formattedText')}
                            fontWeight="font-normal"
                            color="#666666"
                            textAlign="text-left"
                            margin="0"
                            lineHeight="leading-relaxed"
                          />
                        </Element>
                      )}

                      {/* Read More Button */}
                      <Element
                        id={`cosmeticCard1Actions-${uniqueKey}`}
                        is={Flex}
                        canvas
                        flexDirection="row"
                        justifyContent="start"
                        alignItems="center"
                        gap="gap-2"
                        margin="0"
                        wrap="nowrap"
                      >
                        <Element
                          id={`cosmeticCard1Button-${uniqueKey}`}
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0"
                          display="block"
                          canvas={false}
                        >
                          <CraftButton
                            text="Read More"
                            size="sm"
                            backgroundColor={primaryColor}
                            {...getCMSFieldProps(fieldMappings.url || 'url', 'link')}
                            textColor="white"
                            borderRadius="25px"
                            padding="8px 16px"
                            width="w-auto"
                          />
                        </Element>

                        <Element
                          id={`cosmeticCard1Arrow-${uniqueKey}`}
                          is={Box}
                          backgroundColor="transparent"
                          padding="8px"
                          margin="0"
                          borderRadius="50%"
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          border={`1px solid ${primaryColor}`}
                          canvas={false}
                        >
                          <div
                            className="w-4 h-4"
                            style={{ color: primaryColor }}
                          >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                            </svg>
                          </div>
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                );
              })}
        </Element>
      </Element>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Cosmetic Card 1
        </div>
      )}

      {/* Floating toolbar shown on hover/selection */}
      {(selected || hovered) && (
        <div className="absolute -top-12 left-0 z-50">
          <FloatingToolbar
            elementType="card"
            onEdit={() => {}}
            onGenerateAI={() => {}}
            onSettings={handleShowProperties}
            onMove={() => {}}
            onLink={() => {}}
            onDelete={() => {}}
            position={{ x: 0, y: 0 }}
          />
        </div>
      )}
    </div>
  );
}

CosmeticCard1.craft = {
  displayName: "Cosmetic Card 1",
  props: {
    collection: "",
    collectionName: "",
    fieldMappings: {
      image: "image",
      title: "title",
      excerpt: "description",
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
    backgroundColor: "transparent",
    cardBackground: "#ffffff",
    primaryColor: "#481E0B",
    accentColor: "#E67E22",
    textColor: "#333333",
    // CMS context data
    cmsCollectionId: "",
    cmsCollectionName: "",
    cmsFields: [],
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
