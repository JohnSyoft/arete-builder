import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface ModernPricing1Props extends SectionProps {
  // Header content
  sectionTitle?: string;
  sectionDescription?: string;
  
  // Pricing plans
  plans?: Array<{
    id: string;
    name: string;
    description: string;
    monthlyPrice: string;
    currency: string;
    period: string;
    popular?: boolean;
    features: string[];
    buttonText: string;
    buttonVariant?: "default" | "outline";
  }>;
  
  // Styling
  primaryColor?: string;
  accentColor?: string;
}

export function ModernPricing1({
  sectionTitle = "Simple, Transparent Pricing",
  sectionDescription = "Choose the perfect plan for your needs. Always flexible to upgrade or downgrade.",
  plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for individuals and small projects",
      monthlyPrice: "9",
      currency: "$",
      period: "/month",
      features: [
        "Up to 5 projects",
        "Basic analytics", 
        "24/7 support",
        "1GB storage",
        "Basic integrations"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline"
    },
    {
      id: "professional",
      name: "Professional",
      description: "Best for growing teams and businesses",
      monthlyPrice: "29",
      currency: "$",
      period: "/month",
      popular: true,
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "All integrations",
        "Custom domains",
        "Team collaboration"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default"
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Advanced features for large organizations",
      monthlyPrice: "99",
      currency: "$",
      period: "/month",
      features: [
        "Everything in Professional",
        "Custom integrations",
        "Dedicated support",
        "Unlimited storage",
        "SSO & SAML",
        "Advanced security",
        "Custom contracts"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline"
    }
  ],
  primaryColor = "#4F46E5",
  accentColor = "#F59E0B",
  ...props
}: ModernPricing1Props) {
  
  // Set section defaults
  const pricingProps = {
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    ...props,
  };

  return (
    <Section {...pricingProps}>
      <Element
        id="modernPricingContent"
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
            margin="0 0 48px 0"
            display="flex"
            justifyContent="center"
            canvas={false}
          >
            <div className="max-w-2xl">
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

        {/* Pricing Cards Grid */}
        <Element
          is={Grid}
          canvas
          columns={3}
          autoFit={true}
          minColumnWidth="350px"
          gap="32px"
          autoRows="auto"
        >
          {plans.map((plan) => (
            <Element
              key={plan.id}
              id={`pricingPlan-${plan.id}`}
              is={Card}
              variant="flat"
              shadow={plan.popular ? "xl" : "lg"}
              borderRadius="24px"
              backgroundColor="#ffffff"
              borderColor={plan.popular ? primaryColor : "rgba(0, 0, 0, 0.1)"}
              padding="0"
              margin="0"
              hoverable={true}
              clickable={false}
              
              canvas
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div 
                    className="px-4 py-2 rounded-full text-sm font-bold text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <Element
                is={Box}
                backgroundColor="transparent"
                padding="32px 32px 24px 32px"
                margin="0"
                display="block"
                canvas
              >
                {/* Plan Name */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 8px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={plan.name}
                    tagName="h3"
                    fontSize="text-2xl"
                    fontWeight="font-bold"
                    color="text-gray-900"
                    textAlign="text-left"
                    margin="0"
                  />
                </Element>

                {/* Plan Description */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0 0 24px 0"
                  display="block"
                  canvas={false}
                >
                  <CraftText
                    text={plan.description}
                    tagName="p"
                    fontSize="text-base"
                    fontWeight="font-normal"
                    color="text-gray-600"
                    textAlign="text-left"
                    lineHeight="leading-relaxed"
                    margin="0"
                  />
                </Element>

                {/* Price Display */}
                <Element
                  is={Flex}
                  canvas
                  flexDirection="row"
                  justifyContent="start"
                  alignItems="baseline"
                  gap="gap-1"
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
                    <CraftText
                      text={plan.currency}
                      tagName="span"
                      fontSize="text-2xl"
                      fontWeight="font-bold"
                      color="text-gray-900"
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
                      text={plan.monthlyPrice}
                      tagName="span"
                      fontSize="text-5xl"
                      fontWeight="font-black"
                      color="text-gray-900"
                      textAlign="text-left"
                      margin="0"
                      lineHeight="leading-none"
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
                      text={plan.period}
                      tagName="span"
                      fontSize="text-lg"
                      fontWeight="font-medium"
                      color="text-gray-600"
                      textAlign="text-left"
                      margin="0"
                    />
                  </Element>
                </Element>

                {/* CTA Button */}
                <Element
                  is={Box}
                  backgroundColor="transparent"
                  padding="0"
                  margin="0"
                  display="block"
                  width="100%"
                  canvas={false}
                >
                  <CraftButton
                    text={plan.buttonText}
                    variant={plan.buttonVariant}
                    size="lg"
                    backgroundColor={plan.buttonVariant === "default" ? primaryColor : "transparent"}
                    textColor={plan.buttonVariant === "default" ? "#ffffff" : primaryColor}
                    borderRadius="12px"
                    padding="px-6 py-3"
                    width="w-full"
                  />
                </Element>
              </Element>

              {/* Features List */}
              <Element
                is={Box}
                backgroundColor="rgba(0, 0, 0, 0.02)"
                padding="32px"
                margin="0"
                display="block"
                canvas
              >
                {plan.features.map((feature, index) => (
                  <Element
                    key={`${plan.id}-feature-${index}`}
                    is={Flex}
                    canvas
                    flexDirection="row"
                    justifyContent="start"
                    alignItems="center"
                    gap="gap-3"
                    margin={index < plan.features.length - 1 ? "mb-4" : ""}
                    wrap="nowrap"
                  >
                    {/* Check Icon */}
                    <Element
                      is={Box}
                      backgroundColor={primaryColor}
                      padding="4px"
                      margin="0"
                      borderRadius="50%"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      flexShrink="0"
                      canvas={false}
                    >
                      <div className="w-3 h-3 text-white">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                      </div>
                    </Element>

                    {/* Feature Text */}
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin="0"
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={feature}
                        tagName="span"
                        fontSize="text-base"
                        fontWeight="font-medium"
                        color="text-gray-700"
                        textAlign="text-left"
                        margin="0"
                      />
                    </Element>
                  </Element>
                ))}
              </Element>
            </Element>
          ))}
        </Element>

        {/* Bottom CTA */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="64px 0 0 0"
          margin="0"
          display="flex"
          justifyContent="center"
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
              text="All plans include a 14-day free trial. No credit card required."
              tagName="p"
              fontSize="text-base"
              fontWeight="font-medium"
              color="text-gray-600"
              textAlign="text-center"
              margin="0"
            />
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

ModernPricing1.craft = {
  displayName: "Modern Pricing 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "0",
    minHeight: "auto",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-8 lg:py-32",
    
    // Modern Pricing specific props
    sectionTitle: "Simple, Transparent Pricing",
    sectionDescription: "Choose the perfect plan for your needs. Always flexible to upgrade or downgrade.",
    plans: [
      {
        id: "starter",
        name: "Starter",
        description: "Perfect for individuals and small projects",
        monthlyPrice: "9",
        currency: "$",
        period: "/month",
        features: [
          "Up to 5 projects",
          "Basic analytics", 
          "24/7 support",
          "1GB storage",
          "Basic integrations"
        ],
        buttonText: "Get Started",
        buttonVariant: "outline"
      },
      {
        id: "professional",
        name: "Professional",
        description: "Best for growing teams and businesses",
        monthlyPrice: "29",
        currency: "$",
        period: "/month",
        popular: true,
        features: [
          "Unlimited projects",
          "Advanced analytics",
          "Priority support",
          "50GB storage",
          "All integrations",
          "Custom domains",
          "Team collaboration"
        ],
        buttonText: "Start Free Trial",
        buttonVariant: "default"
      },
      {
        id: "enterprise",
        name: "Enterprise",
        description: "Advanced features for large organizations",
        monthlyPrice: "99",
        currency: "$",
        period: "/month",
        features: [
          "Everything in Professional",
          "Custom integrations",
          "Dedicated support",
          "Unlimited storage",
          "SSO & SAML",
          "Advanced security",
          "Custom contracts"
        ],
        buttonText: "Contact Sales",
        buttonVariant: "outline"
      }
    ],
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