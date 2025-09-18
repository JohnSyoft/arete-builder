import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface HeroSlide {
  id: string;
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  highlightText?: string;
  highlightIcon?: string;
}

interface HospitalityHero2Props extends SectionProps {
  // Hero specific props
  slides?: HeroSlide[];
  currentSlide?: number;
  autoPlay?: boolean;
  autoPlayDelay?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
  // Settings
  fullHeight?: boolean;
  overlayOpacity?: number;
  textAlign?: "left" | "center" | "right";
  buttonVariant?: "primary" | "secondary" | "outline";
}

export function HospitalityHero2({
  slides = [
    {
      id: "slide-1",
      backgroundImage: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&h=1100&fit=crop",
      title: "Holiday",
      subtitle: "Luxury space that you can afford",
      description: "Perfect place to relax and enjoy your rest.",
      buttonText: "Book your stay",
      buttonLink: "/booking",
      highlightText: "enjoy your rest",
      highlightIcon: "✨"
    },
    {
      id: "slide-2",
      backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&h=1100&fit=crop",
      title: "Luxury",
      subtitle: "Experience unparalleled comfort",
      description: "Discover our world-class amenities and services.",
      buttonText: "Explore Now",
      buttonLink: "/amenities",
      highlightText: "world-class amenities",
      highlightIcon: "🏆"
    },
    {
      id: "slide-3",
      backgroundImage: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&h=1100&fit=crop",
      title: "Relaxation",
      subtitle: "Your perfect getaway destination",
      description: "Unwind in our serene and beautiful surroundings.",
      buttonText: "View Rooms",
      buttonLink: "/rooms",
      highlightText: "serene surroundings",
      highlightIcon: "🌴"
    }
  ],
  currentSlide = 0,
  autoPlay = true,
  autoPlayDelay = 5000,
  showIndicators = true,
  showArrows = true,
  fullHeight = true,
  overlayOpacity = 0.6,
  textAlign = "center",
  buttonVariant = "primary",
  ...props
}: HospitalityHero2Props) {
  // Set section defaults for hero
  const heroProps = {
    backgroundColor: "#000000",
    padding: fullHeight ? "py-0" : "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  const currentSlideData = slides[currentSlide] || slides[0];

  return (
    <Section {...heroProps}>
      <Element
        id="heroContent"
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
              src={currentSlideData.backgroundImage}
              alt={currentSlideData.title}
              width="w-full"
              height="h-full"
              objectFit="object-cover"
              margin=""
              padding=""
            />
          </Element>

          {/* Overlay */}
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
            className={`opacity-${Math.round(overlayOpacity * 100)}`}
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
              flexDirection="column"
              justifyContent="center"
              alignItems={textAlign === "center" ? "center" : textAlign === "left" ? "start" : "end"}
              gap="gap-8"
              margin="text-center h-full px-8 py-16"
            >
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
                  text={currentSlideData.subtitle}
                  tagName="h5"
                  fontSize="text-lg sm:text-xl"
                  fontWeight="font-normal"
                  color="text-white"
                  textAlign={textAlign}
                  className="text-shadow-lg"
                />
              </Element>

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
                  text={currentSlideData.title}
                  tagName="h1"
                  fontSize="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign={textAlign}
                  lineHeight="leading-none"
                  className="text-shadow-2xl tracking-tight"
                />
              </Element>

              {/* Description with Highlight */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftText
                  text={currentSlideData.description}
                  tagName="p"
                  fontSize="text-lg sm:text-xl md:text-2xl"
                  fontWeight="font-medium"
                  color="text-white"
                  textAlign={textAlign}
                  className="text-shadow-lg max-w-4xl"
                >
                  {currentSlideData.highlightText && (
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="inline"
                      canvas={false}
                    >
                      <CraftText
                        text={currentSlideData.highlightText}
                        tagName="span"
                        fontSize="text-lg sm:text-xl md:text-2xl"
                        fontWeight="font-bold"
                        color="text-amber-300"
                        textAlign={textAlign}
                        className="relative"
                      >
                        {currentSlideData.highlightIcon && (
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="inline"
                            canvas={false}
                          >
                            <CraftText
                              text={currentSlideData.highlightIcon}
                              tagName="span"
                              fontSize="text-lg sm:text-xl md:text-2xl"
                              textAlign="text-center"
                              className="ml-2"
                            />
                          </Element>
                        )}
                      </CraftText>
                    </Element>
                  )}
                </CraftText>
              </Element>

              {/* Call to Action Button */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <CraftButton
                  text={currentSlideData.buttonText}
                  size="xl"
                  backgroundColor={buttonVariant === "primary" ? "#ffffff" : buttonVariant === "secondary" ? "#d97706" : "transparent"}
                  textColor={buttonVariant === "primary" ? "#1f2937" : buttonVariant === "secondary" ? "#ffffff" : "#ffffff"}
                  borderColor={buttonVariant === "outline" ? "#ffffff" : ""}
                  borderRadius="rounded-full"
                  padding="px-12 py-6"
                  width="w-auto"
                  className="hover:scale-105 transition-all duration-300 shadow-2xl"
                />
              </Element>
            </Element>
          </Element>

          {/* Navigation Arrows */}
          {showArrows && slides.length > 1 && (
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              top="top-1/2"
              left="left-4"
              canvas={false}
            >
              <CraftButton
                text="‹"
                size="lg"
                backgroundColor="bg-white/20"
                textColor="text-white"
                borderRadius="rounded-full"
                padding="p-4"
                width="w-12"
                height="h-12"
                className="hover:bg-white/30 transition-all duration-300"
              />
            </Element>
          )}

          {showArrows && slides.length > 1 && (
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              top="top-1/2"
              right="right-4"
              canvas={false}
            >
              <CraftButton
                text="›"
                size="lg"
                backgroundColor="bg-white/20"
                textColor="text-white"
                borderRadius="rounded-full"
                padding="p-4"
                width="w-12"
                height="h-12"
                className="hover:bg-white/30 transition-all duration-300"
              />
            </Element>
          )}

          {/* Slide Indicators */}
          {showIndicators && slides.length > 1 && (
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              bottom="bottom-8"
              left="left-1/2"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="gap-3"
                margin=""
              >
                {slides.map((_, index) => (
                  <Element
                    key={index}
                    is={Box}
                    backgroundColor={index === currentSlide ? "bg-white" : "bg-white/50"}
                    padding="0"
                    margin=""
                    display="block"
                    width="w-3"
                    height="h-3"
                    borderRadius="rounded-full"
                    className="hover:bg-white transition-all duration-300 cursor-pointer"
                    canvas={false}
                  />
                ))}
              </Element>
            </Element>
          )}
        </Element>
      </Element>
    </Section>
  );
}

HospitalityHero2.craft = {
  displayName: "Hospitality Hero 2",
  props: {
    // Section props
    backgroundColor: "#000000",
    padding: "py-0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Hero specific props
    currentSlide: 0,
    autoPlay: true,
    autoPlayDelay: 5000,
    showIndicators: true,
    showArrows: true,
    fullHeight: true,
    overlayOpacity: 0.6,
    textAlign: "center",
    buttonVariant: "primary",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
