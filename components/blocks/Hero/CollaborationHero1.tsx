import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface CollaborationHero1Props extends SectionProps {
  // Collaboration Hero specific props
  mainTitle?: string;
  highlightText?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  heroImage?: string;
  logoImage?: string;
}

export function CollaborationHero1({
  mainTitle = "Collaborate remotely, with",
  highlightText = "Postcrafts.",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
  primaryButtonText = "Start exploring",
  primaryButtonLink = "#",
  secondaryButtonText = "Watch video",
  secondaryButtonLink = "#",
  heroImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png",
  logoImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg",
  ...props
}: CollaborationHero1Props) {
  // Set section defaults for collaboration hero
  const heroProps = {
    backgroundColor: "#F0FDF4", // green gradient background
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 pt-8 pb-8 sm:px-6 sm:pt-8 sm:pb-12 md:px-8 md:pt-24 md:pb-16 lg:px-8 lg:pt-32 lg:pb-20",
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="collaborationHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Hero Content */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="40px 0"
          margin="0"
          display="block"
          canvas
        >
          {/* Two-column layout */}
          <Element
            is={Flex}
            flexDirection="row"
            justifyContent="between"
            alignItems="center"
            gap="48px"
            canvas
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
              width="50%"
              canvas
            >
              {/* Main Heading */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={mainTitle}
                  tagName="h1"
                  fontSize="text-4xl sm:text-6xl lg:text-7xl"
                  fontWeight="font-bold"
                  color="text-black"
                  textAlign="text-left"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Highlighted text with green underline effect */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
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
                  <Text
                    text={highlightText}
                    tagName="h1"
                    fontSize="text-4xl sm:text-6xl lg:text-7xl"
                    fontWeight="font-bold"
                    color="text-black"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                  />
                </Element>
                {/* Green underline effect */}
                <Element
                  is={Box}
                  backgroundColor="#4ADE80"
                  padding="0"
                  margin="8px 0 0 0"
                  width="100%"
                  height="6px"
                  minHeight="6px"
                  canvas={false}
                />
              </Element>

              {/* Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 40px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={description}
                  tagName="p"
                  fontSize="text-base sm:text-xl"
                  fontWeight="font-normal"
                  color="text-black"
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* Buttons Section */}
              <Element
                is={Flex}
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="32px"
                canvas
              >
                {/* Primary Button */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <Button
                    text={primaryButtonText}
                    size="lg"
                    backgroundColor="#F97316"
                    textColor="#FFFFFF"
                    borderRadius="4px"
                    padding="px-10 py-4"
                    width="w-auto"
                  />
                </Element>

                {/* Secondary Button with Play Icon */}
                <Element
                  is={Flex}
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="12px"
                  canvas
                >
                  {/* Play Icon Circle */}
                  <Element
                    is={Box}
                    backgroundColor="#F97316"
                    padding="0"
                    margin="0"
                    width="40px"
                    height="40px"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    canvas={false}
                  >
                    <div className="w-5 h-5 text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </Element>
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <Text
                      text={secondaryButtonText}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-semibold"
                      color="text-black"
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              </Element>
            </Element>

            {/* Right Column - Hero Image */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              alignItems="center"
              justifyContent="center"
              width="50%"
              canvas
            >
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                width="100%"
                height="auto"
                canvas
              >
                <Image
                  src={heroImage}
                  alt="Hero Image"
                  width="w-full"
                  height="h-auto"
                  objectFit="object-cover"
                  margin=""
                  padding=""
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

CollaborationHero1.craft = {
  displayName: "Collaboration Hero",
  props: {
    mainTitle: "Collaborate remotely, with",
    highlightText: "Postcrafts.",
    description:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
    primaryButtonText: "Start exploring",
    primaryButtonLink: "#",
    secondaryButtonText: "Watch video",
    secondaryButtonLink: "#",
    heroImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png",
    logoImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/logo.svg",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
