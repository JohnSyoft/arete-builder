import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface CarouselSlide {
  title: string;
  subtitle: string;
  backgroundColor?: string;
}

interface MiniMaxCarousel1Props extends SectionProps {
  // Carousel specific props
  slides?: CarouselSlide[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showNavigation?: boolean;
  showDots?: boolean;
}

export function MiniMaxCarousel1({
  slides = [
    {
      title: "MiniMax M1",
      subtitle:
        "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
      backgroundColor: "#ff4757",
    },
    {
      title: "MiniMax Speech 2.5",
      subtitle:
        "Enhanced multilingual expressiveness with exceptional voice cloning fidelity.",
      backgroundColor: "#ffa726",
    },
    {
      title: "MiniMax Video 1.0",
      subtitle:
        "Revolutionary AI video generation with unprecedented quality and control.",
      backgroundColor: "#42a5f5",
    },
  ],
  primaryButtonText = "Learn more",
  secondaryButtonText = "Try Now",
  autoPlay = true,
  autoPlayInterval = 5000,
  showNavigation = true,
  showDots = true,
  ...props
}: MiniMaxCarousel1Props) {
  // Set section defaults for MiniMax carousel
  const carouselProps = {
    backgroundColor: slides[0]?.backgroundColor || "#ff4757",
    padding: "0",
    minHeight: "500px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...carouselProps}>
      <Element
        id="minimaxCarouselContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Carousel Container */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Background Geometric Elements */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas
          >
            {/* Large Background Circle */}
            <Element
              is={Box}
              backgroundColor="rgba(255, 255, 255, 0.1)"
              width="400px"
              height="400px"
              borderRadius="50%"
              margin="0 auto"
              canvas={false}
            />

            {/* Medium Background Circle */}
            <Element
              is={Box}
              backgroundColor="rgba(255, 255, 255, 0.05)"
              width="300px"
              height="300px"
              borderRadius="50%"
              margin="-350px auto 0"
              canvas={false}
            />

            {/* Small Background Circle */}
            <Element
              is={Box}
              backgroundColor="rgba(255, 255, 255, 0.08)"
              width="200px"
              height="200px"
              borderRadius="50%"
              margin="-250px auto 0"
              canvas={false}
            />
          </Element>

          {/* Main Content Container */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="40px 0"
            margin="-200px 0 0 0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            canvas
          >
            {/* Current Slide Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              alignItems="center"
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
                  text={slides[0]?.title || "MiniMax M1"}
                  tagName="h1"
                  fontSize="text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                  fontWeight="font-black"
                  color="text-white"
                  textAlign="text-center"
                  margin="mb-6"
                  lineHeight="leading-none"
                  letterSpacing="tracking-tight"
                />
              </Element>

              {/* Subtitle */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 40px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={
                    slides[0]?.subtitle ||
                    "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance."
                  }
                  tagName="p"
                  fontSize="text-lg sm:text-xl md:text-2xl"
                  fontWeight="font-medium"
                  color="text-white"
                  textAlign="text-center"
                  lineHeight="leading-relaxed"
                />
              </Element>

              {/* Buttons Container */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="gap-4"
                wrap="wrap"
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
                  <CraftButton
                    text={primaryButtonText}
                    size="lg"
                    variant="secondary"
                    backgroundColor="#ffffff"
                    textColor="#333333"
                    borderRadius="50px"
                    padding="16px 32px"
                  />
                </Element>

                {/* Secondary Button */}
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
                    size="lg"
                    variant="outline"
                    backgroundColor="transparent"
                    textColor="#ffffff"
                    borderRadius="50px"
                    padding="16px 32px"
                  />
                </Element>
              </Element>
            </Element>
          </Element>

          {/* Navigation Controls */}
          {showNavigation && (
            <>
              {/* Left Arrow */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.2)"
                width="50px"
                height="50px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                margin="0"
                canvas={false}
              >
                <CraftText
                  text="‹"
                  tagName="span"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                />
              </Element>

              {/* Right Arrow */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.2)"
                width="50px"
                height="50px"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                margin="0"
                canvas={false}
              >
                <CraftText
                  text="›"
                  tagName="span"
                  fontSize="text-2xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                />
              </Element>
            </>
          )}

          {/* Carousel Dots */}
          {showDots && (
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              gap="gap-3"
              margin="mt-12"
            >
              {/* Active Dot */}
              <Element
                is={Box}
                backgroundColor="#ffffff"
                width="12px"
                height="12px"
                borderRadius="50%"
                canvas={false}
              />

              {/* Inactive Dots */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.4)"
                width="8px"
                height="8px"
                borderRadius="50%"
                canvas={false}
              />

              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.4)"
                width="8px"
                height="8px"
                borderRadius="50%"
                canvas={false}
              />

              {slides.length > 3 && (
                <Element
                  is={Box}
                  backgroundColor="rgba(255, 255, 255, 0.4)"
                  width="8px"
                  height="8px"
                  borderRadius="50%"
                  canvas={false}
                />
              )}
            </Element>
          )}

          {/* Additional Decorative Elements */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            gap="gap-6"
            margin="mt-8"
          >
            {/* Left Line */}
            <Element
              is={Box}
              backgroundColor="rgba(255, 255, 255, 0.2)"
              width="80px"
              height="2px"
              borderRadius="2px"
              canvas={false}
            />

            {/* Center Dot */}
            <Element
              is={Box}
              backgroundColor="#f8b500"
              width="10px"
              height="10px"
              borderRadius="50%"
              canvas={false}
            />

            {/* Right Line */}
            <Element
              is={Box}
              backgroundColor="rgba(255, 255, 255, 0.2)"
              width="60px"
              height="2px"
              borderRadius="2px"
              canvas={false}
            />
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

MiniMaxCarousel1.craft = {
  displayName: "MiniMax Carousel 1",
  props: {
    // Section props
    backgroundColor: "#ff4757",
    padding: "0",
    minHeight: "500px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-20 sm:px-6 sm:py-24 md:px-8 md:py-28 lg:px-8 lg:py-32",
    // Carousel specific props
    slides: [
      {
        title: "MiniMax M1",
        subtitle:
          "Global Leading: 80K CoT Length x 1M Token Input. Top-Tier Model Performance.",
        backgroundColor: "#ff4757",
      },
      {
        title: "MiniMax Speech 2.5",
        subtitle:
          "Enhanced multilingual expressiveness with exceptional voice cloning fidelity.",
        backgroundColor: "#ffa726",
      },
      {
        title: "MiniMax Video 1.0",
        subtitle:
          "Revolutionary AI video generation with unprecedented quality and control.",
        backgroundColor: "#42a5f5",
      },
    ],
    primaryButtonText: "Learn more",
    secondaryButtonText: "Try Now",
    autoPlay: true,
    autoPlayInterval: 5000,
    showNavigation: true,
    showDots: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
