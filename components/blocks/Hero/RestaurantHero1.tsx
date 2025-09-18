import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface RestaurantHero1Props extends SectionProps {
  // Hero specific props
  subtitle?: string;
  title?: string;
  titleHighlight?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  patternImage?: string;
  decorativeImage?: string;
  // Settings
  showPattern?: boolean;
  showDecorative?: boolean;
  showOverlay?: boolean;
  overlayOpacity?: number;
  fullHeight?: boolean;
  textAlign?: "left" | "center" | "right";
}

export function RestaurantHero1({
  subtitle = "Experience the taste of italy",
  title = "Great dining",
  titleHighlight = "experience",
  buttonText = "Authentic experience",
  buttonLink = "/about",
  backgroundImage = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920&h=1303&fit=crop",
  patternImage = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&h=700&fit=crop",
  decorativeImage = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=180&h=180&fit=crop",
  showPattern = true,
  showDecorative = true,
  showOverlay = true,
  overlayOpacity = 0.6,
  fullHeight = true,
  textAlign = "center",
  ...props
}: RestaurantHero1Props) {
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
        id="restaurantHeroContent"
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
              alt="Restaurant Interior"
              width="w-full"
              height="h-full"
              objectFit="object-cover"
              margin=""
              padding=""
            />
          </Element>

          {/* Overlay */}
          {showOverlay && (
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
          )}

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
              margin={`text-${textAlign} h-full px-8 py-16`}
            >
              {/* Pattern Background */}
              {showPattern && (
                <Element
                  is={Box}
                  backgroundColor="bg-amber-600"
                  padding="0"
                  margin=""
                  display="block"
                  position="absolute"
                  top="top-1/2"
                  left="left-1/2"
                  width="w-96 lg:w-80 sm:w-64 xs:w-80"
                  height="h-96 lg:h-80 sm:h-64 xs:h-80"
                  borderRadius="rounded-full"
                  className="transform -translate-x-1/2 -translate-y-1/2 opacity-20"
                  canvas={false}
                >
                  <CraftImage
                    src={patternImage}
                    alt="Pattern"
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-full"
                    margin=""
                    padding=""
                  />
                </Element>
              )}

              {/* Content Container */}
              <Element
                is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  position="relative"
                  zIndex="z-10"
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
                      fontSize="text-lg sm:text-xl md:text-2xl"
                      fontWeight="font-normal"
                      color="text-black"
                      textAlign={textAlign}
                      className="uppercase tracking-wider"
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
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="row"
                      justifyContent={textAlign === "center" ? "center" : textAlign === "left" ? "start" : "end"}
                      alignItems="center"
                      gap="gap-4"
                      margin=""
                      wrap="wrap"
                    >
                      <CraftText
                        text={title}
                        tagName="span"
                        fontSize="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                        fontWeight="font-bold"
                        color="text-white"
                        textAlign={textAlign}
                        lineHeight="leading-none"
                        className="text-outline text-outline-width-1px text-outline-color-white text-outline-base-color-background"
                      />
                      
                      <CraftText
                        text={titleHighlight}
                        tagName="span"
                        fontSize="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                        fontWeight="font-bold"
                        color="text-white"
                        textAlign={textAlign}
                        lineHeight="leading-none"
                        className="tracking-tight"
                      />
                    </Element>
                  </Element>

                  {/* CTA Button */}
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
                      size="xl"
                      backgroundColor="#000000"
                      textColor="#ffffff"
                      borderRadius="rounded-lg"
                      padding="px-12 py-6"
                      width="w-auto"
                      className="hover:scale-105 transition-all duration-300 shadow-2xl"
                    />
                  </Element>
                </Element>
              </Element>

              {/* Decorative Image */}
              {showDecorative && (
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  position="absolute"
                  bottom="bottom-12"
                  right="right-12"
                  className="hidden sm:block animation-float"
                  canvas={false}
                >
                  <CraftImage
                    src={decorativeImage}
                    alt="Decorative"
                    width="w-32 sm:w-40 lg:w-44"
                    height="h-32 sm:h-40 lg:h-44"
                    objectFit="object-cover"
                    borderRadius="rounded-2xl"
                    margin=""
                    padding=""
                  />
                </Element>
              )}
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

RestaurantHero1.craft = {
  displayName: "Restaurant Hero 1",
  props: {
    // Section props
    backgroundColor: "#1f2937",
    padding: "py-0",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Hero specific props
    subtitle: "Experience the taste of italy",
    title: "Great dining",
    titleHighlight: "experience",
    buttonText: "Authentic experience",
    buttonLink: "/about",
    showPattern: true,
    showDecorative: true,
    showOverlay: true,
    overlayOpacity: 0.6,
    fullHeight: true,
    textAlign: "center",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
