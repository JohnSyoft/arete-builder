import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticCaseStudy1Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  
  // Case Study 1
  case1Title?: string;
  case1Description?: string;
  case1Image?: string;
  case1Link?: string;
  
  // Case Study 2
  case2Title?: string;
  case2Description?: string;
  case2Image?: string;
  case2Link?: string;
  
  // Case Study 3
  case3Title?: string;
  case3Description?: string;
  case3Image?: string;
  case3Link?: string;
  
  // Case Study 4
  case4Title?: string;
  case4Description?: string;
  case4Image?: string;
  case4Link?: string;
  
  // Colors and styling
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  cardBackgroundColor?: string;
  [key: string]: any;
}

export const CosmeticCaseStudy1 = ({
  sectionTag = "CASE STUDY'S",
  mainTitle = "Our remarkable transformatioN",
  description = "Discover inspiring stories of real transformations at our clinic, where individuals have regained confidence through personalized plastic surgery and beauty treatments.",
  buttonText = "All Case Study's",
  buttonLink = "#",
  
  case1Title = "Restoring Youthful Radiance",
  case1Description = "RESTORING YOUTHFUL RADIANCE Home Case Study Contract Dispute [...]",
  case1Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-1.jpg",
  case1Link = "#",
  
  case2Title = "Natural & Beautiful Results",
  case2Description = "NATURAL & BEAUTIFUL RESULTS Home Case Study Contract [...]",
  case2Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-2.jpg",
  case2Link = "#",
  
  case3Title = "Restoring Post-Pregnancy Beauty",
  case3Description = "RESTORING POST-PREGNANCY BEAUTY Home Case Study Contract Dispute [...]",
  case3Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-3.jpg",
  case3Link = "#",
  
  case4Title = "A Smoother, Glowing Complexion",
  case4Description = "A SMOOTHER, GLOWING COMPLEXION Home Case Study Contract [...]",
  case4Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-4.jpg",
  case4Link = "#",
  
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  cardBackgroundColor = "#FFFFFF",
  ...props
}: CosmeticCaseStudy1Props) => {
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

  const caseStudies = [
    {
      title: case1Title,
      description: case1Description,
      image: case1Image,
      link: case1Link,
    },
    {
      title: case2Title,
      description: case2Description,
      image: case2Image,
      link: case2Link,
    },
    {
      title: case3Title,
      description: case3Description,
      image: case3Image,
      link: case3Link,
    },
    {
      title: case4Title,
      description: case4Description,
      image: case4Image,
      link: case4Link,
    },
  ];

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
          id="cosmeticCaseStudyContainer"
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
            gap="48px"
            autoRows="auto"
          >
            {/* Left Column - Header Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="start"
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
                  margin="0"
                  lineHeight="leading-relaxed"
                />
              </Element>

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
                    size="sm"
                    backgroundColor={accentColor}
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
                  <div className="w-10 h-10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 15 15"
                      fill={accentColor}
                      className="w-4 h-4"
                    >
                      <path d="M12.157 4.14171L1.7154 14.5833L0 12.8679L10.4404 2.42631H1.23863V0H14.5833V13.3447H12.157V4.14171Z" />
                    </svg>
                  </div>
                </Element>
              </Element>
            </Element>

            {/* Right Column - Case Studies Grid */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              <Element
                is={Grid}
                canvas
                columns={2}
                autoFit={true}
                minColumnWidth="250px"
                gap="30px"
                autoRows="auto"
              >
                {caseStudies.map((caseStudy, index) => (
                  <Element
                    key={index}
                    is={Box}
                    backgroundColor={cardBackgroundColor}
                    padding="0"
                    margin="0"
                    display="block"
                    borderRadius="16px"
                    canvas
                  >
                    {/* Case Study Card */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <div className="group hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden bg-white">
                        {/* Case Study Image */}
                        <div className="relative overflow-hidden">
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0"
                            display="block"
                            width="100%"
                            height="200px"
                            canvas
                          >
                            <CraftImage
                              src={caseStudy.image}
                              alt={caseStudy.title}
                              width="w-full"
                              height="h-full"
                              objectFit="object-cover"
                              borderRadius=""
                              margin=""
                              padding=""
                            />
                          </Element>

                          {/* Hover Overlay */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                        </div>

                        {/* Case Study Content */}
                        <div className="p-6">
                          {/* Case Study Title */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0 0 12px 0"
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={caseStudy.title}
                              tagName="h4"
                              fontSize="text-lg md:text-xl"
                              fontWeight="font-bold"
                              color={`text-[${textColor}]`}
                              textAlign="text-left"
                              margin="0"
                              lineHeight="leading-tight"
                            />
                          </Element>

                          {/* Case Study Description */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0 0 20px 0"
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={caseStudy.description}
                              tagName="p"
                              fontSize="text-sm"
                              fontWeight="font-normal"
                              color={`text-[${textColor}]`}
                              textAlign="text-left"
                              margin="0"
                              lineHeight="leading-relaxed"
                            />
                          </Element>

                          {/* Read More Link */}
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
                              <CraftText
                                text="Read More"
                                tagName="span"
                                fontSize="text-sm"
                                fontWeight="font-semibold"
                                color={`text-[${accentColor}]`}
                                textAlign="text-left"
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
                              <div className="w-4 h-4 flex items-center justify-center">
                                <svg
                                  viewBox="0 0 16 16"
                                  fill={accentColor}
                                  className="w-4 h-4"
                                >
                                  <path d="M11.911 12.019L10.4603 12.019L10.4603 7.01133L4.77104 12.3609L3.82557 11.4131L9.32414 6.02758L4.405 6.01418L4.405 4.51297L11.911 4.51297L11.911 12.019Z" />
                                </svg>
                              </div>
                            </Element>
                          </Element>
                        </div>
                      </div>
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>
          </Element>
        </Element>
      </Section>

      {/* Selection indicators */}
      {(selected || hovered) && (
        <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded z-40">
          Case Study Section
        </div>
      )}
    </div>
  );
};

CosmeticCaseStudy1.craft = {
  displayName: "Cosmetic Case Study 1",
  props: {
    sectionTag: "CASE STUDY'S",
    mainTitle: "Our remarkable transformatioN",
    description: "Discover inspiring stories of real transformations at our clinic, where individuals have regained confidence through personalized plastic surgery and beauty treatments.",
    buttonText: "All Case Study's",
    buttonLink: "#",
    
    case1Title: "Restoring Youthful Radiance",
    case1Description: "RESTORING YOUTHFUL RADIANCE Home Case Study Contract Dispute [...]",
    case1Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-1.jpg",
    case1Link: "#",
    
    case2Title: "Natural & Beautiful Results",
    case2Description: "NATURAL & BEAUTIFUL RESULTS Home Case Study Contract [...]",
    case2Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-2.jpg",
    case2Link: "#",
    
    case3Title: "Restoring Post-Pregnancy Beauty",
    case3Description: "RESTORING POST-PREGNANCY BEAUTY Home Case Study Contract Dispute [...]",
    case3Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-3.jpg",
    case3Link: "#",
    
    case4Title: "A Smoother, Glowing Complexion",
    case4Description: "A SMOOTHER, GLOWING COMPLEXION Home Case Study Contract [...]",
    case4Image: "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-4.jpg",
    case4Link: "#",
    
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
