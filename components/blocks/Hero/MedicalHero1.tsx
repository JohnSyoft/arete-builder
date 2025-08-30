import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MedicalHero1Props extends SectionProps {
  // Medical Hero specific props
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  doctorImage?: string;
  patientsRecoverText?: string;
  patientAvatars?: string[];
  stat1Number?: string;
  stat1Label?: string;
  stat1Description?: string;
  stat2Title?: string;
  stat2Description?: string;
  stat3Number?: string;
  stat3Label?: string;
  stat4Number?: string;
  stat4Label?: string;
}

export function MedicalHero1({
  mainTitle = "Professional Medical Care for Your Optimal Health",
  description = "We are committed to providing top-quality healthcare with a team of highly skilled medical professionals and advanced medical technology.",
  primaryButtonText = "Book an Appointment",
  secondaryButtonText = "View Services",
  doctorImage = "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=face",
  patientsRecoverText = "150K+ Patients Recover",
  patientAvatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=50&h=50&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
  ],
  stat1Number = "15+",
  stat1Label = "Years of Experience",
  stat1Description = "Providing exceptional healthcare services with a proven track record of patient satisfaction and medical excellence.",
  stat2Title = "Join a thriving health and wellness community",
  stat2Description = "Over 1 million users trust Romedic for their medical needs.",
  stat3Number = "35+",
  stat3Label = "Medical Specialties",
  stat4Number = "20+",
  stat4Label = "Years of Experience",
  ...props
}: MedicalHero1Props) {
  // Set section defaults for medical hero
  const heroProps = {
    backgroundColor: "#14b8a6", // teal background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-12 md:px-8 md:pt-24 md:pb-16 lg:px-8 lg:pt-32 lg:pb-20",
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="medicalHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Hero Content */}
        <Element
          is={Grid}
          canvas
          columns={2}
          autoFit={false}
          minColumnWidth="320px"
          gap="48px"
          autoRows="auto"
        >
          {/* Left Column - Content */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            canvas
          >
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
                tagName="h1"
                fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                fontWeight="font-bold"
                color="text-white"
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
                fontSize="text-lg sm:text-xl"
                fontWeight="font-normal"
                color="text-white"
                textAlign="text-left"
                lineHeight="leading-relaxed"
                margin="mb-8"
              />
            </Element>

            {/* Buttons */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="gap-4"
              margin="mb-12"
              wrap="wrap"
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={primaryButtonText}
                  size="lg"
                  backgroundColor="#065f46"
                  textColor="#ffffff"
                  borderRadius="25px"
                  padding="px-8 py-4"
                  width="w-auto"
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
                <CraftButton
                  text={secondaryButtonText}
                  variant="outline"
                  size="lg"
                  backgroundColor="transparent"
                  textColor="#ffffff"
                  borderRadius="25px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </Element>

            {/* Patient Avatars and Stats */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="gap-4"
              margin="mb-0"
              wrap="wrap"
            >
              {/* Avatar Group */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-2"
                margin="0"
                wrap="nowrap"
              >
                {patientAvatars.map((avatar, index) => (
                  <Element
                    key={index}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="40px"
                    height="40px"
                    borderRadius="50%"
                    border="2px solid #ffffff"
                    canvas
                  >
                    <CraftImage
                      src={avatar}
                      alt={`Patient ${index + 1}`}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-full"
                      margin=""
                      padding=""
                    />
                  </Element>
                ))}
              </Element>

              {/* Patients Recover Text */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={patientsRecoverText}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-medium"
                  color="text-white"
                  textAlign="text-left"
                />
              </Element>
            </Element>
          </Element>

          {/* Right Column - Doctor Image */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              height="600px"
              canvas
            >
              <CraftImage
                src={doctorImage}
                alt="Professional Doctor"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-lg"
                margin=""
                padding=""
              />
            </Element>
          </Element>
        </Element>

        {/* Statistics Cards Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="48px 0 0 0"
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
            gap="24px"
            autoRows="auto"
          >
            {/* Stat 1 - Years of Experience */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="16px"
              backgroundColor="#d1fae5"
              borderColor="transparent"
              padding="24px"
              margin="0"
              hoverable={false}
              clickable={false}
              overflow="visible"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 12px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={stat1Number}
                  tagName="h3"
                  fontSize="text-4xl sm:text-5xl"
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
                margin="0 0 8px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={stat1Label}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-semibold"
                  color="text-gray-800"
                  textAlign="text-center"
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
                  text={stat1Description}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                />
              </Element>
            </Element>

            {/* Stat 2 - Community */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="16px"
              backgroundColor="#ffffff"
              borderColor="transparent"
              padding="24px"
              margin="0"
              hoverable={false}
              clickable={false}
              overflow="visible"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 12px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={stat2Title}
                  tagName="h3"
                  fontSize="text-xl sm:text-2xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={stat2Description}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* Community Avatars */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-2"
                margin="0"
                wrap="nowrap"
              >
                {patientAvatars.slice(0, 5).map((avatar, index) => (
                  <Element
                    key={index}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="32px"
                    height="32px"
                    borderRadius="50%"
                    border="2px solid #ffffff"
                    canvas
                  >
                    <CraftImage
                      src={avatar}
                      alt={`Community member ${index + 1}`}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-full"
                      margin=""
                      padding=""
                    />
                  </Element>
                ))}
              </Element>
            </Element>

            {/* Stat 3 - Medical Specialties */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="16px"
              backgroundColor="#ffffff"
              borderColor="transparent"
              padding="24px"
              margin="0"
              hoverable={false}
              clickable={false}
              overflow="visible"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 12px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={stat3Number}
                  tagName="h3"
                  fontSize="text-4xl sm:text-5xl"
                  fontWeight="font-bold"
                  color="text-teal-600"
                  textAlign="text-right"
                  lineHeight="leading-tight"
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
                  text={stat3Label}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-semibold"
                  color="text-gray-800"
                  textAlign="text-right"
                />
              </Element>
            </Element>

            {/* Stat 4 - Additional Experience */}
            <Element
              is={Card}
              variant="flat"
              shadow="none"
              borderRadius="16px"
              backgroundColor="#ffffff"
              borderColor="transparent"
              padding="24px"
              margin="0"
              hoverable={false}
              clickable={false}
              overflow="visible"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 12px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={stat4Number}
                  tagName="h3"
                  fontSize="text-4xl sm:text-5xl"
                  fontWeight="font-bold"
                  color="text-teal-600"
                  textAlign="text-right"
                  lineHeight="leading-tight"
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
                  text={stat4Label}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-semibold"
                  color="text-gray-800"
                  textAlign="text-right"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MedicalHero1.craft = {
  displayName: "Medical Hero 1",
  props: {
    // Section props
    backgroundColor: "#14b8a6", // teal background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-12 md:px-8 md:pt-24 md:pb-16 lg:px-8 lg:pt-32 lg:pb-20",
    // Medical Hero specific props
    mainTitle: "Professional Medical Care for Your Optimal Health",
    description:
      "We are committed to providing top-quality healthcare with a team of highly skilled medical professionals and advanced medical technology.",
    primaryButtonText: "Book an Appointment",
    secondaryButtonText: "View Services",
    doctorImage:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=800&fit=crop&crop=face",
    patientsRecoverText: "150K+ Patients Recover",
    patientAvatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1494790108755-2616b612b577?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&crop=face",
    ],
    stat1Number: "15+",
    stat1Label: "Years of Experience",
    stat1Description:
      "Providing exceptional healthcare services with a proven track record of patient satisfaction and medical excellence.",
    stat2Title: "Join a thriving health and wellness community",
    stat2Description:
      "Over 1 million users trust Romedic for their medical needs.",
    stat3Number: "35+",
    stat3Label: "Medical Specialties",
    stat4Number: "20+",
    stat4Label: "Years of Experience",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
