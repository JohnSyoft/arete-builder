import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface CosmeticHero1Props extends SectionProps {
  // Brand and main content
  brandName?: string;
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // Image
  heroImage?: string;

  // Rating
  rating?: string;
  reviewCount?: string;
  ratingText?: string;

  // Colors and styling
  primaryColor?: string;
  accentColor?: string;
  textColor?: string;
  buttonColor?: string;
}

export function CosmeticHero1({
  brandName = "WELCOME TO GLOWIX",
  mainTitle = "DISCOVER YOUR BEST SELF WITH US!",
  description = "Unlock your full potential with personalized coaching, expert guidance transformative wellness strategies. Together, we'll help you build a healthier, happier, and more balanced life.",
  primaryButtonText = "Get Started",
  secondaryButtonText = "Watch Video",
  heroImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/hero-img.png",
  rating = "4.5",
  reviewCount = "1000+",
  ratingText = "review",
  primaryColor = "#481E0B",
  accentColor = "#E67E22",
  textColor = "white",
  buttonColor = "#E67E22",
  ...props
}: CosmeticHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Set section defaults for cosmetic hero
  const heroProps = {
    backgroundColor: primaryColor,
    padding: "m-4",
    minHeight: "min-h-[600px]",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
      width:"fit-content",
      margin:"m-6",
      backgroundImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/hero-bg-shape.svg",
    ...props,
    borderRadius: "16px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  return (
    <div
      ref={(ref) => {
        if (ref) {
          connect(drag(ref));
        }
      }}
      className={`relative ${selected ? "ring-2 ring-blue-500" : ""} ${
        hovered ? "ring-1 ring-blue-300" : ""
      }`}
    >
      <Section {...heroProps}>
          {/* Background Pattern */}
          {/* <div
          className="absolute inset-0 opacity-10"
          style={{
          
          }}
        /> */}

          {/* Decorative Elements */}
          <div className="absolute top-20 right-1/4 text-orange-400 opacity-70">
            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
          </div>
          <div className="absolute top-1/3 right-20 text-white opacity-50">
            <div className="w-6 h-6 rotate-45">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
          <div className="absolute bottom-1/3 left-32 text-white opacity-30">
            <div className="w-4 h-4 rotate-12">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
          <div className="absolute top-3/4 right-1/3 text-orange-400 opacity-60">
            <div className="w-8 h-8">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>

          <Element
            id="cosmeticHeroContent"
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas
          >
            {/* Main Hero Grid */}
            <Element
              is={Grid}
              canvas
              columns={2}
              autoFit={false}
              minColumnWidth="400px"
              gap="48px"
              autoRows="auto"
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
                canvas
              >
                {/* Brand Name */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin="mb-8"
                  wrap="nowrap"
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-orange-400"
                      >
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 13L13.5 7L10.5 13L9 7V9H3V11H21V9ZM21 3H3V5H21V3Z" />
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
                    <CraftText
                      text={brandName}
                      tagName="p"
                      fontSize="text-sm"
                      fontWeight="font-semibold"
                      color={`text-white`}
                      textAlign="text-left"
                      letterSpacing="tracking-[0.2em]"
                    />
                  </Element>
                </Element>

                {/* Main Title */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 32px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={mainTitle}
                    tagName="h1"
                    fontSize="text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                    fontWeight="font-bold"
                    color={`text-white`}
                    textAlign="text-left"
                    margin="0"
                    lineHeight="leading-[0.9]"
                  />
                </Element>

                {/* Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 48px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={description}
                    tagName="p"
                    fontSize="text-lg md:text-xl"
                    fontWeight="font-normal"
                    color={`text-white`}
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    margin="0"
                  />
                </Element>

                {/* Action Buttons */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-8"
                  margin="mb-12"
                  wrap="wrap"
                >
                  {/* Primary Button with Arrow */}
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin="0"
                    wrap="nowrap"
                  >
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
                        backgroundColor={buttonColor}
                        textColor="#ffffff"
                        borderRadius="9999px"
                        padding="px-4 py-2"
                        width="w-auto"
                      />
                    </Element>

                    <Element
                      is={Box}
                      backgroundColor="rgba(255, 255, 255, 0.15)"
                      padding="14px"
                      margin="0"
                      borderRadius="50%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      canvas={false}
                    >
                      <div className="w-5 h-5 text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                        </svg>
                      </div>
                    </Element>
                  </Element>

                  {/* Secondary Button with Play Icon */}
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-4"
                    margin="0"
                    wrap="nowrap"
                  >
                    <Element
                      is={Box}
                      backgroundColor="rgba(255, 255, 255, 0.15)"
                      padding="14px"
                      margin="0"
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
                      <CraftText
                        text={secondaryButtonText}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-semibold"
                        color={`text-white`}
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>
                </Element>

                {/* Rating Section */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-4"
                  margin="0"
                  wrap="wrap"
                >
                  {/* Google Logo */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <div className="w-6 h-6 text-white">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    </div>
                  </Element>

                  {/* Rating Display */}
                  <Element
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-2"
                    margin="0"
                    wrap="nowrap"
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={rating}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-bold"
                        color={`text-white`}
                        textAlign="text-left"
                      />
                    </Element>

                    {/* Star Icons */}
                    {[1, 2, 3, 4, 5].map((star, index) => (
                      <Element
                        key={`star-${index}`}
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <div className="w-4 h-4">
                          <svg
                            viewBox="0 0 24 24"
                            fill={
                              index < Math.floor(parseFloat(rating))
                                ? "#FFD700"
                                : "rgba(255,255,255,0.3)"
                            }
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                      </Element>
                    ))}

                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={`(${reviewCount} ${ratingText})`}
                        tagName="span"
                        fontSize="text-sm"
                        fontWeight="font-normal"
                        color={`text-white`}
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
                canvas
              >
                {/* Main Image Container */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="100%"
                  height="700px"
                  canvas
                >
                  <CraftImage
                    src={heroImage}
                    alt="Cosmetic Treatment - Professional aesthetic consultation"
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-3xl"
                    margin=""
                    padding=""
                  />
                </Element>
              </Element>
            </Element>
          </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Cosmetic Hero
        </div>
      )}
    </div>
  );
}

CosmeticHero1.craft = {
  displayName: "Cosmetic Hero 1",
  props: {
    // Section props
    backgroundColor: "#481E0B",
    padding: "p-0",
    minHeight: "min-h-[600px]",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    borderRadius: "rounded-[20px]",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    backgroundImage: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/hero-bg-shape.svg",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    // Cosmetic Hero specific props
    brandName: "WELCOME TO GLOWIX",
    mainTitle: "DISCOVER YOUR BEST SELF WITH US!",
    description:
      "Unlock your full potential with personalized coaching, expert guidance transformative wellness strategies. Together, we'll help you build a healthier, happier, and more balanced life.",
    primaryButtonText: "Get Started",
    secondaryButtonText: "Watch Video",
    heroImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/hero-img.png",
    rating: "4.5",
    reviewCount: "1000+",
    ratingText: "review",
    primaryColor: "#481E0B",
    accentColor: "#E67E22",
    textColor: "white",
    buttonColor: "#E67E22",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
