import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Carousel } from "@/components/blocks/Basic/Carousel";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MiniMaxSlide {
  title: string;
  subtitle: string;
  backgroundColor: string;
}

interface MiniMaxHero1Props extends SectionProps {
  // MiniMax Hero specific props
  slides?: MiniMaxSlide[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  showArrows?: boolean;
  showDots?: boolean;
}

export function MiniMaxHero1({
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
  autoplay = true,
  autoplayDelay = 5000,
  showArrows = true,
  showDots = true,
  ...props
}: MiniMaxHero1Props) {
  // Set section defaults for MiniMax hero carousel
  const heroProps = {
    backgroundColor: "transparent",
    padding: "0",
    minHeight: "600px",
    hasContentWrapper: false,
    ...props,
  };

  // Prepare slide backgrounds for the carousel
  const slideBackgrounds = slides.map((slide) => ({
    backgroundType: "gradient" as const,
    backgroundColor: slide.backgroundColor,
    backgroundImage: "",
    backgroundSize: "cover" as const,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat" as const,
    gradientType: "linear" as const,
    gradientDirection: "135deg",
    gradientFrom: slide.backgroundColor,
    gradientTo:
      slide.backgroundColor === "#ff4757"
        ? "#ff6b6b"
        : slide.backgroundColor === "#ffa726"
        ? "#ffcc02"
        : "#1976d2",
    gradientVia: "",
  }));

  return (
    <Section {...heroProps}>
      <Element
        id="minimaxHeroCarousel"
        is={Carousel}
        autoplay={autoplay}
        autoplayDelay={autoplayDelay}
        infinite={true}
        showDots={showDots}
        showArrows={showArrows}
        pauseOnHover={true}
        transition="slide"
        transitionDuration={800}
        slidesToShow={1}
        slidesToScroll={1}
        height="600px"
        backgroundColor="transparent"
        backgroundType="color"
        borderRadius="0px"
        margin="0"
        padding="0"
        dotColor="rgba(255, 255, 255, 0.4)"
        activeDotColor="#ffffff"
        arrowColor="#ffffff"
        arrowBackgroundColor="rgba(255, 255, 255, 0.2)"
        slideBackgrounds={slideBackgrounds}
        canvas
      >
        {slides.map((slide, index) => (
          <Element
            key={`slide-${index}`}
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
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
                margin="0 auto -350px"
                canvas={false}
              />

              {/* Medium Background Circle */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.05)"
                width="300px"
                height="300px"
                borderRadius="50%"
                margin="0 auto -250px"
                canvas={false}
              />

              {/* Small Background Circle */}
              <Element
                is={Box}
                backgroundColor="rgba(255, 255, 255, 0.08)"
                width="200px"
                height="200px"
                borderRadius="50%"
                margin="0 auto 50px"
                canvas={false}
              />
            </Element>

            {/* Slide Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="40px 20px"
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
                  text={slide.title}
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
                  text={slide.subtitle}
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

              {/* Decorative Elements */}
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
        ))}
      </Element>
    </Section>
  );
}

MiniMaxHero1.craft = {
  displayName: "MiniMax Hero Carousel",
  props: {
    // Section props
    backgroundColor: "transparent",
    padding: "0",
    minHeight: "600px",
    hasContentWrapper: false,
    // MiniMax Hero specific props
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
    autoplay: true,
    autoplayDelay: 5000,
    showArrows: true,
    showDots: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
