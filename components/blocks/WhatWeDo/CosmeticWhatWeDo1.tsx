import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticWhatWeDo1Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  buttonText?: string;
  buttonLink?: string;
  leftImage?: string;
  rightImage?: string;
  experienceNumber?: string;
  experienceText?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonColor?: string;
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
  buttonLink = "#",
  leftImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-1.png",
  rightImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-2.jpg",
  experienceNumber = "25",
  experienceText = "Years of Experience",
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  buttonColor = "#E67E22",
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
          {/* Three Column Container */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-8"
            margin="0"
            wrap="nowrap"
          >
            {/* Left Column - First Image */}
            <Element
              id="leftImageContainer"
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="30%"
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
                  alt="Male cosmetic surgery consultation with surgical markings"
                  width="w-full"
                  height="h-full"
                  objectFit="object-cover"
                  borderRadius="rounded-3xl"
                  margin=""
                  padding=""
                />
              </Element>
            </Element>

            {/* Center Column - Content */}
            <Element
              id="centerContentContainer"
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              width="40%"
              canvas
            >
              {/* Section Tag */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={sectionTag}
                  tagName="h3"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  color={`text-[${accentColor}]`}
                  textAlign="text-center"
                  letterSpacing="tracking-[0.2em]"
                  margin="0"
                />
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
                  textAlign="text-center"
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
                  textAlign="text-center"
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
                {/* Feature 1 */}
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
                      tagName="span"
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
                      text={feature2}
                      tagName="span"
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
                      text={feature3}
                      tagName="span"
                      fontSize="text-base"
                      fontWeight="font-medium"
                      color={`text-[${textColor}]`}
                      textAlign="text-left"
                    />
                  </Element>
                </Element>
              </Element>

              {/* Button with Arrow */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="center"
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

            {/* Right Column - Second Image with Experience Badge */}
            <Element
              id="rightImageContainer"
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="30%"
              canvas
            >
              {/* Image Container with Relative Positioning */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <div className="relative w-full h-[600px]">
                  {/* Main Image */}
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
                      alt="Professional cosmetic treatment session"
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-3xl"
                      margin=""
                      padding=""
                    />
                  </Element>

                  {/* Experience Badge Overlay */}
                  <div className="absolute bottom-8 left-8 w-32 h-32">
                    <div
                      className={`w-full h-full bg-[${accentColor}] rounded-full flex flex-col items-center justify-center text-white shadow-lg`}
                    >
                      {/* Experience Number */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <CraftText
                          text={`${experienceNumber}+`}
                          tagName="span"
                          fontSize="text-2xl md:text-3xl"
                          fontWeight="font-bold"
                          color="text-white"
                          textAlign="text-center"
                          margin="0"
                        />
                      </Element>

                      {/* Experience Text */}
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
                          tagName="span"
                          fontSize="text-xs"
                          fontWeight="font-medium"
                          color="text-white"
                          textAlign="text-center"
                          margin="0"
                          lineHeight="leading-tight"
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
    </div>
  );
};

CosmeticWhatWeDo1.craft = {
  displayName: "Cosmetic What We Do 1",
  props: {
    sectionTag: "WHAT WE DO",
    mainTitle: "Transforming beauty confidence",
    description:
      "We specialize in transforming beauty and boosting confidence through personalized treatments, and enhancing your natural beauty.",
    feature1: "Restore Firmness and Shape",
    feature2: "Minimize and Improve Scars",
    feature3: "Tailored Enhancements for Men",
    buttonText: "Learn More",
    buttonLink: "#",
    leftImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-1.png",
    rightImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/what-we-image-2.jpg",
    experienceNumber: "25",
    experienceText: "Years of Experience",
    backgroundColor: "#F8F5F0",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    buttonColor: "#E67E22",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
