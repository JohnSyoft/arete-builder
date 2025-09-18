import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  category: string;
  isAvailable: boolean;
  hours?: string;
  location?: string;
}

interface HospitalityAmenities1Props extends SectionProps {
  // Amenities specific props
  title?: string;
  subtitle?: string;
  description?: string;
  amenities?: Amenity[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Categories
  categories?: string[];
  selectedCategory?: string;
}

export function HospitalityAmenities1({
  title = "Awesome facilities",
  subtitle = "Hotel Amenities",
  description = "Our hotel has been present for over 20 years, providing exceptional amenities and services to make your stay unforgettable.",
  amenities = [
    {
      id: "fitness-center",
      name: "Urban Fitness Centre",
      description: "State-of-the-art gym equipment with personal training services and group fitness classes.",
      icon: "💪",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      category: "Wellness",
      isAvailable: true,
      hours: "24/7",
      location: "Ground Floor"
    },
    {
      id: "spa",
      name: "Luxury Spa & Wellness",
      description: "Relax and rejuvenate with our full-service spa offering massages, facials, and wellness treatments.",
      icon: "🧘‍♀️",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
      category: "Wellness",
      isAvailable: true,
      hours: "9:00 AM - 9:00 PM",
      location: "3rd Floor"
    },
    {
      id: "swimming-pool",
      name: "Infinity Swimming Pool",
      description: "Stunning infinity pool with panoramic views, poolside bar, and cabana rentals.",
      icon: "🏊‍♂️",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
      category: "Recreation",
      isAvailable: true,
      hours: "6:00 AM - 10:00 PM",
      location: "Rooftop"
    },
    {
      id: "business-center",
      name: "Business Center",
      description: "Fully equipped business center with meeting rooms, conference facilities, and high-speed internet.",
      icon: "💼",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      category: "Business",
      isAvailable: true,
      hours: "24/7",
      location: "2nd Floor"
    },
    {
      id: "concierge",
      name: "24/7 Concierge Service",
      description: "Round-the-clock concierge service to assist with reservations, recommendations, and special requests.",
      icon: "🎩",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "Service",
      isAvailable: true,
      hours: "24/7",
      location: "Lobby"
    },
    {
      id: "valet-parking",
      name: "Valet Parking",
      description: "Complimentary valet parking service for all hotel guests with secure vehicle storage.",
      icon: "🚗",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop",
      category: "Service",
      isAvailable: true,
      hours: "24/7",
      location: "Ground Floor"
    },
    {
      id: "kids-club",
      name: "Kids Club & Playground",
      description: "Supervised children's activities, playground, and entertainment for young guests.",
      icon: "🎨",
      image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop",
      category: "Family",
      isAvailable: true,
      hours: "9:00 AM - 6:00 PM",
      location: "Ground Floor"
    },
    {
      id: "library",
      name: "Quiet Reading Library",
      description: "Peaceful library with comfortable seating, books, and magazines for relaxation.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop",
      category: "Recreation",
      isAvailable: true,
      hours: "7:00 AM - 10:00 PM",
      location: "2nd Floor"
    }
  ],
  primaryButtonText = "Book Now",
  secondaryButtonText = "View All Amenities",
  categories = ["All", "Wellness", "Recreation", "Business", "Service", "Family"],
  selectedCategory = "All",
  ...props
}: HospitalityAmenities1Props) {
  // Set section defaults for amenities
  const amenitiesProps = {
    backgroundColor: "#f8fafc", // bg-slate-50
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...amenitiesProps}>
      <Element
        id="amenitiesContent"
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
          </Element>
        </Element>

        {/* Category Filter */}
        <Element
          is={Box}
          backgroundColor="bg-white"
          padding="py-6 px-8"
          margin="mb-12"
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
            gap="gap-2"
            margin=""
            wrap="wrap"
          >
            {categories.map((category, index) => (
              <Element
                key={category}
                is={Box}
                backgroundColor={category === selectedCategory ? "bg-amber-100" : "bg-transparent"}
                padding="px-6 py-3"
                margin=""
                display="block"
                borderRadius="rounded-full"
                className={`hover:bg-amber-50 transition-colors duration-200 cursor-pointer ${
                  category === selectedCategory ? "ring-2 ring-amber-500" : ""
                }`}
                canvas={false}
              >
                <CraftText
                  text={category}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight={category === selectedCategory ? "font-semibold" : "font-medium"}
                  color={category === selectedCategory ? "text-amber-700" : "text-gray-600"}
                  textAlign="text-center"
                  className="hover:text-amber-600 transition-colors duration-200"
                />
              </Element>
            ))}
          </Element>
        </Element>

        {/* Amenities Grid */}
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
            {amenities.map((amenity, index) => (
              <Element
                key={amenity.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-2xl"
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
                {/* Amenity Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  height="h-48"
                  canvas={false}
                >
                  <CraftImage
                    src={amenity.image}
                    alt={amenity.name}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-t-2xl"
                    margin=""
                    padding=""
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                </Element>

                {/* Amenity Content */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-6"
                  margin=""
                  display="block"
                  canvas
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
                    {/* Icon and Name */}
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
                        backgroundColor="bg-amber-100"
                        padding="p-3"
                        margin=""
                        display="block"
                        width="w-12"
                        height="h-12"
                        borderRadius="rounded-full"
                        canvas={false}
                      >
                        <CraftText
                          text={amenity.icon}
                          tagName="span"
                          fontSize="text-xl"
                          textAlign="text-center"
                          className="flex items-center justify-center h-full"
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
                          text={amenity.name}
                          tagName="h3"
                          fontSize="text-lg"
                          fontWeight="font-bold"
                          color="text-gray-900"
                          textAlign="text-left"
                          lineHeight="leading-tight"
                        />
                      </Element>
                    </Element>

                    {/* Description */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={amenity.description}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />
                    </Element>

                    {/* Amenity Details */}
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
                        flexDirection="column"
                        justifyContent="start"
                        alignItems="stretch"
                        gap="gap-2"
                        margin=""
                      >
                        {amenity.hours && (
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            gap="gap-2"
                            margin=""
                          >
                            <CraftText
                              text="Hours:"
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-medium"
                              color="text-gray-500"
                              textAlign="text-left"
                            />
                            <CraftText
                              text={amenity.hours}
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-normal"
                              color="text-gray-700"
                              textAlign="text-right"
                            />
                          </Element>
                        )}

                        {amenity.location && (
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            gap="gap-2"
                            margin=""
                          >
                            <CraftText
                              text="Location:"
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-medium"
                              color="text-gray-500"
                              textAlign="text-left"
                            />
                            <CraftText
                              text={amenity.location}
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-normal"
                              color="text-gray-700"
                              textAlign="text-right"
                            />
                          </Element>
                        )}

                        <Element
                          is={Flex}
                          canvas
                          flexDirection="row"
                          justifyContent="space-between"
                          alignItems="center"
                          gap="gap-2"
                          margin=""
                        >
                          <CraftText
                            text="Status:"
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-medium"
                            color="text-gray-500"
                            textAlign="text-left"
                          />
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
                              text={amenity.isAvailable ? "Available" : "Unavailable"}
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-medium"
                              color="text-green-700"
                              textAlign="text-center"
                            />
                          </Element>
                        </Element>
                      </Element>
                    </Element>

                    {/* Category Badge */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <Element
                        is={Box}
                        backgroundColor="bg-amber-50"
                        padding="px-3 py-1"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        width="w-fit"
                        canvas={false}
                      >
                        <CraftText
                          text={amenity.category}
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-medium"
                          color="text-amber-700"
                          textAlign="text-center"
                        />
                      </Element>
                    </Element>
                  </Element>
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
                text="Experience our world-class amenities"
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

HospitalityAmenities1.craft = {
  displayName: "Hospitality Amenities 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Amenities specific props
    title: "Awesome facilities",
    subtitle: "Hotel Amenities",
    description: "Our hotel has been present for over 20 years, providing exceptional amenities and services to make your stay unforgettable.",
    primaryButtonText: "Book Now",
    secondaryButtonText: "View All Amenities",
    categories: ["All", "Wellness", "Recreation", "Business", "Service", "Family"],
    selectedCategory: "All",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
