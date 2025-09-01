import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticWhatWeDo1Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  buttonText?: string;
  
  // Images
  leftImage?: string;
  rightImage?: string;
  
  // Experience counter
  experienceNumber?: string;
  experienceText?: string;
  
  // Colors and styling
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonColor?: string;
  experienceBadgeColor?: string;
  [key: string]: any;
}

export const CosmeticWhatWeDo1 = ({
  sectionTag = "WHAT WE DO",
  mainTitle = "Transforming beauty confidence",
  description = "We specialize in transforming beauty and boosting confidence through personalized treatments, and enhancing your natural beauty.",
  feature1 = "Restore Firmness and Shape",
  feature2 = "Minimize and Improve Scars",
  feature3 = "Tailored Enhancements for Men",
  buttonText = "Learn More",
  leftImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-1.png",
  rightImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-2.jpg",
  experienceNumber = "25",
  experienceText = "Years of Experience",
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  buttonColor = "#E67E22",
  experienceBadgeColor = "#E67E22",
  ...props
}: CosmeticWhatWeDo1Props) => {
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

  const features = [feature1, feature2, feature3];

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
          id="cosmeticWhatWeDoContainer"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main 3-Column Grid */}
          <Element
            is={Grid}
            canvas
            columns={3}
            autoFit={false}
            minColumnWidth="300px"
            gap="48px"
            autoRows="auto"
          >
            {/* Left Column - Male Model Image */}
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
                <CraftImage
                  src={leftImage}
                  alt="Male cosmetic surgery consultation model"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius=""
                  margin=""
                  padding=""
                />
              </Element>
            </Element>

            {/* Middle Column - Content */}
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
                margin="0 0 32px 0"
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

              {/* Features List */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas
              >
                {features.map((feature, index) => (
                  <Element
                    key={index}
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
                        text={feature}
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-medium"
                        color={`text-[${textColor}]`}
                        textAlign="text-left"
                      />
                    </Element>
                  </Element>
                ))}
              </Element>

              {/* Learn More Button with Arrow */}
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
                    size="sm"
                    backgroundColor={buttonColor}
                    textColor="#ffffff"
                    borderRadius="9999px"
                    padding="12px 24px"
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
                  <div className="w-6 h-6 text-orange-500">
                    <svg viewBox="0 0 15 15" fill="currentColor">
                      <path d="M12.157 4.14171L1.7154 14.5833L0 12.8679L10.4404 2.42631H1.23863V0H14.5833V13.3447H12.157V4.14171Z" />
                    </svg>
                  </div>
                </Element>
              </Element>
            </Element>

            {/* Right Column - Treatment Image with Experience Badge */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Container with relative positioning for overlays */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <div className="relative w-full h-[600px]">
                  {/* Main Treatment Image */}
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
                      src={rightImage}
                      alt="Professional cosmetic treatment in progress"
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-3xl"
                      margin=""
                      padding=""
                    />
                  </Element>

                  {/* Experience Badge - Positioned absolutely */}
                  <div className="absolute bottom-8 left-8 z-10">
                    <div 
                      className="rounded-full px-6 py-4 text-center shadow-lg"
                      style={{ backgroundColor: experienceBadgeColor }}
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
                          text={`${experienceNumber}+`}
                          tagName="h3"
                          fontSize="text-2xl md:text-3xl"
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
                          fontWeight="font-medium"
                          color="text-white"
                          textAlign="text-center"
                          margin="0"
                        />
                      </Element>
                    </div>
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
          Cosmetic What We Do
        </div>
      )}
    </div>
  );
};

CosmeticWhatWeDo1.craft = {
  displayName: "Cosmetic What We Do 1",
  props: {
    sectionTag: "WHAT WE DO",
    mainTitle: "Transforming beauty confidence",
    description: "We specialize in transforming beauty and boosting confidence through personalized treatments, and enhancing your natural beauty.",
    feature1: "Restore Firmness and Shape",
    feature2: "Minimize and Improve Scars",
    feature3: "Tailored Enhancements for Men",
    buttonText: "Learn More",
    leftImage: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-1.png",
    rightImage: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-2.jpg",
    experienceNumber: "25",
    experienceText: "Years of Experience",
    backgroundColor: "#F8F5F0",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    buttonColor: "#E67E22",
    experienceBadgeColor: "#E67E22",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};