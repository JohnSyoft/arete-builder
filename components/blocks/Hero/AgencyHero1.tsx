import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface AgencyHero1Props extends SectionProps {
  // Main content
  tagline?: string;
  mainTitle?: string;
  titleAccent?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // Portfolio images
  portfolioImage1?: string;
  portfolioImage2?: string;
  portfolioImage3?: string;

  // Client info
  clientCount?: string;
  projectCount?: string;
  yearsExperience?: string;

  // Awards
  award1?: string;
  award2?: string;

  // Styling
  primaryColor?: string;
  accentColor?: string;
}

export function AgencyHero1({
  tagline = "CREATIVE DIGITAL AGENCY",
  mainTitle = "We Create Exceptional",
  titleAccent = "Digital Experiences",
  description = "Award-winning creative agency specializing in brand identity, web design, and digital marketing. We transform ideas into memorable experiences that drive results.",
  primaryButtonText = "View Our Work",
  secondaryButtonText = "Start Project",
  portfolioImage1 = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
  portfolioImage2 = "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=500&fit=crop",
  portfolioImage3 = "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=400&fit=crop",
  clientCount = "500+",
  projectCount = "1,200+",
  yearsExperience = "10+",
  award1 = "Awwwards SOTD",
  award2 = "CSS Design Awards",
  primaryColor = "#111827",
  accentColor = "#f59e0b",
  ...props
}: AgencyHero1Props) {
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
        id="agencyHero1-section"
        is={Section}
        canvas
        backgroundColor="white"
        padding="0px"
        minHeight="800px"
        {...props}
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gray-50 to-transparent"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
          <div className="absolute bottom-40 left-10 w-24 h-24 bg-orange-400 rounded-full opacity-10"></div>
        </div>

        <Element
          id="agencyHero1-container"
          is={Box}
          padding="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32"
          maxWidth="7xl"
          margin="0 auto"
          position="relative"
        >
          <Element
            id="agencyHero1-grid"
            is={Flex}
            direction="column"
            gap="48px"
            lg={{ direction: "row", alignItems: "center" }}
          >
            {/* Left Content */}
            <Element
              id="agencyHero1-content"
              is={Box}
              flex="1.2"
              maxWidth="600px"
            >
              {/* Awards */}
              <Element
                id="agencyHero1-awards"
                is={Flex}
                gap="24px"
                margin="0 0 24px 0"
                alignItems="center"
              >
                <Element
                  id="agencyHero1-award1"
                  is={Box}
                  backgroundColor="#f3f4f6"
                  padding="8px 16px"
                  borderRadius="20px"
                >
                  <Element
                    id="agencyHero1-award1Text"
                    is={CraftText}
                    text={award1}
                    fontSize="xs"
                    fontWeight="medium"
                    color="#6b7280"
                  />
                </Element>

                <Element
                  id="agencyHero1-award2"
                  is={Box}
                  backgroundColor="#fef3c7"
                  padding="8px 16px"
                  borderRadius="20px"
                >
                  <Element
                    id="agencyHero1-award2Text"
                    is={CraftText}
                    text={award2}
                    fontSize="xs"
                    fontWeight="medium"
                    color="#92400e"
                  />
                </Element>
              </Element>

              {/* Tagline */}
              <Element
                id="agencyHero1-tagline"
                is={CraftText}
                text={tagline}
                fontSize="sm"
                fontWeight="semibold"
                color={accentColor}
                letterSpacing="wide"
                textTransform="uppercase"
                margin="0 0 16px 0"
              />

              {/* Main Title */}
              <Element id="agencyHero1-title" is={Box} margin="0 0 24px 0">
                <Element
                  id="agencyHero1-titleMain"
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
                  id="agencyHero1-titleAccent"
                  is={CraftText}
                  text={titleAccent}
                  fontSize="4xl"
                  sm={{ fontSize: "5xl" }}
                  lg={{ fontSize: "6xl" }}
                  fontWeight="bold"
                  color={accentColor}
                  lineHeight="tight"
                  fontStyle="italic"
                />
              </Element>

              {/* Description */}
              <Element
                id="agencyHero1-description"
                is={CraftText}
                text={description}
                fontSize="lg"
                color="#6b7280"
                lineHeight="relaxed"
                margin="0 0 32px 0"
                maxWidth="500px"
              />

              {/* Stats */}
              <Element
                id="agencyHero1-stats"
                is={Flex}
                direction="row"
                gap="32px"
                margin="0 0 40px 0"
              >
                <Element id="agencyHero1-clientStat" is={Box}>
                  <Element
                    id="agencyHero1-clientNumber"
                    is={CraftText}
                    text={clientCount}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="agencyHero1-clientLabel"
                    is={CraftText}
                    text="Happy Clients"
                    fontSize="sm"
                    color="#9ca3af"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element id="agencyHero1-projectStat" is={Box}>
                  <Element
                    id="agencyHero1-projectNumber"
                    is={CraftText}
                    text={projectCount}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="agencyHero1-projectLabel"
                    is={CraftText}
                    text="Projects Done"
                    fontSize="sm"
                    color="#9ca3af"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element id="agencyHero1-experienceStat" is={Box}>
                  <Element
                    id="agencyHero1-experienceNumber"
                    is={CraftText}
                    text={yearsExperience}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="agencyHero1-experienceLabel"
                    is={CraftText}
                    text="Years Experience"
                    fontSize="sm"
                    color="#9ca3af"
                    margin="4px 0 0 0"
                  />
                </Element>
              </Element>

              {/* Buttons */}
              <Element
                id="agencyHero1-buttons"
                is={Flex}
                direction="column"
                gap="16px"
                sm={{ direction: "row" }}
              >
                <Element
                  id="agencyHero1-primaryButton"
                  is={CraftButton}
                  text={primaryButtonText}
                  backgroundColor={primaryColor}
                  color="white"
                  padding="14px 32px"
                  borderRadius="50px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: "#1f2937" }}
                  transition="all 0.3s"
                />

                <Element
                  id="agencyHero1-secondaryButton"
                  is={CraftButton}
                  text={secondaryButtonText}
                  backgroundColor="transparent"
                  color={primaryColor}
                  border={`2px solid ${primaryColor}`}
                  padding="12px 32px"
                  borderRadius="50px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: primaryColor, color: "white" }}
                  transition="all 0.3s"
                />
              </Element>
            </Element>

            {/* Right Portfolio Images */}
            <Element
              id="agencyHero1-portfolioContainer"
              is={Box}
              flex="1"
              position="relative"
              height="600px"
            >
              {/* Image 1 - Large */}
              <Element
                id="agencyHero1-portfolioImage1"
                is={Box}
                position="absolute"
                top="0"
                right="0"
                width="280px"
                height="350px"
                borderRadius="16px"
                overflow="hidden"
                shadow="xl"
                transform="rotate(3deg)"
                _hover={{ transform: "rotate(0deg)" }}
                transition="all 0.3s"
              >
                <Element
                  id="agencyHero1-image1"
                  is={CraftImage}
                  src={portfolioImage1}
                  alt="Portfolio Project 1"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Element>

              {/* Image 2 - Medium */}
              <Element
                id="agencyHero1-portfolioImage2"
                is={Box}
                position="absolute"
                bottom="100px"
                left="0"
                width="220px"
                height="280px"
                borderRadius="16px"
                overflow="hidden"
                shadow="xl"
                transform="rotate(-5deg)"
                _hover={{ transform: "rotate(0deg)" }}
                transition="all 0.3s"
                zIndex="2"
              >
                <Element
                  id="agencyHero1-image2"
                  is={CraftImage}
                  src={portfolioImage2}
                  alt="Portfolio Project 2"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Element>

              {/* Image 3 - Small */}
              <Element
                id="agencyHero1-portfolioImage3"
                is={Box}
                position="absolute"
                top="50px"
                left="50px"
                width="180px"
                height="220px"
                borderRadius="16px"
                overflow="hidden"
                shadow="lg"
                transform="rotate(8deg)"
                _hover={{ transform: "rotate(0deg)" }}
                transition="all 0.3s"
                zIndex="1"
              >
                <Element
                  id="agencyHero1-image3"
                  is={CraftImage}
                  src={portfolioImage3}
                  alt="Portfolio Project 3"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                />
              </Element>

              {/* Floating Badge */}
              <Element
                id="agencyHero1-floatingBadge"
                is={Box}
                position="absolute"
                bottom="20px"
                right="40px"
                backgroundColor="white"
                padding="16px"
                borderRadius="12px"
                shadow="lg"
                zIndex="3"
              >
                <Element
                  id="agencyHero1-badgeIcon"
                  is={CraftText}
                  text="⭐"
                  fontSize="2xl"
                  margin="0 0 8px 0"
                />
                <Element
                  id="agencyHero1-badgeText"
                  is={CraftText}
                  text="Award Winning"
                  fontSize="sm"
                  fontWeight="semibold"
                  color={primaryColor}
                />
                <Element
                  id="agencyHero1-badgeSubtext"
                  is={CraftText}
                  text="Design Agency"
                  fontSize="xs"
                  color="#6b7280"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </div>
  );
}

AgencyHero1.craft = {
  displayName: "Agency Hero 1",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
