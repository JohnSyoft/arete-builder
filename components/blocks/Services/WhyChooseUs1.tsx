import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Icon } from "@/components/blocks/Basic/Icon";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface WhyChooseUs1Props extends SectionProps {
  // Why Choose Us specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  statisticNumber?: string;
  statisticLabel?: string;
  supportTitle?: string;
  supportDescription?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  feature4?: string;
  feature5?: string;
}

export function WhyChooseUs1({
  sectionTag = "WHY CHOOSE US",
  mainTitle = "Why Patients Trust Romedic",
  description = "Our commitment to excellence, state-of-the-art facilities, and compassionate care make us the preferred choice for comprehensive healthcare services.",
  statisticNumber = "98%",
  statisticLabel = "Positive Feedback",
  supportTitle = "24/7 Support",
  supportDescription = "Curabitur cursus, erat eu laoreet tincidunt, urna nisl scelerisque tellus.",
  feature1 = "Highly Experienced & Certified Doctors",
  feature2 = "State-of-the-Art Medical Facilities",
  feature3 = "Comprehensive & Personalized Treatment",
  feature4 = "Commitment to Safety, Quality, and Innovation",
  feature5 = "Multilingual, Patient-Friendly Staff",
  ...props
}: WhyChooseUs1Props) {
  // Set section defaults
  const whyChooseUsProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...whyChooseUsProps}>
      <Element
        id="whyChooseUsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Container - Two Column Layout */}
        <Element
          is={Grid}
          canvas
          columns={2}
          autoFit={false}
          minColumnWidth="300px"
          gap="48px"
          autoRows="auto"
          alignItems="center"
        >
          {/* Left Column - Visual Elements & Statistics */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas
          >
            {/* Top Row - Statistics and Images */}
            <Element
              is={Grid}
              canvas
              columns={2}
              autoFit={false}
              minColumnWidth="150px"
              gap="16px"
              autoRows="auto"
            >
              {/* Hospital Image */}
              <Element
                is={Box}
                backgroundColor="#f3f4f6"
                borderRadius="16px"
                height="200px"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                <CraftImage
                  src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80"
                  alt="Medical Staff"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-none"
                  margin=""
                  padding=""
                />
              </Element>

              {/* Statistics Card */}
              <Element
                is={Card}
                variant="elevated"
                shadow="lg"
                borderRadius="16px"
                backgroundColor="#14b8a6"
                padding="24px"
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
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={statisticNumber}
                    tagName="h3"
                    fontSize="text-4xl sm:text-5xl"
                    fontWeight="font-bold"
                    color="text-white"
                    textAlign="text-center"
                    margin="mb-2"
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
                    text={statisticLabel}
                    tagName="p"
                    fontSize="text-lg"
                    fontWeight="font-medium"
                    color="text-white"
                    textAlign="text-center"
                  />
                </Element>
              </Element>
            </Element>

            {/* Bottom Row - Support Card and Consultation Image */}
            <Element
              is={Grid}
              canvas
              columns={2}
              autoFit={false}
              minColumnWidth="150px"
              gap="16px"
              autoRows="auto"
            >
              {/* 24/7 Support Card */}
              <Element
                is={Card}
                variant="elevated"
                shadow="lg"
                borderRadius="16px"
                backgroundColor="#14b8a6"
                padding="20px"
                margin="0"
                hoverable={false}
                clickable={false}
                canvas
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  alignItems="center"
                  gap="gap-3"
                  margin="mb-3"
                >
                  <Element
                    is={Box}
                    backgroundColor="rgba(255, 255, 255, 0.2)"
                    padding="8px"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="40px"
                    height="40px"
                    canvas={false}
                  >
                    <Element
                      is={Icon}
                      iconName="clock"
                      size={20}
                      color="#ffffff"
                      canvas={false}
                    />
                  </Element>
                  <Element is="div" canvas={false}>
                    <CraftText
                      text={supportTitle}
                      tagName="h4"
                      fontSize="text-lg"
                      fontWeight="font-bold"
                      color="text-white"
                      textAlign="text-left"
                    />
                  </Element>
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
                    text={supportDescription}
                    tagName="p"
                    fontSize="text-sm"
                    fontWeight="font-normal"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                  />
                </Element>
              </Element>

              {/* Medical Consultation Image */}
              <Element
                is={Box}
                backgroundColor="#f3f4f6"
                borderRadius="16px"
                height="160px"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                <CraftImage
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
                  alt="Doctor Patient Consultation"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-none"
                  margin=""
                  padding=""
                />
              </Element>
            </Element>

            {/* Video Thumbnail with Play Button */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              borderRadius="16px"
              height="200px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=800&q=80"
                alt="Medical Team Video"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
              {/* Play Button Overlay */}
              <Element
                is={Box}
                backgroundColor="rgba(20, 184, 166, 0.9)"
                borderRadius="50%"
                width="60px"
                height="60px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                canvas={false}
              >
                <Element
                  is={Icon}
                  iconName="play"
                  size={24}
                  color="#ffffff"
                  canvas={false}
                />
              </Element>
            </Element>
          </Element>

          {/* Right Column - Content */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas
          >
            {/* Section Tag */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 16px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={sectionTag}
                tagName="p"
                fontSize="text-sm sm:text-base"
                fontWeight="font-medium"
                color="text-teal-600"
                textAlign="text-left"
                margin="mb-2"
                letterSpacing="tracking-wider"
              />
            </Element>

            {/* Main Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={mainTitle}
                tagName="h2"
                fontSize="text-3xl sm:text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-left"
                margin="mb-6"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 32px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={description}
                tagName="p"
                fontSize="text-base sm:text-lg"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                lineHeight="leading-relaxed"
              />
            </Element>

            {/* Features List */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Feature 1 */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                alignItems="center"
                gap="gap-3"
                margin="mb-4"
              >
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  borderRadius="50%"
                  width="24px"
                  height="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <Element
                    is={Icon}
                    iconName="check"
                    size={14}
                    color="#ffffff"
                    canvas={false}
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text={feature1}
                    tagName="p"
                    fontSize="text-base sm:text-lg"
                    fontWeight="font-medium"
                    color="text-gray-800"
                    textAlign="text-left"
                  />
                </Element>
              </Element>

              {/* Feature 2 */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                alignItems="center"
                gap="gap-3"
                margin="mb-4"
              >
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  borderRadius="50%"
                  width="24px"
                  height="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <Element
                    is={Icon}
                    iconName="check"
                    size={14}
                    color="#ffffff"
                    canvas={false}
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text={feature2}
                    tagName="p"
                    fontSize="text-base sm:text-lg"
                    fontWeight="font-medium"
                    color="text-gray-800"
                    textAlign="text-left"
                  />
                </Element>
              </Element>

              {/* Feature 3 */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                alignItems="center"
                gap="gap-3"
                margin="mb-4"
              >
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  borderRadius="50%"
                  width="24px"
                  height="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <Element
                    is={Icon}
                    iconName="check"
                    size={14}
                    color="#ffffff"
                    canvas={false}
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text={feature3}
                    tagName="p"
                    fontSize="text-base sm:text-lg"
                    fontWeight="font-medium"
                    color="text-gray-800"
                    textAlign="text-left"
                  />
                </Element>
              </Element>

              {/* Feature 4 */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                alignItems="center"
                gap="gap-3"
                margin="mb-4"
              >
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  borderRadius="50%"
                  width="24px"
                  height="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <Element
                    is={Icon}
                    iconName="check"
                    size={14}
                    color="#ffffff"
                    canvas={false}
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text={feature4}
                    tagName="p"
                    fontSize="text-base sm:text-lg"
                    fontWeight="font-medium"
                    color="text-gray-800"
                    textAlign="text-left"
                  />
                </Element>
              </Element>

              {/* Feature 5 */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                alignItems="center"
                gap="gap-3"
                margin="mb-4"
              >
                <Element
                  is={Box}
                  backgroundColor="#14b8a6"
                  borderRadius="50%"
                  width="24px"
                  height="24px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <Element
                    is={Icon}
                    iconName="check"
                    size={14}
                    color="#ffffff"
                    canvas={false}
                  />
                </Element>
                <Element is="div" canvas={false}>
                  <CraftText
                    text={feature5}
                    tagName="p"
                    fontSize="text-base sm:text-lg"
                    fontWeight="font-medium"
                    color="text-gray-800"
                    textAlign="text-left"
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

WhyChooseUs1.craft = {
  displayName: "Why Choose Us 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Why Choose Us specific props
    sectionTag: "WHY CHOOSE US",
    mainTitle: "Why Patients Trust Romedic",
    description:
      "Our commitment to excellence, state-of-the-art facilities, and compassionate care make us the preferred choice for comprehensive healthcare services.",
    statisticNumber: "98%",
    statisticLabel: "Positive Feedback",
    supportTitle: "24/7 Support",
    supportDescription:
      "Curabitur cursus, erat eu laoreet tincidunt, urna nisl scelerisque tellus.",
    feature1: "Highly Experienced & Certified Doctors",
    feature2: "State-of-the-Art Medical Facilities",
    feature3: "Comprehensive & Personalized Treatment",
    feature4: "Commitment to Safety, Quality, and Innovation",
    feature5: "Multilingual, Patient-Friendly Staff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
