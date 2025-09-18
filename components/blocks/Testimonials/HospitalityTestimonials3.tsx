import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Testimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
  verified: boolean;
}

interface HospitalityTestimonials3Props extends SectionProps {
  // Testimonials specific props
  title?: string;
  subtitle?: string;
  description?: string;
  testimonials?: Testimonial[];
  totalReviews?: number;
  reviewPlatform?: string;
  platformLogo?: string;
  platformLink?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showRatings?: boolean;
  showPlatform?: boolean;
  showVerified?: boolean;
  layout?: "grid" | "carousel";
}

export function HospitalityTestimonials3({
  title = "Exclusive ratings",
  subtitle = "Guest Reviews",
  description = "Enjoy in resorts and awesome ratings from our valued guests.",
  testimonials = [
    {
      id: "testimonial-1",
      name: "Herman Miller",
      title: "Guest",
      company: "ThemeZaa",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
      rating: 5,
      review: "We are happy to offer our guests truly fabulous experience of relaxing, balanced, and memorable vacation.",
      verified: true
    },
    {
      id: "testimonial-2",
      name: "Matthew Taylor",
      title: "Guest",
      company: "ThemeZaa",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
      review: "What a great experience! I have visited one of the resorts with my friends and we had a great time! Highly recommended.",
      verified: true
    },
    {
      id: "testimonial-3",
      name: "Sarah Johnson",
      title: "VIP Guest",
      company: "Luxury Travel",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop",
      rating: 5,
      review: "Exceptional service and breathtaking views. This resort exceeded all our expectations and created unforgettable memories.",
      verified: true
    },
    {
      id: "testimonial-4",
      name: "David Chen",
      title: "Business Traveler",
      company: "Global Corp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      rating: 5,
      review: "Perfect blend of luxury and comfort. The facilities are world-class and the staff goes above and beyond.",
      verified: true
    }
  ],
  totalReviews = 3583,
  reviewPlatform = "TripAdvisor",
  platformLogo = "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=120&h=60&fit=crop",
  platformLink = "#",
  primaryButtonText = "Read All Reviews",
  secondaryButtonText = "Write Review",
  showRatings = true,
  showPlatform = true,
  showVerified = true,
  layout = "grid",
  ...props
}: HospitalityTestimonials3Props) {
  // Set section defaults for testimonials
  const testimonialsProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Element
        key={index}
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin=""
        display="block"
        canvas={false}
      >
        <CraftText
          text="★"
          tagName="span"
          fontSize="text-lg"
          color={index < rating ? "text-amber-400" : "text-gray-300"}
          textAlign="text-center"
        />
      </Element>
    ));
  };

  return (
    <Section {...testimonialsProps}>
      <Element
        id="testimonialsContent"
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

        {/* Testimonials Grid */}
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
            columns={2}
            autoFit={false}
            minColumnWidth="400px"
            gap="gap-8"
            autoRows="auto"
          >
            {testimonials.map((testimonial, index) => (
              <Element
                key={testimonial.id}
                is={Card}
                variant="flat"
                shadow="2xl"
                borderRadius="rounded-xl"
                backgroundColor="bg-white"
                borderColor="border-gray-200"
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="visible"
                border={true}
                className="group hover:shadow-3xl transition-all duration-300"
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-8 lg:p-6"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-6"
                    margin=""
                  >
                    {/* Avatar */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width="w-20 h-20 sm:w-16 sm:h-16"
                        height="h-20 sm:h-16"
                        objectFit="object-cover"
                        borderRadius="rounded-full"
                        margin=""
                        padding=""
                      />
                    </Element>

                    {/* Content */}
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
                        alignItems="stretch"
                        gap="gap-4"
                        margin=""
                      >
                        {/* Review Text */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={testimonial.review}
                            tagName="p"
                            fontSize="text-base"
                            fontWeight="font-normal"
                            color="text-gray-700"
                            textAlign="text-left"
                            lineHeight="leading-relaxed"
                          />
                        </Element>

                        {/* Rating */}
                        {showRatings && (
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
                              gap="gap-1"
                              margin=""
                            >
                              {renderStars(testimonial.rating)}
                            </Element>
                          </Element>
                        )}
                      </Element>
                    </Element>
                  </Element>
                </Element>

                {/* Footer */}
                <Element
                  is={Box}
                  backgroundColor="bg-gray-50"
                  padding="px-8 py-4 lg:px-6"
                  margin=""
                  display="block"
                  borderRadius="rounded-b-xl"
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
                    {/* Guest Info */}
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
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={testimonial.name}
                            tagName="span"
                            fontSize="text-lg"
                            fontWeight="font-semibold"
                            color="text-gray-900"
                            textAlign="text-left"
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
                            text={`${testimonial.title}, ${testimonial.company}`}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-normal"
                            color="text-gray-600"
                            textAlign="text-left"
                          />
                        </Element>
                      </Element>
                    </Element>

                    {/* Verified Badge */}
                    {showVerified && testimonial.verified && (
                      <Element
                        is={Box}
                        backgroundColor="bg-green-100"
                        padding="px-3 py-1"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        canvas={false}
                      >
                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="center"
                          alignItems="center"
                          gap="gap-1"
                          margin=""
                        >
                          <CraftText
                            text="✓"
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-bold"
                            color="text-green-700"
                            textAlign="text-center"
                          />
                          <CraftText
                            text="Verified"
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-semibold"
                            color="text-green-700"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>
                    )}
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* Platform Integration */}
        {showPlatform && (
          <Element
            is={Box}
            backgroundColor="bg-gray-50"
            padding="py-12 px-8"
            margin="mb-16"
            display="block"
            borderRadius="rounded-2xl"
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
                  text={`Check all ${totalReviews.toLocaleString()} exclusive visitor reviews on`}
                  tagName="p"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-medium"
                  color="text-gray-900"
                  textAlign="text-center"
                  margin="mb-4"
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
                <CraftImage
                  src={platformLogo}
                  alt={reviewPlatform}
                  width="w-24 h-12"
                  height="h-12"
                  objectFit="object-contain"
                  margin=""
                  padding=""
                />
              </Element>

              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="gap-4"
                margin=""
                wrap="wrap"
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftButton
                    text={primaryButtonText}
                    size="lg"
                    backgroundColor="#d97706"
                    textColor="#ffffff"
                    borderRadius="rounded-full"
                    padding="px-8 py-4"
                    width="w-auto"
                    className="hover:bg-amber-600 transition-colors duration-300"
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
                    text={secondaryButtonText}
                    variant="outline"
                    size="lg"
                    backgroundColor="transparent"
                    textColor="#d97706"
                    borderColor="#d97706"
                    borderRadius="rounded-full"
                    padding="px-8 py-4"
                    width="w-auto"
                    className="hover:bg-amber-100 transition-colors duration-300"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        )}
      </Element>
    </Section>
  );
}

HospitalityTestimonials3.craft = {
  displayName: "Hospitality Testimonials 3",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Testimonials specific props
    title: "Exclusive ratings",
    subtitle: "Guest Reviews",
    description: "Enjoy in resorts and awesome ratings from our valued guests.",
    totalReviews: 3583,
    reviewPlatform: "TripAdvisor",
    platformLogo: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=120&h=60&fit=crop",
    platformLink: "#",
    primaryButtonText: "Read All Reviews",
    secondaryButtonText: "Write Review",
    showRatings: true,
    showPlatform: true,
    showVerified: true,
    layout: "grid",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
