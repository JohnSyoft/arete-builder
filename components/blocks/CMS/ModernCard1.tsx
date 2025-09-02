import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
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
  readTime?: string;
}

interface DisplayOptions {
  showImage?: boolean;
  showDate?: boolean;
  showAuthor?: boolean;
  showCategory?: boolean;
  showExcerpt?: boolean;
  showReadTime?: boolean;
  excerptLength?: number;
  imageHeight?: string;
}

interface ModernCard1Props {
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
    readTime?: string;
  }>;
}

export function ModernCard1({
  collection = "",
  fieldMappings = {
    image: "featured_image",
    title: "title",
    excerpt: "excerpt",
    date: "published_date",
    author: "author.name",
    category: "category",
    url: "slug",
    readTime: "read_time",
  },
  displayOptions = {
    showImage: true,
    showDate: true,
    showAuthor: true,
    showCategory: false,
    showExcerpt: true,
    showReadTime: true,
    excerptLength: 140,
    imageHeight: "200px",
  },
  itemsToShow = 4,
  columns = 2,
  gap = "gap-12",
  backgroundColor = "#fafafa",
  cardBackground = "#ffffff",
  primaryColor = "#1a1a1a",
  accentColor = "#6b7280",
  textColor = "#1a1a1a",
  previewData = [
    {
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "The Future of Digital Innovation",
      excerpt:
        "Exploring how artificial intelligence and machine learning are revolutionizing business operations across industries.",
      date: "Mar 15, 2024",
      author: "Sarah Johnson",
      category: "Technology",
      readTime: "5 min read",
      url: "/articles/future-digital-innovation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Building Modern Workspaces",
      excerpt:
        "How contemporary office design and remote work technologies are creating more productive and collaborative environments.",
      date: "Mar 12, 2024",
      author: "David Chen",
      category: "Business",
      readTime: "7 min read",
      url: "/articles/modern-workspaces",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Sustainable Business Growth",
      excerpt:
        "Leveraging data analytics and sustainable practices to drive long-term business success in today's competitive market.",
      date: "Mar 10, 2024",
      author: "Maria Rodriguez",
      category: "Sustainability",
      readTime: "6 min read",
      url: "/articles/data-driven-decisions",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Remote Work Revolution",
      excerpt:
        "How distributed teams are redefining productivity and collaboration in the post-pandemic workplace.",
      date: "Mar 8, 2024",
      author: "Alex Thompson",
      category: "Work",
      readTime: "4 min read",
      url: "/articles/remote-work-revolution",
    },
  ],
  ...props
}: ModernCard1Props) {
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
        id="modernCard1Container"
        is={Box}
        backgroundColor={backgroundColor}
        padding="120px 40px"
        margin="0"
        display="block"
        canvas
      >
        {/* Collection Title */}
        {collection && (
          <Element
            id="modernCard1Title"
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 80px 0"
            display="block"
            canvas={false}
          >
            <CraftText
              text={collection}
              tagName="h2"
              fontSize="text-4xl md:text-5xl"
              fontWeight="font-light"
              color={primaryColor}
              textAlign="text-center"
              margin="0"
              letterSpacing="tracking-tight"
            />
          </Element>
        )}

        {/* Cards Grid */}
        <Element
          id="modernCard1Grid"
          is={Grid}
          canvas
          columns={columns}
          autoFit={false}
          minColumnWidth="400px"
          gap={gap}
          autoRows="auto"
        >
          {displayData.map((item, index) => (
            <Element
              key={index}
              id={`modernCard1Item-${index}`}
              is={Box}
              canvas
              backgroundColor={cardBackground}
              padding="24px"
              margin="mb-8"
              display="block"
              border="1px solid #f0f0f0"
              borderRadius="12px"
            >
              <Element
                id={`modernCard1ItemFlex-${index}`}
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="start"
                gap="gap-6"
                wrap="nowrap"
              >
                {/* Card Image */}
                {displayOptions.showImage && item.image && (
                  <Element
                    id={`modernCard1Image-${index}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="180px"
                    height="120px"
                    canvas
                  >
                    <CraftImage
                      src={item.image}
                      alt={item.title || "Article image"}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="8px"
                      margin=""
                      padding=""
                    />
                  </Element>
                )}

                {/* Card Content */}
                <Element
                  id={`modernCard1Content-${index}`}
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas
                >
                  {/* Meta Information */}
                  <Element
                    id={`modernCard1Meta-${index}`}
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin="mb-3"
                    wrap="wrap"
                  >
                    {displayOptions.showDate && item.date && (
                      <Element
                        id={`modernCard1Date-${index}`}
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
                          fontWeight="font-medium"
                          color={accentColor}
                          textAlign="text-left"
                          margin="0"
                        />
                      </Element>
                    )}

                    {displayOptions.showAuthor && item.author && (
                      <Element
                        id={`modernCard1Author-${index}`}
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
                          id={`modernCard1AuthorDot-${index}`}
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
                          id={`modernCard1AuthorText-${index}`}
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={`By ${item.author}`}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color={accentColor}
                            textAlign="text-left"
                            margin="0"
                          />
                        </Element>
                      </Element>
                    )}

                    {displayOptions.showReadTime && item.readTime && (
                      <Element
                        id={`modernCard1ReadTime-${index}`}
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
                          id={`modernCard1ReadTimeDot-${index}`}
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
                          id={`modernCard1ReadTimeText-${index}`}
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={item.readTime}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color={accentColor}
                            textAlign="text-left"
                            margin="0"
                          />
                        </Element>
                      </Element>
                    )}
                  </Element>

                  {/* Title */}
                  <Element
                    id={`modernCard1TitleText-${index}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 12px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={item.title || "Article Title"}
                      tagName="h3"
                      fontSize="text-xl md:text-2xl"
                      fontWeight="font-semibold"
                      color={textColor}
                      textAlign="text-left"
                      margin="0"
                      lineHeight="leading-tight"
                    />
                  </Element>

                  {/* Excerpt */}
                  {displayOptions.showExcerpt && item.excerpt && (
                    <Element
                      id={`modernCard1Excerpt-${index}`}
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 16px 0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={truncateText(
                          item.excerpt,
                          displayOptions.excerptLength || 140
                        )}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color={accentColor}
                        textAlign="text-left"
                        margin="0"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  )}

                  {/* Read More Link */}
                  <Element
                    id={`modernCard1Link-${index}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Read article →"
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-semibold"
                      color={primaryColor}
                      textAlign="text-left"
                      margin="0"
                      textDecoration="underline"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>
          ))}
        </Element>

        {/* CMS Configuration Info */}
        <Element
          id="modernCard1Config"
          is={Box}
          backgroundColor="rgba(26, 26, 26, 0.05)"
          padding="24px"
          margin="80px 0 0 0"
          borderRadius="8px"
          display="block"
          border="1px solid #e5e7eb"
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
            fontWeight="font-normal"
            color={accentColor}
            textAlign="text-center"
            margin="0"
          />
        </Element>
      </Element>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Modern Card 1
        </div>
      )}
    </div>
  );
}

ModernCard1.craft = {
  displayName: "Modern Card 1",
  props: {
    collection: "",
    fieldMappings: {
      image: "featured_image",
      title: "title",
      excerpt: "excerpt",
      date: "published_date",
      author: "author.name",
      category: "category",
      url: "slug",
      readTime: "read_time",
    },
    displayOptions: {
      showImage: true,
      showDate: true,
      showAuthor: true,
      showCategory: false,
      showExcerpt: true,
      showReadTime: true,
      excerptLength: 140,
      imageHeight: "200px",
    },
    itemsToShow: 4,
    columns: 2,
    gap: "gap-12",
    backgroundColor: "#ffffff",
    cardBackground: "transparent",
    primaryColor: "#1a1a1a",
    accentColor: "#6b7280",
    textColor: "#1a1a1a",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
