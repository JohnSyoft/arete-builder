import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Input } from "@/components/blocks/Basic/Input";
import { Checkbox } from "@/components/blocks/Basic/Checkbox";

interface AccountingHero1Props extends SectionProps {
  // Hero specific props
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  statsNumber?: string;
  statsText?: string;
  statsDescription?: string;
  // Contact form props
  formTitle?: string;
  showContactForm?: boolean;
  // Settings
  showStats?: boolean;
  showArrow?: boolean;
  fullHeight?: boolean;
  textAlign?: "left" | "center" | "right";
}

export function AccountingHero1({
  title = "Crafto expand business values.",
  subtitle = "We are dedicated to providing amazing business accounting services and client service.",
  description = "We put a strong focus on the needs of business to figure out solutions that best fits your demand.",
  backgroundImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=1100&fit=crop",
  statsNumber = "40",
  statsText = "Years working experience.",
  statsDescription = "We put a strong focus on the needs of business to figure out solutions that best fits your demand.",
  formTitle = "Request a free advice?",
  showContactForm = true,
  showStats = true,
  showArrow = true,
  fullHeight = true,
  textAlign = "left",
  ...props
}: AccountingHero1Props) {
  // Set section defaults for hero
  const heroProps = {
    backgroundColor: "#1f2937",
    padding: fullHeight ? "py-0" : "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="accountingHeroContent"
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
          margin=""
          display="block"
          position="relative"
          width="w-full"
          height={fullHeight ? "h-screen" : "h-96"}
          overflow="hidden"
          canvas={false}
        >
          {/* Background Image */}
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
              src={backgroundImage}
              alt="Accounting Services"
              width="w-full"
              height="h-full"
              objectFit="object-cover"
              margin=""
              padding=""
            />
          </Element>

          {/* Dark Overlay */}
          <Element
            is={Box}
            backgroundColor="bg-black"
            padding="0"
            margin=""
            display="block"
            position="absolute"
            top="top-0"
            left="left-0"
            right="right-0"
            bottom="bottom-0"
            className="opacity-80"
            canvas={false}
          />

          {/* Content */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin=""
            display="block"
            position="relative"
            width="w-full"
            height="h-full"
            canvas={false}
          >
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap="gap-8"
              margin={`h-full px-8 py-16`}
            >
              {/* Left Content */}
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
                  justifyContent="center"
                  alignItems={textAlign === "center" ? "center" : textAlign === "left" ? "start" : "end"}
                  gap="gap-6"
                  margin=""
                >
                  {/* Main Title */}
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
                      tagName="h1"
                      fontSize="text-6xl sm:text-7xl md:text-8xl"
                      fontWeight="font-semibold"
                      color="text-white"
                      textAlign={textAlign}
                      lineHeight="leading-tight"
                      className="drop-shadow-2xl"
                    />
                  </Element>

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
                      tagName="p"
                      fontSize="text-lg sm:text-xl"
                      fontWeight="font-light"
                      color="text-white"
                      textAlign={textAlign}
                      lineHeight="leading-relaxed"
                      className="opacity-80 drop-shadow-lg"
                    />
                  </Element>

                  {/* Arrow with Link */}
                  {showArrow && (
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
                        justifyContent={textAlign === "center" ? "center" : textAlign === "left" ? "start" : "end"}
                        alignItems="center"
                        gap="gap-4"
                        margin=""
                      >
                        <Element
                          is={Box}
                          backgroundColor="bg-yellow-400"
                          padding="p-4"
                          margin=""
                          display="block"
                          width="w-16"
                          height="h-16"
                          borderRadius="rounded-full"
                          canvas={false}
                        >
                          <CraftText
                            text="→"
                            tagName="span"
                            fontSize="text-xl"
                            color="text-gray-800"
                            textAlign="text-center"
                          />
                        </Element>
                        
                        <CraftText
                          text="Explore services"
                          tagName="a"
                          href="#services"
                          fontSize="text-lg"
                          fontWeight="font-medium"
                          color="text-white"
                          textAlign="text-left"
                          className="hover:text-yellow-400 transition-colors duration-200 drop-shadow-lg"
                        />
                      </Element>
                    </Element>
                  )}
                </Element>
              </Element>

              {/* Right Content - Stats and Form */}
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
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  gap="gap-8"
                  margin=""
                >
                  {/* Stats Section */}
                  {showStats && (
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
                        flexDirection="row"
                        justifyContent="start"
                        alignItems="center"
                        gap="gap-6"
                        margin=""
                      >
                        {/* Stats Circle */}
                        <Element
                          is={Box}
                          backgroundColor="bg-yellow-400"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-48"
                          height="h-48"
                          borderRadius="rounded-full"
                          position="relative"
                          canvas={false}
                        >
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            position="absolute"
                            top="top-1/2"
                            left="left-1/2"
                            className="transform -translate-x-1/2 -translate-y-1/2"
                            canvas={false}
                          >
                            <CraftText
                              text={statsNumber}
                              tagName="span"
                              fontSize="text-8xl sm:text-9xl"
                              fontWeight="font-bold"
                              color="text-gray-800"
                              textAlign="text-center"
                              lineHeight="leading-none"
                            />
                          </Element>
                        </Element>

                        {/* Stats Text */}
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
                            gap="gap-3"
                            margin=""
                          >
                            <CraftText
                              text={statsText}
                              tagName="h3"
                              fontSize="text-xl"
                              fontWeight="font-semibold"
                              color="text-gray-800"
                              textAlign="text-left"
                            />
                            
                            <CraftText
                              text={statsDescription}
                              tagName="p"
                              fontSize="text-base"
                              fontWeight="font-normal"
                              color="text-gray-600"
                              textAlign="text-left"
                              lineHeight="leading-relaxed"
                            />
                            
                            <CraftButton
                              text="Discover now"
                              size="lg"
                              backgroundColor="transparent"
                              textColor="#1f40af"
                              borderRadius="rounded-none"
                              padding="px-0 py-2"
                              width="w-auto"
                              className="hover:text-blue-600 transition-colors duration-200 underline"
                            />
                          </Element>
                        </Element>
                      </Element>
                    </Element>
                  )}

                  {/* Contact Form */}
                  {showContactForm && (
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
                        is={Card}
                        variant="flat"
                        shadow="2xl"
                        borderRadius="rounded-lg"
                        backgroundColor="bg-white"
                        borderColor=""
                        padding="p-8"
                        margin=""
                        hoverable={false}
                        clickable={false}
                        overflow="visible"
                        border={false}
                        className="w-full"
                        canvas
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
                          {/* Form Title */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={formTitle}
                              tagName="h3"
                              fontSize="text-lg"
                              fontWeight="font-semibold"
                              color="text-gray-800"
                              textAlign="text-left"
                            />
                          </Element>

                          {/* Form Fields */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            width="w-full"
                            canvas={false}
                          >
                            <Element
                              is={Flex}
                              canvas
                              flexDirection="column"
                              justifyContent="start"
                              alignItems="stretch"
                              gap="gap-4"
                              margin=""
                            >
                              {/* Name Field */}
                              <Element
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin=""
                                display="block"
                                width="w-full"
                                canvas={false}
                              >
                                <Input
                                  placeholder="Your name*"
                                  type="text"
                                  size="md"
                                  backgroundColor="bg-gray-50"
                                  textColor="text-gray-800"
                                  borderColor="border-gray-200"
                                  borderRadius="rounded-lg"
                                  padding="px-4 py-3"
                                  width="w-full"
                                />
                              </Element>

                              {/* Email Field */}
                              <Element
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin=""
                                display="block"
                                width="w-full"
                                canvas={false}
                              >
                                <Input
                                  placeholder="Your email address*"
                                  type="email"
                                  size="md"
                                  backgroundColor="bg-gray-50"
                                  textColor="text-gray-800"
                                  borderColor="border-gray-200"
                                  borderRadius="rounded-lg"
                                  padding="px-4 py-3"
                                  width="w-full"
                                />
                              </Element>

                              {/* Phone Field */}
                              <Element
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin=""
                                display="block"
                                width="w-full"
                                canvas={false}
                              >
                                <Input
                                  placeholder="Your phone"
                                  type="tel"
                                  size="md"
                                  backgroundColor="bg-gray-50"
                                  textColor="text-gray-800"
                                  borderColor="border-gray-200"
                                  borderRadius="rounded-lg"
                                  padding="px-4 py-3"
                                  width="w-full"
                                />
                              </Element>

                              {/* Terms Checkbox */}
                              <Element
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin=""
                                display="block"
                                width="w-full"
                                canvas={false}
                              >
                                <Checkbox
                                  label="I agree to the terms of service."
                                  checked={false}
                                  size="md"
                                  textColor="text-gray-700"
                                />
                              </Element>

                              {/* Submit Button */}
                              <Element
                                is={Box}
                                backgroundColor="transparent"
                                padding="0"
                                margin=""
                                display="block"
                                width="w-full"
                                canvas={false}
                              >
                                <CraftButton
                                  text="Get free quote"
                                  size="lg"
                                  backgroundColor="#1f40af"
                                  textColor="#ffffff"
                                  borderRadius="rounded-lg"
                                  padding="px-6 py-4"
                                  width="w-full"
                                  className="hover:bg-blue-700 transition-colors duration-200"
                                />
                              </Element>
                            </Element>
                          </Element>
                        </Element>
                      </Element>
                    </Element>
                  )}
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingHero1.craft = {
  displayName: "Accounting Hero 1",
  props: {
    // Section props
    backgroundColor: "#1f2937",
    padding: "py-0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Hero specific props
    title: "Crafto expand business values.",
    subtitle: "We are dedicated to providing amazing business accounting services and client service.",
    description: "We put a strong focus on the needs of business to figure out solutions that best fits your demand.",
    statsNumber: "40",
    statsText: "Years working experience.",
    statsDescription: "We put a strong focus on the needs of business to figure out solutions that best fits your demand.",
    formTitle: "Request a free advice?",
    showContactForm: true,
    showStats: true,
    showArrow: true,
    fullHeight: true,
    textAlign: "left",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
