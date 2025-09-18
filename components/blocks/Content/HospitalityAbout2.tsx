import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  image?: string;
  achievements?: string[];
}

interface HospitalityAbout2Props extends SectionProps {
  // About specific props
  title?: string;
  subtitle?: string;
  description?: string;
  mainImage?: string;
  secondaryImage?: string;
  foundedYear?: string;
  timelineEvents?: TimelineEvent[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  phoneNumber?: string;
  // Settings
  showTimeline?: boolean;
  showImages?: boolean;
  showAchievements?: boolean;
  layout?: "left" | "right" | "center";
}

export function HospitalityAbout2({
  title = "Relax at the luxury resorts around the entire world.",
  subtitle = "About resorts",
  description = "A design-led approach guides the team, implementing practices, products and services that are thoughtful and environmentally sound. Family of professionals that creates intelligent designs that help the face of hospitality.",
  mainImage = "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=480&h=575&fit=crop",
  secondaryImage = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=375&h=375&fit=crop",
  foundedYear = "1995",
  timelineEvents = [
    {
      id: "founded",
      year: "1995",
      title: "Founded",
      description: "Started our journey with a vision to create exceptional hospitality experiences.",
      achievements: ["First resort opened", "50 rooms available", "Local team of 20"]
    },
    {
      id: "expansion",
      year: "2005",
      title: "Expansion",
      description: "Expanded to multiple locations across the region with premium amenities.",
      achievements: ["5 resorts opened", "500+ rooms", "International recognition"]
    },
    {
      id: "awards",
      year: "2015",
      title: "Awards & Recognition",
      description: "Received multiple international awards for excellence in hospitality.",
      achievements: ["Best Luxury Resort", "5-star rating", "Global presence"]
    },
    {
      id: "sustainability",
      year: "2020",
      title: "Sustainability Focus",
      description: "Committed to sustainable practices and environmental responsibility.",
      achievements: ["Carbon neutral", "Eco-friendly practices", "Community programs"]
    },
    {
      id: "innovation",
      year: "2025",
      title: "Innovation & Future",
      description: "Leading the industry with cutting-edge technology and guest experiences.",
      achievements: ["Smart rooms", "AI concierge", "Virtual experiences"]
    }
  ],
  primaryButtonText = "About resort",
  secondaryButtonText = "Contact us",
  phoneNumber = "1 800 222 000",
  showTimeline = true,
  showImages = true,
  showAchievements = true,
  layout = "left",
  ...props
}: HospitalityAbout2Props) {
  // Set section defaults for about
  const aboutProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...aboutProps}>
      <Element
        id="aboutContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main About Section */}
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
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-12"
            margin=""
          >
            {/* Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              width="w-1/2"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap="gap-6"
                margin=""
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
                    textAlign="text-left"
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
                    fontSize="text-4xl sm:text-5xl md:text-6xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
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
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    className="max-w-lg"
                  />
                </Element>

                {/* Action Buttons */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-8"
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
                      backgroundColor="#1f2937"
                      textColor="#ffffff"
                      borderRadius="rounded-full"
                      padding="px-8 py-4"
                      width="w-auto"
                      className="hover:bg-gray-800 transition-colors duration-300"
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
                      flexDirection="row"
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-2"
                      margin=""
                    >
                      <CraftText
                        text="📞"
                        tagName="span"
                        fontSize="text-lg"
                        textAlign="text-center"
                      />
                      <CraftText
                        text={phoneNumber}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color="text-gray-700"
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            </Element>

            {/* Images */}
            {showImages && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                width="w-1/2"
                position="relative"
                canvas={false}
              >
                {/* Founded Year Badge */}
                <Element
                  is={Box}
                  backgroundColor="bg-amber-100"
                  padding="p-4"
                  margin=""
                  display="block"
                  position="absolute"
                  top="top-8"
                  left="left-8"
                  borderRadius="rounded-2xl"
                  canvas={false}
                >
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    gap="gap-1"
                    margin="text-center"
                  >
                    <CraftText
                      text="Started in"
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-semibold"
                      color="text-amber-700"
                      textAlign="text-center"
                    />
                    <CraftText
                      text={foundedYear}
                      tagName="span"
                      fontSize="text-2xl"
                      fontWeight="font-bold"
                      color="text-amber-800"
                      textAlign="text-center"
                    />
                  </Element>
                </Element>

                {/* Main Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  width="w-3/4"
                  height="h-96"
                  canvas={false}
                >
                  <CraftImage
                    src={mainImage}
                    alt="Luxury Resort"
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-2xl"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Secondary Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  position="absolute"
                  bottom="bottom-0"
                  left="left-0"
                  width="w-1/2"
                  height="h-64"
                  canvas={false}
                >
                  <CraftImage
                    src={secondaryImage}
                    alt="Resort Details"
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-2xl"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>
            )}
          </Element>
        </Element>

        {/* Timeline Section */}
        {showTimeline && (
          <Element
            is={Box}
            backgroundColor="bg-gray-50"
            padding="py-16 px-8"
            margin=""
            display="block"
            borderRadius="rounded-2xl"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-12"
              display="block"
              canvas={false}
            >
              <CraftText
                text="Our Journey"
                tagName="h3"
                fontSize="text-3xl sm:text-4xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                margin="mb-4"
              />
            </Element>

            <Element
              is={Flex}
              canvas
              flexDirection="column"
              justifyContent="start"
              alignItems="stretch"
              gap="gap-8"
              margin=""
            >
              {timelineEvents.map((event, index) => (
                <Element
                  key={event.id}
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
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="start"
                    gap="gap-8"
                    margin=""
                  >
                    {/* Year */}
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="px-6 py-4"
                      margin=""
                      display="block"
                      borderRadius="rounded-xl"
                      width="w-24"
                      height="h-16"
                      canvas={false}
                    >
                      <CraftText
                        text={event.year}
                        tagName="span"
                        fontSize="text-xl"
                        fontWeight="font-bold"
                        color="text-amber-800"
                        textAlign="text-center"
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
                        alignItems="start"
                        gap="gap-4"
                        margin=""
                      >
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
                            text={event.title}
                            tagName="h4"
                            fontSize="text-2xl"
                            fontWeight="font-bold"
                            color="text-gray-900"
                            textAlign="text-left"
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
                            text={event.description}
                            tagName="p"
                            fontSize="text-base"
                            fontWeight="font-normal"
                            color="text-gray-600"
                            textAlign="text-left"
                            lineHeight="leading-relaxed"
                          />
                        </Element>

                        {/* Achievements */}
                        {showAchievements && event.achievements && (
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
                              justifyContent="start"
                              alignItems="start"
                              gap="gap-4"
                              margin=""
                              wrap="wrap"
                            >
                              {event.achievements.map((achievement, achievementIndex) => (
                                <Element
                                  key={achievementIndex}
                                  is={Box}
                                  backgroundColor="bg-amber-100"
                                  padding="px-3 py-1"
                                  margin=""
                                  display="block"
                                  borderRadius="rounded-full"
                                  canvas={false}
                                >
                                  <CraftText
                                    text={achievement}
                                    tagName="span"
                                    fontSize="text-sm"
                                    fontWeight="font-medium"
                                    color="text-amber-700"
                                    textAlign="text-center"
                                  />
                                </Element>
                              ))}
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
        )}
      </Element>
    </Section>
  );
}

HospitalityAbout2.craft = {
  displayName: "Hospitality About 2",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // About specific props
    title: "Relax at the luxury resorts around the entire world.",
    subtitle: "About resorts",
    description: "A design-led approach guides the team, implementing practices, products and services that are thoughtful and environmentally sound. Family of professionals that creates intelligent designs that help the face of hospitality.",
    foundedYear: "1995",
    primaryButtonText: "About resort",
    secondaryButtonText: "Contact us",
    phoneNumber: "1 800 222 000",
    showTimeline: true,
    showImages: true,
    showAchievements: true,
    layout: "left",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
