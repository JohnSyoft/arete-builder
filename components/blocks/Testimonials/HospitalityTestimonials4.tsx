import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface TestimonialBannerProps extends SectionProps {
  // Testimonial specific props
  quote?: string;
  author?: string;
  title?: string;
  company?: string;
  avatar?: string;
  logo?: string;
  logoAlt?: string;
  // Settings
  showAvatar?: boolean;
  showLogo?: boolean;
  showQuote?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function HospitalityTestimonials4({
  quote = "Life is shaped by a series of interconnected experiences our environments.",
  author = "John Smith",
  title = "CEO",
  company = "Luxury Resorts Inc.",
  avatar = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=89&h=107&fit=crop",
  logo = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=120&h=60&fit=crop",
  logoAlt = "Company Logo",
  showAvatar = true,
  showLogo = true,
  showQuote = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#d97706",
  ...props
}: TestimonialBannerProps) {
  // Set section defaults for testimonial
  const testimonialProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...testimonialProps}>
      <Element
        id="testimonialContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        <Element
          is={Card}
          variant="flat"
          shadow="2xl"
          borderRadius="rounded-2xl"
          backgroundColor="bg-white"
          borderColor=""
          padding="p-8 sm:p-12"
          margin=""
          hoverable={false}
          clickable={false}
          overflow="visible"
          border={false}
          className="relative"
          canvas
        >
          {/* Vertical Label */}
          <Element
            is={Box}
            backgroundColor={accentColor}
            padding="p-4"
            margin=""
            display="block"
            position="absolute"
            top="top-0"
            left="left-0"
            width="w-16"
            height="h-full"
            borderRadius="rounded-l-2xl"
            canvas={false}
          >
            <Element
              is={Flex}
              canvas
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="gap-2"
              margin="text-center h-full"
            >
              <CraftText
                text="TESTIMONIAL"
                tagName="span"
                fontSize="text-xs"
                fontWeight="font-bold"
                color="text-white"
                textAlign="text-center"
                className="transform -rotate-90 whitespace-nowrap"
              />
            </Element>
          </Element>

          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-8"
            margin="ml-16"
          >
            {/* Avatar */}
            {showAvatar && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftImage
                  src={avatar}
                  alt={author}
                  width="w-20 h-24 sm:w-16 sm:h-20"
                  height="h-24 sm:h-20"
                  objectFit="object-cover"
                  borderRadius="rounded-lg"
                  margin=""
                  padding=""
                />
              </Element>
            )}

            {/* Quote Content */}
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
                {/* Quote Text */}
                {showQuote && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={quote}
                      tagName="p"
                      fontSize="text-xl sm:text-2xl md:text-3xl"
                      fontWeight="font-medium"
                      color={textColor}
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                      className="max-w-4xl"
                    >
                      <CraftText
                        text="our environments"
                        tagName="span"
                        fontSize="text-xl sm:text-2xl md:text-3xl"
                        fontWeight="font-bold"
                        color={accentColor}
                        textAlign="text-left"
                        className="underline decoration-2 underline-offset-4"
                      />
                    </CraftText>
                  </Element>
                )}

                {/* Author Info */}
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
                    gap="gap-1"
                    margin=""
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
                        text={author}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color={textColor}
                        textAlign="text-left"
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
                        text={`${title}, ${company}`}
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            </Element>

            {/* Company Logo */}
            {showLogo && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftImage
                  src={logo}
                  alt={logoAlt}
                  width="w-24 h-12 sm:w-20 sm:h-10"
                  height="h-12 sm:h-10"
                  objectFit="object-contain"
                  margin=""
                  padding=""
                />
              </Element>
            )}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityTestimonials4.craft = {
  displayName: "Hospitality Testimonials 4",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Testimonial specific props
    quote: "Life is shaped by a series of interconnected experiences our environments.",
    author: "John Smith",
    title: "CEO",
    company: "Luxury Resorts Inc.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=89&h=107&fit=crop",
    logo: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=120&h=60&fit=crop",
    logoAlt: "Company Logo",
    showAvatar: true,
    showLogo: true,
    showQuote: true,
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: "#d97706",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
