import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface CorporateHero1Props extends SectionProps {
  // Main content
  tagline?: string;
  mainTitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // Corporate imagery
  teamImage?: string;
  officeImage?: string;
  presentationImage?: string;

  // Trust indicators
  clientsServed?: string;
  yearsExperience?: string;
  globalOffices?: string;
  teamSize?: string;

  // Certifications
  certification1?: string;
  certification2?: string;
  certification3?: string;

  // Partner logos
  partnerLogo1?: string;
  partnerLogo2?: string;
  partnerLogo3?: string;
  partnerLogo4?: string;

  // Styling
  primaryColor?: string;
  accentColor?: string;
  backgroundColor?: string;
}

export function CorporateHero1({
  tagline = "TRUSTED BUSINESS PARTNER",
  mainTitle = "Driving Growth Through Strategic Excellence",
  description = "We partner with forward-thinking businesses to accelerate growth, optimize operations, and deliver measurable results. Our proven methodologies and expert team ensure your success in today's competitive landscape.",
  primaryButtonText = "Schedule Consultation",
  secondaryButtonText = "Learn More",
  teamImage = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&h=350&fit=crop",
  officeImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
  presentationImage = "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=350&h=250&fit=crop",
  clientsServed = "500+",
  yearsExperience = "25+",
  globalOffices = "12",
  teamSize = "200+",
  certification1 = "ISO 9001 Certified",
  certification2 = "Industry Leader Award",
  certification3 = "Best Workplace 2024",
  partnerLogo1 = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  partnerLogo2 = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  partnerLogo3 = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  partnerLogo4 = "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  primaryColor = "#1e3a8a",
  accentColor = "#3b82f6",
  backgroundColor = "#f8fafc",
  ...props
}: CorporateHero1Props) {
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
        id="corporateHero1-section"
        is={Section}
        canvas
        backgroundColor={backgroundColor}
        padding="0px"
        minHeight="700px"
        {...props}
      >
        {/* Professional Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(45deg, #e2e8f0 25%, transparent 25%), linear-gradient(-45deg, #e2e8f0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #e2e8f0 75%), linear-gradient(-45deg, transparent 75%, #e2e8f0 75%)",
              backgroundSize: "20px 20px",
              backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
            }}
          ></div>
        </div>

        <Element
          id="corporateHero1-container"
          is={Box}
          padding="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32"
          maxWidth="7xl"
          margin="0 auto"
          position="relative"
        >
          <Element
            id="corporateHero1-grid"
            is={Flex}
            direction="column"
            gap="48px"
            lg={{ direction: "row", alignItems: "center" }}
          >
            {/* Left Content */}
            <Element
              id="corporateHero1-content"
              is={Box}
              flex="1.2"
              maxWidth="650px"
            >
              {/* Certifications */}
              <Element
                id="corporateHero1-certifications"
                is={Flex}
                gap="16px"
                margin="0 0 24px 0"
                flexWrap="wrap"
              >
                <Element
                  id="corporateHero1-cert1"
                  is={Box}
                  backgroundColor="white"
                  padding="6px 12px"
                  borderRadius="12px"
                  border="1px solid #e2e8f0"
                  shadow="sm"
                >
                  <Element
                    id="corporateHero1-cert1Text"
                    is={CraftText}
                    text={certification1}
                    fontSize="xs"
                    fontWeight="medium"
                    color={primaryColor}
                  />
                </Element>

                <Element
                  id="corporateHero1-cert2"
                  is={Box}
                  backgroundColor="white"
                  padding="6px 12px"
                  borderRadius="12px"
                  border="1px solid #e2e8f0"
                  shadow="sm"
                >
                  <Element
                    id="corporateHero1-cert2Text"
                    is={CraftText}
                    text={certification2}
                    fontSize="xs"
                    fontWeight="medium"
                    color={primaryColor}
                  />
                </Element>

                <Element
                  id="corporateHero1-cert3"
                  is={Box}
                  backgroundColor="white"
                  padding="6px 12px"
                  borderRadius="12px"
                  border="1px solid #e2e8f0"
                  shadow="sm"
                >
                  <Element
                    id="corporateHero1-cert3Text"
                    is={CraftText}
                    text={certification3}
                    fontSize="xs"
                    fontWeight="medium"
                    color={primaryColor}
                  />
                </Element>
              </Element>

              {/* Tagline */}
              <Element
                id="corporateHero1-tagline"
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
              <Element
                id="corporateHero1-title"
                is={CraftText}
                text={mainTitle}
                fontSize="4xl"
                sm={{ fontSize: "5xl" }}
                lg={{ fontSize: "6xl" }}
                fontWeight="bold"
                color={primaryColor}
                lineHeight="tight"
                margin="0 0 24px 0"
              />

              {/* Description */}
              <Element
                id="corporateHero1-description"
                is={CraftText}
                text={description}
                fontSize="lg"
                color="#475569"
                lineHeight="relaxed"
                margin="0 0 32px 0"
                maxWidth="550px"
              />

              {/* Trust Metrics */}
              <Element
                id="corporateHero1-metrics"
                is={Flex}
                direction="row"
                gap="32px"
                margin="0 0 40px 0"
                flexWrap="wrap"
              >
                <Element id="corporateHero1-clientsMetric" is={Box}>
                  <Element
                    id="corporateHero1-clientsNumber"
                    is={CraftText}
                    text={clientsServed}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="corporateHero1-clientsLabel"
                    is={CraftText}
                    text="Clients Served"
                    fontSize="sm"
                    color="#64748b"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element id="corporateHero1-experienceMetric" is={Box}>
                  <Element
                    id="corporateHero1-experienceNumber"
                    is={CraftText}
                    text={yearsExperience}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="corporateHero1-experienceLabel"
                    is={CraftText}
                    text="Years Experience"
                    fontSize="sm"
                    color="#64748b"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element id="corporateHero1-officesMetric" is={Box}>
                  <Element
                    id="corporateHero1-officesNumber"
                    is={CraftText}
                    text={globalOffices}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="corporateHero1-officesLabel"
                    is={CraftText}
                    text="Global Offices"
                    fontSize="sm"
                    color="#64748b"
                    margin="4px 0 0 0"
                  />
                </Element>

                <Element id="corporateHero1-teamMetric" is={Box}>
                  <Element
                    id="corporateHero1-teamNumber"
                    is={CraftText}
                    text={teamSize}
                    fontSize="2xl"
                    fontWeight="bold"
                    color={primaryColor}
                    lineHeight="none"
                  />
                  <Element
                    id="corporateHero1-teamLabel"
                    is={CraftText}
                    text="Expert Team"
                    fontSize="sm"
                    color="#64748b"
                    margin="4px 0 0 0"
                  />
                </Element>
              </Element>

              {/* Buttons */}
              <Element
                id="corporateHero1-buttons"
                is={Flex}
                direction="column"
                gap="16px"
                sm={{ direction: "row" }}
                margin="0 0 40px 0"
              >
                <Element
                  id="corporateHero1-primaryButton"
                  is={CraftButton}
                  text={primaryButtonText}
                  backgroundColor={primaryColor}
                  color="white"
                  padding="14px 32px"
                  borderRadius="6px"
                  fontSize="base"
                  fontWeight="semibold"
                  shadow="md"
                  _hover={{ backgroundColor: "#1e40af", shadow: "lg" }}
                  transition="all 0.3s"
                />

                <Element
                  id="corporateHero1-secondaryButton"
                  is={CraftButton}
                  text={secondaryButtonText}
                  backgroundColor="white"
                  color={primaryColor}
                  border={`2px solid ${primaryColor}`}
                  padding="12px 32px"
                  borderRadius="6px"
                  fontSize="base"
                  fontWeight="semibold"
                  _hover={{ backgroundColor: primaryColor, color: "white" }}
                  transition="all 0.3s"
                />
              </Element>

              {/* Trusted Partners */}
              <Element id="corporateHero1-partners" is={Box}>
                <Element
                  id="corporateHero1-partnersTitle"
                  is={CraftText}
                  text="Trusted by industry leaders:"
                  fontSize="sm"
                  color="#64748b"
                  margin="0 0 16px 0"
                />

                <Element
                  id="corporateHero1-partnerLogos"
                  is={Flex}
                  gap="24px"
                  alignItems="center"
                  flexWrap="wrap"
                  opacity="0.7"
                >
                  <Element
                    id="corporateHero1-partnerLogo1"
                    is={CraftImage}
                    src={partnerLogo1}
                    alt="Partner 1"
                    height="28px"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="all 0.3s"
                  />
                  <Element
                    id="corporateHero1-partnerLogo2"
                    is={CraftImage}
                    src={partnerLogo2}
                    alt="Partner 2"
                    height="28px"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="all 0.3s"
                  />
                  <Element
                    id="corporateHero1-partnerLogo3"
                    is={CraftImage}
                    src={partnerLogo3}
                    alt="Partner 3"
                    height="28px"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="all 0.3s"
                  />
                  <Element
                    id="corporateHero1-partnerLogo4"
                    is={CraftImage}
                    src={partnerLogo4}
                    alt="Partner 4"
                    height="28px"
                    filter="grayscale(100%)"
                    _hover={{ filter: "grayscale(0%)" }}
                    transition="all 0.3s"
                  />
                </Element>
              </Element>
            </Element>

            {/* Right Corporate Images */}
            <Element
              id="corporateHero1-imageContainer"
              is={Box}
              flex="1"
              position="relative"
              height="600px"
            >
              {/* Main Team Image */}
              <Element
                id="corporateHero1-teamImage"
                is={Box}
                position="absolute"
                top="0"
                right="0"
                width="350px"
                height="280px"
                borderRadius="12px"
                overflow="hidden"
                shadow="xl"
                backgroundColor="white"
                padding="8px"
                zIndex="3"
              >
                <Element
                  id="corporateHero1-teamPhoto"
                  is={CraftImage}
                  src={teamImage}
                  alt="Professional Team"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  borderRadius="8px"
                />
              </Element>

              {/* Office Image */}
              <Element
                id="corporateHero1-officeImage"
                is={Box}
                position="absolute"
                bottom="100px"
                left="0"
                width="280px"
                height="200px"
                borderRadius="12px"
                overflow="hidden"
                shadow="lg"
                backgroundColor="white"
                padding="8px"
                zIndex="2"
              >
                <Element
                  id="corporateHero1-officePhoto"
                  is={CraftImage}
                  src={officeImage}
                  alt="Modern Office"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  borderRadius="8px"
                />
              </Element>

              {/* Presentation Image */}
              <Element
                id="corporateHero1-presentationImage"
                is={Box}
                position="absolute"
                top="120px"
                left="80px"
                width="240px"
                height="160px"
                borderRadius="10px"
                overflow="hidden"
                shadow="md"
                backgroundColor="white"
                padding="6px"
                zIndex="1"
              >
                <Element
                  id="corporateHero1-presentationPhoto"
                  is={CraftImage}
                  src={presentationImage}
                  alt="Business Presentation"
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  borderRadius="6px"
                />
              </Element>

              {/* Excellence Badge */}
              <Element
                id="corporateHero1-excellenceBadge"
                is={Box}
                position="absolute"
                top="20px"
                left="20px"
                backgroundColor="white"
                padding="16px"
                borderRadius="12px"
                shadow="lg"
                border={`2px solid ${accentColor}`}
                zIndex="4"
                textAlign="center"
              >
                <Element
                  id="corporateHero1-badgeIcon"
                  is={CraftText}
                  text="🏆"
                  fontSize="2xl"
                  margin="0 0 8px 0"
                />
                <Element
                  id="corporateHero1-badgeTitle"
                  is={CraftText}
                  text="Excellence"
                  fontSize="sm"
                  fontWeight="bold"
                  color={primaryColor}
                />
                <Element
                  id="corporateHero1-badgeSubtitle"
                  is={CraftText}
                  text="Award Winner"
                  fontSize="xs"
                  color="#64748b"
                />
              </Element>

              {/* Trust Indicator */}
              <Element
                id="corporateHero1-trustIndicator"
                is={Box}
                position="absolute"
                bottom="20px"
                right="40px"
                backgroundColor="white"
                padding="12px 16px"
                borderRadius="8px"
                shadow="md"
                border="1px solid #e2e8f0"
                zIndex="4"
              >
                <Element
                  id="corporateHero1-trustIcon"
                  is={CraftText}
                  text="🔒"
                  fontSize="lg"
                  margin="0 8px 0 0"
                  display="inline"
                />
                <Element
                  id="corporateHero1-trustText"
                  is={CraftText}
                  text="Secure & Trusted"
                  fontSize="xs"
                  fontWeight="semibold"
                  color={primaryColor}
                  display="inline"
                />
              </Element>

              {/* Growth Arrow */}
              <Element
                id="corporateHero1-growthIndicator"
                is={Box}
                position="absolute"
                bottom="200px"
                right="80px"
                backgroundColor={accentColor}
                color="white"
                padding="8px 12px"
                borderRadius="6px"
                shadow="md"
                zIndex="3"
              >
                <Element
                  id="corporateHero1-growthText"
                  is={CraftText}
                  text="📈 Growth"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </div>
  );
}

CorporateHero1.craft = {
  displayName: "Corporate Hero 1",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
