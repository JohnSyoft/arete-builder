import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author: string;
  link: string;
}

interface AccountingNews1Props extends SectionProps {
  // News specific props
  pageTitle?: string;
  pageSubtitle?: string;
  backgroundImage?: string;
  mainTitle?: string;
  description?: string;
  newsItems?: NewsItem[];
  // Settings
  showPageTitle?: boolean;
  showMainTitle?: boolean;
  showDescription?: boolean;
  showNewsItems?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function AccountingNews1({
  pageTitle = "Latest news",
  pageSubtitle = "Stay updated with our insights",
  backgroundImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=500&fit=crop",
  mainTitle = "Accounting Insights & News",
  description = "Stay informed with the latest trends, tips, and insights from our accounting experts.",
  newsItems = [
    {
      id: "news-1",
      title: "Tax Planning Strategies for Small Businesses",
      excerpt: "Discover effective tax planning strategies that can help small businesses save money and stay compliant.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Tax Planning",
      date: "Dec 15, 2024",
      author: "John Smith",
      link: "/news/tax-planning-strategies"
    },
    {
      id: "news-2",
      title: "Financial Reporting Best Practices",
      excerpt: "Learn the essential best practices for accurate and efficient financial reporting in your business.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Financial Reporting",
      date: "Dec 12, 2024",
      author: "Sarah Johnson",
      link: "/news/financial-reporting-best-practices"
    },
    {
      id: "news-3",
      title: "Cloud Accounting: Benefits and Implementation",
      excerpt: "Explore the advantages of cloud-based accounting systems and how to implement them effectively.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Technology",
      date: "Dec 10, 2024",
      author: "Mike Davis",
      link: "/news/cloud-accounting-benefits"
    },
    {
      id: "news-4",
      title: "Budget Planning for 2025",
      excerpt: "Essential tips and strategies for creating an effective budget plan for the upcoming year.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Budgeting",
      date: "Dec 8, 2024",
      author: "Lisa Wilson",
      link: "/news/budget-planning-2025"
    },
    {
      id: "news-5",
      title: "Understanding New Tax Regulations",
      excerpt: "Stay updated with the latest tax regulation changes and how they affect your business.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Tax Updates",
      date: "Dec 5, 2024",
      author: "David Brown",
      link: "/news/new-tax-regulations"
    },
    {
      id: "news-6",
      title: "Cash Flow Management Tips",
      excerpt: "Practical advice on managing cash flow effectively to ensure business stability and growth.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      category: "Cash Flow",
      date: "Dec 3, 2024",
      author: "Emma Taylor",
      link: "/news/cash-flow-management-tips"
    }
  ],
  showPageTitle = true,
  showMainTitle = true,
  showDescription = true,
  showNewsItems = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#fbbf24",
  ...props
}: AccountingNews1Props) {
  // Set section defaults for news
  const newsProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...newsProps}>
      <Element
        id="accountingNewsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Page Title Section */}
        {showPageTitle && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-16"
            display="block"
            position="relative"
            width="w-full"
            height="h-96"
            overflow="hidden"
            canvas={false}
          >
            {/* Background Image */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              top="top-0"
              left="left-0"
              right="right-0"
              bottom="bottom-0"
              canvas={false}
            >
              <CraftImage
                src={backgroundImage}
                alt="Latest News"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                margin=""
                padding=""
              />
            </Element>

            {/* Dark Overlay */}
            <Element
              is={Box}
              backgroundColor="bg-black"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              top="top-0"
              left="left-0"
              right="right-0"
              bottom="bottom-0"
              className="opacity-60"
              canvas={false}
            />

            {/* Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="relative"
              width="w-full"
              height="h-full"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                gap="gap-4"
                margin="h-full px-8 py-16"
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-yellow-400"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-8"
                      height="h-1"
                      canvas={false}
                    />
                    
                    <CraftText
                      text={pageTitle}
                      tagName="h1"
                      fontSize="text-2xl sm:text-3xl"
                      fontWeight="font-semibold"
                      color="text-white"
                      textAlign="text-left"
                      className="drop-shadow-lg"
                    />
                  </Element>
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={pageSubtitle}
                    tagName="h2"
                    fontSize="text-4xl sm:text-5xl"
                    fontWeight="font-medium"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                    className="drop-shadow-lg"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        )}

        {/* Main Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          canvas={false}
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="start"
            alignItems="center"
            gap="gap-12"
            margin=""
          >
            {/* Main Title and Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              width="w-full"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap="gap-4"
                margin=""
              >
                {showMainTitle && (
                  <CraftText
                    text={mainTitle}
                    tagName="h2"
                    fontSize="text-3xl sm:text-4xl"
                    fontWeight="font-bold"
                    color={textColor}
                    textAlign="text-center"
                    lineHeight="leading-tight"
                  />
                )}

                {showDescription && (
                  <CraftText
                    text={description}
                    tagName="p"
                    fontSize="text-lg"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                    className="max-w-3xl"
                  />
                )}
              </Element>
            </Element>

            {/* News Items Grid */}
            {showNewsItems && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                width="w-full"
                canvas={false}
              >
                <Element
                  is={Grid}
                  canvas
                  columns={3}
                  autoFit={false}
                  minColumnWidth="350px"
                  gap="gap-8"
                  autoRows="auto"
                >
                  {newsItems.map((item) => (
                    <Element
                      key={item.id}
                      is={Card}
                      variant="flat"
                      shadow="lg"
                      borderRadius="rounded-lg"
                      backgroundColor="bg-white"
                      borderColor=""
                      padding="0"
                      margin=""
                      hoverable={true}
                      clickable={true}
                      overflow="hidden"
                      border={false}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105"
                      canvas
                    >
                      {/* News Image */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        width="w-full"
                        height="h-48"
                        overflow="hidden"
                        canvas={false}
                      >
                        <CraftImage
                          src={item.image}
                          alt={item.title}
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          margin=""
                          padding=""
                          className="group-hover:scale-110 transition-transform duration-500"
                        />
                      </Element>

                      {/* News Content */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="p-6"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="column"
                          justifyContent="start"
                          alignItems="start"
                          gap="gap-4"
                          margin=""
                        >
                          {/* Category and Date */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            width="w-full"
                            canvas={false}
                          >
                            <Element
                              is={Flex}
                              canvas
                              flexDirection="row"
                              justifyContent="space-between"
                              alignItems="center"
                              gap="gap-4"
                              margin=""
                            >
                              <Element
                                is={Box}
                                backgroundColor="bg-yellow-100"
                                padding="px-3 py-1"
                                margin=""
                                display="block"
                                borderRadius="rounded-full"
                                canvas={false}
                              >
                                <CraftText
                                  text={item.category}
                                  tagName="span"
                                  fontSize="text-xs"
                                  fontWeight="font-semibold"
                                  color="text-yellow-800"
                                  textAlign="text-center"
                                  className="uppercase tracking-wider"
                                />
                              </Element>

                              <CraftText
                                text={item.date}
                                tagName="span"
                                fontSize="text-sm"
                                fontWeight="font-normal"
                                color="text-gray-500"
                                textAlign="text-right"
                              />
                            </Element>
                          </Element>

                          {/* Title */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            width="w-full"
                            canvas={false}
                          >
                            <CraftText
                              text={item.title}
                              tagName="h3"
                              fontSize="text-lg"
                              fontWeight="font-semibold"
                              color={textColor}
                              textAlign="text-left"
                              lineHeight="leading-tight"
                              className="group-hover:text-blue-600 transition-colors duration-200"
                            />
                          </Element>

                          {/* Excerpt */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            width="w-full"
                            canvas={false}
                          >
                            <CraftText
                              text={item.excerpt}
                              tagName="p"
                              fontSize="text-sm"
                              fontWeight="font-normal"
                              color="text-gray-600"
                              textAlign="text-left"
                              lineHeight="leading-relaxed"
                            />
                          </Element>

                          {/* Author and Read More */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            width="w-full"
                            canvas={false}
                          >
                            <Element
                              is={Flex}
                              canvas
                              flexDirection="row"
                              justifyContent="space-between"
                              alignItems="center"
                              gap="gap-4"
                              margin=""
                            >
                              <CraftText
                                text={`By ${item.author}`}
                                tagName="span"
                                fontSize="text-sm"
                                fontWeight="font-medium"
                                color="text-gray-500"
                                textAlign="text-left"
                              />

                              <CraftButton
                                text="Read More"
                                size="sm"
                                backgroundColor="transparent"
                                textColor="#1f40af"
                                borderRadius="rounded-none"
                                padding="px-0 py-1"
                                width="w-auto"
                                className="hover:text-blue-600 transition-colors duration-200 underline"
                              />
                            </Element>
                          </Element>
                        </Element>
                      </Element>
                    </Element>
                  ))}
                </Element>
              </Element>
            )}

            {/* Load More Button */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftButton
                text="Load More Articles"
                size="lg"
                backgroundColor="#1f40af"
                textColor="#ffffff"
                borderRadius="rounded-lg"
                padding="px-8 py-4"
                width="w-auto"
                className="hover:bg-blue-700 transition-colors duration-200"
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingNews1.craft = {
  displayName: "Accounting News 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // News specific props
    pageTitle: "Latest news",
    pageSubtitle: "Stay updated with our insights",
    mainTitle: "Accounting Insights & News",
    description: "Stay informed with the latest trends, tips, and insights from our accounting experts.",
    showPageTitle: true,
    showMainTitle: true,
    showDescription: true,
    showNewsItems: true,
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: "#fbbf24",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
