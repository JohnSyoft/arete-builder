import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
}

interface AccountingProcess1Props extends SectionProps {
  // Process specific props
  pageTitle?: string;
  pageSubtitle?: string;
  backgroundImage?: string;
  mainTitle?: string;
  description?: string;
  processSteps?: ProcessStep[];
  // Settings
  showPageTitle?: boolean;
  showMainTitle?: boolean;
  showDescription?: boolean;
  showProcessSteps?: boolean;
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function AccountingProcess1({
  pageTitle = "Our process",
  pageSubtitle = "How we work with you",
  backgroundImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&h=500&fit=crop",
  mainTitle = "Our Proven Accounting Process",
  description = "We follow a systematic approach to ensure your accounting needs are met with precision and efficiency.",
  processSteps = [
    {
      id: "step-1",
      number: "01",
      title: "Initial Consultation",
      description: "We start with a comprehensive consultation to understand your business needs and current financial situation.",
      icon: "🤝"
    },
    {
      id: "step-2",
      number: "02",
      title: "Analysis & Planning",
      description: "Our team analyzes your financial data and creates a customized plan tailored to your specific requirements.",
      icon: "📊"
    },
    {
      id: "step-3",
      number: "03",
      title: "Implementation",
      description: "We implement the accounting solutions and processes that will best serve your business goals.",
      icon: "⚙️"
    },
    {
      id: "step-4",
      number: "04",
      title: "Monitoring & Support",
      description: "We continuously monitor your financial health and provide ongoing support and guidance.",
      icon: "📈"
    },
    {
      id: "step-5",
      number: "05",
      title: "Review & Optimization",
      description: "Regular reviews ensure your accounting processes remain efficient and aligned with your business growth.",
      icon: "🔄"
    },
    {
      id: "step-6",
      number: "06",
      title: "Reporting & Insights",
      description: "We provide detailed reports and insights to help you make informed business decisions.",
      icon: "📋"
    }
  ],
  showPageTitle = true,
  showMainTitle = true,
  showDescription = true,
  showProcessSteps = true,
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#fbbf24",
  ...props
}: AccountingProcess1Props) {
  // Set section defaults for process
  const processProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...processProps}>
      <Element
        id="accountingProcessContent"
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
                alt="Our Process"
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
            {/* Main Title and Description */}
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
                {showMainTitle && (
                  <CraftText
                    text={mainTitle}
                    tagName="h2"
                    fontSize="text-3xl sm:text-4xl"
                    fontWeight="font-bold"
                    color={textColor}
                    textAlign="text-center"
                    lineHeight="leading-tight"
                  />
                )}

                {showDescription && (
                  <CraftText
                    text={description}
                    tagName="p"
                    fontSize="text-lg"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-center"
                    lineHeight="leading-relaxed"
                    className="max-w-3xl"
                  />
                )}
              </Element>
            </Element>

            {/* Process Steps */}
            {showProcessSteps && (
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
                  minColumnWidth="350px"
                  gap="gap-8"
                  autoRows="auto"
                >
                  {processSteps.map((step, index) => (
                    <Element
                      key={step.id}
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
                      className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 relative"
                      canvas
                    >
                      {/* Step Number */}
                      <Element
                        is={Box}
                        backgroundColor="bg-yellow-400"
                        padding="p-4"
                        margin=""
                        display="block"
                        width="w-16"
                        height="h-16"
                        borderRadius="rounded-full"
                        position="absolute"
                        top="-top-8"
                        left="left-8"
                        canvas={false}
                      >
                        <CraftText
                          text={step.number}
                          tagName="span"
                          fontSize="text-xl"
                          fontWeight="font-bold"
                          color="text-gray-800"
                          textAlign="text-center"
                        />
                      </Element>

                      {/* Step Content */}
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="pt-8"
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
                          gap="gap-4"
                          margin=""
                        >
                          {/* Icon */}
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
                              text={step.icon}
                              tagName="span"
                              fontSize="text-2xl"
                              textAlign="text-center"
                            />
                          </Element>

                          {/* Title */}
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
                              text={step.title}
                              tagName="h3"
                              fontSize="text-xl"
                              fontWeight="font-semibold"
                              color={textColor}
                              textAlign="text-left"
                              lineHeight="leading-tight"
                              className="group-hover:text-blue-600 transition-colors duration-200"
                            />
                          </Element>

                          {/* Description */}
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
                              text={step.description}
                              tagName="p"
                              fontSize="text-base"
                              fontWeight="font-normal"
                              color="text-gray-600"
                              textAlign="text-left"
                              lineHeight="leading-relaxed"
                            />
                          </Element>
                        </Element>
                      </Element>
                    </Element>
                  ))}
                </Element>
              </Element>
            )}

            {/* CTA Section */}
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
                gap="gap-6"
                margin=""
              >
                <CraftText
                  text="Ready to get started with our process?"
                  tagName="h3"
                  fontSize="text-2xl"
                  fontWeight="font-semibold"
                  color={textColor}
                  textAlign="text-center"
                />
                
                <CraftText
                  text="Contact us today to begin your accounting journey with our proven methodology."
                  tagName="p"
                  fontSize="text-lg"
                  fontWeight="font-normal"
                  color="text-gray-600"
                  textAlign="text-center"
                  className="max-w-2xl"
                />

                <CraftButton
                  text="Start Your Process"
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
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

AccountingProcess1.craft = {
  displayName: "Accounting Process 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Process specific props
    pageTitle: "Our process",
    pageSubtitle: "How we work with you",
    mainTitle: "Our Proven Accounting Process",
    description: "We follow a systematic approach to ensure your accounting needs are met with precision and efficiency.",
    showPageTitle: true,
    showMainTitle: true,
    showDescription: true,
    showProcessSteps: true,
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
