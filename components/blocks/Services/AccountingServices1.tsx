import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Service {
  id: string;
  title: string;
  icon: string;
  image: string;
  link: string;
}

interface AccountingServices1Props extends SectionProps {
  // Services specific props
  title?: string;
  description?: string;
  services?: Service[];
  // Settings
  showTitle?: boolean;
  showDescription?: boolean;
  showNavigation?: boolean;
  autoPlay?: boolean;
  slidesPerView?: number;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function AccountingServices1({
  title = "Why choose us as your accountant consultant?",
  description = "We put a strong focus on the needs of your business to figure out solutions that best fits your demand.",
  services = [
    {
      id: "service-1",
      title: "Targeted growth",
      icon: "🏆",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=690&fit=crop",
      link: "/services/targeted-growth"
    },
    {
      id: "service-2",
      title: "Conversion strategy",
      icon: "💰",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=598&h=690&fit=crop",
      link: "/services/conversion-strategy"
    },
    {
      id: "service-3",
      title: "Competitor research",
      icon: "🎯",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=690&fit=crop",
      link: "/services/competitor-research"
    },
    {
      id: "service-4",
      title: "Marketing strategy",
      icon: "📈",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=690&fit=crop",
      link: "/services/marketing-strategy"
    },
    {
      id: "service-5",
      title: "Financial planning",
      icon: "📊",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=598&h=690&fit=crop",
      link: "/services/financial-planning"
    }
  ],
  showTitle = true,
  showDescription = true,
  showNavigation = true,
  autoPlay = true,
  slidesPerView = 5,
  backgroundColor = "#f8fafc",
  textColor = "#1f2937",
  accentColor = "#fbbf24",
  ...props
}: AccountingServices1Props) {
  // Set section defaults for services
  const servicesProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...servicesProps}>
      <Element
        id="accountingServicesContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="mb-12"
          display="block"
          canvas={false}
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            gap="gap-8"
            margin=""
          >
            {/* Title and Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              width="w-2/3"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="start"
                alignItems="start"
                gap="gap-4"
                margin=""
              >
                {showTitle && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={title}
                      tagName="h2"
                      fontSize="text-3xl sm:text-4xl"
                      fontWeight="font-bold"
                      color={textColor}
                      textAlign="text-left"
                      lineHeight="leading-tight"
                    />
                  </Element>
                )}

                {showDescription && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={description}
                      tagName="p"
                      fontSize="text-lg"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                    />
                  </Element>
                )}
              </Element>
            </Element>

            {/* Navigation */}
            {showNavigation && (
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                canvas={false}
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="end"
                  alignItems="center"
                  gap="gap-2"
                  margin=""
                >
                  <Element
                    is={Box}
                    backgroundColor="bg-white"
                    padding="p-3"
                    margin=""
                    display="block"
                    width="w-12"
                    height="h-12"
                    borderRadius="rounded-full"
                    shadow="lg"
                    className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    canvas={false}
                  >
                    <CraftText
                      text="←"
                      tagName="span"
                      fontSize="text-lg"
                      color={textColor}
                      textAlign="text-center"
                    />
                  </Element>
                  
                  <Element
                    is={Box}
                    backgroundColor="bg-white"
                    padding="p-3"
                    margin=""
                    display="block"
                    width="w-12"
                    height="h-12"
                    borderRadius="rounded-full"
                    shadow="lg"
                    className="hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    canvas={false}
                  >
                    <CraftText
                      text="→"
                      tagName="span"
                      fontSize="text-lg"
                      color={textColor}
                      textAlign="text-center"
                    />
                  </Element>
                </Element>
              </Element>
            )}
          </Element>
        </Element>

        {/* Services Carousel */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          width="w-full"
          overflow="overflow-x-auto"
          className="scrollbar-hide"
          canvas={false}
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="start"
            alignItems="stretch"
            gap="gap-7"
            margin=""
            wrap="nowrap"
          >
            {services.map((service) => (
              <Element
                key={service.id}
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin=""
                display="block"
                width="w-80"
                flexShrink="flex-shrink-0"
                canvas={false}
              >
                <Element
                  is={Card}
                  variant="flat"
                  shadow="lg"
                  borderRadius="rounded-lg"
                  backgroundColor="bg-white"
                  borderColor=""
                  padding="0"
                  margin=""
                  hoverable={true}
                  clickable={true}
                  overflow="hidden"
                  border={false}
                  className="group hover:shadow-2xl transition-all duration-500 hover:scale-105"
                  canvas
                >
                  {/* Service Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    height="h-80"
                    position="relative"
                    overflow="hidden"
                    canvas={false}
                  >
                    <CraftImage
                      src={service.image}
                      alt={service.title}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      margin=""
                      padding=""
                    />
                    
                    {/* Overlay */}
                    <Element
                      is={Box}
                      backgroundColor="bg-gradient-to-t from-black/80 to-transparent"
                      padding="0"
                      margin=""
                      display="block"
                      position="absolute"
                      top="top-0"
                      left="left-0"
                      right="right-0"
                      bottom="bottom-0"
                      canvas={false}
                    />

                    {/* Service Content */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      position="absolute"
                      top="top-0"
                      left="left-0"
                      right="right-0"
                      bottom="bottom-0"
                      canvas={false}
                    >
                      <Element
                        is={Flex}
                        canvas
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="start"
                        gap="gap-4"
                        margin="p-8 h-full"
                      >
                        {/* Icon */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={service.icon}
                            tagName="span"
                            fontSize="text-4xl"
                            textAlign="text-left"
                          />
                        </Element>

                        {/* Title and Arrow */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          width="w-full"
                          canvas={false}
                        >
                          <Element
                            is={Flex}
                            canvas
                            flexDirection="row"
                            justifyContent="space-between"
                            alignItems="center"
                            gap="gap-4"
                            margin=""
                          >
                            <Element
                              is={Box}
                              backgroundColor="transparent"
                              padding="0"
                              margin=""
                              display="block"
                              width="w-3/4"
                              canvas={false}
                            >
                              <CraftText
                                text={service.title}
                                tagName="h3"
                                fontSize="text-xl"
                                fontWeight="font-semibold"
                                color="text-white"
                                textAlign="text-left"
                                lineHeight="leading-tight"
                                className="group-hover:text-yellow-400 transition-colors duration-200"
                              />
                            </Element>

                            <Element
                              is={Box}
                              backgroundColor="bg-yellow-400"
                              padding="p-3"
                              margin=""
                              display="block"
                              width="w-12"
                              height="h-12"
                              borderRadius="rounded-full"
                              className="group-hover:bg-yellow-300 transition-colors duration-200"
                              canvas={false}
                            >
                              <CraftText
                                text="→"
                                tagName="span"
                                fontSize="text-lg"
                                color="text-gray-800"
                                textAlign="text-center"
                              />
                            </Element>
                          </Element>
                        </Element>
                      </Element>
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingServices1.craft = {
  displayName: "Accounting Services 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Services specific props
    title: "Why choose us as your accountant consultant?",
    description: "We put a strong focus on the needs of your business to figure out solutions that best fits your demand.",
    showTitle: true,
    showDescription: true,
    showNavigation: true,
    autoPlay: true,
    slidesPerView: 5,
    backgroundColor: "#f8fafc",
    textColor: "#1f2937",
    accentColor: "#fbbf24",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
