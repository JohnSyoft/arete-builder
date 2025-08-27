import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Icon } from "@/components/blocks/Basic/Icon";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MedicalServices1Props extends SectionProps {
  // Medical Services specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
  service1Title?: string;
  service2Title?: string;
  service3Title?: string;
  service1Description?: string;
  service2Description?: string;
  service3Description?: string;
}

export function MedicalServices1({
  sectionTag = "WHAT WE OFFER",
  mainTitle = "Comprehensive Medical Services for Every Stage of Life",
  description = "We are committed to delivering world-class healthcare that is accessible, efficient, and patient-centered.",
  buttonText = "View More",
  service1Title = "General Health Checkups",
  service2Title = "Emergency & Urgent Care",
  service3Title = "Cardiology & Heart Health",
  service1Description = "Regular health assessments for early disease detection. Lorem ipsum dolor sit amet.",
  service2Description = "Regular health assessments for early disease detection. Lorem ipsum dolor sit amet.",
  service3Description = "Regular health assessments for early disease detection. Lorem ipsum dolor sit amet.",
  ...props
}: MedicalServices1Props) {
  // Set section defaults for medical services
  const servicesProps = {
    backgroundColor: "#f8fafc", // light gray background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...servicesProps}>
      <Element
        id="medicalServicesContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Section Header */}
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
            textAlign="text-center"
            margin="mb-2"
            letterSpacing="tracking-wider"
          />
        </Element>

        {/* Main Title */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 auto 24px auto"
          display="block"
          width="100%"
          canvas={false}
        >
          <CraftText
            text={mainTitle}
            tagName="h2"
            fontSize="text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
            fontWeight="font-bold"
            color="text-gray-900"
            textAlign="text-center"
            margin="mb-6"
            lineHeight="leading-tight"
          />
        </Element>

        {/* Description and CTA Container */}
        <Element
          is={Flex}
          canvas
          flexDirection="row"
          justifyContent="between"
          alignItems="center"
          gap="gap-6"
          margin="mb-12"
          wrap="wrap"
        >
          {/* Description */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            width="100%"
            canvas={false}
          >
            <CraftText
              text={description}
              tagName="p"
              fontSize="text-lg sm:text-xl"
              fontWeight="font-normal"
              color="text-gray-600"
              textAlign="text-left"
              lineHeight="leading-relaxed"
            />
          </Element>

          {/* View More Button */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <CraftButton
              text={buttonText}
              size="lg"
              backgroundColor="#14b8a6" // teal-500
              textColor="#ffffff"
              borderRadius="25px"
              padding="px-8 py-3"
              width="w-auto"
            />
          </Element>
        </Element>

        {/* Services Cards Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="300px"
          gap="24px"
          autoRows="auto"
        >
          {/* General Health Checkups Card */}
          <Element
            is={Card}
            variant="elevated"
            shadow="lg"
            borderRadius="16px"
            backgroundColor="#ffffff"
            padding="0"
            margin="0"
            hoverable={true}
            clickable={false}
            overflow="hidden"
            canvas
          >
            {/* Card Header with Icon */}
            <Element
              is={Box}
              backgroundColor="#14b8a6"
              textColor="#ffffff"
              padding="32px 24px"
              margin="0"
              borderRadius="0px"
              display="flex"
              alignItems="center"
              justifyContent="start"
              gap="16px"
              canvas
            >
              {/* Icon Container */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.2)"
                padding="12px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="48px"
                height="48px"
                canvas={false}
              >
                <Element
                  is={Icon}
                  iconName="plus"
                  size={24}
                  color="#ffffff"
                  canvas={false}
                />
              </Element>

              {/* Title */}
              <Element is="div" canvas={false}>
                <CraftText
                  text={service1Title}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>

            {/* Card Image */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              height="192px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src="/placeholder.svg?height=200&width=400&text=Doctor+Consultation"
                alt="Doctor Consultation Image"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
            </Element>

            {/* Card Content */}
            <Element
              is={Box}
              backgroundColor="#ffffff"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              <CraftText
                text={service1Description}
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                margin="mb-4"
                lineHeight="leading-relaxed"
              />

              <Element
                is={Box}
                padding="8px 0 0 0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text="View Details"
                  variant="link"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  padding="p-0"
                />
              </Element>
            </Element>
          </Element>

          {/* Emergency & Urgent Care Card */}
          <Element
            is={Card}
            variant="elevated"
            shadow="lg"
            borderRadius="16px"
            backgroundColor="#ffffff"
            padding="0"
            margin="0"
            hoverable={true}
            clickable={false}
            overflow="hidden"
            canvas
          >
            {/* Card Header with Icon */}
            <Element
              is={Box}
              backgroundColor="#14b8a6"
              textColor="#ffffff"
              padding="32px 24px"
              margin="0"
              borderRadius="0px"
              display="flex"
              alignItems="center"
              justifyContent="start"
              gap="16px"
              canvas
            >
              {/* Icon Container */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.2)"
                padding="12px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="48px"
                height="48px"
                canvas={false}
              >
                <Element
                  is={Icon}
                  iconName="zap"
                  size={24}
                  color="#ffffff"
                  canvas={false}
                />
              </Element>

              {/* Title */}
              <Element is="div" canvas={false}>
                <CraftText
                  text={service2Title}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>

            {/* Card Image */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              height="192px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src="/placeholder.svg?height=200&width=400&text=Hospital+Corridor"
                alt="Hospital Corridor Image"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
            </Element>

            {/* Card Content */}
            <Element
              is={Box}
              backgroundColor="#ffffff"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              <CraftText
                text={service2Description}
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                margin="mb-4"
                lineHeight="leading-relaxed"
              />

              <Element
                is={Box}
                padding="8px 0 0 0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text="View Details"
                  variant="link"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  padding="p-0"
                />
              </Element>
            </Element>
          </Element>

          {/* Cardiology & Heart Health Card */}
          <Element
            is={Card}
            variant="elevated"
            shadow="lg"
            borderRadius="16px"
            backgroundColor="#ffffff"
            padding="0"
            margin="0"
            hoverable={true}
            clickable={false}
            overflow="hidden"
            canvas
          >
            {/* Card Header with Icon */}
            <Element
              is={Box}
              backgroundColor="#14b8a6"
              textColor="#ffffff"
              padding="32px 24px"
              margin="0"
              borderRadius="0px"
              display="flex"
              alignItems="center"
              justifyContent="start"
              gap="16px"
              canvas
            >
              {/* Icon Container */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.2)"
                padding="12px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width="48px"
                height="48px"
                canvas={false}
              >
                <Element
                  is={Icon}
                  iconName="heart"
                  size={24}
                  color="#ffffff"
                  canvas={false}
                />
              </Element>

              {/* Title */}
              <Element is="div" canvas={false}>
                <CraftText
                  text={service3Title}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>

            {/* Card Image */}
            <Element
              is={Box}
              backgroundColor="#f3f4f6"
              height="192px"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <CraftImage
                src="/placeholder.svg?height=200&width=400&text=Female+Doctor"
                alt="Female Doctor Image"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-none"
                margin=""
                padding=""
              />
            </Element>

            {/* Card Content */}
            <Element
              is={Box}
              backgroundColor="#ffffff"
              padding="24px"
              margin="0"
              display="block"
              canvas
            >
              <CraftText
                text={service3Description}
                tagName="p"
                fontSize="text-base"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                margin="mb-4"
                lineHeight="leading-relaxed"
              />

              <Element
                is={Box}
                padding="8px 0 0 0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text="View Details"
                  variant="link"
                  size="sm"
                  backgroundColor="transparent"
                  textColor="#14b8a6"
                  padding="p-0"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MedicalServices1.craft = {
  displayName: "Medical Services 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc", // light gray background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Medical Services specific props
    sectionTag: "WHAT WE OFFER",
    mainTitle: "Comprehensive Medical Services for Every Stage of Life",
    description:
      "We are committed to delivering world-class healthcare that is accessible, efficient, and patient-centered.",
    buttonText: "View More",
    service1Title: "General Health Checkups",
    service2Title: "Emergency & Urgent Care",
    service3Title: "Cardiology & Heart Health",
    service1Description:
      "Regular health assessments for early disease detection. Lorem ipsum dolor sit amet.",
    service2Description:
      "Regular health assessments for early disease detection. Lorem ipsum dolor sit amet.",
    service3Description:
      "Regular health assessments for early disease detection. Lorem ipsum dolor sit amet.",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
