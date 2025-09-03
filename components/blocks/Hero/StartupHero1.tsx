import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface StartupHero1Props extends SectionProps {
  // Main content
  tagline?: string;
  mainTitle?: string;
  highlightWord?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  
  // Video/Demo
  videoThumbnail?: string;
  demoImage?: string;
  
  // Social proof
  customerLogos?: string[];
  userCount?: string;
  
  // Product features
  feature1?: string;
  feature2?: string;
  feature3?: string;
  
  // Metrics
  metric1Value?: string;
  metric1Label?: string;
  metric2Value?: string;
  metric2Label?: string;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function StartupHero1({
  tagline = "THE FUTURE OF PRODUCTIVITY",
  mainTitle = "Build Your Next Big",
  highlightWord = "Idea",
  description = "Transform your vision into reality with our all-in-one platform. Join thousands of entrepreneurs who trust us to bring their ideas to life faster than ever before.",
  primaryButtonText = "Get Started Free",
  secondaryButtonText = "Watch Demo",
  videoThumbnail = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
  demoImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop",
  customerLogos = [
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
  ],
  userCount = "10,000+",
  feature1 = "Lightning Fast Setup",
  feature2 = "24/7 Expert Support",
  feature3 = "Enterprise Security",
  metric1Value = "99.9%",
  metric1Label = "Uptime",
  metric2Value = "50ms",
  metric2Label = "Response Time",
  primaryColor = "#1e293b",
  accentColor = "#3b82f6",
  gradientFrom = "#3b82f6",
  gradientTo = "#8b5cf6",
  ...props
}: StartupHero1Props) {
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
        id="startupHero1-section"
        is={Section}
        canvas
        backgroundColor="white"
        padding="0px"
        minHeight="700px"
        {...props}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: "linear-gradient(rgb(0 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, rgb(0 0 0 / 0.05) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}></div>
          </div>
          
          {/* Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
        </div>

        <Element
          id="startupHero1-container"
          is={Box}
          padding="px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-12 lg:py-32"
          maxWidth="7xl"
          margin="0 auto"
          position="relative"
        >
          {/* Header Content */}
          <Element
            id="startupHero1-header"
            is={Box}
            textAlign="center"
            margin="0 0 48px 0"
          >
            {/* Tagline */}
            <Element
              id="startupHero1-tagline"
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
              id="startupHero1-titleContainer"
              is={Box}
              margin="0 0 24px 0"
            >
              <Element
                id="startupHero1-titleMain"
                is={CraftText}
                text={mainTitle}
                fontSize="4xl"
                sm={{ fontSize: "5xl" }}
                lg={{ fontSize: "6xl" }}
                fontWeight="bold"
                color={primaryColor}
                lineHeight="tight"
                display="inline"
              />
              <Element
                id="startupHero1-titleHighlight"
                is={Box}
                display="inline-block"
                position="relative"
                margin="0 0 0 16px"
              >
                <Element
                  id="startupHero1-highlightText"
                  is={CraftText}
                  text={highlightWord}
                  fontSize="4xl"
                  sm={{ fontSize: "5xl" }}
                  lg={{ fontSize: "6xl" }}
                  fontWeight="bold"
                  color="transparent"
                  backgroundImage={`linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`}
                  backgroundClip="text"
                  lineHeight="tight"
                  position="relative"
                  zIndex="1"
                />
                {/* Underline Animation */}
                <div 
                  className="absolute bottom-2 left-0 right-0 h-3 opacity-30 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
                  }}
                ></div>
              </Element>
            </Element>

            {/* Description */}
            <Element
              id="startupHero1-description"
              is={CraftText}
              text={description}
              fontSize="xl"
              color="#64748b"
              lineHeight="relaxed"
              maxWidth="700px"
              margin="0 auto 32px auto"
            />

            {/* Feature Pills */}
            <Element
              id="startupHero1-features"
              is={Flex}
              justifyContent="center"
              gap="16px"
              flexWrap="wrap"
              margin="0 0 40px 0"
            >
              <Element
                id="startupHero1-feature1"
                is={Box}
                backgroundColor="#f1f5f9"
                padding="8px 16px"
                borderRadius="20px"
                border="1px solid #e2e8f0"
              >
                <Element
                  id="startupHero1-feature1Text"
                  is={CraftText}
                  text={`✓ ${feature1}`}
                  fontSize="sm"
                  color={primaryColor}
                  fontWeight="medium"
                />
              </Element>
              
              <Element
                id="startupHero1-feature2"
                is={Box}
                backgroundColor="#f1f5f9"
                padding="8px 16px"
                borderRadius="20px"
                border="1px solid #e2e8f0"
              >
                <Element
                  id="startupHero1-feature2Text"
                  is={CraftText}
                  text={`✓ ${feature2}`}
                  fontSize="sm"
                  color={primaryColor}
                  fontWeight="medium"
                />
              </Element>
              
              <Element
                id="startupHero1-feature3"
                is={Box}
                backgroundColor="#f1f5f9"
                padding="8px 16px"
                borderRadius="20px"
                border="1px solid #e2e8f0"
              >
                <Element
                  id="startupHero1-feature3Text"
                  is={CraftText}
                  text={`✓ ${feature3}`}
                  fontSize="sm"
                  color={primaryColor}
                  fontWeight="medium"
                />
              </Element>
            </Element>

            {/* Buttons */}
            <Element
              id="startupHero1-buttons"
              is={Flex}
              justifyContent="center"
              gap="16px"
              flexWrap="wrap"
            >
              <Element
                id="startupHero1-primaryButton"
                is={CraftButton}
                text={primaryButtonText}
                backgroundImage={`linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`}
                color="white"
                padding="14px 32px"
                borderRadius="8px"
                fontSize="base"
                fontWeight="semibold"
                shadow="lg"
                _hover={{ transform: "translateY(-2px)", shadow: "xl" }}
                transition="all 0.3s"
              />
              
              <Element
                id="startupHero1-secondaryButton"
                is={CraftButton}
                text={secondaryButtonText}
                backgroundColor="white"
                color={primaryColor}
                border="2px solid #e2e8f0"
                padding="12px 32px"
                borderRadius="8px"
                fontSize="base"
                fontWeight="semibold"
                _hover={{ backgroundColor: "#f8fafc", borderColor: accentColor }}
                transition="all 0.3s"
              />
            </Element>
          </Element>

          {/* Demo Section */}
          <Element
            id="startupHero1-demoSection"
            is={Box}
            position="relative"
            margin="0 0 48px 0"
          >
            {/* Main Demo Image */}
            <Element
              id="startupHero1-demoContainer"
              is={Box}
              position="relative"
              maxWidth="800px"
              margin="0 auto"
              borderRadius="16px"
              overflow="hidden"
              shadow="2xl"
              backgroundColor="white"
              padding="8px"
            >
              <Element
                id="startupHero1-demoImage"
                is={CraftImage}
                src={demoImage}
                alt="Product Demo"
                borderRadius="12px"
                objectFit="cover"
                width="100%"
                height="400px"
              />
            </Element>

            {/* Floating Metrics */}
            <Element
              id="startupHero1-metric1"
              is={Box}
              position="absolute"
              top="40px"
              left="20px"
              backgroundColor="white"
              padding="16px"
              borderRadius="12px"
              shadow="lg"
              border="1px solid #f1f5f9"
              lg={{ left: "40px" }}
            >
              <Element
                id="startupHero1-metric1Value"
                is={CraftText}
                text={metric1Value}
                fontSize="xl"
                fontWeight="bold"
                color={accentColor}
                lineHeight="none"
              />
              <Element
                id="startupHero1-metric1Label"
                is={CraftText}
                text={metric1Label}
                fontSize="xs"
                color="#64748b"
                margin="4px 0 0 0"
              />
            </Element>

            <Element
              id="startupHero1-metric2"
              is={Box}
              position="absolute"
              top="40px"
              right="20px"
              backgroundColor="white"
              padding="16px"
              borderRadius="12px"
              shadow="lg"
              border="1px solid #f1f5f9"
              lg={{ right: "40px" }}
            >
              <Element
                id="startupHero1-metric2Value"
                is={CraftText}
                text={metric2Value}
                fontSize="xl"
                fontWeight="bold"
                color={accentColor}
                lineHeight="none"
              />
              <Element
                id="startupHero1-metric2Label"
                is={CraftText}
                text={metric2Label}
                fontSize="xs"
                color="#64748b"
                margin="4px 0 0 0"
              />
            </Element>

            {/* User Count Badge */}
            <Element
              id="startupHero1-userBadge"
              is={Box}
              position="absolute"
              bottom="20px"
              left="50%"
              transform="translateX(-50%)"
              backgroundColor="white"
              padding="12px 20px"
              borderRadius="25px"
              shadow="lg"
              border="1px solid #f1f5f9"
            >
              <Element
                id="startupHero1-userBadgeText"
                is={CraftText}
                text={`🎉 Join ${userCount} users already building`}
                fontSize="sm"
                fontWeight="medium"
                color={primaryColor}
              />
            </Element>
          </Element>

          {/* Social Proof */}
          <Element
            id="startupHero1-socialProof"
            is={Box}
            textAlign="center"
          >
            <Element
              id="startupHero1-socialProofTitle"
              is={CraftText}
              text="Trusted by innovative companies"
              fontSize="sm"
              color="#94a3b8"
              margin="0 0 24px 0"
            />
            
            <Element
              id="startupHero1-logoGrid"
              is={Flex}
              justifyContent="center"
              alignItems="center"
              gap="32px"
              flexWrap="wrap"
              opacity="0.6"
            >
              {customerLogos.map((logo, index) => (
                <Element
                  key={index}
                  id={`startupHero1-logo${index + 1}`}
                  is={CraftImage}
                  src={logo}
                  alt={`Customer Logo ${index + 1}`}
                  height="32px"
                  filter="grayscale(100%)"
                  _hover={{ filter: "grayscale(0%)" }}
                  transition="all 0.3s"
                />
              ))}
            </Element>
          </Element>
        </Element>
      </Element>
    </div>
  );
}

StartupHero1.craft = {
  displayName: "Startup Hero 1",
  props: {},
  rules: {
    canDrag: () => true,
    canDrop: () => false,
    canMoveIn: () => false,
    canMoveOut: () => true,
  },
};