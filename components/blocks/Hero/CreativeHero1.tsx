import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface CreativeHero1Props extends SectionProps {
  // Main content
  tagline?: string;
  mainTitle?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  
  // Creative showcase
  artworkImage1?: string;
  artworkImage2?: string;
  artworkImage3?: string;
  artworkImage4?: string;
  
  // Artist info
  artistName?: string;
  portfolioCount?: string;
  clientsCount?: string;
  
  // Awards/Recognition
  recognition1?: string;
  recognition2?: string;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
}

export function CreativeHero1({
  tagline = "CREATIVE STUDIO",
  mainTitle = "Where Art Meets",
  subtitle = "Innovation",
  description = "We transform bold ideas into stunning visual experiences. Our creative studio specializes in branding, digital art, and immersive design that captivates and inspires.",
  primaryButtonText = "View Portfolio",
  secondaryButtonText = "Let's Collaborate",
  artworkImage1 = "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=600&fit=crop",
  artworkImage2 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=400&fit=crop",
  artworkImage3 = "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=350&h=500&fit=crop",
  artworkImage4 = "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=250&h=350&fit=crop",
  artistName = "Alex Johnson",
  portfolioCount = "200+",
  clientsCount = "150+",
  recognition1 = "Design Award 2024",
  recognition2 = "Featured in Behance",
  primaryColor = "#1a1a1a",
  accentColor = "#ff6b6b",
  backgroundColor = "#fafafa",
  ...props
}: CreativeHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

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
      <Element
        id="creativeHero1-section"
        is={Section}
        canvas
        backgroundColor={backgroundColor}
        padding="0px"
        minHeight="800px"
        {...props}
      >
        {/* Background Art Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Geometric Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 transform rotate-45"></div>
          <div className="absolute top-1/3 right-20 w-16 h-16 bg-blue-500 opacity-15"></div>
          <div className="absolute bottom-40 left-1/4 w-12 h-32 bg-pink-400 opacity-10 transform -rotate-12"></div>
          
          {/* Paint Splashes */}
          <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 filter blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-gradient-to-tr from-orange-400 to-red-400 rounded-full opacity-8 filter blur-lg"></div>
        </div>

        <Element
          id="creativeHero1-container"
          is={Box}
          padding="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32"
          maxWidth="7xl"
          margin="0 auto"
          position="relative"
        >
          <Element
            id="creativeHero1-grid"
            is={Flex}
            direction="column"
            gap="48px"
            lg={{ direction: "row", alignItems: "center" }}
          >
            {/* Left Content */}
            <Element
              id="creativeHero1-content"
              is={Box}
              flex="1"
              maxWidth="600px"
            >
              {/* Recognition Badges */}
              <Element
                id="creativeHero1-badges"
                is={Flex}
                gap="16px"
                margin="0 0 24px 0"
                flexWrap="wrap"
              >
                <Element
                  id="creativeHero1-badge1"
                  is={Box}
                  backgroundColor="white"
                  padding="6px 12px"
                  borderRadius="15px"
                  shadow="sm"
                  border="1px solid #f1f1f1"
                >
                  <Element
                    id="creativeHero1-badge1Text"
                    is={CraftText}
                    text={`🏆 ${recognition1}`}
                    fontSize="xs"
                    fontWeight="medium"
                    color={primaryColor}
                  />
                </Element>
                
                <Element
                  id="creativeHero1-badge2"
                  is={Box}
                  backgroundColor="white"
                  padding="6px 12px"
                  borderRadius="15px"
                  shadow="sm"
                  border="1px solid #f1f1f1"
                >
                  <Element
                    id="creativeHero1-badge2Text"
                    is={CraftText}
                    text={`✨ ${recognition2}`}
                    fontSize="xs"
                    fontWeight="medium"
                    color={primaryColor}
                  />
                </Element>
              </Element>

              {/* Tagline */}
              <Element
                id="creativeHero1-tagline"
                is={CraftText}
                text={tagline}
                fontSize="sm"
                fontWeight="bold"
                color={accentColor}
                letterSpacing="widest"
                textTransform="uppercase"
                margin="0 0 16px 0"
              />

              {/* Main Title */}
              <Element
                id="creativeHero1-titleContainer"
                is={Box}
                margin="0 0 24px 0"
              >
                <Element
                  id="creativeHero1-titleMain"
                  is={CraftText}
                  text={mainTitle}
                  fontSize="4xl"
                  sm={{ fontSize: "5xl" }}
                  lg={{ fontSize: "6xl" }}
                  fontWeight="bold"
                  color={primaryColor}
                  lineHeight="tight"
                  margin="0 0 8px 0"
                />
                <Element
                  id="creativeHero1-subtitle"
                  is={CraftText}
                  text={subtitle}
                  fontSize="4xl"
                  sm={{ fontSize: "5xl" }}
                  lg={{ fontSize: "6xl" }}
                  fontWeight="bold"
                  color={accentColor}
                  lineHeight="tight"
                  fontStyle="italic"
                  textDecoration="underline"
                  textDecorationColor={accentColor}
                  textDecorationThickness="4px"
                  textUnderlineOffset="8px"
                />
              </Element>

              {/* Artist Info */}
              <Element
                id="creativeHero1-artistInfo"
                is={Flex}
                alignItems="center"
                gap="16px"
                margin="0 0 24px 0"
              >
                <Element
                  id="creativeHero1-artistAvatar"
                  is={Box}
                  width="48px"
                  height="48px"
                  borderRadius="50%"
                  backgroundColor={accentColor}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Element
                    id="creativeHero1-artistInitial"
                    is={CraftText}
                    text="AJ"
                    fontSize="lg"
                    fontWeight="bold"
                    color="white"
                  />
                </Element>
                <Element
                  id="creativeHero1-artistDetails"
                  is={Box}
                >
                  <Element
                    id="creativeHero1-artistName"
                    is={CraftText}
                    text={artistName}
                    fontSize="base"
                    fontWeight="semibold"
                    color={primaryColor}
                  />
                  <Element
                    id="creativeHero1-artistTitle"
                    is={CraftText}
                    text="Creative Director"
                    fontSize="sm"
                    color="#666"
                  />
                </Element>
              </Element>

              {/* Description */}
              <Element
                id="creativeHero1-description"
                is={CraftText}
                text={description}
                fontSize="lg"
                color="#555"
                lineHeight="relaxed"
                margin="0 0 32px 0"
                maxWidth="500px"
              />

              {/* Stats */}
              <Element
                id="creativeHero1-stats"
                is={Flex}
                gap="32px"
                margin="0 0 40px 0"
              >
                <Element
                  id="creativeHero1-portfolioStat"
                  is={Box}
                >
                  <Element
                    id="creativeHero1-portfolioNumber"
                    is={CraftText}
                    text={portfolioCount}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="creativeHero1-portfolioLabel"
                    is={CraftText}
                    text="Artworks"
                    fontSize="sm"
                    color="#888"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element
                  id="creativeHero1-clientsStat"
                  is={Box}
                >
                  <Element
                    id="creativeHero1-clientsNumber"
                    is={CraftText}
                    text={clientsCount}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="creativeHero1-clientsLabel"
                    is={CraftText}
                    text="Happy Clients"
                    fontSize="sm"
                    color="#888"
                    margin="4px 0 0 0"
                  />
                </Element>
              </Element>

              {/* Buttons */}
              <Element
                id="creativeHero1-buttons"
                is={Flex}
                direction="column"
                gap="16px"
                sm={{ direction: "row" }}
              >
                <Element
                  id="creativeHero1-primaryButton"
                  is={CraftButton}
                  text={primaryButtonText}
                  backgroundColor={accentColor}
                  color="white"
                  padding="14px 32px"
                  borderRadius="25px"
                  fontSize="base"
                  fontWeight="semibold"
                  shadow="lg"
                  _hover={{ backgroundColor: "#ff5252", transform: "translateY(-2px)" }}
                  transition="all 0.3s"
                />
                
                <Element
                  id="creativeHero1-secondaryButton"
                  is={CraftButton}
                  text={secondaryButtonText}
                  backgroundColor="transparent"
                  color={primaryColor}
                  border={`2px solid ${primaryColor}`}
                  padding="12px 32px"
                  borderRadius="25px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: primaryColor, color: "white" }}
                  transition="all 0.3s"
                />
              </Element>
            </Element>

            {/* Right Artwork Gallery */}
            <Element
              id="creativeHero1-galleryContainer"
              is={Box}
              flex="1"
              position="relative"
              height="600px"
            >
              {/* Artwork 1 - Main piece */}
              <Element
                id="creativeHero1-artwork1"
                is={Box}
                position="absolute"
                top="0"
                right="20px"
                width="280px"
                height="380px"
                borderRadius="20px"
                overflow="hidden"
                shadow="2xl"
                transform="rotate(2deg)"
                _hover={{ transform: "rotate(0deg) scale(1.02)" }}
                transition="all 0.4s"
                zIndex="3"
                backgroundColor="white"
                padding="12px"
              >
                <Element
                  id="creativeHero1-artwork1Image"
                  is={CraftImage}
                  src={artworkImage1}
                  alt="Featured Artwork"
                  objectFit="cover"
                  width="100%"
                  height="300px"
                  borderRadius="12px"
                />
                <Element
                  id="creativeHero1-artwork1Title"
                  is={CraftText}
                  text="Digital Dreams"
                  fontSize="sm"
                  fontWeight="semibold"
                  color={primaryColor}
                  margin="12px 0 4px 0"
                  textAlign="center"
                />
                <Element
                  id="creativeHero1-artwork1Type"
                  is={CraftText}
                  text="Digital Art"
                  fontSize="xs"
                  color="#888"
                  textAlign="center"
                />
              </Element>

              {/* Artwork 2 */}
              <Element
                id="creativeHero1-artwork2"
                is={Box}
                position="absolute"
                top="80px"
                left="0"
                width="200px"
                height="280px"
                borderRadius="16px"
                overflow="hidden"
                shadow="xl"
                transform="rotate(-6deg)"
                _hover={{ transform: "rotate(-2deg) scale(1.05)" }}
                transition="all 0.4s"
                zIndex="2"
                backgroundColor="white"
                padding="8px"
              >
                <Element
                  id="creativeHero1-artwork2Image"
                  is={CraftImage}
                  src={artworkImage2}
                  alt="Creative Work 2"
                  objectFit="cover"
                  width="100%"
                  height="220px"
                  borderRadius="8px"
                />
                <Element
                  id="creativeHero1-artwork2Title"
                  is={CraftText}
                  text="Abstract Flow"
                  fontSize="xs"
                  fontWeight="medium"
                  color={primaryColor}
                  margin="8px 0 0 0"
                  textAlign="center"
                />
              </Element>

              {/* Artwork 3 */}
              <Element
                id="creativeHero1-artwork3"
                is={Box}
                position="absolute"
                bottom="120px"
                left="60px"
                width="180px"
                height="240px"
                borderRadius="16px"
                overflow="hidden"
                shadow="lg"
                transform="rotate(8deg)"
                _hover={{ transform: "rotate(4deg) scale(1.05)" }}
                transition="all 0.4s"
                zIndex="1"
                backgroundColor="white"
                padding="8px"
              >
                <Element
                  id="creativeHero1-artwork3Image"
                  is={CraftImage}
                  src={artworkImage3}
                  alt="Creative Work 3"
                  objectFit="cover"
                  width="100%"
                  height="180px"
                  borderRadius="8px"
                />
                <Element
                  id="creativeHero1-artwork3Title"
                  is={CraftText}
                  text="Color Burst"
                  fontSize="xs"
                  fontWeight="medium"
                  color={primaryColor}
                  margin="8px 0 0 0"
                  textAlign="center"
                />
              </Element>

              {/* Artwork 4 - Small accent */}
              <Element
                id="creativeHero1-artwork4"
                is={Box}
                position="absolute"
                bottom="40px"
                right="60px"
                width="140px"
                height="180px"
                borderRadius="12px"
                overflow="hidden"
                shadow="md"
                transform="rotate(-4deg)"
                _hover={{ transform: "rotate(0deg) scale(1.1)" }}
                transition="all 0.4s"
                zIndex="2"
                backgroundColor="white"
                padding="6px"
              >
                <Element
                  id="creativeHero1-artwork4Image"
                  is={CraftImage}
                  src={artworkImage4}
                  alt="Creative Work 4"
                  objectFit="cover"
                  width="100%"
                  height="130px"
                  borderRadius="6px"
                />
                <Element
                  id="creativeHero1-artwork4Title"
                  is={CraftText}
                  text="Minimalist"
                  fontSize="xs"
                  fontWeight="medium"
                  color={primaryColor}
                  margin="6px 0 0 0"
                  textAlign="center"
                />
              </Element>

              {/* Floating Creative Badge */}
              <Element
                id="creativeHero1-creativeBadge"
                is={Box}
                position="absolute"
                top="20px"
                left="20px"
                backgroundColor="white"
                padding="12px 16px"
                borderRadius="25px"
                shadow="lg"
                border={`2px solid ${accentColor}`}
                zIndex="4"
              >
                <Element
                  id="creativeHero1-badgeIcon"
                  is={CraftText}
                  text="🎨"
                  fontSize="lg"
                  margin="0 8px 0 0"
                  display="inline"
                />
                <Element
                  id="creativeHero1-badgeText"
                  is={CraftText}
                  text="Award Winner"
                  fontSize="xs"
                  fontWeight="bold"
                  color={accentColor}
                  display="inline"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </div>
  );
}

CreativeHero1.craft = {
  displayName: "Creative Hero 1",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => false,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};