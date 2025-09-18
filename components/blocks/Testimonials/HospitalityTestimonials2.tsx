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
  location: string;
  rating: number;
  review: string;
  avatar: string;
  stayDate: string;
  roomType: string;
  verified: boolean;
}

interface HospitalityTestimonials2Props extends SectionProps {
  // Testimonials specific props
  title?: string;
  subtitle?: string;
  description?: string;
  testimonials?: Testimonial[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Stats
  averageRating?: number;
  totalReviews?: number;
  showStats?: boolean;
}

export function HospitalityTestimonials2({
  title = "Guest Reviews",
  subtitle = "What Our Guests Say",
  description = "Discover why our guests choose us for their perfect getaway. Read authentic reviews from our valued customers.",
  testimonials = [
    {
      id: "review-1",
      name: "Sarah Johnson",
      title: "Luxury Traveler",
      location: "New York, USA",
      rating: 5,
      review: "Absolutely stunning property! The service was impeccable and the rooms were beautifully designed. The staff went above and beyond to make our anniversary special. We'll definitely be back!",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      stayDate: "March 2024",
      roomType: "Luxury Suite",
      verified: true
    },
    {
      id: "review-2",
      name: "Michael Chen",
      title: "Business Traveler",
      location: "San Francisco, USA",
      rating: 5,
      review: "Perfect location for business meetings. The conference facilities are top-notch and the staff is incredibly professional. The room was spacious and had everything I needed for a productive stay.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      stayDate: "February 2024",
      roomType: "Executive Room",
      verified: true
    },
    {
      id: "review-3",
      name: "Emma Rodriguez",
      title: "Family Traveler",
      location: "Miami, USA",
      rating: 5,
      review: "Our family had an amazing time! The kids loved the pool and the kids' club. The staff was so friendly and accommodating. The breakfast buffet was incredible with so many options for everyone.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      stayDate: "January 2024",
      roomType: "Family Suite",
      verified: true
    },
    {
      id: "review-4",
      name: "David Thompson",
      title: "Romantic Getaway",
      location: "London, UK",
      rating: 5,
      review: "The perfect romantic escape! The spa treatments were divine and the sunset views from our room were breathtaking. The concierge helped us plan the most amazing dinner reservations.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      stayDate: "December 2023",
      roomType: "Ocean View Suite",
      verified: true
    },
    {
      id: "review-5",
      name: "Lisa Wang",
      title: "Solo Traveler",
      location: "Toronto, Canada",
      rating: 5,
      review: "As a solo female traveler, I felt completely safe and comfortable. The staff was attentive without being intrusive. The hotel's location made it easy to explore the city, and the room was perfect for my needs.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      stayDate: "November 2023",
      roomType: "Deluxe Room",
      verified: true
    },
    {
      id: "review-6",
      name: "James Wilson",
      title: "Frequent Guest",
      location: "Chicago, USA",
      rating: 5,
      review: "I've stayed here multiple times and it never disappoints. The consistency in service and quality is remarkable. The loyalty program benefits are fantastic, and the staff remembers my preferences.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      stayDate: "October 2023",
      roomType: "Signature Suite",
      verified: true
    }
  ],
  primaryButtonText = "Read More Reviews",
  secondaryButtonText = "Write a Review",
  averageRating = 4.9,
  totalReviews = 1247,
  showStats = true,
  ...props
}: HospitalityTestimonials2Props) {
  // Set section defaults for testimonials
  const testimonialsProps = {
    backgroundColor: "#f8fafc", // bg-slate-50
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
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
                fontSize="text-4xl sm:text-5xl md:text-6xl"
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
                fontSize="text-lg sm:text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                className="max-w-3xl mx-auto"
              />
            </Element>

            {/* Stats Section */}
            {showStats && (
              <Element
                is={Box}
                backgroundColor="bg-white"
                padding="py-8 px-8"
                margin="mb-8"
                display="block"
                borderRadius="rounded-2xl"
                shadow="lg"
                canvas
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  gap="gap-12"
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
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="gap-2"
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
                          text={averageRating.toString()}
                          tagName="span"
                          fontSize="text-4xl sm:text-5xl"
                          fontWeight="font-bold"
                          color="text-amber-600"
                          textAlign="text-center"
                        />
                      </Element>

                      <Element
                        is={Flex}
                        canvas
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        gap="gap-1"
                        margin=""
                      >
                        {[...Array(5)].map((_, i) => (
                          <Element
                            key={i}
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text="⭐"
                              tagName="span"
                              fontSize="text-lg"
                              textAlign="text-center"
                            />
                          </Element>
                        ))}
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
                          text="Average Rating"
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-medium"
                          color="text-gray-600"
                          textAlign="text-center"
                        />
                      </Element>
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
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="gap-2"
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
                          text={totalReviews.toLocaleString()}
                          tagName="span"
                          fontSize="text-4xl sm:text-5xl"
                          fontWeight="font-bold"
                          color="text-gray-900"
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
                          text="Guest Reviews"
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-medium"
                          color="text-gray-600"
                          textAlign="text-center"
                        />
                      </Element>
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}
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
            columns={3}
            autoFit={true}
            minColumnWidth="300px"
            gap="gap-8"
            autoRows="auto"
          >
            {testimonials.map((testimonial, index) => (
              <Element
                key={testimonial.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-8"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="visible"
                border={false}
                className="group hover:shadow-xl transition-all duration-300"
                canvas
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="stretch"
                  gap="gap-6"
                  margin=""
                >
                  {/* Header with Avatar and Info */}
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-4"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-16"
                      height="h-16"
                      canvas={false}
                    >
                      <CraftImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
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
                            tagName="h4"
                            fontSize="text-lg"
                            fontWeight="font-bold"
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
                            text={testimonial.title}
                            tagName="p"
                            fontSize="text-sm"
                            fontWeight="font-medium"
                            color="text-amber-600"
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
                            text={testimonial.location}
                            tagName="p"
                            fontSize="text-sm"
                            fontWeight="font-normal"
                            color="text-gray-500"
                            textAlign="text-left"
                          />
                        </Element>
                      </Element>
                    </Element>
                  </Element>

                  {/* Rating */}
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-1"
                    margin=""
                  >
                    {[...Array(5)].map((_, i) => (
                      <Element
                        key={i}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={i < testimonial.rating ? "⭐" : "☆"}
                          tagName="span"
                          fontSize="text-lg"
                          textAlign="text-center"
                        />
                      </Element>
                    ))}
                  </Element>

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
                      text={`"${testimonial.review}"`}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-normal"
                      color="text-gray-700"
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                      className="italic"
                    />
                  </Element>

                  {/* Stay Details */}
                  <Element
                    is={Box}
                    backgroundColor="bg-gray-50"
                    padding="p-4"
                    margin=""
                    display="block"
                    borderRadius="rounded-lg"
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
                        <CraftText
                          text={`Stayed in ${testimonial.roomType}`}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-medium"
                          color="text-gray-600"
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
                          text={testimonial.stayDate}
                          tagName="span"
                          fontSize="text-sm"
                          fontWeight="font-normal"
                          color="text-gray-500"
                          textAlign="text-right"
                        />
                      </Element>
                    </Element>
                  </Element>

                  {/* Verified Badge */}
                  {testimonial.verified && (
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
                        gap="gap-2"
                        margin=""
                      >
                        <Element
                          is={Box}
                          backgroundColor="bg-green-100"
                          padding="px-2 py-1"
                          margin=""
                          display="block"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text="✓ Verified Stay"
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-medium"
                            color="text-green-700"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>
                    </Element>
                  )}
                </Element>
              </Element>
            ))}
          </Element>
        </Element>

        {/* CTA Section */}
        <Element
          is={Box}
          backgroundColor="bg-amber-50"
          padding="py-16 px-8"
          margin=""
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
                text="Share Your Experience"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="mb-4"
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
      </Element>
    </Section>
  );
}

HospitalityTestimonials2.craft = {
  displayName: "Hospitality Testimonials 2",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Testimonials specific props
    title: "Guest Reviews",
    subtitle: "What Our Guests Say",
    description: "Discover why our guests choose us for their perfect getaway. Read authentic reviews from our valued customers.",
    primaryButtonText: "Read More Reviews",
    secondaryButtonText: "Write a Review",
    averageRating: 4.9,
    totalReviews: 1247,
    showStats: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
