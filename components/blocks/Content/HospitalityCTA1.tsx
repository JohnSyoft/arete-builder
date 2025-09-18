import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface CTAAction {
  id: string;
  text: string;
  link: string;
  variant?: "primary" | "secondary" | "outline";
  icon?: string;
}

interface HospitalityCTA1Props extends SectionProps {
  // CTA specific props
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  actions?: CTAAction[];
  // Settings
  showBackground?: boolean;
  showOverlay?: boolean;
  overlayOpacity?: number;
  textAlign?: "left" | "center" | "right";
  layout?: "full" | "contained";
  backgroundColor?: string;
  textColor?: string;
}

export function HospitalityCTA1({
  title = "Ready to Experience Luxury?",
  subtitle = "Book Your Stay",
  description = "Discover the perfect blend of comfort, elegance, and exceptional service at our world-class resort.",
  backgroundImage = "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&h=600&fit=crop",
  actions = [
    {
      id: "action-1",
      text: "Book Now",
      link: "/booking",
      variant: "primary",
      icon: "📅"
    },
    {
      id: "action-2",
      text: "View Rooms",
      link: "/rooms",
      variant: "outline",
      icon: "🏨"
    },
    {
      id: "action-3",
      text: "Contact Us",
      link: "/contact",
      variant: "secondary",
      icon: "📞"
    }
  ],
  showBackground = true,
  showOverlay = true,
  overlayOpacity = 0.7,
  textAlign = "center",
  layout = "full",
  backgroundColor = "#1f2937",
  textColor = "#ffffff",
  ...props
}: HospitalityCTA1Props) {
  // Set section defaults for CTA
  const ctaProps = {
    backgroundColor: showBackground ? backgroundColor : "#ffffff",
    padding: layout === "full" ? "py-0" : "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: layout === "contained",
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  return (
    <Section {...ctaProps}>
      <Element
        id="ctaContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        <Element
          is={Box}
          backgroundColor="transparent"
          padding="0"
          margin=""
          display="block"
          position="relative"
          width="w-full"
          height="h-96 sm:h-[500px] md:h-[600px]"
          overflow="hidden"
          canvas={false}
        >
          {/* Background Image */}
          {showBackground && backgroundImage && (
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
                alt="Luxury Resort"
                width="w-full"
                height="h-full"
                objectFit="object-cover"
                margin=""
                padding=""
              />
            </Element>
          )}

          {/* Overlay */}
          {showOverlay && (
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
              className={`opacity-${Math.round(overlayOpacity * 100)}`}
              canvas={false}
            />
          )}

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
              alignItems={textAlign === "center" ? "center" : textAlign === "left" ? "start" : "end"}
              gap="gap-8"
              margin={`text-${textAlign} h-full px-8 py-16`}
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
                  fontSize="text-lg sm:text-xl"
                  fontWeight="font-medium"
                  color={textColor}
                  textAlign={textAlign}
                  className="text-shadow-lg"
                />
              </Element>

              {/* Main Title */}
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
                  fontSize="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                  fontWeight="font-bold"
                  color={textColor}
                  textAlign={textAlign}
                  lineHeight="leading-tight"
                  className="text-shadow-2xl"
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
                  fontSize="text-lg sm:text-xl md:text-2xl"
                  fontWeight="font-normal"
                  color={textColor}
                  textAlign={textAlign}
                  lineHeight="leading-relaxed"
                  className="text-shadow-lg max-w-4xl"
                />
              </Element>

              {/* Action Buttons */}
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
                  justifyContent={textAlign === "center" ? "center" : textAlign === "left" ? "start" : "end"}
                  alignItems="center"
                  gap="gap-4"
                  margin=""
                  wrap="wrap"
                >
                  {actions.map((action, index) => (
                    <Element
                      key={action.id}
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
                        alignItems="center"
                        gap="gap-2"
                        margin=""
                      >
                        {action.icon && (
                          <Element
                            is={Box}
                            backgroundColor="transparent"
                            padding="0"
                            margin=""
                            display="block"
                            canvas={false}
                          >
                            <CraftText
                              text={action.icon}
                              tagName="span"
                              fontSize="text-lg"
                              textAlign="text-center"
                            />
                          </Element>
                        )}

                        <CraftButton
                          text={action.text}
                          size="lg"
                          backgroundColor={
                            action.variant === "primary" ? "#d97706" :
                            action.variant === "secondary" ? "#6b7280" :
                            "transparent"
                          }
                          textColor={action.variant === "outline" ? textColor : "#ffffff"}
                          borderColor={action.variant === "outline" ? textColor : ""}
                          borderRadius="rounded-full"
                          padding="px-8 py-4"
                          width="w-auto"
                          className="hover:scale-105 transition-all duration-300 shadow-2xl"
                        />
                      </Element>
                    </Element>
                  ))}
                </Element>
              </Element>
            </Element>
          </Element>

          {/* Decorative Elements */}
          <Element
            is={Box}
            backgroundColor="transparent"
            padding="0"
            margin=""
            display="block"
            position="absolute"
            top="top-8"
            left="left-8"
            canvas={false}
          >
            <Element
              is={Box}
              backgroundColor="bg-white/20"
              padding="p-4"
              margin=""
              display="block"
              width="w-16"
              height="h-16"
              borderRadius="rounded-full"
              canvas={false}
            >
              <CraftText
                text="✨"
                tagName="span"
                fontSize="text-2xl"
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
            position="absolute"
            bottom="bottom-8"
            right="right-8"
            canvas={false}
          >
            <Element
              is={Box}
              backgroundColor="bg-white/20"
              padding="p-4"
              margin=""
              display="block"
              width="w-16"
              height="h-16"
              borderRadius="rounded-full"
              canvas={false}
            >
              <CraftText
                text="🏆"
                tagName="span"
                fontSize="text-2xl"
                textAlign="text-center"
              />
            </Element>
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityCTA1.craft = {
  displayName: "Hospitality CTA 1",
  props: {
    // Section props
    backgroundColor: "#1f2937",
    padding: "py-0",
    hasContentWrapper: false,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // CTA specific props
    title: "Ready to Experience Luxury?",
    subtitle: "Book Your Stay",
    description: "Discover the perfect blend of comfort, elegance, and exceptional service at our world-class resort.",
    showBackground: true,
    showOverlay: true,
    overlayOpacity: 0.7,
    textAlign: "center",
    layout: "full",
    backgroundColor: "#1f2937",
    textColor: "#ffffff",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
