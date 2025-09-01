import { useNode, Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Box } from "@/components/blocks/Basic/Box";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

export interface CosmeticServices1Props extends SectionProps {
  sectionTag?: string;
  mainTitle?: string;
  service1Title?: string;
  service1Description?: string;
  service1Image?: string;
  service2Title?: string;
  service2Description?: string;
  service2Image?: string;
  service3Title?: string;
  service3Description?: string;
  service3Image?: string;
  service4Title?: string;
  service4Description?: string;
  service4Image?: string;
  service5Title?: string;
  service5Description?: string;
  service5Image?: string;
  service6Title?: string;
  service6Description?: string;
  service6Image?: string;
  footerText?: string;
  footerLink?: string;
  footerLinkText?: string;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
  cardBackgroundColor?: string;
  backgroundImage?: string;
  [key: string]: any;
}

export const CosmeticServices1 = ({
  sectionTag = "SERVICES",
  mainTitle = "Explore our wide range of aesthetic treatments",
  service1Title = "Botox And Dermal Fillers",
  service1Description = "Achieve a smoother, appearance with a Botox and dermal fillers.",
  service1Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-1.jpg",
  service2Title = "Laser Skin Or Treatments",
  service2Description = "Achieve a smoother, appearance with a Botox and dermal fillers.",
  service2Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-2.jpg",
  service3Title = "Male Aesthetic Procedures",
  service3Description = "Achieve a smoother, appearance with a Botox and dermal fillers.",
  service3Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-3.jpg",
  service4Title = "Post-Weight Loss Surgery",
  service4Description = "Achieve a smoother, appearance with a Botox and dermal fillers.",
  service4Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-4.jpg",
  service5Title = "Medical Spa & Treatments",
  service5Description = "Achieve a smoother, appearance with a Botox and dermal fillers.",
  service5Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-5.jpg",
  service6Title = "Tighten & Define Neck Contours",
  service6Description = "Achieve a smoother, appearance with a Botox and dermal fillers.",
  service6Image = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-6.jpg",
  footerText = "Free",
  footerLink = "Let's make something great work together. Get Free Quote",
  footerLinkText = "Get Free Quote",
  backgroundColor = "#F8F5F0",
  textColor = "#2D1810",
  accentColor = "#E67E22",
  cardBackgroundColor = "#FFFFFF",
  backgroundImage = "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-bg-shape.svg",
  ...props
}: CosmeticServices1Props) => {
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

  const services = [
    {
      title: service1Title,
      description: service1Description,
      image: service1Image,
    },
    {
      title: service2Title,
      description: service2Description,
      image: service2Image,
    },
    {
      title: service3Title,
      description: service3Description,
      image: service3Image,
    },
    {
      title: service4Title,
      description: service4Description,
      image: service4Image,
    },
    {
      title: service5Title,
      description: service5Description,
      image: service5Image,
    },
    {
      title: service6Title,
      description: service6Description,
      image: service6Image,
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
          id="cosmeticServicesContainer"
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0"
          display="block"
          canvas
        >
          {/* Background Pattern */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas={false}
          >
            <div
              className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
          </Element>

          {/* Main Content Container */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas
          >
            {/* Header Section */}
            <Element
              is={Flex}
              canvas
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="gap-6"
              margin="mb-16"
              wrap="nowrap"
            >
              {/* Section Tag */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="center"
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
                    textAlign="text-center"
                    letterSpacing="tracking-[0.2em]"
                  />
                </Element>
              </Element>

              {/* Main Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
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
            </Element>

            {/* Services Grid */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 64px 0"
              display="block"
              canvas
            >
              <Element
                is={Grid}
                canvas
                columns={3}
                autoFit={true}
                minColumnWidth="350px"
                gap="30px"
                autoRows="auto"
              >
                {services.map((service, index) => (
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
                    {/* Service Card */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <div className="group hover:shadow-lg transition-all duration-300 rounded-3xl overflow-hidden bg-white">
                        {/* Service Image */}
                        <div className="relative overflow-hidden rounded-t-3xl">
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0"
                            display="block"
                            width="100%"
                            height="250px"
                            canvas
                          >
                            <CraftImage
                              src={service.image}
                              alt={service.title}
                              width="w-full"
                              height="h-full"
                              objectFit="object-cover"
                              borderRadius=""
                              margin=""
                              padding=""
                            />
                          </Element>
                        </div>

                        {/* Service Content */}
                        <div className="p-6">
                          {/* Service Title */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0 0 12px 0"
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={service.title}
                              tagName="h3"
                              fontSize="text-xl md:text-2xl"
                              fontWeight="font-bold"
                              color={`text-[${textColor}]`}
                              textAlign="text-left"
                              margin="0"
                              lineHeight="leading-tight"
                            />
                          </Element>

                          {/* Service Description */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0 0 20px 0"
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={service.description}
                              tagName="p"
                              fontSize="text-base"
                              fontWeight="font-normal"
                              color={`text-[${textColor}]`}
                              textAlign="text-left"
                              margin="0"
                              lineHeight="leading-relaxed"
                            />
                          </Element>

                          {/* Arrow Link */}
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin="0"
                            display="flex"
                            justifyContent="start"
                            alignItems="center"
                            canvas={false}
                          >
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center cursor-pointer hover:bg-[${accentColor}] transition-colors duration-300 group`}
                            >
                              <svg
                                viewBox="0 0 15 15"
                                fill="currentColor"
                                className={`w-4 h-4 text-[${accentColor}] group-hover:text-white transition-colors duration-300`}
                              >
                                <path d="M12.157 4.14171L1.7154 14.5833L0 12.8679L10.4404 2.42631H1.23863V0H14.5833V13.3447H12.157V4.14171Z" />
                              </svg>
                            </div>
                          </Element>
                        </div>
                      </div>
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>

            {/* Footer Section */}
            <Element
              is={Flex}
              canvas
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="gap-4"
              margin="0"
              wrap="nowrap"
            >
              {/* Footer Free Text */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={footerText}
                  tagName="span"
                  fontSize="text-4xl md:text-5xl"
                  fontWeight="font-bold"
                  color={`text-[${accentColor}]`}
                  textAlign="text-center"
                  margin="0"
                />
              </Element>

              {/* Footer Link Text */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={footerLink}
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color={`text-[${textColor}]`}
                  textAlign="text-center"
                  margin="0"
                />
              </Element>
            </Element>
          </Element>
        </Element>
      </Section>
    </div>
  );
};

CosmeticServices1.craft = {
  displayName: "Cosmetic Services 1",
  props: {
    sectionTag: "SERVICES",
    mainTitle: "Explore our wide range of aesthetic treatments",
    service1Title: "Botox And Dermal Fillers",
    service1Description:
      "Achieve a smoother, appearance with a Botox and dermal fillers.",
    service1Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-1.jpg",
    service2Title: "Laser Skin Or Treatments",
    service2Description:
      "Achieve a smoother, appearance with a Botox and dermal fillers.",
    service2Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-2.jpg",
    service3Title: "Male Aesthetic Procedures",
    service3Description:
      "Achieve a smoother, appearance with a Botox and dermal fillers.",
    service3Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-3.jpg",
    service4Title: "Post-Weight Loss Surgery",
    service4Description:
      "Achieve a smoother, appearance with a Botox and dermal fillers.",
    service4Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-4.jpg",
    service5Title: "Medical Spa & Treatments",
    service5Description:
      "Achieve a smoother, appearance with a Botox and dermal fillers.",
    service5Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-5.jpg",
    service6Title: "Tighten & Define Neck Contours",
    service6Description:
      "Achieve a smoother, appearance with a Botox and dermal fillers.",
    service6Image:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-image-6.jpg",
    footerText: "Free",
    footerLink: "Let's make something great work together. Get Free Quote",
    footerLinkText: "Get Free Quote",
    backgroundColor: "#F8F5F0",
    textColor: "#2D1810",
    accentColor: "#E67E22",
    cardBackgroundColor: "#FFFFFF",
    backgroundImage:
      "https://demo.awaikenthemes.com/glowix/wp-content/uploads/2025/04/service-bg-shape.svg",
  },
  rules: {
    canDrag: () => true,
    canDrop: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
};
