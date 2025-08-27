import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ElderCareValues1Props extends SectionProps {
  // Values specific props
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  currentValue?: number;
  values?: {
    number: string;
    title: string;
    description: string;
  }[];
  aboutImage?: string;
  aboutTitle?: string;
  aboutDescription?: string;
  aboutButtonText?: string;
}

export function ElderCareValues1({
  sectionTag = "Our values",
  mainTitle = "Our values guide everything we do",
  description = "From the care we provide to the relationships we build.",
  currentValue = 1,
  values = [
    {
      number: "01",
      title: "Compassion",
      description:
        "We believe in offering care with empathy, understanding, and kindness, treating every senior as a valued individual.",
    },
    {
      number: "02",
      title: "Respect",
      description:
        "We provide care with empathy, kindness, and respect, treating every senior as a valued individual.",
    },
    {
      number: "03",
      title: "Integrity",
      description:
        "We maintain the highest standards of honesty and transparency in all our interactions.",
    },
    {
      number: "04",
      title: "Excellence",
      description:
        "We strive for exceptional quality in every aspect of our care and service delivery.",
    },
    {
      number: "05",
      title: "Community",
      description:
        "We foster a sense of belonging and connection for seniors and their families.",
    },
  ],
  aboutImage = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
  aboutTitle = "Compassionate care that enhances the lives of seniors.",
  aboutDescription = "Our mission is to offer personalized care that fosters comfort, dignity, and independence, while ensuring peace of mind for families. With a team of experienced professionals, we offer a variety of services including in-home care, assisted living, memory care, and hospice care.",
  aboutButtonText = "About Elderhaven",
  ...props
}: ElderCareValues1Props) {
  // Set section defaults for values
  const valuesProps = {
    backgroundColor: "#f8fffe",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...valuesProps}>
      <Element
        id="elderCareValuesContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* About Us Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 96px 0"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={2}
            autoFit={false}
            minColumnWidth="320px"
            gap="64px"
            autoRows="auto"
          >
            {/* Left - About Image */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height="400px"
                canvas
              >
                <CraftImage
                  src={aboutImage}
                  alt="About Elder Care"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            </Element>

            {/* Right - About Content */}
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
              {/* About Tag */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text="About us"
                  tagName="p"
                  fontSize="text-sm sm:text-base"
                  fontWeight="font-semibold"
                  color="text-teal-600"
                  textAlign="text-left"
                  letterSpacing="tracking-wider"
                  textTransform="uppercase"
                />
              </Element>

              {/* About Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={aboutTitle}
                  tagName="h2"
                  fontSize="text-3xl sm:text-4xl md:text-5xl"
                  fontWeight="font-bold"
                  color="text-gray-900"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* About Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={aboutDescription}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* About Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={aboutButtonText}
                  size="lg"
                  backgroundColor="#14b8a6"
                  textColor="#ffffff"
                  borderRadius="8px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>
            </Element>
          </Element>
        </Element>

        {/* Values Section */}
        <Element
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
            margin="0 0 64px 0"
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
                fontWeight="font-semibold"
                color="text-teal-600"
                textAlign="text-center"
                letterSpacing="tracking-wider"
                textTransform="uppercase"
              />
            </Element>

            {/* Main Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 16px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={mainTitle}
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
              margin="0"
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
              />
            </Element>
          </Element>

          {/* Values Navigation */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="gap-8"
            margin="mb-12"
            wrap="wrap"
          >
            {values.map((value, index) => (
              <Element
                key={index}
                is={Box}
                backgroundColor="transparent"
                padding="8px 16px"
                margin="0"
                display="block"
                borderRadius="8px"
                border={
                  index === currentValue - 1
                    ? "2px solid #14b8a6"
                    : "2px solid transparent"
                }
                canvas={false}
              >
                <CraftText
                  text={`${value.number} / 05`}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-medium"
                  color={index === currentValue - 1 ? "#14b8a6" : "#6b7280"}
                  textAlign="text-center"
                />
              </Element>
            ))}
          </Element>

          {/* Value Names */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="gap-8"
            margin="mb-16"
            wrap="wrap"
          >
            {values.map((value, index) => (
              <Element
                key={index}
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={value.title}
                  tagName="span"
                  fontSize="text-lg"
                  fontWeight={
                    index === currentValue - 1 ? "font-bold" : "font-normal"
                  }
                  color={index === currentValue - 1 ? "#14b8a6" : "#6b7280"}
                  textAlign="text-center"
                />
              </Element>
            ))}
          </Element>

          {/* Current Value Display */}
          <Element
            is={Card}
            variant="flat"
            shadow="lg"
            borderRadius="16px"
            backgroundColor="#ffffff"
            borderColor="#e5e7eb"
            padding="48px"
            margin="0 auto"
            hoverable={false}
            clickable={false}
            overflow="visible"
            canvas
          >
            {/* Value Title */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={values[currentValue - 1]?.title || "Compassion"}
                tagName="h3"
                fontSize="text-3xl sm:text-4xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Value Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={
                  values[currentValue - 1]?.description ||
                  "We believe in offering care with empathy, understanding, and kindness, treating every senior as a valued individual."
                }
                tagName="p"
                fontSize="text-lg sm:text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ElderCareValues1.craft = {
  displayName: "Elder Care Values 1",
  props: {
    // Section props
    backgroundColor: "#f8fffe",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    // Values specific props
    sectionTag: "Our values",
    mainTitle: "Our values guide everything we do",
    description: "From the care we provide to the relationships we build.",
    currentValue: 1,
    values: [
      {
        number: "01",
        title: "Compassion",
        description:
          "We believe in offering care with empathy, understanding, and kindness, treating every senior as a valued individual.",
      },
      {
        number: "02",
        title: "Respect",
        description:
          "We provide care with empathy, kindness, and respect, treating every senior as a valued individual.",
      },
      {
        number: "03",
        title: "Integrity",
        description:
          "We maintain the highest standards of honesty and transparency in all our interactions.",
      },
      {
        number: "04",
        title: "Excellence",
        description:
          "We strive for exceptional quality in every aspect of our care and service delivery.",
      },
      {
        number: "05",
        title: "Community",
        description:
          "We foster a sense of belonging and connection for seniors and their families.",
      },
    ],
    aboutImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    aboutTitle: "Compassionate care that enhances the lives of seniors.",
    aboutDescription:
      "Our mission is to offer personalized care that fosters comfort, dignity, and independence, while ensuring peace of mind for families. With a team of experienced professionals, we offer a variety of services including in-home care, assisted living, memory care, and hospice care.",
    aboutButtonText: "About Elderhaven",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
