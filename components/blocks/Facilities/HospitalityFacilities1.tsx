import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Facility {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  category: "fitness" | "spa" | "beach" | "pool" | "dining" | "wellness";
}

interface HospitalityFacilities1Props extends SectionProps {
  // Facilities specific props
  title?: string;
  subtitle?: string;
  description?: string;
  facilities?: Facility[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  // Settings
  showCategories?: boolean;
  categories?: string[];
  selectedCategory?: string;
  showHoverEffect?: boolean;
}

export function HospitalityFacilities1({
  title = "Awesome facilities",
  subtitle = "Our hotel has been present for over 20 years.",
  description = "Discover our world-class facilities designed to provide the ultimate luxury experience for our guests.",
  facilities = [
    {
      id: "fitness-center",
      name: "Urban fitness centre",
      description: "State-of-the-art fitness equipment and personal training services",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=405&fit=crop",
      icon: "💪",
      category: "fitness"
    },
    {
      id: "spa-massage",
      name: "Luxury spa massage",
      description: "Relaxing spa treatments and therapeutic massages",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=405&fit=crop",
      icon: "🧘‍♀️",
      category: "spa"
    },
    {
      id: "private-beach",
      name: "Secure private beach",
      description: "Exclusive beach access with premium amenities",
      image: "https://images.unsplash.com/photo-1507525428034-b69928b1d9587?w=600&h=405&fit=crop",
      icon: "🏖️",
      category: "beach"
    },
    {
      id: "swimming-pool",
      name: "Large swimming pool",
      description: "Olympic-sized pool with poolside service",
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=405&fit=crop",
      icon: "🏊‍♀️",
      category: "pool"
    },
    {
      id: "exclusive-restaurants",
      name: "Exclusive restaurants",
      description: "Fine dining with world-renowned chefs",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&h=405&fit=crop",
      icon: "🍽️",
      category: "dining"
    },
    {
      id: "yoga-classes",
      name: "Deeply yoga classes",
      description: "Mindful yoga sessions in serene settings",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=405&fit=crop",
      icon: "🧘‍♂️",
      category: "wellness"
    }
  ],
  primaryButtonText = "Explore Facilities",
  secondaryButtonText = "Book Experience",
  showCategories = true,
  categories = ["All", "Fitness", "Spa", "Beach", "Pool", "Dining", "Wellness"],
  selectedCategory = "All",
  showHoverEffect = true,
  ...props
}: HospitalityFacilities1Props) {
  // Set section defaults for facilities
  const facilitiesProps = {
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  // Filter facilities by category
  const filteredFacilities = selectedCategory === "All" 
    ? facilities 
    : facilities.filter(facility => facility.category === selectedCategory.toLowerCase());

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "fitness": return "bg-red-100 text-red-700";
      case "spa": return "bg-pink-100 text-pink-700";
      case "beach": return "bg-blue-100 text-blue-700";
      case "pool": return "bg-cyan-100 text-cyan-700";
      case "dining": return "bg-orange-100 text-orange-700";
      case "wellness": return "bg-green-100 text-green-700";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <Section {...facilitiesProps}>
      <Element
        id="facilitiesContent"
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
            {/* Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-2"
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

            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-8"
              display="block"
              canvas={false}
            >
              <CraftText
                text={subtitle}
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                className="max-w-2xl mx-auto"
              />
            </Element>

            {/* Category Filter */}
            {showCategories && (
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
            )}
          </Element>
        </Element>

        {/* Facilities Grid */}
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
            minColumnWidth="350px"
            gap="gap-8"
            autoRows="auto"
          >
            {filteredFacilities.map((facility, index) => (
              <Element
                key={facility.id}
                is={Card}
                variant="flat"
                shadow="xl"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="hidden"
                border={false}
                className={`group hover:shadow-2xl transition-all duration-500 ${
                  showHoverEffect ? "hover:-translate-y-2" : ""
                }`}
                canvas
              >
                {/* Image Container */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-full"
                  height="h-64"
                  position="relative"
                  canvas={false}
                >
                  <CraftImage
                    src={facility.image}
                    alt={facility.name}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-t-2xl"
                    margin=""
                    padding=""
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay on hover */}
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-600"
                    padding="p-8"
                    margin=""
                    display="block"
                    position="absolute"
                    top="top-0"
                    left="left-0"
                    right="right-0"
                    bottom="bottom-0"
                    borderRadius="rounded-t-2xl"
                    className="opacity-0 group-hover:opacity-90 transition-opacity duration-300"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="gap-4"
                      margin="text-center h-full"
                    >
                      <Element
                        is={Box}
                        backgroundColor="bg-white/20"
                        padding="p-4"
                        margin=""
                        display="block"
                        borderRadius="rounded-full"
                        width="w-16"
                        height="h-16"
                        canvas={false}
                      >
                        <CraftText
                          text={facility.icon}
                          tagName="span"
                          fontSize="text-2xl"
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
                          text={facility.description}
                          tagName="p"
                          fontSize="text-base"
                          fontWeight="font-normal"
                          color="text-white"
                          textAlign="text-center"
                          lineHeight="leading-relaxed"
                          className="opacity-90"
                        />
                      </Element>
                    </Element>
                  </Element>
                </Element>

                {/* Content */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-8"
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
                    gap="gap-4"
                    margin="text-center"
                  >
                    {/* Category Badge */}
                    <Element
                      is={Box}
                      backgroundColor={getCategoryColor(facility.category)}
                      padding="px-3 py-1"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-fit"
                      canvas={false}
                    >
                      <CraftText
                        text={facility.category.charAt(0).toUpperCase() + facility.category.slice(1)}
                        tagName="span"
                        fontSize="text-xs"
                        fontWeight="font-semibold"
                        textAlign="text-center"
                      />
                    </Element>

                    {/* Facility Name */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={facility.name}
                        tagName="h3"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
                        textAlign="text-center"
                        lineHeight="leading-tight"
                      />
                    </Element>

                    {/* Icon */}
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="p-3"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-12"
                      height="h-12"
                      canvas={false}
                    >
                      <CraftText
                        text={facility.icon}
                        tagName="span"
                        fontSize="text-xl"
                        textAlign="text-center"
                      />
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
                text="Ready to Experience Our Facilities?"
                tagName="h3"
                fontSize="text-2xl sm:text-3xl"
                fontWeight="font-bold"
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
              <CraftText
                text="Book your stay and enjoy access to all our world-class facilities and amenities."
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
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

HospitalityFacilities1.craft = {
  displayName: "Hospitality Facilities 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Facilities specific props
    title: "Awesome facilities",
    subtitle: "Our hotel has been present for over 20 years.",
    description: "Discover our world-class facilities designed to provide the ultimate luxury experience for our guests.",
    primaryButtonText: "Explore Facilities",
    secondaryButtonText: "Book Experience",
    showCategories: true,
    categories: ["All", "Fitness", "Spa", "Beach", "Pool", "Dining", "Wellness"],
    selectedCategory: "All",
    showHoverEffect: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

