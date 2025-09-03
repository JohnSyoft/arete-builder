import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernFeatures1Props extends SectionProps {
  // Header content
  sectionTitle?: string;
  sectionDescription?: string;
  
  // Features
  features?: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    image: string;
    ctaText?: string;
  }>;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
  layout?: "grid" | "alternating";
}

export function ModernFeatures1({
  sectionTitle = "Powerful Features for Modern Teams",
  sectionDescription = "Everything you need to build, launch, and scale your product. From idea to global success.",
  features = [
    {
      id: "ai-powered",
      icon: "🤖",
      title: "AI-Powered Automation",
      description: "Leverage cutting-edge artificial intelligence to automate repetitive tasks and boost productivity by 10x.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      ctaText: "Learn More"
    },
    {
      id: "real-time",
      icon: "⚡",
      title: "Real-time Collaboration",
      description: "Work together seamlessly with your team in real-time. See changes instantly across all devices.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
      ctaText: "Try It Now"
    },
    {
      id: "analytics",
      icon: "📊",
      title: "Advanced Analytics",
      description: "Make data-driven decisions with comprehensive insights and beautiful visualizations.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      ctaText: "View Demo"
    },
    {
      id: "security",
      icon: "🔒",
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, SSO, and compliance certifications.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      ctaText: "Security Details"
    },
    {
      id: "integrations",
      icon: "🔗",
      title: "Seamless Integrations",
      description: "Connect with 500+ tools and services. From Slack to Salesforce, everything works together.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      ctaText: "Browse Integrations"
    },
    {
      id: "mobile",
      icon: "📱",
      title: "Mobile-First Design",
      description: "Beautiful, responsive design that works perfectly on any device, anywhere, anytime.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      ctaText: "Download App"
    }
  ],
  layout = "alternating",
  primaryColor = "#4F46E5",
  accentColor = "#F59E0B",
  ...props
}: ModernFeatures1Props) {
  
  // Set section defaults
  const featuresProps = {
    backgroundColor: "#f8fafc",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...featuresProps}>
      <Element
        id="modernFeaturesContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Header Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin="0 0 64px 0"
          display="block"
          canvas
        >
          {/* Section Title */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0 0 16px 0"
            display="flex"
            justifyContent="center"
            canvas={false}
          >
            <CraftText
              text={sectionTitle}
              tagName="h2"
              fontSize="text-4xl sm:text-5xl lg:text-6xl"
              fontWeight="font-black"
              color="text-gray-900"
              textAlign="text-center"
              margin="0"
              lineHeight="leading-tight"
            />
          </Element>

          {/* Section Description */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            justifyContent="center"
            canvas={false}
          >
            <div className="max-w-3xl">
              <CraftText
                text={sectionDescription}
                tagName="p"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-center"
                lineHeight="leading-relaxed"
                margin="0"
              />
            </div>
          </Element>
        </Element>

        {/* Features Layout */}
        {layout === "grid" ? (
          /* Grid Layout */
          <Element
            is={Grid}
            canvas
            columns={3}
            autoFit={true}
            minColumnWidth="350px"
            gap="32px"
            autoRows="auto"
          >
            {features.map((feature) => (
              <Element
                key={feature.id}
                id={`featureCard-${feature.id}`}
                is={Card}
                variant="flat"
                shadow="lg"
                borderRadius="20px"
                backgroundColor="#ffffff"
                borderColor="rgba(0, 0, 0, 0.1)"
                padding="0"
                margin="0"
                hoverable={true}
                clickable={false}
                
                canvas
              >
                {/* Feature Image */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 24px 0"
                  display="block"
                  width="100%"
                  height="200px"
                  canvas
                >
                  <CraftImage
                    src={feature.image}
                    alt={feature.title}
                    width="w-full"
                    height="h-full"
                    objectFit="object-cover"
                    borderRadius="rounded-t-20"
                    margin=""
                    padding=""
                  />
                </Element>

                {/* Feature Content */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="24px 32px 32px 32px"
                  margin="0"
                  display="block"
                  canvas
                >
                  {/* Icon */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 16px 0"
                    display="block"
                    canvas={false}
                  >
                    <div className="text-4xl">{feature.icon}</div>
                  </Element>

                  {/* Title */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 12px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={feature.title}
                      tagName="h3"
                      fontSize="text-2xl"
                      fontWeight="font-bold"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>

                  {/* Description */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0 0 20px 0"
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={feature.description}
                      tagName="p"
                      fontSize="text-base"
                      fontWeight="font-normal"
                      color="text-gray-600"
                      textAlign="text-left"
                      lineHeight="leading-relaxed"
                      margin="0"
                    />
                  </Element>

                  {/* CTA */}
                  {feature.ctaText && (
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftButton
                        text={feature.ctaText}
                        variant="outline"
                        size="sm"
                        backgroundColor="transparent"
                        textColor={primaryColor}
                        borderRadius="8px"
                        padding="px-4 py-2"
                        width="w-auto"
                      />
                    </Element>
                  )}
                </Element>
              </Element>
            ))}
          </Element>
        ) : (
          /* Alternating Layout */
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="block"
            canvas
          >
            {features.map((feature, index) => (
              <Element
                key={feature.id}
                id={`featureRow-${feature.id}`}
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin={index < features.length - 1 ? "0 0 96px 0" : "0"}
                display="block"
                canvas
              >
                <Element
                  is={Grid}
                  canvas
                  columns={2}
                  autoFit={false}
                  minColumnWidth="400px"
                  gap="64px"
                  autoRows="auto"
                >
                  {/* Content Column */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    order={index % 2 === 0 ? "1" : "2"}
                    canvas
                  >
                    {/* Icon */}
                    <Element
                      is={Box}
                      backgroundColor={primaryColor}
                      padding="16px"
                      margin="0 0 24px 0"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="16px"
                      width="64px"
                      height="64px"
                      canvas={false}
                    >
                      <div className="text-2xl text-white">{feature.icon}</div>
                    </Element>

                    {/* Title */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0 0 16px 0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={feature.title}
                        tagName="h3"
                        fontSize="text-3xl sm:text-4xl"
                        fontWeight="font-bold"
                        color="text-gray-900"
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
                      margin="0 0 24px 0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={feature.description}
                        tagName="p"
                        fontSize="text-lg"
                        fontWeight="font-normal"
                        color="text-gray-600"
                        textAlign="text-left"
                        lineHeight="leading-relaxed"
                        margin="0"
                      />
                    </Element>

                    {/* CTA */}
                    {feature.ctaText && (
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin="0"
                        display="block"
                        canvas={false}
                      >
                        <CraftButton
                          text={feature.ctaText}
                          size="lg"
                          backgroundColor={primaryColor}
                          textColor="#ffffff"
                          borderRadius="12px"
                          padding="px-6 py-3"
                          width="w-auto"
                        />
                      </Element>
                    )}
                  </Element>

                  {/* Image Column */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    order={index % 2 === 0 ? "2" : "1"}
                    canvas
                  >
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      width="100%"
                      height="400px"
                      borderRadius="20px"
                      
                      canvas
                    >
                      <CraftImage
                        src={feature.image}
                        alt={feature.title}
                        width="w-full"
                        height="h-full"
                        objectFit="object-cover"
                        borderRadius="rounded-20"
                        margin=""
                        padding=""
                      />
                    </Element>
                  </Element>
                </Element>
              </Element>
            ))}
          </Element>
        )}

        {/* Bottom CTA Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="96px 0 0 0"
          margin="0"
          display="block"
          canvas
        >
          <Element
            is={Card}
            variant="flat"
            shadow="xl"
            borderRadius="24px"
            backgroundColor={primaryColor}
            borderColor="transparent"
            padding="64px 48px"
            margin="0"
            hoverable={false}
            clickable={false}
            
            canvas
          >
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              canvas
            >
              {/* CTA Title */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text="Ready to Get Started?"
                  tagName="h3"
                  fontSize="text-3xl sm:text-4xl"
                  fontWeight="font-bold"
                  color="text-white"
                  textAlign="text-center"
                  margin="0"
                />
              </Element>

              {/* CTA Description */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 32px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text="Join thousands of teams already using our platform to build amazing products."
                  tagName="p"
                  fontSize="text-xl"
                  fontWeight="font-normal"
                  color="rgba(255, 255, 255, 0.9)"
                  textAlign="text-center"
                  margin="0"
                />
              </Element>

              {/* CTA Buttons */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                gap="gap-4"
                margin="0"
                wrap="wrap"
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
                    text="Start Free Trial"
                    size="lg"
                    backgroundColor="#ffffff"
                    textColor={primaryColor}
                    borderRadius="12px"
                    padding="px-8 py-4"
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
                  <CraftButton
                    text="Contact Sales"
                    variant="outline"
                    size="lg"
                    backgroundColor="transparent"
                    textColor="#ffffff"
                    borderRadius="12px"
                    padding="px-8 py-4"
                    width="w-auto"
                  />
                </Element>
              </Element>
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ModernFeatures1.craft = {
  displayName: "Modern Features 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern Features specific props
    sectionTitle: "Powerful Features for Modern Teams",
    sectionDescription: "Everything you need to build, launch, and scale your product. From idea to global success.",
    features: [
      {
        id: "ai-powered",
        icon: "🤖",
        title: "AI-Powered Automation",
        description: "Leverage cutting-edge artificial intelligence to automate repetitive tasks and boost productivity by 10x.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        ctaText: "Learn More"
      },
      {
        id: "real-time",
        icon: "⚡",
        title: "Real-time Collaboration",
        description: "Work together seamlessly with your team in real-time. See changes instantly across all devices.",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
        ctaText: "Try It Now"
      },
      {
        id: "analytics",
        icon: "📊",
        title: "Advanced Analytics",
        description: "Make data-driven decisions with comprehensive insights and beautiful visualizations.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
        ctaText: "View Demo"
      }
    ],
    layout: "alternating",
    primaryColor: "#4F46E5",
    accentColor: "#F59E0B",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};