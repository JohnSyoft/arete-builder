import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticAbout1Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  feature1?: string;
  feature2?: string;
  feature3?: string;
  buttonText?: string;
  contactText?: string;
  phoneNumber?: string;
  mainImage?: string;
  secondaryImage?: string;
  experienceImage?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonColor?: string;
  padding?: string;
  [key: string]: any;
}

export const CosmeticAbout1 = ({
  sectionTag = "ABOUT US",
  mainTitle = "Expert Care for Your Beauty Journey",
  description = "We provide comprehensive cosmetic treatments with advanced technology and experienced professionals to help you achieve your beauty goals safely and effectively.",
  feature1 = "Advanced Technology & Equipment",
  feature2 = "Certified Professional Staff",
  feature3 = "Personalized Treatment Plans",
  buttonText = "Book Now",
  contactText = "BOOK YOUR APPOINTMENT",
  phoneNumber = "(+22) 123 456 789",
  mainImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-1.jpg",
  secondaryImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-2.jpg",
  experienceImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-experience-image.jpg",
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  buttonColor = "#E67E22",
  ...props
}: CosmeticAbout1Props) => {
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
          id="cosmeticAboutContainer"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Main Row Container */}
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="stretch"
            gap="gap-16"
            margin="0"
            wrap="nowrap"
          >
            {/* Left Container - Images */}
            <Element
              id="imagesContainer"
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="50%"
              canvas
            >
              {/* Images Inner Container with Position Relative */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <div className="relative w-full h-[600px]">
                  {/* Star decoration - Top Left */}
                  <div className="absolute -top-8 -left-8 w-16 h-16 flex items-center justify-center z-10">
                    <svg
                      viewBox="0 0 24 24"
                      fill={accentColor}
                      className="w-12 h-12"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>

                  {/* Main Large Image - Positioned absolutely to take most space */}
                  <div className="absolute top-0 left-0 w-[75%] h-[85%]">
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
                        src={mainImage}
                        alt="Professional cosmetic treatment consultation"
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-3xl"
                        margin=""
                        padding=""
                      />
                    </Element>
                  </div>

                  {/* Secondary Image - Positioned in top right, overlapping */}
                  <div className="absolute top-[15%] right-0 w-[50%] h-[60%] z-10">
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
                  </div>

                  {/* Experience Badge - Positioned over the intersection */}
                  <div className="absolute bottom-[15%] right-[10%] w-32 h-32 z-20">
                    <div className="w-full h-full relative">
                      {/* Circular Text Path Background */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="w-full h-full animate-spin-slow"
                          style={{ animationDuration: "20s" }}
                          viewBox="0 0 250 250"
                        >
                          <defs>
                            <path
                              id="circle-path"
                              d="M 125, 125 m -100, 0 a 100,100 0 1,1 200,0 a 100,100 0 1,1 -200,0"
                            />
                          </defs>
                          <text
                            className="text-xs"
                            fill={accentColor}
                            fontSize="14"
                          >
                            <textPath href="#circle-path" startOffset="0%">
                              15+ Years of Experience * 15+ Years of Experience
                              *
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      {/* Center Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                          <svg
                            viewBox="0 0 24 24"
                            fill={accentColor}
                            className="w-8 h-8"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Element>
            </Element>

            {/* Right Container - Content */}
            <Element
              id="contentContainer"
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="start"
              width="50%"
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

              {/* Two Column Content Section */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="start"
                gap="gap-8"
                margin="mb-8"
                wrap="nowrap"
              >
                {/* Left Content - Features List */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="60%"
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

                {/* Right Content - Experience Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="40%"
                  canvas
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    width="100%"
                    height="180px"
                    canvas
                  >
                    <CraftImage
                      src={experienceImage}
                      alt="Cosmetic clinic experience image"
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      borderRadius="rounded-3xl"
                      margin=""
                      padding=""
                    />
                  </Element>
                </Element>
              </Element>

              {/* Bottom Section - Contact and Button */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                gap="gap-6"
                margin="0"
                wrap="wrap"
              >
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
                    <div className="w-10 h-10 flex items-center justify-center">
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
                        tagName="h3"
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
                        text={phoneNumber}
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

                {/* Button with Arrow */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
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
            </Element>
          </Element>
        </Element>
      </Section>
    </div>
  );
};

CosmeticAbout1.craft = {
  displayName: "Cosmetic About 1",
  props: {
    sectionTag: "ABOUT US",
    mainTitle: "Expert Care for Your Beauty Journey",
    description:
      "We provide comprehensive cosmetic treatments with advanced technology and experienced professionals to help you achieve your beauty goals safely and effectively.",
    feature1: "Advanced Technology & Equipment",
    feature2: "Certified Professional Staff",
    feature3: "Personalized Treatment Plans",
    buttonText: "Book Now",
    contactText: "BOOK YOUR APPOINTMENT",
    phoneNumber: "(+22) 123 456 789",
    mainImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-1.jpg",
    secondaryImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-img-2.jpg",
    experienceImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/about-experience-image.jpg",
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
