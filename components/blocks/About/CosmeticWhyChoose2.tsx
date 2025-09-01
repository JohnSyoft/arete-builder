import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticWhyChoose2Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  detailedDescription?: string;
  image1?: string;
  image2?: string;
  experienceYears?: string;
  experienceText?: string;
  contactTitle?: string;
  contactNumber?: string;
  authorImage?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  cardBackgroundColor?: string;
  [key: string]: any;
}

export const CosmeticWhyChoose2 = ({
  sectionTag = "WHY CHOOSE US",
  mainTitle = "Experience the art of beauty with expert hands",
  description = "Experience personalized care and transformative results with our expert team, dedicated to enhancing your techniques and exceptional service.",
  detailedDescription = "Delivering Exceptional Care Expert Treatments, Solutions Your Beauty, Boost Confidence, and Ensure Outstanding Results with Support Every Step of Your Journey.",
  image1 = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/why-choose-image-1.jpg",
  image2 = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/why-choose-image-2.jpg",
  experienceYears = "25",
  experienceText = "YEARS EXPERIENCE",
  contactTitle = "Contact Us:",
  contactNumber = "(+22) 123 456 789",
  authorImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-2.jpg",
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  cardBackgroundColor = "#FFFFFF",
  ...props
}: CosmeticWhyChoose2Props) => {
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
          id="cosmeticWhyChoose2Container"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main Content Grid */}
          <Element
            is={Grid}
            canvas
            columns={2}
            autoFit={false}
            minColumnWidth="400px"
            gap="64px"
            autoRows="auto"
          >
            {/* Left Column - Images Section */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Images Container */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <div className="relative h-[500px]">
                  {/* Image 1 - Left positioned */}
                  <div className="absolute top-0 left-0 w-[48%] h-[80%] z-10">
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      width="100%"
                      height="100%"
                      canvas
                    >
                      <CraftImage
                        src={image1}
                        alt="Professional cosmetic treatment"
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-3xl"
                        margin=""
                        padding=""
                      />
                    </Element>
                  </div>

                  {/* Image 2 - Right positioned, overlapping */}
                  <div className="absolute top-[15%] right-0 w-[48%] h-[80%] z-20">
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      width="100%"
                      height="100%"
                      canvas
                    >
                      <CraftImage
                        src={image2}
                        alt="Beauty treatment expertise"
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-3xl"
                        margin=""
                        padding=""
                      />
                    </Element>
                  </div>

                  {/* Experience Badge - Positioned over images */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-30">
                    <Element
                      is={Box}
                      backgroundColor={accentColor}
                      padding="20px 30px"
                      margin="0"
                      display="block"
                      borderRadius="15px"
                      canvas={false}
                    >
                      <div className="text-center">
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="0"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={experienceYears}
                            tagName="h3"
                            fontSize="text-3xl md:text-4xl"
                            fontWeight="font-bold"
                            color="text-white"
                            textAlign="text-center"
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
                            text={experienceText}
                            tagName="p"
                            fontSize="text-sm"
                            fontWeight="font-semibold"
                            color="text-white"
                            textAlign="text-center"
                            margin="0"
                            letterSpacing="tracking-[0.1em]"
                          />
                        </Element>
                      </div>
                    </Element>
                  </div>
                </div>
              </Element>
            </Element>

            {/* Right Column - Content Section */}
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
              {/* Section Tag with Star */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-3"
                margin="mb-6"
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
                    tagName="h3"
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
                margin="0 0 24px 0"
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
                />
              </Element>

              {/* Detailed Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={detailedDescription}
                  tagName="h3"
                  fontSize="text-xl md:text-2xl"
                  fontWeight="font-bold"
                  color={`text-[${textColor}]`}
                  textAlign="text-left"
                  lineHeight="leading-relaxed"
                  margin="0"
                />
              </Element>

              {/* Contact Section */}
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
                {/* Author Image */}
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
                    width="50px"
                    height="50px"
                    canvas
                  >
                    <CraftImage
                      src={authorImage}
                      alt="Contact representative"
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-full"
                      margin=""
                      padding=""
                    />
                  </Element>
                </Element>

                {/* Phone Icon */}
                <Element
                  is={Box}
                  backgroundColor={accentColor}
                  padding="12px"
                  margin="0"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <div className="w-5 h-5 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                </Element>

                {/* Contact Information */}
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
                      text={contactTitle}
                      tagName="h4"
                      fontSize="text-lg"
                      fontWeight="font-bold"
                      color={`text-[${textColor}]`}
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
                      text={contactNumber}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-normal"
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
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Why Choose Us 2
        </div>
      )}
    </div>
  );
};

CosmeticWhyChoose2.craft = {
  displayName: "Cosmetic Why Choose Us 2",
  props: {
    sectionTag: "WHY CHOOSE US",
    mainTitle: "Experience the art of beauty with expert hands",
    description:
      "Experience personalized care and transformative results with our expert team, dedicated to enhancing your techniques and exceptional service.",
    detailedDescription:
      "Delivering Exceptional Care Expert Treatments, Solutions Your Beauty, Boost Confidence, and Ensure Outstanding Results with Support Every Step of Your Journey.",
    image1:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/why-choose-image-1.jpg",
    image2:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/why-choose-image-2.jpg",
    experienceYears: "25",
    experienceText: "YEARS EXPERIENCE",
    contactTitle: "Contact Us:",
    contactNumber: "(+22) 123 456 789",
    authorImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/author-2.jpg",
    backgroundColor: "#F8F5F0",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    cardBackgroundColor: "#FFFFFF",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
