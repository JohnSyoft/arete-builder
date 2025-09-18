import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
  isNew?: boolean;
}

interface AccountingCompany1Props extends SectionProps {
  // Company specific props
  pageTitle?: string;
  pageSubtitle?: string;
  backgroundImage?: string;
  mainTitle?: string;
  features?: Feature[];
  // Settings
  showPageTitle?: boolean;
  showMainTitle?: boolean;
  showFeatures?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function AccountingCompany1({
  pageTitle = "Our company",
  pageSubtitle = "About crafto accounto",
  backgroundImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=500&fit=crop",
  mainTitle = "Why choose us as your accountant consultant?",
  features = [
    {
      id: "feature-1",
      title: "Business process",
      description: "An activity or set of activities that can accomplish a specific organizational goal.",
      icon: "📊",
      link: "/services/business-process",
      isNew: false
    },
    {
      id: "feature-2",
      title: "Corporate finance",
      description: "We combine deep financial expertise with exclusive tools to help the maximize value.",
      icon: "💰",
      link: "/services/corporate-finance",
      isNew: true
    },
    {
      id: "feature-3",
      title: "Financial services",
      description: "Financial services are the economic services provided by the finance industry.",
      icon: "🏦",
      link: "/services/financial-services",
      isNew: false
    },
    {
      id: "feature-4",
      title: "Online consulting",
      description: "An activity or set of activities that can accomplish a specific organizational goal.",
      icon: "💻",
      link: "/services/online-consulting",
      isNew: false
    },
    {
      id: "feature-5",
      title: "Investment consulting",
      description: "We combine deep financial expertise with exclusive tools to help the maximize value.",
      icon: "📈",
      link: "/services/investment-consulting",
      isNew: false
    },
    {
      id: "feature-6",
      title: "Banking & financing",
      description: "Financial services are the economic services provided by the finance industry.",
      icon: "🏛️",
      link: "/services/banking-financing",
      isNew: false
    }
  ],
  showPageTitle = true,
  showMainTitle = true,
  showFeatures = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#fbbf24",
  ...props
}: AccountingCompany1Props) {
  // Set section defaults for company
  const companyProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...companyProps}>
      <Element
        id="accountingCompanyContent"
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
                alt="Accounting Company"
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
            alignItems="center"
            gap="gap-12"
            margin=""
          >
            {/* Main Title */}
            {showMainTitle && (
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
                  justifyContent="center"
                  alignItems="center"
                  gap="gap-4"
                  margin=""
                >
                  <CraftText
                    text={mainTitle}
                    tagName="h2"
                    fontSize="text-3xl sm:text-4xl"
                    fontWeight="font-bold"
                    color={textColor}
                    textAlign="text-center"
                    lineHeight="leading-tight"
                  />
                </Element>
              </Element>
            )}

            {/* Features Grid */}
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
                      backgroundColor="bg-gray-50"
                      borderColor=""
                      padding="p-8"
                      margin=""
                      hoverable={true}
                      clickable={true}
                      overflow="visible"
                      border={false}
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative"
                      canvas
                    >
                      <Element
                        is={Flex}
                        canvas
                        flexDirection="column"
                        justifyContent="space-between"
                        alignItems="start"
                        gap="gap-6"
                        margin="h-full"
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
                            text={feature.icon}
                            tagName="span"
                            fontSize="text-6xl"
                            textAlign="text-left"
                          />
                        </Element>

                        {/* Content */}
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
                            gap="gap-3"
                            margin=""
                          >
                            <CraftText
                              text={feature.title}
                              tagName="h3"
                              fontSize="text-xl"
                              fontWeight="font-semibold"
                              color={textColor}
                              textAlign="text-left"
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

                        {/* New Badge */}
                        {feature.isNew && (
                          <Element
                            is={Box}
                            backgroundColor="bg-white"
                            padding="px-4 py-2"
                            margin=""
                            display="block"
                            position="absolute"
                            top="top-4"
                            right="right-4"
                            borderRadius="rounded-full"
                            shadow="lg"
                            canvas={false}
                          >
                            <CraftText
                              text="New"
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-bold"
                              color="text-gray-800"
                              textAlign="text-center"
                              className="uppercase tracking-wider"
                            />
                          </Element>
                        )}
                      </Element>
                    </Element>
                  ))}
                </Element>
              </Element>
            )}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingCompany1.craft = {
  displayName: "Accounting Company 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Company specific props
    pageTitle: "Our company",
    pageSubtitle: "About crafto accounto",
    mainTitle: "Why choose us as your accountant consultant?",
    showPageTitle: true,
    showMainTitle: true,
    showFeatures: true,
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
