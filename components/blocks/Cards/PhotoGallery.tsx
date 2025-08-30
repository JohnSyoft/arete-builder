import { Element } from "@craftjs/core";
import { useNode } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Card } from "@/components/blocks/Basic/Card";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Image } from "@/components/blocks/Basic/Image";
import { Button } from "@/components/blocks/Basic/Button";

interface Photo {
  id: string;
  title: string;
  description?: string;
  imageUrl: string;
  category?: string;
  photographer?: string;
  date?: string;
  isNew?: boolean;
  aspectRatio?: "square" | "landscape" | "portrait";
}

interface PhotoGalleryProps extends SectionProps {
  title?: string;
  subtitle?: string;
  photos?: Photo[];
  layout?: "grid" | "masonry" | "horizontal";
  columns?: number;
  imageHeight?: string;
  showOverlay?: boolean;
  gap?: string;
  enableLightbox?: boolean;
}

export function PhotoGallery({
  title = "Photo Gallery",
  subtitle = "A beautiful collection of photographs",
  photos = [
    {
      id: "photo-1",
      title: "Mountain Landscape",
      description: "Beautiful sunrise over mountain peaks",
      imageUrl:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "Nature",
      photographer: "John Doe",
      aspectRatio: "landscape",
    },
    {
      id: "photo-2",
      title: "City Architecture",
      description: "Modern building design",
      imageUrl:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop",
      category: "Architecture",
      photographer: "Jane Smith",
      aspectRatio: "portrait",
    },
    {
      id: "photo-3",
      title: "Ocean Waves",
      description: "Peaceful ocean scene",
      imageUrl:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=400&fit=crop",
      category: "Nature",
      photographer: "Ocean Lover",
      aspectRatio: "square",
      isNew: true,
    },
  ],
  layout = "grid",
  columns = 3,
  imageHeight = "300px",
  showOverlay = true,
  gap = "gap-6",
  enableLightbox = false,
  backgroundColor = "#ffffff",
  padding = "80px 0",
  margin = "0",
  ...props
}: PhotoGalleryProps) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
    id,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
    id: state.id,
  }));

  const sectionProps = {
    backgroundColor: backgroundColor,
    padding: padding,
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 sm:px-6 lg:px-8",
    ...props,
  };

  return (
    <Section {...sectionProps}>
      <Element
        id="photoGalleryContainer"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        <Element
          id="photoGalleryHeader"
          is={Flex}
          canvas
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          margin="mb-12"
          gap="gap-4"
        >
          {/* Title */}
          <Element
            id="photoGalleryTitle"
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={title}
              tagName="h2"
              fontSize="text-4xl md:text-5xl"
              fontWeight="font-bold"
              color="text-gray-900"
              textAlign="text-center"
              margin="mb-2"
              lineHeight="leading-tight"
            />
          </Element>

          {/* Subtitle */}
          <Element
            id="photoGallerySubtitle"
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={subtitle}
              tagName="p"
              fontSize="text-lg"
              fontWeight="font-normal"
              color="text-gray-600"
              textAlign="text-center"
              lineHeight="leading-relaxed"
            />
          </Element>
        </Element>

        {/* Photo Grid */}
        <Element
          id="photoGalleryGrid"
          is={Flex}
          canvas
          flexDirection="row"
          justifyContent="start"
          alignItems="start"
          wrap={layout === "horizontal" ? "nowrap" : "wrap"}
          gap={gap}
          overflowX={layout === "horizontal" ? "auto" : "visible"}
          minHeight="min-h-[200px]"
        >
          {photos.map((photo, index) => (
            <Element
              key={photo.id}
              id={`photoCard-${photo.id}`}
              is={Card}
              variant="default"
              shadow="lg"
              borderRadius="12px"
              backgroundColor="white"
              padding="0"
              margin="0"
              height="auto"
              hoverable={true}
              clickable={true}
              overflow="hidden"
              canvas
            >
              <Element
                id={`photoCardContent-${photo.id}`}
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                {/* Image Section */}
                <Element
                  id={`photoImage-${photo.id}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  height={imageHeight}
                  width="w-full"
                  canvas={false}
                >
                  <Image
                    src={photo.imageUrl}
                    alt={photo.title}
                    width="100%"
                    height={imageHeight}
                    objectFit="object-cover"
                    borderRadius="rounded-t-lg"
                  />
                </Element>

                {/* Content Section */}
                <Element
                  id={`photoContent-${photo.id}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="p-4"
                  margin="0"
                  display="block"
                  canvas
                >
                  {/* Category Badge */}
                  {photo.category && (
                    <Element
                      id={`photoCategoryBadge-${photo.id}`}
                      is={Box}
                      backgroundColor="#f3f4f6"
                      padding="px-3 py-1"
                      margin="mb-3"
                      display="inline-block"
                      borderRadius="20px"
                      canvas={false}
                    >
                      <CraftText
                        text={photo.category}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-medium"
                        color="text-gray-700"
                        textAlign="center"
                      />
                    </Element>
                  )}

                  {/* NEW Badge */}
                  {photo.isNew && (
                    <Element
                      id={`photoNewBadge-${photo.id}`}
                      is={Box}
                      backgroundColor="#10b981"
                      padding="px-2 py-1"
                      margin="mb-3 ml-2"
                      display="inline-block"
                      borderRadius="20px"
                      canvas={false}
                    >
                      <CraftText
                        text="NEW"
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-bold"
                        color="text-white"
                        textAlign="center"
                      />
                    </Element>
                  )}

                  {/* Title */}
                  <Element
                    id={`photoTitle-${photo.id}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="mb-2"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={photo.title}
                      tagName="h3"
                      fontSize="text-lg"
                      fontWeight="font-semibold"
                      color="text-gray-900"
                      textAlign="text-left"
                      lineHeight="leading-tight"
                    />
                  </Element>

                  {/* Description */}
                  {photo.description && (
                    <Element
                      id={`photoDescription-${photo.id}`}
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="mb-3"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={photo.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  )}

                  {/* Photo Meta */}
                  <Element
                    id={`photoMeta-${photo.id}`}
                    is={Flex}
                    flexDirection="row"
                    justifyContent="between"
                    alignItems="center"
                    gap="gap-2"
                    wrap="wrap"
                    canvas={false}
                  >
                    {/* Photographer */}
                    {photo.photographer && (
                      <Element
                        id={`photoPhotographer-${photo.id}`}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={`By ${photo.photographer}`}
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-medium"
                          color="text-gray-500"
                          textAlign="text-left"
                        />
                      </Element>
                    )}

                    {/* Date */}
                    {photo.date && (
                      <Element
                        id={`photoDate-${photo.id}`}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={photo.date}
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-normal"
                          color="text-gray-400"
                          textAlign="text-right"
                        />
                      </Element>
                    )}
                  </Element>
                </Element>
              </Element>
            </Element>
          ))}
        </Element>

        {/* View More Button */}
        <Element
          id="photoGalleryViewMore"
          is={Flex}
          canvas
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          margin="mt-12"
          gap="gap-4"
        >
          <Element
            id="photoGalleryButton"
            is={Button}
            text="View More Photos"
            backgroundColor="#3b82f6"
            textColor="text-white"
            size="lg"
            borderRadius="8px"
            padding="px-8 py-3"
            canvas={false}
          />
        </Element>
      </Element>
    </Section>
  );
}

PhotoGallery.craft = {
  displayName: "Photo Gallery",
  props: {
    title: "Photo Gallery",
    subtitle: "A beautiful collection of photographs",
    photos: [
      {
        id: "photo-1",
        title: "Mountain Landscape",
        description: "Beautiful sunrise over mountain peaks",
        imageUrl:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
        category: "Nature",
        photographer: "John Doe",
        aspectRatio: "landscape",
      },
      {
        id: "photo-2",
        title: "City Architecture",
        description: "Modern building design",
        imageUrl:
          "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=500&fit=crop",
        category: "Architecture",
        photographer: "Jane Smith",
        aspectRatio: "portrait",
      },
      {
        id: "photo-3",
        title: "Ocean Waves",
        description: "Peaceful ocean scene",
        imageUrl:
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&h=400&fit=crop",
        category: "Nature",
        photographer: "Ocean Lover",
        aspectRatio: "square",
        isNew: true,
      },
    ],
    layout: "grid",
    columns: 3,
    imageHeight: "300px",
    showOverlay: true,
    gap: "gap-6",
    enableLightbox: false,
    backgroundColor: "#ffffff",
    padding: "80px 0",
    margin: "0",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
