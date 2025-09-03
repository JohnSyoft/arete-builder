import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernBlog1Props extends SectionProps {
  // Header content
  sectionTitle?: string;
  sectionDescription?: string;
  viewAllText?: string;
  
  // Blog posts
  blogPosts?: Array<{
    id: string;
    title: string;
    excerpt: string;
    image: string;
    category: string;
    author: string;
    authorImage: string;
    publishDate: string;
    readTime: string;
    featured?: boolean;
  }>;
  
  // Categories
  categories?: Array<{
    id: string;
    name: string;
    count: number;
  }>;
  
  // Newsletter signup
  newsletterTitle?: string;
  newsletterDescription?: string;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
}

export function ModernBlog1({
  sectionTitle = "Latest Insights & Updates",
  sectionDescription = "Stay up to date with the latest trends, insights, and stories from our team and industry experts.",
  viewAllText = "View All Posts",
  blogPosts = [
    {
      id: "ai-future",
      title: "The Future of AI in Software Development",
      excerpt: "Explore how artificial intelligence is revolutionizing the way we build software and what it means for developers.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Technology",
      author: "Sarah Chen",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=100&h=100&fit=crop&crop=face",
      publishDate: "Dec 15, 2024",
      readTime: "8 min read",
      featured: true
    },
    {
      id: "startup-guide",
      title: "Building a Successful SaaS Startup in 2024",
      excerpt: "Learn the essential strategies and frameworks needed to launch and scale your SaaS business.",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
      category: "Business",
      author: "Michael Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      publishDate: "Dec 12, 2024",
      readTime: "12 min read"
    },
    {
      id: "design-trends",
      title: "UI/UX Design Trends That Will Dominate 2024",
      excerpt: "Discover the latest design trends and how to implement them in your next project for maximum impact.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      category: "Design",
      author: "Emily Johnson",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      publishDate: "Dec 10, 2024",
      readTime: "6 min read"
    },
    {
      id: "remote-work",
      title: "Mastering Remote Team Collaboration",
      excerpt: "Best practices and tools for managing distributed teams and maintaining productivity in remote work environments.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      category: "Productivity",
      author: "David Kim",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      publishDate: "Dec 8, 2024",
      readTime: "10 min read"
    },
    {
      id: "security-best-practices",
      title: "Security Best Practices for Modern Web Apps",
      excerpt: "Essential security measures every developer should implement to protect their applications and user data.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      category: "Security",
      author: "Lisa Wang",
      authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      publishDate: "Dec 5, 2024",
      readTime: "15 min read"
    },
    {
      id: "performance-optimization",
      title: "Web Performance Optimization Techniques",
      excerpt: "Proven strategies to make your web applications lightning fast and improve user experience.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Performance",
      author: "Alex Thompson",
      authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      publishDate: "Dec 3, 2024",
      readTime: "9 min read"
    }
  ],
  categories = [
    { id: "technology", name: "Technology", count: 12 },
    { id: "business", name: "Business", count: 8 },
    { id: "design", name: "Design", count: 15 },
    { id: "productivity", name: "Productivity", count: 6 },
    { id: "security", name: "Security", count: 4 }
  ],
  newsletterTitle = "Never Miss an Update",
  newsletterDescription = "Subscribe to our newsletter for the latest insights, tips, and industry news delivered straight to your inbox.",
  primaryColor = "#4F46E5",
  accentColor = "#F59E0B",
  ...props
}: ModernBlog1Props) {
  
  // Set section defaults
  const blogProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...blogProps}>
      <Element
        id="modernBlogContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 64px 0"
          display="block"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="between"
            alignItems="end"
            gap="gap-8"
            margin="0"
            wrap="wrap"
          >
            {/* Title & Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              canvas
            >
              {/* Section Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={sectionTitle}
                  tagName="h2"
                  fontSize="text-4xl sm:text-5xl lg:text-6xl"
                  fontWeight="font-black"
                  color="text-gray-900"
                  textAlign="text-left"
                  margin="0"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Section Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <div className="max-w-2xl">
                  <CraftText
                    text={sectionDescription}
                    tagName="p"
                    fontSize="text-xl"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    margin="0"
                  />
                </div>
              </Element>
            </Element>

            {/* View All Button */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftButton
                text={viewAllText}
                variant="outline"
                size="lg"
                backgroundColor="transparent"
                textColor={primaryColor}
                borderRadius="12px"
                padding="px-6 py-3"
                width="w-auto"
              />
            </Element>
          </Element>
        </Element>

        {/* Featured Post */}
        {blogPosts.find(post => post.featured) && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 64px 0"
            display="block"
            canvas
          >
            {(() => {
              const featuredPost = blogPosts.find(post => post.featured)!;
              return (
                <Element
                  id={`featuredPost-${featuredPost.id}`}
                  is={Card}
                  variant="flat"
                  shadow="xl"
                  borderRadius="24px"
                  backgroundColor="#ffffff"
                  borderColor="rgba(0, 0, 0, 0.1)"
                  padding="0"
                  margin="0"
                  hoverable={true}
                  clickable={false}
                  canvas
                >
                  <Element
                    is={Grid}
                    canvas
                    columns={2}
                    autoFit={false}
                    minColumnWidth="400px"
                    gap="0"
                    autoRows="auto"
                  >
                    {/* Featured Image */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      width="100%"
                      height="400px"
                      canvas
                    >
                      <CraftImage
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-l-24"
                        margin=""
                        padding=""
                      />
                    </Element>

                    {/* Featured Content */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="48px"
                      margin="0"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      canvas
                    >
                      {/* Category Badge */}
                      <Element
                        is={Box}
                        backgroundColor={primaryColor}
                        padding="6px 12px"
                        margin="0 0 16px 0"
                        borderRadius="20px"
                        display="inline-flex"
                        alignItems="center"
                        width="fit-content"
                        canvas={false}
                      >
                        <CraftText
                          text={featuredPost.category}
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-bold"
                          color="text-white"
                          textAlign="text-left"
                          margin="0"
                        />
                      </Element>

                      {/* Featured Title */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 16px 0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={featuredPost.title}
                          tagName="h3"
                          fontSize="text-2xl sm:text-3xl"
                          fontWeight="font-bold"
                          color="text-gray-900"
                          textAlign="text-left"
                          margin="0"
                          lineHeight="leading-tight"
                        />
                      </Element>

                      {/* Featured Excerpt */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0 0 24px 0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={featuredPost.excerpt}
                          tagName="p"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-gray-600"
                          textAlign="text-left"
                          lineHeight="leading-relaxed"
                          margin="0"
                        />
                      </Element>

                      {/* Author & Meta */}
                      <Element
                        is={Flex}
                        canvas
                        flexDirection="row"
                        justifyContent="between"
                        alignItems="center"
                        gap="gap-4"
                        margin="0"
                        wrap="wrap"
                      >
                        {/* Author Info */}
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="start"
                          alignItems="center"
                          gap="gap-3"
                          margin="0"
                          wrap="nowrap"
                        >
                          {/* Author Avatar */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0"
                            display="block"
                            width="40px"
                            height="40px"
                            borderRadius="50%"
                            canvas
                          >
                            <CraftImage
                              src={featuredPost.authorImage}
                              alt={featuredPost.author}
                              width="w-full"
                              height="h-full"
                              objectFit="object-cover"
                              borderRadius="rounded-full"
                              margin=""
                              padding=""
                            />
                          </Element>

                          {/* Author Details */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0"
                            display="flex"
                            flexDirection="column"
                            canvas
                          >
                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin="0"
                              display="block"
                              canvas={false}
                            >
                              <CraftText
                                text={featuredPost.author}
                                tagName="div"
                                fontSize="text-sm"
                                fontWeight="font-semibold"
                                color="text-gray-900"
                                textAlign="text-left"
                                margin="0"
                              />
                            </Element>

                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin="0"
                              display="block"
                              canvas={false}
                            >
                              <CraftText
                                text={`${featuredPost.publishDate} • ${featuredPost.readTime}`}
                                tagName="div"
                                fontSize="text-xs"
                                fontWeight="font-normal"
                                color="text-gray-500"
                                textAlign="text-left"
                                margin="0"
                              />
                            </Element>
                          </Element>
                        </Element>

                        {/* Read More */}
                        <Element
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
                            textColor="#ffffff"
                            borderRadius="8px"
                            padding="px-4 py-2"
                            width="w-auto"
                          />
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                </Element>
              );
            })()}
          </Element>
        )}

        {/* Blog Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="350px"
          gap="32px"
          autoRows="auto"
          margin="0 0 96px 0"
        >
          {blogPosts.filter(post => !post.featured).map((post) => (
            <Element
              key={post.id}
              id={`blogPost-${post.id}`}
              is={Card}
              variant="flat"
              shadow="lg"
              borderRadius="20px"
              backgroundColor="#ffffff"
              borderColor="rgba(0, 0, 0, 0.1)"
              padding="0"
              margin="0"
              hoverable={true}
              clickable={false}
              canvas
            >
              {/* Post Image */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 20px 0"
                display="block"
                width="100%"
                height="200px"
                canvas
              >
                <CraftImage
                  src={post.image}
                  alt={post.title}
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-t-20"
                  margin=""
                  padding=""
                />
              </Element>

              {/* Post Content */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0 24px 24px 24px"
                margin="0"
                display="flex"
                flexDirection="column"
                canvas
              >
                {/* Category */}
                <Element
                  is={Box}
                  backgroundColor="rgba(79, 70, 229, 0.1)"
                  padding="4px 8px"
                  margin="0 0 12px 0"
                  borderRadius="12px"
                  display="inline-flex"
                  alignItems="center"
                  width="fit-content"
                  canvas={false}
                >
                  <CraftText
                    text={post.category}
                    tagName="span"
                    fontSize="text-xs"
                    fontWeight="font-semibold"
                    color={primaryColor}
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                {/* Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 12px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={post.title}
                    tagName="h3"
                    fontSize="text-lg"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    margin="0"
                    lineHeight="leading-tight"
                  />
                </Element>

                {/* Excerpt */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 20px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={post.excerpt}
                    tagName="p"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    margin="0"
                  />
                </Element>

                {/* Author & Meta */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="between"
                  alignItems="center"
                  gap="gap-3"
                  margin="0"
                  wrap="wrap"
                >
                  {/* Author */}
                  <Element
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
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      width="24px"
                      height="24px"
                      borderRadius="50%"
                      canvas
                    >
                      <CraftImage
                        src={post.authorImage}
                        alt={post.author}
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-full"
                        margin=""
                        padding=""
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={post.author}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-medium"
                        color="text-gray-700"
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>

                  {/* Read Time */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={post.readTime}
                      tagName="span"
                      fontSize="text-xs"
                      fontWeight="font-normal"
                      color="text-gray-500"
                      textAlign="text-right"
                      margin="0"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>
          ))}
        </Element>

        {/* Newsletter CTA */}
        <Element
          is={Card}
          variant="flat"
          shadow="xl"
          borderRadius="24px"
          backgroundColor="#f8fafc"
          borderColor="transparent"
          padding="64px 48px"
          margin="0"
          hoverable={false}
          clickable={false}
          canvas
        >
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            canvas
          >
            {/* Newsletter Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 16px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={newsletterTitle}
                tagName="h3"
                fontSize="text-3xl sm:text-4xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="0"
              />
            </Element>

            {/* Newsletter Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 32px 0"
              display="block"
              canvas={false}
            >
              <div className="max-w-2xl">
                <CraftText
                  text={newsletterDescription}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </div>
            </Element>

            {/* Newsletter Form */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-3"
              margin="0"
              wrap="nowrap"
            >
              {/* Email Input */}
              <Element
                is={Box}
                backgroundColor="#ffffff"
                padding="16px 20px"
                margin="0"
                borderRadius="12px"
                display="flex"
                alignItems="center"
                width="320px"
                border="1px solid rgba(0, 0, 0, 0.1)"
                canvas={false}
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="bg-transparent text-gray-900 placeholder-gray-500 outline-none w-full"
                />
              </Element>

              {/* Subscribe Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text="Subscribe"
                  size="lg"
                  backgroundColor={primaryColor}
                  textColor="#ffffff"
                  borderRadius="12px"
                  padding="px-6 py-4"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ModernBlog1.craft = {
  displayName: "Modern Blog 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern Blog specific props
    sectionTitle: "Latest Insights & Updates",
    sectionDescription: "Stay up to date with the latest trends, insights, and stories from our team and industry experts.",
    viewAllText: "View All Posts",
    blogPosts: [
      {
        id: "ai-future",
        title: "The Future of AI in Software Development",
        excerpt: "Explore how artificial intelligence is revolutionizing the way we build software and what it means for developers.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        category: "Technology",
        author: "Sarah Chen",
        authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=100&h=100&fit=crop&crop=face",
        publishDate: "Dec 15, 2024",
        readTime: "8 min read",
        featured: true
      },
      {
        id: "startup-guide",
        title: "Building a Successful SaaS Startup in 2024",
        excerpt: "Learn the essential strategies and frameworks needed to launch and scale your SaaS business.",
        image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=600&h=400&fit=crop",
        category: "Business",
        author: "Michael Rodriguez",
        authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
        publishDate: "Dec 12, 2024",
        readTime: "12 min read"
      },
      {
        id: "design-trends",
        title: "UI/UX Design Trends That Will Dominate 2024",
        excerpt: "Discover the latest design trends and how to implement them in your next project for maximum impact.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        category: "Design",
        author: "Emily Johnson",
        authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
        publishDate: "Dec 10, 2024",
        readTime: "6 min read"
      }
    ],
    categories: [
      { id: "technology", name: "Technology", count: 12 },
      { id: "business", name: "Business", count: 8 },
      { id: "design", name: "Design", count: 15 },
      { id: "productivity", name: "Productivity", count: 6 },
      { id: "security", name: "Security", count: 4 }
    ],
    newsletterTitle: "Never Miss an Update",
    newsletterDescription: "Subscribe to our newsletter for the latest insights, tips, and industry news delivered straight to your inbox.",
    primaryColor: "#4F46E5",
    accentColor: "#F59E0B",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};