import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface HotelHero1Props extends SectionProps {
  // Hotel Hero specific props
  subtitle?: string;
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  highlightText?: string;
  phoneNumber?: string;
  // Features
  feature1Title?: string;
  feature1Description?: string;
  feature1Icon?: string;
  feature2Title?: string;
  feature2Description?: string;
  feature2Icon?: string;
  feature3Title?: string;
  feature3Description?: string;
  feature3Icon?: string;
  feature4Title?: string;
  feature4Description?: string;
  feature4Icon?: string;
}

export function HotelHero1({
  subtitle = "Luxury space that you can afford",
  mainTitle = "Holiday",
  description = "Perfect place to relax and enjoy your rest.",
  primaryButtonText = "Book your stay",
  secondaryButtonText = "View Rooms",
  backgroundImage = "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1100&fit=crop",
  highlightText = "enjoy your rest.",
  phoneNumber = "1 800 222 000",
  feature1Title = "Five stars luxury resort",
  feature1Description = "Experience a unique stay.",
  feature1Icon = "🏆",
  feature2Title = "Well trained manpower",
  feature2Description = "Dedicated meal courses.",
  feature2Icon = "👨‍🍳",
  feature3Title = "Fine dining restaurants",
  feature3Description = "Discover a medley of flavours.",
  feature3Icon = "🍽️",
  feature4Title = "Large swimming pool",
  feature4Description = "Unwind and discover joy.",
  feature4Icon = "🏊‍♂️",
  ...props
}: HotelHero1Props) {
  // Set section defaults for hotel hero
  const heroProps = {
    backgroundColor: "transparent",
    backgroundImage: backgroundImage,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "0",
    minHeight: "100vh",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.4",
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="hotelHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Hero Section */}
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
            gap="gap-8"
            margin="text-center"
            minHeight="min-h-[70vh]"
          >
            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-4"
              display="block"
              canvas={false}
            >
              <CraftText
                text={subtitle}
                tagName="h5"
                fontSize="text-lg sm:text-xl"
                fontWeight="font-normal"
                color="text-white"
                textAlign="text-center"
                margin="mb-4"
                className="text-shadow-lg"
              />
            </Element>

            {/* Main Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-6"
              display="block"
              canvas={false}
            >
              <CraftText
                text={mainTitle}
                tagName="h1"
                fontSize="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                fontWeight="font-bold"
                color="text-white"
                textAlign="text-center"
                margin="mb-6"
                lineHeight="leading-tight"
                className="text-shadow-2xl tracking-tight"
              />
            </Element>

            {/* Description with highlight */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="mb-8"
              display="block"
              canvas={false}
            >
              <CraftText
                text={`Perfect place to relax and ${highlightText}`}
                tagName="p"
                fontSize="text-xl sm:text-2xl"
                fontWeight="font-medium"
                color="text-white"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                margin="mb-8"
                className="text-shadow-lg"
              />
            </Element>

            {/* CTA Buttons */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-6"
              margin="mb-12"
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
                  size="xl"
                  backgroundColor="#ffffff"
                  textColor="#000000"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-gray-100 transition-colors duration-300 shadow-lg"
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
                  size="xl"
                  backgroundColor="transparent"
                  textColor="#ffffff"
                  borderColor="#ffffff"
                  borderRadius="rounded-full"
                  padding="px-8 py-4"
                  width="w-auto"
                  className="hover:bg-white hover:text-black transition-colors duration-300"
                />
              </Element>
            </Element>

            {/* Phone Number */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftText
                text={`📞 ${phoneNumber}`}
                tagName="p"
                fontSize="text-lg"
                fontWeight="font-medium"
                color="text-white"
                textAlign="text-center"
                className="text-shadow-lg"
              />
            </Element>
          </Element>
        </Element>

        {/* Features Section */}
        <Element
          is={Box}
          backgroundColor="bg-gray-50"
          padding="py-16 px-6"
          margin="0"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={4}
            autoFit={true}
            minColumnWidth="250px"
            gap="gap-8"
            autoRows="auto"
          >
            {/* Feature 1 */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-2xl"
              backgroundColor="bg-white"
              borderColor=""
              padding="p-8"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={false}
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
                <Element
                  is={Box}
                  backgroundColor="bg-amber-100"
                  padding="p-6"
                  margin="mb-4"
                  display="block"
                  width="w-20"
                  height="h-20"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={feature1Icon}
                    tagName="span"
                    fontSize="text-3xl"
                    textAlign="text-center"
                    className="flex items-center justify-center h-full"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="mb-2"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature1Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-center"
                    lineHeight="leading-tight"
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
                    text={feature1Description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>

            {/* Feature 2 */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-2xl"
              backgroundColor="bg-white"
              borderColor=""
              padding="p-8"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={false}
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
                <Element
                  is={Box}
                  backgroundColor="bg-blue-100"
                  padding="p-6"
                  margin="mb-4"
                  display="block"
                  width="w-20"
                  height="h-20"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={feature2Icon}
                    tagName="span"
                    fontSize="text-3xl"
                    textAlign="text-center"
                    className="flex items-center justify-center h-full"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="mb-2"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature2Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-center"
                    lineHeight="leading-tight"
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
                    text={feature2Description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>

            {/* Feature 3 */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-2xl"
              backgroundColor="bg-white"
              borderColor=""
              padding="p-8"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={false}
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
                <Element
                  is={Box}
                  backgroundColor="bg-green-100"
                  padding="p-6"
                  margin="mb-4"
                  display="block"
                  width="w-20"
                  height="h-20"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={feature3Icon}
                    tagName="span"
                    fontSize="text-3xl"
                    textAlign="text-center"
                    className="flex items-center justify-center h-full"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="mb-2"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature3Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-center"
                    lineHeight="leading-tight"
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
                    text={feature3Description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>

            {/* Feature 4 */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="rounded-2xl"
              backgroundColor="bg-white"
              borderColor=""
              padding="p-8"
              margin=""
              hoverable={true}
              clickable={false}
              overflow="visible"
              border={false}
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
                <Element
                  is={Box}
                  backgroundColor="bg-cyan-100"
                  padding="p-6"
                  margin="mb-4"
                  display="block"
                  width="w-20"
                  height="h-20"
                  borderRadius="rounded-full"
                  canvas={false}
                >
                  <CraftText
                    text={feature4Icon}
                    tagName="span"
                    fontSize="text-3xl"
                    textAlign="text-center"
                    className="flex items-center justify-center h-full"
                  />
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="mb-2"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={feature4Title}
                    tagName="h3"
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-center"
                    lineHeight="leading-tight"
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
                    text={feature4Description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HotelHero1.craft = {
  displayName: "Hotel Hero 1",
  props: {
    // Section props
    backgroundColor: "transparent",
    backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1100&fit=crop",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "p-0",
    minHeight: "min-h-screen",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    hasOverlay: true,
    overlayColor: "#000000",
    overlayOpacity: "0.4",
    // Hotel Hero specific props
    subtitle: "Luxury space that you can afford",
    mainTitle: "Holiday",
    description: "Perfect place to relax and enjoy your rest.",
    primaryButtonText: "Book your stay",
    secondaryButtonText: "View Rooms",
    backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1100&fit=crop",
    highlightText: "enjoy your rest.",
    phoneNumber: "1 800 222 000",
    feature1Title: "Five stars luxury resort",
    feature1Description: "Experience a unique stay.",
    feature1Icon: "🏆",
    feature2Title: "Well trained manpower",
    feature2Description: "Dedicated meal courses.",
    feature2Icon: "👨‍🍳",
    feature3Title: "Fine dining restaurants",
    feature3Description: "Discover a medley of flavours.",
    feature3Icon: "🍽️",
    feature4Title: "Large swimming pool",
    feature4Description: "Unwind and discover joy.",
    feature4Icon: "🏊‍♂️",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
