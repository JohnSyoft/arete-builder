import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface HospitalityNewsletter1Props extends SectionProps {
  // Newsletter specific props
  title?: string;
  subtitle?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  privacyText?: string;
  privacyLink?: string;
  // Settings
  showImage?: boolean;
  imageUrl?: string;
  showPrivacy?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

export function HospitalityNewsletter1({
  title = "Get the amazing offers into your inbox!",
  subtitle = "Stay Updated",
  description = "Subscribe to our newsletter and be the first to know about exclusive offers, special events, and luxury experiences.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe",
  privacyText = "We are committed to protecting your privacy policy.",
  privacyLink = "#privacy",
  showImage = true,
  imageUrl = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=171&h=171&fit=crop",
  showPrivacy = true,
  backgroundColor = "#f8fafc",
  textColor = "#1f2937",
  ...props
}: HospitalityNewsletter1Props) {
  // Set section defaults for newsletter
  const newsletterProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...newsletterProps}>
      <Element
        id="newsletterContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        <Element
          is={Box}
          backgroundColor="bg-white"
          padding="py-16 px-8"
          margin=""
          display="block"
          borderRadius="rounded-2xl"
          shadow="xl"
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
          >
            {/* Logo/Image */}
            {showImage && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="mb-4"
                display="block"
                canvas={false}
              >
                <CraftImage
                  src={imageUrl}
                  alt="Newsletter"
                  width="w-20 h-20"
                  height="h-20"
                  objectFit="object-cover"
                  borderRadius="rounded-full"
                  margin=""
                  padding=""
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
                text={title}
                tagName="h3"
                fontSize="text-2xl sm:text-3xl md:text-4xl"
                fontWeight="font-normal"
                color={textColor}
                textAlign="text-center"
                lineHeight="leading-tight"
                className="max-w-4xl mx-auto"
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

            {/* Newsletter Form */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              width="w-full max-w-2xl"
              canvas
            >
              <Element
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="rounded-full"
                backgroundColor="bg-white"
                borderColor=""
                padding="p-2"
                margin=""
                hoverable={false}
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
                  justifyContent="space-between"
                  alignItems="center"
                  gap="gap-0"
                  margin=""
                >
                  {/* Email Input */}
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
                      backgroundColor="transparent"
                      padding="px-6 py-4"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={placeholder}
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-500"
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>

                  {/* Subscribe Button */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftButton
                      text={buttonText}
                      size="lg"
                      backgroundColor="#d97706"
                      textColor="#ffffff"
                      borderRadius="rounded-full"
                      padding="px-8 py-4"
                      width="w-auto"
                      className="hover:bg-amber-600 transition-colors duration-300"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>

            {/* Privacy Text */}
            {showPrivacy && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftText
                  text={privacyText}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-500"
                  textAlign="text-center"
                >
                  <CraftText
                    text="privacy policy"
                    tagName="a"
                    href={privacyLink}
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-700"
                    textAlign="text-center"
                    className="underline hover:text-amber-600 transition-colors duration-200"
                  />
                </CraftText>
              </Element>
            )}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityNewsletter1.craft = {
  displayName: "Hospitality Newsletter 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Newsletter specific props
    title: "Get the amazing offers into your inbox!",
    subtitle: "Stay Updated",
    description: "Subscribe to our newsletter and be the first to know about exclusive offers, special events, and luxury experiences.",
    placeholder: "Enter your email address",
    buttonText: "Subscribe",
    privacyText: "We are committed to protecting your privacy policy.",
    privacyLink: "#privacy",
    showImage: true,
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=171&h=171&fit=crop",
    showPrivacy: true,
    backgroundColor: "#f8fafc",
    textColor: "#1f2937",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};

