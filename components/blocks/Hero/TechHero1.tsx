import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface TechHero1Props extends SectionProps {
  // Brand and main content
  tagline?: string;
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // Hero images
  heroImage?: string;
  dashboardImage?: string;

  // Stats
  stat1Number?: string;
  stat1Label?: string;
  stat2Number?: string;
  stat2Label?: string;
  stat3Number?: string;
  stat3Label?: string;

  // Styling
  gradientFrom?: string;
  gradientTo?: string;
  accentColor?: string;
}

export function TechHero1({
  tagline = "REVOLUTIONIZE YOUR WORKFLOW",
  mainTitle = "Build Better Software, Faster",
  description = "Streamline your development process with our cutting-edge platform. Ship features 10x faster with automated testing, seamless deployment, and powerful analytics.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "Watch Demo",
  heroImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
  dashboardImage = "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
  stat1Number = "50K+",
  stat1Label = "Developers",
  stat2Number = "99.9%",
  stat2Label = "Uptime",
  stat3Number = "10x",
  stat3Label = "Faster Deploy",
  gradientFrom = "#667eea",
  gradientTo = "#764ba2",
  accentColor = "#6366f1",
  ...props
}: TechHero1Props) {
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
        id="techHero1-section"
        is={Section}
        canvas
        backgroundColor="#0f172a"
        padding="0px"
        minHeight="700px"
        {...props}
      >
        {/* Gradient Background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
          }}
        />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <Element
          id="techHero1-container"
          is={Box}
          padding="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32"
          maxWidth="7xl"
          margin="0 auto"
          position="relative"
        >
          <Element
            id="techHero1-grid"
            is={Flex}
            direction="column"
            gap="48px"
            alignItems="center"
            lg={{ direction: "row", alignItems: "center" }}
          >
            {/* Left Content */}
            <Element
              id="techHero1-content"
              is={Box}
              flex="1"
              textAlign="center"
              lg={{ textAlign: "left" }}
            >
              {/* Tagline */}
              <Element
                id="techHero1-tagline"
                is={CraftText}
                text={tagline}
                fontSize="sm"
                fontWeight="semibold"
                color="#a855f7"
                letterSpacing="wide"
                textTransform="uppercase"
                margin="0 0 16px 0"
              />

              {/* Main Title */}
              <Element
                id="techHero1-title"
                is={CraftText}
                text={mainTitle}
                fontSize="4xl"
                sm={{ fontSize: "5xl" }}
                lg={{ fontSize: "6xl" }}
                fontWeight="bold"
                color="white"
                lineHeight="tight"
                margin="0 0 24px 0"
              />

              {/* Description */}
              <Element
                id="techHero1-description"
                is={CraftText}
                text={description}
                fontSize="lg"
                color="#cbd5e1"
                lineHeight="relaxed"
                margin="0 0 32px 0"
                maxWidth="600px"
                mx={{ center: "auto", lg: "0" }}
              />

              {/* Buttons */}
              <Element
                id="techHero1-buttons"
                is={Flex}
                direction="column"
                gap="16px"
                alignItems="center"
                sm={{ direction: "row" }}
                lg={{ justifyContent: "flex-start" }}
                margin="0 0 40px 0"
              >
                <Element
                  id="techHero1-primaryButton"
                  is={CraftButton}
                  text={primaryButtonText}
                  backgroundColor={accentColor}
                  color="white"
                  padding="12px 32px"
                  borderRadius="8px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: "#4f46e5" }}
                  transition="all 0.2s"
                />

                <Element
                  id="techHero1-secondaryButton"
                  is={CraftButton}
                  text={secondaryButtonText}
                  backgroundColor="transparent"
                  color="white"
                  border="1px solid #475569"
                  padding="12px 32px"
                  borderRadius="8px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: "#334155" }}
                  transition="all 0.2s"
                />
              </Element>

              {/* Stats */}
              <Element
                id="techHero1-stats"
                is={Flex}
                direction="column"
                gap="24px"
                alignItems="center"
                sm={{ direction: "row" }}
                lg={{ justifyContent: "flex-start" }}
              >
                <Element
                  id="techHero1-stat1"
                  is={Box}
                  textAlign="center"
                  lg={{ textAlign: "left" }}
                >
                  <Element
                    id="techHero1-stat1Number"
                    is={CraftText}
                    text={stat1Number}
                    fontSize="2xl"
                    fontWeight="bold"
                    color="white"
                    lineHeight="none"
                  />
                  <Element
                    id="techHero1-stat1Label"
                    is={CraftText}
                    text={stat1Label}
                    fontSize="sm"
                    color="#94a3b8"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element
                  id="techHero1-stat2"
                  is={Box}
                  textAlign="center"
                  lg={{ textAlign: "left" }}
                >
                  <Element
                    id="techHero1-stat2Number"
                    is={CraftText}
                    text={stat2Number}
                    fontSize="2xl"
                    fontWeight="bold"
                    color="white"
                    lineHeight="none"
                  />
                  <Element
                    id="techHero1-stat2Label"
                    is={CraftText}
                    text={stat2Label}
                    fontSize="sm"
                    color="#94a3b8"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element
                  id="techHero1-stat3"
                  is={Box}
                  textAlign="center"
                  lg={{ textAlign: "left" }}
                >
                  <Element
                    id="techHero1-stat3Number"
                    is={CraftText}
                    text={stat3Number}
                    fontSize="2xl"
                    fontWeight="bold"
                    color="white"
                    lineHeight="none"
                  />
                  <Element
                    id="techHero1-stat3Label"
                    is={CraftText}
                    text={stat3Label}
                    fontSize="sm"
                    color="#94a3b8"
                    margin="4px 0 0 0"
                  />
                </Element>
              </Element>
            </Element>

            {/* Right Image */}
            <Element
              id="techHero1-imageContainer"
              is={Box}
              flex="1"
              position="relative"
              maxWidth="600px"
            >
              {/* Main Dashboard Image */}
              <Element
                id="techHero1-dashboardImage"
                is={CraftImage}
                src={dashboardImage}
                alt="Tech Dashboard"
                borderRadius="12px"
                shadow="2xl"
                objectFit="cover"
                width="100%"
                height="400px"
              />

              {/* Floating Card */}
              <Element
                id="techHero1-floatingCard"
                is={Box}
                position="absolute"
                bottom="20px"
                left="20px"
                backgroundColor="rgba(255, 255, 255, 0.95)"
                padding="16px"
                borderRadius="8px"
                shadow="lg"
                backdropFilter="blur(10px)"
              >
                <Element
                  id="techHero1-floatingText"
                  is={CraftText}
                  text="✨ 99.9% Uptime Guaranteed"
                  fontSize="sm"
                  fontWeight="semibold"
                  color="#1e293b"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </div>
  );
}

TechHero1.craft = {
  displayName: "Tech Hero 1",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
