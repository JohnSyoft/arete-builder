import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticCaseStudies1Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  description?: string;
  buttonText?: string;
  
  // Case Study 1
  caseStudy1Image?: string;
  caseStudy1Title?: string;
  caseStudy1Description?: string;
  caseStudy1Link?: string;
  
  // Case Study 2
  caseStudy2Image?: string;
  caseStudy2Title?: string;
  caseStudy2Description?: string;
  caseStudy2Link?: string;
  
  // Case Study 3
  caseStudy3Image?: string;
  caseStudy3Title?: string;
  caseStudy3Description?: string;
  caseStudy3Link?: string;
  
  // Case Study 4
  caseStudy4Image?: string;
  caseStudy4Title?: string;
  caseStudy4Description?: string;
  caseStudy4Link?: string;
  
  // Styling
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  buttonColor?: string;
  cardBackgroundColor?: string;
  [key: string]: any;
}

export const CosmeticCaseStudies1 = ({
  sectionTag = "CASE STUDY'S",
  mainTitle = "Our remarkable transformation",
  description = "Discover inspiring stories of real transformations at our clinic, where individuals have regained confidence through personalized plastic surgery and beauty treatments.",
  buttonText = "All Case Study's",
  
  caseStudy1Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-1.jpg",
  caseStudy1Title = "Restoring Youthful Radiance",
  caseStudy1Description = "RESTORING YOUTHFUL RADIANCE Home Case Study Contract Dispute...",
  caseStudy1Link = "#",
  
  caseStudy2Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-2.jpg",
  caseStudy2Title = "Natural & Beautiful Results",
  caseStudy2Description = "NATURAL & BEAUTIFUL RESULTS Home Case Study Contract...",
  caseStudy2Link = "#",
  
  caseStudy3Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-3.jpg",
  caseStudy3Title = "Restoring Post-Pregnancy Beauty",
  caseStudy3Description = "RESTORING POST-PREGNANCY BEAUTY Home Case Study Contract Dispute...",
  caseStudy3Link = "#",
  
  caseStudy4Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-4.jpg",
  caseStudy4Title = "A Smoother, Glowing Complexion",
  caseStudy4Description = "A SMOOTHER, GLOWING COMPLEXION Home Case Study Contract...",
  caseStudy4Link = "#",
  
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  buttonColor = "#E67E22",
  cardBackgroundColor = "#FFFFFF",
  ...props
}: CosmeticCaseStudies1Props) => {
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
      image: caseStudy1Image,
      title: caseStudy1Title,
      description: caseStudy1Description,
      link: caseStudy1Link,
    },
    {
      image: caseStudy2Image,
      title: caseStudy2Title,
      description: caseStudy2Description,
      link: caseStudy2Link,
    },
    {
      image: caseStudy3Image,
      title: caseStudy3Title,
      description: caseStudy3Description,
      link: caseStudy3Link,
    },
    {
      image: caseStudy4Image,
      title: caseStudy4Title,
      description: caseStudy4Description,
      link: caseStudy4Link,
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
          id="cosmeticCaseStudiesContainer"
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
            alignItems="start"
            gap="gap-16"
            margin="0"
            wrap="nowrap"
          >
            {/* Left Container - Content */}
            <Element
              id="leftContentContainer"
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              justifyContent="start"
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
                  textAlign="text-left"
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

            {/* Right Container - Case Studies Grid */}
            <Element
              id="caseStudiesGridContainer"
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="60%"
              canvas
            >
              <Element
                is={Grid}
                canvas
                columns={2}
                autoFit={false}
                minColumnWidth="300px"
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
                    borderRadius="20px"
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
                      <div className="group hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                        {/* Case Study Image */}
                        <div className="relative overflow-hidden rounded-t-3xl">
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

                          {/* Overlay Arrow Icon */}
                          <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg
                              viewBox="0 0 15 15"
                              fill="white"
                              className="w-4 h-4"
                            >
                              <path d="M12.157 4.14171L1.7154 14.5833L0 12.8679L10.4404 2.42631H1.23863V0H14.5833V13.3447H12.157V4.14171Z" />
                            </svg>
                          </div>
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
                            margin="0 0 16px 0"
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
                              <div className={`w-4 h-4 text-[${accentColor}]`}>
                                <svg viewBox="0 0 16 16" fill="currentColor">
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
    </div>
  );
};

CosmeticCaseStudies1.craft = {
  displayName: "Cosmetic Case Studies 1",
  props: {
    sectionTag: "CASE STUDY'S",
    mainTitle: "Our remarkable transformation",
    description:
      "Discover inspiring stories of real transformations at our clinic, where individuals have regained confidence through personalized plastic surgery and beauty treatments.",
    buttonText: "All Case Study's",
    
    caseStudy1Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-1.jpg",
    caseStudy1Title: "Restoring Youthful Radiance",
    caseStudy1Description:
      "RESTORING YOUTHFUL RADIANCE Home Case Study Contract Dispute...",
    caseStudy1Link: "#",
    
    caseStudy2Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-2.jpg",
    caseStudy2Title: "Natural & Beautiful Results",
    caseStudy2Description:
      "NATURAL & BEAUTIFUL RESULTS Home Case Study Contract...",
    caseStudy2Link: "#",
    
    caseStudy3Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-3.jpg",
    caseStudy3Title: "Restoring Post-Pregnancy Beauty",
    caseStudy3Description:
      "RESTORING POST-PREGNANCY BEAUTY Home Case Study Contract Dispute...",
    caseStudy3Link: "#",
    
    caseStudy4Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/case-study-image-4.jpg",
    caseStudy4Title: "A Smoother, Glowing Complexion",
    caseStudy4Description:
      "A SMOOTHER, GLOWING COMPLEXION Home Case Study Contract...",
    caseStudy4Link: "#",
    
    backgroundColor: "#F8F5F0",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    buttonColor: "#E67E22",
    cardBackgroundColor: "#FFFFFF",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
