import React from "react";
import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface BlogCardProps {
  // Data Selection
  blogId?: string; // API identifier for which blog to fetch

  // Content Overrides (when user wants custom content instead of API data)
  customTitle?: string;
  customDescription?: string;
  customImage?: string;
  customAuthor?: string;
  customDate?: string;
  customCategory?: string;

  // Display Options
  showAuthor?: boolean;
  showDate?: boolean;
  showCategory?: boolean;
  showDescription?: boolean;
  showReadMoreButton?: boolean;

  // Design Customization
  imageHeight?: string;
  titleFontSize?: string;
  titleColor?: string;
  descriptionFontSize?: string;
  descriptionColor?: string;
  cardBackgroundColor?: string;
  cardBorderRadius?: string;
  cardPadding?: string;

  // Layout Options
  layout?: "vertical" | "horizontal";
  imagePosition?: "top" | "left" | "right";

  // Button Customization
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "ghost";
  buttonColor?: string;

  // Link Settings
  linkUrl?: string; // Custom URL or will use blog slug from API
  openInNewTab?: boolean;
}

// This would come from your API in production
const getBlogData = async (blogId: string) => {
  // Mock API response structure
  const mockBlogs: Record<string, any> = {
    "blog-1": {
      id: "blog-1",
      title: "How to Build Amazing Websites",
      description:
        "Learn the fundamentals of web design and development with our comprehensive guide that covers everything from basic HTML to advanced frameworks.",
      image:
        "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&q=80",
      author: "John Doe",
      date: "2024-03-15",
      category: "Web Design",
      slug: "how-to-build-amazing-websites",
      readTime: "5 min read",
    },
    "blog-2": {
      id: "blog-2",
      title: "Modern JavaScript Best Practices",
      description:
        "Discover the latest JavaScript techniques and patterns that will make your code more efficient, maintainable, and performant.",
      image:
        "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?w=800&q=80",
      author: "Jane Smith",
      date: "2024-03-12",
      category: "JavaScript",
      slug: "modern-javascript-best-practices",
      readTime: "8 min read",
    },
    "blog-3": {
      id: "blog-3",
      title: "CSS Grid vs Flexbox Guide",
      description:
        "A comprehensive comparison of CSS Grid and Flexbox layouts, helping you choose the right tool for your design needs.",
      image:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
      author: "Mike Johnson",
      date: "2024-03-10",
      category: "CSS",
      slug: "css-grid-vs-flexbox",
      readTime: "6 min read",
    },
  };

  return mockBlogs[blogId] || null;
};

