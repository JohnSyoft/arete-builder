import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface HealthcareHero1Props extends SectionProps {
  // Main content
  mainTitle?: string;
  subtitle?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;

  // Hero image
  heroImage?: string;

  // Stats/metrics
  statValue1?: string;
  statLabel1?: string;
  statValue2?: string;
  statLabel2?: string;
  statValue3?: string;
  statLabel3?: string;

  // Colors and styling
  primaryColor?: string;
  accentColor?: string;
  textColor?: string;
  buttonColor?: string;
}

export function HealthcareHero1({
  mainTitle = "Protect patient health for future generations",
  subtitle = "Excellence in Healthcare",
  description = "Every patient we treat is a step towards a healthier community, ensuring quality care for all.",
  primaryButtonText = "Book Appointment",
  secondaryButtonText = "Learn More",
  heroImage = "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  statValue1 = "95%",
  statLabel1 = "Patient Satisfaction",
  statValue2 = "10,000+",
  statLabel2 = "Lives Improved",
  statValue3 = "24/7",
  statLabel3 = "Emergency Care",
  primaryColor = "#ffffff",
  accentColor = "#0066cc",
  textColor = "#1f2937",
  buttonColor = "#0066cc",
  ...props
}: HealthcareHero1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Set section defaults for healthcare hero
  const heroProps = {
    backgroundColor: primaryColor,
    padding: "0",
    minHeight: "700px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
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
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-15"></div>
          <div className="absolute top-1/2 right-10 w-16 h-16 bg-blue-50 rounded-full opacity-25"></div>
        </div>

        <Element
          id="healthcareHeroContent"
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
            gap="64px"
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
              {/* Subtitle */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="8px 16px"
                margin="0 0 24px 0"
                display="inline-block"
                borderRadius="25px"
                width="fit-content"
                canvas={false}
              >
                <div style={{ backgroundColor: `${accentColor}15` }}>
                  <CraftText
                    text={subtitle}
                    tagName="span"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                    color={accentColor}
                    textAlign="text-left"
                    letterSpacing="tracking-wide"
                    textTransform="uppercase"
                  />
                </div>
              </Element>

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
                  text={mainTitle}
                  tagName="h1"
                  fontSize="text-4xl md:text-5xl lg:text-6xl"
                  fontWeight="font-bold"
                  color={textColor}
                  textAlign="text-left"
                  margin="0"
                  lineHeight="leading-tight"
                />
              </Element>

              {/* Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={description}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="#6b7280"
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
                gap="gap-6"
                margin="mb-12"
                wrap="wrap"
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
                    borderRadius="8px"
                    padding="px-8 py-4"
                    width="w-auto"
                  />
                </Element>

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
                    textColor={textColor}
                    borderRadius="8px"
                    padding="px-8 py-4"
                    width="w-auto"
                  />
                </Element>
              </Element>

              {/* Healthcare Stats */}
              <Element
                is={Grid}
                canvas
                columns={3}
                autoFit={false}
                minColumnWidth="120px"
                gap="32px"
                autoRows="auto"
              >
                {/* Stat 1 */}
                <Element
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
                    margin="0 0 8px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={statValue1}
                      tagName="span"
                      fontSize="text-3xl"
                      fontWeight="font-bold"
                      color={accentColor}
                      textAlign="text-left"
                      margin="0"
                    />
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
                      text={statLabel1}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="#6b7280"
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>
                </Element>

                {/* Stat 2 */}
                <Element
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
                    margin="0 0 8px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={statValue2}
                      tagName="span"
                      fontSize="text-3xl"
                      fontWeight="font-bold"
                      color={accentColor}
                      textAlign="text-left"
                      margin="0"
                    />
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
                      text={statLabel2}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="#6b7280"
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>
                </Element>

                {/* Stat 3 */}
                <Element
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
                    margin="0 0 8px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={statValue3}
                      tagName="span"
                      fontSize="text-3xl"
                      fontWeight="font-bold"
                      color={accentColor}
                      textAlign="text-left"
                      margin="0"
                    />
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
                      text={statLabel3}
                      tagName="span"
                      fontSize="text-sm"
                      fontWeight="font-medium"
                      color="#6b7280"
                      textAlign="text-left"
                      margin="0"
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
                height="600px"
                canvas
              >
                <div className="relative w-full h-full">
                  {/* Background shape */}
                  <div
                    className="absolute inset-0 w-[90%] h-[90%] rounded-3xl top-[5%] left-[5%] z-[1]"
                    style={{ backgroundColor: `${accentColor}10` }}
                  />

                  {/* Main Image */}
                  <div className="absolute inset-0 w-[85%] h-[85%] top-[7.5%] left-[7.5%] z-[2]">
                    <CraftImage
                      src={heroImage}
                      alt="Healthcare professional providing quality patient care"
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-2xl"
                      margin=""
                      padding=""
                    />
                  </div>

                  {/* Floating Healthcare Badge */}
                  <div
                    className="absolute bottom-[10%] right-0 z-[3] bg-white rounded-2xl p-4"
                    style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.1)" }}
                  >
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
                      {/* Medical Cross Icon */}
                      <Element
                        is={Box}
                        backgroundColor={accentColor}
                        padding="8px"
                        margin="0"
                        borderRadius="8px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        canvas={false}
                      >
                        <div className="w-4 h-4 text-white">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C13.1 2 14 2.9 14 4V8H18C19.1 8 20 8.9 20 10V14C20 15.1 19.1 16 18 16H14V20C14 21.1 13.1 22 12 22H8C6.9 22 6 21.1 6 20V16H2C0.9 16 0 15.1 0 14V10C0 8.9 0.9 8 2 8H6V4C6 2.9 6.9 2 8 2H12Z" />
                          </svg>
                        </div>
                      </Element>

                      <Element
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
                          margin="0 0 4px 0"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text="Certified"
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-semibold"
                            color={textColor}
                            textAlign="text-left"
                            margin="0"
                          />
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
                            text="Healthcare Provider"
                            tagName="span"
                            fontSize="text-xs"
                            fontWeight="font-normal"
                            color="#6b7280"
                            textAlign="text-left"
                            margin="0"
                          />
                        </Element>
                      </Element>
                    </Element>
                  </div>
                </div>
              </Element>
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Healthcare Hero
        </div>
      )}
    </div>
  );
}

HealthcareHero1.craft = {
  displayName: "Healthcare Hero 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "700px",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",

    // Healthcare Hero specific props
    mainTitle: "Protect patient health for future generations",
    subtitle: "Excellence in Healthcare",
    description:
      "Every patient we treat is a step towards a healthier community, ensuring quality care for all.",
    primaryButtonText: "Book Appointment",
    secondaryButtonText: "Learn More",
    heroImage:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    statValue1: "95%",
    statLabel1: "Patient Satisfaction",
    statValue2: "10,000+",
    statLabel2: "Lives Improved",
    statValue3: "24/7",
    statLabel3: "Emergency Care",
    primaryColor: "#ffffff",
    accentColor: "#0066cc",
    textColor: "#1f2937",
    buttonColor: "#0066cc",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
