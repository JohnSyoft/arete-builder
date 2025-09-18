import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
  };
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
}

interface AccountingBlogSingle1Props extends SectionProps {
  // Blog single specific props
  pageTitle?: string;
  pageSubtitle?: string;
  backgroundImage?: string;
  blogPost?: BlogPost;
  relatedPosts?: {
    id: string;
    title: string;
    image: string;
    date: string;
    link: string;
  }[];
  // Settings
  showPageTitle?: boolean;
  showBlogPost?: boolean;
  showRelatedPosts?: boolean;
  showAuthorBio?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function AccountingBlogSingle1({
  pageTitle = "Blog Post",
  pageSubtitle = "Insights and expertise",
  backgroundImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=500&fit=crop",
  blogPost = {
    id: "blog-1",
    title: "The Future of Accounting: Trends and Technologies Shaping 2025",
    excerpt: "Explore the latest trends and technologies that are revolutionizing the accounting industry and how they can benefit your business.",
    content: "The accounting industry is undergoing a significant transformation, driven by technological advancements and changing business needs. In this comprehensive guide, we'll explore the key trends and technologies that are shaping the future of accounting in 2025 and beyond.\n\n## Key Trends in Modern Accounting\n\n### 1. Artificial Intelligence and Machine Learning\nAI and ML are revolutionizing how accountants process data, identify patterns, and make predictions. These technologies enable:\n- Automated data entry and reconciliation\n- Predictive analytics for financial forecasting\n- Fraud detection and risk assessment\n- Real-time financial insights\n\n### 2. Cloud-Based Solutions\nCloud accounting has become the standard for modern businesses, offering:\n- Real-time collaboration\n- Automatic software updates\n- Enhanced security and backup\n- Scalable infrastructure\n\n### 3. Blockchain Technology\nBlockchain is emerging as a game-changer for accounting, providing:\n- Immutable transaction records\n- Smart contracts for automated compliance\n- Enhanced transparency and audit trails\n- Reduced fraud and errors\n\n## Benefits for Your Business\n\nImplementing these technologies can help your business:\n- Reduce manual work and errors\n- Improve accuracy and compliance\n- Enhance decision-making capabilities\n- Increase efficiency and productivity\n- Better financial planning and forecasting\n\n## Getting Started\n\nTo leverage these trends effectively, consider:\n1. Assessing your current accounting processes\n2. Identifying areas for improvement\n3. Researching suitable technology solutions\n4. Planning a phased implementation approach\n5. Training your team on new tools and processes\n\n## Conclusion\n\nThe future of accounting is bright, with technology enabling more efficient, accurate, and strategic financial management. By embracing these trends, businesses can position themselves for success in an increasingly digital world.",
    featuredImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=400&fit=crop",
    author: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      bio: "Senior Accounting Consultant with over 10 years of experience in financial planning and business strategy."
    },
    publishDate: "December 15, 2024",
    readTime: "8 min read",
    category: "Technology",
    tags: ["Accounting", "Technology", "AI", "Cloud Computing", "Future Trends"]
  },
  relatedPosts = [
    {
      id: "related-1",
      title: "Cloud Accounting Best Practices",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      date: "Dec 12, 2024",
      link: "/blog/cloud-accounting-best-practices"
    },
    {
      id: "related-2",
      title: "AI in Financial Planning",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      date: "Dec 10, 2024",
      link: "/blog/ai-financial-planning"
    },
    {
      id: "related-3",
      title: "Blockchain for Accounting",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop",
      date: "Dec 8, 2024",
      link: "/blog/blockchain-accounting"
    }
  ],
  showPageTitle = true,
  showBlogPost = true,
  showRelatedPosts = true,
  showAuthorBio = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#fbbf24",
  ...props
}: AccountingBlogSingle1Props) {
  // Set section defaults for blog single
  const blogSingleProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...blogSingleProps}>
      <Element
        id="accountingBlogSingleContent"
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
                alt="Blog Post"
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
            flexDirection="row"
            justifyContent="space-between"
            alignItems="start"
            gap="gap-12"
            margin=""
          >
            {/* Main Blog Content */}
            {showBlogPost && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                width="w-2/3"
                canvas={false}
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="start"
                  gap="gap-8"
                  margin=""
                >
                  {/* Featured Image */}
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
                      is={Card}
                      variant="flat"
                      shadow="lg"
                      borderRadius="rounded-lg"
                      backgroundColor="bg-white"
                      borderColor=""
                      padding="0"
                      margin=""
                      hoverable={false}
                      clickable={false}
                      overflow="hidden"
                      border={false}
                      className="w-full"
                      canvas
                    >
                      <CraftImage
                        src={blogPost.featuredImage}
                        alt={blogPost.title}
                        width="w-full"
                        height="h-96"
                        objectFit="object-cover"
                        margin=""
                        padding=""
                      />
                    </Element>
                  </Element>

                  {/* Blog Meta */}
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
                        padding="px-4 py-2"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        canvas={false}
                      >
                        <CraftText
                          text={blogPost.category}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-semibold"
                          color="text-yellow-800"
                          textAlign="text-center"
                          className="uppercase tracking-wider"
                        />
                      </Element>

                      <Element
                        is={Flex}
                        canvas
                        flexDirection="row"
                        justifyContent="end"
                        alignItems="center"
                        gap="gap-4"
                        margin=""
                      >
                        <CraftText
                          text={blogPost.publishDate}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-right"
                        />
                        <CraftText
                          text={blogPost.readTime}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-right"
                        />
                      </Element>
                    </Element>
                  </Element>

                  {/* Blog Title */}
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
                      text={blogPost.title}
                      tagName="h1"
                      fontSize="text-3xl sm:text-4xl"
                      fontWeight="font-bold"
                      color={textColor}
                      textAlign="text-left"
                      lineHeight="leading-tight"
                    />
                  </Element>

                  {/* Blog Excerpt */}
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
                      text={blogPost.excerpt}
                      tagName="p"
                      fontSize="text-lg"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                    />
                  </Element>

                  {/* Blog Content */}
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
                      text={blogPost.content}
                      tagName="div"
                      fontSize="text-base"
                      fontWeight="font-normal"
                      color="text-gray-700"
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                      className="prose prose-lg max-w-none"
                    />
                  </Element>

                  {/* Tags */}
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
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-2"
                      margin=""
                      wrap="wrap"
                    >
                      {blogPost.tags.map((tag, index) => (
                        <Element
                          key={index}
                          is={Box}
                          backgroundColor="bg-gray-100"
                          padding="px-3 py-1"
                          margin=""
                          display="block"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text={`#${tag}`}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-gray-600"
                            textAlign="text-center"
                          />
                        </Element>
                      ))}
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}

            {/* Sidebar */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              width="w-1/3"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap="gap-8"
                margin=""
              >
                {/* Author Bio */}
                {showAuthorBio && (
                  <Element
                    is={Card}
                    variant="flat"
                    shadow="lg"
                    borderRadius="rounded-lg"
                    backgroundColor="bg-white"
                    borderColor=""
                    padding="p-6"
                    margin=""
                    hoverable={false}
                    clickable={false}
                    overflow="visible"
                    border={false}
                    className="w-full"
                    canvas
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-4"
                      margin=""
                    >
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        width="w-20"
                        height="w-20"
                        borderRadius="rounded-full"
                        overflow="hidden"
                        canvas={false}
                      >
                        <CraftImage
                          src={blogPost.author.avatar}
                          alt={blogPost.author.name}
                          width="w-full"
                          height="h-full"
                          objectFit="object-cover"
                          margin=""
                          padding=""
                        />
                      </Element>

                      <CraftText
                        text={blogPost.author.name}
                        tagName="h3"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color={textColor}
                        textAlign="text-center"
                      />

                      <CraftText
                        text={blogPost.author.bio}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-center"
                        lineHeight="leading-relaxed"
                      />
                    </Element>
                  </Element>
                )}

                {/* Related Posts */}
                {showRelatedPosts && (
                  <Element
                    is={Card}
                    variant="flat"
                    shadow="lg"
                    borderRadius="rounded-lg"
                    backgroundColor="bg-white"
                    borderColor=""
                    padding="p-6"
                    margin=""
                    hoverable={false}
                    clickable={false}
                    overflow="visible"
                    border={false}
                    className="w-full"
                    canvas
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
                      <CraftText
                        text="Related Posts"
                        tagName="h3"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color={textColor}
                        textAlign="text-left"
                      />

                      <Element
                        is={Flex}
                        canvas
                        flexDirection="column"
                        justifyContent="start"
                        alignItems="stretch"
                        gap="gap-4"
                        margin=""
                      >
                        {relatedPosts.map((post) => (
                          <Element
                            key={post.id}
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
                              justifyContent="start"
                              alignItems="start"
                              gap="gap-3"
                              margin=""
                            >
                              <Element
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin=""
                                display="block"
                                width="w-16"
                                height="w-16"
                                borderRadius="rounded-lg"
                                overflow="hidden"
                                canvas={false}
                              >
                                <CraftImage
                                  src={post.image}
                                  alt={post.title}
                                  width="w-full"
                                  height="h-full"
                                  objectFit="object-cover"
                                  margin=""
                                  padding=""
                                />
                              </Element>

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
                                  alignItems="start"
                                  gap="gap-1"
                                  margin=""
                                >
                                  <CraftText
                                    text={post.title}
                                    tagName="h4"
                                    fontSize="text-sm"
                                    fontWeight="font-semibold"
                                    color={textColor}
                                    textAlign="text-left"
                                    lineHeight="leading-tight"
                                    className="hover:text-blue-600 transition-colors duration-200"
                                  />
                                  
                                  <CraftText
                                    text={post.date}
                                    tagName="span"
                                    fontSize="text-xs"
                                    fontWeight="font-normal"
                                    color="text-gray-500"
                                    textAlign="text-left"
                                  />
                                </Element>
                              </Element>
                            </Element>
                          </Element>
                        ))}
                      </Element>
                    </Element>
                  </Element>
                )}
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingBlogSingle1.craft = {
  displayName: "Accounting Blog Single 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Blog single specific props
    pageTitle: "Blog Post",
    pageSubtitle: "Insights and expertise",
    showPageTitle: true,
    showBlogPost: true,
    showRelatedPosts: true,
    showAuthorBio: true,
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
