import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ServiceFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface AccountingServicesDetails1Props extends SectionProps {
  // Service details specific props
  pageTitle?: string;
  pageSubtitle?: string;
  backgroundImage?: string;
  serviceTitle?: string;
  serviceDescription?: string;
  serviceImage?: string;
  features?: ServiceFeature[];
  pricing?: {
    title: string;
    price: string;
    period: string;
    features: string[];
    buttonText: string;
  };
  // Settings
  showPageTitle?: boolean;
  showServiceDetails?: boolean;
  showFeatures?: boolean;
  showPricing?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function AccountingServicesDetails1({
  pageTitle = "Service Details",
  pageSubtitle = "Comprehensive accounting solutions",
  backgroundImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=500&fit=crop",
  serviceTitle = "Corporate Finance Services",
  serviceDescription = "We provide comprehensive corporate finance services to help your business grow and succeed. Our expert team offers strategic financial planning, investment analysis, and risk management solutions tailored to your specific needs.",
  serviceImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
  features = [
    {
      id: "feature-1",
      title: "Financial Planning",
      description: "Strategic financial planning to optimize your business growth and profitability.",
      icon: "📊"
    },
    {
      id: "feature-2",
      title: "Investment Analysis",
      description: "Comprehensive analysis of investment opportunities and risk assessment.",
      icon: "💰"
    },
    {
      id: "feature-3",
      title: "Risk Management",
      description: "Advanced risk management strategies to protect your business assets.",
      icon: "🛡️"
    },
    {
      id: "feature-4",
      title: "Tax Optimization",
      description: "Tax planning and optimization strategies to minimize your tax burden.",
      icon: "📋"
    },
    {
      id: "feature-5",
      title: "Cash Flow Management",
      description: "Effective cash flow management to ensure business stability and growth.",
      icon: "💳"
    },
    {
      id: "feature-6",
      title: "Financial Reporting",
      description: "Comprehensive financial reporting and analysis for informed decision making.",
      icon: "📈"
    }
  ],
  pricing = {
    title: "Corporate Finance Package",
    price: "$2,500",
    period: "per month",
    features: [
      "Monthly financial planning sessions",
      "Quarterly investment analysis",
      "Risk assessment reports",
      "Tax optimization strategies",
      "Cash flow management",
      "Financial reporting and analysis",
      "24/7 support and consultation"
    ],
    buttonText: "Get Started"
  },
  showPageTitle = true,
  showServiceDetails = true,
  showFeatures = true,
  showPricing = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#fbbf24",
  ...props
}: AccountingServicesDetails1Props) {
  // Set section defaults for service details
  const serviceDetailsProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...serviceDetailsProps}>
      <Element
        id="accountingServicesDetailsContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Page Title Section */}
        {showPageTitle && (
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="mb-16"
            display="block"
            position="relative"
            width="w-full"
            height="h-96"
            overflow="hidden"
            canvas={false}
          >
            {/* Background Image */}
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
              <CraftImage
                src={backgroundImage}
                alt="Service Details"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                margin=""
                padding=""
              />
            </Element>

            {/* Dark Overlay */}
            <Element
              is={Box}
              backgroundColor="bg-black"
              padding="0"
              margin=""
              display="block"
              position="absolute"
              top="top-0"
              left="left-0"
              right="right-0"
              bottom="bottom-0"
              className="opacity-60"
              canvas={false}
            />

            {/* Content */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              position="relative"
              width="w-full"
              height="h-full"
              canvas={false}
            >
              <Element
                is={Flex}
                canvas
                flexDirection="column"
                justifyContent="center"
                alignItems="start"
                gap="gap-4"
                margin="h-full px-8 py-16"
              >
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
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin=""
                  >
                    <Element
                      is={Box}
                      backgroundColor="bg-yellow-400"
                      padding="0"
                      margin=""
                      display="block"
                      width="w-8"
                      height="h-1"
                      canvas={false}
                    />
                    
                    <CraftText
                      text={pageTitle}
                      tagName="h1"
                      fontSize="text-2xl sm:text-3xl"
                      fontWeight="font-semibold"
                      color="text-white"
                      textAlign="text-left"
                      className="drop-shadow-lg"
                    />
                  </Element>
                </Element>

                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin=""
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={pageSubtitle}
                    tagName="h2"
                    fontSize="text-4xl sm:text-5xl"
                    fontWeight="font-medium"
                    color="text-white"
                    textAlign="text-left"
                    lineHeight="leading-tight"
                    className="drop-shadow-lg"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        )}

        {/* Main Content */}
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
            flexDirection="column"
            justifyContent="start"
            alignItems="start"
            gap="gap-16"
            margin=""
          >
            {/* Service Details Section */}
            {showServiceDetails && (
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
                  alignItems="start"
                  gap="gap-12"
                  margin=""
                >
                  {/* Service Content */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-1/2"
                    canvas={false}
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="start"
                      alignItems="start"
                      gap="gap-6"
                      margin=""
                    >
                      <CraftText
                        text={serviceTitle}
                        tagName="h2"
                        fontSize="text-3xl sm:text-4xl"
                        fontWeight="font-bold"
                        color={textColor}
                        textAlign="text-left"
                        lineHeight="leading-tight"
                      />
                      
                      <CraftText
                        text={serviceDescription}
                        tagName="p"
                        fontSize="text-lg"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                      />

                      <CraftButton
                        text="Learn More"
                        size="lg"
                        backgroundColor="#1f40af"
                        textColor="#ffffff"
                        borderRadius="rounded-lg"
                        padding="px-8 py-4"
                        width="w-auto"
                        className="hover:bg-blue-700 transition-colors duration-200"
                      />
                    </Element>
                  </Element>

                  {/* Service Image */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-1/2"
                    canvas={false}
                  >
                    <Element
                      is={Card}
                      variant="flat"
                      shadow="2xl"
                      borderRadius="rounded-lg"
                      backgroundColor="bg-white"
                      borderColor=""
                      padding="0"
                      margin=""
                      hoverable={false}
                      clickable={false}
                      overflow="hidden"
                      border={false}
                      className="w-full"
                      canvas
                    >
                      <CraftImage
                        src={serviceImage}
                        alt={serviceTitle}
                        width="w-full"
                        height="h-96"
                        objectFit="object-cover"
                        margin=""
                        padding=""
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}

            {/* Features Section */}
            {showFeatures && (
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
                  flexDirection="column"
                  justifyContent="start"
                  alignItems="start"
                  gap="gap-8"
                  margin=""
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    canvas={false}
                  >
                    <CraftText
                      text="What We Offer"
                      tagName="h3"
                      fontSize="text-2xl sm:text-3xl"
                      fontWeight="font-bold"
                      color={textColor}
                      textAlign="text-center"
                      lineHeight="leading-tight"
                    />
                  </Element>

                  <Element
                    is={Grid}
                    canvas
                    columns={3}
                    autoFit={false}
                    minColumnWidth="300px"
                    gap="gap-8"
                    autoRows="auto"
                  >
                    {features.map((feature) => (
                      <Element
                        key={feature.id}
                        is={Card}
                        variant="flat"
                        shadow="lg"
                        borderRadius="rounded-lg"
                        backgroundColor="bg-white"
                        borderColor=""
                        padding="p-8"
                        margin=""
                        hoverable={true}
                        clickable={false}
                        overflow="visible"
                        border={false}
                        className="group hover:shadow-2xl transition-all duration-500 hover:scale-105"
                        canvas
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
                          <Element
                            is={Box}
                            backgroundColor="bg-yellow-100"
                            padding="p-4"
                            margin=""
                            display="block"
                            width="w-16"
                            height="h-16"
                            borderRadius="rounded-lg"
                            canvas={false}
                          >
                            <CraftText
                              text={feature.icon}
                              tagName="span"
                              fontSize="text-2xl"
                              textAlign="text-center"
                            />
                          </Element>

                          <CraftText
                            text={feature.title}
                            tagName="h4"
                            fontSize="text-xl"
                            fontWeight="font-semibold"
                            color={textColor}
                            textAlign="text-left"
                            lineHeight="leading-tight"
                            className="group-hover:text-blue-600 transition-colors duration-200"
                          />

                          <CraftText
                            text={feature.description}
                            tagName="p"
                            fontSize="text-base"
                            fontWeight="font-normal"
                            color="text-gray-600"
                            textAlign="text-left"
                            lineHeight="leading-relaxed"
                          />
                        </Element>
                      </Element>
                    ))}
                  </Element>
                </Element>
              </Element>
            )}

            {/* Pricing Section */}
            {showPricing && (
              <Element
                is={Box}
                backgroundColor="bg-gray-50"
                padding="p-12"
                margin=""
                display="block"
                width="w-full"
                borderRadius="rounded-2xl"
                canvas={false}
              >
                <Element
                  is={Flex}
                  canvas
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="gap-8"
                  margin=""
                >
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text="Pricing Plans"
                      tagName="h3"
                      fontSize="text-2xl sm:text-3xl"
                      fontWeight="font-bold"
                      color={textColor}
                      textAlign="text-center"
                      lineHeight="leading-tight"
                    />
                  </Element>

                  <Element
                    is={Card}
                    variant="flat"
                    shadow="2xl"
                    borderRadius="rounded-lg"
                    backgroundColor="bg-white"
                    borderColor=""
                    padding="p-8"
                    margin=""
                    hoverable={false}
                    clickable={false}
                    overflow="visible"
                    border={false}
                    className="w-full max-w-md"
                    canvas
                  >
                    <Element
                      is={Flex}
                      canvas
                      flexDirection="column"
                      justifyContent="start"
                      alignItems="center"
                      gap="gap-6"
                      margin=""
                    >
                      <CraftText
                        text={pricing.title}
                        tagName="h4"
                        fontSize="text-xl"
                        fontWeight="font-semibold"
                        color={textColor}
                        textAlign="text-center"
                      />

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
                          justifyContent="center"
                          alignItems="baseline"
                          gap="gap-2"
                          margin=""
                        >
                          <CraftText
                            text={pricing.price}
                            tagName="span"
                            fontSize="text-4xl"
                            fontWeight="font-bold"
                            color={textColor}
                            textAlign="text-center"
                          />
                          <CraftText
                            text={pricing.period}
                            tagName="span"
                            fontSize="text-lg"
                            fontWeight="font-normal"
                            color="text-gray-600"
                            textAlign="text-center"
                          />
                        </Element>
                      </Element>

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
                          flexDirection="column"
                          justifyContent="start"
                          alignItems="start"
                          gap="gap-3"
                          margin=""
                        >
                          {pricing.features.map((feature, index) => (
                            <Element
                              key={index}
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
                                justifyContent="start"
                                alignItems="center"
                                gap="gap-3"
                                margin=""
                              >
                                <Element
                                  is={Box}
                                  backgroundColor="bg-green-100"
                                  padding="p-1"
                                  margin=""
                                  display="block"
                                  width="w-6"
                                  height="h-6"
                                  borderRadius="rounded-full"
                                  canvas={false}
                                >
                                  <CraftText
                                    text="✓"
                                    tagName="span"
                                    fontSize="text-sm"
                                    fontWeight="font-bold"
                                    color="text-green-600"
                                    textAlign="text-center"
                                  />
                                </Element>
                                
                                <CraftText
                                  text={feature}
                                  tagName="span"
                                  fontSize="text-base"
                                  fontWeight="font-normal"
                                  color="text-gray-700"
                                  textAlign="text-left"
                                />
                              </Element>
                            </Element>
                          ))}
                        </Element>
                      </Element>

                      <CraftButton
                        text={pricing.buttonText}
                        size="lg"
                        backgroundColor="#1f40af"
                        textColor="#ffffff"
                        borderRadius="rounded-lg"
                        padding="px-8 py-4"
                        width="w-full"
                        className="hover:bg-blue-700 transition-colors duration-200"
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            )}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingServicesDetails1.craft = {
  displayName: "Accounting Services Details 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Service details specific props
    pageTitle: "Service Details",
    pageSubtitle: "Comprehensive accounting solutions",
    serviceTitle: "Corporate Finance Services",
    serviceDescription: "We provide comprehensive corporate finance services to help your business grow and succeed. Our expert team offers strategic financial planning, investment analysis, and risk management solutions tailored to your specific needs.",
    showPageTitle: true,
    showServiceDetails: true,
    showFeatures: true,
    showPricing: true,
    backgroundColor: "#ffffff",
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
