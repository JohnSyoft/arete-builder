import { Element } from "@craftjs/core";
import { Text as CraftText } from "@/components/blocks/Basic/Text";
import { Button as CraftButton } from "@/components/blocks/Basic/Button";
import { Image as CraftImage } from "@/components/blocks/Basic/Image";
import { Flex } from "@/components/blocks/Basic/Flex";
import { Grid } from "@/components/blocks/Basic/Grid";
import { Card } from "@/components/blocks/Basic/Card";
import { Box } from "@/components/blocks/Basic/Box";
import { Section, SectionProps } from "@/components/blocks/Basic/Section";

interface MarqueeItem {
  id: string;
  text: string;
  icon?: string;
}

interface HospitalityMarquee1Props extends SectionProps {
  // Marquee specific props
  items?: MarqueeItem[];
  speed?: "slow" | "medium" | "fast";
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  backgroundColor?: string;
  textColor?: string;
  // Settings
  showIcons?: boolean;
  showSeparators?: boolean;
  separatorIcon?: string;
  repeat?: number;
}

export function HospitalityMarquee1({
  items = [
    {
      id: "item-1",
      text: "Our hotel has been present for over 20 years",
      icon: "🏨"
    },
    {
      id: "item-2",
      text: "We make the best for all our customers",
      icon: "⭐"
    },
    {
      id: "item-3",
      text: "The resort is built in and around an 18 acres",
      icon: "🌴"
    },
    {
      id: "item-4",
      text: "Sustainable and meaningful ecosystem of hospitality",
      icon: "🌱"
    },
    {
      id: "item-5",
      text: "Award-winning luxury resort experience",
      icon: "🏆"
    },
    {
      id: "item-6",
      text: "World-class amenities and exceptional service",
      icon: "✨"
    }
  ],
  speed = "medium",
  direction = "left",
  pauseOnHover = true,
  backgroundColor = "#f8fafc",
  textColor = "#1f2937",
  showIcons = true,
  showSeparators = true,
  separatorIcon = "•",
  repeat = 3,
  ...props
}: HospitalityMarquee1Props) {
  // Set section defaults for marquee
  const marqueeProps = {
    backgroundColor,
    padding: "py-8 px-4",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  const getSpeedClass = () => {
    switch (speed) {
      case "slow": return "animate-marquee-slow";
      case "fast": return "animate-marquee-fast";
      default: return "animate-marquee";
    }
  };

  const getDirectionClass = () => {
    return direction === "right" ? "animate-marquee-reverse" : "animate-marquee";
  };

  // Create repeated items for seamless loop
  const repeatedItems = Array.from({ length: repeat }, () => items).flat();

  return (
    <Section {...marqueeProps}>
      <Element
        id="marqueeContent"
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
          overflow="hidden"
          className={`${pauseOnHover ? "hover:pause" : ""}`}
          canvas={false}
        >
          <Element
            is={Flex}
            canvas
            flexDirection="row"
            justifyContent="start"
            alignItems="center"
            gap="gap-8"
            margin=""
            className={`${getSpeedClass()} ${getDirectionClass()} whitespace-nowrap`}
          >
            {repeatedItems.map((item, index) => (
              <Element
                key={`${item.id}-${index}`}
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
                  gap="gap-4"
                  margin=""
                >
                  {/* Icon */}
                  {showIcons && item.icon && (
                    <Element
                      is={Box}
                      backgroundColor="bg-amber-100"
                      padding="p-2"
                      margin=""
                      display="block"
                      borderRadius="rounded-full"
                      width="w-8"
                      height="h-8"
                      canvas={false}
                    >
                      <CraftText
                        text={item.icon}
                        tagName="span"
                        fontSize="text-sm"
                        textAlign="text-center"
                      />
                    </Element>
                  )}

                  {/* Text */}
                  <Element
                    is={Box}
                    backgroundColor="transparent"
                    padding="0"
                    margin=""
                    display="block"
                    canvas={false}
                  >
                    <CraftText
                      text={item.text}
                      tagName="span"
                      fontSize="text-lg sm:text-xl"
                      fontWeight="font-medium"
                      color={textColor}
                      textAlign="text-center"
                      className="whitespace-nowrap"
                    />
                  </Element>

                  {/* Separator */}
                  {showSeparators && index < repeatedItems.length - 1 && (
                    <Element
                      is={Box}
                      backgroundColor="transparent"
                      padding="0"
                      margin=""
                      display="block"
                      canvas={false}
                    >
                      <CraftText
                        text={separatorIcon}
                        tagName="span"
                        fontSize="text-lg"
                        fontWeight="font-bold"
                        color="text-amber-500"
                        textAlign="text-center"
                      />
                    </Element>
                  )}
                </Element>
              </Element>
            ))}
          </Element>
        </Element>
      </Element>
    </Section>
  );
}

HospitalityMarquee1.craft = {
  displayName: "Hospitality Marquee 1",
  props: {
    // Section props
    backgroundColor: "#f8fafc",
    padding: "py-8 px-4",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Marquee specific props
    speed: "medium",
    direction: "left",
    pauseOnHover: true,
    backgroundColor: "#f8fafc",
    textColor: "#1f2937",
    showIcons: true,
    showSeparators: true,
    separatorIcon: "•",
    repeat: 3,
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
