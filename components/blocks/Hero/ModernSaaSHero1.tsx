import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernSaaSHero1Props extends SectionProps {
  // Main content
  tagline?: string;
  mainHeading?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  
  // Trust indicators
  trustedByText?: string;
  companyLogos?: string[];
  
  // Hero image/video
  heroImage?: string;
  videoUrl?: string;
  
  // Features highlights
  features?: Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
  }>;
  
  // Styling
  primaryColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export function ModernSaaSHero1({
  tagline = "🚀 #1 Platform for Modern Teams",
  mainHeading = "Build, Ship, and Scale Your SaaS Product Faster",
  description = "The all-in-one platform that helps startups and enterprises build world-class products with confidence. Deploy in minutes, scale to millions.",
  primaryButtonText = "Start Free Trial",
  secondaryButtonText = "Watch Demo",
  trustedByText = "Trusted by 10,000+ companies worldwide",
  companyLogos = [
    "https://via.placeholder.com/120x40/4F46E5/FFFFFF?text=Company1",
    "https://via.placeholder.com/120x40/7C3AED/FFFFFF?text=Company2", 
    "https://via.placeholder.com/120x40/059669/FFFFFF?text=Company3",
    "https://via.placeholder.com/120x40/DC2626/FFFFFF?text=Company4",
    "https://via.placeholder.com/120x40/EA580C/FFFFFF?text=Company5"
  ],
  heroImage = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  features = [
    {
      id: "fast-deploy",
      icon: "⚡",
      title: "Deploy in Minutes",
      description: "Get your app live instantly with our one-click deployment"
    },
    {
      id: "auto-scale",
      icon: "📈",
      title: "Auto-scaling",
      description: "Handle millions of users without breaking a sweat"
    },
    {
      id: "secure",
      icon: "🛡️",
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance"
    }
  ],
  primaryColor = "#4F46E5",
  gradientFrom = "#4F46E5",
  gradientTo = "#7C3AED",
  ...props
}: ModernSaaSHero1Props) {
  
  // Set section defaults
  const heroProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...heroProps}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234F46E5' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <Element
        id="modernSaaSHeroContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        {/* Main Hero Grid */}
        <Element
          is={Grid}
          canvas
          columns={2}
          autoFit={false}
          minColumnWidth="400px"
          gap="64px"
          autoRows="auto"
        >
          {/* Left Column - Content */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            canvas
          >
            {/* Tagline */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="12px 20px"
              margin="0 0 24px 0"
              display="inline-flex"
              alignItems="center"
              borderRadius="50px"
              border="1px solid rgba(79, 70, 229, 0.2)"
              canvas={false}
            >
              <div 
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium"
                style={{
                  background: `linear-gradient(135deg, ${gradientFrom}15, ${gradientTo}15)`,
                  color: primaryColor
                }}
              >
                <CraftText
                  text={tagline}
                  tagName="span"
                  fontSize="text-sm"
                  fontWeight="font-semibold"
                  color={`text-[${primaryColor}]`}
                  textAlign="text-left"
                  margin="0"
                />
              </div>
            </Element>

            {/* Main Heading */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 24px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={mainHeading}
                tagName="h1"
                fontSize="text-5xl sm:text-6xl lg:text-7xl"
                fontWeight="font-black"
                color="text-gray-900"
                textAlign="text-left"
                margin="0"
                lineHeight="leading-[1.1]"
              />
            </Element>

            {/* Description */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0 0 40px 0"
              display="block"
              canvas={false}
            >
              <CraftText
                text={description}
                tagName="p"
                fontSize="text-xl"
                fontWeight="font-normal"
                color="text-gray-600"
                textAlign="text-left"
                lineHeight="leading-relaxed"
                margin="0"
              />
            </Element>

            {/* Action Buttons */}
            <Element
              is={Flex}
              canvas
              flexDirection="row"
              justifyContent="start"
              alignItems="center"
              gap="gap-4"
              margin="mb-12"
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
                  text={primaryButtonText}
                  size="lg"
                  backgroundColor={primaryColor}
                  textColor="#ffffff"
                  borderRadius="12px"
                  padding="px-8 py-4"
                  width="w-auto"
                />
              </Element>

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
                {/* Play Button */}
                <Element
                  is={Box}
                  backgroundColor={primaryColor}
                  padding="12px"
                  margin="0"
                  borderRadius="50%"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  canvas={false}
                >
                  <div className="w-5 h-5 text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
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
                    text={secondaryButtonText}
                    tagName="span"
                    fontSize="text-lg"
                    fontWeight="font-semibold"
                    color="text-gray-900"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>
              </Element>
            </Element>

            {/* Trust Indicators */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              canvas
            >
              {/* Trusted By Text */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="0"
                margin="0 0 16px 0"
                display="block"
                canvas={false}
              >
                <CraftText
                  text={trustedByText}
                  tagName="p"
                  fontSize="text-sm"
                  fontWeight="font-medium"
                  color="text-gray-500"
                  textAlign="text-left"
                  margin="0"
                />
              </Element>

              {/* Company Logos */}
              <Element
                is={Flex}
                canvas
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-8"
                margin="0"
                wrap="wrap"
              >
                {companyLogos.slice(0, 4).map((logo, index) => (
                  <Element
                    key={`company-${index}`}
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin="0"
                    display="block"
                    canvas
                  >
                    <CraftImage
                      src={logo}
                      alt={`Company ${index + 1}`}
                      width="w-[120px]"
                      height="h-[40px]"
                      objectFit="object-contain"
                      borderRadius="rounded-lg"
                      margin=""
                      padding=""
                    />
                  </Element>
                ))}
              </Element>
            </Element>
          </Element>

          {/* Right Column - Hero Visual */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
            canvas
          >
            {/* Main Visual Container */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin="0"
              display="block"
              width="100%"
              height="600px"
              borderRadius="24px"
              border="1px solid rgba(0, 0, 0, 0.1)"
              canvas
            >
              <CraftImage
                src={heroImage}
                alt="SaaS Platform Dashboard"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                borderRadius="rounded-24"
                margin=""
                padding=""
              />
            </Element>
          </Element>
        </Element>

        {/* Features Section */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="64px 0 0 0"
          margin="0"
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={3}
            autoFit={true}
            minColumnWidth="300px"
            gap="32px"
            autoRows="auto"
          >
            {features.map((feature) => (
              <Element
                key={feature.id}
                id={`feature-${feature.id}`}
                is={Card}
                variant="flat"
                shadow="none"
                borderRadius="16px"
                backgroundColor="#ffffff"
                borderColor="rgba(0, 0, 0, 0.05)"
                padding="32px"
                margin="0"
                hoverable={true}
                clickable={false}
                overflow="visible"
                canvas
              >
                {/* Feature Icon */}
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

                {/* Feature Title */}
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
                    fontSize="text-xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                {/* Feature Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
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
              </Element>
            ))}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ModernSaaSHero1.craft = {
  displayName: "Modern SaaS Hero 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern SaaS Hero specific props
    tagline: "🚀 #1 Platform for Modern Teams",
    mainHeading: "Build, Ship, and Scale Your SaaS Product Faster",
    description: "The all-in-one platform that helps startups and enterprises build world-class products with confidence. Deploy in minutes, scale to millions.",
    primaryButtonText: "Start Free Trial",
    secondaryButtonText: "Watch Demo",
    trustedByText: "Trusted by 10,000+ companies worldwide",
    companyLogos: [
      "https://via.placeholder.com/120x40/4F46E5/FFFFFF?text=Company1",
      "https://via.placeholder.com/120x40/7C3AED/FFFFFF?text=Company2", 
      "https://via.placeholder.com/120x40/059669/FFFFFF?text=Company3",
      "https://via.placeholder.com/120x40/DC2626/FFFFFF?text=Company4",
      "https://via.placeholder.com/120x40/EA580C/FFFFFF?text=Company5"
    ],
    heroImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    features: [
      {
        id: "fast-deploy",
        icon: "⚡",
        title: "Deploy in Minutes",
        description: "Get your app live instantly with our one-click deployment"
      },
      {
        id: "auto-scale",
        icon: "📈",
        title: "Auto-scaling",
        description: "Handle millions of users without breaking a sweat"
      },
      {
        id: "secure",
        icon: "🛡️",
        title: "Enterprise Security",
        description: "Bank-level security with SOC 2 compliance"
      }
    ],
    primaryColor: "#4F46E5",
    gradientFrom: "#4F46E5",
    gradientTo: "#7C3AED",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: false,
};