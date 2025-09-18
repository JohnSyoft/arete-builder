import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface InstagramPost {
  id: string;
  image: string;
  alt: string;
  link: string;
  likes?: number;
  comments?: number;
}

interface HospitalityInstagram1Props extends SectionProps {
  // Instagram specific props
  title?: string;
  subtitle?: string;
  description?: string;
  instagramHandle?: string;
  followButtonText?: string;
  posts?: InstagramPost[];
  // Settings
  showStats?: boolean;
  showFollowButton?: boolean;
  postsPerRow?: number;
  backgroundColor?: string;
}

export function HospitalityInstagram1({
  title = "Follow Our Journey",
  subtitle = "Instagram",
  description = "Get a glimpse into the luxury experiences and behind-the-scenes moments at our resort.",
  instagramHandle = "@luxuryresort",
  followButtonText = "Follow crafto",
  posts = [
    {
      id: "post-1",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=600&fit=crop",
      alt: "Luxury resort pool",
      link: "https://instagram.com/p/1",
      likes: 1240,
      comments: 89
    },
    {
      id: "post-2",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=600&fit=crop",
      alt: "Fine dining experience",
      link: "https://instagram.com/p/2",
      likes: 892,
      comments: 45
    },
    {
      id: "post-3",
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=600&fit=crop",
      alt: "Spa relaxation",
      link: "https://instagram.com/p/3",
      likes: 2156,
      comments: 123
    },
    {
      id: "post-4",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=600&fit=crop",
      alt: "Sunset view",
      link: "https://instagram.com/p/4",
      likes: 3421,
      comments: 234
    },
    {
      id: "post-5",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=600&fit=crop",
      alt: "Gourmet breakfast",
      link: "https://instagram.com/p/5",
      likes: 1876,
      comments: 98
    }
  ],
  showStats = true,
  showFollowButton = true,
  postsPerRow = 5,
  backgroundColor = "#f8fafc",
  ...props
}: HospitalityInstagram1Props) {
  // Set section defaults for Instagram
  const instagramProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...instagramProps}>
      <Element
        id="instagramContent"
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
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-4"
            margin="text-center"
          >
            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-2"
              display="block"
              canvas={false}
            >
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-medium"
                color="text-amber-600"
                textAlign="text-center"
              />
            </Element>

            {/* Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-4"
              display="block"
              canvas={false}
            >
              <CraftText
                text={title}
                tagName="h2"
                fontSize="text-3xl sm:text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-8"
              display="block"
              canvas={false}
            >
              <CraftText
                text={description}
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                className="max-w-2xl mx-auto"
              />
            </Element>
          </Element>
        </Element>

        {/* Instagram Posts Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={postsPerRow}
            autoFit={true}
            minColumnWidth="200px"
            gap="gap-4"
            autoRows="auto"
          >
            {posts.map((post, index) => (
              <Element
                key={post.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-lg"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="hidden"
                border={false}
                className="group hover:shadow-xl transition-all duration-300"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  height="h-48"
                  position="relative"
                  canvas={false}
                >
                  <CraftImage
                    src={post.image}
                    alt={post.alt}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-lg"
                    margin=""
                    padding=""
                    className="group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Instagram Icon Overlay */}
                  <Element
                    is={Box}
                    backgroundColor="bg-black/50"
                    padding="0"
                    margin=""
                    display="block"
                    position="absolute"
                    top="top-0"
                    left="left-0"
                    right="right-0"
                    bottom="bottom-0"
                    borderRadius="rounded-lg"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="gap-2"
                      margin="text-center h-full"
                    >
                      <Element
                        is={Box}
                        backgroundColor="bg-white/20"
                        padding="p-3"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        width="w-12"
                        height="h-12"
                        canvas={false}
                      >
                        <CraftText
                          text="📷"
                          tagName="span"
                          fontSize="text-xl"
                          textAlign="text-center"
                        />
                      </Element>

                      {showStats && (
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="center"
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
                            canvas={false}
                          >
                            <CraftText
                              text={`❤️ ${post.likes}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-white"
                              textAlign="text-center"
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
                            <CraftText
                              text={`💬 ${post.comments}`}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-semibold"
                              color="text-white"
                              textAlign="text-center"
                            />
                          </Element>
                        </Element>
                      )}
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Follow Button Section */}
        {showFollowButton && (
          <Element
            is={Box}
            backgroundColor="bg-white"
            padding="py-12 px-8"
            margin=""
            display="block"
            borderRadius="rounded-2xl"
            shadow="lg"
            canvas
          >
            <Element
              is={Flex}
              canvas
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="gap-6"
              margin="text-center"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftText
                  text={`Follow us on Instagram ${instagramHandle}`}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-semibold"
                  color="text-gray-900"
                  textAlign="text-center"
                  margin="mb-2"
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
                <CraftText
                  text="Stay connected and be the first to see our latest updates, special offers, and guest experiences."
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                  className="max-w-lg mx-auto"
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
                <CraftButton
                  text={followButtonText}
                  size="lg"
                  backgroundColor="#d97706"
                  textColor="#ffffff"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-amber-600 transition-colors duration-300"
                />
              </Element>
            </Element>
          </Element>
        )}
      </Element>
    </Section>
  );
}

HospitalityInstagram1.craft = {
  displayName: "Hospitality Instagram 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Instagram specific props
    title: "Follow Our Journey",
    subtitle: "Instagram",
    description: "Get a glimpse into the luxury experiences and behind-the-scenes moments at our resort.",
    instagramHandle: "@luxuryresort",
    followButtonText: "Follow crafto",
    showStats: true,
    showFollowButton: true,
    postsPerRow: 5,
    backgroundColor: "#f8fafc",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

