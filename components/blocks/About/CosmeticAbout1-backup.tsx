import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface CosmeticAbout1Props extends SectionProps {
  // Content
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;

  // Features list
  feature1?: string;
  feature2?: string;
  feature3?: string;

  // Images
  mainImage?: string;
  secondaryImage?: string;
  experienceImage?: string;

  // Contact
  contactText?: string;
  phoneNumber?: string;

  // Colors and styling
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonColor?: string;
}

export function CosmeticAbout1({
  sectionTag = "ABOUT US",
  mainTitle = "Your journey to radiant confidence",
  description = "Discover personalized care & expertise at our clinic, where we blend artistry and precision to enhance your natural beauty and boost your confidence.",
  buttonText = "More About",
  feature1 = "Your Beauty, Our Expertise",
  feature2 = "Where Science Meets Beauty",
  feature3 = "Cutting-Edge Techniques",
  mainImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-1.jpg",
  secondaryImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-2.jpg",
  experienceImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-experience-image.jpg",
  contactText = "Need Help!",
  phoneNumber = "(+22) 123 456 789",
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  buttonColor = "#E67E22",
  ...props
}: CosmeticAbout1Props) {
  const {
    connectors: { connect, drag },
    selected,
    hovered,
  } = useNode((state) => ({
    selected: state.events.selected,
    hovered: state.events.hovered,
  }));

  // Set section defaults
  const sectionProps = {
    backgroundColor: backgroundColor,
    padding: "0",
    minHeight: "auto",
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
      <Section {...sectionProps}>
        <Element
          id="cosmeticAboutContent"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main Grid Container */}
          <Element
            is={Grid}
            canvas
            columns={2}
            autoFit={false}
            minColumnWidth="350px"
            gap="60px"
            autoRows="auto"
          >
            {/* Left Column - Images */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Images Grid Container */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas
              >
                {/* Top Left Icon */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  canvas={false}
                >
                  <div className="relative w-full h-0">
                    <div className="absolute -top-8 -left-8 w-16 h-16 flex items-center justify-center z-10">
                      <svg
                        viewBox="0 0 24 24"
                        fill={accentColor}
                        className="w-12 h-12"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  </div>
                </Element>

                {/* Main Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 20px 0"
                  display="block"
                  width="100%"
                  height="400px"
                  canvas
                >
                  <CraftImage
                    src={mainImage}
                    alt="Professional cosmetic treatment consultation"
                    width="200px"
                    height="200px"
                    objectFit="object-cover"
                    borderRadius="rounded-3xl"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Bottom Row - Secondary Image and Experience Badge */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="start"
                  gap="gap-4"
                  margin="0"
                  wrap="nowrap"
                >
                  {/* Secondary Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="55%"
                    height="200px"
                    canvas
                  >
                    <CraftImage
                      src={secondaryImage}
                      alt="Advanced cosmetic treatment procedure"
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-3xl"
                      margin=""
                      padding=""
                    />
                  </Element>

                  {/* Experience Badge */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="40%"
                    height="150px"
                    canvas
                  >
                    <CraftImage
                      src={experienceImage}
                      alt="15+ Years of Experience Badge"
                      width="w-full"
                      height="h-full"
                      objectFit="object-contain"
                      borderRadius="rounded-full"
                      margin=""
                      padding=""
                    />
                  </Element>
                </Element>
              </Element>
            </Element>

            {/* Right Column - Content */}
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
              {/* Section Tag */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-3"
                margin="mb-4"
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
                      fill={accentColor}
                      className="w-5 h-5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
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
                    text={sectionTag}
                    tagName="p"
                    fontSize="text-sm"
                    fontWeight="font-semibold"
                    color={`text-[${accentColor}]`}
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
                margin="0 0 20px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={mainTitle}
                  tagName="h2"
                  fontSize="text-3xl md:text-4xl lg:text-5xl"
                  fontWeight="font-bold"
                  color={`text-[${textColor}]`}
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
                margin="0 0 24px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={description}
                  tagName="p"
                  fontSize="text-base md:text-lg"
                  fontWeight="font-normal"
                  color={`text-[${textColor}]`}
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                  margin="0"
                  opacity="0.8"
                />
              </Element>

              {/* Features List */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas
              >
                {/* Feature 1 */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin="mb-3"
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
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill={accentColor}
                        className="w-4 h-4"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
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
                      text={feature1}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color={`text-[${textColor}]`}
                      textAlign="text-left"
                    />
                  </Element>
                </Element>

                {/* Feature 2 */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin="mb-3"
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
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill={accentColor}
                        className="w-4 h-4"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
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
                      text={feature2}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color={`text-[${textColor}]`}
                      textAlign="text-left"
                    />
                  </Element>
                </Element>

                {/* Feature 3 */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="center"
                  gap="gap-3"
                  margin="mb-3"
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
                    <div className="w-5 h-5 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill={accentColor}
                        className="w-4 h-4"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
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
                      text={feature3}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color={`text-[${textColor}]`}
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              </Element>

              {/* Bottom Section - Button and Contact */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                gap="gap-8"
                margin="0"
                wrap="wrap"
              >
                {/* Button with Arrow */}
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
                      text={buttonText}
                      size="lg"
                      backgroundColor={buttonColor}
                      textColor="#ffffff"
                      borderRadius="9999px"
                      padding="16px 32px"
                      width="w-auto"
                    />
                  </Element>

                  <Element
                    is={Box}
                    backgroundColor={`${buttonColor}15`}
                    padding="14px"
                    margin="0"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    canvas={false}
                  >
                    <div className="w-5 h-5" style={{ color: buttonColor }}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6-6 6-1.41-1.41z" />
                      </svg>
                    </div>
                  </Element>
                </Element>

                {/* Contact Information */}
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
                  {/* Phone Icon */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas={false}
                  >
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        fill={accentColor}
                        className="w-6 h-6"
                      >
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                      </svg>
                    </div>
                  </Element>

                  {/* Contact Text and Number */}
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
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={contactText}
                        tagName="p"
                        fontSize="text-sm"
                        fontWeight="font-medium"
                        color={`text-[${textColor}]`}
                        textAlign="text-left"
                        margin="0"
                        opacity="0.7"
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
                        text={phoneNumber}
                        tagName="p"
                        fontSize="text-base"
                        fontWeight="font-bold"
                        color={`text-[${textColor}]`}
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Cosmetic About
        </div>
      )}
    </div>
  );
}

CosmeticAbout1.craft = {
  displayName: "Cosmetic About 1",
  props: {
    // Section props
    backgroundColor: "#F8F5F0",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding:
      "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",

    // Content props
    sectionTag: "ABOUT US",
    mainTitle: "Your journey to radiant confidence",
    description:
      "Discover personalized care & expertise at our clinic, where we blend artistry and precision to enhance your natural beauty and boost your confidence.",
    buttonText: "More About",
    feature1: "Your Beauty, Our Expertise",
    feature2: "Where Science Meets Beauty",
    feature3: "Cutting-Edge Techniques",
    mainImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-1.jpg",
    secondaryImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-2.jpg",
    experienceImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-experience-image.jpg",
    contactText: "Need Help!",
    phoneNumber: "(+22) 123 456 789",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    buttonColor: "#E67E22",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};