export function BlogCard({
  // Data Selection
  blogId = "blog-1",

  // Content Overrides
  customTitle,
  customDescription,
  customImage,
  customAuthor,
  customDate,
  customCategory,

  // Display Options
  showAuthor = true,
  showDate = true,
  showCategory = true,
  showDescription = true,
  showReadMoreButton = true,

  // Design Customization
  imageHeight = "200px",
  titleFontSize = "text-xl",
  titleColor = "text-gray-900",
  descriptionFontSize = "text-sm",
  descriptionColor = "text-gray-600",
  cardBackgroundColor = "#ffffff",
  cardBorderRadius = "8px",
  cardPadding = "0",

  // Layout Options
  layout = "vertical",
  imagePosition = "top",

  // Button Customization
  buttonText = "Read More",
  buttonVariant = "default",

  // Link Settings
  linkUrl,
  openInNewTab = false,
}: BlogCardProps) {
  // In production, this would use React Query or SWR to fetch blog data
  const [blogData, setBlogData] = React.useState<any>(null);

  React.useEffect(() => {
    if (blogId) {
      getBlogData(blogId).then(setBlogData);
    }
  }, [blogId]);

  // Use custom content if provided, otherwise use API data
  const displayTitle = customTitle || blogData?.title || "Blog Title";
  const displayDescription =
    customDescription ||
    blogData?.description ||
    "Blog description will appear here...";
  const displayImage =
    customImage ||
    blogData?.image ||
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80";
  const displayAuthor = customAuthor || blogData?.author || "Author Name";
  const displayDate = customDate || blogData?.date || "2024-01-01";
  const displayCategory = customCategory || blogData?.category || "Category";
  const finalLinkUrl =
    linkUrl || (blogData?.slug ? `/blog/${blogData.slug}` : "#");

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <Card
      variant="flat"
      shadow="md"
      borderRadius={cardBorderRadius}
      backgroundColor={cardBackgroundColor}
      borderColor="#e5e7eb"
      padding={cardPadding}
      margin="0"
      hoverable={true}
      clickable={!!finalLinkUrl}
      overflow="hidden"
    >
      <Element id="blogCardContainer" is="div" canvas>
        {layout === "vertical" ? (
          // Vertical Layout
          <Element id="blogCardContent" is="div">
            {/* Image */}
            {imagePosition === "top" && (
              <Element
                id="blogCardImage"
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height={imageHeight}
                canvas
              >
                <CraftImage
                  src={displayImage}
                  alt={displayTitle}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-t-lg"
                  margin=""
                  padding=""
                />
              </Element>
            )}

            {/* Content */}
            <Element
              id="blogCardContent"
              is={Box}
              backgroundColor="transparent"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              {/* Category */}
              {showCategory && (
                <Element
                  id="blogCardCategory"
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 12px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={displayCategory}
                    tagName="span"
                    fontSize="text-xs"
                    fontWeight="font-semibold"
                    color="text-blue-600"
                    textAlign="text-left"
                    textTransform="uppercase"
                    letterSpacing="tracking-wider"
                  />
                </Element>
              )}

              {/* Title */}
              <Element
                id="blogCardTitle"
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 12px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={displayTitle}
                  tagName="h3"
                  fontSize={titleFontSize}
                  fontWeight="font-bold"
                  color={titleColor}
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Description */}
              {showDescription && (
                <Element
                  id="blogCardDescription"
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 16px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={displayDescription}
                    tagName="p"
                    fontSize={descriptionFontSize}
                    fontWeight="font-normal"
                    color={descriptionColor}
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              )}

              {/* Meta Info */}
              {(showAuthor || showDate) && (
                <Element
                  id="blogCardMeta"
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="between"
                  alignItems="center"
                  gap="gap-4"
                  margin="0 0 20px 0"
                  wrap="wrap"
                >
                  {/* Author & Date */}
                  <Element
                    id="blogCardAuthorDate"
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas
                  >
                    {showAuthor && (
                      <Element
                        id="blogCardAuthor"
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 4px 0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={`By ${displayAuthor}`}
                          tagName="p"
                          fontSize="text-sm"
                          fontWeight="font-medium"
                          color="text-gray-700"
                          textAlign="text-left"
                        />
                      </Element>
                    )}

                    {showDate && (
                      <Element
                        id="blogCardDate"
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={formatDate(displayDate)}
                          tagName="p"
                          fontSize="text-xs"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-left"
                        />
                      </Element>
                    )}
                  </Element>
                </Element>
              )}

              {/* Read More Button */}
              {showReadMoreButton && (
                <Element
                  id="blogCardButton"
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <CraftButton
                    text={buttonText}
                    variant={buttonVariant}
                    size="default"
                    href={finalLinkUrl}
                    borderRadius="6px"
                    padding="px-4 py-2"
                    margin=""
                  />
                </Element>
              )}
            </Element>
          </Element>
        ) : (
          // Horizontal Layout
          <Element
            id="blogCardHorizontal"
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="start"
            alignItems="start"
            gap="gap-6"
            margin="0"
            wrap="nowrap"
          >
            {/* Image */}
            {imagePosition === "left" && (
              <Element
                id="blogCardImageLeft"
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="200px"
                height={imageHeight}
                canvas
              >
                <CraftImage
                  src={displayImage}
                  alt={displayTitle}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            )}

            {/* Content - Same structure as vertical but in flex item */}
            <Element
              id="blogCardContentHorizontal"
              is={Box}
              backgroundColor="transparent"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              {/* Same content structure as vertical layout */}
              {/* Category, Title, Description, Meta, Button */}
            </Element>

            {/* Image Right */}
            {imagePosition === "right" && (
              <Element
                id="blogCardImageRight"
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="200px"
                height={imageHeight}
                canvas
              >
                <CraftImage
                  src={displayImage}
                  alt={displayTitle}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            )}
          </Element>
        )}
      </Element>
    </Card>
  );
}

BlogCard.craft = {
  displayName: "Blog Card",
  props: {
    // Data Selection
    blogId: "blog-1",

    // Content Overrides
    customTitle: "",
    customDescription: "",
    customImage: "",
    customAuthor: "",
    customDate: "",
    customCategory: "",

    // Display Options
    showAuthor: true,
    showDate: true,
    showCategory: true,
    showDescription: true,
    showReadMoreButton: true,

    // Design Customization
    imageHeight: "200px",
    titleFontSize: "text-xl",
    titleColor: "text-gray-900",
    descriptionFontSize: "text-sm",
    descriptionColor: "text-gray-600",
    cardBackgroundColor: "#ffffff",
    cardBorderRadius: "8px",
    cardPadding: "0",

    // Layout Options
    layout: "vertical",
    imagePosition: "top",

    // Button Customization
    buttonText: "Read More",
    buttonVariant: "default",

    // Link Settings
    linkUrl: "",
    openInNewTab: false,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
