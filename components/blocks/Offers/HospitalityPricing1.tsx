import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface PricingFeature {
  id: string;
  text: string;
  included: boolean;
}

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  period: string;
  originalPrice?: string;
  discount?: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  popular?: boolean;
  image?: string;
}

interface HospitalityPricing1Props extends SectionProps {
  // Pricing specific props
  title?: string;
  subtitle?: string;
  description?: string;
  plans?: PricingPlan[];
  // Settings
  showImages?: boolean;
  showDiscounts?: boolean;
  showFeatures?: boolean;
  showButtons?: boolean;
  layout?: "grid" | "carousel";
  columns?: number;
  highlightPopular?: boolean;
}

export function HospitalityPricing1({
  title = "Exclusive offers",
  subtitle = "Our Packages",
  description = "Enjoy in resorts and awesome facilities.",
  plans = [
    {
      id: "plan-1",
      name: "Honeymoon package",
      description: "Perfect for romantic getaways",
      price: "$299",
      period: "per night",
      originalPrice: "$399",
      discount: "25%",
      features: [
        { id: "f1", text: "Luxury suite accommodation", included: true },
        { id: "f2", text: "Champagne welcome", included: true },
        { id: "f3", text: "Couples spa treatment", included: true },
        { id: "f4", text: "Private dinner setup", included: true },
        { id: "f5", text: "Airport transfers", included: true }
      ],
      buttonText: "Book Now",
      buttonLink: "/booking",
      popular: false,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=600&h=700&fit=crop"
    },
    {
      id: "plan-2",
      name: "Cocktail package",
      description: "Ideal for social gatherings",
      price: "$199",
      period: "per night",
      originalPrice: "$299",
      discount: "33%",
      features: [
        { id: "f1", text: "Premium room accommodation", included: true },
        { id: "f2", text: "Welcome cocktail", included: true },
        { id: "f3", text: "Access to bar facilities", included: true },
        { id: "f4", text: "Group activities", included: true },
        { id: "f5", text: "Complimentary breakfast", included: true }
      ],
      buttonText: "Book Now",
      buttonLink: "/booking",
      popular: true,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=700&fit=crop"
    },
    {
      id: "plan-3",
      name: "Massage package",
      description: "Relaxation and wellness focus",
      price: "$149",
      period: "per night",
      originalPrice: "$199",
      discount: "25%",
      features: [
        { id: "f1", text: "Standard room accommodation", included: true },
        { id: "f2", text: "60-minute massage session", included: true },
        { id: "f3", text: "Spa access", included: true },
        { id: "f4", text: "Wellness consultation", included: true },
        { id: "f5", text: "Healthy meal options", included: true }
      ],
      buttonText: "Book Now",
      buttonLink: "/booking",
      popular: false,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=700&fit=crop"
    }
  ],
  showImages = true,
  showDiscounts = true,
  showFeatures = true,
  showButtons = true,
  layout = "grid",
  columns = 3,
  highlightPopular = true,
  ...props
}: HospitalityPricing1Props) {
  // Set section defaults for pricing
  const pricingProps = {
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...pricingProps}>
      <Element
        id="pricingContent"
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
          margin="mb-16"
          display="block"
          canvas
        >
          <Element
            is={Flex}
            canvas
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="gap-4"
            margin="text-center"
          >
            {/* Subtitle */}
            <Element
              is={Box}
              backgroundColor="transparent"
              padding="0"
              margin=""
              display="block"
              canvas={false}
            >
              <CraftText
                text={subtitle}
                tagName="span"
                fontSize="text-lg"
                fontWeight="font-medium"
                color="text-amber-600"
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
              canvas={false}
            >
              <CraftText
                text={title}
                tagName="h2"
                fontSize="text-3xl sm:text-4xl md:text-5xl"
                fontWeight="font-bold"
                color="text-gray-900"
                textAlign="text-center"
                lineHeight="leading-tight"
              />
            </Element>

            {/* Description */}
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
                textAlign="text-center"
                lineHeight="leading-relaxed"
                className="max-w-2xl mx-auto"
              />
            </Element>
          </Element>
        </Element>

        {/* Pricing Cards */}
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          canvas
        >
          <Element
            is={Grid}
            canvas
            columns={columns}
            autoFit={false}
            minColumnWidth="300px"
            gap="gap-8"
            autoRows="auto"
          >
            {plans.map((plan, index) => (
              <Element
                key={plan.id}
                is={Card}
                variant="flat"
                shadow="2xl"
                borderRadius="rounded-2xl"
                backgroundColor="bg-white"
                borderColor={plan.popular && highlightPopular ? "border-amber-200" : "border-gray-200"}
                padding="p-0"
                margin=""
                hoverable={true}
                clickable={false}
                overflow="hidden"
                border={true}
                className={`group hover:shadow-3xl transition-all duration-500 ${plan.popular && highlightPopular ? 'ring-2 ring-amber-200' : ''}`}
                canvas
              >
                {/* Popular Badge */}
                {plan.popular && highlightPopular && (
                  <Element
                    is={Box}
                    backgroundColor="bg-amber-600"
                    padding="py-2 px-4"
                    margin=""
                    display="block"
                    position="absolute"
                    top="top-4"
                    right="right-4"
                    borderRadius="rounded-full"
                    canvas={false}
                  >
                    <CraftText
                      text="Most Popular"
                      tagName="span"
                      fontSize="text-xs"
                      fontWeight="font-bold"
                      color="text-white"
                      textAlign="text-center"
                      className="uppercase tracking-wider"
                    />
                  </Element>
                )}

                {/* Package Image */}
                {showImages && plan.image && (
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    width="w-full"
                    height="h-64"
                    canvas={false}
                  >
                    <CraftImage
                      src={plan.image}
                      alt={plan.name}
                      width="w-full"
                      height="h-full"
                      objectFit="object-cover"
                      margin=""
                      padding=""
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                  </Element>
                )}

                {/* Package Content */}
                <Element
                  is={Box}
                  backgroundColor="bg-white"
                  padding="p-8"
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
                    gap="gap-6"
                    margin=""
                  >
                    {/* Package Header */}
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
                        {/* Package Name */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={plan.name}
                            tagName="h3"
                            fontSize="text-xl sm:text-2xl"
                            fontWeight="font-bold"
                            color="text-gray-900"
                            textAlign="text-left"
                            lineHeight="leading-tight"
                          />
                        </Element>

                        {/* Package Description */}
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin=""
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
                          />
                        </Element>
                      </Element>
                    </Element>

                    {/* Pricing */}
                    <Element
                      is={Box}
                      backgroundColor="bg-gray-50"
                      padding="p-6"
                      margin=""
                      display="block"
                      borderRadius="rounded-xl"
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
                        {/* Current Price */}
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
                            gap="gap-1"
                            margin=""
                          >
                            <CraftText
                              text={plan.price}
                              tagName="span"
                              fontSize="text-3xl sm:text-4xl"
                              fontWeight="font-bold"
                              color="text-gray-900"
                              textAlign="text-left"
                            />
                            <CraftText
                              text={plan.period}
                              tagName="span"
                              fontSize="text-sm"
                              fontWeight="font-medium"
                              color="text-gray-600"
                              textAlign="text-left"
                            />
                          </Element>
                        </Element>

                        {/* Discount */}
                        {showDiscounts && plan.discount && (
                          <Element
                            is={Box}
                            backgroundColor="bg-amber-100"
                            padding="px-3 py-1"
                            margin=""
                            display="block"
                            borderRadius="rounded-full"
                            canvas={false}
                          >
                            <CraftText
                              text={`${plan.discount} OFF`}
                              tagName="span"
                              fontSize="text-xs"
                              fontWeight="font-bold"
                              color="text-amber-800"
                              textAlign="text-center"
                              className="uppercase tracking-wider"
                            />
                          </Element>
                        )}
                      </Element>

                      {/* Original Price */}
                      {showDiscounts && plan.originalPrice && (
                        <Element
                          is={Box}
                          backgroundColor="transparent"
                          padding="0"
                          margin="mt-2"
                          display="block"
                          canvas={false}
                        >
                          <CraftText
                            text={`Was ${plan.originalPrice}`}
                            tagName="span"
                            fontSize="text-sm"
                            fontWeight="font-normal"
                            color="text-gray-500"
                            textAlign="text-left"
                            className="line-through"
                          />
                        </Element>
                      )}
                    </Element>

                    {/* Features */}
                    {showFeatures && (
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
                          alignItems="stretch"
                          gap="gap-3"
                          margin=""
                        >
                          {plan.features.map((feature) => (
                            <Element
                              key={feature.id}
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
                                {/* Feature Icon */}
                                <Element
                                  is={Box}
                                  backgroundColor={feature.included ? "bg-green-100" : "bg-gray-100"}
                                  padding="p-1"
                                  margin=""
                                  display="block"
                                  width="w-5"
                                  height="h-5"
                                  borderRadius="rounded-full"
                                  canvas={false}
                                >
                                  <CraftText
                                    text={feature.included ? "✓" : "✗"}
                                    tagName="span"
                                    fontSize="text-xs"
                                    fontWeight="font-bold"
                                    color={feature.included ? "text-green-700" : "text-gray-500"}
                                    textAlign="text-center"
                                  />
                                </Element>

                                {/* Feature Text */}
                                <Element
                                  is={Box}
                                  backgroundColor="transparent"
                                  padding="0"
                                  margin=""
                                  display="block"
                                  canvas={false}
                                >
                                  <CraftText
                                    text={feature.text}
                                    tagName="span"
                                    fontSize="text-sm"
                                    fontWeight="font-normal"
                                    color={feature.included ? "text-gray-700" : "text-gray-400"}
                                    textAlign="text-left"
                                    className={feature.included ? "" : "line-through"}
                                  />
                                </Element>
                              </Element>
                            </Element>
                          ))}
                        </Element>
                      </Element>
                    )}

                    {/* CTA Button */}
                    {showButtons && (
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
                        display="block"
                        canvas={false}
                      >
                        <CraftButton
                          text={plan.buttonText}
                          size="lg"
                          backgroundColor={plan.popular && highlightPopular ? "#d97706" : "#1f2937"}
                          textColor="#ffffff"
                          borderRadius="rounded-full"
                          padding="px-8 py-4"
                          width="w-full"
                          className="hover:scale-105 transition-all duration-300"
                        />
                      </Element>
                    )}
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

HospitalityPricing1.craft = {
  displayName: "Hospitality Pricing 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Pricing specific props
    title: "Exclusive offers",
    subtitle: "Our Packages",
    description: "Enjoy in resorts and awesome facilities.",
    showImages: true,
    showDiscounts: true,
    showFeatures: true,
    showButtons: true,
    layout: "grid",
    columns: 3,
    highlightPopular: true,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
