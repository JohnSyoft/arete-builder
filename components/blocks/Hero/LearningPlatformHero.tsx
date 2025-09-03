import { Element } from "@craftjs/core";
import { Box } from "@/components/blocks/Basic/Box";
import { Text } from "@/components/blocks/Basic/Text";
import { Button } from "@/components/blocks/Basic/Button";
import { Image } from "@/components/blocks/Basic/Image";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";
import { Flex } from "@/components/blocks/Basic/Flex";

export interface LearningPlatformHeroProps extends SectionProps {
  // Hero specific props
  tagline?: string;
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  loginText?: string;
  loginLink?: string;
  heroImage?: string;
  logoImage?: string;
}

export function LearningPlatformHero({
  tagline = "A social media for learners",
  mainTitle = "Connect & learn from the experts",
  description = "Grow your career fast with right mentor.",
  primaryButtonText = "Join for free",
  primaryButtonLink = "#",
  loginText = "Already joined us? Log in",
  loginLink = "#",
  heroImage = "https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png",
  logoImage = "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",
  ...props
}: LearningPlatformHeroProps) {
  // Set section defaults for learning platform hero
  const heroProps = {
    backgroundColor: "#FCF8F1",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 pt-8 pb-8 sm:px-6 sm:pt-8 sm:pb-12 md:px-8 md:pt-12 md:pb-16 lg:px-8 lg:pt-16 lg:pb-20",
    ...props,
  };

  return (
    <Section {...heroProps}>
      <Element
        id="learningPlatformHeroContent"
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
          padding="40px 0 80px 0"
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
              {/* Tagline */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={tagline}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-semibold"
                  color="text-blue-600"
                  textAlign="text-left"
                  textTransform="uppercase"
                  letterSpacing="tracking-wider"
                />
              </Element>

              {/* Main Heading */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <Text
                  text={mainTitle}
                  tagName="h1"
                  fontSize="text-4xl lg:text-6xl xl:text-8xl"
                  fontWeight="font-bold"
                  color="text-black"
                  textAlign="text-left"
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

              {/* Primary Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 20px 0"
                display="block"
                canvas={false}
              >
                <Button
                  text={primaryButtonText}
                  backgroundColor="#FDE047"
                  textColor="#000000"
                  borderRadius="9999px"
                  padding="px-6 py-4"
                  width="w-auto"
                />
              </Element>

              {/* Login Link */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <Text
                  text={loginText}
                  tagName="p"
                  fontSize="text-base"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-left"
                />
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

LearningPlatformHero.craft = {
  displayName: "Learning Platform Hero",
  props: {
    tagline: "A social media for learners",
    mainTitle: "Connect & learn from the experts",
    description: "Grow your career fast with right mentor.",
    primaryButtonText: "Join for free",
    primaryButtonLink: "#",
    loginText: "Already joined us? Log in",
    loginLink: "#",
    heroImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/hero/1/hero-img.png",
    logoImage:
      "https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
