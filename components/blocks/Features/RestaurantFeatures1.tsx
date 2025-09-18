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
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface RestaurantFeatures1Props extends SectionProps {
  // Features specific props
  features?: Feature[];
  // Settings
  showIcons?: boolean;
  showDescriptions?: boolean;
  layout?: "grid" | "carousel";
  columns?: number;
  iconSize?: "sm" | "md" | "lg";
  iconStyle?: "circle" | "square" | "rounded";
  backgroundColor?: string;
  textColor?: string;
  accentColor?: string;
}

export function RestaurantFeatures1({
  features = [
    {
      id: "feature-1",
      icon: "📦",
      title: "Fast delivery",
      description: "Within 30 minutes",
      color: "#d97706"
    },
    {
      id: "feature-2",
      icon: "🍽️",
      title: "Fresh food",
      description: "Made with love",
      color: "#d97706"
    },
    {
      id: "feature-3",
      icon: "⭐",
      title: "Best quality",
      description: "Premium ingredients",
      color: "#d97706"
    }
  ],
  showIcons = true,
  showDescriptions = true,
  layout = "grid",
  columns = 3,
  iconSize = "lg",
  iconStyle = "circle",
  backgroundColor = "#ffffff",
  textColor = "#1f2937",
  accentColor = "#d97706",
  ...props
}: RestaurantFeatures1Props) {
  // Set section defaults for features
  const featuresProps = {
    backgroundColor,
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    ...props,
  };

  const getIconSizeClass = () => {
    switch (iconSize) {
      case "sm": return "w-16 h-16";
      case "md": return "w-20 h-20";
      case "lg": return "w-24 h-24";
      default: return "w-24 h-24";
    }
  };

  const getIconStyleClass = () => {
    switch (iconStyle) {
      case "square": return "rounded-lg";
      case "rounded": return "rounded-2xl";
      case "circle": return "rounded-full";
      default: return "rounded-full";
    }
  };

  return (
    <Section {...featuresProps}>
      <Element
        id="restaurantFeaturesContent"
        is={Box}
        backgroundColor="transparent"
        padding="0"
        margin="0"
        display="block"
        canvas
      >
        <Element
          is={Grid}
          canvas
          columns={columns}
          autoFit={false}
          minColumnWidth="250px"
          gap="gap-8"
          autoRows="auto"
        >
          {features.map((feature, index) => (
            <Element
              key={feature.id}
              is={Card}
              variant="flat"
              shadow="lg"
              borderRadius="rounded-2xl"
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
                flexDirection="row"
                justifyContent="start"
                alignItems="center"
                gap="gap-6"
                margin=""
              >
                {/* Icon */}
                {showIcons && (
                  <Element
                    is={Box}
                    backgroundColor="bg-white"
                    padding="p-6"
                    margin=""
                    display="block"
                    width={getIconSizeClass()}
                    height={getIconSizeClass()}
                    borderRadius={getIconStyleClass()}
                    shadow="lg"
                    className="group-hover:bg-amber-50 transition-colors duration-300"
                    canvas={false}
                  >
                    <CraftText
                      text={feature.icon}
                      tagName="span"
                      fontSize="text-3xl"
                      textAlign="text-center"
                    />
                  </Element>
                )}

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
                        text={feature.title}
                        tagName="h3"
                        fontSize="text-xl sm:text-2xl"
                        fontWeight="font-bold"
                        color={textColor}
                        textAlign="text-left"
                        lineHeight="leading-tight"
                        className="group-hover:text-amber-600 transition-colors duration-300"
                      />
                    </Element>

                    {/* Description */}
                    {showDescriptions && (
                      <Element
                        is={Box}
                        backgroundColor="transparent"
                        padding="0"
                        margin=""
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
                        />
                      </Element>
                    )}
                  </Element>
                </Element>
              </Element>
            </Element>
          ))}
        </Element>
      </Element>
    </Section>
  );
}

RestaurantFeatures1.craft = {
  displayName: "Restaurant Features 1",
  props: {
    // Section props
    backgroundColor: "#ffffff",
    padding: "py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8",
    hasContentWrapper: true,
    contentMaxWidth: "7xl",
    contentPadding: "px-0",
    // Features specific props
    showIcons: true,
    showDescriptions: true,
    layout: "grid",
    columns: 3,
    iconSize: "lg",
    iconStyle: "circle",
    backgroundColor: "#ffffff",
    textColor: "#1f2937",
    accentColor: "#d97706",
  },
  rules: {
    canDrag: () => true,
    canMoveIn: () => true,
    canMoveOut: () => true,
  },
  isCanvas: true, // Allow components to be dropped into this section
};
