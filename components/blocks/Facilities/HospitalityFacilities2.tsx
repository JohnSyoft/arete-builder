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
  title: string;
  description: string;
  image: string;
  icon: string;
  color?: string;
}

interface HospitalityFacilities2Props extends SectionProps {
  // Facilities specific props
  title?: string;
  subtitle?: string;
  description?: string;
  facilities?: Facility[];
  // Settings
  showImages?: boolean;
  showIcons?: boolean;
  showDescriptions?: boolean;
  layout?: "grid" | "carousel";
  columns?: number;
  rotationEffect?: boolean;
  hoverEffect?: boolean;
}

export function HospitalityFacilities2({
  title = "Awesome facilities",
  subtitle = "Our Services",
  description = "Our hotel has been present for over 20 years.",
  facilities = [
    {
      id: "facility-1",
      title: "Urban fitness centre",
      description: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=405&fit=crop",
      icon: "💪",
      color: "#d97706"
    },
    {
      id: "facility-2",
      title: "Luxury spa massage",
      description: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=405&fit=crop",
      icon: "🌿",
      color: "#d97706"
    },
    {
      id: "facility-3",
      title: "Secure private beach",
      description: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=405&fit=crop",
      icon: "🏖️",
      color: "#d97706"
    },
    {
      id: "facility-4",
      title: "Large swimming pool",
      description: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=405&fit=crop",
      icon: "🏊‍♂️",
      color: "#d97706"
    },
    {
      id: "facility-5",
      title: "Exclusive restaurants",
      description: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=405&fit=crop",
      icon: "🍽️",
      color: "#d97706"
    },
    {
      id: "facility-6",
      title: "Deeply yoga classes",
      description: "Lorem ipsum dolor consectetur adipiscing eiusmod tempor.",
      image: "https://images.unsplash.com/photo-1506629905607-3a0a0a0a0a0a?w=600&h=405&fit=crop",
      icon: "🧘‍♀️",
      color: "#d97706"
    }
  ],
  showImages = true,
  showIcons = true,
  showDescriptions = true,
  layout = "grid",
  columns = 3,
  rotationEffect = true,
  hoverEffect = true,
  ...props
}: HospitalityFacilities2Props) {
  // Set section defaults for facilities
  const facilitiesProps = {
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
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
            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
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
              margin=""
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
              margin=""
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

        {/* Facilities Grid */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={columns}
            autoFit={false}
            minColumnWidth="300px"
            gap="gap-8"
            autoRows="auto"
          >
            {facilities.map((facility, index) => (
              <Element
                key={facility.id}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-0"
                margin=""
                hoverable={hoverEffect}
                clickable={false}
                overflow="hidden"
                border={false}
                className={`group hover:shadow-2xl transition-all duration-500 ${rotationEffect ? 'hover:rotate-1' : ''}`}
                canvas
              >
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  position="relative"
                  width="w-full"
                  height="h-64"
                  canvas={false}
                >
                  {/* Facility Image */}
                  {showImages && (
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
                        src={facility.image}
                        alt={facility.title}
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        margin=""
                        padding=""
                        className="group-hover:scale-110 transition-transform duration-500"
                      />
                    </Element>
                  )}

                  {/* Overlay */}
                  <Element
                    is={Box}
                    backgroundColor="bg-black/40"
                    padding="0"
                    margin=""
                    display="block"
                    position="absolute"
                    top="top-0"
                    left="left-0"
                    right="right-0"
                    bottom="bottom-0"
                    className="group-hover:bg-amber-600/80 transition-colors duration-500"
                    canvas={false}
                  />

                  {/* Front Content */}
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
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="gap-4"
                      margin="text-center h-full p-8"
                    >
                      {/* Icon */}
                      {showIcons && (
                        <Element
                          is={Box}
                          backgroundColor="bg-white/20"
                          padding="p-4"
                          margin=""
                          display="block"
                          width="w-16"
                          height="h-16"
                          borderRadius="rounded-full"
                          className="group-hover:bg-white/30 transition-colors duration-300"
                          canvas={false}
                        >
                          <CraftText
                            text={facility.icon}
                            tagName="span"
                            fontSize="text-2xl"
                            textAlign="text-center"
                          />
                        </Element>
                      )}

                      {/* Title */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={facility.title}
                          tagName="h3"
                          fontSize="text-xl sm:text-2xl"
                          fontWeight="font-bold"
                          color="text-white"
                          textAlign="text-center"
                          lineHeight="leading-tight"
                        />
                      </Element>
                    </Element>
                  </Element>

                  {/* Back Content (Hover) */}
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
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      gap="gap-6"
                      margin="text-center h-full p-8"
                    >
                      {/* Icon */}
                      {showIcons && (
                        <Element
                          is={Box}
                          backgroundColor="bg-white/30"
                          padding="p-4"
                          margin=""
                          display="block"
                          width="w-16"
                          height="h-16"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text={facility.icon}
                            tagName="span"
                            fontSize="text-2xl"
                            textAlign="text-center"
                          />
                        </Element>
                      )}

                      {/* Description */}
                      {showDescriptions && (
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
                            className="max-w-xs"
                          />
                        </Element>
                      )}
                    </Element>
                  </Element>
                </Element>

                {/* Bottom Title */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="py-6 px-8"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={facility.title}
                    tagName="h4"
                    fontSize="text-lg"
                    fontWeight="font-semibold"
                    color="text-gray-900"
                    textAlign="text-center"
                  />
                </Element>
              </Element>
            ))}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityFacilities2.craft = {
  displayName: "Hospitality Facilities 2",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Facilities specific props
    title: "Awesome facilities",
    subtitle: "Our Services",
    description: "Our hotel has been present for over 20 years.",
    showImages: true,
    showIcons: true,
    showDescriptions: true,
    layout: "grid",
    columns: 3,
    rotationEffect: true,
    hoverEffect: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
