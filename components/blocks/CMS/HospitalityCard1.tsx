import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";

interface FieldMapping {
  image?: string;
  title?: string;
  excerpt?: string;
  date?: string;
  author?: string;
  category?: string;
  url?: string;
  price?: string;
}

interface DisplayOptions {
  showImage?: boolean;
  showDate?: boolean;
  showAuthor?: boolean;
  showCategory?: boolean;
  showExcerpt?: boolean;
  showPrice?: boolean;
  excerptLength?: number;
  imageHeight?: string;
}

interface HospitalityCard1Props {
  collection?: string;
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

  // Preview data (for design mode)
  previewData?: Array<{
    image?: string;
    title?: string;
    excerpt?: string;
    date?: string;
    author?: string;
    category?: string;
    url?: string;
    price?: string;
  }>;
}

export function HospitalityCard1({
  collection = "",
  fieldMappings = {
    image: "featured_image",
    title: "title",
    excerpt: "description",
    date: "published_date",
    author: "author.name",
    category: "category",
    url: "slug",
    price: "price",
  },
  displayOptions = {
    showImage: true,
    showDate: false,
    showAuthor: false,
    showCategory: true,
    showExcerpt: true,
    showPrice: true,
    excerptLength: 100,
    imageHeight: "300px",
  },
  itemsToShow = 3,
  columns = 3,
  gap = "gap-8",
  backgroundColor = "#fafafa",
  cardBackground = "#ffffff",
  primaryColor = "#000000",
  accentColor = "#666666",
  textColor = "#000000",
  previewData = [
    {
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Presidential Ocean Suite",
      excerpt:
        "Unparalleled luxury with panoramic ocean views, private balcony, and exclusive concierge services.",
      date: "Available Now",
      category: "Presidential",
      price: "$850/night",
      url: "/rooms/presidential-ocean-suite",
    },
    {
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Garden Villa Sanctuary",
      excerpt:
        "Private villa nestled in tropical gardens with infinity pool and dedicated butler service.",
      date: "Available Now",
      category: "Villa",
      price: "$1,200/night",
      url: "/rooms/garden-villa-sanctuary",
    },
    {
      image:
        "https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Metropolitan Penthouse",
      excerpt:
        "Sophisticated urban retreat with floor-to-ceiling windows and premium city skyline views.",
      date: "Available Now",
      category: "Penthouse",
      price: "$650/night",
      url: "/rooms/metropolitan-penthouse",
    },
  ],
  ...props
}: HospitalityCard1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Use preview data for design mode, real data would come from CMS integration
  const displayData = previewData.slice(0, itemsToShow);

  const truncateText = (text: string, length: number) => {
    if (text.length <= length) return text;
    return text.substring(0, length).trim() + "...";
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Element
        id="hospitalityCard1Container"
        is={Box}
        backgroundColor={backgroundColor}
        padding="100px 40px"
        margin="0"
        display="block"
        canvas
      >
        {/* Collection Title */}
        {collection && (
          <Element
            id="hospitalityCard1Title"
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 60px 0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={collection}
              tagName="h2"
              fontSize="text-5xl md:text-6xl"
              fontWeight="font-thin"
              color={primaryColor}
              textAlign="text-center"
              margin="0"
              letterSpacing="tracking-wide"
            />
          </Element>
        )}

        {/* Cards Grid */}
        <Element
          id="hospitalityCard1Grid"
          is={Grid}
          canvas
          columns={columns}
          autoFit={false}
          minColumnWidth="350px"
          gap={gap}
          autoRows="auto"
        >
          {displayData.map((item, index) => (
            <Element
              key={index}
              id={`hospitalityCard1Item-${index}`}
              is={Box}
              backgroundColor={cardBackground}
              padding="0"
              margin="0"
              borderRadius="0px"
              display="block"
              canvas
            >
              {/* Card Image */}
              {displayOptions.showImage && item.image && (
                <Element
                  id={`hospitalityCard1Image-${index}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 40px 0"
                  display="block"
                  width="100%"
                  height="320px"
                  canvas
                >
                  <CraftImage
                    src={item.image}
                    alt={item.title || "Card image"}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="0px"
                    margin=""
                    padding=""
                  />
                </Element>
              )}

              {/* Card Content */}
              <Element
                id={`hospitalityCard1Content-${index}`}
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                {/* Category and Price Row */}
                <Element
                  id={`hospitalityCard1Meta-${index}`}
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="gap-4"
                  margin="mb-4"
                  wrap="wrap"
                >
                  {/* Category */}
                  {displayOptions.showCategory && item.category && (
                    <Element
                      id={`hospitalityCard1Category-${index}`}
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={item.category.toUpperCase()}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-thin"
                        color={accentColor}
                        textAlign="text-left"
                        margin="0"
                        letterSpacing="tracking-[0.2em]"
                      />
                    </Element>
                  )}

                  {/* Price */}
                  {displayOptions.showPrice && item.price && (
                    <Element
                      id={`hospitalityCard1Price-${index}`}
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={item.price}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color={primaryColor}
                        textAlign="text-right"
                        margin="0"
                      />
                    </Element>
                  )}
                </Element>

                {/* Title */}
                <Element
                  id={`hospitalityCard1TitleText-${index}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 20px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={item.title || "Card Title"}
                    tagName="h3"
                    fontSize="text-2xl md:text-3xl"
                    fontWeight="font-thin"
                    color={textColor}
                    textAlign="text-left"
                    margin="0"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Excerpt */}
                {displayOptions.showExcerpt && item.excerpt && (
                  <Element
                    id={`hospitalityCard1Excerpt-${index}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 30px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={truncateText(
                        item.excerpt,
                        displayOptions.excerptLength || 100
                      )}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-thin"
                      color={accentColor}
                      textAlign="text-left"
                      margin="0"
                      lineHeight="leading-relaxed"
                    />
                  </Element>
                )}

                {/* Book Now Button */}
                <Element
                  id={`hospitalityCard1Button-${index}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftButton
                    text="Book Now"
                    size="default"
                    backgroundColor={primaryColor}
                    textColor="white"
                    borderRadius="0px"
                    padding="15px 40px"
                    width="w-full"
                  />
                </Element>
              </Element>
            </Element>
          ))}
        </Element>

        {/* CMS Configuration Info */}
        <Element
          id="hospitalityCard1Config"
          is={Box}
          backgroundColor="rgba(0, 0, 0, 0.05)"
          padding="20px"
          margin="60px 0 0 0"
          borderRadius="0px"
          display="block"
          border="1px solid #e5e5e5"
          canvas={false}
        >
          <CraftText
            text={`CMS Collection: ${
              collection || "Not configured"
            } | Field Mappings: ${Object.entries(fieldMappings)
              .map(([key, value]) => `${key}→${value}`)
              .join(", ")}`}
            tagName="p"
            fontSize="text-sm"
            fontWeight="font-thin"
            color={accentColor}
            textAlign="text-center"
            margin="0"
          />
        </Element>
      </Element>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Hospitality Card 1
        </div>
      )}
    </div>
  );
}

HospitalityCard1.craft = {
  displayName: "Hospitality Card 1",
  props: {
    collection: "",
    fieldMappings: {
      image: "featured_image",
      title: "title",
      excerpt: "description",
      date: "published_date",
      author: "author.name",
      category: "category",
      url: "slug",
      price: "price",
    },
    displayOptions: {
      showImage: true,
      showDate: false,
      showAuthor: false,
      showCategory: true,
      showExcerpt: true,
      showPrice: true,
      excerptLength: 100,
      imageHeight: "300px",
    },
    itemsToShow: 3,
    columns: 3,
    gap: "gap-8",
    backgroundColor: "#fafafa",
    cardBackground: "#ffffff",
    primaryColor: "#000000",
    accentColor: "#666666",
    textColor: "#000000",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
